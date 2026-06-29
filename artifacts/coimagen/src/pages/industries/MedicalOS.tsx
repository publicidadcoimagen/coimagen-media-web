import { IndustryTemplate } from "./IndustryTemplate";

const content = {
  slug: "medical-os",
  heroImage: "/images/landing/medical-os.png",
  icon: "🏥",
  color: "#3b82f6",
  seoTitle: {
    es: "Medical OS | CRM y automatización para médicos y clínicas",
    en: "Medical OS | CRM and automation for doctors and clinics",
  },
  metaDesc: {
    es: "Sistema digital para médicos, clínicas y especialistas: landing, agenda, CRM, seguimiento de pacientes, contenido, reportes y automatización.",
    en: "Digital system for doctors, clinics and specialists: landing page, booking, CRM, patient follow-up, content, reports and automation.",
  },
  title: {
    es: "Medical OS",
    en: "Medical OS",
  },
  subtitle: {
    es: "Sistema digital completo para médicos, clínicas y especialistas. Capta pacientes, organiza seguimientos y opera con más control.",
    en: "Complete digital system for doctors, clinics and specialists. Attract patients, organize follow-ups and operate with full control.",
  },
  pain: {
    es: [
      "Pacientes se pierden por falta de seguimiento.",
      "WhatsApp está saturado.",
      "No hay agenda centralizada.",
      "No hay reportes claros.",
      "La clínica depende de procesos manuales.",
      "No hay sistema para contenido, SEO y reputación.",
    ],
    en: [
      "Patients are lost due to lack of follow-up.",
      "WhatsApp is overwhelmed.",
      "No centralized appointment system.",
      "No clear reports.",
      "The clinic depends on manual processes.",
      "No system for content, SEO and online reputation.",
    ],
  },
  solution: {
    es: "Medical OS ayuda a médicos y clínicas a captar pacientes, organizar seguimientos y operar con más control usando marketing digital, automatización y CRM.",
    en: "Medical OS helps doctors and clinics attract patients, organize follow-ups and operate with more control using digital marketing, automation and CRM.",
  },
  modules: [
    { icon: "🌐", name: "Landing médica" },
    { icon: "🗺️", name: "Google Maps / SEO" },
    { icon: "📋", name: "Formulario de pacientes" },
    { icon: "📅", name: "Agenda" },
    { icon: "👥", name: "CRM de pacientes" },
    { icon: "💬", name: "Seguimiento WhatsApp" },
    { icon: "📊", name: "Reportes" },
    { icon: "✍️", name: "Contenido médico" },
  ],
  ctaLabel: {
    es: "Solicitar diagnóstico médico gratuito",
    en: "Request free medical diagnostic",
  },
  faq: [
    {
      q: { es: "¿Cuánto tiempo tarda la implementación?", en: "How long does implementation take?" },
      a: { es: "Entre 2 y 4 semanas dependiendo del alcance y el diagnóstico previo.", en: "Between 2 and 4 weeks depending on scope and prior diagnostic." },
    },
    {
      q: { es: "¿Necesito conocimientos técnicos?", en: "Do I need technical knowledge?" },
      a: { es: "No. Nosotros implementamos todo y te capacitamos en el uso del sistema.", en: "No. We implement everything and train you on how to use the system." },
    },
    {
      q: { es: "¿Funciona para clínicas pequeñas?", en: "Does it work for small clinics?" },
      a: { es: "Sí. Tenemos paquetes adaptados para consultorios individuales y clínicas medianas.", en: "Yes. We have packages tailored for individual practices and mid-size clinics." },
    },
  ],
};

export default function MedicalOS() {
  return <IndustryTemplate content={content} />;
}
