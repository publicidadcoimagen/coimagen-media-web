import { ServiceLandingTemplate, ServiceContent } from "@/components/templates/ServiceLandingTemplate";

const content: ServiceContent = {
  slug: "seo-growth",
  heroImage: "/images/landing/seo-growth.png",
  accentColor: "lime",
  accentHex: "#A8FF3E",
  icon: "🚀",
  seoTitle: {
    es: "SEO Growth — Posicionamiento en Google | Coimagen Media Agency",
    en: "SEO Growth — Rank Higher on Google | Coimagen Media Agency",
  },
  metaDesc: {
    es: "Sistema SEO completo para posicionar tu negocio en los primeros resultados de Google. Más visitas orgánicas, más clientes, sin pagar publicidad.",
    en: "Complete SEO system to rank your business at the top of Google. More organic traffic, more clients, without paying for ads.",
  },
  hero: {
    title: {
      es: "Aparece en Google antes que tu competencia",
      en: "Rank Higher on Google Before Your Competitors Do",
    },
    subtitle: {
      es: "El 75% de los usuarios nunca pasa de la primera página de Google. Te posicionamos donde tus clientes están buscando — sin depender de anuncios pagados.",
      en: "75% of users never go past the first page of Google. We rank you where your clients are searching — without depending on paid ads.",
    },
    benefit: {
      es: "El SEO genera clientes 24/7 sin costo por clic — es la inversión más rentable del marketing digital",
      en: "SEO generates clients 24/7 with no cost per click — it's the most profitable investment in digital marketing",
    },
  },
  pain: {
    items: [
      { icon: "😞", text: { es: "Tu negocio no aparece cuando buscan tus servicios en Google", en: "Your business doesn't appear when people search for your services on Google" } },
      { icon: "💸", text: { es: "Gastas en Google Ads pero paras de pagar y desapareces", en: "You spend on Google Ads but stop paying and disappear" } },
      { icon: "📉", text: { es: "Tu competencia aparece antes que tú aunque seas mejor", en: "Your competitors rank above you even though you're better" } },
      { icon: "🤷", text: { es: "No sabes qué palabras están buscando tus clientes", en: "You don't know what keywords your clients are searching for" } },
      { icon: "🔗", text: { es: "Tu sitio tiene errores técnicos que Google penaliza", en: "Your site has technical errors that Google penalizes" } },
      { icon: "📊", text: { es: "No tienes datos reales sobre el tráfico de tu sitio", en: "You have no real data about your website traffic" } },
    ],
  },
  solution: {
    steps: [
      { icon: "🔬", title: { es: "Auditoría SEO", en: "SEO audit" }, desc: { es: "Analizamos tu sitio completo: errores técnicos, palabras clave, competencia y oportunidades de posicionamiento.", en: "We analyze your entire site: technical errors, keywords, competition, and ranking opportunities." } },
      { icon: "🎯", title: { es: "Estrategia de keywords", en: "Keyword strategy" }, desc: { es: "Identificamos las palabras que usa tu cliente ideal y construimos una estrategia para dominarlas.", en: "We identify the keywords your ideal client uses and build a strategy to dominate them." } },
      { icon: "📝", title: { es: "Contenido SEO", en: "SEO content" }, desc: { es: "Creamos contenido optimizado que posiciona tu sitio y educa a tus prospectos al mismo tiempo.", en: "We create optimized content that ranks your site and educates your prospects at the same time." } },
      { icon: "⚙️", title: { es: "SEO técnico", en: "Technical SEO" }, desc: { es: "Corregimos errores, optimizamos velocidad, estructura y código para que Google te indexe correctamente.", en: "We fix errors, optimize speed, structure, and code so Google indexes you correctly." } },
      { icon: "🔗", title: { es: "Link building", en: "Link building" }, desc: { es: "Construimos autoridad con enlaces de calidad que le dicen a Google que eres la referencia en tu industria.", en: "We build authority with quality links that tell Google you're the reference in your industry." } },
      { icon: "📊", title: { es: "Reportes mensuales", en: "Monthly reports" }, desc: { es: "Te mostramos exactamente cómo sube tu posicionamiento mes a mes con datos reales.", en: "We show you exactly how your ranking improves month by month with real data." } },
    ],
  },
  benefits: {
    items: [
      { icon: "📈", title: { es: "Tráfico orgánico", en: "Organic traffic" }, desc: { es: "Visitas sin pagar por clic. El SEO funciona 24/7 y se acumula con el tiempo.", en: "Visits without paying per click. SEO works 24/7 and compounds over time." } },
      { icon: "💰", title: { es: "Mejor ROI", en: "Better ROI" }, desc: { es: "El SEO tiene el mejor retorno de inversión a largo plazo de todos los canales de marketing digital.", en: "SEO has the best long-term ROI of all digital marketing channels." } },
      { icon: "🏆", title: { es: "Autoridad de marca", en: "Brand authority" }, desc: { es: "Aparecer primero en Google genera confianza automática en tus prospectos.", en: "Ranking first on Google automatically builds trust with your prospects." } },
      { icon: "🎯", title: { es: "Clientes calificados", en: "Qualified clients" }, desc: { es: "El tráfico orgánico son personas que YA están buscando lo que tú vendes.", en: "Organic traffic is people who are ALREADY searching for what you sell." } },
      { icon: "📊", title: { es: "Datos y claridad", en: "Data and clarity" }, desc: { es: "Sabes exactamente qué palabras te generan clientes y cuánto vale cada visita.", en: "You know exactly which keywords generate clients and how much each visit is worth." } },
      { icon: "⏳", title: { es: "Resultados duraderos", en: "Lasting results" }, desc: { es: "A diferencia de los anuncios, el SEO sigue generando resultados aunque dejes de invertir.", en: "Unlike ads, SEO keeps generating results even if you stop investing." } },
    ],
  },
  includes: {
    items: [
      { es: "Auditoría SEO completa del sitio", en: "Complete site SEO audit" },
      { es: "Investigación de palabras clave", en: "Keyword research" },
      { es: "Optimización de meta tags y contenido", en: "Meta tags and content optimization" },
      { es: "SEO técnico (velocidad, estructura, indexación)", en: "Technical SEO (speed, structure, indexing)" },
      { es: "Google Search Console configurado", en: "Google Search Console configured" },
      { es: "Google Analytics 4", en: "Google Analytics 4" },
      { es: "Sitemap y robots.txt optimizados", en: "Optimized sitemap and robots.txt" },
      { es: "Estrategia de contenido SEO", en: "SEO content strategy" },
      { es: "Reporte mensual de posicionamiento", en: "Monthly ranking report" },
      { es: "Schema.org para rich snippets", en: "Schema.org for rich snippets" },
    ],
  },
  caseStudy: {
    slug: "chimichimi",
    nameEs: "Chimichimi — Restaurante en Tijuana",
    nameEn: "Chimichimi — Restaurant in Tijuana",
    summaryEs: "Chimichimi no aparecía en Google. Implementamos una estrategia SEO local completa y en 90 días triplicaron su tráfico orgánico y reseñas en Google.",
    summaryEn: "Chimichimi wasn't appearing on Google. We implemented a complete local SEO strategy and in 90 days they tripled their organic traffic and Google reviews.",
    metrics: [
      { value: "+320%", labelEs: "visitas orgánicas", labelEn: "organic visits" },
      { value: "12→89", labelEs: "reseñas en Google", labelEn: "Google reviews" },
      { value: "4.8⭐", labelEs: "calificación promedio", labelEn: "average rating" },
      { value: "Top 3", labelEs: "en búsquedas locales", labelEn: "in local searches" },
    ],
    accentColor: "#F97316",
  },
  faq: [
    { q: { es: "¿Cuánto tiempo tarda en verse resultados con SEO?", en: "How long does it take to see SEO results?" }, a: { es: "El SEO es una inversión a mediano-largo plazo. Los primeros resultados se ven entre 60 y 90 días, y el crecimiento se acelera con el tiempo.", en: "SEO is a medium to long-term investment. First results appear between 60 and 90 days, and growth accelerates over time." } },
    { q: { es: "¿Garantizan el primer lugar en Google?", en: "Do you guarantee first place on Google?" }, a: { es: "Nadie puede garantizar el primer lugar porque Google cambia su algoritmo constantemente. Lo que garantizamos es un proceso profesional y mejoras medibles en tu posicionamiento.", en: "Nobody can guarantee first place because Google constantly changes its algorithm. What we guarantee is a professional process and measurable improvements in your ranking." } },
    { q: { es: "¿El SEO reemplaza a Google Ads?", en: "Does SEO replace Google Ads?" }, a: { es: "Son complementarios. Los Ads dan resultados inmediatos pero cuestan por clic. El SEO es más lento pero acumula valor con el tiempo. La combinación ideal depende de tu presupuesto y objetivos.", en: "They're complementary. Ads give immediate results but cost per click. SEO is slower but accumulates value over time. The ideal combination depends on your budget and goals." } },
    { q: { es: "¿Trabajan con cualquier industria?", en: "Do you work with any industry?" }, a: { es: "Sí. Tenemos experiencia en salud, legal, restaurantes, inmobiliarias, servicios locales y más. El SEO local es especialmente poderoso para negocios físicos.", en: "Yes. We have experience in health, legal, restaurants, real estate, local services, and more. Local SEO is especially powerful for physical businesses." } },
    { q: { es: "¿Qué pasa si ya tengo un sitio web?", en: "What if I already have a website?" }, a: { es: "Perfecto. Auditamos tu sitio actual y lo optimizamos. No es necesario reconstruirlo para implementar SEO.", en: "Perfect. We audit your current site and optimize it. You don't need to rebuild it to implement SEO." } },
  ],
};

export default function SEOGrowth() {
  return <ServiceLandingTemplate content={content} />;
}
