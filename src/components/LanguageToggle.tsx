"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALE_COOKIE, locales, type Locale } from "@/i18n/config";

export function LanguageToggle({ lang, label }: { lang: Locale; label: string }) {
  const pathname = usePathname() || `/${lang}`;
  // Conserva la ruta actual y cambia solo el prefijo de idioma.
  const rest = pathname.replace(/^\/(es|en)(?=\/|$)/, "");

  return (
    <nav aria-label={label} className="flex rounded-full bg-lilac p-1">
      {locales.map((l) => {
        const active = l === lang;
        return (
          <Link
            key={l}
            href={`/${l}${rest}`}
            hrefLang={l}
            lang={l}
            aria-current={active ? "page" : undefined}
            onClick={() => {
              document.cookie = `${LOCALE_COOKIE}=${l}; path=/; max-age=31536000; samesite=lax`;
            }}
            className={`rounded-full px-3 py-1.5 text-[13px] leading-none font-bold uppercase transition-colors duration-150 ${
              active ? "bg-purple !text-white" : "!text-purple hover:bg-white"
            }`}
          >
            {l}
          </Link>
        );
      })}
    </nav>
  );
}
