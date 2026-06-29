import { IndustryTemplate } from "./IndustryTemplate";

const content = {
  slug: "dental-os",
  heroImage: "/images/landing/dental-os.png",
  icon: "🦷",
  color: "#14b8a6",
  seoTitle: {
    es: "Dental OS | Marketing, CRM y automatización para dentistas",
    en: "Dental OS | Marketing, CRM and automation for dentists",
  },
  metaDesc: {
    es: "Sistema digital para dentistas: capta citas, mejora tu presencia en Google, automatiza seguimiento post consulta y convierte redes en pacientes.",
    en: "Digital system for dentists: capture appointments, improve your Google presence, automate post-visit follow-up and convert social media into patients.",
  },
  title: { es: "Dental OS", en: "Dental OS" },
  subtitle: {
    es: "Sistema digital que convierte tu presencia en citas reales y seguimiento efectivo para tu consultorio dental.",
    en: "Digital system that turns your online presence into real appointments and effective follow-up for your dental practice.",
  },
  pain: {
    es: [
      "Pacientes no agendan citas en línea.",
      "No apareces en Google cuando buscan dentista.",
      "No hay seguimiento post consulta.",
      "Redes no generan citas reales.",
      "La competencia gana más pacientes.",
    ],
    en: [
      "Patients don't book online appointments.",
      "You don't appear on Google when people search for a dentist.",
      "No post-visit follow-up.",
      "Social media does not generate real appointments.",
      "Competitors are getting more patients.",
    ],
  },
  solution: {
    es: "Dental OS convierte tu presencia digital en citas y seguimiento automático para tu consultorio.",
    en: "Dental OS turns your digital presence into appointments and automatic follow-up for your dental practice.",
  },
  modules: [
    { icon: "🌐", name: "Landing dental" },
    { icon: "🗺️", name: "Google Maps / SEO" },
    { icon: "📅", name: "Agenda online" },
    { icon: "💬", name: "WhatsApp automatizado" },
    { icon: "👥", name: "CRM pacientes" },
    { icon: "📊", name: "Reportes" },
    { icon: "📱", name: "Redes sociales" },
    { icon: "⭐", name: "Gestión reseñas" },
  ],
  ctaLabel: {
    es: "Solicitar diagnóstico dental gratuito",
    en: "Request free dental diagnostic",
  },
  faq: [
    {
      q: { es: "¿Puedo ver resultados en el primer mes?", en: "Can I see results in the first month?" },
      a: { es: "La presencia digital mejora desde el inicio. Los primeros pacientes nuevos suelen llegar en 30-60 días.", en: "Digital presence improves from the start. First new patients usually arrive within 30-60 days." },
    },
    {
      q: { es: "¿Incluye manejo de redes sociales?", en: "Does it include social media management?" },
      a: { es: "Sí, en los planes Crecimiento Digital y superiores.", en: "Yes, in the Digital Growth plan and above." },
    },
  ],
};

export default function DentalOS() {
  return <IndustryTemplate content={content} />;
}
