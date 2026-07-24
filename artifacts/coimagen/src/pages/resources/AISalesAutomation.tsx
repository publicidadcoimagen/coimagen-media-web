import { ServiceLandingTemplate, ServiceContent } from "@/components/templates/ServiceLandingTemplate";

export const content: ServiceContent = {
  slug: "recursos/ai-sales-automation",
  accentColor: "cyan",
  accentHex: "#00CFFF",
  icon: "🔗",
  category: { es: "Recursos IA", en: "AI Resources" },
  schemaType: "SoftwareApplication",
  schemaExtra: {
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://www.coimagenmedia.com/recursos/ai-sales-automation",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },
  seoTitle: {
    es: "Coimagen AI Sales Automation — GPT Gratuito para Sistemas de Venta | Coimagen Media",
    en: "Coimagen AI Sales Automation — Free GPT for Sales Systems | Coimagen Media",
  },
  metaDesc: {
    es: "Diseña tu sistema de ventas automatizadas con IA: leads, WhatsApp, CRM y seguimiento, gratis con Coimagen AI Sales Automation, el GPT de Coimagen Media.",
    en: "Design your automated sales system with AI: leads, WhatsApp, CRM, and follow-up — free with Coimagen AI Sales Automation, Coimagen Media's GPT.",
  },
  hero: {
    title: {
      es: "Coimagen AI Sales Automation: diseña tu sistema de ventas con IA",
      en: "Coimagen AI Sales Automation: Design Your Sales System With AI",
    },
    subtitle: {
      es: "Un GPT gratuito de Coimagen Media que diseña el sistema que conecta tus leads, WhatsApp, CRM y seguimiento en un solo proceso automatizado — no el mensaje de venta ni un diagnóstico general, sino la fontanería que hace que tu proceso de ventas funcione solo.",
      en: "A free GPT by Coimagen Media that designs the system connecting your leads, WhatsApp, CRM, and follow-up into a single automated process — not the sales message or a general diagnosis, but the plumbing that makes your sales process run on its own.",
    },
    benefit: {
      es: "100% gratuito · Un GPT por idioma · Sin registro adicional",
      en: "100% free · One GPT per language · No extra sign-up",
    },
  },
  gptLink: {
    name: "Coimagen AI Sales Automation",
    url: {
      es: "https://chatgpt.com/g/g-6896c14d48188191a69c710f567ca73d-coimagen-ai-sales-automation",
      en: "https://chatgpt.com/g/g-68c366abf4708191b620db3656f9a767-coimagen-ai-sales-automation",
    },
  },
  pain: {
    items: [
      { icon: "💬", text: { es: "Contestas WhatsApp de negocio a mano, sin ningún sistema detrás que organice las conversaciones.", en: "You reply to business WhatsApp messages by hand, with no system behind them to organize the conversations." } },
      { icon: "🗃️", text: { es: "Los leads te llegan por varios canales y no quedan guardados en ningún lugar organizado.", en: "Leads come in through several channels and don't end up organized anywhere." } },
      { icon: "🕳️", text: { es: "Se te olvida darle seguimiento a un prospecto después del primer mensaje.", en: "You forget to follow up with a prospect after the first message." } },
      { icon: "📊", text: { es: "No sabes cuántos leads activos tienes ni en qué etapa está cada uno.", en: "You don't know how many active leads you have or what stage each one is in." } },
      { icon: "🔁", text: { es: "Escribes la misma respuesta de WhatsApp desde cero cada vez, aunque sea la misma pregunta de siempre.", en: "You write the same WhatsApp reply from scratch every time, even though it's the same question as always." } },
      { icon: "🧩", text: { es: "Tu WhatsApp, tu CRM (si tienes uno) y tu proceso de ventas no están conectados entre sí.", en: "Your WhatsApp, your CRM (if you have one), and your sales process aren't connected to each other." } },
    ],
  },
  solution: {
    steps: [
      {
        icon: "🎯",
        title: { es: "Leads", en: "Leads" },
        desc: {
          es: "El primer paso de cualquier sistema de ventas es saber de dónde vienen tus leads y qué pasa con ellos apenas llegan. El GPT te ayuda a definir cómo capturas un lead nuevo y qué información necesitas guardar de él desde el primer contacto.",
          en: "The first step of any sales system is knowing where your leads come from and what happens to them the moment they arrive. The GPT helps you define how you capture a new lead and what information you need to save about them from the very first contact.",
        },
      },
      {
        icon: "💬",
        title: { es: "WhatsApp", en: "WhatsApp" },
        desc: {
          es: "WhatsApp suele ser el canal donde realmente se cierran las ventas, pero también el que menos estructura tiene. El GPT te ayuda a diseñar cómo debería funcionar tu WhatsApp de negocio: qué respuestas se pueden estandarizar y en qué punto necesita intervenir una persona.",
          en: "WhatsApp is often the channel where sales actually close, but also the one with the least structure. The GPT helps you design how your business WhatsApp should work: which replies can be standardized, and at what point a person actually needs to step in.",
        },
      },
      {
        icon: "🗂️",
        title: { es: "CRM", en: "CRM" },
        desc: {
          es: "Un CRM no sirve de nada si nadie lo usa o si no está organizado según tu proceso real de ventas. El GPT te ayuda a definir qué etapas debería tener tu CRM y qué información necesitas ver de un vistazo para saber en qué punto está cada prospecto.",
          en: "A CRM is useless if nobody uses it or if it's not organized around your actual sales process. The GPT helps you define what stages your CRM should have and what information you need to see at a glance to know where each prospect stands.",
        },
      },
      {
        icon: "🔁",
        title: { es: "Seguimiento", en: "Follow-up" },
        desc: {
          es: "La mayoría de las ventas se pierden no por un mal primer mensaje, sino por falta de seguimiento. El GPT te ayuda a diseñar una secuencia de seguimiento — cuándo volver a escribirle a un prospecto y con qué mensaje — para que ningún lead se quede sin respuesta.",
          en: "Most sales are lost not because of a bad first message, but because of missing follow-up. The GPT helps you design a follow-up sequence — when to reach back out to a prospect and with what message — so no lead is ever left without a response.",
        },
      },
      {
        icon: "🧩",
        title: { es: "Diseño del sistema completo", en: "Full system design" },
        desc: {
          es: "Leads, WhatsApp, CRM y seguimiento no deberían funcionar por separado. El GPT te ayuda a conectar las cuatro piezas en un solo proceso, para que un lead nuevo entre por un lado y salga convertido en cliente sin que se pierda en el camino.",
          en: "Leads, WhatsApp, CRM, and follow-up shouldn't run separately. The GPT helps you connect all four pieces into a single process, so a new lead comes in one end and comes out a converted client without getting lost along the way.",
        },
      },
    ],
  },
  benefits: {
    items: [
      { icon: "🔗", title: { es: "Un sistema, no herramientas sueltas", en: "A system, not scattered tools" }, desc: { es: "WhatsApp, CRM y seguimiento dejan de ser piezas aisladas y empiezan a funcionar como un solo proceso.", en: "WhatsApp, CRM, and follow-up stop being isolated pieces and start working as a single process." } },
      { icon: "⏱️", title: { es: "Menos mensajes escritos desde cero", en: "Fewer messages written from scratch" }, desc: { es: "Tienes una base de respuestas y secuencias diseñadas, en vez de improvisar cada conversación de WhatsApp.", en: "You have a base of designed replies and sequences, instead of improvising every WhatsApp conversation." } },
      { icon: "🧲", title: { es: "Ningún lead se pierde por falta de seguimiento", en: "No lead slips through from lack of follow-up" }, desc: { es: "Al tener una secuencia de seguimiento definida, dejas de depender de acordarte de escribirle a cada prospecto.", en: "With a defined follow-up sequence, you stop depending on remembering to message every prospect." } },
      { icon: "📊", title: { es: "Visibilidad de tu proceso de ventas", en: "Visibility into your sales process" }, desc: { es: "Sabes cuántos leads tienes activos y en qué etapa está cada uno, en vez de cargarlo todo en la memoria.", en: "You know how many active leads you have and what stage each one is in, instead of keeping it all in your head." } },
      { icon: "⏳", title: { es: "Menos tiempo administrativo", en: "Less administrative time" }, desc: { es: "Menos tiempo organizando manualmente conversaciones y datos de prospectos, más tiempo cerrando ventas.", en: "Less time manually organizing conversations and prospect data, more time actually closing sales." } },
      { icon: "🧭", title: { es: "Un punto de partida real para automatizar", en: "A real starting point for automation" }, desc: { es: "En vez de teoría general sobre automatización, tienes el diseño concreto de tu propio sistema para implementar.", en: "Instead of general automation theory, you get the concrete design of your own system, ready to implement." } },
    ],
  },
  includes: {
    items: [
      { es: "Acceso gratuito al GPT en ChatGPT", en: "Free access to the GPT on ChatGPT" },
      { es: "Un GPT en español y otro en inglés", en: "One GPT in Spanish and one in English" },
      { es: "Sin registro adicional — solo necesitas una cuenta de ChatGPT", en: "No extra sign-up — just a ChatGPT account" },
      { es: "Diseño de tu sistema de leads, WhatsApp, CRM y seguimiento", en: "Design of your leads, WhatsApp, CRM, and follow-up system" },
      { es: "Recomendaciones de estructura para tu CRM", en: "Structure recommendations for your CRM" },
      { es: "Ayuda para diseñar secuencias de seguimiento", en: "Help designing follow-up sequences" },
      { es: "Disponible 24/7 desde cualquier dispositivo", en: "Available 24/7 from any device" },
      { es: "Creado y mantenido por Coimagen Media", en: "Built and maintained by Coimagen Media" },
    ],
  },
  workProcessOverride: [
    { icon: "💬", es: "Abre el GPT", en: "Open the GPT" },
    { icon: "🏢", es: "Cuéntale cómo vendes hoy", en: "Tell it how you sell today" },
    { icon: "🧩", es: "Recibe el diseño de tu sistema", en: "Get your system design" },
    { icon: "🚀", es: "Impleméntalo con tu equipo o herramientas", en: "Implement it with your team or tools" },
  ],
  diagnosisCta: true,
  faq: [
    {
      q: { es: "¿Qué es Coimagen AI Sales Automation?", en: "What is Coimagen AI Sales Automation?" },
      a: { es: "Es un GPT personalizado creado por Coimagen Media dentro de ChatGPT que diseña el sistema que conecta tus leads, WhatsApp, CRM y seguimiento en un solo proceso de ventas automatizado.", en: "It's a custom GPT built by Coimagen Media inside ChatGPT that designs the system connecting your leads, WhatsApp, CRM, and follow-up into a single automated sales process." },
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
      q: { es: "¿El GPT conecta mi WhatsApp y mi CRM de verdad, o solo me dice cómo hacerlo?", en: "Does the GPT actually connect my WhatsApp and CRM, or just tell me how?" },
      a: { es: "El GPT diseña el sistema: te ayuda a definir cómo deberían conectarse tus leads, WhatsApp, CRM y seguimiento. No configura por ti herramientas como WhatsApp Business API o un CRM real — para esa implementación técnica, puedes agendar un diagnóstico gratuito con Coimagen Media.", en: "The GPT designs the system: it helps you define how your leads, WhatsApp, CRM, and follow-up should connect. It doesn't configure tools like the WhatsApp Business API or a real CRM for you — for that technical implementation, you can book a free diagnosis with Coimagen Media." },
    },
    {
      q: { es: "¿Por qué hay dos GPTs distintos en vez de uno solo bilingüe?", en: "Why are there two separate GPTs instead of one bilingual one?" },
      a: { es: "A diferencia de Coimagen Pro AI, que es un solo GPT bilingüe, esta herramienta tiene un GPT dedicado para español y otro para inglés, cada uno con su propio link.", en: "Unlike Coimagen Pro AI, which is a single bilingual GPT, this tool has one dedicated GPT for Spanish and another for English, each with its own link." },
    },
    {
      q: { es: "¿Coimagen Media guarda lo que escribo en el GPT?", en: "Does Coimagen Media store what I write in the GPT?" },
      a: { es: "La conversación ocurre dentro de ChatGPT y se rige por las políticas de privacidad de OpenAI. Coimagen Media no recibe ni almacena lo que escribes dentro del GPT.", en: "The conversation happens inside ChatGPT and is governed by OpenAI's privacy policies. Coimagen Media doesn't receive or store what you write inside the GPT." },
    },
  ],
};

export default function AISalesAutomation() {
  return <ServiceLandingTemplate content={content} />;
}
