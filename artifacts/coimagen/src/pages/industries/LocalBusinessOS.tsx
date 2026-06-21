import { IndustryTemplate } from "./IndustryTemplate";

const content = {
  slug: "local-business-os",
  icon: "🏪",
  color: "#ffd60a",
  seoTitle: {
    es: "Local Business OS | Marketing y automatización para negocios locales",
    en: "Local Business OS | Marketing and automation for local businesses",
  },
  metaDesc: {
    es: "Sistema para negocios locales: SEO local, Google Maps, captación de clientes, automatización y seguimiento.",
    en: "System for local businesses: local SEO, Google Maps, lead capture, automation and follow-up.",
  },
  title: { es: "Local Business OS", en: "Local Business OS" },
  subtitle: {
    es: "Sistema de visibilidad, captación y seguimiento para negocios locales que quieren más clientes.",
    en: "Visibility, lead capture and follow-up system for local businesses that want more customers.",
  },
  pain: {
    es: [
      "No aparecen en Google ni Google Maps.",
      "Dependen solo de recomendaciones.",
      "No tienen sistema de captación.",
      "No hay seguimiento de prospectos.",
      "No saben qué canal funciona mejor.",
    ],
    en: [
      "Not showing up on Google or Google Maps.",
      "Rely only on word of mouth.",
      "No lead capture system.",
      "No prospect follow-up.",
      "Don't know which channel works best.",
    ],
  },
  solution: {
    es: "Local Business OS pone tu negocio en el mapa digital, capta clientes nuevos y automatiza seguimientos para que nunca pierdas una oportunidad.",
    en: "Local Business OS puts your business on the digital map, captures new customers and automates follow-ups so you never miss an opportunity.",
  },
  modules: [
    { icon: "🌐", name: "Landing local" },
    { icon: "🗺️", name: "Google Maps / SEO" },
    { icon: "⭐", name: "Reseñas" },
    { icon: "💬", name: "WhatsApp captación" },
    { icon: "👥", name: "CRM clientes" },
    { icon: "📱", name: "Redes sociales" },
    { icon: "📊", name: "Reportes" },
    { icon: "⚡", name: "Automatización" },
  ],
  ctaLabel: {
    es: "Solicitar diagnóstico gratuito para negocio local",
    en: "Request free diagnostic for local business",
  },
  faq: [
    {
      q: { es: "¿Qué tipo de negocio local aplica?", en: "What type of local business qualifies?" },
      a: { es: "Cualquier negocio físico: tienda, consultorio, estudio, taller, servicio, etc.", en: "Any physical business: store, practice, studio, workshop, service, etc." },
    },
    {
      q: { es: "¿Cuánto tiempo para aparecer en Google Maps?", en: "How long to appear on Google Maps?" },
      a: { es: "La optimización de Google Business Profile toma entre 2-6 semanas para mostrar resultados visibles.", en: "Google Business Profile optimization takes 2-6 weeks to show visible results." },
    },
  ],
};

export default function LocalBusinessOS() {
  return <IndustryTemplate content={content} />;
}
