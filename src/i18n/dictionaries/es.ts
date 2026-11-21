// Textos en español. Los textos entre [corchetes] son datos pendientes que
// debe aportar la ONG — no inventar cifras, programas ni beneficiarios.
// Las listas van en el mismo orden que los datos de src/content/home.ts.

export const es = {
  meta: {
    title: "GROW · Crecemos cuando crecemos juntos",
    description:
      "GROW es una organización de desarrollo comunitario en Guatemala. Acompañamos a comunidades que impulsan su propio desarrollo y las conectamos con personas y organizaciones que quieren sumar.",
    ogAlt: "GROW — Crecemos cuando crecemos juntos",
  },
  org: {
    slogan: "Crecemos cuando crecemos juntos.",
    description:
      "Organización de desarrollo comunitario que acompaña a comunidades de Guatemala en su propio desarrollo y las conecta con voluntarios, donantes y empresas aliadas.",
  },
  a11y: {
    home: "GROW — inicio",
    menu: "Menú",
    language: "Idioma",
  },
  nav: ["Quiénes somos", "Cómo trabajamos", "Historias", "Aliados"],
  header: { cta: "Quiero sumarme" },
  hero: {
    eyebrow: "Desarrollo comunitario",
    title: "Crecemos cuando crecemos juntos.",
    body: "Acompañamos a comunidades que impulsan su propio desarrollo y las conectamos con personas y organizaciones que quieren sumar.",
    ctaVolunteer: "Súmate como voluntario",
    ctaCompany: "Soy empresa",
    photoAlt: "Equipo GROW junto a vecinas y vecinos en una milpa de La Gomera",
  },
  how: {
    eyebrow: "Cómo trabajamos",
    title: "El desarrollo no se entrega: se construye.",
    body: "Cada comunidad conoce su camino mejor que nadie. Nuestro papel es escuchar, acompañar y sumar a quienes pueden ayudar a recorrerlo.",
    tabs: [
      {
        label: "Escuchamos",
        title: "Escuchamos primero",
        body: "Nos sentamos con la comunidad para entender lo que ya tiene, lo que sueña y lo que necesita.",
        alt: "Reunión en círculo con vecinas y vecinos en el salón comunitario",
      },
      {
        label: "Co-diseñamos",
        title: "Diseñamos el camino juntos",
        body: "Las decisiones se toman con las personas que las van a vivir. El plan es de la comunidad.",
        alt: "Letrero «Yo ❤ La Gomera» en la entrada del municipio",
      },
      {
        label: "Acompañamos",
        title: "Estamos presentes",
        body: "Acompañamos cada etapa del proceso, con cercanía y sin reemplazar a nadie.",
        alt: "Equipo GROW conversando con vecinas en la calle de la comunidad",
      },
      {
        label: "Conectamos",
        title: "Sumamos aliados",
        body: "Unimos a la comunidad con personas, empresas y organizaciones que quieren aportar.",
        alt: "Voluntarios y una familia de la comunidad durante una jornada",
      },
    ],
  },
  transparency: {
    eyebrow: "Transparencia",
    title: "Cada aporte, con nombre y destino.",
    body: "[Compromiso de transparencia de GROW — p. ej. cómo se informa a donantes y aliados sobre el uso de los recursos. Confirmar con la organización.]",
    cta: "Ver informes",
  },
  impact: {
    eyebrow: "Lo que hemos construido juntos",
    stats: [
      { label: "[Comunidades acompañadas]", source: "Dato verificado · fuente y fecha" },
      { label: "[Personas voluntarias]", source: "Dato verificado · fuente y fecha" },
      { label: "[Aliados y empresas]", source: "Dato verificado · fuente y fecha" },
    ],
  },
  ways: {
    eyebrow: "Súmate",
    title: "Hay muchas formas de crecer juntos.",
    items: [
      { title: "Sé voluntario", body: "Dona tu tiempo y tus talentos. No necesitas experiencia, solo ganas.", cta: "Quiero participar" },
      { title: "Dona", body: "Tu aporte se suma a lo que la comunidad ya está construyendo.", cta: "Donar" },
      { title: "Empresas aliadas", body: "Voluntariado corporativo y alianzas con propósito para tu equipo.", cta: "Hablemos" },
      { title: "Comparte", body: "Cuenta lo que hacemos. Cada persona que se entera puede sumar.", cta: "Seguir a GROW" },
    ],
  },
  stories: {
    eyebrow: "Desde la comunidad",
    title: "Historias",
    seeAll: "Ver todas",
    items: [
      { category: "Comunidad", title: "[Título de la historia]" },
      { category: "Voluntariado", title: "[Título de la historia]" },
      { category: "Aliados", title: "[Título de la historia]" },
    ],
  },
  newsletter: {
    title: "Crece con nosotros.",
    body: "Historias, convocatorias y novedades de GROW en tu correo.",
    placeholder: "tu@correo.com",
    inputLabel: "Correo electrónico",
    submit: "Suscribirme",
    error: "Revisa tu correo: parece que falta algo.",
    success: "¡Gracias! Ya eres parte de la comunidad GROW.",
  },
  footer: {
    tagline: "Crecemos cuando crecemos juntos.",
    legal: "[Razón social · número de registro]",
    privacy: "Privacidad",
    columns: [
      { heading: "Súmate", links: ["Voluntariado", "Donar", "Empresas aliadas", "Organiza una actividad"] },
      { heading: "Conócenos", links: ["Quiénes somos", "Cómo trabajamos", "Transparencia", "Equipo"] },
      { heading: "Conecta", links: ["Contacto", "Prensa", "Trabaja con nosotros", "Newsletter"] },
    ],
  },
  notFound: {
    title: "Esta página no existe.",
    body: "Puede que el enlace haya cambiado. Vuelve al inicio para seguir explorando.",
    cta: "Volver al inicio",
  },
};

export type Dictionary = typeof es;
