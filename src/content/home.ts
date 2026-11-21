// Datos de la home que NO dependen del idioma (rutas, fotos, colores, iconos).
// Los textos están en src/i18n/dictionaries/{es,en}.ts, en el mismo orden.

export const navHrefs = ["#nosotros", "#como", "#campanas", "#historias", "#transparencia"];

/** Campañas, en el mismo orden que `campaigns.items` del diccionario. Ruta: /{lang}/campanas/{slug}. */
export const campaigns = [{ slug: "navidad" }];

export const contactEmail = "info@growgt.org";

/** WhatsApp de GROW (instrucciones de donación por remesa o transferencia). */
export const whatsappNumber = "50248040432";
export const whatsappUrl = (text: string) => `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

/**
 * Páginas internas (fase 2). `null` = la página aún no existe y el enlace no
 * se muestra, para no tener enlaces muertos.
 */
export const pageLinks: { communities: string | null; about: string | null } = {
  communities: null,
  about: null,
};

/** Colores de la línea superior de las tarjetas «Lo que impulsamos». */
export const pillarColors = ["#01E1C8", "#02ABA6", "#FF7A5C"];

export const tabs = [
  { n: "01", photo: "/photos/escuchamos.jpg" },
  { n: "02", photo: "/photos/codisenamos-la-gomera.jpg" },
  { n: "03", photo: "/photos/conectamos.jpg" },
];

/**
 * Cifras de impacto. `value: null` = dato no verificado aún.
 * La sección se oculta mientras alguna cifra sea null (ver README del handoff).
 */
export const stats: { value: string | null; color: string }[] = [
  { value: null, color: "#01E1C8" },
  { value: null, color: "#02ABA6" },
  { value: null, color: "#FF7A5C" },
];

// Orden: Voluntariado (destacada), Profesionales aliados, Empresas, Iglesias y
// organizaciones. Cada tarjeta abre un correo a contactEmail con su título como asunto.
export const ways = [
  {
    featured: true,
    icon: { d: "M24 40C14 33 7 27 7 19c0-5 4-9 9-9 4 0 6 2 8 5 2-3 4-5 8-5 5 0 9 4 9 9 0 8-7 14-17 21z", cx: 24, cy: 6, r: 3.5 },
  },
  {
    featured: false,
    icon: { d: "M8 14a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H22l-9 8v-8h-1a4 4 0 0 1-4-4z", cx: 24, cy: 21, r: 4 },
  },
  {
    featured: false,
    icon: { d: "M10 40h28M14 40V30M24 40V22M34 40V16", cx: 34, cy: 9, r: 4.5 },
  },
  {
    featured: false,
    icon: { d: "M5 38c0-6 3-9 7-9s7 3 7 9M17 38c0-7 3-11 7-11s7 4 7 11M29 38c0-6 3-9 7-9s7 3 7 9M12 18a4 4 0 1 0 0.01 0M36 18a4 4 0 1 0 0.01 0", cx: 24, cy: 15, r: 5 },
  },
];

export const stories = [
  { tag: "#01E1C8", href: "#", photo: "/photos/historia-1.jpg" },
  { tag: "#FF7A5C", href: "#", photo: "/photos/historia-2.jpg" },
  { tag: "#F4EFF7", href: "#", photo: "/photos/historia-3.jpg" },
];

/** Redes sociales oficiales (@somos.growgt). Se usan en el JSON-LD (`sameAs`). */
export const social = [
  { name: "Instagram", url: "https://www.instagram.com/somos.growgt/" },
  { name: "Facebook", url: "https://www.facebook.com/somos.growgt" },
];
