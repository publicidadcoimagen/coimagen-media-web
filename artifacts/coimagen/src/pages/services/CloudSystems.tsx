import { ServiceLandingTemplate, ServiceContent } from "@/components/templates/ServiceLandingTemplate";

const content: ServiceContent = {
  slug: "cloud-systems",
  accentColor: "cyan",
  accentHex: "#00CFFF",
  icon: "☁️",
  seoTitle: {
    es: "Cloud Systems — Infraestructura en la Nube para Empresas | Coimagen",
    en: "Cloud Systems — Cloud Infrastructure for Businesses | Coimagen",
  },
  metaDesc: {
    es: "Migra tu empresa a la nube con infraestructura segura, escalable y confiable. Servidores, backups, seguridad y acceso remoto para equipos modernos.",
    en: "Move your business to the cloud with secure, scalable, and reliable infrastructure. Servers, backups, security, and remote access for modern teams.",
  },
  hero: {
    title: { es: "Infraestructura en la nube segura, rápida y escalable para tu empresa", en: "Secure, Fast and Scalable Cloud Infrastructure for Your Business" },
    subtitle: {
      es: "Las empresas modernas operan en la nube. Tu información, sistemas y equipo deben estar disponibles desde cualquier lugar, con máxima seguridad y sin preocuparte por servidores físicos.",
      en: "Modern businesses operate in the cloud. Your information, systems, and team must be available from anywhere, with maximum security and without worrying about physical servers.",
    },
    benefit: { es: "El 94% de las empresas que migran a la nube reportan mejoras en seguridad y reducción de costos de TI", en: "94% of businesses that migrate to the cloud report improved security and reduced IT costs" },
  },
  pain: {
    items: [
      { icon: "💾", text: { es: "Tu información importante está solo en computadoras locales que pueden fallar", en: "Your important information is only on local computers that can fail" } },
      { icon: "🔒", text: { es: "No tienes una estrategia de backup y recuperación de datos", en: "You don't have a data backup and recovery strategy" } },
      { icon: "🏠", text: { es: "Tu equipo no puede trabajar de forma remota con acceso seguro a los sistemas", en: "Your team can't work remotely with secure access to systems" } },
      { icon: "🐌", text: { es: "Tus sistemas son lentos porque el hardware local ya está obsoleto", en: "Your systems are slow because local hardware is already outdated" } },
      { icon: "💰", text: { es: "Gastas mucho en mantenimiento de servidores e infraestructura física", en: "You spend a lot on maintenance of servers and physical infrastructure" } },
      { icon: "🚨", text: { es: "Si hay un fallo de hardware, puedes perder días de trabajo o información crítica", en: "If there's a hardware failure, you could lose days of work or critical information" } },
    ],
  },
  solution: {
    steps: [
      { icon: "🔍", title: { es: "Auditoría de infraestructura", en: "Infrastructure audit" }, desc: { es: "Analizamos tu infraestructura actual, necesidades y riesgos para diseñar la solución ideal en la nube.", en: "We analyze your current infrastructure, needs, and risks to design the ideal cloud solution." } },
      { icon: "🏗️", title: { es: "Diseño de arquitectura", en: "Architecture design" }, desc: { es: "Diseñamos una arquitectura cloud segura, eficiente y escalable adaptada a tu empresa.", en: "We design a secure, efficient, and scalable cloud architecture adapted to your company." } },
      { icon: "🚀", title: { es: "Migración a la nube", en: "Cloud migration" }, desc: { es: "Migramos tus sistemas, datos y aplicaciones a la nube con mínima interrupción.", en: "We migrate your systems, data, and applications to the cloud with minimal disruption." } },
      { icon: "🔒", title: { es: "Seguridad y accesos", en: "Security and access" }, desc: { es: "Configuramos permisos por roles, autenticación de dos factores y monitoreo de seguridad.", en: "We configure role-based permissions, two-factor authentication, and security monitoring." } },
      { icon: "💾", title: { es: "Backups automáticos", en: "Automatic backups" }, desc: { es: "Backups automáticos diarios con múltiples copias geográficas para máxima protección.", en: "Daily automatic backups with multiple geographic copies for maximum protection." } },
      { icon: "📊", title: { es: "Monitoreo continuo", en: "Continuous monitoring" }, desc: { es: "Monitoreo 24/7 del rendimiento, seguridad y disponibilidad de tus sistemas.", en: "24/7 monitoring of performance, security, and availability of your systems." } },
    ],
  },
  benefits: {
    items: [
      { icon: "🔒", title: { es: "Máxima seguridad", en: "Maximum security" }, desc: { es: "Tus datos están protegidos con encriptación, accesos controlados y monitoreo constante.", en: "Your data is protected with encryption, controlled access, and constant monitoring." } },
      { icon: "🌍", title: { es: "Acceso desde cualquier lugar", en: "Access from anywhere" }, desc: { es: "Tu equipo trabaja desde casa, oficina o viaje con acceso seguro a todos los sistemas.", en: "Your team works from home, office, or travel with secure access to all systems." } },
      { icon: "⚡", title: { es: "Mayor velocidad", en: "Higher speed" }, desc: { es: "Infraestructura cloud moderna es significativamente más rápida que servidores físicos locales.", en: "Modern cloud infrastructure is significantly faster than local physical servers." } },
      { icon: "📈", title: { es: "Escalabilidad", en: "Scalability" }, desc: { es: "Creces sin límite. Añades capacidad cuando la necesitas, sin comprar hardware nuevo.", en: "You grow without limits. Add capacity when you need it, without buying new hardware." } },
      { icon: "💰", title: { es: "Reduce costos", en: "Reduces costs" }, desc: { es: "Eliminas gastos de hardware, mantenimiento físico y personal de TI dedicado.", en: "You eliminate hardware expenses, physical maintenance, and dedicated IT staff." } },
      { icon: "💾", title: { es: "Nunca pierdes datos", en: "Never lose data" }, desc: { es: "Backups automáticos garantizan que nunca pierdas información crítica de tu negocio.", en: "Automatic backups ensure you never lose critical business information." } },
    ],
  },
  includes: {
    items: [
      { es: "Auditoría de infraestructura actual", en: "Current infrastructure audit" },
      { es: "Diseño de arquitectura cloud personalizada", en: "Custom cloud architecture design" },
      { es: "Migración completa de datos y sistemas", en: "Complete data and systems migration" },
      { es: "Configuración de seguridad y accesos", en: "Security and access configuration" },
      { es: "Backups automáticos con recuperación", en: "Automatic backups with recovery" },
      { es: "VPN y acceso remoto seguro", en: "VPN and secure remote access" },
      { es: "Monitoreo 24/7 de disponibilidad", en: "24/7 availability monitoring" },
      { es: "Gestión de Google Workspace / Microsoft 365", en: "Google Workspace / Microsoft 365 management" },
      { es: "Capacitación del equipo", en: "Team training" },
      { es: "Soporte técnico mensual", en: "Monthly technical support" },
    ],
  },
  caseStudy: {
    slug: "conchas-tower",
    nameEs: "Conchas Tower — Bienes Raíces",
    nameEn: "Conchas Tower — Real Estate",
    summaryEs: "Conchas Tower necesitaba que su equipo de ventas accediera a información de propiedades desde cualquier ubicación. Migramos su infraestructura a la nube y automatizamos sus procesos internos.",
    summaryEn: "Conchas Tower needed their sales team to access property information from any location. We migrated their infrastructure to the cloud and automated their internal processes.",
    metrics: [
      { value: "100%", labelEs: "acceso remoto seguro", labelEn: "secure remote access" },
      { value: "0", labelEs: "pérdida de datos", labelEn: "data loss" },
      { value: "-40%", labelEs: "costos de TI", labelEn: "IT costs" },
      { value: "3x", labelEs: "velocidad de sistemas", labelEn: "system speed" },
    ],
    accentColor: "#A855F7",
  },
  faq: [
    { q: { es: "¿Qué proveedor de nube usan?", en: "What cloud provider do you use?" }, a: { es: "Trabajamos principalmente con Google Cloud, AWS y Microsoft Azure. Recomendamos el mejor según las necesidades específicas de tu empresa.", en: "We primarily work with Google Cloud, AWS, and Microsoft Azure. We recommend the best one based on your company's specific needs." } },
    { q: { es: "¿Cuánto tiempo tarda la migración?", en: "How long does the migration take?" }, a: { es: "Depende del tamaño y complejidad. Una empresa pequeña puede migrar en 1 a 2 semanas. Una empresa mediana puede tomar 4 a 8 semanas.", en: "It depends on size and complexity. A small company can migrate in 1 to 2 weeks. A medium company can take 4 to 8 weeks." } },
    { q: { es: "¿Mis datos están seguros en la nube?", en: "Is my data safe in the cloud?" }, a: { es: "Los proveedores de nube empresarial tienen niveles de seguridad muy superiores a cualquier servidor físico local. Incluyen encriptación, cumplimiento normativo y centros de datos redundantes.", en: "Enterprise cloud providers have security levels far superior to any local physical server. They include encryption, regulatory compliance, and redundant data centers." } },
    { q: { es: "¿Qué pasa si se cae el internet en mi empresa?", en: "What happens if the internet goes down in my company?" }, a: { es: "Implementamos accesos alternativos y respaldos de conectividad. También configuramos qué procesos pueden funcionar offline temporalmente.", en: "We implement alternative access and connectivity backups. We also configure which processes can temporarily work offline." } },
    { q: { es: "¿Pueden gestionar nuestra nube de forma continua?", en: "Can you continuously manage our cloud?" }, a: { es: "Sí. Ofrecemos servicios de gestión continua: monitoreo, actualizaciones, optimización de costos y soporte técnico mensual.", en: "Yes. We offer continuous management services: monitoring, updates, cost optimization, and monthly technical support." } },
  ],
};

export default function CloudSystems() {
  return <ServiceLandingTemplate content={content} />;
}
