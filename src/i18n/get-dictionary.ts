import "server-only";
import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/es";

// Solo servidor: los diccionarios nunca llegan al bundle del cliente.
const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  es: () => import("./dictionaries/es").then((m) => m.es),
  en: () => import("./dictionaries/en").then((m) => m.en),
};

export const getDictionary = (locale: Locale) => dictionaries[locale]();
