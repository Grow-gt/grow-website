import { es, type Dictionary } from "./es";

/**
 * ENGLISH — PENDIENTE DE TRADUCIR.
 *
 * Mientras no haya traducción, esta versión reutiliza el texto en español
 * marcado con "[EN]" para que se note en pantalla. /en se sirve con
 * `noindex` (ver `translated` en src/i18n/config.ts).
 *
 * Para traducir: sustituir `pending(es)` por un objeto literal con la misma
 * forma que `es` (TypeScript avisará si falta alguna clave) y cambiar
 * `translated.en` a `true`.
 */
function pending<T>(value: T): T {
  if (typeof value === "string") return `[EN] ${value}` as T;
  if (Array.isArray(value)) return value.map(pending) as T;
  if (value && typeof value === "object")
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, pending(v)])) as T;
  return value;
}

export const en: Dictionary = {
  ...pending(es),
  // Metadatos sin marca para no ensuciar pestañas ni vistas previas.
  meta: { ...es.meta },
};
