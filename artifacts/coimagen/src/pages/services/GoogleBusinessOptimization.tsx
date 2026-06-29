import { ServiceLandingTemplate, ServiceContent } from "@/components/templates/ServiceLandingTemplate";

const content: ServiceContent = {
  slug: "google-business-optimization",
  accentColor: "yellow",
  accentHex: "#F5C518",
  icon: "🗺️",
  seoTitle: {
    es: "Google Business Optimization — Domina Google Maps | Coimagen",
    en: "Google Business Optimization — Dominate Google Maps | Coimagen",
  },
  metaDesc: {
    es: "Optimizamos tu perfil de Google Business para que aparezcas primero en Google Maps y atraigas clientes locales todos los días. Tijuana, México y USA.",
    en: "We optimize your Google Business profile so you appear first on Google Maps and attract local clients every day. Mexico and USA.",
  },
  hero: {
    title: {
      es: "Domina Google Maps y atrae clientes locales todos los días",
      en: "Dominate Google Maps and Attract Local Clients Every Day",
    },
    subtitle: {
      es: "El 46% de todas las búsquedas en Google tienen intención local. Cuando alguien busca tu servicio cerca de ti, necesitas aparecer primero — no tu competencia.",
      en: "46% of all Google searches have local intent. When someone searches for your service nearby, you need to appear first — not your competition.",
    },
    benefit: {
      es: "Un perfil optimizado en Google Business genera hasta 7x más visitas que uno sin optimizar",
      en: "An optimized Google Business profile generates up to 7x more visits than an unoptimized one",
    },
  },
  pain: {
    items: [
      { icon: "🗺️", text: { es: "No apareces en Google Maps cuando buscan tu servicio cerca", en: "You don't appear on Google Maps when people search for your service nearby" } },
      { icon: "⭐", text: { es: "Tienes pocas reseñas y tu competencia tiene más", en: "You have few reviews and your competition has more" } },
      { icon: "📸", text: { es: "Tu perfil de Google Business está incompleto o desactualizado", en: "Your Google Business profile is incomplete or outdated" } },
      { icon: "📞", text: { es: "Los clientes no pueden encontrar tu horario o número de teléfono fácilmente", en: "Clients can't easily find your hours or phone number" } },
      { icon: "❓", text: { es: "No sabes cómo responder reseñas negativas profesionalmente", en: "You don't know how to professionally respond to negative reviews" } },
      { icon: "📊", text: { es: "No tienes datos de cuántas personas ven tu perfil o llaman desde él", en: "You have no data on how many people view your profile or call from it" } },
    ],
  },
  solution: {
    steps: [
      { icon: "🔍", title: { es: "Auditoría del perfil", en: "Profile audit" }, desc: { es: "Analizamos tu perfil actual y el de tu competencia para identificar oportunidades de mejora.", en: "We analyze your current profile and your competition to identify improvement opportunities." } },
      { icon: "✏️", title: { es: "Optimización completa", en: "Complete optimization" }, desc: { es: "Llenamos cada campo del perfil: descripción, categorías, horarios, servicios, atributos y fotos.", en: "We fill every profile field: description, categories, hours, services, attributes, and photos." } },
      { icon: "📸", title: { es: "Fotografía y videos", en: "Photos and videos" }, desc: { es: "Subimos fotos profesionales de tu negocio, equipo y servicios para generar confianza visual.", en: "We upload professional photos of your business, team, and services to build visual trust." } },
      { icon: "⭐", title: { es: "Estrategia de reseñas", en: "Review strategy" }, desc: { es: "Implementamos un sistema para conseguir reseñas auténticas de forma automática y consistente.", en: "We implement a system to get authentic reviews automatically and consistently." } },
      { icon: "📝", title: { es: "Publicaciones regulares", en: "Regular posts" }, desc: { es: "Publicamos actualizaciones, promociones y novedades para mantener tu perfil activo y relevante.", en: "We publish updates, promotions, and news to keep your profile active and relevant." } },
      { icon: "📊", title: { es: "Reporte mensual", en: "Monthly report" }, desc: { es: "Recibes datos mensuales: vistas, llamadas, solicitudes de ruta y acciones desde tu perfil.", en: "You receive monthly data: views, calls, route requests, and actions from your profile." } },
    ],
  },
  benefits: {
    items: [
      { icon: "📍", title: { es: "Visibilidad local", en: "Local visibility" }, desc: { es: "Apareces en el pack de 3 de Google Maps cuando alguien busca tu servicio cerca.", en: "You appear in Google Maps' top 3 pack when someone searches for your service nearby." } },
      { icon: "📞", title: { es: "Más llamadas directas", en: "More direct calls" }, desc: { es: "Los clientes te llaman directo desde Google Maps sin visitar tu sitio web.", en: "Clients call you directly from Google Maps without visiting your website." } },
      { icon: "⭐", title: { es: "Más reseñas positivas", en: "More positive reviews" }, desc: { es: "Un sistema automático consigue reseñas de tus clientes satisfechos de forma constante.", en: "An automated system consistently gets reviews from your satisfied clients." } },
      { icon: "🛣️", title: { es: "Más visitas físicas", en: "More physical visits" }, desc: { es: "Más personas solicitan cómo llegar a tu negocio directamente desde Google Maps.", en: "More people request directions to your business directly from Google Maps." } },
      { icon: "🏆", title: { es: "Autoridad local", en: "Local authority" }, desc: { es: "Un perfil con muchas reseñas positivas es la mejor prueba social para nuevos clientes.", en: "A profile with many positive reviews is the best social proof for new clients." } },
      { icon: "📊", title: { es: "Datos reales", en: "Real data" }, desc: { es: "Ves exactamente cuántas personas ven tu perfil, llaman o solicitan cómo llegar cada mes.", en: "You see exactly how many people view your profile, call, or request directions each month." } },
    ],
  },
  includes: {
    items: [
      { es: "Auditoría completa del perfil actual", en: "Complete audit of current profile" },
      { es: "Optimización de descripción y categorías", en: "Description and category optimization" },
      { es: "Configuración de horarios y servicios", en: "Hours and services configuration" },
      { es: "Subida de fotografías profesionales", en: "Upload of professional photos" },
      { es: "Estrategia de solicitud de reseñas", en: "Review request strategy" },
      { es: "Plantillas de respuesta a reseñas", en: "Review response templates" },
      { es: "Publicaciones mensuales en el perfil", en: "Monthly profile posts" },
      { es: "Integración con WhatsApp Business", en: "WhatsApp Business integration" },
      { es: "Reporte mensual de métricas", en: "Monthly metrics report" },
      { es: "Seguimiento de posición en Maps", en: "Maps position tracking" },
    ],
  },
  caseStudy: {
    slug: "chimichimi",
    nameEs: "Chimichimi — Restaurante",
    nameEn: "Chimichimi — Restaurant",
    summaryEs: "El perfil de Chimichimi estaba incompleto y tenía solo 12 reseñas. Después de la optimización completa, escalaron a 89 reseñas con 4.8 estrellas y aparecen en el top 3 de búsquedas locales.",
    summaryEn: "Chimichimi's profile was incomplete with only 12 reviews. After full optimization, they scaled to 89 reviews with 4.8 stars and appear in the top 3 of local searches.",
    metrics: [
      { value: "12→89", labelEs: "reseñas en Google", labelEn: "Google reviews" },
      { value: "4.8⭐", labelEs: "calificación", labelEn: "star rating" },
      { value: "Top 3", labelEs: "en Google Maps", labelEn: "on Google Maps" },
      { value: "+340%", labelEs: "visitas al perfil", labelEn: "profile views" },
    ],
    accentColor: "#F97316",
  },
  faq: [
    { q: { es: "¿Necesito ya tener una cuenta de Google Business?", en: "Do I need to already have a Google Business account?" }, a: { es: "No es necesario. Si no tienes una, la creamos y verificamos por ti. Si ya tienes una, la optimizamos.", en: "Not necessary. If you don't have one, we create and verify it for you. If you already have one, we optimize it." } },
    { q: { es: "¿Pueden conseguirme reseñas falsas para subir mi calificación?", en: "Can you get me fake reviews to boost my rating?" }, a: { es: "No. Las reseñas falsas violan las políticas de Google y pueden resultar en la eliminación de tu perfil. Nuestra estrategia se basa en conseguir reseñas auténticas de tus clientes reales.", en: "No. Fake reviews violate Google's policies and can result in profile removal. Our strategy is based on getting authentic reviews from your real clients." } },
    { q: { es: "¿Cuánto tiempo tarda en verse el impacto?", en: "How long does it take to see the impact?" }, a: { es: "Los cambios en el perfil se reflejan casi de inmediato. El posicionamiento en Maps mejora progresivamente en 30 a 90 días dependiendo de la competencia.", en: "Profile changes reflect almost immediately. Maps ranking improves progressively over 30 to 90 days depending on competition." } },
    { q: { es: "¿También manejan Google Ads locales?", en: "Do you also manage local Google Ads?" }, a: { es: "Sí, podemos complementar la optimización orgánica de Google Business con campañas de Google Local Ads para resultados inmediatos.", en: "Yes, we can complement organic Google Business optimization with Google Local Ads campaigns for immediate results." } },
    { q: { es: "¿Funciona para cualquier tipo de negocio?", en: "Does it work for any type of business?" }, a: { es: "Sí, especialmente para negocios con ubicación física: clínicas, restaurantes, despachos, estéticas, inmobiliarias, tiendas y cualquier servicio local.", en: "Yes, especially for businesses with a physical location: clinics, restaurants, law offices, beauty salons, real estate agencies, stores, and any local service." } },
  ],
};

export default function GoogleBusinessOptimization() {
  return <ServiceLandingTemplate content={content} />;
}
