import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ChristmasBag,
  ChristmasClosing,
  ChristmasGift,
  ChristmasHero,
  ChristmasTransparency,
  ChristmasWays,
  ChristmasWhy,
} from "@/components/Christmas";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Sections";
import { hasLocale, indexableLocales, ogLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

// Landing de la campaña navideña: útiles escolares y regalos. Misma ruta en ambos idiomas.
export async function generateMetadata({ params }: PageProps<"/[lang]/campanas/navidad">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { christmas } = await getDictionary(lang);
  const languages: Record<string, string> = Object.fromEntries(indexableLocales.map((l) => [l, `/${l}/campanas/navidad`]));
  languages["x-default"] = "/es/campanas/navidad";
  return {
    title: christmas.meta.title,
    description: christmas.meta.description,
    alternates: { canonical: `/${lang}/campanas/navidad`, languages },
    openGraph: {
      type: "website",
      siteName: "GROW",
      url: `/${lang}/campanas/navidad`,
      title: christmas.meta.title,
      description: christmas.meta.description,
      locale: ogLocale[lang],
    },
    twitter: { card: "summary_large_image", title: christmas.meta.title, description: christmas.meta.description },
  };
}

export default async function ChristmasPage({ params }: PageProps<"/[lang]/campanas/navidad">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const t = dict.christmas;

  return (
    <>
      <Header lang={lang} nav={dict.nav} cta={dict.header.cta} a11y={dict.a11y} />
      <main>
        <ChristmasHero t={t.hero} donateText={t.ways.items[0].whatsappText} />
        <ChristmasWhy t={t.why} />
        <ChristmasBag t={t.bag} />
        <ChristmasGift t={t.gift} />
        <ChristmasWays t={t.ways} />
        <ChristmasTransparency t={t.transparency} />
        <ChristmasClosing t={t.closing} />
      </main>
      <Footer t={dict.footer} lang={lang} />
    </>
  );
}
