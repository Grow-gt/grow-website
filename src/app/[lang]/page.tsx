import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { HowWeWork } from "@/components/HowWeWork";
import { Newsletter } from "@/components/Newsletter";
import { Footer, Hero, Impact, Stories, Transparency, Ways } from "@/components/Sections";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <Header lang={lang} nav={dict.nav} cta={dict.header.cta} a11y={dict.a11y} />
      <main>
        <Hero t={dict.hero} />
        <HowWeWork t={dict.how} />
        <Transparency t={dict.transparency} />
        <Impact t={dict.impact} />
        <Ways t={dict.ways} />
        <Stories t={dict.stories} />
        <Newsletter t={dict.newsletter} />
      </main>
      <Footer t={dict.footer} />
    </>
  );
}
