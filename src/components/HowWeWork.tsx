"use client";

import Image from "next/image";
import { useState } from "react";
import { tabs } from "@/content/home";
import { useAutoplay } from "./useAutoplay";

/** Tiempo que se muestra cada paso antes de pasar al siguiente. */
const STEP_MS = 6000;
import type { Dictionary } from "@/i18n/dictionaries/es";

export function HowWeWork({ t }: { t: Dictionary["how"] }) {
  const [tab, setTab] = useState(0);
  const data = tabs[tab];
  const text = t.tabs[tab];
  const {
    ref: autoRef,
    handlers: autoHandlers,
    enabled: autoEnabled,
    paused: autoPaused,
  } = useAutoplay<HTMLDivElement>();
  const next = () => setTab((i) => (i + 1) % t.tabs.length);

  return (
    <section id="como" aria-labelledby="como-title" className="container-grow section-y">
      <div className="reveal mb-12 grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-end gap-x-14 gap-y-6">
        <div>
          <p className="eyebrow mb-3.5 text-teal">{t.eyebrow}</p>
          <h2 id="como-title" className="h2-display text-purple">
            {t.title}
          </h2>
        </div>
        <p className="text-[19px] text-pretty text-purple-muted">{t.body}</p>
      </div>

      {/* Pestañas + panel: avanzan solas; se detienen con el cursor o el foco encima. */}
      <div ref={autoRef} {...autoHandlers}>
        <div role="tablist" className="mb-7 flex flex-wrap gap-2">
          {t.tabs.map((item, i) => (
            <button
              key={item.label}
              role="tab"
              id={`tab-${i}`}
              aria-selected={i === tab}
              aria-controls="como-panel"
              onClick={() => setTab(i)}
              className={`relative cursor-pointer overflow-hidden rounded-full px-[22px] py-3 text-base font-bold transition-colors duration-[160ms] ${
                i === tab ? "bg-purple text-white" : "bg-lilac text-purple hover:bg-border"
              }`}
            >
              {item.label}
              {i === tab && autoEnabled && (
                <span
                  key={tab}
                  aria-hidden
                  onAnimationEnd={next}
                  className="autoplay-progress absolute inset-x-0 bottom-0 h-[3px] bg-turquoise"
                  style={{ animationDuration: `${STEP_MS}ms`, animationPlayState: autoPaused ? "paused" : "running" }}
                />
              )}
            </button>
          ))}
        </div>

        <div
          id="como-panel"
          role="tabpanel"
          aria-labelledby={`tab-${tab}`}
          className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-stretch gap-5"
        >
          <div className="relative min-h-[380px] overflow-hidden rounded-[32px_32px_32px_8px] bg-lilac">
            <Image
              key={data.photo}
              src={data.photo}
              alt={text.alt}
              fill
              sizes="(min-width: 900px) 50vw, 100vw"
              className="fade-in object-cover"
            />
          </div>
          <div
            key={tab}
            className="fade-in flex flex-col justify-between gap-8 rounded-panel bg-lilac p-[clamp(28px,4vw,48px)]"
          >
            <div className="flex items-start justify-between">
              <span className="font-display text-[72px] leading-[0.8] font-extrabold tracking-[-0.04em] text-turquoise">
                {data.n}
              </span>
              <span className="h-5 w-5 rounded-full bg-coral" />
            </div>
            <div>
              <h3 className="font-display text-[clamp(30px,3.2vw,44px)] leading-none font-extrabold tracking-[-0.03em] text-purple">
                {text.title}
              </h3>
              <p className="mt-4 max-w-[42ch] text-lg text-purple-muted">{text.body}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
