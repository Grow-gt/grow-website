import { notFound } from "next/navigation";
import { Campaigns } from "@/components/Campaigns";
import { Header } from "@/components/Header";
import { Stories } from "@/components/Stories";
import { HowWeWork } from "@/components/HowWeWork";
import { Closing, Donate, Faith, Footer, Hero, Impact, Start, Transparency, Ways, Why } from "@/components/Sections";
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
        <Why t={dict.why} />
        <HowWeWork t={dict.how} />
        <Start t={dict.start} />
        <Faith t={dict.faith} />
        <Transparency t={dict.transparency} />
        <Impact t={dict.impact} />
        <Ways t={dict.ways} />
        <Campaigns t={dict.campaigns} lang={lang} />
        <Stories t={dict.stories} />
        <Donate t={dict.donate} lang={lang} />
        <Closing t={dict.closing} />
      </main>
      <Footer t={dict.footer} lang={lang} />
    </>
  );
}
