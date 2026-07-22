import { ServiceLandingTemplate, ServiceContent } from "@/components/templates/ServiceLandingTemplate";

const content: ServiceContent = {
  slug: "recursos/community-manager-pro",
  accentColor: "blue",
  accentHex: "#3B82F6",
  icon: "📱",
  category: { es: "Recursos IA", en: "AI Resources" },
  schemaType: "SoftwareApplication",
  schemaExtra: {
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://www.coimagenmedia.com/recursos/community-manager-pro",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },
  seoTitle: {
    es: "Coimagen Community Manager Pro — GPT Gratuito para Gestión de Redes Sociales | Coimagen Media",
    en: "Coimagen Community Manager Pro — Free GPT for Social Media Management | Coimagen Media",
  },
  metaDesc: {
    es: "Planifica y gestiona tu estrategia de redes sociales con IA: calendarios, copys, campañas, contenido, métricas, KPIs y reportes profesionales, gratis con Coimagen Community Manager Pro.",
    en: "Plan and manage your social media strategy with AI: calendars, copy, campaigns, content, metrics, KPIs, and professional reports — free with Coimagen Community Manager Pro.",
  },
  hero: {
    title: {
      es: "Coimagen Community Manager Pro: gestiona tus redes sociales de punta a punta con IA",
      en: "Coimagen Community Manager Pro: Manage Your Social Media End to End With AI",
    },
    subtitle: {
      es: "Un GPT gratuito de Coimagen Media que te ayuda a planificar y gestionar tu estrategia de redes sociales completa: calendario de contenido, copys, campañas pagadas, ideas de contenido y reportes de métricas. No es un solo texto puntual como Funnel Copy AI ni un artículo de blog como SEO Content AI — es la gestión integral de tu presencia en redes: qué publicar, cuándo, y cómo saber si funcionó.",
      en: "A free GPT by Coimagen Media that helps you plan and manage your entire social media strategy: content calendar, copy, paid campaigns, content ideas, and metrics reports. It's not a single piece of copy like Funnel Copy AI, or a blog article like SEO Content AI — it's the end-to-end management of your social media presence: what to post, when, and how to know if it worked.",
    },
    benefit: {
      es: "100% gratuito · Un GPT por idioma · Sin registro adicional",
      en: "100% free · One GPT per language · No extra sign-up",
    },
  },
  gptLink: {
    name: "Coimagen Community Manager Pro",
    url: {
      es: "https://chatgpt.com/g/g-68ca2a093f1881918cbcd79de72b27f6-coimagen-community-manager-ai",
      en: "https://chatgpt.com/g/g-68ca2b9a8b8881918e77d273a45f9972-coimagen-community-manager-ai",
    },
  },
  pain: {
    items: [
      { icon: "📅", text: { es: "Publicas sin calendario, decidiendo cada día qué subir sobre la marcha.", en: "You post with no calendar, deciding what to publish on the fly every day." } },
      { icon: "💡", text: { es: "Se te acaban las ideas de contenido y terminas repitiendo el mismo formato siempre.", en: "You run out of content ideas and end up repeating the same format over and over." } },
      { icon: "📢", text: { es: "No sabes cómo estructurar una campaña pagada de principio a fin.", en: "You don't know how to structure a paid campaign from start to finish." } },
      { icon: "📊", text: { es: "Armas los reportes de métricas a mano, mes a mes, desde cero.", en: "You build metrics reports by hand, from scratch, every single month." } },
      { icon: "🎯", text: { es: "No tienes claro qué KPIs realmente importan para tu negocio.", en: "You're not sure which KPIs actually matter for your business." } },
      { icon: "⏳", text: { es: "Manejar tus redes te consume horas que deberías dedicar a otra parte del negocio.", en: "Managing your social media eats up hours you should be spending elsewhere in the business." } },
    ],
  },
  solution: {
    steps: [
      {
        icon: "📅",
        title: { es: "Calendario de contenido", en: "Content Calendar" },
        desc: {
          es: "El GPT te ayuda a planificar qué publicar cada semana o mes, según tus objetivos y las fechas relevantes de tu negocio, para que dejes de decidir sobre la marcha.",
          en: "The GPT helps you plan what to post each week or month, based on your goals and your business's relevant dates, so you stop deciding on the fly.",
        },
      },
      {
        icon: "✍️",
        title: { es: "Copys y captions", en: "Copy & Captions" },
        desc: {
          es: "El GPT redacta el texto de cada publicación, adaptado al tono y al formato de cada plataforma — no el mismo mensaje genérico repetido en todos lados.",
          en: "The GPT writes the text for each post, adapted to the tone and format of each platform — not the same generic message repeated everywhere.",
        },
      },
      {
        icon: "📢",
        title: { es: "Campañas", en: "Campaigns" },
        desc: {
          es: "El GPT te ayuda a estructurar una campaña pagada completa: objetivo, mensaje, audiencia y llamado a la acción, en vez de improvisar un anuncio suelto.",
          en: "The GPT helps you structure a full paid campaign: goal, message, audience, and call to action, instead of improvising a one-off ad.",
        },
      },
      {
        icon: "🎨",
        title: { es: "Ideas de contenido y gráficos", en: "Content & Graphic Ideas" },
        desc: {
          es: "El GPT te propone conceptos e ideas visuales para tus publicaciones, para que no dependas de inspiración espontánea cada vez que necesitas postear.",
          en: "The GPT gives you concepts and visual ideas for your posts, so you don't depend on spontaneous inspiration every time you need to post.",
        },
      },
      {
        icon: "📊",
        title: { es: "Métricas, KPIs y reportes", en: "Metrics, KPIs & Reports" },
        desc: {
          es: "El GPT te ayuda a definir qué métricas realmente importan para tu negocio y arma el reporte profesional que resume tus resultados de forma clara.",
          en: "The GPT helps you define which metrics actually matter for your business and builds the professional report that summarizes your results clearly.",
        },
      },
    ],
  },
  benefits: {
    items: [
      { icon: "📅", title: { es: "Un calendario, no decisiones diarias", en: "A calendar, not daily decisions" }, desc: { es: "Sabes qué vas a publicar con anticipación, en vez de improvisar cada mañana.", en: "You know what you're posting ahead of time, instead of improvising every morning." } },
      { icon: "⏱️", title: { es: "Menos horas gestionando redes", en: "Fewer hours spent managing social media" }, desc: { es: "El GPT te da un punto de partida redactado para contenido, campañas y reportes, que tú ajustas en minutos.", en: "The GPT gives you a drafted starting point for content, campaigns, and reports, which you adjust in minutes." } },
      { icon: "🎨", title: { es: "Nunca te quedas sin ideas", en: "You never run out of ideas" }, desc: { es: "Tienes un flujo constante de conceptos de contenido, en vez de depender de la inspiración del momento.", en: "You get a steady flow of content concepts, instead of depending on whatever inspiration strikes in the moment." } },
      { icon: "📊", title: { es: "Reportes profesionales sin armarlos a mano", en: "Professional reports without building them by hand" }, desc: { es: "El GPT te ayuda a resumir tus métricas en un reporte claro, listo para compartir con tu equipo o tu cliente.", en: "The GPT helps you summarize your metrics in a clear report, ready to share with your team or your client." } },
      { icon: "🎯", title: { es: "Claridad sobre qué medir", en: "Clarity on what to measure" }, desc: { es: "Sabes qué KPIs importan de verdad para tu negocio, en vez de mirar números que no dicen nada.", en: "You know which KPIs actually matter for your business, instead of staring at numbers that don't tell you anything." } },
      { icon: "🌐", title: { es: "Disponible en tu idioma", en: "Available in your language" }, desc: { es: "Hay un GPT en español y otro en inglés, para que gestiones tus redes en el idioma en el que realmente le hablas a tu audiencia.", en: "There's a GPT in Spanish and one in English, so you can manage your social media in the language you actually speak to your audience in." } },
    ],
  },
  includes: {
    items: [
      { es: "Acceso gratuito al GPT en ChatGPT", en: "Free access to the GPT on ChatGPT" },
      { es: "Un GPT en español y otro en inglés", en: "One GPT in Spanish and one in English" },
      { es: "Sin registro adicional — solo necesitas una cuenta de ChatGPT", en: "No extra sign-up — just a ChatGPT account" },
      { es: "Calendario de contenido planificado", en: "Planned content calendar" },
      { es: "Copys y captions listos para publicar", en: "Copy and captions ready to post" },
      { es: "Estructura de campañas pagadas", en: "Paid campaign structure" },
      { es: "Reportes de métricas y KPIs", en: "Metrics and KPI reports" },
      { es: "Disponible 24/7 desde cualquier dispositivo", en: "Available 24/7 from any device" },
    ],
  },
  workProcessOverride: [
    { icon: "💬", es: "Abre el GPT", en: "Open the GPT" },
    { icon: "🏢", es: "Cuéntale tu negocio y tus objetivos en redes", en: "Tell it your business and your social media goals" },
    { icon: "📅", es: "Recibe calendario, contenido y reporte", en: "Get your calendar, content, and report" },
    { icon: "🚀", es: "Aplícalo en tus plataformas", en: "Apply it on your platforms" },
  ],
  diagnosisCta: true,
  faq: [
    {
      q: { es: "¿Qué es Coimagen Community Manager Pro?", en: "What is Coimagen Community Manager Pro?" },
      a: { es: "Es un GPT personalizado creado por Coimagen Media dentro de ChatGPT que te ayuda a planificar y gestionar tu estrategia de redes sociales completa: calendario, copys, campañas, contenido y reportes de métricas.", en: "It's a custom GPT built by Coimagen Media inside ChatGPT that helps you plan and manage your entire social media strategy: calendar, copy, campaigns, content, and metrics reports." },
    },
    {
      q: { es: "¿Cuánto cuesta usarlo?", en: "How much does it cost?" },
      a: { es: "Nada. Es una herramienta gratuita de Coimagen Media. Lo único que necesitas es una cuenta de ChatGPT.", en: "Nothing. It's a free tool from Coimagen Media. All you need is a ChatGPT account." },
    },
    {
      q: { es: "¿En qué se diferencia de Funnel Copy AI y de SEO Content AI?", en: "How is it different from Funnel Copy AI and SEO Content AI?" },
      a: { es: "Funnel Copy AI escribe un texto puntual para un formato específico (una landing, un email, un anuncio), y SEO Content AI escribe artículos de blog. Coimagen Community Manager Pro es más amplio: gestiona tu presencia en redes sociales de punta a punta — qué publicar, cuándo, con qué campaña y cómo medir si funcionó.", en: "Funnel Copy AI writes a single piece of copy for a specific format (a landing page, an email, an ad), and SEO Content AI writes blog articles. Coimagen Community Manager Pro is broader: it manages your social media presence end to end — what to post, when, with what campaign, and how to measure whether it worked." },
    },
    {
      q: { es: "¿Necesito una cuenta de pago de ChatGPT?", en: "Do I need a paid ChatGPT account?" },
      a: { es: "No necesariamente. Los GPTs personalizados se pueden usar con una cuenta gratuita de ChatGPT, aunque OpenAI puede aplicar límites de uso según tu plan.", en: "Not necessarily. Custom GPTs can be used with a free ChatGPT account, though OpenAI may apply usage limits depending on your plan." },
    },
    {
      q: { es: "¿El GPT publica en mis redes por mí o diseña las imágenes?", en: "Does the GPT publish to my social media for me, or design the graphics?" },
      a: { es: "No. El GPT planifica el calendario, redacta el copy, estructura las campañas y te da ideas de contenido y de gráficos, pero no publica directamente en tus plataformas ni diseña las piezas visuales finales — para eso necesitas tu propia herramienta de diseño o un diseñador.", en: "No. The GPT plans the calendar, writes the copy, structures the campaigns, and gives you content and graphic ideas, but it doesn't publish directly to your platforms or design the final visual assets — for that you need your own design tool or a designer." },
    },
    {
      q: { es: "¿Coimagen Media guarda lo que escribo en el GPT?", en: "Does Coimagen Media store what I write in the GPT?" },
      a: { es: "La conversación ocurre dentro de ChatGPT y se rige por las políticas de privacidad de OpenAI. Coimagen Media no recibe ni almacena lo que escribes dentro del GPT.", en: "The conversation happens inside ChatGPT and is governed by OpenAI's privacy policies. Coimagen Media doesn't receive or store what you write inside the GPT." },
    },
  ],
};

export default function CommunityManagerPro() {
  return <ServiceLandingTemplate content={content} />;
}
