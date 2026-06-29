import { ServiceLandingTemplate, ServiceContent } from "@/components/templates/ServiceLandingTemplate";

const content: ServiceContent = {
  slug: "ai-agents",
  accentColor: "cyan",
  accentHex: "#00CFFF",
  icon: "🤖",
  seoTitle: {
    es: "AI Agents — Agentes de IA para tu Negocio | Coimagen Media Agency",
    en: "AI Agents — AI Agents for Your Business | Coimagen Media Agency",
  },
  metaDesc: {
    es: "Agentes de inteligencia artificial que trabajan por tu negocio 24/7. Atienden clientes, califican prospectos, agendan reuniones y responden dudas de forma autónoma.",
    en: "AI agents that work for your business 24/7. They attend clients, qualify leads, schedule meetings, and answer questions autonomously.",
  },
  hero: {
    title: { es: "Agentes de IA que trabajan por ti 24/7, sin descanso ni salario", en: "AI Agents That Work for You 24/7 — No Breaks, No Salaries" },
    subtitle: {
      es: "Los agentes de IA son empleados digitales que atienden clientes, responden preguntas, califican prospectos y agendan reuniones de forma completamente autónoma — a cualquier hora del día.",
      en: "AI agents are digital employees that attend clients, answer questions, qualify leads, and schedule meetings completely autonomously — at any hour of the day.",
    },
    benefit: { es: "Un agente de IA puede atender a 100 clientes simultáneos sin errores y sin espera", en: "An AI agent can attend to 100 clients simultaneously without errors and without wait" },
  },
  pain: {
    items: [
      { icon: "😤", text: { es: "Pierdes prospectos porque no puedes atenderlos a todas horas", en: "You lose leads because you can't attend to them at all hours" } },
      { icon: "💸", text: { es: "Contratar más personal para atención al cliente es muy costoso", en: "Hiring more staff for customer service is very expensive" } },
      { icon: "⏰", text: { es: "Tu equipo pierde tiempo respondiendo preguntas básicas repetitivas", en: "Your team wastes time answering the same basic questions repeatedly" } },
      { icon: "📉", text: { es: "La calidad de atención varía según quién está trabajando ese día", en: "Service quality varies depending on who's working that day" } },
      { icon: "🌙", text: { es: "Fuera de horario, los prospectos se van a tu competencia", en: "Outside business hours, leads go to your competition" } },
      { icon: "📊", text: { es: "No tienes datos de qué preguntan más tus clientes potenciales", en: "You have no data on what your potential clients ask most" } },
    ],
  },
  solution: {
    steps: [
      { icon: "🧠", title: { es: "Entrenamiento del agente", en: "Agent training" }, desc: { es: "Entrenamos al agente con toda la información de tu negocio: servicios, precios, FAQs y procesos.", en: "We train the agent with all your business information: services, prices, FAQs, and processes." } },
      { icon: "💬", title: { es: "Integración multicanal", en: "Multichannel integration" }, desc: { es: "Desplegamos el agente en WhatsApp, tu sitio web, Instagram y los canales que uses.", en: "We deploy the agent on WhatsApp, your website, Instagram, and the channels you use." } },
      { icon: "🎯", title: { es: "Calificación de prospectos", en: "Lead qualification" }, desc: { es: "El agente hace las preguntas correctas para identificar si el prospecto es calificado antes de pasarlo a tu equipo.", en: "The agent asks the right questions to identify if the lead is qualified before passing them to your team." } },
      { icon: "📅", title: { es: "Agendamiento automático", en: "Automatic scheduling" }, desc: { es: "El agente puede agendar reuniones directamente en tu calendario sin intervención humana.", en: "The agent can schedule meetings directly in your calendar without human intervention." } },
      { icon: "🔗", title: { es: "Escalación inteligente", en: "Intelligent escalation" }, desc: { es: "Cuando el agente detecta una situación compleja, la escala automáticamente a un humano.", en: "When the agent detects a complex situation, it automatically escalates to a human." } },
      { icon: "📊", title: { es: "Aprendizaje continuo", en: "Continuous learning" }, desc: { es: "El agente mejora con cada conversación, volviéndose más preciso y útil con el tiempo.", en: "The agent improves with every conversation, becoming more accurate and useful over time." } },
    ],
  },
  benefits: {
    items: [
      { icon: "🌙", title: { es: "Disponible 24/7", en: "Available 24/7" }, desc: { es: "Atiende a tus clientes a las 2am igual que a las 2pm, sin costo adicional.", en: "Attends to your clients at 2am just like at 2pm, at no additional cost." } },
      { icon: "⚡", title: { es: "Respuesta inmediata", en: "Immediate response" }, desc: { es: "El agente responde en segundos, eliminando la espera que hace perder clientes.", en: "The agent responds in seconds, eliminating the wait that causes lost clients." } },
      { icon: "📈", title: { es: "Más conversiones", en: "More conversions" }, desc: { es: "Los prospectos bien atendidos de inmediato convierten significativamente más.", en: "Leads attended to immediately convert significantly more." } },
      { icon: "💰", title: { es: "Reduce costos", en: "Reduces costs" }, desc: { es: "Un agente de IA cuesta mucho menos que contratar personal de atención al cliente.", en: "An AI agent costs much less than hiring customer service staff." } },
      { icon: "📊", title: { es: "Datos de conversaciones", en: "Conversation data" }, desc: { es: "Sabes exactamente qué preguntan tus clientes, qué dudas tienen y por qué no compran.", en: "You know exactly what your clients ask, what doubts they have, and why they don't buy." } },
      { icon: "🎯", title: { es: "Consistencia perfecta", en: "Perfect consistency" }, desc: { es: "Siempre da la misma información correcta, sin malos días ni errores por descuido.", en: "Always gives the same correct information, with no bad days or careless errors." } },
    ],
  },
  includes: {
    items: [
      { es: "Diseño y entrenamiento del agente IA", en: "AI agent design and training" },
      { es: "Integración en sitio web (chat)", en: "Website integration (chat)" },
      { es: "Integración con WhatsApp Business", en: "WhatsApp Business integration" },
      { es: "Base de conocimiento de tu negocio", en: "Business knowledge base" },
      { es: "Flujos de calificación de prospectos", en: "Lead qualification flows" },
      { es: "Integración con calendario para agendar", en: "Calendar integration for scheduling" },
      { es: "Escalación inteligente a humanos", en: "Intelligent escalation to humans" },
      { es: "Dashboard de conversaciones", en: "Conversation dashboard" },
      { es: "Reporte mensual de interacciones", en: "Monthly interaction report" },
      { es: "Mejoras y actualizaciones continuas", en: "Continuous improvements and updates" },
    ],
  },
  caseStudy: {
    slug: "coimagen-os",
    nameEs: "COIMAGEN OS — Caso Interno",
    nameEn: "COIMAGEN OS — Internal Case",
    summaryEs: "Implementamos nuestros propios agentes de IA para atender prospectos en nuestro sitio y WhatsApp. El resultado: 3x más prospectos calificados sin contratar más personal.",
    summaryEn: "We implemented our own AI agents to attend leads on our website and WhatsApp. The result: 3x more qualified leads without hiring more staff.",
    metrics: [
      { value: "3x", labelEs: "más prospectos calificados", labelEn: "more qualified leads" },
      { value: "< 5s", labelEs: "tiempo de respuesta", labelEn: "response time" },
      { value: "24/7", labelEs: "disponibilidad", labelEn: "availability" },
      { value: "-70%", labelEs: "tiempo en atención manual", labelEn: "manual attention time" },
    ],
    accentColor: "#00CFFF",
  },
  faq: [
    { q: { es: "¿El agente de IA suena como un robot?", en: "Does the AI agent sound like a robot?" }, a: { es: "No. Entrenamos al agente con la voz y personalidad de tu marca. Los clientes tienen conversaciones naturales y muchos no saben que están hablando con una IA.", en: "No. We train the agent with your brand's voice and personality. Clients have natural conversations and many don't know they're talking to an AI." } },
    { q: { es: "¿El agente puede cerrar ventas?", en: "Can the agent close sales?" }, a: { es: "Puede llevar al prospecto hasta el punto de agendar una reunión o enviar una propuesta. La negociación final normalmente requiere intervención humana.", en: "It can take the lead up to the point of scheduling a meeting or sending a proposal. Final negotiation usually requires human intervention." } },
    { q: { es: "¿Qué pasa cuando el agente no sabe la respuesta?", en: "What happens when the agent doesn't know the answer?" }, a: { es: "El agente está diseñado para reconocer sus límites y escalar a un humano de tu equipo de forma transparente, sin frustrar al cliente.", en: "The agent is designed to recognize its limits and escalate to a human on your team transparently, without frustrating the client." } },
    { q: { es: "¿Funciona en español e inglés?", en: "Does it work in Spanish and English?" }, a: { es: "Sí. El agente detecta automáticamente el idioma del usuario y responde en el mismo idioma.", en: "Yes. The agent automatically detects the user's language and responds in the same language." } },
    { q: { es: "¿Puedo ver las conversaciones que tiene el agente?", en: "Can I see the conversations the agent has?" }, a: { es: "Sí. Tienes acceso a todas las conversaciones en un dashboard y recibes resúmenes periódicos con los temas más frecuentes.", en: "Yes. You have access to all conversations in a dashboard and receive periodic summaries with the most frequent topics." } },
  ],
};

export default function AIAgents() {
  return <ServiceLandingTemplate content={content} />;
}
