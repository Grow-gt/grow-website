"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { nav } from "@/content/home";

export function Header() {
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
      <div className="container-grow flex items-center justify-between gap-6 py-4">
        <a href="#inicio" className="flex" aria-label="GROW — inicio">
          <Image src="/brand/logo.png" alt="GROW" width={1275} height={522} priority className="h-9 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 text-base font-semibold min-[900px]:flex">
          {nav.map((n) => (
            <a key={n.label} href={n.href} className="text-purple transition-opacity hover:opacity-70">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#sumate"
            className="rounded-full bg-purple px-[22px] py-3 text-[15px] font-bold !text-white transition-colors duration-150 hover:bg-purple-bright"
          >
            Quiero sumarme
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menú"
            aria-expanded={menuOpen}
            className="flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-full bg-lilac min-[900px]:hidden"
          >
            <span className="h-0.5 w-[18px] rounded-sm bg-purple" />
            <span className="h-0.5 w-[18px] rounded-sm bg-purple" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col bg-purple px-6 pt-2 pb-7 min-[900px]:hidden">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-white/15 py-3 font-display text-[26px] font-bold !text-white"
            >
              {n.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
