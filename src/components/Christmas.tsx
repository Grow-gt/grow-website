import Image from "next/image";
import { contactEmail, mailtoUrl, whatsappUrl } from "@/content/home";
import type { Dictionary } from "@/i18n/dictionaries/es";
import { brand } from "./Brand";
import { EmailButton, WhatsAppButton } from "./Sections";

type T = Dictionary["christmas"];

const ink = "#46074F";

/** Línea «¿No usas WhatsApp? Escríbenos a info@…» con enlace de correo. */
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

/** Estrella de cinco puntas (decorativa). */
function Star({ className, color = "#01E1C8" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill={color} d="M12 1.5l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.7-6.2 3.7 1.6-7L2 8.7l7.1-.6z" />
    </svg>
  );
}

/** Ilustración: bolsa de útiles con corazón, en la paleta GROW. */
export function BagIllustration({ label }: { label: string }) {
  return (
    <svg viewBox="0 0 400 400" role="img" aria-label={label} className="h-full w-full">
      {/* cuaderno */}
      <g transform="rotate(-8 170 150)">
        <rect x="118" y="88" width="104" height="132" rx="10" fill="#FFFFFF" />
        <path d="M138 88v132" stroke="#EADFEF" strokeWidth="6" />
        <path d="M152 122h52M152 140h52M152 158h40" stroke="#EADFEF" strokeWidth="6" strokeLinecap="round" />
      </g>
      {/* lápiz */}
      <g transform="rotate(14 262 140)">
        <rect x="248" y="70" width="28" height="140" rx="6" fill="#FF7A5C" />
        <rect x="248" y="70" width="28" height="18" rx="6" fill="#F4EFF7" />
        <path d="M248 210h28l-14 26z" fill="#F4EFF7" />
      </g>
      {/* asas */}
      <path d="M150 196c0-48 100-48 100 0" fill="none" stroke={ink} strokeWidth="14" strokeLinecap="round" />
      {/* bolsa */}
      <path d="M92 188h216l-18 158a18 18 0 0 1-18 16H128a18 18 0 0 1-18-16z" fill="#01E1C8" />
      {/* corazón */}
      <path
        d="M200 318c-30-20-50-37-50-60 0-14 11-25 25-25 11 0 19 6 25 15 6-9 14-15 25-15 14 0 25 11 25 25 0 23-20 40-50 60z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

const bagIcons = [
  "M12 8h22a4 4 0 0 1 4 4v28H16a4 4 0 0 1-4-4zM18 8v32M24 18h8M24 25h8",
  "M10 38l4-12L32 8l8 8-18 18zM14 26l8 8",
  "M10 40V18l4-8 4 8v22M22 40V18l4-8 4 8v22M34 40V18l4-8 4 8v22",
  "M6 30L30 6l12 12-24 24zM14 22l4 4M20 16l4 4M26 10l4 4",
  "M8 14h32v22H8zM8 14l16 12 16-12",
];
const giftIcons = [
  "M17 15a5 5 0 1 1 0.01 0M31 15a5 5 0 1 1 0.01 0M14 32a10 10 0 0 1 20 0v4a4 4 0 0 1-4 4H18a4 4 0 0 1-4-4z",
  "M8 10h12a4 4 0 0 1 4 4v26a3 3 0 0 0-3-3H8zM40 10H28a4 4 0 0 0-4 4v26a3 3 0 0 1 3-3h13z",
  "M17 8l-9 6 4 7 4-2v21h16V19l4 2 4-7-9-6c-1 3-4 5-7 5s-6-2-7-5z",
  "M8 19h32v8H8zM11 27h26v13H11zM24 19v21M24 19c-3-6-10-7-10-3s7 3 10 3c3 0 10 1 10-3s-7-3-10 3",
  "M8 14h32v22H8zM8 14l16 12 16-12",
];
const dotColors = ["#01E1C8", "#02ABA6", "#FF7A5C", "#01E1C8", "#02ABA6"];

export function ChristmasHero({ t, donateText, email }: { t: T["hero"]; donateText: string; email: T["email"] }) {
  return (
    <section className="container-grow pt-[clamp(40px,6vw,80px)] pb-[clamp(72px,9vw,120px)]">
      <div className="grid items-center gap-[clamp(40px,4vw,64px)] min-[1000px]:grid-cols-[1.35fr_1fr]">
        <div>
          <p className="eyebrow rise mb-[18px] flex items-center gap-2 text-teal">
            <Star className="twinkle h-4 w-4" />
            {brand(t.eyebrow)}
          </p>
          <h1 className="rise font-display text-[clamp(38px,6vw,76px)] leading-[0.98] font-extrabold tracking-[-0.045em] text-purple [animation-delay:80ms] min-[1000px]:text-[clamp(48px,5vw,72px)]">
            {t.titleLines.map((line) => (
              <span key={line} className="block sm:whitespace-nowrap">
                {line}
              </span>
            ))}
          </h1>
          <p className="rise mt-5 font-display text-[clamp(20px,2vw,26px)] font-bold text-teal [animation-delay:140ms]">
            {t.tagline}
          </p>
          <p className="rise mt-5 max-w-[50ch] text-[clamp(18px,1.5vw,20px)] text-pretty text-purple-muted [animation-delay:200ms]">
            {t.body}
          </p>
          <div className="rise mt-9 flex flex-wrap items-center gap-3 [animation-delay:260ms]">
            <WhatsAppButton href={whatsappUrl(donateText)}>{t.cta}</WhatsAppButton>
            <a
              href="#bolsa"
              className="rounded-full px-7 py-4 font-bold shadow-[inset_0_0_0_2px_#46074F] transition-colors duration-150 hover:bg-purple hover:!text-white"
            >
              {t.secondary}
            </a>
          </div>
          <EmailNote t={email} className="rise mt-5 [animation-delay:300ms]" />
        </div>
        <div className="hero-photo relative mx-auto aspect-square w-full max-w-[520px]">
          <div className="absolute inset-0 rounded-[40%_40%_8%_40%] bg-purple" />
          <div className="absolute inset-[8%]">
            <BagIllustration label={t.illustrationLabel} />
          </div>
          <Star className="twinkle absolute top-[8%] right-[10%] h-[13%] w-[13%]" />
          <Star className="twinkle absolute top-[26%] left-[9%] h-[6%] w-[6%] [animation-delay:1.2s]" color="#FF7A5C" />
          <Image
            src="/brand/abrazo-izq.png"
            alt=""
            width={188}
            height={337}
            className="float absolute -bottom-[6%] -left-[4%] h-auto w-[18%]"
          />
        </div>
      </div>
    </section>
  );
}

export function ChristmasWhy({ t }: { t: T["why"] }) {
  return (
    <section className="bg-lilac">
      <div className="reveal container-grow section-y grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-x-14 gap-y-6">
        <div>
          <p className="eyebrow mb-3.5 text-teal">{t.eyebrow}</p>
          <h2 className="h2-display text-purple">{t.title}</h2>
        </div>
        <p className="text-[19px] text-pretty text-purple-muted">{t.body}</p>
      </div>
    </section>
  );
}

/** Lista de lo que incluye una bolsa o un regalo, en tarjetas con ícono. */
function ItemsSection({ t, id, icons, tinted }: { t: T["bag"]; id: string; icons: string[]; tinted: boolean }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`scroll-mt-20 ${tinted ? "bg-lilac" : ""}`}>
      <div className="container-grow section-y">
        <div className="reveal mb-10">
          <p className="eyebrow mb-3.5 text-teal">{t.eyebrow}</p>
          <h2 id={`${id}-title`} className="h2-display max-w-[16ch] text-purple">
            {t.title}
          </h2>
          <p className="mt-4 text-[19px] text-purple-muted">{t.audience}</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-4">
          {t.items.map((item, i) => (
            <div
              key={item.title}
              className={`reveal flex flex-col gap-4 rounded-card p-[26px] transition-transform duration-200 hover:-translate-y-1 ${tinted ? "bg-white" : "bg-lilac"}`}
            >
              <svg
                viewBox="0 0 48 48"
                className="h-[48px] w-[48px]"
                fill="none"
                stroke={ink}
                strokeWidth={2.6}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d={icons[i]} />
                <circle cx={40} cy={8} r={4} fill={dotColors[i]} stroke="none" />
              </svg>
              <h3 className="font-display text-[22px] leading-[1.05] font-extrabold tracking-[-0.02em] text-purple">
                {item.title}
              </h3>
              <p className="text-[15px] text-purple-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ChristmasBag({ t }: { t: T["bag"] }) {
  return <ItemsSection t={t} id="bolsa" icons={bagIcons} tinted={false} />;
}

export function ChristmasGift({ t }: { t: T["gift"] }) {
  return <ItemsSection t={t} id="regalo" icons={giftIcons} tinted />;
}

export function ChristmasWays({ t, email }: { t: T["ways"]; email: T["email"] }) {
  return (
    <section aria-labelledby="sumar-title">
      <div className="container-grow section-y">
        <div className="reveal mb-10">
          <p className="eyebrow mb-3.5 text-teal">{t.eyebrow}</p>
          <h2 id="sumar-title" className="h2-display max-w-[16ch] text-purple">
            {t.title}
          </h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,230px),1fr))] gap-4">
          {t.items.map((w, i) => {
            const featured = i === 0;
            return (
              <a
                key={w.title}
                href={whatsappUrl(w.whatsappText)}
                target="_blank"
                rel="noopener"
                className={`reveal flex min-h-72 flex-col gap-4 rounded-card p-[30px] transition-transform duration-200 hover:-translate-y-1 ${
                  featured ? "bg-purple !text-white" : "bg-lilac !text-purple"
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

export function ChristmasTransparency({ t }: { t: T["transparency"] }) {
  return (
    <section className="relative overflow-hidden bg-purple text-white">
      <Star className="twinkle absolute top-10 right-[8%] h-10 w-10" />
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

export function ChristmasClosing({ t, email }: { t: T["closing"]; email: T["email"] }) {
  return (
    <section className="reveal container-grow section-y text-center">
      <Star className="twinkle mx-auto mb-6 h-12 w-12" />
      <h2 className="h2-display text-purple">{t.title}</h2>
      <p className="mx-auto mt-5 max-w-[44ch] text-[19px] text-pretty text-purple-muted">{t.body}</p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <WhatsAppButton href={whatsappUrl(t.whatsappText)}>{t.cta}</WhatsAppButton>
        <EmailButton href={mailtoUrl(email.subject, email.body)}>{t.emailCta}</EmailButton>
      </div>
    </section>
  );
}
