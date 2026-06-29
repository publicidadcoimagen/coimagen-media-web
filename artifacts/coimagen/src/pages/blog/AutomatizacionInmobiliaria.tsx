import { BlogPostTemplate, BlogContent } from "@/components/templates/BlogPostTemplate";

const content: BlogContent = {
  slug: "automatizacion-inmobiliaria",
  categoryEs: "Inmobiliaria",
  categoryEn: "Real Estate",
  categoryColor: "#A855F7",
  icon: "🏠",
  date: "2026-04-05",
  readTimeMin: 7,
  accentHex: "#A855F7",
  titleEs: "Automatización para inmobiliarias: de prospecto a cliente sin trabajo manual",
  titleEn: "Automation for real estate: from lead to client without manual work",
  subtitleEs: "Las inmobiliarias que automatizan su seguimiento convierten 3 veces más prospectos. Aquí está la estrategia completa para implementarlo en tu negocio.",
  subtitleEn: "Real estate agencies that automate their follow-up convert 3 times more leads. Here's the complete strategy to implement it in your business.",
  sections: [
    {
      type: "intro",
      bodyEs: "En el sector inmobiliario, la velocidad de seguimiento lo es todo. Un prospecto que visita tu sitio o manda mensaje por una propiedad puede estar hablando con 3-5 inmobiliarias al mismo tiempo. La inmobiliaria que responde primero — con información relevante y sin pedir que 'esperen a que llegue el agente al lunes' — tiene una ventaja decisiva.",
      bodyEn: "In real estate, follow-up speed is everything. A lead who visits your site or sends a message about a property may be talking to 3-5 agencies at the same time. The agency that responds first — with relevant information and without asking them to 'wait until the agent comes back Monday' — has a decisive advantage.",
    },
    {
      type: "heading",
      titleEs: "El ciclo de vida de un prospecto inmobiliario sin automatización",
      titleEn: "The real estate lead lifecycle without automation",
    },
    {
      type: "list",
      items: [
        { es: "Prospecto llena un formulario un sábado a las 8pm. Nadie lo atiende hasta el lunes.", en: "Lead fills out a form on Saturday at 8pm. Nobody attends them until Monday." },
        { es: "El agente llama el lunes: el prospecto ya firmó con otra inmobiliaria.", en: "Agent calls Monday: the lead already signed with another agency." },
        { es: "El prospecto que SÍ responde al lunes recibe información genérica por WhatsApp.", en: "The lead who DOES respond Monday receives generic information via WhatsApp." },
        { es: "No hay seguimiento estructurado — depende de que el agente recuerde llamar.", en: "There's no structured follow-up — it depends on the agent remembering to call." },
        { es: "Los prospectos 'fríos' nunca reciben seguimiento y se pierden definitivamente.", en: "Cold leads never receive follow-up and are permanently lost." },
      ],
    },
    {
      type: "heading",
      titleEs: "Lo que cambia con automatización inteligente",
      titleEn: "What changes with intelligent automation",
    },
    {
      type: "steps",
      items: [
        { es: "Respuesta en segundos: el prospecto recibe información de la propiedad inmediatamente — fotos, precio, características, disponibilidad", en: "Response in seconds: the lead receives property information immediately — photos, price, features, availability" },
        { es: "Calificación automática: el sistema pregunta presupuesto, plazo de compra, si tiene crédito aprobado y zona de interés", en: "Automatic qualification: the system asks budget, purchase timeline, if they have approved credit, and area of interest" },
        { es: "Agendamiento de visita: si el prospecto califica, se le muestran horarios disponibles para visitar la propiedad", en: "Visit scheduling: if the lead qualifies, they see available times to visit the property" },
        { es: "Seguimiento inteligente: los prospectos no calificados entran a una secuencia de seguimiento a 30, 60 y 90 días", en: "Intelligent follow-up: unqualified leads enter a follow-up sequence at 30, 60, and 90 days" },
        { es: "El agente recibe solo prospectos con visita agendada — con toda su información ya recopilada", en: "The agent receives only leads with a scheduled visit — with all their information already collected" },
      ],
    },
    {
      type: "highlight",
      titleEs: "Tipos de prospectos y cómo automatizar cada uno",
      titleEn: "Types of leads and how to automate each one",
      items: [
        { es: "Prospecto caliente (quiere comprar en 30 días): respuesta inmediata + visita agendada en el mismo día", en: "Hot lead (wants to buy in 30 days): immediate response + visit scheduled the same day" },
        { es: "Prospecto tibio (3-6 meses): secuencia educativa semanal sobre el proceso de compra y propiedades similares", en: "Warm lead (3-6 months): weekly educational sequence about the buying process and similar properties" },
        { es: "Prospecto frío (6+ meses o no calificado): secuencia mensual para mantener el contacto hasta que esté listo", en: "Cold lead (6+ months or unqualified): monthly sequence to maintain contact until they're ready" },
        { es: "Prospecto referido: flujo especial con mensaje personalizado que reconoce quién lo refirió", en: "Referred lead: special flow with personalized message that acknowledges who referred them" },
      ],
    },
    {
      type: "heading",
      titleEs: "Las herramientas de automatización más usadas en inmobiliarias",
      titleEn: "The most used automation tools in real estate",
    },
    {
      type: "list",
      items: [
        { es: "WhatsApp Business API: seguimiento automatizado con mensajes personalizados por tipo de propiedad", en: "WhatsApp Business API: automated follow-up with personalized messages by property type" },
        { es: "CRM inmobiliario: centraliza todos los prospectos con su historial, estado y próxima acción", en: "Real estate CRM: centralizes all leads with their history, status, and next action" },
        { es: "Formularios inteligentes: calificación automática con scoring de prospecto al momento del contacto", en: "Smart forms: automatic qualification with lead scoring at the moment of contact" },
        { es: "Agente de IA en el sitio: responde preguntas sobre propiedades, vecindarios y proceso de compra 24/7", en: "AI agent on site: answers questions about properties, neighborhoods, and buying process 24/7" },
        { es: "Integración con portales: los prospectos de portales como Inmuebles24, Vivanuncios entran automáticamente al CRM", en: "Portal integration: leads from portals like Inmuebles24, Vivanuncios automatically enter the CRM" },
      ],
    },
    {
      type: "cta_inline",
      titleEs: "¿Quieres automatizar el seguimiento de prospectos en tu inmobiliaria?",
      titleEn: "Want to automate lead follow-up in your real estate agency?",
      bodyEs: "Implementamos sistemas de automatización para inmobiliarias en Tijuana y San Diego. Diagnóstico gratuito.",
      bodyEn: "We implement automation systems for real estate agencies in Tijuana and San Diego. Free diagnosis.",
    },
    {
      type: "heading",
      titleEs: "Métricas que deberías medir en tu inmobiliaria",
      titleEn: "Metrics you should measure in your real estate agency",
    },
    {
      type: "list",
      items: [
        { es: "Tiempo de primera respuesta: objetivo menos de 5 minutos para prospectos calientes", en: "First response time: goal of less than 5 minutes for hot leads" },
        { es: "Tasa de calificación: qué porcentaje de prospectos califican para continuar el proceso", en: "Qualification rate: what percentage of leads qualify to continue the process" },
        { es: "Ratio prospecto-visita: cuántos prospectos se convierten en visitas programadas", en: "Lead-to-visit ratio: how many leads become scheduled visits" },
        { es: "Ratio visita-cierre: cuántas visitas resultan en venta o renta", en: "Visit-to-close ratio: how many visits result in a sale or rental" },
        { es: "Valor promedio de transacción por fuente de lead: qué canal te trae los mejores prospectos", en: "Average transaction value per lead source: which channel brings you the best leads" },
      ],
    },
  ],
  faq: [
    { q: { es: "¿La automatización puede reemplazar a los agentes inmobiliarios?", en: "Can automation replace real estate agents?" }, a: { es: "No. La automatización gestiona la captación, calificación y primer contacto. La negociación, visitas físicas y cierre requieren la relación humana que solo un agente puede proveer. La automatización libera a los agentes para enfocarse en lo que realmente importa.", en: "No. Automation manages acquisition, qualification, and first contact. Negotiation, physical visits, and closing require the human relationship that only an agent can provide. Automation frees agents to focus on what really matters." } },
    { q: { es: "¿Cómo evito que el proceso automatizado se sienta impersonal?", en: "How do I avoid the automated process feeling impersonal?" }, a: { es: "La clave es personalización: usar el nombre del prospecto, mencionar la propiedad específica que consultó, y adaptar los mensajes según su etapa en el proceso. Un mensaje automatizado bien escrito se siente más personal que uno genérico enviado por humano.", en: "The key is personalization: use the lead's name, mention the specific property they inquired about, and adapt messages according to their stage in the process. A well-written automated message feels more personal than a generic one sent by a human." } },
    { q: { es: "¿Qué pasa con los prospectos de otros países o que no hablan español?", en: "What about leads from other countries or who don't speak Spanish?" }, a: { es: "El sistema puede detectar el idioma y responder en consecuencia. Para inmobiliarias en la frontera o que atienden clientes de EE.UU., configuramos flujos bilingües español/inglés automáticos.", en: "The system can detect the language and respond accordingly. For agencies at the border or serving US clients, we configure automatic bilingual Spanish/English flows." } },
  ],
  relatedSlugs: ["whatsapp-ventas", "crm-para-medicos", "sistema-operativo-empresarial"],
};

export default function AutomatizacionInmobiliaria() {
  return <BlogPostTemplate content={content} />;
}
