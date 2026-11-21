"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navHrefs } from "@/content/home";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/es";
import { LanguageToggle } from "./LanguageToggle";

type Props = {
  lang: Locale;
  nav: Dictionary["nav"];
  cta: string;
  a11y: Dictionary["a11y"];
};

export function Header({ lang, nav, cta, a11y }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-20 bg-white transition-shadow duration-200"
      style={{ boxShadow: scrolled ? "0 1px 0 #EADFEF" : "none" }}
    >
      <div className="container-grow flex items-center justify-between gap-4 py-4">
        <a href="#inicio" className="flex shrink-0" aria-label={a11y.home}>
          <Image src="/brand/logo.png" alt="GROW" width={1275} height={522} priority className="h-9 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 text-base font-semibold min-[1000px]:flex">
          {nav.map((label, i) => (
            <a key={label} href={navHrefs[i]} className="text-purple transition-opacity hover:opacity-70">
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle lang={lang} label={a11y.language} />
          <a
            href="#sumate"
            className="hidden rounded-full bg-purple px-[22px] py-3 text-[15px] font-bold !text-white transition-colors duration-150 hover:bg-purple-bright sm:inline-flex"
          >
            {cta}
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={a11y.menu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full bg-lilac min-[1000px]:hidden"
          >
            <span className="h-0.5 w-[18px] rounded-sm bg-purple" />
            <span className="h-0.5 w-[18px] rounded-sm bg-purple" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="flex flex-col bg-purple px-6 pt-2 pb-7 min-[1000px]:hidden">
          {nav.map((label, i) => (
            <a
              key={label}
              href={navHrefs[i]}
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/15 py-3 font-display text-[26px] font-bold !text-white"
            >
              {label}
            </a>
          ))}
          <a
            href="#sumate"
            onClick={() => setMenuOpen(false)}
            className="mt-6 self-start rounded-full bg-turquoise px-7 py-4 font-bold !text-purple sm:hidden"
          >
            {cta}
          </a>
        </div>
      )}
    </header>
  );
}
