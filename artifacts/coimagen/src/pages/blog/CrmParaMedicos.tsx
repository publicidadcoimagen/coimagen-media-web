import { BlogPostTemplate, BlogContent } from "@/components/templates/BlogPostTemplate";

const content: BlogContent = {
  slug: "crm-para-medicos",
  categoryEs: "Salud",
  categoryEn: "Health",
  categoryColor: "#3B82F6",
  icon: "🏥",
  date: "2026-06-10",
  readTimeMin: 7,
  accentHex: "#3B82F6",
  titleEs: "CRM para médicos: cómo organizar pacientes y dar seguimiento automático",
  titleEn: "CRM for doctors: how to organize patients and automate follow-up",
  subtitleEs: "Descubre cómo un CRM especializado puede ayudarte a no perder ningún paciente, automatizar recordatorios y hacer crecer tu consulta sin contratar más personal.",
  subtitleEn: "Discover how a specialized CRM can help you never lose a patient, automate reminders, and grow your practice without hiring more staff.",
  sections: [
    {
      type: "intro",
      bodyEs: "El 40% de los médicos en México admite perder pacientes por falta de seguimiento. No es negligencia — es un problema de sistema. Cuando tu agenda, WhatsApp, llamadas y correos están desconectados, es imposible dar atención de calidad a escala. Un CRM médico resuelve exactamente esto.",
      bodyEn: "40% of doctors in Mexico admit to losing patients due to lack of follow-up. It's not negligence — it's a systems problem. When your schedule, WhatsApp, calls, and emails are disconnected, it's impossible to provide quality care at scale. A medical CRM solves exactly this.",
    },
    {
      type: "heading",
      titleEs: "¿Qué es un CRM médico y por qué lo necesitas?",
      titleEn: "What is a medical CRM and why do you need it?",
    },
    {
      type: "paragraph",
      bodyEs: "Un CRM (Customer Relationship Management) médico es un sistema centralizado que organiza toda la información de tus pacientes: historial de visitas, tratamientos, recordatorios, comunicaciones y seguimientos. A diferencia de un expediente clínico tradicional, un CRM médico está diseñado para la gestión comercial y de relaciones — ayudándote a retener pacientes, atraer referidos y automatizar comunicaciones.",
      bodyEn: "A medical CRM is a centralized system that organizes all your patient information: visit history, treatments, reminders, communications, and follow-ups. Unlike a traditional medical record, a medical CRM is designed for relationship and business management — helping you retain patients, attract referrals, and automate communications.",
    },
    {
      type: "heading",
      titleEs: "Los 5 problemas que resuelve un CRM médico",
      titleEn: "The 5 problems a medical CRM solves",
    },
    {
      type: "list",
      items: [
        { es: "Pacientes que no regresan a su cita de seguimiento porque nadie los contactó", en: "Patients who don't return for their follow-up because nobody contacted them" },
        { es: "Prospectos que preguntan por WhatsApp y nunca reciben respuesta a tiempo", en: "Leads who ask via WhatsApp and never get a timely response" },
        { es: "Personal que olvida enviar recordatorios de cita, generando no-shows costosos", en: "Staff who forget to send appointment reminders, generating costly no-shows" },
        { es: "Sin visibilidad de cuántos pacientes nuevos entran vs. cuántos se pierden", en: "No visibility into how many new patients come in vs. how many are lost" },
        { es: "Información dispersa en cuadernos, hojas de cálculo y celulares del personal", en: "Information scattered across notebooks, spreadsheets, and staff phones" },
      ],
    },
    {
      type: "heading",
      titleEs: "Funciones clave de un CRM para consultorios médicos",
      titleEn: "Key features of a CRM for medical practices",
    },
    {
      type: "highlight",
      titleEs: "Automatización de recordatorios",
      titleEn: "Reminder automation",
      bodyEs: "El CRM envía automáticamente recordatorios de cita por WhatsApp, SMS o email 24 horas antes. Esto reduce los no-shows hasta un 60% según estudios de la industria médica.",
      bodyEn: "The CRM automatically sends appointment reminders via WhatsApp, SMS, or email 24 hours in advance. This reduces no-shows by up to 60% according to medical industry studies.",
    },
    {
      type: "paragraph",
      bodyEs: "Más allá de los recordatorios, un CRM médico bien implementado te permite segmentar pacientes por tipo de tratamiento, fecha de última visita o condición — y enviar comunicaciones personalizadas a cada grupo. Por ejemplo: pacientes que no han regresado en más de 6 meses pueden recibir un mensaje automatizado invitándolos a una revisión.",
      bodyEn: "Beyond reminders, a well-implemented medical CRM lets you segment patients by treatment type, last visit date, or condition — and send personalized communications to each group. For example: patients who haven't returned in more than 6 months can receive an automated message inviting them to a check-up.",
    },
    {
      type: "heading",
      titleEs: "Cómo implementar un CRM en tu consultorio: paso a paso",
      titleEn: "How to implement a CRM in your practice: step by step",
    },
    {
      type: "steps",
      items: [
        { es: "Mapea todos tus puntos de contacto actuales: WhatsApp, teléfono, correo, redes sociales. ¿Por dónde llegan los pacientes nuevos?", en: "Map all your current contact points: WhatsApp, phone, email, social media. Where do new patients come from?" },
        { es: "Centraliza tu base de pacientes: migra tus contactos existentes al nuevo sistema con nombre, teléfono, historial y última visita.", en: "Centralize your patient database: migrate existing contacts to the new system with name, phone, history, and last visit." },
        { es: "Configura recordatorios automáticos para citas, seguimientos post-tratamiento y reactivación de pacientes inactivos.", en: "Set up automatic reminders for appointments, post-treatment follow-ups, and reactivation of inactive patients." },
        { es: "Integra con tu canal de captación principal (WhatsApp Business API o formulario del sitio web) para que cada nuevo prospecto entre automáticamente al CRM.", en: "Integrate with your main acquisition channel (WhatsApp Business API or website form) so every new lead automatically enters the CRM." },
        { es: "Mide mensualmente: cuántos pacientes nuevos captaste, cuántos regresaron y cuántos se perdieron. Usa estos datos para mejorar.", en: "Measure monthly: how many new patients you captured, how many returned, and how many were lost. Use this data to improve." },
      ],
    },
    {
      type: "highlight",
      titleEs: "Resultado típico en los primeros 90 días",
      titleEn: "Typical result in the first 90 days",
      items: [
        { es: "Reducción del 50-60% en citas no asistidas (no-shows)", en: "50-60% reduction in no-shows" },
        { es: "Aumento del 30-40% en reactivación de pacientes inactivos", en: "30-40% increase in inactive patient reactivation" },
        { es: "Ahorro de 2-3 horas semanales en tareas administrativas del personal", en: "2-3 hours per week saved on administrative tasks" },
        { es: "Visibilidad completa del embudo de captación y retención", en: "Complete visibility into acquisition and retention funnel" },
      ],
    },
    {
      type: "cta_inline",
      titleEs: "¿Quieres un CRM diseñado para tu consultorio?",
      titleEn: "Want a CRM designed for your practice?",
      bodyEs: "En Coimagen implementamos sistemas operativos digitales para médicos. Diagnóstico gratuito en 30 minutos.",
      bodyEn: "At Coimagen we implement digital operating systems for doctors. Free diagnosis in 30 minutes.",
    },
    {
      type: "heading",
      titleEs: "CRM vs. expediente electrónico: ¿cuál es la diferencia?",
      titleEn: "CRM vs. electronic medical record: what's the difference?",
    },
    {
      type: "paragraph",
      bodyEs: "El expediente electrónico (EMR) almacena información clínica: diagnósticos, recetas, notas médicas. El CRM gestiona la relación: recordatorios, seguimiento, captación de nuevos pacientes, comunicaciones. En una consulta moderna, necesitas ambos — o un sistema que los integre. Coimagen OS integra la gestión de pacientes con automatización y agentes IA para que tu consultorio funcione como una empresa de primer nivel.",
      bodyEn: "The electronic medical record (EMR) stores clinical information: diagnoses, prescriptions, medical notes. The CRM manages the relationship: reminders, follow-up, new patient acquisition, communications. In a modern practice, you need both — or a system that integrates them. Coimagen OS integrates patient management with automation and AI agents so your practice operates like a top-tier business.",
    },
  ],
  faq: [
    { q: { es: "¿Un CRM médico es seguro para los datos de mis pacientes?", en: "Is a medical CRM safe for my patient data?" }, a: { es: "Sí. Los CRM empresariales utilizan encriptación de datos, acceso por roles y backups automáticos. La información de contacto y seguimiento no contiene datos clínicos sensibles, por lo que su manejo es similar al de cualquier base de datos comercial.", en: "Yes. Enterprise CRMs use data encryption, role-based access, and automatic backups. Contact and follow-up information doesn't contain sensitive clinical data, so its handling is similar to any commercial database." } },
    { q: { es: "¿Cuánto tiempo tarda en implementarse?", en: "How long does implementation take?" }, a: { es: "Un CRM básico para consultorio médico puede estar operativo en 1-2 semanas. La migración de datos y la capacitación del personal son las partes que más tiempo toman.", en: "A basic CRM for a medical practice can be operational in 1-2 weeks. Data migration and staff training are the parts that take the most time." } },
    { q: { es: "¿Puede un CRM integrarse con WhatsApp?", en: "Can a CRM integrate with WhatsApp?" }, a: { es: "Sí. Mediante WhatsApp Business API, el CRM puede enviar y recibir mensajes automáticamente — recordatorios, confirmaciones de cita, respuestas a preguntas frecuentes — sin que el personal tenga que hacerlo manualmente.", en: "Yes. Through WhatsApp Business API, the CRM can send and receive messages automatically — reminders, appointment confirmations, answers to FAQs — without staff having to do it manually." } },
    { q: { es: "¿Necesito un equipo de TI para administrarlo?", en: "Do I need an IT team to manage it?" }, a: { es: "No. Los sistemas que implementamos están diseñados para que el personal médico y administrativo pueda usarlos sin conocimientos técnicos. Incluimos capacitación completa.", en: "No. The systems we implement are designed so medical and administrative staff can use them without technical knowledge. We include complete training." } },
  ],
  relatedSlugs: ["automatizacion-abogados", "ia-pequenas-empresas", "sistema-operativo-empresarial"],
};

export default function CrmParaMedicos() {
  return <BlogPostTemplate content={content} />;
}
