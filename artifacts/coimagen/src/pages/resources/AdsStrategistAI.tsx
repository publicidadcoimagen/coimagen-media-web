import { ServiceLandingTemplate, ServiceContent } from "@/components/templates/ServiceLandingTemplate";

const content: ServiceContent = {
  slug: "recursos/ads-strategist-ai",
  accentColor: "emerald",
  accentHex: "#10B981",
  icon: "💰",
  category: { es: "Recursos IA", en: "AI Resources" },
  schemaType: "SoftwareApplication",
  schemaExtra: {
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://www.coimagenmedia.com/recursos/ads-strategist-ai",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },
  seoTitle: {
    es: "Coimagen Ads Strategist AI — GPT Gratuito para Estrategia de Publicidad Digital | Coimagen Media",
    en: "Coimagen Ads Strategist AI — Free GPT for Digital Advertising Strategy | Coimagen Media",
  },
  metaDesc: {
    es: "Diseña y optimiza tu estrategia de publicidad digital para Google Ads, Meta Ads, Display, Video y Shopping, gratis con Coimagen Ads Strategist AI, el GPT de Coimagen Media.",
    en: "Design and optimize your digital advertising strategy for Google Ads, Meta Ads, Display, Video, and Shopping — free with Coimagen Ads Strategist AI, Coimagen Media's GPT.",
  },
  hero: {
    title: {
      es: "Coimagen Ads Strategist AI: estrategia de publicidad pagada para Google Ads, Meta Ads y más",
      en: "Coimagen Ads Strategist AI: Paid Advertising Strategy for Google Ads, Meta Ads, and More",
    },
    subtitle: {
      es: "Un GPT gratuito de Coimagen Media que diseña y optimiza estrategias de publicidad digital para Google Ads, Meta Ads, Display, Video y Shopping — con campañas, audiencias, keywords, creatividades y KPIs. No es gestión orgánica de redes como Community Manager Pro: es medios pagados, con presupuesto real detrás.",
      en: "A free GPT by Coimagen Media that designs and optimizes digital advertising strategies for Google Ads, Meta Ads, Display, Video, and Shopping — with campaigns, audiences, keywords, creatives, and KPIs. It's not organic social media management like Community Manager Pro: it's paid media, with a real budget behind it.",
    },
    benefit: {
      es: "100% gratuito · Un GPT por idioma · Sin registro adicional",
      en: "100% free · One GPT per language · No extra sign-up",
    },
  },
  gptLink: {
    name: "Coimagen Ads Strategist AI",
    url: {
      es: "https://chatgpt.com/g/g-689d1893280c8191951dacdc9f48b696-coimagen-ads-strategist-ai",
      en: "https://chatgpt.com/g/g-68c363a5bb8081918b972214ad69f707-coimagen-ads-strategist-ai",
    },
  },
  pain: {
    items: [
      { icon: "🤔", text: { es: "No sabes en qué plataforma invertir: Google Ads, Meta Ads, Display, Video o Shopping — todas prometen resultados.", en: "You don't know which platform to invest in: Google Ads, Meta Ads, Display, Video, or Shopping — they all promise results." } },
      { icon: "💸", text: { es: "Gastas presupuesto en campañas sin una audiencia bien definida detrás.", en: "You spend your budget on campaigns with no well-defined audience behind them." } },
      { icon: "🔑", text: { es: "No sabes qué keywords elegir para que tu anuncio aparezca frente a la persona correcta.", en: "You don't know which keywords to pick so your ad shows up in front of the right person." } },
      { icon: "🎨", text: { es: "Usas la misma creatividad durante meses porque armar una nueva te toma tiempo.", en: "You use the same creative for months because putting together a new one takes time." } },
      { icon: "📊", text: { es: "No tienes claro qué KPIs mirar para saber si una campaña realmente está funcionando.", en: "You're not sure which KPIs to look at to know if a campaign is actually working." } },
      { icon: "🌀", text: { es: "Manejar varias plataformas de ads al mismo tiempo te desborda.", en: "Managing several ad platforms at once overwhelms you." } },
    ],
  },
  solution: {
    steps: [
      {
        icon: "🎯",
        title: { es: "Estrategia de campañas", en: "Campaign Strategy" },
        desc: {
          es: "El GPT te ayuda a definir qué plataforma y qué tipo de campaña usar según tu objetivo — Google Ads, Meta Ads, Display, Video o Shopping — en vez de elegir a ciegas.",
          en: "The GPT helps you define which platform and campaign type to use based on your goal — Google Ads, Meta Ads, Display, Video, or Shopping — instead of choosing blindly.",
        },
      },
      {
        icon: "👥",
        title: { es: "Audiencias", en: "Audiences" },
        desc: {
          es: "El GPT te ayuda a definir a quién le hablas y cómo segmentarlo en cada plataforma, para que tu presupuesto llegue a la persona correcta, no a cualquiera.",
          en: "The GPT helps you define who you're talking to and how to segment them on each platform, so your budget reaches the right person, not just anyone.",
        },
      },
      {
        icon: "🔑",
        title: { es: "Keywords", en: "Keywords" },
        desc: {
          es: "El GPT investiga y te propone las palabras clave relevantes para tus campañas de búsqueda, pensadas para la intención real de quien está buscando.",
          en: "The GPT researches and suggests the relevant keywords for your search campaigns, built around the real intent of the person searching.",
        },
      },
      {
        icon: "🎨",
        title: { es: "Creatividades", en: "Creatives" },
        desc: {
          es: "El GPT te ayuda a estructurar el texto y el concepto visual de tu anuncio, adaptado al formato de cada plataforma.",
          en: "The GPT helps you structure the text and visual concept of your ad, adapted to each platform's format.",
        },
      },
      {
        icon: "📊",
        title: { es: "KPIs y optimización", en: "KPIs & Optimization" },
        desc: {
          es: "El GPT te ayuda a definir qué métricas importan para tu objetivo — CTR, CPC, ROAS, CPA — y cómo interpretarlas para ajustar la campaña, en vez de dejarla corriendo sin revisión.",
          en: "The GPT helps you define which metrics matter for your goal — CTR, CPC, ROAS, CPA — and how to read them to adjust the campaign, instead of letting it run unchecked.",
        },
      },
      {
        icon: "💵",
        title: { es: "Presupuesto y pujas", en: "Budget & Bidding" },
        desc: {
          es: "El GPT te ayuda a definir cómo distribuir tu presupuesto entre plataformas y qué estrategia de puja usar — costo por clic manual, puja automática o por objetivo — según cuánto tengas para invertir.",
          en: "The GPT helps you define how to split your budget across platforms and which bidding strategy to use — manual cost-per-click, automated bidding, or goal-based bidding — based on how much you have to invest.",
        },
      },
    ],
  },
  benefits: {
    items: [
      { icon: "🎯", title: { es: "Inviertes en la plataforma correcta", en: "You invest in the right platform" }, desc: { es: "Eliges entre Google Ads, Meta Ads, Display, Video o Shopping según tu objetivo real, no por moda.", en: "You choose between Google Ads, Meta Ads, Display, Video, or Shopping based on your actual goal, not trends." } },
      { icon: "👥", title: { es: "Presupuesto dirigido a la audiencia correcta", en: "Budget aimed at the right audience" }, desc: { es: "Tu inversión llega a quien realmente puede convertirse en cliente, en vez de dispersarse entre cualquiera.", en: "Your spend reaches people who can actually become customers, instead of scattering across anyone." } },
      { icon: "🔑", title: { es: "Menos presupuesto desperdiciado en búsquedas equivocadas", en: "Less budget wasted on the wrong searches" }, desc: { es: "Las keywords están alineadas con la intención real de búsqueda, no elegidas a ciegas.", en: "Your keywords are aligned with real search intent, not picked blindly." } },
      { icon: "🎨", title: { es: "Creatividades renovadas, no un anuncio congelado", en: "Fresh creatives, not one frozen ad" }, desc: { es: "Tienes un punto de partida para renovar tus anuncios, en vez de dejar el mismo corriendo por meses.", en: "You get a starting point to refresh your ads, instead of leaving the same one running for months." } },
      { icon: "📊", title: { es: "Claridad sobre qué mirar", en: "Clarity on what to watch" }, desc: { es: "Sabes qué mirar — CTR, CPC, ROAS, CPA — para saber si tu campaña realmente está funcionando, en vez de números que no te dicen nada.", en: "You know what to watch — CTR, CPC, ROAS, CPA — to tell whether your campaign is actually working, instead of numbers that don't tell you anything." } },
      { icon: "💵", title: { es: "Presupuesto con una estrategia de puja detrás", en: "Budget backed by a real bidding strategy" }, desc: { es: "Sabes cómo distribuir tu inversión entre plataformas, en vez de repartirla a ojo entre todas por igual.", en: "You know how to split your spend across platforms, instead of dividing it evenly by guesswork." } },
      { icon: "🌐", title: { es: "Disponible en tu idioma", en: "Available in your language" }, desc: { es: "Hay un GPT en español y otro en inglés, para que diseñes tu estrategia en el idioma en el que realmente trabajas.", en: "There's a GPT in Spanish and one in English, so you can design your strategy in the language you actually work in." } },
    ],
  },
  includes: {
    items: [
      { es: "Acceso gratuito al GPT en ChatGPT", en: "Free access to the GPT on ChatGPT" },
      { es: "Un GPT en español y otro en inglés", en: "One GPT in Spanish and one in English" },
      { es: "Sin registro adicional — solo necesitas una cuenta de ChatGPT", en: "No extra sign-up — just a ChatGPT account" },
      { es: "Estrategia para Google Ads, Meta Ads, Display, Video y Shopping", en: "Strategy for Google Ads, Meta Ads, Display, Video, and Shopping" },
      { es: "Definición de audiencias y segmentación", en: "Audience definition and segmentation" },
      { es: "Investigación de keywords para campañas de búsqueda", en: "Keyword research for search campaigns" },
      { es: "Estrategia de presupuesto y pujas (CTR, CPC, ROAS, CPA)", en: "Budget and bidding strategy (CTR, CPC, ROAS, CPA)" },
      { es: "Disponible 24/7 desde cualquier dispositivo", en: "Available 24/7 from any device" },
      { es: "Creado y mantenido por Coimagen Media", en: "Built and maintained by Coimagen Media" },
    ],
  },
  workProcessOverride: [
    { icon: "💬", es: "Abre el GPT", en: "Open the GPT" },
    { icon: "🏢", es: "Cuéntale tu negocio, objetivo y presupuesto", en: "Tell it your business, goal, and budget" },
    { icon: "🎯", es: "Recibe la estrategia de campañas, audiencias y KPIs", en: "Get your campaign, audience, and KPI strategy" },
    { icon: "🚀", es: "Configúrala en tus plataformas de ads", en: "Set it up on your ad platforms" },
  ],
  diagnosisCta: true,
  faq: [
    {
      q: { es: "¿Qué es Coimagen Ads Strategist AI?", en: "What is Coimagen Ads Strategist AI?" },
      a: { es: "Es un GPT personalizado creado por Coimagen Media dentro de ChatGPT que diseña y optimiza estrategias de publicidad digital para Google Ads, Meta Ads, Display, Video y Shopping, con campañas, audiencias, keywords, creatividades, presupuesto/pujas y KPIs como CTR, CPC, ROAS y CPA.", en: "It's a custom GPT built by Coimagen Media inside ChatGPT that designs and optimizes digital advertising strategies for Google Ads, Meta Ads, Display, Video, and Shopping, with campaigns, audiences, keywords, creatives, budget/bidding, and KPIs like CTR, CPC, ROAS, and CPA." },
    },
    {
      q: { es: "¿Cuánto cuesta usarlo?", en: "How much does it cost?" },
      a: { es: "Nada. Es una herramienta gratuita de Coimagen Media. Lo único que necesitas es una cuenta de ChatGPT.", en: "Nothing. It's a free tool from Coimagen Media. All you need is a ChatGPT account." },
    },
    {
      q: { es: "¿En qué se diferencia de Community Manager Pro?", en: "How is it different from Community Manager Pro?" },
      a: { es: "Community Manager Pro gestiona tu presencia orgánica en redes sociales: calendario, contenido y métricas de alcance. Coimagen Ads Strategist AI es distinto: se especializa en medios pagados — Google Ads, Meta Ads, Display, Video y Shopping — con audiencias, keywords y presupuesto real detrás de cada campaña.", en: "Community Manager Pro manages your organic social media presence: calendar, content, and reach metrics. Coimagen Ads Strategist AI is different: it specializes in paid media — Google Ads, Meta Ads, Display, Video, and Shopping — with audiences, keywords, and a real budget behind every campaign." },
    },
    {
      q: { es: "¿Necesito una cuenta de pago de ChatGPT?", en: "Do I need a paid ChatGPT account?" },
      a: { es: "No necesariamente. Los GPTs personalizados se pueden usar con una cuenta gratuita de ChatGPT, aunque OpenAI puede aplicar límites de uso según tu plan.", en: "Not necessarily. Custom GPTs can be used with a free ChatGPT account, though OpenAI may apply usage limits depending on your plan." },
    },
    {
      q: { es: "¿El GPT crea y gestiona mis campañas por mí?", en: "Does the GPT create and manage my campaigns for me?" },
      a: { es: "No. El GPT diseña la estrategia — campañas, audiencias, keywords, creatividades y KPIs — pero no configura tus cuentas publicitarias reales ni gasta presupuesto por ti. Para esa implementación, puedes agendar un diagnóstico gratuito con Coimagen Media.", en: "No. The GPT designs the strategy — campaigns, audiences, keywords, creatives, and KPIs — but it doesn't set up your actual ad accounts or spend budget for you. For that implementation, you can book a free diagnosis with Coimagen Media." },
    },
    {
      q: { es: "¿Coimagen Media guarda lo que escribo en el GPT?", en: "Does Coimagen Media store what I write in the GPT?" },
      a: { es: "La conversación ocurre dentro de ChatGPT y se rige por las políticas de privacidad de OpenAI. Coimagen Media no recibe ni almacena lo que escribes dentro del GPT.", en: "The conversation happens inside ChatGPT and is governed by OpenAI's privacy policies. Coimagen Media doesn't receive or store what you write inside the GPT." },
    },
  ],
};

export default function AdsStrategistAI() {
  return <ServiceLandingTemplate content={content} />;
}
