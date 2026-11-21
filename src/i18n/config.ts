export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export const hasLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value);

/** Dominio público del sitio (canonical, hreflang, sitemap, JSON-LD). */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://growgt.org").replace(/\/$/, "");

/**
 * Estado de traducción por idioma. Un idioma sin traducir se sirve con
 * `noindex` y queda fuera de hreflang y del sitemap, para que Google no
 * indexe una versión en inglés con texto en español.
 * → Cambiar `en` a `true` cuando src/i18n/dictionaries/en.ts esté traducido.
 */
export const translated: Record<Locale, boolean> = { es: true, en: true };

export const indexableLocales = locales.filter((l) => translated[l]);

/** Locales Open Graph (formato idioma_PAÍS). */
export const ogLocale: Record<Locale, string> = { es: "es_GT", en: "en_US" };

/** Nombre de la cookie que guarda la elección del selector ES | EN. */
export const LOCALE_COOKIE = "NEXT_LOCALE";
