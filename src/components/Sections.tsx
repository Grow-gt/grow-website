import Image from "next/image";
import { social, stats, stories, ways } from "@/content/home";
import type { Dictionary } from "@/i18n/dictionaries/es";

const btnBase = "rounded-full font-bold transition-colors duration-150 hover:bg-purple hover:!text-white";

export function Hero({ t }: { t: Dictionary["hero"] }) {
  return (
    <section id="inicio" className="container-grow pt-[clamp(40px,6vw,80px)] pb-[clamp(72px,9vw,120px)]">
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-center gap-[clamp(40px,5vw,72px)]">
        <div>
          <p className="eyebrow mb-[18px] text-teal">{t.eyebrow}</p>
          <h1 className="max-w-[11ch] font-display text-[clamp(48px,6.6vw,96px)] leading-[0.94] font-extrabold tracking-[-0.045em] text-balance text-purple">
            {t.title}
          </h1>
          <p className="mt-6 max-w-[44ch] text-[clamp(18px,1.5vw,20px)] text-pretty text-purple-muted">{t.body}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#sumate" className={`${btnBase} bg-turquoise px-7 py-4`}>
              {t.ctaVolunteer}
            </a>
            <a href="#sumate" className={`${btnBase} px-7 py-4 shadow-[inset_0_0_0_2px_#46074F]`}>
              {t.ctaCompany}
            </a>
          </div>
        </div>
        <div className="relative aspect-[1/0.95]">
          <div className="absolute inset-0 overflow-hidden rounded-[40%_40%_8%_40%] bg-lilac">
            <Image
              src="/photos/hero.jpg"
              alt={t.photoAlt}
              fill
              priority
              sizes="(min-width: 1000px) 600px, 100vw"
              className="object-cover"
            />
          </div>
          <Image
            src="/brand/abrazo-izq.png"
            alt=""
            width={188}
            height={337}
            className="absolute -bottom-[6%] -left-[4%] h-auto w-[18%]"
          />
        </div>
      </div>
    </section>
  );
}

export function Transparency({ t }: { t: Dictionary["transparency"] }) {
  return (
    <section aria-labelledby="transparencia-title" className="relative overflow-hidden bg-purple text-white">
      <Image
        src="/brand/abrazo-izq.png"
        alt=""
        width={188}
        height={337}
        className="absolute -top-[12vw] -left-[4vw] h-auto w-[min(20vw,280px)] opacity-90"
      />
      <div className="container-grow section-y relative grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-12 !pl-[max(clamp(20px,4vw,48px),calc(min(20vw,280px)-4vw+8px))]">
        <div>
          <p className="eyebrow mb-3.5 text-turquoise">{t.eyebrow}</p>
          <h2 id="transparencia-title" className="h2-display">
            {t.title}
          </h2>
        </div>
        <div>
          <p className="text-[19px] text-pretty text-lilac">{t.body}</p>
          <a
            href="#"
            className="mt-7 inline-flex rounded-full px-[26px] py-3.5 font-bold !text-white shadow-[inset_0_0_0_2px_#01E1C8] transition-colors duration-150 hover:bg-turquoise hover:!text-purple"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}

export function Impact({ t }: { t: Dictionary["impact"] }) {
  // Sin datos verificados, la sección no se muestra.
  if (stats.some((s) => s.value === null)) return null;
  return (
    <section aria-label={t.eyebrow} className="container-grow py-[clamp(64px,8vw,104px)]">
      <p className="eyebrow mb-7 text-teal">{t.eyebrow}</p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-5">
        {stats.map((s, i) => (
          <div key={i} className="border-t-[3px] pt-5" style={{ borderColor: s.color }}>
            <p className="font-display text-[clamp(56px,7vw,96px)] leading-[0.9] font-extrabold tracking-[-0.045em] text-purple">
              {s.value}
            </p>
            <p className="mt-3 font-bold text-purple">{t.stats[i].label}</p>
            <p className="text-sm text-purple-muted">{t.stats[i].source}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Ways({ t }: { t: Dictionary["ways"] }) {
  return (
    <section id="sumate" aria-labelledby="sumate-title" className="bg-lilac">
      <div className="container-grow section-y">
        <div className="mb-10">
          <p className="eyebrow mb-3.5 text-teal">{t.eyebrow}</p>
          <h2 id="sumate-title" className="h2-display max-w-[14ch] text-purple">
            {t.title}
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,230px),1fr))] gap-4">
          {ways.map((w, i) => {
            const text = t.items[i];
            const fg = w.featured ? "#FFFFFF" : "#46074F";
            return (
              <a
                key={i}
                href={w.href}
                className={`flex min-h-80 flex-col gap-5 rounded-card p-[30px] transition-transform duration-200 hover:-translate-y-1 ${
                  w.featured ? "bg-purple !text-white" : "bg-white !text-purple"
                }`}
              >
                <svg
                  viewBox="0 0 48 48"
                  className="h-[52px] w-[52px]"
                  fill="none"
                  stroke={fg}
                  strokeWidth={2.6}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d={w.icon.d} />
                  <circle cx={w.icon.cx} cy={w.icon.cy} r={w.icon.r} fill="#01E1C8" stroke="none" />
                </svg>
                <h3 className="font-display text-[28px] leading-[1.02] font-extrabold tracking-[-0.02em]">{text.title}</h3>
                <p className="flex-1 text-base opacity-90">{text.body}</p>
                <span className="flex items-center gap-2 font-bold">
                  {text.cta}
                  <span
                    aria-hidden
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-turquoise text-[15px] text-purple"
                  >
                    →
                  </span>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Stories({ t }: { t: Dictionary["stories"] }) {
  return (
    <section id="historias" aria-labelledby="historias-title" className="container-grow section-y">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow mb-3.5 text-teal">{t.eyebrow}</p>
          <h2 id="historias-title" className="h2-display text-purple">
            {t.title}
          </h2>
        </div>
        <a href="#" className={`${btnBase} px-[22px] py-3 shadow-[inset_0_0_0_2px_#46074F]`}>
          {t.seeAll}
        </a>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-5">
        {stories.map((s, i) => {
          const text = t.items[i];
          return (
            <a key={i} href={s.href} className="group flex flex-col gap-4 !text-ink">
              <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-lilac">
                <Image
                  src={s.photo}
                  alt=""
                  fill
                  sizes="(min-width: 1000px) 400px, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <span
                className="self-start rounded-full px-3 py-[5px] text-xs font-bold tracking-[0.12em] text-purple uppercase"
                style={{ background: s.tag }}
              >
                {text.category}
              </span>
              <h3 className="font-display text-2xl leading-[1.1] font-bold tracking-[-0.015em] transition-colors group-hover:text-purple-bright">
                {text.title}
              </h3>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export function Footer({ t }: { t: Dictionary["footer"] }) {
  return (
    <footer className="bg-purple text-white">
      <div className="container-grow pt-[72px] pb-8">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-8">
          <div className="flex flex-col gap-[18px]">
            <Image
              src="/brand/logo-white.png"
              alt="GROW"
              width={1275}
              height={522}
              className="h-[46px] w-auto self-start"
            />
            <p className="max-w-[28ch] text-[15px] text-on-purple-muted">{t.tagline}</p>
          </div>
          {t.columns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-2.5">
              <p className="mb-1 text-xs font-bold tracking-[0.16em] text-turquoise uppercase">{col.heading}</p>
              {col.links.map((l) => (
                <a key={l} href="#" className="text-[15px] !text-white transition-colors hover:!text-turquoise">
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-wrap justify-between gap-4 border-t border-white/[0.18] pt-6 text-[13px] text-on-purple-muted">
          <span>© 2026 GROW · {t.legal}</span>
          <div className="flex gap-5">
            {social.map((s) => (
              <a
                key={s.name}
                href={s.url ?? "#"}
                rel={s.url ? "noopener" : undefined}
                className="!text-on-purple-muted hover:!text-turquoise"
              >
                {s.name}
              </a>
            ))}
            <a href="#" className="!text-on-purple-muted hover:!text-turquoise">
              {t.privacy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
