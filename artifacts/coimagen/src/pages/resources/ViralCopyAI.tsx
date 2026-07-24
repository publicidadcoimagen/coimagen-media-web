import { ServiceLandingTemplate, ServiceContent } from "@/components/templates/ServiceLandingTemplate";

export const content: ServiceContent = {
  slug: "recursos/viral-copy-ai",
  accentColor: "red",
  accentHex: "#EF4444",
  icon: "🔥",
  category: { es: "Recursos IA", en: "AI Resources" },
  schemaType: "SoftwareApplication",
  schemaExtra: {
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://www.coimagenmedia.com/recursos/viral-copy-ai",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },
  seoTitle: {
    es: "Coimagen Copys Virales IA — GPT Gratuito para Contenido Viral | Coimagen Media",
    en: "Coimagen Viral Copy AI — Free GPT for Viral Content Strategy | Coimagen Media",
  },
  metaDesc: {
    es: "Crea estrategias virales, hooks, copys y planes de contenido para TikTok, Instagram Reels y YouTube Shorts con IA, gratis con Coimagen Copys Virales IA, el GPT de Coimagen Media.",
    en: "Create viral content strategies, hooks, copy, and content plans for TikTok, Instagram Reels, and YouTube Shorts with AI — free with Coimagen Viral Copy AI, Coimagen Media's GPT.",
  },
  hero: {
    title: {
      es: "Coimagen Copys Virales IA: estrategia y hooks para TikTok, Reels y Shorts",
      en: "Coimagen Viral Copy AI: Strategy and Hooks for TikTok, Reels, and Shorts",
    },
    subtitle: {
      es: "Un GPT gratuito de Coimagen Media que crea estrategias de contenido viral, hooks, copys y planes de contenido para TikTok, Instagram Reels y YouTube Shorts. No es copy de conversión como Funnel Copy AI ni gestión integral de redes como Community Manager Pro — es la estrategia específica de video corto: qué decir en los primeros segundos para que no hagan scroll.",
      en: "A free GPT by Coimagen Media that creates viral content strategies, hooks, copy, and content plans for TikTok, Instagram Reels, and YouTube Shorts. It's not conversion copy like Funnel Copy AI, or end-to-end social media management like Community Manager Pro — it's the specific strategy for short-form video: what to say in the first few seconds so people don't scroll past.",
    },
    benefit: {
      es: "100% gratuito · Un GPT por idioma · Sin registro adicional",
      en: "100% free · One GPT per language · No extra sign-up",
    },
  },
  gptLink: {
    name: "Coimagen Viral Copy AI",
    url: {
      es: "https://chatgpt.com/g/g-68f6ca35ee388191ad99a3c46981b6f8-coimagen-copys-virales-ia",
      en: "https://chatgpt.com/g/g-68f6cc07d55c8191905df5dc99d0dadc-coimagen-viral-copy-ai",
    },
  },
  pain: {
    items: [
      { icon: "⏱️", text: { es: "No sabes qué hook usar en los primeros 3 segundos antes de que hagan scroll.", en: "You don't know what hook to use in the first 3 seconds before people scroll past." } },
      { icon: "🎥", text: { es: "Grabas contenido sin ninguna estrategia detrás, solo por intuición del momento.", en: "You film content with no strategy behind it, just whatever feels right in the moment." } },
      { icon: "📅", text: { es: "No tienes un plan de contenido para TikTok, Reels o Shorts — subes lo que se te ocurre ese día.", en: "You don't have a content plan for TikTok, Reels, or Shorts — you post whatever comes to mind that day." } },
      { icon: "📉", text: { es: "Tus videos no enganchan y la gente los saltea antes de que terminen.", en: "Your videos don't hook people, and they skip past before they finish." } },
      { icon: "🎯", text: { es: "No sabes qué ángulo darle a un tema para que funcione en formato corto.", en: "You don't know what angle to give a topic to make it work in short-form video." } },
      { icon: "🔁", text: { es: "Ves contenido viral de otros y no sabes cómo replicar esa lógica para tu marca.", en: "You see other people's viral content and don't know how to replicate that logic for your brand." } },
    ],
  },
  solution: {
    steps: [
      {
        icon: "🎯",
        title: { es: "Estrategia de contenido viral", en: "Viral Content Strategy" },
        desc: {
          es: "El GPT te ayuda a identificar qué temas y ángulos tienen potencial real de funcionar en formato corto, en vez de grabar sobre lo primero que se te ocurre.",
          en: "The GPT helps you identify which topics and angles actually have potential to work in short-form video, instead of filming whatever comes to mind first.",
        },
      },
      {
        icon: "🪝",
        title: { es: "Hooks", en: "Hooks" },
        desc: {
          es: "El GPT redacta el gancho de los primeros segundos del video — la línea que decide si alguien se queda a ver el resto o sigue haciendo scroll.",
          en: "The GPT writes the hook for the first few seconds of the video — the line that decides whether someone stays to watch the rest or keeps scrolling.",
        },
      },
      {
        icon: "✍️",
        title: { es: "Copys para video corto", en: "Short-Form Video Copy" },
        desc: {
          es: "El GPT escribe el guion o el texto en pantalla del video, pensado para el ritmo y la duración de un formato corto, no para un texto largo de blog.",
          en: "The GPT writes the script or on-screen text for the video, built for the pace and length of a short format, not a long blog-style text.",
        },
      },
      {
        icon: "📅",
        title: { es: "Planes de contenido", en: "Content Plans" },
        desc: {
          es: "El GPT te ayuda a armar un calendario específico de publicaciones para TikTok, Reels y Shorts, para que dejes de improvisar qué subir cada día.",
          en: "The GPT helps you build a specific posting calendar for TikTok, Reels, and Shorts, so you stop improvising what to post each day.",
        },
      },
      {
        icon: "🔀",
        title: { es: "Adaptación por plataforma", en: "Platform Adaptation" },
        desc: {
          es: "TikTok, Reels y Shorts no son lo mismo: el GPT ajusta el tono, la duración y el formato del contenido según la plataforma en la que vas a publicarlo.",
          en: "TikTok, Reels, and Shorts aren't the same: the GPT adjusts the tone, length, and format of the content based on the platform you're posting it to.",
        },
      },
    ],
  },
  benefits: {
    items: [
      { icon: "🪝", title: { es: "Hooks que detienen el scroll", en: "Hooks that stop the scroll" }, desc: { es: "Tus primeros segundos están pensados para retener, en vez de dejar que la gente pase de largo.", en: "Your first few seconds are built to hold attention, instead of letting people scroll right past." } },
      { icon: "🎯", title: { es: "Contenido con estrategia, no al azar", en: "Content with strategy, not guesswork" }, desc: { es: "Cada video parte de un ángulo pensado para funcionar, en vez de grabar lo primero que se te ocurre.", en: "Every video starts from an angle designed to work, instead of filming whatever comes to mind first." } },
      { icon: "📅", title: { es: "Un plan, no publicaciones sueltas", en: "A plan, not scattered posts" }, desc: { es: "Sabes qué vas a publicar en TikTok, Reels y Shorts con anticipación, en vez de improvisar cada día.", en: "You know what you're posting on TikTok, Reels, and Shorts ahead of time, instead of improvising every day." } },
      { icon: "🔀", title: { es: "Contenido adaptado a cada plataforma", en: "Content adapted to each platform" }, desc: { es: "Dejas de subir el mismo video sin ajustes a TikTok, Reels y Shorts como si fueran el mismo lugar.", en: "You stop uploading the same unedited video to TikTok, Reels, and Shorts as if they were all the same place." } },
      { icon: "⏱️", title: { es: "Menos tiempo bloqueado sin saber qué grabar", en: "Less time stuck not knowing what to film" }, desc: { es: "Tienes un punto de partida de tema, ángulo y hook, en vez de quedarte frente a la cámara sin saber por dónde empezar.", en: "You get a starting point for topic, angle, and hook, instead of standing in front of the camera with no idea where to start." } },
      { icon: "🌐", title: { es: "Disponible en tu idioma", en: "Available in your language" }, desc: { es: "Hay un GPT en español y otro en inglés, para que crees contenido en el idioma en el que realmente le hablas a tu audiencia.", en: "There's a GPT in Spanish and one in English, so you can create content in the language you actually speak to your audience in." } },
    ],
  },
  includes: {
    items: [
      { es: "Acceso gratuito al GPT en ChatGPT", en: "Free access to the GPT on ChatGPT" },
      { es: "Un GPT en español y otro en inglés", en: "One GPT in Spanish and one in English" },
      { es: "Sin registro adicional — solo necesitas una cuenta de ChatGPT", en: "No extra sign-up — just a ChatGPT account" },
      { es: "Estrategias de contenido para TikTok, Reels y Shorts", en: "Content strategies for TikTok, Reels, and Shorts" },
      { es: "Hooks para los primeros segundos del video", en: "Hooks for the first seconds of the video" },
      { es: "Guiones y copys para video corto", en: "Scripts and copy for short-form video" },
      { es: "Disponible 24/7 desde cualquier dispositivo", en: "Available 24/7 from any device" },
      { es: "Creado y mantenido por Coimagen Media", en: "Built and maintained by Coimagen Media" },
    ],
  },
  workProcessOverride: [
    { icon: "💬", es: "Abre el GPT", en: "Open the GPT" },
    { icon: "🏢", es: "Cuéntale tu marca y tu tema", en: "Tell it your brand and your topic" },
    { icon: "🎬", es: "Recibe estrategia, hooks y plan de contenido", en: "Get your strategy, hooks, and content plan" },
    { icon: "🚀", es: "Grábalo y publícalo en TikTok, Reels o Shorts", en: "Film it and post it on TikTok, Reels, or Shorts" },
  ],
  diagnosisCta: true,
  faq: [
    {
      q: { es: "¿Qué es Coimagen Copys Virales IA?", en: "What is Coimagen Viral Copy AI?" },
      a: { es: "Es un GPT personalizado creado por Coimagen Media dentro de ChatGPT que crea estrategias de contenido viral, hooks, copys y planes de contenido para TikTok, Instagram Reels y YouTube Shorts.", en: "It's a custom GPT built by Coimagen Media inside ChatGPT that creates viral content strategies, hooks, copy, and content plans for TikTok, Instagram Reels, and YouTube Shorts." },
    },
    {
      q: { es: "¿Cuánto cuesta usarlo?", en: "How much does it cost?" },
      a: { es: "Nada. Es una herramienta gratuita de Coimagen Media. Lo único que necesitas es una cuenta de ChatGPT.", en: "Nothing. It's a free tool from Coimagen Media. All you need is a ChatGPT account." },
    },
    {
      q: { es: "¿En qué se diferencia de Funnel Copy AI y de Community Manager Pro?", en: "How is it different from Funnel Copy AI and Community Manager Pro?" },
      a: { es: "Funnel Copy AI escribe copy de conversión para landing pages, emails, WhatsApp y anuncios con frameworks como AIDA, PAS y FAB. Community Manager Pro gestiona tu presencia en redes de punta a punta: calendario, campañas pagadas y reportes de métricas. Coimagen Copys Virales IA es distinta: se especializa en estrategia de video corto para TikTok, Instagram Reels y YouTube Shorts — hooks, ángulos y planes de contenido pensados específicamente para esas plataformas.", en: "Funnel Copy AI writes conversion copy for landing pages, emails, WhatsApp, and ads using frameworks like AIDA, PAS, and FAB. Community Manager Pro manages your social media presence end to end: calendar, paid campaigns, and metrics reports. Coimagen Viral Copy AI is different: it specializes in short-form video strategy for TikTok, Instagram Reels, and YouTube Shorts — hooks, angles, and content plans built specifically for those platforms." },
    },
    {
      q: { es: "¿Necesito una cuenta de pago de ChatGPT?", en: "Do I need a paid ChatGPT account?" },
      a: { es: "No necesariamente. Los GPTs personalizados se pueden usar con una cuenta gratuita de ChatGPT, aunque OpenAI puede aplicar límites de uso según tu plan.", en: "Not necessarily. Custom GPTs can be used with a free ChatGPT account, though OpenAI may apply usage limits depending on your plan." },
    },
    {
      q: { es: "¿El GPT garantiza que mi contenido se vuelva viral?", en: "Does the GPT guarantee my content will go viral?" },
      a: { es: "No. El GPT te da la estrategia, el hook y el copy, pero ningún tool puede garantizar que un video se vuelva viral: eso depende también del algoritmo de cada plataforma, de la edición y ejecución del video, y del timing de publicación.", en: "No. The GPT gives you the strategy, the hook, and the copy, but no tool can guarantee a video will go viral — that also depends on each platform's algorithm, the video's editing and execution, and the timing of the post." },
    },
    {
      q: { es: "¿Coimagen Media guarda lo que escribo en el GPT?", en: "Does Coimagen Media store what I write in the GPT?" },
      a: { es: "La conversación ocurre dentro de ChatGPT y se rige por las políticas de privacidad de OpenAI. Coimagen Media no recibe ni almacena lo que escribes dentro del GPT.", en: "The conversation happens inside ChatGPT and is governed by OpenAI's privacy policies. Coimagen Media doesn't receive or store what you write inside the GPT." },
    },
  ],
};

export default function ViralCopyAI() {
  return <ServiceLandingTemplate content={content} />;
}
