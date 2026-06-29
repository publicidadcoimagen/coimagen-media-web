import { ServiceLandingTemplate, ServiceContent } from "@/components/templates/ServiceLandingTemplate";

const content: ServiceContent = {
  slug: "camila-ai",
  accentColor: "lime",
  accentHex: "#A8FF3E",
  icon: "💬",
  seoTitle: {
    es: "Camila AI — Tu Asistente de IA para Negocios | Coimagen Media Agency",
    en: "Camila AI — Your Business AI Assistant | Coimagen Media Agency",
  },
  metaDesc: {
    es: "Camila AI es el asistente digital oficial de Coimagen. Atiende a tus clientes, califica prospectos y agenda reuniones de forma autónoma con personalidad de marca.",
    en: "Camila AI is Coimagen's official digital assistant. Attends your clients, qualifies leads, and schedules meetings autonomously with brand personality.",
  },
  hero: {
    title: { es: "Tu asistente de IA que convierte visitantes en clientes", en: "Your AI Assistant That Turns Visitors Into Clients" },
    subtitle: {
      es: "Camila AI es más que un chatbot. Es un asesor digital entrenado con la filosofía y servicios de tu empresa para guiar a tus prospectos hasta convertirlos en clientes — a cualquier hora.",
      en: "Camila AI is more than a chatbot. It's a digital advisor trained with your company's philosophy and services to guide your prospects until they become clients — at any hour.",
    },
    benefit: { es: "Camila nunca pierde un prospecto, nunca se cansa y siempre representa tu marca perfectamente", en: "Camila never loses a lead, never gets tired, and always represents your brand perfectly" },
  },
  pain: {
    items: [
      { icon: "😴", text: { es: "Cuando prospectos te escriben fuera de horario, nadie los atiende", en: "When leads write to you outside business hours, nobody attends them" } },
      { icon: "📉", text: { es: "Los chats genéricos de tu sitio se sienten fríos e impersonales", en: "The generic chats on your site feel cold and impersonal" } },
      { icon: "⏰", text: { es: "Tu equipo pierde tiempo en conversaciones que no llegan a ningún lado", en: "Your team wastes time on conversations that go nowhere" } },
      { icon: "🤷", text: { es: "No sabes qué preguntas hacen más tus prospectos antes de comprar", en: "You don't know what questions your leads ask most before buying" } },
      { icon: "🎯", text: { es: "Es difícil calificar si un prospecto realmente tiene presupuesto e intención", en: "It's hard to qualify if a lead really has budget and intent" } },
      { icon: "📅", text: { es: "El proceso de agendar una reunión es largo y muchos prospectos se pierden", en: "The process of scheduling a meeting is long and many leads get lost" } },
    ],
  },
  solution: {
    steps: [
      { icon: "🎭", title: { es: "Personalidad de marca", en: "Brand personality" }, desc: { es: "Camila adopta la voz, tono y valores de tu empresa. No se siente genérica — se siente parte de tu equipo.", en: "Camila adopts your company's voice, tone, and values. It doesn't feel generic — it feels like part of your team." } },
      { icon: "🧠", title: { es: "Conocimiento profundo", en: "Deep knowledge" }, desc: { es: "Entrenamos a Camila con todos tus productos, servicios, precios, proceso y FAQs.", en: "We train Camila with all your products, services, prices, process, and FAQs." } },
      { icon: "🎯", title: { es: "Calificación inteligente", en: "Intelligent qualification" }, desc: { es: "Hace las preguntas correctas para identificar el nivel de interés, urgencia y presupuesto del prospecto.", en: "Asks the right questions to identify the lead's level of interest, urgency, and budget." } },
      { icon: "📅", title: { es: "Agendamiento automático", en: "Automatic scheduling" }, desc: { es: "Cuando el prospecto está listo, Camila lo lleva directamente al calendario para agendar una reunión.", en: "When the lead is ready, Camila takes them directly to the calendar to schedule a meeting." } },
      { icon: "🔗", title: { es: "Conexión con tu equipo", en: "Connection with your team" }, desc: { es: "Camila notifica a tu equipo en tiempo real cuando hay un prospecto calificado listo para cerrar.", en: "Camila notifies your team in real time when there's a qualified lead ready to close." } },
      { icon: "📈", title: { es: "Mejora continua", en: "Continuous improvement" }, desc: { es: "Analizamos las conversaciones mensualmente para mejorar las respuestas y aumentar conversiones.", en: "We analyze conversations monthly to improve responses and increase conversions." } },
    ],
  },
  benefits: {
    items: [
      { icon: "🌙", title: { es: "Disponible siempre", en: "Always available" }, desc: { es: "Camila atiende prospectos a las 3am igual que a las 3pm. Nunca pierdes un lead por horario.", en: "Camila attends leads at 3am just like at 3pm. You never lose a lead due to hours." } },
      { icon: "🎭", title: { es: "Tu voz, no un robot", en: "Your voice, not a robot" }, desc: { es: "Los prospectos sienten que hablan con alguien de tu empresa, no con un chatbot genérico.", en: "Leads feel like they're talking to someone from your company, not a generic chatbot." } },
      { icon: "📊", title: { es: "Datos valiosos", en: "Valuable data" }, desc: { es: "Descubres qué preguntan más tus prospectos, qué objeciones tienen y por qué no compran.", en: "You discover what your leads ask most, what objections they have, and why they don't buy." } },
      { icon: "🎯", title: { es: "Mejor calificación", en: "Better qualification" }, desc: { es: "Tu equipo recibe solo prospectos calificados, no pierde tiempo con quien no va a comprar.", en: "Your team receives only qualified leads, doesn't waste time with those who won't buy." } },
      { icon: "⚡", title: { es: "Velocidad de respuesta", en: "Response speed" }, desc: { es: "Respuesta inmediata que genera confianza y mantiene el interés del prospecto caliente.", en: "Immediate response that builds trust and keeps the lead's interest hot." } },
      { icon: "💰", title: { es: "Más conversiones", en: "More conversions" }, desc: { es: "Los prospectos bien atendidos de inmediato convierten hasta 5x más que los que esperan.", en: "Leads attended to immediately convert up to 5x more than those who wait." } },
    ],
  },
  includes: {
    items: [
      { es: "Diseño de personalidad de Camila para tu marca", en: "Camila personality design for your brand" },
      { es: "Entrenamiento con tu catálogo de servicios", en: "Training with your service catalog" },
      { es: "Integración en sitio web", en: "Website integration" },
      { es: "Integración con WhatsApp Business", en: "WhatsApp Business integration" },
      { es: "Flujos de calificación personalizados", en: "Custom qualification flows" },
      { es: "Integración con Google Calendar", en: "Google Calendar integration" },
      { es: "Notificaciones al equipo en tiempo real", en: "Real-time team notifications" },
      { es: "Dashboard de conversaciones", en: "Conversation dashboard" },
      { es: "Reporte mensual de interacciones", en: "Monthly interaction report" },
      { es: "Optimización continua basada en datos", en: "Continuous data-driven optimization" },
    ],
  },
  caseStudy: {
    slug: "coimagen-os",
    nameEs: "Coimagen — Implementación Propia",
    nameEn: "Coimagen — Internal Implementation",
    summaryEs: "Implementamos Camila AI en nuestro propio sitio web. El resultado: atención 24/7, más prospectos calificados y un aumento significativo en reuniones agendadas.",
    summaryEn: "We implemented Camila AI on our own website. The result: 24/7 attendance, more qualified leads, and a significant increase in scheduled meetings.",
    metrics: [
      { value: "24/7", labelEs: "atención sin parar", labelEn: "non-stop attendance" },
      { value: "+200%", labelEs: "prospectos calificados", labelEn: "qualified leads" },
      { value: "< 3s", labelEs: "tiempo de respuesta", labelEn: "response time" },
      { value: "5x", labelEs: "más reuniones agendadas", labelEn: "more meetings scheduled" },
    ],
    accentColor: "#00CFFF",
  },
  faq: [
    { q: { es: "¿Camila AI es la misma que aparece en el sitio de Coimagen?", en: "Is Camila AI the same one that appears on Coimagen's site?" }, a: { es: "Sí, la que ves en nuestro sitio es nuestra propia implementación. Para tus clientes, la entrenamos con la identidad de tu marca.", en: "Yes, the one you see on our site is our own implementation. For your clients, we train it with your brand identity." } },
    { q: { es: "¿Puedo personalizar el nombre y la apariencia?", en: "Can I customize the name and appearance?" }, a: { es: "Completamente. Puede tener el nombre y apariencia que prefieras para tu marca. No tiene que llamarse 'Camila'.", en: "Completely. It can have the name and appearance you prefer for your brand. It doesn't have to be called 'Camila'." } },
    { q: { es: "¿Funciona en otros idiomas además del español e inglés?", en: "Does it work in languages other than Spanish and English?" }, a: { es: "Por defecto entrenamos en español e inglés. Para otros idiomas hay un proceso adicional de entrenamiento.", en: "By default we train in Spanish and English. For other languages there's an additional training process." } },
    { q: { es: "¿Cuánto tiempo tarda la implementación?", en: "How long does implementation take?" }, a: { es: "Entre 1 y 3 semanas dependiendo de la complejidad del entrenamiento y las integraciones necesarias.", en: "Between 1 and 3 weeks depending on the training complexity and required integrations." } },
    { q: { es: "¿Puedo actualizar la información de Camila cuando cambie mis servicios?", en: "Can I update Camila's information when my services change?" }, a: { es: "Sí. Incluimos actualizaciones periódicas de la base de conocimiento. También puedes notificarnos cuando hay cambios importantes.", en: "Yes. We include periodic knowledge base updates. You can also notify us when there are important changes." } },
  ],
};

export default function CamilaAIPage() {
  return <ServiceLandingTemplate content={content} />;
}
