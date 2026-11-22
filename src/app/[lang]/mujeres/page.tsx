import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Sections";
import { WomenHero, WomenHow, WomenTrust, WomenWays, WomenWho } from "@/components/Women";
import { hasLocale, indexableLocales, ogLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

// Programa «Mamás que emprenden» (fondo rotativo). Misma ruta en ambos idiomas.
export async function generateMetadata({ params }: PageProps<"/[lang]/mujeres">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { women } = await getDictionary(lang);
  const languages: Record<string, string> = Object.fromEntries(indexableLocales.map((l) => [l, `/${l}/mujeres`]));
  languages["x-default"] = "/es/mujeres";
  return {
    title: women.meta.title,
    description: women.meta.description,
    alternates: { canonical: `/${lang}/mujeres`, languages },
    openGraph: {
      type: "website",
      siteName: "Grow Together",
      url: `/${lang}/mujeres`,
      title: women.meta.title,
      description: women.meta.description,
      locale: ogLocale[lang],
    },
    twitter: { card: "summary_large_image", title: women.meta.title, description: women.meta.description },
  };
}

export default async function WomenPage({ params }: PageProps<"/[lang]/mujeres">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.women;

  return (
    <>
      <Header lang={lang} nav={dict.nav} cta={dict.header.cta} a11y={dict.a11y} />
      <main>
        <WomenHero t={t.hero} cycle={t.cycle} email={t.email} />
        <WomenWho t={t.who} />
        <WomenHow t={t.how} />
        <WomenWays t={t.ways} email={t.email} />
        <WomenTrust t={t.trust} />
      </main>
      <Footer t={dict.footer} lang={lang} />
    </>
  );
}
