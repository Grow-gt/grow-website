import { contactEmail, mailtoUrl, whatsappUrl } from "@/content/home";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/es";
import { ArrowLink, EmailButton, WhatsAppButton } from "./Sections";

type T = Dictionary["women"];

const ink = "#46074F";

// Íconos de línea (mismo estilo que Súmate): aportar, emprender, devolver, otra mamá.
const stepIcons = [
  "M24 40C14 33 7 27 7 19c0-5 4-9 9-9 4 0 6 2 8 5 2-3 4-5 8-5 5 0 9 4 9 9 0 8-7 14-17 21z",
  "M7 20h34l-4-10H11zM10 20v19h28V20M20 39v-10h8v10",
  "M24 8a16 16 0 1 0 16 16M40 9v9h-9M20 20h8M20 26h8",
  "M17 13a5 5 0 1 0 0.01 0M31 13a5 5 0 1 0 0.01 0M7 38c0-6 4-10 10-10s10 4 10 10M21 38c0-6 4-10 10-10s10 4 10 10",
];
const dotColors = ["#01E1C8", "#02ABA6", "#FF7A5C", "#01E1C8"];

function StepIcon({ i, className = "h-11 w-11" }: { i: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke={ink}
      strokeWidth={2.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={stepIcons[i]} />
      <circle cx={40} cy={7} r={4} fill={dotColors[i]} stroke="none" />
    </svg>
  );
}

// Arcos del ciclo: el círculo (r=150, centro 200,200) con huecos donde van los pasos.
const R = 150;
const pt = (deg: number) => {
  const a = (deg * Math.PI) / 180;
  return `${(200 + R * Math.cos(a)).toFixed(1)} ${(200 + R * Math.sin(a)).toFixed(1)}`;
};
const arcs = [
  [-62, -28],
  [28, 62],
  [118, 152],
  [208, 242],
];
// Posición de cada paso (arriba, derecha, abajo, izquierda) en % del contenedor.
const nodePos = ["left-1/2 top-[12.5%]", "left-[87.5%] top-1/2", "left-1/2 top-[87.5%]", "left-[12.5%] top-1/2"];

/** Ciclo del fondo rotativo, inspirado en el de Kiva y adaptado a la marca. */
export function CycleDiagram({ t, tone = "white" }: { t: T["cycle"]; tone?: "white" | "lilac" }) {
  const nodeBg = tone === "white" ? "bg-white" : "bg-lilac";
  return (
    <figure className="relative mx-auto aspect-square w-full max-w-[460px]" aria-label={t.label} role="img">
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <marker
            id="cycle-arrow"
            viewBox="0 0 10 10"
            refX="5"
            refY="5"
            markerWidth="3.2"
            markerHeight="3.2"
            orient="auto"
          >
            <path d="M0 0L10 5L0 10z" fill="#02ABA6" />
          </marker>
        </defs>
        {arcs.map(([a, b]) => (
          <path
            key={a}
            d={`M ${pt(a)} A ${R} ${R} 0 0 1 ${pt(b)}`}
            fill="none"
            stroke="#02ABA6"
            strokeWidth={13}
            strokeLinecap="round"
            markerEnd="url(#cycle-arrow)"
          />
        ))}
      </svg>
      {t.steps.map((label, i) => (
        <div
          key={label}
          className={`reveal absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 ${nodePos[i]}`}
          aria-hidden
        >
          <span
            className={`flex h-[clamp(56px,16vw,76px)] w-[clamp(56px,16vw,76px)] items-center justify-center rounded-full ${nodeBg} shadow-[0_6px_20px_rgba(70,7,79,0.10)]`}
          >
            <StepIcon i={i} className="h-[55%] w-[55%]" />
          </span>
          <span className="max-w-[11ch] text-center font-display text-[clamp(14px,3.6vw,18px)] leading-tight font-extrabold text-purple">
            {label}
          </span>
        </div>
      ))}
      <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
        <span className="float flex h-[30%] w-[30%] items-center justify-center rounded-full bg-turquoise text-center font-display text-[clamp(15px,3.8vw,20px)] leading-tight font-extrabold text-purple">
          {t.center}
        </span>
      </div>
    </figure>
  );
}

/** Bloque de la home: texto + ciclo, con enlace a /{lang}/mujeres. */
export function WomenHome({ t, cycle, lang }: { t: T["home"]; cycle: T["cycle"]; lang: Locale }) {
  return (
    <section id="mujeres" aria-labelledby="mujeres-title" className="scroll-mt-20 bg-lilac">
      <div className="container-grow section-y grid items-center gap-[clamp(40px,5vw,72px)] min-[1000px]:grid-cols-[1fr_1fr]">
        <div className="reveal">
          <p className="eyebrow mb-3.5 text-teal">{t.eyebrow}</p>
          <h2 id="mujeres-title" className="h2-display text-purple">
            {t.title}
          </h2>
          <p className="mt-6 text-[19px] text-pretty text-purple-muted">{t.body}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={`/${lang}/mujeres`}
              className="inline-flex rounded-full bg-purple px-7 py-4 font-bold !text-white transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-purple-bright"
            >
              {t.cta}
            </a>
            <ArrowLink href={`/${lang}/mujeres#apoyar`} className="">
              {t.donate}
            </ArrowLink>
          </div>
        </div>
        <CycleDiagram t={cycle} tone="white" />
      </div>
    </section>
  );
}

/** «¿No usas WhatsApp? Escríbenos a …» */
function EmailNote({ t, className = "" }: { t: T["email"]; className?: string }) {
  return (
    <p className={`text-[15px] text-purple-muted ${className}`}>
      {t.noWhatsapp}{" "}
      <a href={mailtoUrl(t.subject, t.body)} className="font-bold !text-purple underline underline-offset-4">
        {contactEmail}
      </a>
    </p>
  );
}

export function WomenHero({ t, cycle, email }: { t: T["hero"]; cycle: T["cycle"]; email: T["email"] }) {
  return (
    <section className="container-grow pt-[clamp(40px,6vw,80px)] pb-[clamp(72px,9vw,120px)]">
      <div className="grid items-center gap-[clamp(40px,4vw,64px)] min-[1000px]:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="eyebrow rise mb-[18px] text-teal">{t.eyebrow}</p>
          <h1 className="rise font-display text-[clamp(36px,5.6vw,72px)] leading-[0.98] font-extrabold tracking-[-0.045em] text-purple [animation-delay:80ms] min-[1000px]:text-[clamp(40px,3.8vw,56px)]">
            {t.titleLines.map((line) => (
              <span key={line} className="block min-[1000px]:whitespace-nowrap">
                {line}
              </span>
            ))}
          </h1>
          <p className="rise mt-6 max-w-[52ch] text-[clamp(18px,1.5vw,20px)] text-pretty text-purple-muted [animation-delay:160ms]">
            {t.body}
          </p>
          <div className="rise mt-9 flex flex-wrap gap-3 [animation-delay:240ms]">
            <WhatsAppButton href={whatsappUrl(t.whatsappText)}>{t.cta}</WhatsAppButton>
            <EmailButton href={mailtoUrl(email.subject, email.body)}>{t.emailCta}</EmailButton>
          </div>
        </div>
        <div className="hero-photo rounded-[40%_40%_8%_40%] bg-lilac p-[clamp(16px,3vw,36px)]">
          <CycleDiagram t={cycle} tone="white" />
        </div>
      </div>
    </section>
  );
}

export function WomenWho({ t }: { t: T["who"] }) {
  return (
    <section className="bg-lilac">
      <div className="container-grow section-y">
        <div className="reveal mb-10">
          <p className="eyebrow mb-3.5 text-teal">{t.eyebrow}</p>
          <h2 className="h2-display max-w-[16ch] text-purple">{t.title}</h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-4">
          {t.items.map((item, i) => (
            <div
              key={item.title}
              className="reveal flex flex-col gap-4 rounded-card bg-white p-[30px] transition-transform duration-200 hover:-translate-y-1"
            >
              <span aria-hidden className="h-4 w-4 rounded-full" style={{ background: dotColors[i + 1] }} />
              <h3 className="font-display text-[26px] leading-[1.05] font-extrabold tracking-[-0.02em] text-purple">
                {item.title}
              </h3>
              <p className="text-purple-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WomenHow({ t }: { t: T["how"] }) {
  return (
    <section className="container-grow section-y">
      <div className="reveal mb-10 grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-end gap-x-14 gap-y-6">
        <div>
          <p className="eyebrow mb-3.5 text-teal">{t.eyebrow}</p>
          <h2 className="h2-display text-purple">{t.title}</h2>
        </div>
        <p className="text-[19px] text-pretty text-purple-muted">{t.body}</p>
      </div>
      <ol className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,230px),1fr))] gap-4">
        {t.steps.map((s, i) => (
          <li
            key={s.title}
            className="reveal flex flex-col gap-4 rounded-card bg-lilac p-[30px] transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="flex items-start justify-between">
              <span className="font-display text-[56px] leading-[0.8] font-extrabold tracking-[-0.04em] text-turquoise">
                {String(i + 1).padStart(2, "0")}
              </span>
              <StepIcon i={i} />
            </div>
            <h3 className="font-display text-[26px] leading-[1.05] font-extrabold tracking-[-0.02em] text-purple">
              {s.title}
            </h3>
            <p className="text-purple-muted">{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function WomenWays({ t, email }: { t: T["ways"]; email: T["email"] }) {
  return (
    <section id="apoyar" aria-labelledby="apoyar-title" className="scroll-mt-20 bg-lilac">
      <div className="container-grow section-y">
        <div className="reveal mb-10">
          <p className="eyebrow mb-3.5 text-teal">{t.eyebrow}</p>
          <h2 id="apoyar-title" className="h2-display max-w-[16ch] text-purple">
            {t.title}
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-4">
          {t.items.map((w, i) => {
            const featured = i === 0;
            return (
              <a
                key={w.title}
                href={whatsappUrl(w.whatsappText)}
                target="_blank"
                rel="noopener"
                className={`reveal flex min-h-72 flex-col gap-4 rounded-card p-[30px] transition-transform duration-200 hover:-translate-y-1 ${
                  featured ? "bg-purple !text-white" : "bg-white !text-purple"
                }`}
              >
                <h3 className="font-display text-[28px] leading-[1.02] font-extrabold tracking-[-0.02em]">{w.title}</h3>
                <p className="flex-1 text-base opacity-90">{w.body}</p>
                <span className="flex items-center gap-2 font-bold">
                  {w.cta}
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
        <EmailNote t={email} className="reveal mt-8 text-center" />
      </div>
    </section>
  );
}

export function WomenTrust({ t }: { t: T["trust"] }) {
  return (
    <section className="bg-purple text-white">
      <div className="reveal container-grow section-y grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-12">
        <div>
          <p className="eyebrow mb-3.5 text-turquoise">{t.eyebrow}</p>
          <h2 className="h2-display">{t.title}</h2>
        </div>
        <p className="text-[19px] text-pretty text-lilac">{t.body}</p>
      </div>
    </section>
  );
}
