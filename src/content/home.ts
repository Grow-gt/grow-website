// Contenido de la home. Los textos entre [corchetes] son datos pendientes
// que debe aportar la ONG — no inventar cifras, programas ni beneficiarios.

export const nav = [
  { label: "Quiénes somos", href: "#como" },
  { label: "Cómo trabajamos", href: "#como" },
  { label: "Historias", href: "#historias" },
  { label: "Aliados", href: "#sumate" },
];

export const tabs = [
  {
    label: "Escuchamos",
    n: "01",
    title: "Escuchamos primero",
    body: "Nos sentamos con la comunidad para entender lo que ya tiene, lo que sueña y lo que necesita.",
    photo: "foto · conversación en círculo con vecinos",
  },
  {
    label: "Co-diseñamos",
    n: "02",
    title: "Diseñamos el camino juntos",
    body: "Las decisiones se toman con las personas que las van a vivir. El plan es de la comunidad.",
    photo: "foto · taller de planificación en grupo",
  },
  {
    label: "Acompañamos",
    n: "03",
    title: "Estamos presentes",
    body: "Acompañamos cada etapa del proceso, con cercanía y sin reemplazar a nadie.",
    photo: "foto · equipo GROW trabajando junto a la comunidad",
  },
  {
    label: "Conectamos",
    n: "04",
    title: "Sumamos aliados",
    body: "Unimos a la comunidad con personas, empresas y organizaciones que quieren aportar.",
    photo: "foto · voluntarios y vecinos en una jornada",
  },
];

/**
 * Cifras de impacto. `value: null` = dato no verificado aún.
 * La sección se oculta mientras alguna cifra sea null (ver README del handoff).
 */
export const stats: { label: string; value: string | null; source: string; color: string }[] = [
  { label: "[Comunidades acompañadas]", value: null, source: "Dato verificado · fuente y fecha", color: "#01E1C8" },
  { label: "[Personas voluntarias]", value: null, source: "Dato verificado · fuente y fecha", color: "#02ABA6" },
  { label: "[Aliados y empresas]", value: null, source: "Dato verificado · fuente y fecha", color: "#FF7A5C" },
];

export const ways = [
  {
    title: "Sé voluntario",
    body: "Dona tu tiempo y tus talentos. No necesitas experiencia, solo ganas.",
    cta: "Quiero participar",
    featured: false,
    href: "#",
    icon: { d: "M5 38c0-6 3-9 7-9s7 3 7 9M17 38c0-7 3-11 7-11s7 4 7 11M29 38c0-6 3-9 7-9s7 3 7 9M12 18a4 4 0 1 0 0.01 0M36 18a4 4 0 1 0 0.01 0", cx: 24, cy: 15, r: 5 },
  },
  {
    title: "Dona",
    body: "Tu aporte se suma a lo que la comunidad ya está construyendo.",
    cta: "Donar",
    featured: true,
    href: "#",
    icon: { d: "M24 40C14 33 7 27 7 19c0-5 4-9 9-9 4 0 6 2 8 5 2-3 4-5 8-5 5 0 9 4 9 9 0 8-7 14-17 21z", cx: 24, cy: 6, r: 3.5 },
  },
  {
    title: "Empresas aliadas",
    body: "Voluntariado corporativo y alianzas con propósito para tu equipo.",
    cta: "Hablemos",
    featured: false,
    href: "#",
    icon: { d: "M10 40h28M14 40V30M24 40V22M34 40V16", cx: 34, cy: 9, r: 4.5 },
  },
  {
    title: "Comparte",
    body: "Cuenta lo que hacemos. Cada persona que se entera puede sumar.",
    cta: "Seguir a GROW",
    featured: false,
    href: "#",
    icon: { d: "M8 14a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H22l-9 8v-8h-1a4 4 0 0 1-4-4z", cx: 24, cy: 21, r: 4 },
  },
];

export const stories = [
  { category: "Comunidad", tag: "#01E1C8", title: "[Título de la historia]", href: "#" },
  { category: "Voluntariado", tag: "#FF7A5C", title: "[Título de la historia]", href: "#" },
  { category: "Aliados", tag: "#F4EFF7", title: "[Título de la historia]", href: "#" },
];

export const footer = [
  { heading: "Súmate", links: ["Voluntariado", "Donar", "Empresas aliadas", "Organiza una actividad"] },
  { heading: "Conócenos", links: ["Quiénes somos", "Cómo trabajamos", "Transparencia", "Equipo"] },
  { heading: "Conecta", links: ["Contacto", "Prensa", "Trabaja con nosotros", "Newsletter"] },
];

export const social = ["Instagram", "Facebook", "LinkedIn"];
