import Image from "next/image";
import { footer, social, stats, stories, ways } from "@/content/home";

const btnBase = "rounded-full font-bold transition-colors duration-150 hover:bg-purple hover:!text-white";

export function Hero() {
  return (
    <section
      id="inicio"
      className="container-grow pt-[clamp(40px,6vw,80px)] pb-[clamp(72px,9vw,120px)]"
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-center gap-[clamp(40px,5vw,72px)]">
        <div>
          <p className="eyebrow mb-[18px] text-teal">Desarrollo comunitario</p>
          <h1 className="max-w-[11ch] font-display text-[clamp(48px,6.6vw,96px)] leading-[0.94] font-extrabold tracking-[-0.045em] text-balance text-purple">
            Crecemos cuando crecemos juntos.
          </h1>
          <p className="mt-6 max-w-[44ch] text-[clamp(18px,1.5vw,20px)] text-pretty text-purple-muted">
            Acompañamos a comunidades que impulsan su propio desarrollo y las conectamos con personas y
            organizaciones que quieren sumar.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#sumate" className={`${btnBase} bg-turquoise px-7 py-4`}>
              Súmate como voluntario
            </a>
            <a href="#sumate" className={`${btnBase} px-7 py-4 shadow-[inset_0_0_0_2px_#46074F]`}>
              Soy empresa
            </a>
          </div>
        </div>
        <div className="relative aspect-[1/0.95]">
          <div className="photo-placeholder absolute inset-0 flex items-end justify-end rounded-[40%_40%_8%_40%] p-6">
            foto · personas colaborando, luz natural
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

export function Transparency() {
  return (
    <section className="relative overflow-hidden bg-purple text-white">
      <Image
        src="/brand/abrazo-izq.png"
        alt=""
        width={188}
        height={337}
        className="absolute -top-[12vw] -left-[4vw] h-auto w-[min(20vw,280px)] opacity-90"
      />
      <div className="container-grow section-y relative grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-12 !pl-[max(clamp(20px,4vw,48px),calc(min(20vw,280px)-4vw+8px))]">
        <div>
          <p className="eyebrow mb-3.5 text-turquoise">Transparencia</p>
          <h2 className="h2-display">Cada aporte, con nombre y destino.</h2>
        </div>
        <div>
          <p className="text-[19px] text-pretty text-lilac">
            [Compromiso de transparencia de GROW — p. ej. cómo se informa a donantes y aliados sobre el uso de los
            recursos. Confirmar con la organización.]
          </p>
          <a
            href="#"
            className="mt-7 inline-flex rounded-full px-[26px] py-3.5 font-bold !text-white shadow-[inset_0_0_0_2px_#01E1C8] transition-colors duration-150 hover:bg-turquoise hover:!text-purple"
          >
            Ver informes
          </a>
        </div>
      </div>
    </section>
  );
}

export function Impact() {
  // Sin datos verificados, la sección no se muestra.
  if (stats.some((s) => s.value === null)) return null;
  return (
    <section className="container-grow py-[clamp(64px,8vw,104px)]">
      <p className="eyebrow mb-7 text-teal">Lo que hemos construido juntos</p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-5">
        {stats.map((s) => (
          <div key={s.label} className="border-t-[3px] pt-5" style={{ borderColor: s.color }}>
            <p className="font-display text-[clamp(56px,7vw,96px)] leading-[0.9] font-extrabold tracking-[-0.045em] text-purple">
              {s.value}
            </p>
            <p className="mt-3 font-bold text-purple">{s.label}</p>
            <p className="text-sm text-purple-muted">{s.source}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Ways() {
  return (
    <section id="sumate" className="bg-lilac">
      <div className="container-grow section-y">
        <div className="mb-10">
          <p className="eyebrow mb-3.5 text-teal">Súmate</p>
          <h2 className="h2-display max-w-[14ch] text-purple">Hay muchas formas de crecer juntos.</h2>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,230px),1fr))] gap-4">
          {ways.map((w) => {
            const fg = w.featured ? "#FFFFFF" : "#46074F";
            return (
              <a
                key={w.title}
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
                <h3 className="font-display text-[28px] leading-[1.02] font-extrabold tracking-[-0.02em]">{w.title}</h3>
                <p className="flex-1 text-base opacity-90">{w.body}</p>
                <span className="flex items-center gap-2 font-bold">
                  {w.cta}
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-turquoise text-[15px] text-purple">
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

export function Stories() {
  return (
    <section id="historias" className="container-grow section-y">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow mb-3.5 text-teal">Desde la comunidad</p>
          <h2 className="h2-display text-purple">Historias</h2>
        </div>
        <a href="#" className={`${btnBase} px-[22px] py-3 shadow-[inset_0_0_0_2px_#46074F]`}>
          Ver todas
        </a>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-5">
        {stories.map((s) => (
          <a key={s.category} href={s.href} className="group flex flex-col gap-4 !text-ink">
            <div className="photo-placeholder flex aspect-[4/3] items-end rounded-card p-4">foto · historia</div>
            <span
              className="self-start rounded-full px-3 py-[5px] text-xs font-bold tracking-[0.12em] text-purple uppercase"
              style={{ background: s.tag }}
            >
              {s.category}
            </span>
            <h3 className="font-display text-2xl leading-[1.1] font-bold tracking-[-0.015em] transition-colors group-hover:text-purple-bright">
              {s.title}
            </h3>
          </a>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-purple text-white">
      <div className="container-grow pt-[72px] pb-8">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-8">
          <div className="flex flex-col gap-[18px]">
            <Image src="/brand/logo-white.png" alt="GROW" width={1275} height={522} className="h-[46px] w-auto self-start" />
            <p className="max-w-[28ch] text-[15px] text-on-purple-muted">Crecemos cuando crecemos juntos.</p>
          </div>
          {footer.map((col) => (
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
          <span>© 2026 GROW · [Razón social · número de registro]</span>
          <div className="flex gap-5">
            {[...social, "Privacidad"].map((s) => (
              <a key={s} href="#" className="!text-on-purple-muted hover:!text-turquoise">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
