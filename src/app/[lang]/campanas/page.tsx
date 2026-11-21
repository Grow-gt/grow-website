import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Campaigns } from "@/components/Campaigns";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Sections";
import { hasLocale, indexableLocales, ogLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

// Índice de campañas: /{lang}/campanas.
export async function generateMetadata({ params }: PageProps<"/[lang]/campanas">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { campaigns } = await getDictionary(lang);
  const languages: Record<string, string> = Object.fromEntries(indexableLocales.map((l) => [l, `/${l}/campanas`]));
  languages["x-default"] = "/es/campanas";
  return {
    title: campaigns.meta.title,
    description: campaigns.meta.description,
    alternates: { canonical: `/${lang}/campanas`, languages },
    openGraph: {
      type: "website",
      siteName: "GROW",
      url: `/${lang}/campanas`,
      title: campaigns.meta.title,
      description: campaigns.meta.description,
      locale: ogLocale[lang],
    },
  };
}

export default async function CampaignsPage({ params }: PageProps<"/[lang]/campanas">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} nav={dict.nav} cta={dict.header.cta} a11y={dict.a11y} />
      <main>
        <Campaigns t={dict.campaigns} lang={lang} headingLevel="h1" />
      </main>
      <Footer t={dict.footer} lang={lang} />
    </>
  );
}
