"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Hace aparecer los elementos `.reveal` cuando entran en pantalla (añade
 * `.is-visible`). Funciona en todos los navegadores. Sin JavaScript el
 * contenido se ve normal: el estado oculto solo aplica con `html.js`.
 */
export function RevealOnScroll() {
  // Se vuelve a ejecutar al navegar sin recarga (p. ej. con el selector ES/EN).
  const pathname = usePathname();
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
