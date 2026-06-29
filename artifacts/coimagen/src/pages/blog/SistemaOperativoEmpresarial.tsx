import { BlogPostTemplate, BlogContent } from "@/components/templates/BlogPostTemplate";

const content: BlogContent = {
  slug: "sistema-operativo-empresarial",
  categoryEs: "Automatización",
  categoryEn: "Automation",
  categoryColor: "#00CFFF",
  icon: "⚙️",
  date: "2026-03-28",
  readTimeMin: 7,
  accentHex: "#00CFFF",
  titleEs: "Sistema operativo digital: por qué tu empresa lo necesita en 2026",
  titleEn: "Digital operating system: why your company needs one in 2026",
  subtitleEs: "Las empresas que centralizan su operación digital crecen 2x más rápido con menos fricción. Es hora de dejar las hojas de cálculo y los WhatsApp grupales.",
  subtitleEn: "Companies that centralize their digital operations grow 2x faster with less friction. It's time to leave spreadsheets and group chats behind.",
  sections: [
    {
      type: "intro",
      bodyEs: "¿Cuántas herramientas usa tu empresa para operar? Hay una hoja de cálculo para proyectos, WhatsApp para comunicación, email para clientes, carpetas en Drive para documentos, y una app separada para facturación. Cada semana alguien pierde tiempo buscando información entre 5 herramientas distintas. Un sistema operativo digital centraliza todo esto.",
      bodyEn: "How many tools does your company use to operate? There's a spreadsheet for projects, WhatsApp for communication, email for clients, folders on Drive for documents, and a separate app for billing. Every week someone wastes time searching for information across 5 different tools. A digital operating system centralizes all of this.",
    },
    {
      type: "heading",
      titleEs: "¿Qué es un sistema operativo empresarial digital?",
      titleEn: "What is a digital business operating system?",
    },
    {
      type: "paragraph",
      bodyEs: "Un sistema operativo empresarial digital (Business OS) es una plataforma centralizada que integra las funciones core de tu empresa: gestión de clientes (CRM), proyectos, comunicación, facturación, reportes y automatizaciones. En lugar de 8 herramientas desconectadas, tienes un solo sistema donde toda tu empresa opera y todos los datos se conectan entre sí.",
      bodyEn: "A digital business operating system (Business OS) is a centralized platform that integrates your company's core functions: client management (CRM), projects, communication, billing, reports, and automations. Instead of 8 disconnected tools, you have one system where your entire company operates and all data connects to each other.",
    },
    {
      type: "heading",
      titleEs: "Las señales de que necesitas un Business OS ahora",
      titleEn: "Signs that you need a Business OS now",
    },
    {
      type: "list",
      items: [
        { es: "Tu información de clientes está en diferentes lugares y nadie tiene la versión actualizada", en: "Your client information is in different places and nobody has the updated version" },
        { es: "Los proyectos se retrasan porque nadie sabe exactamente en qué estado están", en: "Projects get delayed because nobody knows exactly what state they're in" },
        { es: "Dependes de que alguien recuerde hacer algo en vez de que el sistema lo recuerde automáticamente", en: "You depend on someone remembering to do something instead of the system remembering automatically" },
        { es: "Tus reportes financieros tardan días en prepararse porque los datos están dispersos", en: "Your financial reports take days to prepare because data is scattered" },
        { es: "Cuando un empleado sale, la información se va con él", en: "When an employee leaves, the information leaves with them" },
        { es: "No puedes ver en tiempo real la salud de tu empresa sin pedirle datos a varias personas", en: "You can't see your company's health in real time without asking multiple people for data" },
      ],
    },
    {
      type: "heading",
      titleEs: "Los 6 módulos que todo Business OS debe incluir",
      titleEn: "The 6 modules every Business OS must include",
    },
    {
      type: "list",
      items: [
        { es: "CRM: gestión completa de prospectos, clientes activos y seguimiento del pipeline de ventas", en: "CRM: complete management of leads, active clients, and sales pipeline tracking" },
        { es: "Gestión de proyectos: tareas, plazos, responsables y avances visibles para todo el equipo", en: "Project management: tasks, deadlines, owners, and progress visible to the whole team" },
        { es: "Portal del cliente: espacio donde los clientes ven avances, aprueban entregables y se comunican", en: "Client portal: space where clients see progress, approve deliverables, and communicate" },
        { es: "Automatizaciones: flujos de trabajo que se ejecutan solos cuando se cumple una condición", en: "Automations: workflows that execute themselves when a condition is met" },
        { es: "Facturación y finanzas: cotizaciones, facturas, pagos y reportes financieros integrados", en: "Billing and finance: integrated quotes, invoices, payments, and financial reports" },
        { es: "Dashboard ejecutivo: métricas en tiempo real de ventas, proyectos, ingresos y rendimiento del equipo", en: "Executive dashboard: real-time metrics on sales, projects, revenue, and team performance" },
      ],
    },
    {
      type: "highlight",
      titleEs: "COIMAGEN OS: el sistema que usamos nosotros",
      titleEn: "COIMAGEN OS: the system we use ourselves",
      bodyEs: "No recomendamos herramientas que no usemos. COIMAGEN OS es el sistema que utilizamos para gestionar nuestra propia agencia — y el mismo que adaptamos para nuestros clientes según su industria y tamaño.",
      bodyEn: "We don't recommend tools we don't use ourselves. COIMAGEN OS is the system we use to manage our own agency — and the same one we adapt for our clients according to their industry and size.",
    },
    {
      type: "heading",
      titleEs: "Cómo migrar de hojas de cálculo a un Business OS",
      titleEn: "How to migrate from spreadsheets to a Business OS",
    },
    {
      type: "steps",
      items: [
        { es: "Auditoría de herramientas actuales: lista todo lo que usas hoy y para qué lo usas", en: "Current tools audit: list everything you use today and what you use it for" },
        { es: "Define las funciones core: qué módulos necesita tu empresa (CRM, proyectos, facturación, etc.)", en: "Define core functions: what modules your company needs (CRM, projects, billing, etc.)" },
        { es: "Migración de datos: exporta tus contactos, proyectos e información al nuevo sistema", en: "Data migration: export your contacts, projects, and information to the new system" },
        { es: "Capacitación del equipo: todos deben adoptar el nuevo sistema — esto es el factor más crítico del éxito", en: "Team training: everyone must adopt the new system — this is the most critical success factor" },
        { es: "Período de adaptación: 2-4 semanas donde el equipo opera en el nuevo sistema con acompañamiento", en: "Adaptation period: 2-4 weeks where the team operates in the new system with support" },
        { es: "Optimización continua: ajusta los flujos y automatizaciones según las necesidades reales del negocio", en: "Continuous optimization: adjust flows and automations according to real business needs" },
      ],
    },
    {
      type: "cta_inline",
      titleEs: "¿Quieres ver cómo funcionaría un Business OS en tu empresa?",
      titleEn: "Want to see how a Business OS would work in your company?",
      bodyEs: "Hacemos un diagnóstico gratuito y te mostramos exactamente qué módulos necesitas y cuánto tiempo tardaría la implementación.",
      bodyEn: "We do a free diagnosis and show you exactly which modules you need and how long implementation would take.",
    },
  ],
  faq: [
    { q: { es: "¿Un Business OS reemplaza a herramientas como Slack, Notion o Asana?", en: "Does a Business OS replace tools like Slack, Notion, or Asana?" }, a: { es: "Puede reemplazar varias herramientas o integrarse con las que ya tienes. El objetivo no es eliminar todo lo que funciona — es centralizar la información y eliminar la fragmentación.", en: "It can replace several tools or integrate with those you already have. The goal isn't to eliminate everything that works — it's to centralize information and eliminate fragmentation." } },
    { q: { es: "¿Cuánto tiempo tarda implementar un Business OS?", en: "How long does it take to implement a Business OS?" }, a: { es: "Para una empresa de 1-10 personas: 3-6 semanas. Para empresas más grandes: 6-12 semanas. La capacitación y adopción del equipo suelen tomar más tiempo que la configuración técnica.", en: "For a 1-10 person company: 3-6 weeks. For larger companies: 6-12 weeks. Team training and adoption usually takes more time than technical configuration." } },
    { q: { es: "¿Qué pasa si mi equipo no quiere adoptar el nuevo sistema?", en: "What if my team doesn't want to adopt the new system?" }, a: { es: "La resistencia al cambio es el mayor reto en cualquier implementación. Lo resolvemos con capacitación progresiva, simplificando la interfaz y demostrando el beneficio concreto para cada persona del equipo.", en: "Resistance to change is the biggest challenge in any implementation. We resolve it with progressive training, simplifying the interface, and demonstrating the concrete benefit for each team member." } },
    { q: { es: "¿El sistema escala conforme crece mi empresa?", en: "Does the system scale as my company grows?" }, a: { es: "Sí. Diseñamos el sistema con escalabilidad en mente. Cuando creces, solo añades usuarios, módulos o automatizaciones — sin reconstruir desde cero.", en: "Yes. We design the system with scalability in mind. When you grow, you only add users, modules, or automations — without rebuilding from scratch." } },
  ],
  relatedSlugs: ["ia-pequenas-empresas", "automatizacion-abogados", "camila-ai-asistente"],
};

export default function SistemaOperativoEmpresarial() {
  return <BlogPostTemplate content={content} />;
}
