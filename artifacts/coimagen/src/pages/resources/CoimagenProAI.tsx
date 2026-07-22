import { ServiceLandingTemplate, ServiceContent } from "@/components/templates/ServiceLandingTemplate";

const GPT_URL = "https://chatgpt.com/g/g-68c36c6814688191a354f94b53c0f667-coimagen-pro-ai";

const content: ServiceContent = {
  slug: "recursos/coimagen-pro-ai",
  accentColor: "purple",
  accentHex: "#8B5CF6",
  icon: "🧠",
  category: { es: "Recursos IA", en: "AI Resources" },
  schemaType: "SoftwareApplication",
  schemaExtra: {
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://www.coimagenmedia.com/recursos/coimagen-pro-ai",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },
  seoTitle: {
    es: "Coimagen Pro AI — GPT Gratuito de Diagnóstico Digital | Coimagen Media",
    en: "Coimagen Pro AI — Free AI Digital Strategy Diagnosis | Coimagen Media",
  },
  metaDesc: {
    es: "Diagnostica y transforma tu estrategia digital con IA: marketing, leads, automatización y funnels, gratis con Coimagen Pro AI, el GPT de Coimagen Media.",
    en: "Diagnose and transform your digital strategy with AI: marketing, leads, automation, and funnels — free with Coimagen Pro AI, Coimagen Media's GPT.",
  },
  hero: {
    title: {
      es: "Coimagen Pro AI: diagnostica y transforma tu estrategia digital",
      en: "Coimagen Pro AI: Diagnose and Transform Your Digital Strategy",
    },
    subtitle: {
      es: "Un GPT gratuito de Coimagen Media que primero diagnostica en qué está fallando tu estrategia digital y luego te da un plan de transformación en IA, marketing, leads, automatización y funnels — directo en ChatGPT, en un solo GPT bilingüe.",
      en: "A free GPT by Coimagen Media that first diagnoses what's failing in your digital strategy, then gives you a transformation plan across AI, marketing, leads, automation, and funnels — right inside ChatGPT, in a single bilingual GPT.",
    },
    benefit: {
      es: "100% gratuito · Un solo GPT bilingüe · Sin registro adicional",
      en: "100% free · One bilingual GPT · No extra sign-up",
    },
  },
  gptLink: {
    name: "Coimagen Pro AI",
    url: { es: GPT_URL, en: GPT_URL },
  },
  pain: {
    items: [
      { icon: "🤔", text: { es: "Tienes marketing, ventas y automatización corriendo por separado, sin un diagnóstico que te diga qué conecta con qué.", en: "You've got marketing, sales, and automation running separately, with no diagnosis telling you how they connect." } },
      { icon: "📉", text: { es: "No sabes si tu verdadero problema está en la generación de leads, en el seguimiento, o en cómo cierras.", en: "You don't know if your real problem is lead generation, follow-up, or how you close." } },
      { icon: "🧭", text: { es: "Has probado varias tácticas de marketing digital, pero nunca un plan que las conecte todas.", en: "You've tried several digital marketing tactics, but never a plan that connects them all." } },
      { icon: "⏳", text: { es: "Sigues haciendo a mano procesos que podrías automatizar, y no sabes por dónde empezar.", en: "You're still doing by hand processes you could automate, and you don't know where to start." } },
      { icon: "🤖", text: { es: "Sabes que deberías estar usando IA en tu negocio, pero no sabes en qué parte aplica de verdad.", en: "You know you should be using AI in your business, but you're not sure where it actually applies." } },
      { icon: "🗂️", text: { es: "Tienes ideas y tácticas sueltas, pero no un diagnóstico que te diga qué atacar primero.", en: "You have scattered ideas and tactics, but no diagnosis telling you what to tackle first." } },
    ],
  },
  solution: {
    steps: [
      {
        icon: "🔎",
        title: { es: "Diagnóstico de tu estrategia actual", en: "Diagnosis of your current strategy" },
        desc: {
          es: "Antes de cambiar nada, Coimagen Pro AI te hace las preguntas correctas sobre tu negocio, tu marketing y tus procesos actuales para identificar en qué parte de tu estrategia digital está el verdadero cuello de botella — no una lista genérica de recomendaciones, sino un diagnóstico basado en tu situación real.",
          en: "Before changing anything, Coimagen Pro AI asks the right questions about your business, your marketing, and your current processes to identify where the real bottleneck is in your digital strategy — not a generic checklist, but a diagnosis based on your actual situation.",
        },
      },
      {
        icon: "🧠",
        title: { es: "Aplicación de IA a tu negocio", en: "Applying AI to your business" },
        desc: {
          es: "La inteligencia artificial no sirve de nada si se aplica en el lugar equivocado. El GPT identifica en qué partes de tu operación — atención a clientes, contenido, análisis de datos — la IA puede quitarte trabajo real, en lugar de sugerirte herramientas genéricas que no resuelven tu problema.",
          en: "Artificial intelligence is useless if it's applied in the wrong place. The GPT identifies which parts of your operation — customer service, content, data analysis — AI can actually take work off your plate, instead of suggesting generic tools that don't solve your problem.",
        },
      },
      {
        icon: "📈",
        title: { es: "Marketing con dirección", en: "Marketing with direction" },
        desc: {
          es: "En lugar de sumar más tácticas de marketing sueltas, el GPT te ayuda a ordenar las que ya tienes (o las que te faltan) alrededor de un mismo objetivo, para que cada pieza de contenido o campaña tenga un propósito claro dentro de tu estrategia.",
          en: "Instead of piling on more scattered marketing tactics, the GPT helps you organize the ones you already have (or the ones you're missing) around a single objective, so every piece of content or campaign has a clear purpose within your strategy.",
        },
      },
      {
        icon: "🎯",
        title: { es: "Generación y seguimiento de leads", en: "Lead generation and follow-up" },
        desc: {
          es: "Un lead que no recibe seguimiento es una venta perdida. El GPT revisa cómo estás captando prospectos hoy y en qué punto se te están yendo, para que sepas si el problema está en la atracción, en la respuesta o en el cierre.",
          en: "A lead with no follow-up is a lost sale. The GPT reviews how you're currently capturing prospects and at what point they're slipping away, so you know whether the problem is attraction, response, or closing.",
        },
      },
      {
        icon: "⚙️",
        title: { es: "Automatización de procesos", en: "Process automation" },
        desc: {
          es: "Muchas tareas que haces manualmente — recordatorios, respuestas repetidas, seguimiento — se pueden convertir en un proceso automático. El GPT te ayuda a identificar cuáles tiene más sentido automatizar primero según el tiempo que te consumen.",
          en: "Many tasks you do manually — reminders, repeated replies, follow-up — can become an automated process. The GPT helps you identify which ones make the most sense to automate first based on how much time they cost you.",
        },
      },
      {
        icon: "🧭",
        title: { es: "Embudos de venta (funnels)", en: "Sales funnels" },
        desc: {
          es: "Como parte del diagnóstico general, el GPT también revisa si tienes un embudo de venta definido — el camino que sigue un prospecto hasta convertirse en cliente — y en qué etapa de ese camino se está perdiendo la mayoría de tus prospectos.",
          en: "As part of the overall diagnosis, the GPT also reviews whether you have a defined sales funnel — the path a prospect follows to become a client — and at which stage most of your prospects are dropping off.",
        },
      },
    ],
  },
  benefits: {
    items: [
      { icon: "🗺️", title: { es: "Ves tu estrategia completa, no partes sueltas", en: "You see your whole strategy, not scattered pieces" }, desc: { es: "En vez de mirar marketing, ventas y automatización por separado, tienes un diagnóstico que muestra cómo se conectan — o no — entre sí.", en: "Instead of looking at marketing, sales, and automation separately, you get a diagnosis that shows how they connect — or don't — with each other." } },
      { icon: "🎯", title: { es: "Sabes qué atacar primero", en: "You know what to tackle first" }, desc: { es: "El diagnóstico te da un orden de prioridad, no una lista larga de todo lo que podrías mejorar al mismo tiempo.", en: "The diagnosis gives you a priority order, not a long list of everything you could improve at once." } },
      { icon: "🔗", title: { es: "Marketing y leads conectados a un mismo objetivo", en: "Marketing and leads tied to one objective" }, desc: { es: "Dejas de tratar cada campaña o canal como algo aislado y empiezas a moverlos hacia el mismo resultado de negocio.", en: "You stop treating every campaign or channel as an isolated effort and start moving them toward the same business outcome." } },
      { icon: "⏱️", title: { es: "Menos trabajo manual repetitivo", en: "Less repetitive manual work" }, desc: { es: "Identificas qué procesos automatizar primero, en lugar de intentar automatizar todo a la vez sin un criterio claro.", en: "You identify which processes to automate first, instead of trying to automate everything at once with no clear criteria." } },
      { icon: "🧠", title: { es: "IA aplicada a tu negocio real, no genérica", en: "AI applied to your real business, not generic" }, desc: { es: "Las recomendaciones parten de lo que cuentas sobre tu negocio, no de una lista universal de herramientas de moda.", en: "The recommendations come from what you share about your business, not a generic list of trendy tools." } },
      { icon: "🆓", title: { es: "Sin costo ni instalación", en: "No cost, nothing to install" }, desc: { es: "Se usa directo dentro de ChatGPT, en el mismo idioma en que le escribas, sin licencias ni software adicional.", en: "It runs right inside ChatGPT, in whichever language you write to it, with no licenses or extra software." } },
    ],
  },
  includes: {
    items: [
      { es: "Acceso gratuito al GPT en ChatGPT", en: "Free access to the GPT on ChatGPT" },
      { es: "Un solo GPT bilingüe (responde en español o inglés)", en: "One bilingual GPT (responds in Spanish or English)" },
      { es: "Sin registro adicional — solo necesitas una cuenta de ChatGPT", en: "No extra sign-up — just a ChatGPT account" },
      { es: "Diagnóstico guiado de tu estrategia digital", en: "Guided diagnosis of your digital strategy" },
      { es: "Recomendaciones en marketing, leads, automatización y funnels", en: "Recommendations across marketing, leads, automation, and funnels" },
      { es: "Sugerencias de dónde aplicar IA en tu negocio", en: "Suggestions on where to apply AI in your business" },
      { es: "Disponible 24/7 desde cualquier dispositivo", en: "Available 24/7 from any device" },
      { es: "Creado y mantenido por Coimagen Media", en: "Built and maintained by Coimagen Media" },
    ],
  },
  workProcessOverride: [
    { icon: "💬", es: "Abre el GPT", en: "Open the GPT" },
    { icon: "🏢", es: "Cuéntale tu situación actual", en: "Tell it your current situation" },
    { icon: "🔎", es: "Recibe tu diagnóstico", en: "Get your diagnosis" },
    { icon: "🧭", es: "Aplica el plan por área", en: "Apply the plan area by area" },
  ],
  diagnosisCta: true,
  faq: [
    {
      q: { es: "¿Qué es Coimagen Pro AI?", en: "What is Coimagen Pro AI?" },
      a: { es: "Es un GPT personalizado creado por Coimagen Media dentro de ChatGPT que diagnostica tu estrategia digital y te da un plan de transformación en IA, marketing, leads, automatización y funnels.", en: "It's a custom GPT built by Coimagen Media inside ChatGPT that diagnoses your digital strategy and gives you a transformation plan across AI, marketing, leads, automation, and funnels." },
    },
    {
      q: { es: "¿Cuánto cuesta usarlo?", en: "How much does it cost?" },
      a: { es: "Nada. Es una herramienta gratuita de Coimagen Media. Lo único que necesitas es una cuenta de ChatGPT.", en: "Nothing. It's a free tool from Coimagen Media. All you need is a ChatGPT account." },
    },
    {
      q: { es: "¿Necesito una cuenta de pago de ChatGPT?", en: "Do I need a paid ChatGPT account?" },
      a: { es: "No necesariamente. Los GPTs personalizados se pueden usar con una cuenta gratuita de ChatGPT, aunque OpenAI puede aplicar límites de uso según tu plan.", en: "Not necessarily. Custom GPTs can be used with a free ChatGPT account, though OpenAI may apply usage limits depending on your plan." },
    },
    {
      q: { es: "¿Reemplaza a un consultor de marketing o estrategia?", en: "Does it replace a marketing or strategy consultant?" },
      a: { es: "No. Es un punto de partida que te da claridad y prioridades, pero no sustituye el acompañamiento de alguien que conozca a fondo tu negocio. Si necesitas ese acompañamiento, puedes agendar un diagnóstico gratuito con Coimagen Media.", en: "No. It's a starting point that gives you clarity and priorities, but it doesn't replace the guidance of someone who deeply understands your business. If you need that kind of support, you can book a free diagnosis with Coimagen Media." },
    },
    {
      q: { es: "¿En qué idiomas responde?", en: "What languages does it respond in?" },
      a: { es: "Es un solo GPT bilingüe: responde en español o en inglés según el idioma en el que le escribas, no hay dos versiones separadas como en otras herramientas de Coimagen Media.", en: "It's a single bilingual GPT: it responds in Spanish or English depending on the language you write to it — there aren't two separate versions like some of Coimagen Media's other tools." },
    },
    {
      q: { es: "¿Coimagen Media guarda lo que escribo en el GPT?", en: "Does Coimagen Media store what I write in the GPT?" },
      a: { es: "La conversación ocurre dentro de ChatGPT y se rige por las políticas de privacidad de OpenAI. Coimagen Media no recibe ni almacena lo que escribes dentro del GPT.", en: "The conversation happens inside ChatGPT and is governed by OpenAI's privacy policies. Coimagen Media doesn't receive or store what you write inside the GPT." },
    },
  ],
};

export default function CoimagenProAI() {
  return <ServiceLandingTemplate content={content} />;
}
