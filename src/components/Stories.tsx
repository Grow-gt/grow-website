"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { stories } from "@/content/home";
import type { Dictionary } from "@/i18n/dictionaries/es";
import { useAutoplay } from "./useAutoplay";

/** Tiempo que se muestra cada posición del carrusel. */
const SLIDE_MS = 5000;

const btnBase = "rounded-full font-bold transition-colors duration-150 hover:bg-purple hover:!text-white";
const arrowBtn =
  "flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-lg text-purple shadow-[inset_0_0_0_2px_#46074F] transition-colors duration-150 hover:bg-purple hover:text-white";

/**
 * Historias en carrusel: avanza solo, se detiene con el cursor encima y se
 * puede deslizar con el dedo (scroll-snap nativo, sin librerías).
 */
export function Stories({ t }: { t: Dictionary["stories"] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [positions, setPositions] = useState(stories.length);
  const { ref: autoRef, handlers: autoHandlers, enabled: autoEnabled, paused: autoPaused } = useAutoplay<HTMLElement>();

  // Cuántas posiciones distintas hay según cuántas tarjetas caben en pantalla.
  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    const cards = Array.from(track.children) as HTMLElement[];
    const reachable = cards.filter((c) => c.offsetLeft - track.offsetLeft <= max + 2).length;
    setPositions(Math.max(1, reachable));
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const goTo = useCallback((i: number) => {
    const track = trackRef.current;
    const card = track?.children[i] as HTMLElement | undefined;
    if (!track || !card) return;
    track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: "smooth" });
    setIndex(i);
  }, []);

  const next = () => goTo((index + 1) % positions);
  const prev = () => goTo((index - 1 + positions) % positions);

  // Si la persona desliza a mano, el indicador sigue a la tarjeta visible.
  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.children) as HTMLElement[];
    let nearest = 0;
    let best = Infinity;
    cards.forEach((c, i) => {
      const d = Math.abs(c.offsetLeft - track.offsetLeft - track.scrollLeft);
      if (d < best) {
        best = d;
        nearest = i;
      }
    });
    const clamped = Math.min(nearest, positions - 1);
    if (clamped !== index) setIndex(clamped);
  };

  return (
    <section
      id="historias"
      aria-labelledby="historias-title"
      aria-roledescription="carrusel"
      className="container-grow section-y"
      ref={autoRef}
      {...autoHandlers}
    >
      <div className="reveal mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow mb-3.5 text-teal">{t.eyebrow}</p>
          <h2 id="historias-title" className="h2-display text-purple">
            {t.title}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" onClick={prev} aria-label={t.prev} className={arrowBtn}>
            ←
          </button>
          <button type="button" onClick={next} aria-label={t.next} className={arrowBtn}>
            →
          </button>
          <a href="#" className={`${btnBase} ml-2 px-[22px] py-3 shadow-[inset_0_0_0_2px_#46074F]`}>
            {t.seeAll}
          </a>
        </div>
      </div>

      <div
        ref={trackRef}
        onScroll={onScroll}
        className="reveal no-scrollbar -mx-1 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-1 pb-2"
      >
        {stories.map((s, i) => {
          const text = t.items[i];
          return (
            <a
              key={i}
              href={s.href}
              className="group flex w-[85%] shrink-0 snap-start flex-col gap-4 !text-ink sm:w-[calc((100%-20px)/2)] lg:w-[calc((100%-40px)/3)]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-lilac">
                <Image
                  src={s.photo}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 85vw"
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

      {/* Indicador: un punto por posición; el activo muestra el progreso del autoplay. */}
      {positions > 1 && (
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: positions }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`${i + 1} / ${positions}`}
              aria-current={i === index}
              className={`relative h-2.5 cursor-pointer overflow-hidden rounded-full transition-[width,background-color] duration-300 ${
                i === index ? "w-10 bg-purple/20" : "w-2.5 bg-purple/20 hover:bg-purple/40"
              }`}
            >
              {i === index && (
                <span
                  key={index}
                  aria-hidden
                  onAnimationEnd={autoEnabled ? next : undefined}
                  className={`absolute inset-0 bg-purple ${autoEnabled ? "autoplay-progress" : ""}`}
                  style={
                    autoEnabled
                      ? { animationDuration: `${SLIDE_MS}ms`, animationPlayState: autoPaused ? "paused" : "running" }
                      : undefined
                  }
                />
              )}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
