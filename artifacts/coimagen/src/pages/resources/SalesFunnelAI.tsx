import { ServiceLandingTemplate, ServiceContent } from "@/components/templates/ServiceLandingTemplate";

export const content: ServiceContent = {
  slug: "recursos/sales-funnel-ai",
  accentColor: "lime",
  accentHex: "#A3E635",
  icon: "🧲",
  category: { es: "Recursos IA", en: "AI Resources" },
  schemaType: "SoftwareApplication",
  schemaExtra: {
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://www.coimagenmedia.com/recursos/sales-funnel-ai",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },
  seoTitle: {
    es: "Sales Funnel AI — GPT Gratuito para Embudos de Venta | Coimagen Media",
    en: "Sales Funnel AI — Free GPT for Sales Funnels | Coimagen Media",
  },
  metaDesc: {
    es: "Diseña tu embudo de ventas, automatiza tu proceso comercial y crea copy persuasivo gratis con Sales Funnel AI, el GPT de Coimagen Media para negocios de servicios.",
    en: "Design your sales funnel, automate your sales process, and write persuasive copy for free with Sales Funnel AI, Coimagen Media's GPT for service businesses.",
  },
  hero: {
    title: {
      es: "Sales Funnel AI: diseña tu embudo de ventas con IA",
      en: "Sales Funnel AI: Design Your Sales Funnel With AI",
    },
    subtitle: {
      es: "Un GPT gratuito de Coimagen Media que diseña embudos de venta, automatiza tus procesos comerciales y crea copy persuasivo para negocios de servicios — directo en ChatGPT, sin instalar nada. Piénsalo como el mapa que convierte visitas y mensajes sueltos en una secuencia de pasos que lleva a un prospecto hasta el cierre.",
      en: "A free GPT by Coimagen Media that designs sales funnels, automates your sales processes, and writes persuasive copy for service-based businesses — right inside ChatGPT, nothing to install. Think of it as the map that turns scattered visits and messages into a step-by-step sequence that carries a prospect all the way to the close.",
    },
    benefit: {
      es: "100% gratuito · Sin registro adicional · Disponible en español e inglés",
      en: "100% free · No extra sign-up · Available in Spanish and English",
    },
  },
  gptLink: {
    name: "Sales Funnel AI",
    url: {
      es: "https://chatgpt.com/g/g-68b8be1e93108191aa5689d29b1f9442-sales-funnel-ai-coimagen-media",
      en: "https://chatgpt.com/g/g-6a5b10c4b2388191bf2f661a74b4fc80-sales-funnel-ai-coimagen-media",
    },
  },
  pain: {
    items: [
      { icon: "😵", text: { es: "Vendes por instinto, sin un proceso claro que puedas repetir con cada prospecto nuevo.", en: "You sell by instinct, with no clear process you can repeat with every new prospect." } },
      { icon: "📝", text: { es: "Escribir mensajes de venta te toma horas y nunca estás seguro de si van a convencer.", en: "Writing sales messages takes hours, and you're never quite sure they'll actually persuade." } },
      { icon: "🕳️", text: { es: "No sabes en qué etapa se te están yendo los prospectos: ¿el primer mensaje, el seguimiento o el cierre?", en: "You don't know where prospects are dropping off: the first message, the follow-up, or the close?" } },
      { icon: "🔁", text: { es: "Cada vez que alguien pregunta por tu servicio, empiezas la conversación de ventas desde cero.", en: "Every time someone asks about your service, you start the sales conversation from scratch." } },
      { icon: "🧩", text: { es: "Tienes ideas sueltas de marketing, pero no un embudo que las conecte en un solo proceso.", en: "You have scattered marketing ideas, but no funnel that connects them into a single process." } },
      { icon: "💸", text: { es: "Contratar a un consultor de ventas o a un copywriter no está en tu presupuesto ahora mismo.", en: "Hiring a sales consultant or a copywriter isn't in your budget right now." } },
      { icon: "🎯", text: { es: "Sabes que necesitas un embudo de ventas, pero no sabes por dónde empezar a construirlo.", en: "You know you need a sales funnel, but you don't know where to start building one." } },
      { icon: "📬", text: { es: "Respondes a cada prospecto de forma distinta, según el ánimo o el tiempo que tengas ese día.", en: "You respond to each prospect differently, depending on your mood or how much time you have that day." } },
    ],
  },
  solution: {
    steps: [
      {
        icon: "🧭",
        title: { es: "Diseño de embudos de venta", en: "Sales funnel design" },
        desc: {
          es: "Un embudo de venta es el camino que recorre un prospecto desde que te conoce hasta que se convierte en cliente: atracción, interés, decisión y cierre. Sales Funnel AI te ayuda a mapear ese camino para tu negocio de servicios específico, definiendo qué necesita escuchar tu prospecto en cada etapa para avanzar a la siguiente.",
          en: "A sales funnel is the path a prospect follows from first hearing about you to becoming a client: attention, interest, decision, and close. Sales Funnel AI helps you map that path for your specific service business, defining what your prospect needs to hear at each stage to move forward.",
        },
      },
      {
        icon: "⚙️",
        title: { es: "Automatización de procesos comerciales", en: "Sales process automation" },
        desc: {
          es: "Automatizar tu proceso de ventas significa convertir pasos que hoy haces manualmente — como el seguimiento a un prospecto o la respuesta a preguntas frecuentes — en una secuencia clara y repetible. El GPT te ayuda a estructurar esos pasos para que no dependan de que te acuerdes de hacerlos uno por uno.",
          en: "Automating your sales process means turning steps you currently do by hand — like following up with a prospect or answering common questions — into a clear, repeatable sequence. The GPT helps you structure those steps so they don't depend on you remembering to do them one by one.",
        },
      },
      {
        icon: "✍️",
        title: { es: "Copy persuasivo", en: "Persuasive copywriting" },
        desc: {
          es: "Un copy que convierte no es el que suena bonito, sino el que responde a la objeción real de tu prospecto en el momento correcto. Sales Funnel AI redacta mensajes, correos y textos de venta adaptados a cada etapa del embudo, pensados para negocios de servicios donde la confianza es la principal barrera de compra.",
          en: "Copy that converts isn't copy that sounds nice — it's copy that answers your prospect's real objection at the right moment. Sales Funnel AI writes messages, emails, and sales copy tailored to each stage of the funnel, built for service businesses where trust is the main barrier to buying.",
        },
      },
    ],
  },
  benefits: {
    items: [
      { icon: "🗺️", title: { es: "Un proceso, no adivinanzas", en: "A process, not guesswork" }, desc: { es: "Sabrás exactamente qué decirle a un prospecto según en qué etapa del embudo se encuentra, en vez de improvisar cada conversación.", en: "You'll know exactly what to say to a prospect based on where they are in the funnel, instead of improvising every conversation." } },
      { icon: "⏱️", title: { es: "Menos tiempo escribiendo desde cero", en: "Less time writing from scratch" }, desc: { es: "El GPT te da un punto de partida redactado para cada mensaje de venta, que tú ajustas y personalizas en minutos.", en: "The GPT gives you a drafted starting point for every sales message, which you adjust and personalize in minutes." } },
      { icon: "🔁", title: { es: "Un proceso repetible", en: "A repeatable process" }, desc: { es: "Una vez que defines tu embudo, lo puedes usar con cada prospecto nuevo en lugar de reinventar la rueda cada vez.", en: "Once your funnel is defined, you can use it with every new prospect instead of reinventing the wheel each time." } },
      { icon: "🎯", title: { es: "Mensajes pensados para tu tipo de negocio", en: "Messaging built for your type of business" }, desc: { es: "El GPT está enfocado en negocios de servicios, así que entiende que tu proceso de venta depende de generar confianza, no solo de mostrar un producto.", en: "The GPT is focused on service businesses, so it understands that your sales process depends on building trust, not just showing off a product." } },
      { icon: "🆓", title: { es: "Sin costo ni curva de aprendizaje", en: "No cost, no learning curve" }, desc: { es: "Se usa directo dentro de ChatGPT con una conversación normal — no necesitas aprender un software nuevo ni pagar una licencia.", en: "It runs right inside ChatGPT through normal conversation — no new software to learn, no license to pay for." } },
      { icon: "🌐", title: { es: "Disponible en tu idioma", en: "Available in your language" }, desc: { es: "Existe una versión en español y otra en inglés, para que trabajes en el idioma en el que realmente vendes.", en: "There's a Spanish version and an English version, so you can work in the language you actually sell in." } },
    ],
  },
  includes: {
    items: [
      { es: "Acceso gratuito al GPT en ChatGPT", en: "Free access to the GPT on ChatGPT" },
      { es: "Versión en español y en inglés", en: "Spanish and English versions" },
      { es: "Sin registro adicional — solo necesitas una cuenta de ChatGPT", en: "No extra sign-up — just a ChatGPT account" },
      { es: "Diseño de embudo de venta paso a paso", en: "Step-by-step sales funnel design" },
      { es: "Ayuda para automatizar tu proceso comercial", en: "Help automating your sales process" },
      { es: "Copy de ventas listo para adaptar a tu negocio", en: "Sales copy ready to adapt to your business" },
      { es: "Disponible 24/7 desde cualquier dispositivo", en: "Available 24/7 from any device" },
      { es: "Creado y mantenido por Coimagen Media", en: "Built and maintained by Coimagen Media" },
    ],
  },
  workProcessOverride: [
    { icon: "💬", es: "Abre el GPT", en: "Open the GPT" },
    { icon: "🏢", es: "Cuéntale tu negocio", en: "Tell it about your business" },
    { icon: "🧭", es: "Recibe tu embudo y tu copy", en: "Get your funnel and copy" },
    { icon: "🚀", es: "Aplícalo en tu proceso de venta", en: "Apply it to your sales process" },
  ],
  diagnosisCta: true,
  faq: [
    {
      q: { es: "¿Qué es Sales Funnel AI?", en: "What is Sales Funnel AI?" },
      a: { es: "Es un GPT personalizado creado por Coimagen Media dentro de ChatGPT que diseña embudos de venta, automatiza procesos comerciales y crea copy persuasivo para negocios de servicios. Lo usas escribiéndole en lenguaje normal, como si le explicaras tu negocio a un colega.", en: "It's a custom GPT built by Coimagen Media inside ChatGPT that designs sales funnels, automates sales processes, and writes persuasive copy for service-based businesses. You use it by typing in plain language, the same way you'd explain your business to a colleague." },
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
      q: { es: "¿Reemplaza a un experto en ventas o marketing?", en: "Does it replace a sales or marketing expert?" },
      a: { es: "No. Es un punto de partida que te ahorra tiempo y te da estructura, pero no sustituye la estrategia de alguien que conozca a fondo tu negocio. Si necesitas ese acompañamiento, puedes agendar un diagnóstico gratuito con Coimagen Media.", en: "No. It's a starting point that saves you time and gives you structure, but it doesn't replace the strategy of someone who deeply understands your business. If you need that kind of support, you can book a free diagnosis with Coimagen Media." },
    },
    {
      q: { es: "¿En qué idiomas está disponible?", en: "What languages is it available in?" },
      a: { es: "Hay dos versiones del GPT: una en español y otra en inglés, cada una con su propio link de acceso.", en: "There are two versions of the GPT: one in Spanish and one in English, each with its own access link." },
    },
    {
      q: { es: "¿Coimagen Media guarda lo que escribo en el GPT?", en: "Does Coimagen Media store what I write in the GPT?" },
      a: { es: "La conversación ocurre dentro de ChatGPT y se rige por las políticas de privacidad de OpenAI. Coimagen Media no recibe ni almacena lo que escribes dentro del GPT.", en: "The conversation happens inside ChatGPT and is governed by OpenAI's privacy policies. Coimagen Media doesn't receive or store what you write inside the GPT." },
    },
  ],
};

export default function SalesFunnelAI() {
  return <ServiceLandingTemplate content={content} />;
}
