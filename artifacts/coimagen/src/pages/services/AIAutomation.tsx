import { ServiceLandingTemplate, ServiceContent } from "@/components/templates/ServiceLandingTemplate";

const content: ServiceContent = {
  slug: "ai-automation",
  heroImage: "/images/landing/ai-automation.png",
  accentColor: "purple",
  accentHex: "#A855F7",
  icon: "⚡",
  seoTitle: {
    es: "AI Automation — Automatización con IA para tu Negocio | Coimagen",
    en: "AI Automation — Automate Your Business with AI | Coimagen",
  },
  metaDesc: {
    es: "Automatiza procesos repetitivos con inteligencia artificial. Seguimiento de clientes, respuestas automáticas, reportes y flujos que trabajan sin parar.",
    en: "Automate repetitive processes with artificial intelligence. Client follow-up, automatic responses, reports, and flows that work non-stop.",
  },
  hero: {
    title: { es: "Automatiza tu negocio con IA y trabaja menos, gana más", en: "Automate Your Business with AI — Work Less, Earn More" },
    subtitle: {
      es: "Las empresas que automatizan sus procesos con IA crecen 3x más rápido. Eliminamos el trabajo manual repetitivo para que tú y tu equipo se enfoquen en lo que realmente importa.",
      en: "Businesses that automate with AI grow 3x faster. We eliminate repetitive manual work so you and your team can focus on what really matters.",
    },
    benefit: { es: "Cada hora ahorrada en tareas manuales es una hora que puedes invertir en crecer", en: "Every hour saved on manual tasks is an hour you can invest in growing" },
  },
  pain: {
    items: [
      { icon: "⏰", text: { es: "Tu equipo pierde horas respondiendo las mismas preguntas todos los días", en: "Your team wastes hours answering the same questions every day" } },
      { icon: "📋", text: { es: "Los prospectos se enfrían porque nadie les da seguimiento a tiempo", en: "Leads go cold because nobody follows up with them on time" } },
      { icon: "😤", text: { es: "Tus procesos internos dependen de que alguien recuerde hacerlos", en: "Your internal processes depend on someone remembering to do them" } },
      { icon: "📊", text: { es: "No tienes reportes automáticos de lo que pasa en tu negocio", en: "You have no automatic reports on what's happening in your business" } },
      { icon: "💬", text: { es: "Pierdes ventas por no responder WhatsApp a tiempo fuera de horario", en: "You lose sales by not responding to WhatsApp on time outside business hours" } },
      { icon: "🔄", text: { es: "Cada nuevo cliente requiere trabajo manual desde cero", en: "Each new client requires manual work from scratch" } },
    ],
  },
  solution: {
    steps: [
      { icon: "🔍", title: { es: "Mapeo de procesos", en: "Process mapping" }, desc: { es: "Analizamos todos tus procesos actuales para identificar qué se puede automatizar y cuánto tiempo te ahorra.", en: "We analyze all your current processes to identify what can be automated and how much time it saves you." } },
      { icon: "🤖", title: { es: "Diseño de flujos", en: "Flow design" }, desc: { es: "Diseñamos flujos automáticos de trabajo: desde capturar un lead hasta cerrar la venta.", en: "We design automatic work flows: from capturing a lead to closing the sale." } },
      { icon: "⚙️", title: { es: "Implementación", en: "Implementation" }, desc: { es: "Conectamos tus herramientas existentes (WhatsApp, CRM, email, Google) con automatizaciones inteligentes.", en: "We connect your existing tools (WhatsApp, CRM, email, Google) with intelligent automations." } },
      { icon: "🧠", title: { es: "IA integrada", en: "AI integrated" }, desc: { es: "Añadimos inteligencia artificial para que las respuestas automáticas sean personalizadas y relevantes.", en: "We add artificial intelligence so automatic responses are personalized and relevant." } },
      { icon: "📊", title: { es: "Reportes automáticos", en: "Automatic reports" }, desc: { es: "Configuramos dashboards que te muestran el estado de tu negocio sin tener que pedirle datos a nadie.", en: "We set up dashboards that show you your business status without having to ask anyone for data." } },
      { icon: "🔧", title: { es: "Mantenimiento", en: "Maintenance" }, desc: { es: "Monitoreo continuo para que tus automatizaciones funcionen perfectamente y se mejoren con el tiempo.", en: "Continuous monitoring so your automations work perfectly and improve over time." } },
    ],
  },
  benefits: {
    items: [
      { icon: "⏰", title: { es: "Ahorro de tiempo", en: "Time savings" }, desc: { es: "Recupera horas de trabajo manual cada semana. Tu equipo se enfoca en tareas de alto valor.", en: "Recover hours of manual work each week. Your team focuses on high-value tasks." } },
      { icon: "🚀", title: { es: "Más velocidad", en: "More speed" }, desc: { es: "Los procesos automáticos son más rápidos que los manuales. Respuestas en segundos, no en horas.", en: "Automatic processes are faster than manual ones. Responses in seconds, not hours." } },
      { icon: "🎯", title: { es: "Sin errores humanos", en: "No human errors" }, desc: { es: "Los flujos automáticos siempre hacen lo correcto, sin olvidarse ni cometer errores.", en: "Automatic flows always do the right thing, without forgetting or making mistakes." } },
      { icon: "📈", title: { es: "Más conversiones", en: "More conversions" }, desc: { es: "El seguimiento automático y oportuno convierte más prospectos en clientes.", en: "Timely automatic follow-up converts more leads into clients." } },
      { icon: "💰", title: { es: "Reduce costos", en: "Reduces costs" }, desc: { es: "Haces más con el mismo equipo. La automatización es más barata que contratar personas para tareas repetitivas.", en: "You do more with the same team. Automation is cheaper than hiring people for repetitive tasks." } },
      { icon: "🌙", title: { es: "Trabaja 24/7", en: "Works 24/7" }, desc: { es: "Tus automatizaciones nunca duermen. Atienden prospectos a las 3am igual que a las 3pm.", en: "Your automations never sleep. They attend to leads at 3am just like at 3pm." } },
    ],
  },
  includes: {
    items: [
      { es: "Análisis y mapeo de procesos actuales", en: "Analysis and mapping of current processes" },
      { es: "Diseño de flujos de automatización", en: "Automation flow design" },
      { es: "Integración con WhatsApp Business API", en: "WhatsApp Business API integration" },
      { es: "Automatización de seguimiento de prospectos", en: "Lead follow-up automation" },
      { es: "Respuestas automáticas personalizadas con IA", en: "Personalized automatic responses with AI" },
      { es: "Integración con CRM existente", en: "Integration with existing CRM" },
      { es: "Notificaciones automáticas al equipo", en: "Automatic team notifications" },
      { es: "Dashboard de resultados en tiempo real", en: "Real-time results dashboard" },
      { es: "Capacitación del equipo", en: "Team training" },
      { es: "Soporte y mantenimiento mensual", en: "Monthly support and maintenance" },
    ],
  },
  caseStudy: {
    slug: "dr-segovia",
    nameEs: "Dr. Segovia — Neurocirugía",
    nameEn: "Dr. Segovia — Neurosurgery",
    summaryEs: "El consultorio del Dr. Segovia operaba 100% manual. Automatizamos el seguimiento de pacientes, recordatorios de cita y gestión de expedientes, reduciendo el trabajo administrativo a la mitad.",
    summaryEn: "Dr. Segovia's practice operated 100% manually. We automated patient follow-up, appointment reminders, and record management, cutting administrative work in half.",
    metrics: [
      { value: "-60%", labelEs: "tiempo administrativo", labelEn: "admin time" },
      { value: "+40%", labelEs: "retención de pacientes", labelEn: "patient retention" },
      { value: "100%", labelEs: "expedientes digitales", labelEn: "digital records" },
      { value: "0", labelEs: "pacientes olvidados", labelEn: "forgotten patients" },
    ],
    accentColor: "#3B82F6",
  },
  faq: [
    { q: { es: "¿Necesito cambiar todas mis herramientas para automatizar?", en: "Do I need to change all my tools to automate?" }, a: { es: "No. Conectamos las herramientas que ya usas (WhatsApp, Gmail, Google Sheets, etc.) con automatizaciones. La mayoría de las veces no necesitas comprar nada nuevo.", en: "No. We connect the tools you already use (WhatsApp, Gmail, Google Sheets, etc.) with automations. Most of the time you don't need to buy anything new." } },
    { q: { es: "¿Qué tan difícil es para mi equipo aprender a usar las automatizaciones?", en: "How hard is it for my team to learn to use the automations?" }, a: { es: "Las automatizaciones trabajan en segundo plano — tu equipo no necesita hacer nada especial. Incluimos capacitación completa y documentación.", en: "Automations work in the background — your team doesn't need to do anything special. We include full training and documentation." } },
    { q: { es: "¿Qué pasa si la automatización comete un error?", en: "What happens if the automation makes a mistake?" }, a: { es: "Diseñamos flujos con puntos de revisión humana para decisiones importantes. Además, monitoreamos las automatizaciones continuamente para detectar y corregir cualquier problema.", en: "We design flows with human review points for important decisions. We also monitor automations continuously to detect and fix any issues." } },
    { q: { es: "¿Pueden automatizar WhatsApp?", en: "Can you automate WhatsApp?" }, a: { es: "Sí. Usamos WhatsApp Business API para automatizar respuestas, seguimientos, recordatorios y mensajes de bienvenida de forma profesional y dentro de las políticas de Meta.", en: "Yes. We use WhatsApp Business API to automate responses, follow-ups, reminders, and welcome messages professionally and within Meta's policies." } },
    { q: { es: "¿Cuánto tiempo tarda la implementación?", en: "How long does implementation take?" }, a: { es: "Depende del alcance. Una automatización básica puede implementarse en 1 a 2 semanas. Un sistema completo puede tomar 4 a 8 semanas.", en: "It depends on the scope. A basic automation can be implemented in 1 to 2 weeks. A complete system can take 4 to 8 weeks." } },
  ],
};

export default function AIAutomation() {
  return <ServiceLandingTemplate content={content} />;
}
