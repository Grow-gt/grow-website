import type { Dictionary } from "./es";

// English copy, from GROW_website_copy.md. Same shape as es.ts — TypeScript
// flags any missing key. Strings not provided in the copy file (section
// labels, image alt text, story placeholders) are marked "// not in copy".

export const en: Dictionary = {
  meta: {
    title: "GROW · Opening doors. Growing together.",
    description:
      "Nonprofit walking alongside communities in Guatemala to open opportunities in education, health and income.",
    ogAlt: "GROW · Opening doors. Growing together.",
  },
  org: {
    slogan: "Opening doors. Growing together.",
    description:
      "GROW (Grow Together) is a Guatemalan nonprofit with Christian values, dedicated to community development. We work with people, families and communities facing vulnerability so they can drive their own growth, with accompaniment, tools and opportunities that last.",
    areas: ["Education & Development", "Health & Wellbeing", "Opportunity & Entrepreneurship", "Family & Community"],
  },
  // not in copy
  a11y: {
    home: "GROW — home",
    menu: "Menu",
    language: "Language",
  },
  nav: ["About us", "How we work", "Campaigns", "Stories", "Transparency"],
  header: { cta: "Get involved" },
  hero: {
    eyebrow: "Community development · Guatemala",
    title: "Opening doors. Growing together.",
    body: "We walk alongside communities in Guatemala as they open their own opportunities, and we connect them with people, companies and partners who want to help.",
    ctaPrimary: "Get involved",
    ctaSecondary: "See how we work",
    photoAlt: "GROW team with neighbors in a cornfield in La Gomera", // not in copy
  },
  why: {
    eyebrow: "Why we exist", // not in copy
    title: "No community grows alone.",
    body: "And no one knows the path better than the people walking it. At GROW we listen, walk alongside and bring efforts together so that development starts from within and goes far.",
    pillarsEyebrow: "What we champion", // not in copy
    pillars: [
      { title: "Opportunity", body: "Education, training and income that open real doors." },
      { title: "Accompaniment", body: "We stand beside people and listen before we propose." },
      {
        title: "Partnerships",
        body: "We connect communities with those who can help: professionals, companies, churches and institutions.",
      },
    ],
  },
  how: {
    eyebrow: "How we work",
    title: "Listen, walk alongside, bring together.",
    body: "We believe development is built with the people who live it. That is why every step begins in the community.",
    tabs: [
      {
        label: "Listen",
        title: "Listen",
        body: "We visit, talk with leaders and families, and together understand needs, priorities and what the community is already doing.",
        alt: "Neighbors meeting in a circle at the community hall", // not in copy
      },
      {
        label: "Walk alongside",
        title: "Walk alongside",
        body: "We design the path with the community: training, tools, referrals to specialized services and close follow-up.",
        alt: "“I ❤ La Gomera” sign at the entrance to the town", // not in copy
      },
      {
        label: "Bring together",
        title: "Bring together",
        body: "We connect the community with partners who bring what is missing, measure progress and adjust so that change lasts.",
        alt: "Volunteers and a local family during an outreach day", // not in copy
      },
    ],
  },
  start: {
    eyebrow: "How we began",
    title: "It all starts with listening.",
    body: "In every community we begin the same way: we talk with leaders and families, learn what they are already building and decide together where we can help.",
    link: "Meet the communities",
  },
  faith: {
    eyebrow: "Our faith", // not in copy
    title: "Moved by love for our neighbor.",
    body: "We are a nonprofit organization with Christian values. We also believe in the command to love one another, which is why our doors are open to everyone, whatever their faith or beliefs.",
    link: "Learn more about us",
  },
  transparency: {
    eyebrow: "Transparency",
    title: "Managing well what is entrusted to us is part of loving others.",
    commitments: [
      "Administrative, accounting and financial controls from day one.",
      "We tell every donor how their donation is used, always with evidence.",
      "Evaluating every program before expanding it.",
      "Using every contribution for the purpose it was given.",
    ],
    note: "Accountability to our donors is part of our bylaws.",
  },
  // not in copy (section hidden until figures are verified)
  impact: {
    eyebrow: "What we have built together",
    stats: [
      { label: "[Communities we walk with]", source: "Verified figure · source and date" },
      { label: "[Volunteers]", source: "Verified figure · source and date" },
      { label: "[Partners and companies]", source: "Verified figure · source and date" },
    ],
  },
  ways: {
    eyebrow: "Get involved",
    title: "Growing is a collective act.",
    body: "Choose how you want to help.",
    items: [
      {
        title: "Volunteer",
        body: "Share your time and talents in outreach days and activities.",
        cta: "I want to volunteer",
      },
      {
        title: "Professional partners",
        body: "Health, psychology, education, law, finance: your expertise can open doors.",
        cta: "I want to share my expertise",
      },
      {
        title: "Companies",
        body: "Companies are part of a community too. If you want your team to make a difference where it matters most, let's talk.",
        cta: "Let's talk",
      },
      {
        title: "Churches & organizations",
        body: "Let's join efforts in the communities where you already serve.",
        cta: "I want to partner",
      },
    ],
  },
  // not in copy
  stories: {
    eyebrow: "From the community",
    title: "Stories",
    seeAll: "See all",
    items: [
      { category: "Community", title: "[Story title]" },
      { category: "Volunteering", title: "[Story title]" },
      { category: "Partners", title: "[Story title]" },
      { category: "Gatherings", title: "[Story title]" },
    ],
    prev: "Previous story",
    next: "Next story",
  },
  donate: {
    title: "Your donation opens doors.",
    body: "We accept donations from Guatemala and the United States, by remittance or bank transfer. Message us on WhatsApp and we will send you the instructions. We will always show you, with evidence, how your gift was used.",
    cta: "Donate via WhatsApp",
    emailCta: "I'd rather email",
    emailSubject: "I'd like to donate to GROW",
    emailBody: "Hi GROW, I'd like to make a donation. Could you send me the instructions for a remittance or bank transfer?",
    whatsappText: "Hi GROW, I'd like to make a donation. Could you send me the instructions?",
    campaign: "See our Christmas campaign",
  },
  closing: {
    title: "Community is a verb.",
    body: "There are many ways to help: your time, your expertise, your company or your church.",
    cta: "Get involved",
  },
  footer: {
    tagline: "Opening doors. Growing together.",
    legal: "© 2026 Grow Together · Guatemala · Nonprofit organization",
    privacy: "Privacy notice",
    columns: [
      {
        heading: "Organization",
        links: [
          { label: "About us", href: "#nosotros" },
          { label: "How we work", href: "#como" },
          { label: "Communities", href: "#empezamos" },
          { label: "Transparency", href: "#transparencia" },
        ],
      },
      {
        heading: "Take part",
        links: [
          { label: "Volunteer", href: "#sumate" },
          { label: "Professional partners", href: "#sumate" },
          { label: "Companies", href: "#sumate" },
          { label: "Churches & organizations", href: "#sumate" },
          { label: "Campaigns", href: "#campanas" },
        ],
      },
      {
        heading: "Follow us",
        links: [
          { label: "Instagram", href: "https://www.instagram.com/somos.growgt/" },
          { label: "Facebook", href: "https://www.facebook.com/somos.growgt" },
          { label: "info@growgt.org", href: "mailto:info@growgt.org" },
        ],
      },
    ],
  },
  campaigns: {
    meta: {
      title: "Campaigns · GROW",
      description: "GROW campaigns in Guatemala: concrete initiatives where you can help with a donation, your time or your team.",
    },
    eyebrow: "Campaigns",
    title: "Join our campaigns.",
    body: "Concrete initiatives with a clear purpose, where your gift reaches communities.",
    items: [
      {
        status: "Christmas campaign",
        title: "This Christmas, let's give school.",
        body: "School supply bags for elementary school children, and Christmas gifts for children ages 2 to 10.",
        cta: "See campaign",
      },
    ],
  },
  christmas: {
    meta: {
      title: "Christmas · School supplies to keep growing · GROW",
      description:
        "This Christmas, donate a bag of school supplies so more children in Guatemala can keep going to school. We accept donations from Guatemala and the United States.",
    },
    hero: {
      eyebrow: "Christmas campaign · Grow Together",
      titleLines: ["This Christmas,", "let's give school."],
      body: "We want to deliver bags of school supplies so more children can keep going to school. We firmly believe Guatemala needs more and better education to move forward with the new generations.",
      tagline: "A bag that is given, a future that grows.",
      cta: "Donate a bag",
      secondary: "What's in each bag?",
      illustrationLabel: "Illustration of a school supply bag with a heart and a star",
    },
    why: {
      eyebrow: "Why school supplies",
      title: "Starting the year with what you need makes a difference.",
      body: "In Guatemala the school year starts in January. A complete bag helps children arrive ready to learn, and helps their families sustain that effort. That's why this Christmas, our gift is staying in school.",
    },
    bag: {
      eyebrow: "Each bag includes",
      title: "What it takes to start the year.",
      audience: "For elementary school children.",
      items: [
        { title: "Notebooks", body: "For every subject of the year." },
        { title: "Pencils and pens", body: "To write, practice and learn." },
        { title: "Colored pencils or crayons", body: "Because creating is learning too." },
        { title: "Eraser, sharpener and ruler", body: "The basics that should never be missing." },
        { title: "A letter of encouragement", body: "A message from you to start the year strong." },
      ],
    },
    gift: {
      eyebrow: "Donate a gift",
      title: "You can also give a Christmas.",
      audience: "For children ages 2 to 10. Each gift should include:",
      items: [
        { title: "1 toy", body: "To play and share." },
        { title: "1 educational item", body: "A book, a board game or something to learn with." },
        { title: "1 piece of clothing", body: "New, in a child's size." },
        { title: "Something special", body: "A chocolate or another treat." },
        { title: "1 letter or card", body: "With a blessing message." },
      ],
    },
    ways: {
      eyebrow: "How to help",
      title: "Choose how to give school.",
      items: [
        {
          title: "Donate a bag",
          body: "Give by remittance or bank transfer from Guatemala or the United States. We'll send you the instructions on WhatsApp.",
          cta: "I want to donate",
          whatsappText: "Hi GROW, I'd like to donate a school supply bag for the Christmas campaign. Could you send me the instructions?",
        },
        {
          title: "Pack a bag",
          body: "Buy the supplies on the list, add your letter and message us to arrange where to drop it off.",
          cta: "I want to pack a bag",
          whatsappText: "Hi GROW, I'd like to pack a school supply bag for the Christmas campaign. Where can I drop it off?",
        },
        {
          title: "Donate a gift",
          body: "Put together a gift from the list for a child aged 2 to 10 and we'll tell you where to drop it off.",
          cta: "I want to donate a gift",
          whatsappText: "Hi GROW, I'd like to donate a Christmas gift for the campaign. Where can I drop it off?",
        },
        {
          title: "Bring your team",
          body: "Your company, church or school can pack several bags together. Let's talk.",
          cta: "Let's talk",
          whatsappText: "Hi GROW, our team would like to join the Christmas school supplies campaign.",
        },
      ],
    },
    transparency: {
      eyebrow: "Transparency",
      title: "You'll know where your gift went.",
      body: "We will show you, always with evidence, how the bags and gifts were delivered. Accountability to our donors is part of our bylaws.",
    },
    closing: {
      title: "This Christmas, we grow together.",
      body: "Every bag is one more step toward a Guatemala with more and better education.",
      cta: "Donate via WhatsApp",
      whatsappText: "Hi GROW, I'd like to join the Christmas school supplies campaign.",
      emailCta: "Email us",
    },
    email: {
      noWhatsapp: "Don't use WhatsApp? Email us at",
      subject: "GROW Christmas campaign",
      body: "Hi GROW, I'd like to join the Christmas campaign (school supply bags or gifts). Could you send me the details?",
    },
  },
  notFound: {
    title: "This page doesn't exist, but the path goes on.",
    body: "The link may have changed. Head back home and let's keep growing together.",
    cta: "Back to home",
  },
};
