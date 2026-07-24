import { ServiceLandingTemplate, ServiceContent } from "@/components/templates/ServiceLandingTemplate";

export const content: ServiceContent = {
  slug: "recursos/market-intelligence-ai",
  accentColor: "amber",
  accentHex: "#F59E0B",
  icon: "📡",
  category: { es: "Recursos IA", en: "AI Resources" },
  schemaType: "SoftwareApplication",
  schemaExtra: {
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://www.coimagenmedia.com/recursos/market-intelligence-ai",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },
  seoTitle: {
    es: "Coimagen Market Intelligence AI — GPT Gratuito para Análisis de Competencia | Coimagen Media",
    en: "Coimagen Market Intelligence AI — Free GPT for Competitive Market Analysis | Coimagen Media",
  },
  metaDesc: {
    es: "Analiza competidores, tendencias y oportunidades para crear reportes ejecutivos y estrategias competitivas, gratis con Coimagen Market Intelligence AI, el GPT de Coimagen Media.",
    en: "Analyze competitors, trends, and market opportunities to create executive reports and competitive differentiation strategies — free with Coimagen Market Intelligence AI, Coimagen Media's GPT.",
  },
  hero: {
    title: {
      es: "Coimagen Market Intelligence AI: analiza a tu competencia y el mercado con IA",
      en: "Coimagen Market Intelligence AI: Analyze Your Competitors and Market With AI",
    },
    subtitle: {
      es: "Un GPT gratuito de Coimagen Media que analiza competidores, tendencias y oportunidades de mercado para crear reportes ejecutivos y estrategias de diferenciación competitiva. A diferencia de Coimagen Pro AI, que diagnostica tu propio negocio, esta herramienta mira hacia afuera: qué está haciendo tu competencia y qué está cambiando en tu industria.",
      en: "A free GPT by Coimagen Media that analyzes competitors, trends, and market opportunities to build executive reports and competitive differentiation strategies. Unlike Coimagen Pro AI, which diagnoses your own business, this tool looks outward: what your competitors are doing and what's changing in your industry.",
    },
    benefit: {
      es: "100% gratuito · Un GPT por idioma · Sin registro adicional",
      en: "100% free · One GPT per language · No extra sign-up",
    },
  },
  gptLink: {
    name: "Coimagen Market Intelligence AI",
    url: {
      es: "https://chatgpt.com/g/g-68ca30f061b88191b3d8c9665185f451-coimagen-market-intelligence-ai",
      en: "https://chatgpt.com/g/g-68ca32b7da808191a5c1ef4f4f8ab5bc-coimagen-market-intelligence-ai",
    },
  },
  pain: {
    items: [
      { icon: "🤷", text: { es: "No sabes qué están haciendo realmente tus competidores, solo supones.", en: "You don't know what your competitors are actually doing, you just assume." } },
      { icon: "📉", text: { es: "Te enteras de una tendencia del mercado cuando varios competidores ya la están usando.", en: "You find out about a market trend only after several competitors are already using it." } },
      { icon: "📋", text: { es: "No tienes un reporte ejecutivo claro para presentar oportunidades a tu equipo o socios.", en: "You don't have a clear executive report to present opportunities to your team or partners." } },
      { icon: "🎯", text: { es: "Tomas decisiones sin saber qué diferencia realmente a tu marca de la competencia.", en: "You make decisions without knowing what actually sets your brand apart from the competition." } },
      { icon: "⏳", text: { es: "Investigar competidores manualmente te toma horas que no tienes.", en: "Researching competitors by hand takes hours you don't have." } },
      { icon: "🕳️", text: { es: "No sabes qué oportunidades de mercado no está aprovechando nadie todavía.", en: "You don't know what market opportunities nobody is taking advantage of yet." } },
    ],
  },
  solution: {
    steps: [
      {
        icon: "🔍",
        title: { es: "Análisis de competidores", en: "Competitor Analysis" },
        desc: {
          es: "El GPT te ayuda a analizar qué están haciendo tus competidores — su posicionamiento, su oferta y su forma de comunicarse — para que dejes de suponer y empieces a saber.",
          en: "The GPT helps you analyze what your competitors are doing — their positioning, their offer, and how they communicate — so you stop guessing and start knowing.",
        },
      },
      {
        icon: "📈",
        title: { es: "Tendencias de mercado", en: "Market Trends" },
        desc: {
          es: "El GPT identifica qué está cambiando en tu industria, para que puedas anticiparte en vez de reaccionar cuando ya todos los demás lo están haciendo.",
          en: "The GPT identifies what's changing in your industry, so you can get ahead of it instead of reacting once everyone else already is.",
        },
      },
      {
        icon: "🕳️",
        title: { es: "Oportunidades", en: "Opportunities" },
        desc: {
          es: "El GPT te ayuda a identificar huecos del mercado que tu competencia todavía no está aprovechando, para que sepas dónde tiene sentido enfocarte.",
          en: "The GPT helps you identify gaps in the market your competitors aren't taking advantage of yet, so you know where it makes sense to focus.",
        },
      },
      {
        icon: "📋",
        title: { es: "Reportes ejecutivos", en: "Executive Reports" },
        desc: {
          es: "El GPT organiza sus hallazgos en un reporte claro y presentable — con estructuras reconocidas como un análisis FODA o una matriz de posicionamiento — listo para compartir con tu equipo o tus socios.",
          en: "The GPT organizes its findings into a clear, presentable report — using recognized structures like a SWOT analysis or a positioning matrix — ready to share with your team or partners.",
        },
      },
      {
        icon: "🎯",
        title: { es: "Estrategia de diferenciación", en: "Differentiation Strategy" },
        desc: {
          es: "Con el análisis de competidores, tendencias y oportunidades ya hecho, el GPT te ayuda a definir qué te hace distinto y cómo comunicarlo.",
          en: "With the competitor, trend, and opportunity analysis already done, the GPT helps you define what makes you different and how to communicate it.",
        },
      },
      {
        icon: "📶",
        title: { es: "Monitoreo con información actualizada", en: "Updated Monitoring" },
        desc: {
          es: "El GPT tiene búsqueda en internet activada, así que puede consultar información más actual sobre tus competidores y tendencias durante la conversación, en vez de depender solo de lo que sabía hasta su entrenamiento.",
          en: "The GPT has web browsing enabled, so it can look up more current information about your competitors and trends during the conversation, instead of relying only on what it knew as of its training.",
        },
      },
    ],
  },
  benefits: {
    items: [
      { icon: "🔍", title: { es: "Sabes en vez de suponer", en: "You know instead of assuming" }, desc: { es: "Tienes información real sobre tu competencia, en vez de basar tus decisiones en impresiones sueltas.", en: "You get real information about your competition, instead of basing decisions on scattered impressions." } },
      { icon: "📈", title: { es: "Te anticipas a las tendencias", en: "You get ahead of trends" }, desc: { es: "Identificas cambios en tu industria antes de que sean obvios para todos, en vez de reaccionar tarde.", en: "You spot changes in your industry before they're obvious to everyone, instead of reacting late." } },
      { icon: "🕳️", title: { es: "Encuentras huecos que otros no ven", en: "You find gaps others don't see" }, desc: { es: "Sabes qué oportunidades de mercado nadie está aprovechando todavía, en vez de competir siempre en el mismo terreno.", en: "You know which market opportunities nobody is taking advantage of yet, instead of always competing on the same ground." } },
      { icon: "📋", title: { es: "Reportes listos para presentar", en: "Reports ready to present" }, desc: { es: "Tienes un documento ejecutivo claro con estructuras reconocidas (FODA, matriz de posicionamiento), en vez de armar una presentación desde cero cada vez.", en: "You get a clear executive document using recognized structures (SWOT, positioning matrix), instead of building a presentation from scratch every time." } },
      { icon: "⏱️", title: { es: "Menos horas de investigación manual", en: "Fewer hours of manual research" }, desc: { es: "El GPT te da un punto de partida estructurado, en vez de que tengas que revisar competidor por competidor a mano.", en: "The GPT gives you a structured starting point, instead of you having to check competitor after competitor by hand." } },
      { icon: "📶", title: { es: "Información más actual, no solo de entrenamiento", en: "More current information, not just training data" }, desc: { es: "El GPT puede buscar en internet durante la conversación, así que no dependes únicamente de lo que sabía hasta su última actualización.", en: "The GPT can search the web during the conversation, so you're not limited to only what it knew as of its last update." } },
      { icon: "🌐", title: { es: "Disponible en tu idioma", en: "Available in your language" }, desc: { es: "Hay un GPT en español y otro en inglés, para que analices tu mercado en el idioma en el que realmente trabajas.", en: "There's a GPT in Spanish and one in English, so you can analyze your market in the language you actually work in." } },
    ],
  },
  includes: {
    items: [
      { es: "Acceso gratuito al GPT en ChatGPT", en: "Free access to the GPT on ChatGPT" },
      { es: "Un GPT en español y otro en inglés", en: "One GPT in Spanish and one in English" },
      { es: "Sin registro adicional — solo necesitas una cuenta de ChatGPT", en: "No extra sign-up — just a ChatGPT account" },
      { es: "Análisis de competidores y su posicionamiento", en: "Analysis of competitors and their positioning" },
      { es: "Identificación de tendencias y oportunidades de mercado", en: "Identification of market trends and opportunities" },
      { es: "Reportes ejecutivos listos para compartir", en: "Executive reports ready to share" },
      { es: "Búsqueda en internet activada para información más actual", en: "Web browsing enabled for more current information" },
      { es: "Disponible 24/7 desde cualquier dispositivo", en: "Available 24/7 from any device" },
    ],
  },
  workProcessOverride: [
    { icon: "💬", es: "Abre el GPT", en: "Open the GPT" },
    { icon: "🏢", es: "Cuéntale tu industria y tus competidores conocidos", en: "Tell it your industry and known competitors" },
    { icon: "📡", es: "Recibe el análisis y el reporte ejecutivo", en: "Get the analysis and the executive report" },
    { icon: "🚀", es: "Úsalo para definir tu estrategia de diferenciación", en: "Use it to define your differentiation strategy" },
  ],
  diagnosisCta: true,
  faq: [
    {
      q: { es: "¿Qué es Coimagen Market Intelligence AI?", en: "What is Coimagen Market Intelligence AI?" },
      a: { es: "Es un GPT personalizado creado por Coimagen Media dentro de ChatGPT que analiza competidores, tendencias y oportunidades de mercado para crear reportes ejecutivos y estrategias de diferenciación competitiva.", en: "It's a custom GPT built by Coimagen Media inside ChatGPT that analyzes competitors, trends, and market opportunities to build executive reports and competitive differentiation strategies." },
    },
    {
      q: { es: "¿Cuánto cuesta usarlo?", en: "How much does it cost?" },
      a: { es: "Nada. Es una herramienta gratuita de Coimagen Media. Lo único que necesitas es una cuenta de ChatGPT.", en: "Nothing. It's a free tool from Coimagen Media. All you need is a ChatGPT account." },
    },
    {
      q: { es: "¿En qué se diferencia de Coimagen Pro AI?", en: "How is it different from Coimagen Pro AI?" },
      a: { es: "Coimagen Pro AI diagnostica tu propio negocio: tu estrategia digital y tu transformación interna. Coimagen Market Intelligence AI mira hacia afuera: analiza a tus competidores, las tendencias de tu industria y las oportunidades de mercado que todavía nadie está aprovechando.", en: "Coimagen Pro AI diagnoses your own business: your digital strategy and internal transformation. Coimagen Market Intelligence AI looks outward: it analyzes your competitors, your industry's trends, and the market opportunities nobody is taking advantage of yet." },
    },
    {
      q: { es: "¿Necesito una cuenta de pago de ChatGPT?", en: "Do I need a paid ChatGPT account?" },
      a: { es: "No necesariamente. Los GPTs personalizados se pueden usar con una cuenta gratuita de ChatGPT, aunque OpenAI puede aplicar límites de uso según tu plan.", en: "Not necessarily. Custom GPTs can be used with a free ChatGPT account, though OpenAI may apply usage limits depending on your plan." },
    },
    {
      q: { es: "¿Los datos que da son en tiempo real o de una fuente oficial de investigación de mercado?", en: "Is the data it gives real-time, or from an official market research source?" },
      a: { es: "El GPT puede buscar en internet información más actual sobre competidores y tendencias durante la conversación, pero eso no lo convierte en un estudio de mercado formal: no tiene acceso a datos internos de tus competidores (ventas, estrategia real, planes no públicos), y lo que encuentra en la web puede estar incompleto o desactualizado según qué tan bien indexada esté esa información. Es un punto de partida sólido para tu análisis, no un reemplazo de una investigación de mercado pagada y formal.", en: "The GPT can search the web for more current information about competitors and trends during the conversation, but that doesn't make it a formal market study: it doesn't have access to your competitors' internal data (sales, real strategy, non-public plans), and what it finds online can be incomplete or outdated depending on how well that information is indexed. It's a solid starting point for your analysis, not a replacement for paid, formal market research." },
    },
    {
      q: { es: "¿Coimagen Media guarda lo que escribo en el GPT?", en: "Does Coimagen Media store what I write in the GPT?" },
      a: { es: "La conversación ocurre dentro de ChatGPT y se rige por las políticas de privacidad de OpenAI. Coimagen Media no recibe ni almacena lo que escribes dentro del GPT.", en: "The conversation happens inside ChatGPT and is governed by OpenAI's privacy policies. Coimagen Media doesn't receive or store what you write inside the GPT." },
    },
  ],
};

export default function MarketIntelligenceAI() {
  return <ServiceLandingTemplate content={content} />;
}
