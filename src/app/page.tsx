import { Header } from "@/components/Header";
import { HowWeWork } from "@/components/HowWeWork";
import { Newsletter } from "@/components/Newsletter";
import { Footer, Hero, Impact, Stories, Transparency, Ways } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowWeWork />
        <Transparency />
        <Impact />
        <Ways />
        <Stories />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
