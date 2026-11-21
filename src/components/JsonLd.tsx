import { contactEmail, social, whatsappNumber } from "@/content/home";
import { SITE_URL, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries/es";

/**
 * Datos estructurados (schema.org) para buscadores y motores de IA.
 * Solo incluye datos verificados: fundación, dirección, NIT, etc. se añaden
 * cuando la ONG los confirme.
 */
export function JsonLd({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const orgId = `${SITE_URL}/#organization`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NGO",
        "@id": orgId,
        name: "GROW",
        alternateName: "Grow Together",
        url: SITE_URL,
        email: contactEmail,
        contactPoint: { "@type": "ContactPoint", email: contactEmail, telephone: `+${whatsappNumber}`, contactType: "general", availableLanguage: ["es", "en"] },
        logo: `${SITE_URL}/brand/logo.png`,
        image: `${SITE_URL}/photos/hero.jpg`,
        slogan: dict.org.slogan,
        description: dict.org.description,
        areaServed: { "@type": "Country", name: "Guatemala" },
        knowsAbout: dict.org.areas,
        sameAs: social.map((s) => s.url),
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
