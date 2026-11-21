import type { MetadataRoute } from "next";
import { indexableLocales, SITE_URL } from "@/i18n/config";

// Solo idiomas traducidos (ver `translated` en src/i18n/config.ts).
// Al añadir páginas de la fase 2, agregarlas a `paths`.
const paths = [""];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) =>
    indexableLocales.map((lang) => ({
      url: `${SITE_URL}/${lang}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(indexableLocales.map((l) => [l, `${SITE_URL}/${l}${path}`])),
      },
    })),
  );
}
