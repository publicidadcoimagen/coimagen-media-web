// Fase D — catalog of Coimagen's 20 non-strategic public GPTs, grouped by
// theme, for the /resources page. Distinct from the 9 strategic GPTs (P-31,
// each with its own SEO landing page under pages/resources/) — these open
// straight to ChatGPT, no dedicated landing page. Names/descriptions are
// each GPT's real published og:title/og:description on chatgpt.com (checked
// 2026-08-09), not invented copy. Links collected 2026-07-21.
//
// The 2 private clinic GPTs (Dr. Segovia, Clínica EMT) are NOT part of this
// catalog under any form — no link, no mention — per explicit direction.

export interface GptCatalogItem {
  icon: string;
  name: string;
  descEs: string;
  descEn: string;
  url: { es: string; en: string };
}

export interface GptCatalogGroup {
  themeEs: string;
  themeEn: string;
  accentHex: string;
  items: GptCatalogItem[];
}

export const gptCatalogGroups: GptCatalogGroup[] = [
  {
    themeEs: "Negocios y Finanzas",
    themeEn: "Business & Finance",
    accentHex: "#00CFFF",
    items: [
      {
        icon: "📊",
        name: "Business Plan AI",
        descEs: "Crea planes de negocio para crecimiento, inversionistas o socios, paso a paso.",
        descEn: "Step-by-step business plans for growth, investors, or partners.",
        url: {
          es: "https://chatgpt.com/g/g-68c88930d4548191a9c2879383c637ab-coimagen-business-plan-ai",
          en: "https://chatgpt.com/g/g-68c892647a4c819190816042a2a1236d-coimagen-business-plan-ai",
        },
      },
      {
        icon: "💰",
        name: "Financial Analyst AI",
        descEs: "Analiza presupuestos, estados financieros, flujo de caja y métricas para decisiones informadas.",
        descEn: "Multilingual financial assistant with clear, professional, and adaptable analysis.",
        url: {
          es: "https://chatgpt.com/g/g-68959700a1888191a4884484191d893e-coimagen-financial-analyst-ai",
          en: "https://chatgpt.com/g/g-68c3697865cc8191baf08f60fe446458-coimagen-financial-analyst-ai",
        },
      },
      {
        icon: "📈",
        name: "Investor Plan AI",
        descEs: "Analista financiero que crea planes de negocio fiables y listos para inversionistas.",
        descEn: "Financial analyst creating reliable investor-ready business plans.",
        url: {
          es: "https://chatgpt.com/g/g-68bb5647c0888191bf6d28dbe5b25231-coimagen-investor-plan-ai",
          en: "https://chatgpt.com/g/g-68bb689462788191afa6668adc95e338-coimagen-investor-plan-ai",
        },
      },
      {
        icon: "📝",
        name: "Proposals & Quotes AI",
        descEs: "Crea propuestas y cotizaciones profesionales con beneficios, precios y valor adaptados a cada cliente.",
        descEn: "Creates professional proposals and quotes with benefits, pricing, differentiators, and value strategies.",
        url: {
          es: "https://chatgpt.com/g/g-68ca1f2cc7a48191bf819450985686bb-coimagen-propuestas-cotizaciones-ai",
          en: "https://chatgpt.com/g/g-68ca221258688191a52fbbaaebd82049-coimagen-proposals-quotes-ai",
        },
      },
      {
        icon: "🧾",
        name: "Tax Advisor 1040",
        descEs: "Asistente educativo sobre impuestos personales en EE. UU. (Formulario 1040).",
        descEn: "Educational assistant for U.S. personal taxes, Form 1040, W-2/1099 income, deductions, and tax credits.",
        url: {
          es: "https://chatgpt.com/g/g-68e071c60b248191b0d1a3129fe8e45d-coimagen-asesor-fiscal-1040",
          en: "https://chatgpt.com/g/g-68e0747f8c50819190121a6e4da12396-coimagen-tax-advisor-1040",
        },
      },
    ],
  },
  {
    themeEs: "Marketing y Contenido",
    themeEn: "Marketing & Content",
    accentHex: "#A8FF3E",
    items: [
      {
        icon: "🧠",
        name: "AI Mentor",
        descEs: "Mentor digital en inteligencia artificial aplicada a la vida real y los negocios.",
        descEn: "Learn Artificial Intelligence from fundamentals to real-world applications with personalized lessons and mentoring.",
        url: {
          es: "https://chatgpt.com/g/g-68f6c2e06028819185e4cf0297c4cd59-mentor-coimagen-ia",
          en: "https://chatgpt.com/g/g-68f6c4b1a6b48191b9b514c45a40e4ec-coimagen-ai-mentor",
        },
      },
      {
        icon: "🎬",
        name: "Video Growth Pro",
        descEs: "Haz crecer tu canal con estrategias de contenido, nichos, guiones, títulos, miniaturas, SEO, Shorts y monetización.",
        descEn: "Grow your channel with content strategies, niches, scripts, titles, thumbnails, SEO, Shorts, and monetization.",
        url: {
          es: "https://chatgpt.com/g/g-68df199d49588191b25053d7f70c84f6-coimagen-video-growth-pro",
          en: "https://chatgpt.com/g/g-68def769b990819193e7bfeffff090b9-video-growth-pro-coimagen",
        },
      },
      {
        icon: "📖",
        name: "Kindle Author AI",
        descEs: "Crea, estructura y prepara tu libro para Amazon KDP con un plan guiado de 5 días.",
        descEn: "Create, structure, and prepare your book for Amazon KDP with a guided 5-day plan.",
        url: {
          es: "https://chatgpt.com/g/g-68d1caa8ed0881918d9215d4efc3ad1f-coimagen-autor-kindle-ia",
          en: "https://chatgpt.com/g/g-68d1d0fa37848191bd29447871b42621-coimagen-autor-kindle-ai",
        },
      },
      {
        icon: "📚",
        name: "E-book Creator AI",
        descEs: "Crea e-books profesionales, lead magnets, guías y productos digitales adaptados a tu objetivo.",
        descEn: "Creates professional e-books, lead magnets, guides, and digital products tailored to your goals.",
        url: {
          es: "https://chatgpt.com/g/g-68d1b851f1588191b9c9c45f108ec41d-creador-de-ebooks-coimagen",
          en: "https://chatgpt.com/g/g-68d1ba1e1ee4819186c9e6205bc399e3-coimagen-e-book-creator-ai",
        },
      },
      {
        icon: "📺",
        name: "TV Show Creator AI",
        descEs: "Coach creativo para desarrollar, estructurar, presentar y explorar la venta de programas de TV.",
        descEn: "Creative coach helping creators develop, pitch, and market original TV shows.",
        url: {
          es: "https://chatgpt.com/g/g-68a64841232881918e024661b068b697-coimagen-tv-show-creator-ai",
          en: "https://chatgpt.com/g/g-68c35f9d224881919a001bd8e6342cfd-coimagen-tv-show-creator-ai",
        },
      },
    ],
  },
  {
    themeEs: "Atención al Cliente y RH",
    themeEn: "Customer Service & HR",
    accentHex: "#A855F7",
    items: [
      {
        icon: "🎧",
        name: "Customer Service AI",
        descEs: "Asistente de atención al cliente con IA para e-commerce y servicios: FAQs, pedidos y más.",
        descEn: "AI customer service assistant for e-commerce and services: FAQs, orders, shipping, payments, policies.",
        url: {
          es: "https://chatgpt.com/g/g-68ca2f8f38348191aa400a6f91f08129-coimagen-customer-service-ai",
          en: "https://chatgpt.com/g/g-68ca30971a0c8191b0e09dcd539de324-coimagen-customer-service-ai",
        },
      },
      {
        icon: "👥",
        name: "HR & Recruiting AI",
        descEs: "Crea vacantes, perfiles de puesto, evalúa CVs y orienta sobre rangos salariales en RH.",
        descEn: "Creates job postings, job profiles, structured CV evaluations, and indicative salary ranges.",
        url: {
          es: "https://chatgpt.com/g/g-68b8f25310d481918ab2b4713b075856-coimagen-hr-recruiting-ai",
          en: "https://chatgpt.com/g/g-68b8f76b116481918a53eb55da434a54-coimagen-hr-recruiting-ai",
        },
      },
      {
        icon: "🛠️",
        name: "Tech Support AI",
        descEs: "Diagnostica y resuelve problemas de computadoras con asistencia técnica guiada paso a paso.",
        descEn: "Diagnoses and resolves common computer, Windows, macOS, hardware, software, network, and peripheral issues.",
        url: {
          es: "https://chatgpt.com/g/g-68b8d83ec3b88191baf4f6c78952fdf8-coimagen-tech-support-ai",
          en: "https://chatgpt.com/g/g-68b8da3acb848191a356e7a2e9413f5e-coimagen-tech-support-ai",
        },
      },
      {
        icon: "🎤",
        name: "Interview Coach AI",
        descEs: "Practica entrevistas realistas con feedback, puntuación y respuestas mejoradas según el puesto.",
        descEn: "Practice realistic job interviews with tailored feedback, scoring, and improved answers.",
        url: {
          es: "https://chatgpt.com/g/g-68b8ce3bc27081918bfb0bd103077ad6-coimagen-interview-coach-ai",
          en: "https://chatgpt.com/g/g-68b8d69a90d881919a92c0c8599d46af-coimagen-interview-coach-ai",
        },
      },
    ],
  },
  {
    themeEs: "Bienes Raíces y Viajes",
    themeEn: "Real Estate & Travel",
    accentHex: "#f59e0b",
    items: [
      {
        icon: "🏠",
        name: "Real Estate Baja AI",
        descEs: "Asistente inmobiliario para explorar y calificar oportunidades de compra, renta e inversión en Tijuana, Rosarito y Mexicali.",
        descEn: "Real estate assistant for exploring and qualifying buying, rental, and investment opportunities in Tijuana, Rosarito, and Mexicali.",
        url: {
          es: "https://chatgpt.com/g/g-68ca1c2e0b60819183e16461c8d7eba1-coimagen-real-estate-baja-ai",
          en: "https://chatgpt.com/g/g-68ca242fb28c819198b49bb256265df7-coimagen-real-estate-baja-ai",
        },
      },
      {
        icon: "✈️",
        name: "Cheap Flights AI",
        descEs: "Encuentra estrategias, rutas, fechas flexibles y aeropuertos alternativos para ahorrar en vuelos y planificar viajes.",
        descEn: "Find cheap flights, alternative routes, and legal money-saving strategies.",
        url: {
          es: "https://chatgpt.com/g/g-68dee211616481918228a938b4145c06-coimagen-vuelos-baratos-ia",
          en: "https://chatgpt.com/g/g-68def36c74308191a6a32650f869a6fb-coimagen-cheap-flights-ai",
        },
      },
    ],
  },
  {
    themeEs: "Investigación y Tecnología",
    themeEn: "Research & Technology",
    accentHex: "#00CFFF",
    items: [
      {
        icon: "🔍",
        name: "Market Research Analyst",
        descEs: "Analiza estudios, encuestas, reportes y datos de mercado para generar insights basados en evidencia.",
        descEn: "Market research specialist based only on uploaded files.",
        url: {
          es: "https://chatgpt.com/g/g-68bb6c6f73f8819184ce07cc4da53520-coimagen-market-research-analyst",
          en: "https://chatgpt.com/g/g-68bb71e69cd88191a0bff22ff6d510d9-coimagen-market-research-analyst",
        },
      },
      {
        icon: "🕸️",
        name: "Ethical Web Scraper AI",
        descEs: "Asistente experto en scrapers legales, éticos y robustos.",
        descEn: "Designs responsible web scrapers in Python and Node.js for public or authorized data.",
        url: {
          es: "https://chatgpt.com/g/g-68b8fa4487248191ba1778c6668ee2bd-coimagen-ethical-web-scraper-ai",
          en: "https://chatgpt.com/g/g-68b8feff0b348191b507103bb80331d9-coimagen-ethical-web-scraper-ai",
        },
      },
      {
        icon: "🛒",
        name: "E-Commerce AI",
        descEs: "Diseña y optimiza tu estrategia de comercio electrónico, desde la tienda hasta el crecimiento digital.",
        descEn: "Design and optimize your e-commerce strategy, from online stores to digital sales growth.",
        url: {
          es: "https://chatgpt.com/g/g-68a5248744a881919fe9698066feafc3-coimagen-e-commerce-ai",
          en: "https://chatgpt.com/g/g-68c3622ffd10819190d60cec2892b722-coimagen-e-commerce-ai",
        },
      },
    ],
  },
  {
    themeEs: "Arquitectura y Diseño",
    themeEn: "Architecture & Design",
    accentHex: "#A855F7",
    items: [
      {
        icon: "🏛️",
        name: "Architecture AI",
        descEs: "Transforma ideas y bosquejos arquitectónicos en conceptos visuales, renders, documentación ejecutiva y presentaciones profesionales con IA.",
        descEn: "Transforms architectural ideas and sketches into AI-powered visuals, renders, and presentations.",
        url: {
          es: "https://chatgpt.com/g/g-68def4d1a48c8191b89f6d4efa7182c8-coimagen-arquitectura-ia",
          en: "https://chatgpt.com/g/g-68def6cd4fa88191880c830f1bcead4a-coimagen-architecture-ai",
        },
      },
    ],
  },
];
