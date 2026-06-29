import { BlogPostTemplate, BlogContent } from "@/components/templates/BlogPostTemplate";

const content: BlogContent = {
  slug: "google-business-profile",
  categoryEs: "SEO",
  categoryEn: "SEO",
  categoryColor: "#F5C518",
  icon: "🗺️",
  date: "2026-05-20",
  readTimeMin: 9,
  accentHex: "#F5C518",
  titleEs: "Google Business Profile: guía completa para negocios locales 2026",
  titleEn: "Google Business Profile: complete guide for local businesses 2026",
  subtitleEs: "Tu perfil de Google Business es la herramienta más poderosa para atraer clientes locales sin pagar publicidad. Aprende a optimizarlo desde cero.",
  subtitleEn: "Your Google Business profile is the most powerful tool to attract local clients without paying for advertising. Learn how to optimize it from scratch.",
  sections: [
    {
      type: "intro",
      bodyEs: "El 46% de todas las búsquedas en Google tienen intención local. Cuando alguien busca 'restaurante cerca de mí', 'abogado en Tijuana' o 'clínica dental Zona Río', Google muestra primero el pack de 3 negocios locales — antes que cualquier página web. Tu Google Business Profile determina si eres uno de esos 3 o si quedas invisible.",
      bodyEn: "46% of all Google searches have local intent. When someone searches 'restaurant near me', 'lawyer in Tijuana', or 'dental clinic Zona Río', Google shows the 3-pack of local businesses first — before any website. Your Google Business Profile determines if you're one of those 3 or if you stay invisible.",
    },
    {
      type: "heading",
      titleEs: "Por qué Google Business Profile es tu activo digital más importante",
      titleEn: "Why Google Business Profile is your most important digital asset",
    },
    {
      type: "list",
      items: [
        { es: "Es gratuito — no pagas nada por aparecer en Google Maps", en: "It's free — you pay nothing to appear on Google Maps" },
        { es: "Los clientes te llaman directamente desde el resultado sin visitar tu sitio", en: "Clients call you directly from the result without visiting your site" },
        { es: "Muestra tus reseñas, fotos, horarios y ubicación en un solo lugar", en: "Shows your reviews, photos, hours, and location in one place" },
        { es: "Un perfil optimizado genera 7x más visitas que uno sin optimizar", en: "An optimized profile generates 7x more visits than an unoptimized one" },
        { es: "Te posiciona automáticamente para búsquedas 'cerca de mí'", en: "Automatically positions you for 'near me' searches" },
      ],
    },
    {
      type: "heading",
      titleEs: "Los 10 elementos que debes optimizar en tu perfil",
      titleEn: "The 10 elements you must optimize in your profile",
    },
    {
      type: "steps",
      items: [
        { es: "Nombre del negocio: usa tu nombre real sin agregar palabras clave (viola las políticas de Google)", en: "Business name: use your real name without adding keywords (violates Google's policies)" },
        { es: "Categoría principal y categorías secundarias: elige la categoría más específica posible para tu negocio principal", en: "Primary and secondary categories: choose the most specific category possible for your main business" },
        { es: "Descripción del negocio: 750 caracteres que describan qué haces, para quién, qué te diferencia, e incluyan tus palabras clave principales naturalmente", en: "Business description: 750 characters describing what you do, for whom, what differentiates you, and naturally including your main keywords" },
        { es: "Horario completo y actualizado — incluyendo días festivos. El horario incorrecto es la queja #1 de usuarios en reseñas", en: "Complete and updated hours — including holidays. Incorrect hours are the #1 user complaint in reviews" },
        { es: "Número de teléfono y sitio web: deben ser exactamente iguales a los de tu sitio web y otros directorios", en: "Phone number and website: must be exactly the same as on your website and other directories" },
        { es: "Servicios y productos: lista cada servicio individual con descripción y precio si aplica", en: "Services and products: list each individual service with description and price if applicable" },
        { es: "Atributos: selecciona todos los que apliquen (acepta tarjeta, accesible, estacionamiento, etc.)", en: "Attributes: select all that apply (accepts card, accessible, parking, etc.)" },
        { es: "Fotos: mínimo 20 fotos profesionales — exterior, interior, equipo, productos/servicios. Actualiza mensualmente", en: "Photos: minimum 20 professional photos — exterior, interior, team, products/services. Update monthly" },
        { es: "Publicaciones: mínimo 2 publicaciones por semana — ofertas, novedades, consejos de tu industria", en: "Posts: minimum 2 posts per week — offers, news, industry tips" },
        { es: "Preguntas y respuestas: crea tus propias preguntas frecuentes y respóndelas antes de que los usuarios las hagan", en: "Q&A: create your own FAQs and answer them before users ask" },
      ],
    },
    {
      type: "heading",
      titleEs: "Estrategia de reseñas: el factor más importante",
      titleEn: "Review strategy: the most important factor",
    },
    {
      type: "paragraph",
      bodyEs: "Las reseñas son el factor de confianza #1 para los usuarios y uno de los 3 principales factores de posicionamiento en Google Maps (junto con relevancia y distancia). El objetivo no es solo tener muchas reseñas — es tener más que tu competencia y mantener un promedio superior a 4.5.",
      bodyEn: "Reviews are the #1 trust factor for users and one of the 3 main ranking factors on Google Maps (along with relevance and distance). The goal is not just to have many reviews — it's to have more than your competition and maintain an average above 4.5.",
    },
    {
      type: "highlight",
      titleEs: "Sistema para conseguir reseñas consistentemente",
      titleEn: "System for consistently getting reviews",
      items: [
        { es: "Envía un mensaje de WhatsApp a cada cliente satisfecho dentro de las 2 horas post-servicio", en: "Send a WhatsApp message to every satisfied client within 2 hours post-service" },
        { es: "Incluye el link directo a tu perfil de Google para dejar reseña (genera el link desde tu panel de Google Business)", en: "Include the direct link to your Google profile to leave a review (generate the link from your Google Business panel)" },
        { es: "Responde TODAS las reseñas — positivas y negativas — en menos de 24 horas", en: "Respond to ALL reviews — positive and negative — within 24 hours" },
        { es: "Nunca ofrezcas descuentos o regalos a cambio de reseñas (viola las políticas de Google)", en: "Never offer discounts or gifts in exchange for reviews (violates Google's policies)" },
      ],
    },
    {
      type: "cta_inline",
      titleEs: "¿Quieres dominar Google Maps en tu área?",
      titleEn: "Want to dominate Google Maps in your area?",
      bodyEs: "Optimizamos tu Google Business Profile completo y te implementamos un sistema automático de reseñas.",
      bodyEn: "We optimize your complete Google Business Profile and implement an automatic review system for you.",
    },
    {
      type: "heading",
      titleEs: "Cómo aparecer en el pack de 3 de Google Maps",
      titleEn: "How to appear in Google Maps' top 3 pack",
    },
    {
      type: "paragraph",
      bodyEs: "Google determina cuáles 3 negocios mostrar basándose en 3 factores: Relevancia (qué tan bien coincide tu perfil con la búsqueda), Distancia (qué tan cerca estás de quien busca) y Prominencia (qué tan conocido y valorado eres — reseñas, cantidad de links, menciones web). Puedes influir directamente en la relevancia y la prominencia con una estrategia de optimización.",
      bodyEn: "Google determines which 3 businesses to show based on 3 factors: Relevance (how well your profile matches the search), Distance (how close you are to the searcher), and Prominence (how well-known and valued you are — reviews, number of links, web mentions). You can directly influence relevance and prominence with an optimization strategy.",
    },
  ],
  faq: [
    { q: { es: "¿Es gratuito Google Business Profile?", en: "Is Google Business Profile free?" }, a: { es: "Sí, completamente gratuito. Google no cobra por crear o mantener el perfil. La inversión es en tiempo o en contratar a alguien que lo optimice por ti.", en: "Yes, completely free. Google doesn't charge to create or maintain the profile. The investment is in time or in hiring someone to optimize it for you." } },
    { q: { es: "¿Puedo tener múltiples ubicaciones en un solo perfil?", en: "Can I have multiple locations in one profile?" }, a: { es: "No. Cada ubicación física debe tener su propio perfil de Google Business. Si tienes 3 sucursales, necesitas 3 perfiles separados.", en: "No. Each physical location must have its own Google Business profile. If you have 3 branches, you need 3 separate profiles." } },
    { q: { es: "¿Qué hago si alguien deja una reseña falsa o negativa injusta?", en: "What do I do if someone leaves a fake or unfair negative review?" }, a: { es: "Puedes reportarla a Google para revisión si viola sus políticas. Mientras tanto, responde profesionalmente explicando tu versión. Nunca respondas de forma agresiva — los clientes potenciales leen cómo respondes tanto como la reseña misma.", en: "You can report it to Google for review if it violates their policies. In the meantime, respond professionally explaining your side. Never respond aggressively — potential clients read how you respond as much as the review itself." } },
    { q: { es: "¿Con qué frecuencia debo actualizar mi perfil?", en: "How often should I update my profile?" }, a: { es: "Al menos 2 publicaciones por semana, fotos nuevas mensualmente, y revisar que horarios y datos de contacto sean correctos. Google favorece perfiles activos que se actualizan frecuentemente.", en: "At least 2 posts per week, new photos monthly, and verify that hours and contact information are correct. Google favors active profiles that are frequently updated." } },
  ],
  relatedSlugs: ["seo-local-dentistas", "google-ads-vs-seo", "whatsapp-ventas"],
};

export default function GoogleBusinessProfile() {
  return <BlogPostTemplate content={content} />;
}
