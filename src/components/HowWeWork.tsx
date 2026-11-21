"use client";

import { useState } from "react";
import { tabs } from "@/content/home";

export function HowWeWork() {
  const [tab, setTab] = useState(0);
  const active = tabs[tab];

  return (
    <section id="como" className="container-grow section-y">
      <div className="mb-12 grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-end gap-x-14 gap-y-6">
        <div>
          <p className="eyebrow mb-3.5 text-teal">Cómo trabajamos</p>
          <h2 className="h2-display text-purple">El desarrollo no se entrega: se construye.</h2>
        </div>
        <p className="text-[19px] text-pretty text-purple-muted">
          Cada comunidad conoce su camino mejor que nadie. Nuestro papel es escuchar, acompañar y sumar a quienes
          pueden ayudar a recorrerlo.
        </p>
      </div>

      <div role="tablist" className="mb-7 flex flex-wrap gap-2">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            role="tab"
            id={`tab-${i}`}
            aria-selected={i === tab}
            aria-controls="como-panel"
            onClick={() => setTab(i)}
            className={`cursor-pointer rounded-full px-[22px] py-3 text-base font-bold transition-colors duration-[160ms] ${
              i === tab ? "bg-purple text-white" : "bg-lilac text-purple"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div
        id="como-panel"
        role="tabpanel"
        aria-labelledby={`tab-${tab}`}
        className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-stretch gap-5"
      >
        <div className="photo-placeholder flex min-h-[380px] items-end rounded-[32px_32px_32px_8px] p-5">
          {active.photo}
        </div>
        <div className="flex flex-col justify-between gap-8 rounded-panel bg-lilac p-[clamp(28px,4vw,48px)]">
          <div className="flex items-start justify-between">
            <span className="font-display text-[72px] leading-[0.8] font-extrabold tracking-[-0.04em] text-turquoise">
              {active.n}
            </span>
            <span className="h-5 w-5 rounded-full bg-coral" />
          </div>
          <div>
            <h3 className="font-display text-[clamp(30px,3.2vw,44px)] leading-none font-extrabold tracking-[-0.03em] text-purple">
              {active.title}
            </h3>
            <p className="mt-4 max-w-[42ch] text-lg text-purple-muted">{active.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
