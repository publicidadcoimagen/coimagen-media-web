import { ServiceLandingTemplate, ServiceContent } from "@/components/templates/ServiceLandingTemplate";

const content: ServiceContent = {
  slug: "ai-powered-websites",
  accentColor: "cyan",
  accentHex: "#00CFFF",
  icon: "🖥️",
  seoTitle: {
    es: "AI Powered Websites — Sitios Web con IA | Coimagen Media Agency",
    en: "AI Powered Websites — Sites That Generate Clients | Coimagen",
  },
  metaDesc: {
    es: "Creamos sitios web con inteligencia artificial que captan prospectos, convierten visitantes y trabajan por ti las 24 horas. Tijuana y todo México.",
    en: "We build AI-powered websites that capture leads, convert visitors, and work for your business 24/7. Serving Mexico and the USA.",
  },
  hero: {
    title: {
      es: "Sitios web con IA que generan clientes mientras duermes",
      en: "AI-Powered Websites That Generate Clients While You Sleep",
    },
    subtitle: {
      es: "Tu sitio web debe ser tu mejor vendedor. Le diseñamos un sistema digital completo que capta prospectos, responde preguntas y convierte visitantes en clientes de forma automática.",
      en: "Your website should be your best salesperson. We build a complete digital system that captures leads, answers questions, and converts visitors into clients automatically.",
    },
    benefit: {
      es: "Más del 70% de los clientes buscan en Google antes de comprar — y tú debes aparecer primero",
      en: "Over 70% of customers search Google before buying — and you need to show up first",
    },
  },
  pain: {
    items: [
      { icon: "😞", text: { es: "Tu sitio web tiene visitas pero nadie te contacta", en: "Your website gets visitors but nobody contacts you" } },
      { icon: "😤", text: { es: "Tu página se ve anticuada y no inspira confianza", en: "Your website looks outdated and doesn't inspire trust" } },
      { icon: "📉", text: { es: "No sabes cuántas visitas tienes ni de dónde vienen", en: "You don't know how many visitors you get or where they come from" } },
      { icon: "⏰", text: { es: "Pierdes prospectos porque no contestas rápido", en: "You lose leads because you don't respond fast enough" } },
      { icon: "📱", text: { es: "Tu sitio no se ve bien en celular y pierdes clientes", en: "Your site doesn't look good on mobile and you're losing clients" } },
      { icon: "🔍", text: { es: "No apareces en Google cuando buscan tu servicio", en: "You don't appear on Google when people search for your service" } },
    ],
  },
  solution: {
    steps: [
      { icon: "🎨", title: { es: "Diseño profesional", en: "Professional design" }, desc: { es: "Diseño premium con identidad visual propia, adaptado a tu industria y mercado objetivo.", en: "Premium design with your own visual identity, tailored to your industry and target market." } },
      { icon: "🤖", title: { es: "Integración con IA", en: "AI integration" }, desc: { es: "Camila AI en tu sitio responde preguntas, califica prospectos y agenda reuniones 24/7.", en: "Camila AI on your site answers questions, qualifies leads, and schedules meetings 24/7." } },
      { icon: "🔍", title: { es: "SEO desde el inicio", en: "SEO from day one" }, desc: { es: "Optimización técnica completa para aparecer en Google desde el primer día.", en: "Complete technical optimization to appear on Google from day one." } },
      { icon: "📊", title: { es: "Analytics integrado", en: "Integrated analytics" }, desc: { es: "Google Analytics y Search Console configurados para medir cada visita y conversión.", en: "Google Analytics and Search Console configured to measure every visit and conversion." } },
      { icon: "📱", title: { es: "100% responsive", en: "100% responsive" }, desc: { es: "Diseño perfecto en celular, tablet y desktop. La mayoría de tus clientes te busca desde el móvil.", en: "Perfect design on mobile, tablet, and desktop. Most of your clients search from their phone." } },
      { icon: "⚡", title: { es: "Velocidad optimizada", en: "Speed optimized" }, desc: { es: "Carga en menos de 3 segundos. La velocidad afecta directamente tu posicionamiento en Google.", en: "Loads in under 3 seconds. Speed directly affects your Google ranking." } },
    ],
  },
  benefits: {
    items: [
      { icon: "💰", title: { es: "Más clientes", en: "More clients" }, desc: { es: "Un sitio profesional con IA convierte hasta 3x más visitantes en prospectos reales.", en: "A professional AI-powered site converts up to 3x more visitors into real leads." } },
      { icon: "🕐", title: { es: "Disponible 24/7", en: "Available 24/7" }, desc: { es: "Tu sitio trabaja mientras duermes. La IA responde y capta prospectos a cualquier hora.", en: "Your site works while you sleep. AI responds and captures leads at any hour." } },
      { icon: "📈", title: { es: "Mide todo", en: "Measure everything" }, desc: { es: "Sabes exactamente cuántas visitas tienes, de dónde vienen y qué hacen en tu sitio.", en: "You know exactly how many visits you get, where they come from, and what they do." } },
      { icon: "🏆", title: { es: "Credibilidad", en: "Credibility" }, desc: { es: "Un sitio profesional genera confianza inmediata y te diferencia de la competencia.", en: "A professional website builds immediate trust and differentiates you from competitors." } },
      { icon: "🔗", title: { es: "Todo integrado", en: "All integrated" }, desc: { es: "WhatsApp, formularios, CRM, Google y IA conectados en un solo sistema.", en: "WhatsApp, forms, CRM, Google, and AI all connected in one system." } },
      { icon: "🚀", title: { es: "Escalable", en: "Scalable" }, desc: { es: "Empieza simple y agrega módulos conforme crece tu negocio. Sin reconstruir desde cero.", en: "Start simple and add modules as your business grows. No rebuilding from scratch." } },
    ],
  },
  includes: {
    items: [
      { es: "Diseño profesional con identidad visual", en: "Professional design with visual identity" },
      { es: "Dominio y hosting por 1 año", en: "Domain and hosting for 1 year" },
      { es: "Certificado SSL (seguridad)", en: "SSL certificate (security)" },
      { es: "Optimización mobile completa", en: "Complete mobile optimization" },
      { es: "SEO técnico inicial", en: "Initial technical SEO" },
      { es: "Google Analytics 4 configurado", en: "Google Analytics 4 configured" },
      { es: "Google Search Console", en: "Google Search Console" },
      { es: "Formularios de contacto y WhatsApp", en: "Contact forms and WhatsApp" },
      { es: "Integración con Camila AI", en: "Camila AI integration" },
      { es: "Sitemap y robots.txt", en: "Sitemap and robots.txt" },
      { es: "Capacitación para gestionar el sitio", en: "Training to manage the site" },
      { es: "Soporte técnico 30 días", en: "30-day technical support" },
    ],
  },
  caseStudy: {
    slug: "conchas-tower",
    nameEs: "Conchas Tower — Bienes Raíces",
    nameEn: "Conchas Tower — Real Estate",
    summaryEs: "Conchas Tower necesitaba capturar prospectos calificados para sus unidades residenciales. Implementamos un sitio con IA que automatizó la captación y seguimiento de leads.",
    summaryEn: "Conchas Tower needed to capture qualified leads for their residential units. We implemented an AI-powered site that automated lead capture and follow-up.",
    metrics: [
      { value: "+180%", labelEs: "más leads capturados", labelEn: "more leads captured" },
      { value: "15 min", labelEs: "tiempo de respuesta", labelEn: "response time" },
      { value: "100%", labelEs: "seguimiento automatizado", labelEn: "automated follow-up" },
      { value: "3x", labelEs: "más conversiones", labelEn: "more conversions" },
    ],
    accentColor: "#A855F7",
  },
  faq: [
    { q: { es: "¿Cuánto tiempo tarda en estar listo mi sitio?", en: "How long does it take to build my website?" }, a: { es: "El tiempo depende del alcance, pero un sitio estándar toma entre 2 y 4 semanas desde la aprobación del diseño.", en: "The timeline depends on scope, but a standard site takes 2 to 4 weeks from design approval." } },
    { q: { es: "¿Necesito saber programar para gestionar mi sitio?", en: "Do I need to know how to code to manage my website?" }, a: { es: "No. Te entregamos un panel sencillo y te capacitamos para que puedas hacer cambios básicos sin conocimientos técnicos.", en: "No. We give you a simple panel and train you to make basic changes without technical knowledge." } },
    { q: { es: "¿Qué pasa con mi sitio actual?", en: "What happens to my current website?" }, a: { es: "Podemos migrar tu dominio existente al nuevo sitio sin perder tu historial en Google, o puedes mantener tu dominio actual apuntando al nuevo sitio.", en: "We can migrate your existing domain to the new site without losing your Google history, or you can keep your current domain pointing to the new site." } },
    { q: { es: "¿El sitio incluye tienda en línea?", en: "Does the website include an online store?" }, a: { es: "Sí, podemos integrarlo como módulo adicional. Cuéntanos tu caso en el diagnóstico gratuito y te armamos una propuesta específica.", en: "Yes, we can add it as an additional module. Tell us about your case in the free diagnosis and we'll build a specific proposal." } },
    { q: { es: "¿Cuánto cuesta?", en: "How much does it cost?" }, a: { es: "El costo varía según el alcance y las funcionalidades. Agenda tu diagnóstico gratuito y te damos un precio específico para tu proyecto.", en: "The cost varies by scope and features. Schedule your free diagnosis and we'll give you a specific price for your project." } },
  ],
};

export default function AIPoweredWebsites() {
  return <ServiceLandingTemplate content={content} />;
}
