"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Estado de pausa para contenidos que avanzan solos (pestañas, carrusel).
 * Se pausa con el cursor encima, con el foco del teclado dentro, cuando la
 * sección no está en pantalla, y no corre con «reducir movimiento».
 *
 * El avance lo marca una barra de progreso CSS (`.autoplay-progress`) cuyo
 * `animationend` dispara el paso siguiente; así la pausa congela la barra y
 * al reanudar continúa donde iba.
 */
export function useAutoplay<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(true); // hasta saberlo, sin autoplay

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const handlers = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onFocus: () => setFocused(true),
    onBlur: (e: React.FocusEvent) => {
      if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocused(false);
    },
  };

  return {
    ref,
    handlers,
    /** false = no se muestra la barra ni avanza solo. */
    enabled: !reduced,
    paused: hovered || focused || !inView,
  };
}
