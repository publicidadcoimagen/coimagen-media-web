import { ServiceLandingTemplate, ServiceContent } from "@/components/templates/ServiceLandingTemplate";

export const content: ServiceContent = {
  slug: "recursos/funnel-copy-ai",
  accentColor: "pink",
  accentHex: "#F472B6",
  icon: "✍️",
  category: { es: "Recursos IA", en: "AI Resources" },
  schemaType: "SoftwareApplication",
  schemaExtra: {
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://www.coimagenmedia.com/recursos/funnel-copy-ai",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },
  seoTitle: {
    es: "Coimagen Funnel Copy AI — GPT Gratuito para Copy Persuasivo | Coimagen Media",
    en: "Coimagen Funnel Copy AI — Free GPT for Persuasive Funnel Copy | Coimagen Media",
  },
  metaDesc: {
    es: "Crea copy persuasivo para tu funnel con AIDA, PAS, FAB y variantes A/B — landing pages, emails, WhatsApp y anuncios, gratis con Coimagen Funnel Copy AI, el GPT de Coimagen Media.",
    en: "Create persuasive funnel copy with AIDA, PAS, FAB, and A/B variants — landing pages, emails, WhatsApp, and ads, free with Coimagen Funnel Copy AI, Coimagen Media's GPT.",
  },
  hero: {
    title: {
      es: "Coimagen Funnel Copy AI: el copy persuasivo para tu funnel, con frameworks probados",
      en: "Coimagen Funnel Copy AI: Persuasive Funnel Copy, Built on Proven Frameworks",
    },
    subtitle: {
      es: "Un GPT gratuito de Coimagen Media que escribe el copy persuasivo para landing pages, emails, WhatsApp y anuncios, usando frameworks de copywriting como AIDA, PAS y FAB, más variantes para pruebas A/B. No diseña tu embudo — eso lo hace Sales Funnel AI —, escribe el copy que va dentro de él.",
      en: "A free GPT by Coimagen Media that writes persuasive copy for landing pages, emails, WhatsApp, and ads, using copywriting frameworks like AIDA, PAS, and FAB, plus variants for A/B testing. It doesn't design your funnel — that's what Sales Funnel AI does — it writes the copy that goes inside it.",
    },
    benefit: {
      es: "100% gratuito · Un GPT por idioma · Sin registro adicional",
      en: "100% free · One GPT per language · No extra sign-up",
    },
  },
  gptLink: {
    name: "Coimagen Funnel Copy AI",
    url: {
      es: "https://chatgpt.com/g/g-68ca2ec1cddc81919d7199ddb1fa277e-coimagen-funnel-copy-ai",
      en: "https://chatgpt.com/g/g-68ca2f5b4d4c8191a8eff3b8a03a4479-coimagen-funnel-copy-ai",
    },
  },
  pain: {
    items: [
      { icon: "📄", text: { es: "Te quedas mirando la página en blanco frente al headline de una landing page.", en: "You stare at a blank page trying to write a landing page headline." } },
      { icon: "📧", text: { es: "Tus secuencias de email suenan repetitivas y no llevan a ninguna acción concreta.", en: "Your email sequences sound repetitive and don't lead to any concrete action." } },
      { icon: "💬", text: { es: "Tus mensajes de WhatsApp de venta se sienten robóticos o demasiado insistentes.", en: "Your WhatsApp sales messages feel robotic or too pushy." } },
      { icon: "📢", text: { es: "Inviertes en anuncios pagados con un copy que no detiene el scroll de nadie.", en: "You pay for ads with copy that doesn't stop anyone's scroll." } },
      { icon: "🎲", text: { es: "Escribes cada mensaje de venta a sentimiento, sin una estructura probada detrás.", en: "You write every sales message by feel, with no proven structure behind it." } },
      { icon: "🔁", text: { es: "Usas siempre el mismo texto porque nunca tienes tiempo de escribir una variante para probar.", en: "You always use the same copy because you never have time to write a variant to test." } },
    ],
  },
  solution: {
    steps: [
      {
        icon: "🧩",
        title: { es: "Frameworks de copywriting", en: "Copywriting Frameworks" },
        desc: {
          es: "Antes de escribir, el GPT te ayuda a elegir el framework correcto según el objetivo del mensaje: AIDA para captar atención y guiar hasta la acción, PAS para partir de un dolor real, o FAB para traducir características en beneficios concretos.",
          en: "Before writing, the GPT helps you pick the right framework for the message's goal: AIDA to grab attention and guide toward action, PAS to start from a real pain point, or FAB to translate features into concrete benefits.",
        },
      },
      {
        icon: "🖥️",
        title: { es: "Copy para landing pages", en: "Landing Page Copy" },
        desc: {
          es: "El GPT redacta el headline, los subtítulos y las llamadas a la acción de tu landing page, aplicando el framework elegido para que cada sección empuje al visitante hacia el siguiente paso.",
          en: "The GPT writes the headline, subheadings, and calls to action for your landing page, applying the chosen framework so every section pushes the visitor toward the next step.",
        },
      },
      {
        icon: "📧",
        title: { es: "Copy para email", en: "Email Copy" },
        desc: {
          es: "El GPT escribe secuencias de correo y líneas de asunto pensadas para que se abran y se lean, no solo para que se envíen.",
          en: "The GPT writes email sequences and subject lines designed to actually get opened and read, not just sent.",
        },
      },
      {
        icon: "💬",
        title: { es: "Copy para WhatsApp y anuncios", en: "WhatsApp & Ad Copy" },
        desc: {
          es: "El GPT adapta el mensaje a formatos cortos: WhatsApp de venta y anuncios pagados, donde cada palabra cuenta porque el espacio y la atención son limitados.",
          en: "The GPT adapts the message to short formats: sales WhatsApp and paid ads, where every word counts because space and attention are limited.",
        },
      },
      {
        icon: "🔀",
        title: { es: "Variantes A/B", en: "A/B Variants" },
        desc: {
          es: "El GPT te da más de una versión del mismo copy para que puedas probar cuál convierte mejor con tu audiencia real, en vez de quedarte con la primera idea.",
          en: "The GPT gives you more than one version of the same copy so you can test which one actually converts better with your real audience, instead of settling for the first idea.",
        },
      },
    ],
  },
  benefits: {
    items: [
      { icon: "⏱️", title: { es: "Menos tiempo en blanco frente al mensaje", en: "Less time stuck staring at the message" }, desc: { es: "Empiezas a escribir con un framework y una estructura ya definidos, en vez de partir de cero cada vez.", en: "You start writing with a framework and structure already defined, instead of starting from scratch every time." } },
      { icon: "🧩", title: { es: "Copy con estructura probada, no a sentimiento", en: "Copy built on proven structure, not guesswork" }, desc: { es: "Cada mensaje sigue un framework de copywriting reconocido, en vez de depender de si ese día se te ocurrió algo bueno.", en: "Every message follows a recognized copywriting framework, instead of depending on whether you happened to think of something good that day." } },
      { icon: "🎯", title: { es: "Copy adaptado a cada formato", en: "Copy adapted to each format" }, desc: { es: "Landing page, email, WhatsApp y anuncios no se escriben igual — el GPT ajusta tono y extensión según el formato que necesites.", en: "Landing pages, email, WhatsApp, and ads aren't written the same way — the GPT adjusts tone and length to the format you need." } },
      { icon: "🔀", title: { es: "Variantes listas para probar", en: "Variants ready to test" }, desc: { es: "Tienes más de una versión del mismo mensaje, para dejar de adivinar cuál copy funciona mejor.", en: "You get more than one version of the same message, so you stop guessing which copy actually works better." } },
      { icon: "🤝", title: { es: "Menos dependencia de un copywriter externo", en: "Less reliance on an outside copywriter" }, desc: { es: "Tienes un punto de partida redactado que puedes ajustar tú mismo, sin esperar ni pagar por cada pieza de copy.", en: "You get a drafted starting point you can adjust yourself, without waiting on or paying for every single piece of copy." } },
      { icon: "🌐", title: { es: "Disponible en tu idioma", en: "Available in your language" }, desc: { es: "Hay un GPT en español y otro en inglés, para que trabajes en el idioma en el que realmente le vendes a tu audiencia.", en: "There's a GPT in Spanish and one in English, so you can work in the language you actually sell to your audience in." } },
    ],
  },
  includes: {
    items: [
      { es: "Acceso gratuito al GPT en ChatGPT", en: "Free access to the GPT on ChatGPT" },
      { es: "Un GPT en español y otro en inglés", en: "One GPT in Spanish and one in English" },
      { es: "Sin registro adicional — solo necesitas una cuenta de ChatGPT", en: "No extra sign-up — just a ChatGPT account" },
      { es: "Copy para landing pages, email, WhatsApp y anuncios", en: "Copy for landing pages, email, WhatsApp, and ads" },
      { es: "Aplicación de frameworks AIDA, PAS y FAB", en: "Application of the AIDA, PAS, and FAB frameworks" },
      { es: "Variantes de copy para pruebas A/B", en: "Copy variants for A/B testing" },
      { es: "Disponible 24/7 desde cualquier dispositivo", en: "Available 24/7 from any device" },
      { es: "Creado y mantenido por Coimagen Media", en: "Built and maintained by Coimagen Media" },
    ],
  },
  workProcessOverride: [
    { icon: "💬", es: "Abre el GPT", en: "Open the GPT" },
    { icon: "🏢", es: "Cuéntale el formato y el objetivo", en: "Tell it the format and the goal" },
    { icon: "✍️", es: "Recibe el copy con el framework aplicado", en: "Get the copy with the framework applied" },
    { icon: "🚀", es: "Úsalo o adáptalo en tu funnel", en: "Use it or adapt it in your funnel" },
  ],
  diagnosisCta: true,
  faq: [
    {
      q: { es: "¿Qué es Coimagen Funnel Copy AI?", en: "What is Coimagen Funnel Copy AI?" },
      a: { es: "Es un GPT personalizado creado por Coimagen Media dentro de ChatGPT que escribe copy persuasivo para landing pages, emails, WhatsApp y anuncios, usando frameworks de copywriting como AIDA, PAS y FAB, más variantes para pruebas A/B.", en: "It's a custom GPT built by Coimagen Media inside ChatGPT that writes persuasive copy for landing pages, emails, WhatsApp, and ads, using copywriting frameworks like AIDA, PAS, and FAB, plus variants for A/B testing." },
    },
    {
      q: { es: "¿Cuánto cuesta usarlo?", en: "How much does it cost?" },
      a: { es: "Nada. Es una herramienta gratuita de Coimagen Media. Lo único que necesitas es una cuenta de ChatGPT.", en: "Nothing. It's a free tool from Coimagen Media. All you need is a ChatGPT account." },
    },
    {
      q: { es: "¿En qué se diferencia de Sales Funnel AI?", en: "How is it different from Sales Funnel AI?" },
      a: { es: "Sales Funnel AI diseña el embudo completo: la estrategia de qué decir en cada etapa y cómo automatizar tu proceso comercial. Coimagen Funnel Copy AI no diseña tu embudo — escribe el copy que va dentro de él: el texto específico de tu landing page, tus emails, tu WhatsApp y tus anuncios, usando frameworks de copywriting reconocidos.", en: "Sales Funnel AI designs the full funnel: the strategy for what to say at each stage and how to automate your sales process. Coimagen Funnel Copy AI doesn't design your funnel — it writes the copy that goes inside it: the specific text for your landing page, your emails, your WhatsApp, and your ads, using recognized copywriting frameworks." },
    },
    {
      q: { es: "¿Necesito una cuenta de pago de ChatGPT?", en: "Do I need a paid ChatGPT account?" },
      a: { es: "No necesariamente. Los GPTs personalizados se pueden usar con una cuenta gratuita de ChatGPT, aunque OpenAI puede aplicar límites de uso según tu plan.", en: "Not necessarily. Custom GPTs can be used with a free ChatGPT account, though OpenAI may apply usage limits depending on your plan." },
    },
    {
      q: { es: "¿El copy que escribe está garantizado a convertir?", en: "Is the copy it writes guaranteed to convert?" },
      a: { es: "No. El GPT aplica frameworks de copywriting probados y te da variantes para probar, pero ninguna herramienta puede garantizar conversión: eso depende también de tu oferta, tu audiencia y tu tráfico. Por eso incluye variantes para pruebas A/B, en vez de prometer un único texto perfecto.", en: "No. The GPT applies proven copywriting frameworks and gives you variants to test, but no tool can guarantee conversion — that also depends on your offer, your audience, and your traffic. That's why it includes variants for A/B testing, instead of promising one single perfect piece of copy." },
    },
    {
      q: { es: "¿Coimagen Media guarda lo que escribo en el GPT?", en: "Does Coimagen Media store what I write in the GPT?" },
      a: { es: "La conversación ocurre dentro de ChatGPT y se rige por las políticas de privacidad de OpenAI. Coimagen Media no recibe ni almacena lo que escribes dentro del GPT.", en: "The conversation happens inside ChatGPT and is governed by OpenAI's privacy policies. Coimagen Media doesn't receive or store what you write inside the GPT." },
    },
  ],
};

export default function FunnelCopyAI() {
  return <ServiceLandingTemplate content={content} />;
}
