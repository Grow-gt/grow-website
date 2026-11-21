import { social } from "@/content/home";
import { SITE_URL, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/es";

/**
 * Datos estructurados (schema.org) para buscadores y motores de IA.
 * Solo incluye datos verificados: fundación, dirección, NIT, etc. se añaden
 * cuando la ONG los confirme.
 */
export function JsonLd({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const orgId = `${SITE_URL}/#organization`;
  const sameAs = social.map((s) => s.url).filter(Boolean);

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NGO",
        "@id": orgId,
        name: "GROW",
        url: SITE_URL,
        logo: `${SITE_URL}/brand/logo.png`,
        image: `${SITE_URL}/photos/hero.jpg`,
        slogan: dict.org.slogan,
        description: dict.org.description,
        areaServed: {
          "@type": "Place",
          name: "La Gomera, Escuintla, Guatemala",
          address: { "@type": "PostalAddress", addressLocality: "La Gomera", addressRegion: "Escuintla", addressCountry: "GT" },
        },
        knowsAbout: ["Desarrollo comunitario", "Community development", "Voluntariado", "Volunteering"],
        ...(sameAs.length ? { sameAs } : {}),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "GROW",
        publisher: { "@id": orgId },
        inLanguage: ["es", "en"],
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/${lang}#webpage`,
        url: `${SITE_URL}/${lang}`,
        name: dict.meta.title,
        description: dict.meta.description,
        inLanguage: lang,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": orgId },
        primaryImageOfPage: `${SITE_URL}/photos/hero.jpg`,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
