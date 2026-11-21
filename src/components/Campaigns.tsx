import { campaigns } from "@/content/home";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/es";
import { BagIllustration } from "./Christmas";

/**
 * Tarjetas de campañas. Se usa en la home (#campanas) y en /{lang}/campanas.
 * Para una nueva campaña: añadir su slug en `campaigns` (src/content/home.ts),
 * su texto en `campaigns.items` de los diccionarios y su página en
 * src/app/[lang]/campanas/{slug}/page.tsx.
 */
export function Campaigns({
  t,
  lang,
  headingLevel = "h2",
}: {
  t: Dictionary["campaigns"];
  lang: Locale;
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;
  return (
    <section id="campanas" aria-labelledby="campanas-title" className="container-grow section-y scroll-mt-20">
      <div className="reveal mb-10 grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-end gap-x-14 gap-y-6">
        <div>
          <p className="eyebrow mb-3.5 text-teal">{t.eyebrow}</p>
          <Heading id="campanas-title" className="h2-display text-purple">
            {t.title}
          </Heading>
        </div>
        <p className="text-[19px] text-pretty text-purple-muted">{t.body}</p>
      </div>
      <div className="flex flex-col gap-5">
        {t.items.map((c, i) => (
          <a
            key={c.title}
            href={`/${lang}/campanas/${campaigns[i].slug}`}
            className="group reveal grid overflow-hidden rounded-panel bg-lilac !text-purple transition-transform duration-200 hover:-translate-y-1 min-[800px]:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
          >
            <div className="relative aspect-[4/3] bg-purple min-[800px]:aspect-auto min-[800px]:min-h-[320px]">
              <div className="absolute inset-[10%] transition-transform duration-300 group-hover:scale-105">
                <BagIllustration label="" />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4 p-[clamp(28px,4vw,56px)]">
              <span className="self-start rounded-full bg-turquoise px-3 py-[5px] text-xs font-bold tracking-[0.12em] text-purple uppercase">
                {c.status}
              </span>
              <h3 className="font-display text-[clamp(30px,3.2vw,44px)] leading-none font-extrabold tracking-[-0.03em]">
                {c.title}
              </h3>
              <p className="max-w-[48ch] text-lg text-purple-muted">{c.body}</p>
              <span className="mt-2 flex items-center gap-2 font-bold">
                {c.cta}
                <span
                  aria-hidden
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-turquoise text-[15px] text-purple transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
