import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { hasLocale, indexableLocales, locales, ogLocale, SITE_URL, translated } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import "../globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

// Ambas versiones se generan estáticas al compilar; un idioma no válido → notFound().
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const viewport: Viewport = { themeColor: "#46074F" };

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);

  const languages: Record<string, string> = Object.fromEntries(indexableLocales.map((l) => [l, `/${l}`]));
  languages["x-default"] = "/es";

  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    applicationName: "GROW",
    alternates: { canonical: `/${lang}`, languages },
    robots: translated[lang] ? { index: true, follow: true } : { index: false, follow: true },
    openGraph: {
      type: "website",
      siteName: "GROW",
      url: `/${lang}`,
      title: dict.meta.title,
      description: dict.meta.description,
      locale: ogLocale[lang],
      alternateLocale: indexableLocales.filter((l) => l !== lang).map((l) => ogLocale[l]),
    },
    twitter: { card: "summary_large_image", title: dict.meta.title, description: dict.meta.description },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} className={`${bricolage.variable} ${figtree.variable}`}>
      <body>
        <JsonLd lang={lang} dict={dict} />
        {children}
      </body>
    </html>
  );
}
