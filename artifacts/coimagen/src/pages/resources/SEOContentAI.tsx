import { ServiceLandingTemplate, ServiceContent } from "@/components/templates/ServiceLandingTemplate";

const content: ServiceContent = {
  slug: "recursos/seo-content-ai",
  accentColor: "orange",
  accentHex: "#FB923C",
  icon: "📝",
  category: { es: "Recursos IA", en: "AI Resources" },
  schemaType: "SoftwareApplication",
  schemaExtra: {
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://www.coimagenmedia.com/recursos/seo-content-ai",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  },
  seoTitle: {
    es: "Coimagen SEO Content AI — GPT Gratuito para Artículos SEO | Coimagen Media",
    en: "Coimagen SEO Content AI — Free GPT for SEO Articles | Coimagen Media",
  },
  metaDesc: {
    es: "Crea artículos SEO útiles y optimizados con estructura, palabras clave, metadescripción, enlaces, FAQs e ideas visuales, gratis con Coimagen SEO Content AI, el GPT de Coimagen Media.",
    en: "Create useful, SEO-optimized articles with structure, keywords, metadata, links, FAQs, and visual ideas — free with Coimagen SEO Content AI, Coimagen Media's GPT.",
  },
  hero: {
    title: {
      es: "Coimagen SEO Content AI: crea artículos SEO que Google puede leer",
      en: "Coimagen SEO Content AI: Write SEO Articles Google Can Actually Read",
    },
    subtitle: {
      es: "Un GPT gratuito de Coimagen Media que redacta artículos de blog optimizados para SEO — con estructura, palabras clave, metadescripción, enlaces, FAQs e ideas visuales — para distintos nichos. No es copy de venta como Sales Funnel AI ni un diagnóstico general de tu negocio como Coimagen Pro AI: es contenido de blog listo para revisar y publicar.",
      en: "A free GPT by Coimagen Media that writes SEO-optimized blog articles — with structure, keywords, a metadescription, links, FAQs, and visual ideas — for different niches and industries. It's not sales copy like Sales Funnel AI or a general business diagnosis like Coimagen Pro AI: it's blog content ready for you to review and publish on your own site.",
    },
    benefit: {
      es: "100% gratuito · Un GPT por idioma · Sin registro adicional",
      en: "100% free · One GPT per language · No extra sign-up",
    },
  },
  gptLink: {
    name: "Coimagen SEO Content AI",
    url: {
      es: "https://chatgpt.com/g/g-68b8ebea86688191a90f43a3dd0d9dae-coimagen-seo-content-ai",
      en: "https://chatgpt.com/g/g-68b8f0a132b48191ab7b77b63de84d4d-coimagen-seo-content-ai",
    },
  },
  pain: {
    items: [
      { icon: "📄", text: { es: "Te quedas mirando la página en blanco sin saber por dónde empezar el artículo.", en: "You stare at a blank page with no idea where to start the article." } },
      { icon: "🔑", text: { es: "Escribes sin investigar antes qué palabras clave busca realmente tu audiencia.", en: "You write without first researching what keywords your audience is actually searching for." } },
      { icon: "🏷️", text: { es: "Publicas el artículo sin metadescripción, o con una genérica que no invita a hacer clic.", en: "You publish the article without a metadescription, or with a generic one that doesn't invite clicks." } },
      { icon: "🗂️", text: { es: "El artículo no tiene una estructura clara de subtítulos que facilite la lectura y el SEO.", en: "The article has no clear heading structure to make it easy to read and SEO-friendly." } },
      { icon: "🔗", text: { es: "No incluyes enlaces internos ni externos porque pensarlo te quita tiempo de escribir.", en: "You skip internal and external links because figuring them out eats into your writing time." } },
      { icon: "🖼️", text: { es: "Publicas el artículo sin ninguna idea de imagen o gráfico que lo acompañe.", en: "You publish the article without any idea for an image or graphic to go with it." } },
    ],
  },
  solution: {
    steps: [
      {
        icon: "🎯",
        title: { es: "Tema y ángulo", en: "Topic & Angle" },
        desc: {
          es: "Antes de escribir una sola línea, el GPT te ayuda a definir sobre qué tema escribir y desde qué ángulo, según tu nicho y lo que le interesa a tu audiencia — para que el artículo no empiece sin rumbo.",
          en: "Before writing a single line, the GPT helps you define what topic to write about and from what angle, based on your niche and what your audience actually cares about — so the article doesn't start without direction.",
        },
      },
      {
        icon: "🔑",
        title: { es: "Keywords y estructura", en: "Keywords & Structure" },
        desc: {
          es: "El GPT te propone las palabras clave relevantes para el tema y arma el esqueleto del artículo — títulos y subtítulos — para que la estructura ya esté pensada para SEO antes de redactar.",
          en: "The GPT suggests the relevant keywords for the topic and builds the article's skeleton — headings and subheadings — so the structure is already SEO-minded before you start drafting.",
        },
      },
      {
        icon: "✍️",
        title: { es: "Redacción del artículo", en: "Article Drafting" },
        desc: {
          es: "Con el tema, el ángulo y la estructura ya definidos, el GPT redacta el artículo completo: útil para el lector y optimizado para los motores de búsqueda, no relleno genérico.",
          en: "With the topic, angle, and structure already defined, the GPT drafts the full article: useful for the reader and optimized for search engines, not generic filler.",
        },
      },
      {
        icon: "🏷️",
        title: { es: "Metadatos SEO", en: "SEO Metadata" },
        desc: {
          es: "El GPT te entrega el título SEO y la metadescripción listos para pegar en tu CMS, pensados para que el artículo invite a hacer clic en los resultados de Google.",
          en: "The GPT gives you the SEO title and metadescription ready to paste into your CMS, designed to make the article inviting to click on in Google's results.",
        },
      },
      {
        icon: "🔗",
        title: { es: "Enlaces, FAQs e ideas visuales", en: "Links, FAQs & Visual Ideas" },
        desc: {
          es: "El GPT sugiere enlaces internos y externos relevantes, arma una sección de preguntas frecuentes y te da ideas de imágenes o gráficos para acompañar el artículo.",
          en: "The GPT suggests relevant internal and external links, builds a frequently-asked-questions section, and gives you ideas for images or graphics to go with the article.",
        },
      },
    ],
  },
  benefits: {
    items: [
      { icon: "⏱️", title: { es: "Menos tiempo en blanco frente al artículo", en: "Less time stuck staring at the article" }, desc: { es: "Empiezas a escribir con tema, ángulo y estructura ya definidos, en vez de partir de cero cada vez.", en: "You start writing with the topic, angle, and structure already defined, instead of starting from a blank page every time." } },
      { icon: "🔑", title: { es: "Cobertura real de palabras clave", en: "Real keyword coverage" }, desc: { es: "Tus artículos apuntan a términos que tu audiencia busca de verdad, no a lo primero que se te ocurre.", en: "Your articles target terms your audience is actually searching for, not just whatever comes to mind first." } },
      { icon: "🏷️", title: { es: "Metadatos listos para publicar", en: "Metadata ready to publish" }, desc: { es: "Título SEO y metadescripción quedan resueltos junto con el artículo, en vez de ser un paso aparte que se te olvida.", en: "SEO title and metadescription get resolved along with the article, instead of being a separate step you forget." } },
      { icon: "🗂️", title: { es: "Estructura que Google puede leer", en: "Structure Google can read" }, desc: { es: "Subtítulos y secciones ordenadas hacen que el artículo sea más fácil de rastrear e indexar.", en: "Ordered subheadings and sections make the article easier to crawl and index." } },
      { icon: "❓", title: { es: "FAQs que suman visibilidad", en: "FAQs that add visibility" }, desc: { es: "La sección de preguntas frecuentes puede ayudar a que tu artículo aparezca en más resultados de búsqueda.", en: "The FAQ section can help your article show up in more search results." } },
      { icon: "🧭", title: { es: "Un punto de partida real, no una plantilla vacía", en: "A real starting point, not an empty template" }, desc: { es: "En vez de teoría general sobre SEO, tienes el artículo concreto de tu nicho, listo para revisar y publicar.", en: "Instead of general SEO theory, you get the concrete article for your niche, ready to review and publish." } },
    ],
  },
  includes: {
    items: [
      { es: "Acceso gratuito al GPT en ChatGPT", en: "Free access to the GPT on ChatGPT" },
      { es: "Un GPT en español y otro en inglés", en: "One GPT in Spanish and one in English" },
      { es: "Sin registro adicional — solo necesitas una cuenta de ChatGPT", en: "No extra sign-up — just a ChatGPT account" },
      { es: "Investigación de palabras clave para tu tema", en: "Keyword research for your topic" },
      { es: "Redacción completa del artículo, optimizada para SEO", en: "Full article draft, SEO-optimized" },
      { es: "Título SEO y metadescripción listos para pegar", en: "SEO title and metadescription ready to paste" },
      { es: "Sección de preguntas frecuentes e ideas visuales", en: "FAQ section and visual ideas" },
      { es: "Disponible 24/7 desde cualquier dispositivo", en: "Available 24/7 from any device" },
    ],
  },
  workProcessOverride: [
    { icon: "💬", es: "Abre el GPT", en: "Open the GPT" },
    { icon: "🏢", es: "Cuéntale tu nicho y tema", en: "Tell it your niche and topic" },
    { icon: "📝", es: "Recibe el artículo con estructura SEO", en: "Get the article with SEO structure" },
    { icon: "🚀", es: "Publícalo tú en tu sitio", en: "Publish it yourself on your site" },
  ],
  diagnosisCta: true,
  faq: [
    {
      q: { es: "¿Qué es Coimagen SEO Content AI?", en: "What is Coimagen SEO Content AI?" },
      a: { es: "Es un GPT personalizado creado por Coimagen Media dentro de ChatGPT que redacta artículos de blog optimizados para SEO — con estructura, palabras clave, metadescripción, enlaces, FAQs e ideas visuales — para distintos nichos.", en: "It's a custom GPT built by Coimagen Media inside ChatGPT that writes SEO-optimized blog articles — with structure, keywords, metadescription, links, FAQs, and visual ideas — for different niches." },
    },
    {
      q: { es: "¿Cuánto cuesta usarlo?", en: "How much does it cost?" },
      a: { es: "Nada. Es una herramienta gratuita de Coimagen Media. Lo único que necesitas es una cuenta de ChatGPT.", en: "Nothing. It's a free tool from Coimagen Media. All you need is a ChatGPT account." },
    },
    {
      q: { es: "¿En qué se diferencia de Sales Funnel AI y de Coimagen Pro AI?", en: "How is it different from Sales Funnel AI and Coimagen Pro AI?" },
      a: { es: "Sales Funnel AI escribe copy de venta para tu embudo, y Coimagen Pro AI hace un diagnóstico general de tu negocio. Coimagen SEO Content AI es distinto: se enfoca solo en escribir artículos de blog optimizados para SEO — contenido, no copy de venta ni diagnóstico.", en: "Sales Funnel AI writes sales copy for your funnel, and Coimagen Pro AI runs a general diagnosis of your business. Coimagen SEO Content AI is different: it focuses only on writing SEO-optimized blog articles — content, not sales copy or a diagnosis." },
    },
    {
      q: { es: "¿El GPT publica el artículo por mí o me garantiza que voy a posicionar en Google?", en: "Does the GPT publish the article for me, or guarantee I'll rank on Google?" },
      a: { es: "No. El GPT redacta el artículo y su estructura SEO, pero no lo publica por ti en tu sitio ni garantiza posicionamiento en Google. El ranking depende de más factores además del contenido, como la autoridad de tu dominio, la competencia por esas palabras clave y la velocidad de tu sitio.", en: "No. The GPT writes the article and its SEO structure, but it doesn't publish it for you on your site, and it can't guarantee you'll rank on Google. Ranking depends on more than good content alone — factors like your domain's authority, competition for those specific keywords, and your site's loading speed all play a real role too." },
    },
    {
      q: { es: "¿Necesito una cuenta de pago de ChatGPT?", en: "Do I need a paid ChatGPT account?" },
      a: { es: "No necesariamente. Los GPTs personalizados se pueden usar con una cuenta gratuita de ChatGPT, aunque OpenAI puede aplicar límites de uso según tu plan.", en: "Not necessarily. Custom GPTs can be used with a free ChatGPT account, though OpenAI may apply usage limits depending on your plan." },
    },
    {
      q: { es: "¿Coimagen Media guarda lo que escribo en el GPT?", en: "Does Coimagen Media store what I write in the GPT?" },
      a: { es: "La conversación ocurre dentro de ChatGPT y se rige por las políticas de privacidad de OpenAI. Coimagen Media no recibe ni almacena lo que escribes dentro del GPT.", en: "The conversation happens inside ChatGPT and is governed by OpenAI's privacy policies. Coimagen Media doesn't receive or store what you write inside the GPT." },
    },
  ],
};

export default function SEOContentAI() {
  return <ServiceLandingTemplate content={content} />;
}
