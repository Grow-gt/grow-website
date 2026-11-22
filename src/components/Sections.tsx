import Image from "next/image";
import type { ReactNode } from "react";
import { brand } from "./Brand";
import { contactEmail, mailtoUrl, pageLinks, pillarColors, stats, ways, whatsappUrl } from "@/content/home";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/es";

const btnBase = "rounded-full font-bold transition-colors duration-150 hover:bg-purple hover:!text-white";
const twoCol = "grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-x-14 gap-y-6";

/** Enlace con la flecha en círculo turquesa (mismo patrón que las tarjetas de Súmate). */
export function ArrowLink({
  href,
  children,
  className = "mt-7",
  onTurquoise = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  onTurquoise?: boolean;
}) {
  return (
    <a href={href} className={`group/arrow inline-flex items-center gap-2 font-bold !text-purple ${className}`}>
      {children}
      <span
        aria-hidden
        className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-[15px] text-purple transition-transform duration-200 group-hover/arrow:translate-x-1 ${onTurquoise ? "bg-white" : "bg-turquoise"}`}
      >
        →
      </span>
    </a>
  );
}

/** Logo de WhatsApp (glifo oficial simplificado). */
export function WhatsAppIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.44 9.44 0 0 1-4.81-1.32l-.35-.2-3.58.94.96-3.49-.23-.36a9.43 9.43 0 0 1-1.45-5.03c0-5.21 4.25-9.45 9.47-9.45 2.53 0 4.9.99 6.69 2.78a9.4 9.4 0 0 1 2.77 6.69c0 5.22-4.25 9.45-9.46 9.45M20.1 3.9A11.32 11.32 0 0 0 12.05.57C5.77.57.66 5.68.66 11.96c0 2 .52 3.96 1.52 5.69L.57 23.5l5.98-1.57a11.36 11.36 0 0 0 5.44 1.39h.01c6.28 0 11.39-5.11 11.39-11.39 0-3.04-1.18-5.9-3.33-8.05" />
    </svg>
  );
}

/** Ícono de sobre (correo). */
export function MailIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </svg>
  );
}

/** Botón con borde morado y sobre: alternativa por correo al WhatsApp. */
export function EmailButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-3 rounded-full px-7 py-4 font-bold !text-purple shadow-[inset_0_0_0_2px_#46074F] transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5 hover:bg-purple hover:!text-white"
    >
      <MailIcon />
      {children}
    </a>
  );
}

/** Botón morado con el logo de WhatsApp (texto blanco sobre morado). */
export function WhatsAppButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="inline-flex items-center gap-3 rounded-full bg-purple px-7 py-4 font-bold !text-white transition-[background-color,transform] duration-200 hover:-translate-y-0.5 hover:bg-purple-bright"
    >
      <WhatsAppIcon />
      {children}
    </a>
  );
}

export function Hero({ t }: { t: Dictionary["hero"] }) {
  return (
    <section id="inicio" className="container-grow pt-[clamp(40px,6vw,80px)] pb-[clamp(72px,9vw,120px)]">
      <div className="grid items-center gap-[clamp(40px,4vw,64px)] min-[1000px]:grid-cols-[1.45fr_1fr]">
        <div>
          <p className="eyebrow rise mb-[18px] text-teal">{brand(t.eyebrow)}</p>
          {/* Una frase por línea: el título siempre queda en dos líneas en pantallas medianas y grandes. */}
          <h1 className="rise font-display text-[clamp(34px,5.4vw,72px)] leading-[0.98] font-extrabold tracking-[-0.045em] text-purple [animation-delay:80ms] min-[1000px]:text-[clamp(44px,4.5vw,66px)]">
            {t.title.split(/(?<=\.)\s+/).map((line) => (
              <span key={line} className="block sm:whitespace-nowrap">
                {line}
              </span>
            ))}
          </h1>
          <p className="rise mt-6 max-w-[48ch] text-[clamp(18px,1.5vw,20px)] text-pretty text-purple-muted [animation-delay:160ms]">
            {t.body}
          </p>
          <div className="rise mt-9 flex flex-wrap gap-3 [animation-delay:240ms]">
            <a href="#sumate" className={`${btnBase} bg-turquoise px-7 py-4`}>
              {t.ctaPrimary}
            </a>
            <a href="#como" className={`${btnBase} px-7 py-4 shadow-[inset_0_0_0_2px_#46074F]`}>
              {t.ctaSecondary}
            </a>
          </div>
        </div>
        <div className="hero-photo relative aspect-[1/0.95]">
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
            className="float absolute -bottom-[6%] -left-[4%] h-auto w-[18%]"
          />
        </div>
      </div>
    </section>
  );
}

export function Why({ t }: { t: Dictionary["why"] }) {
  return (
    <section id="nosotros" aria-labelledby="nosotros-title" className="bg-lilac">
      <div className="container-grow section-y">
        <div className={`reveal ${twoCol} items-end`}>
          <div>
            <p className="eyebrow mb-3.5 text-teal">{t.eyebrow}</p>
            <h2 id="nosotros-title" className="h2-display text-purple">
              {t.title}
            </h2>
          </div>
          <p className="text-[19px] text-pretty text-purple-muted">{brand(t.body)}</p>
        </div>
        <p className="eyebrow reveal mt-16 mb-7 text-teal">{t.pillarsEyebrow}</p>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-4">
          {t.pillars.map((p, i) => (
            <div
              key={p.title}
              className="reveal flex flex-col gap-4 rounded-card bg-white p-[30px] transition-transform duration-200 hover:-translate-y-1"
            >
              <span aria-hidden className="h-4 w-4 rounded-full" style={{ background: pillarColors[i] }} />
              <h3 className="font-display text-[28px] leading-[1.02] font-extrabold tracking-[-0.02em] text-purple">
                {p.title}
              </h3>
              <p className="text-purple-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Start({ t }: { t: Dictionary["start"] }) {
  return (
    <section id="empezamos" aria-labelledby="empezamos-title" className="container-grow pb-[clamp(72px,10vw,128px)]">
      <div className={`reveal ${twoCol} items-center border-t border-border pt-[clamp(48px,6vw,80px)]`}>
        <div>
          <p className="eyebrow mb-3.5 text-teal">{t.eyebrow}</p>
          <h2 id="empezamos-title" className="h2-display text-purple">
            {t.title}
          </h2>
        </div>
        <div>
          <p className="text-[19px] text-pretty text-purple-muted">{t.body}</p>
          {pageLinks.communities && <ArrowLink href={pageLinks.communities}>{t.link}</ArrowLink>}
        </div>
      </div>
    </section>
  );
}

export function Faith({ t }: { t: Dictionary["faith"] }) {
  return (
    <section aria-labelledby="fe-title" className="bg-lilac">
      <div className={`reveal container-grow section-y ${twoCol} items-center`}>
        <div>
          <p className="eyebrow mb-3.5 text-teal">{t.eyebrow}</p>
          <h2 id="fe-title" className="h2-display text-purple">
            {t.title}
          </h2>
        </div>
        <div>
          <p className="text-[19px] text-pretty text-purple-muted">{t.body}</p>
          {pageLinks.about && <ArrowLink href={pageLinks.about}>{t.link}</ArrowLink>}
        </div>
      </div>
    </section>
  );
}

export function Transparency({ t }: { t: Dictionary["transparency"] }) {
  return (
    <section
      id="transparencia"
      aria-labelledby="transparencia-title"
      className="relative overflow-hidden bg-purple text-white"
    >
      <Image
        src="/brand/abrazo-izq.png"
        alt=""
        width={188}
        height={337}
        className="absolute -top-[12vw] -left-[4vw] h-auto w-[min(20vw,280px)] opacity-90"
      />
      <div className="reveal container-grow section-y relative grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-12 !pl-[max(clamp(20px,4vw,48px),calc(min(20vw,280px)-4vw+8px))]">
        <div>
          <p className="eyebrow mb-3.5 text-turquoise">{t.eyebrow}</p>
          <h2 id="transparencia-title" className="h2-display">
            {t.title}
          </h2>
        </div>
        <div>
          <ul className="flex flex-col gap-3.5">
            {t.commitments.map((c) => (
              <li key={c} className="flex gap-3.5 text-[19px] text-pretty text-lilac">
                <span aria-hidden className="mt-[0.55em] h-2.5 w-2.5 flex-none rounded-full bg-turquoise" />
                {c}
              </li>
            ))}
          </ul>
          <p className="mt-7 text-[15px] text-on-purple-muted">{t.note}</p>
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

export function Ways({ t, lang }: { t: Dictionary["ways"]; lang: Locale }) {
  return (
    <section id="sumate" aria-labelledby="sumate-title" className="bg-lilac">
      <div className="container-grow section-y">
        <div className="reveal mb-10">
          <p className="eyebrow mb-3.5 text-teal">{t.eyebrow}</p>
          <h2 id="sumate-title" className="h2-display max-w-[14ch] text-purple">
            {t.title}
          </h2>
          <p className="mt-4 text-[19px] text-purple-muted">{t.body}</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,230px),1fr))] gap-4">
          {ways.map((w, i) => {
            const text = t.items[i];
            const fg = w.featured ? "#FFFFFF" : "#46074F";
            return (
              <a
                key={i}
                href={w.page ? `/${lang}${w.page}` : `mailto:${contactEmail}?subject=${encodeURIComponent(text.title)}`}
                className={`reveal flex min-h-80 flex-col gap-5 rounded-card p-[30px] transition-transform duration-200 hover:-translate-y-1 ${
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
                <h3 className="font-display text-[28px] leading-[1.02] font-extrabold tracking-[-0.02em]">
                  {text.title}
                </h3>
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

export function Donate({ t, lang }: { t: Dictionary["donate"]; lang: Locale }) {
  return (
    <section id="donar" aria-labelledby="donar-title" className="px-[clamp(20px,4vw,48px)] pb-[clamp(72px,10vw,128px)]">
      <div className="reveal relative mx-auto grid max-w-[1184px] grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-center gap-8 overflow-hidden rounded-block bg-turquoise p-[clamp(32px,5vw,64px)]">
        <div>
          <h2
            id="donar-title"
            className="font-display text-[clamp(32px,3.8vw,52px)] leading-none font-extrabold tracking-[-0.03em] text-purple"
          >
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-pretty text-purple">{t.body}</p>
        </div>
        <div className="flex flex-col items-start gap-5 min-[1000px]:items-end">
          <div className="flex flex-wrap gap-3 min-[1000px]:justify-end">
            <WhatsAppButton href={whatsappUrl(t.whatsappText)}>{t.cta}</WhatsAppButton>
            <EmailButton href={mailtoUrl(t.emailSubject, t.emailBody)}>{t.emailCta}</EmailButton>
          </div>
          <ArrowLink href={`/${lang}/campanas/navidad`} className="" onTurquoise>
            {t.campaign}
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}

export function Closing({ t }: { t: Dictionary["closing"] }) {
  return (
    <section aria-labelledby="cierre-title" className="reveal container-grow pb-[clamp(72px,10vw,128px)] text-center">
      <h2 id="cierre-title" className="h2-display text-purple">
        {t.title}
      </h2>
      <p className="mx-auto mt-5 max-w-[44ch] text-[19px] text-pretty text-purple-muted">{t.body}</p>
      <a href="#sumate" className={`${btnBase} mt-9 inline-flex bg-turquoise px-7 py-4 hover:-translate-y-0.5`}>
        {t.cta}
      </a>
    </section>
  );
}

export function Footer({ t, lang }: { t: Dictionary["footer"]; lang: Locale }) {
  return (
    <footer className="bg-purple text-white">
      <div className="container-grow pt-[72px] pb-8">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-8">
          <div className="flex flex-col gap-[18px]">
            <Image
              src="/brand/logo-white.png"
              alt="Grow Together (GROW)"
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
                <a
                  key={l.label}
                  href={l.href.startsWith("#") || /^\/(?!\/)/.test(l.href) ? `/${lang}${l.href}` : l.href}
                  rel={l.href.startsWith("http") ? "noopener" : undefined}
                  className="text-[15px] !text-white transition-colors hover:!text-turquoise"
                >
                  {l.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-wrap justify-between gap-4 border-t border-white/[0.18] pt-6 text-[13px] text-on-purple-muted">
          <span>{brand(t.legal)}</span>
          {/* TODO: enlazar a la página del aviso de privacidad (texto en el copy) cuando exista. */}
          <a href="#" className="!text-on-purple-muted hover:!text-turquoise">
            {t.privacy}
          </a>
        </div>
      </div>
    </footer>
  );
}
