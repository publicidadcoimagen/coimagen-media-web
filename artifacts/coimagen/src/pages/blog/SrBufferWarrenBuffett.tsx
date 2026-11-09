// BORRADOR PARA REVISIÓN — NO PUBLICAR.
// Artículo bilingüe ES/EN, patrón BlogContent de ComercioAgenticoNegocios.
// Hechos verificados en ~/workspace/creativos/work-mkt-buffer/FACTS-BUFFER.md
// (cartas de Berkshire Hathaway y Fortune 2015): 5 latas al día (no dos),
// $1,300 M invertidos en 1988, 400 millones de acciones, cero ventas,
// ~$848 M/año en dividendos (2026). Sin imitar cara ni voz de Buffett,
// sin foto real suya. Dos imágenes distintas, sin videos.
// NOTA: el CTA de suscripción a Marketing con Historia va como bloque
// "highlight" con texto, NO como "cta_inline", porque cta_inline del
// template enlaza por defecto a WhatsApp ("Habla con Camila AI").
// No se inventaron URLs de canales: el highlight nombra los canales sin enlace.
import { BlogPostTemplate, BlogContent } from "@/components/templates/BlogPostTemplate";

const content: BlogContent = {
  slug: "sr-buffer-warren-buffett",
  categoryEs: "Historias de negocios",
  categoryEn: "Business stories",
  categoryColor: "#F2B42D",
  icon: "📈",
  date: "2026-11-17",
  readTimeMin: 8,
  accentHex: "#F2B42D",
  titleEs: "El Sr. Buffer: 5 Coca-Colas al día y una inversión que nunca vendió",
  titleEn: "Mr. Buffer: 5 Cokes a day and an investment he never sold",
  subtitleEs: "Warren Buffett desayuna en McDonald's, toma cinco Coca-Colas al día y en 1988 compró acciones de Coca-Cola por $1,300 millones… y no ha vendido ni una sola. La historia de la paciencia como estrategia de inversión.",
  subtitleEn: "Warren Buffett eats breakfast at McDonald's, drinks five Cokes a day, and in 1988 bought Coca-Cola shares for $1.3 billion… and has not sold a single one. The story of patience as an investment strategy.",
  sections: [
    {
      type: "intro",
      bodyEs: "Hay un hombre que desayuna en McDonald's, decide qué comer según las monedas que trae en el bolsillo y toma cinco latas de Coca-Cola al día. Ese hombre es Warren Buffett, uno de los inversionistas más ricos del mundo. Su historia no es de suerte: es de paciencia, de comprar bien y de no vender nunca.",
      bodyEn: "There is a man who eats breakfast at McDonald's, decides what to eat based on the coins in his pocket, and drinks five cans of Coca-Cola a day. That man is Warren Buffett, one of the richest investors in the world. His story is not about luck: it is about patience, buying well, and never selling.",
    },
    {
      type: "heading",
      titleEs: "El niño que vendía Coca-Colas",
      titleEn: "The boy who sold Cokes",
    },
    {
      type: "paragraph",
      bodyEs: "A los 6 años, en 1936, Warren vendía Coca-Colas a 6 por 25 centavos. A los 11 años compró sus primeras acciones. No era un genio con una fórmula secreta: era un niño que entendía algo simple, que otros no veían. Años después diría que la mejor inversión es la que entiendes tan bien que no necesitas venderla nunca.",
      bodyEn: "At 6 years old, in 1936, Warren sold Coca-Colas at 6 for 25 cents. At 11, he bought his first shares. He was not a genius with a secret formula: he was a boy who understood something simple that others did not see. Years later he would say that the best investment is the one you understand so well that you never need to sell it.",
    },
    {
      type: "image",
      image: "/images/blog/sr-buffer-1.webp",
      altEs: "Una lata roja de refresco junto a una gráfica dorada en ascenso y monedas",
      altEn: "A red soda can beside a rising golden chart and coins",
    },
    {
      type: "heading",
      titleEs: "Las 5 latas al día",
      titleEn: "Five cans a day",
    },
    {
      type: "paragraph",
      bodyEs: "Buffett toma alrededor de cinco latas de Coca-Cola o Cherry Coke al día. Él mismo bromeó diciendo que es «una cuarta parte Coca-Cola». Y aquí viene el detalle que pocos conocen: durante casi 50 años fue de Pepsi. Fue hasta 1985-86, cuando probó la Cherry Coke, que cambió de bando. No fue un capricho: fue un cliente que se convirtió en fan, y un fan que se convirtió en dueño.",
      bodyEn: "Buffett drinks around five cans of Coca-Cola or Cherry Coke a day. He himself joked that he is “one quarter Coca-Cola.” And here is the detail few people know: for almost 50 years he was a Pepsi man. It was not until 1985-86, when he tried Cherry Coke, that he switched sides. It was not a whim: he was a customer who became a fan, and a fan who became an owner.",
    },
    {
      type: "heading",
      titleEs: "La compra de 1988",
      titleEn: "The 1988 purchase",
    },
    {
      type: "paragraph",
      bodyEs: "Tras el crash bursátil de 1987, Berkshire Hathaway empezó a comprar acciones de Coca-Cola en 1988. El costo total fue de alrededor de $1,300 millones, por 400 millones de acciones: cerca del 9.3% de la empresa. Y desde entonces, Buffett no ha vendido ni una sola. En su carta a los accionistas de 1988 lo dejó por escrito: «nuestro periodo favorito para mantener una inversión es para siempre».",
      bodyEn: "After the 1987 stock market crash, Berkshire Hathaway began buying Coca-Cola shares in 1988. The total cost was around $1.3 billion, for 400 million shares: about 9.3% of the company. And since then, Buffett has not sold a single one. In his 1988 shareholder letter he wrote it down: “our favorite holding period is forever.”",
    },
    {
      type: "list",
      items: [
        { es: "400 millones de acciones de Coca-Cola, cerca del 9.3% de la empresa", en: "400 million Coca-Cola shares, about 9.3% of the company" },
        { es: "Costo de la inversión en 1988: alrededor de $1,300 millones", en: "Cost of the investment in 1988: around $1.3 billion" },
        { es: "Dividendos: $75 millones en 1994, $704 millones en 2022 y alrededor de $848 millones al año en 2026 ($2.12 por acción)", en: "Dividends: $75 million in 1994, $704 million in 2022, and around $848 million a year in 2026 ($2.12 per share)" },
        { es: "Valor de la posición: más de $34,000 millones (octubre de 2026)", en: "Value of the position: over $34 billion (October 2026)" },
        { es: "Berkshire compuso 19.7% anual entre 1965 y 2025, frente al 10.5% del S&P 500", en: "Berkshire compounded at 19.7% per year between 1965 and 2025, versus 10.5% for the S&P 500" },
      ],
    },
    {
      type: "image",
      image: "/images/blog/sr-buffer-2.webp",
      altEs: "Un contador con una flecha en ascenso y monedas cayendo sobre una planta que crece",
      altEn: "A counter with a rising arrow and coins falling onto a growing plant",
    },
    {
      type: "heading",
      titleEs: "La lección: paciencia, no suerte",
      titleEn: "The lesson: patience, not luck",
    },
    {
      type: "paragraph",
      bodyEs: "La historia del Sr. Buffer no es la Coca-Cola. Es comprar algo que entiendes, a buen precio, y dejar que el tiempo trabaje. El interés compuesto hizo el resto: los dividendos crecieron año tras año y el valor de la posición se multiplicó sin que Buffett tuviera que vender nada. Buffett se retiró como CEO de Berkshire el 31 de diciembre de 2025 y lo sucedió Greg Abel, pero la lección quedó: la paciencia también es una estrategia.",
      bodyEn: "The story of Mr. Buffer is not about Coca-Cola. It is about buying something you understand, at a good price, and letting time do the work. Compound interest did the rest: dividends grew year after year and the value of the position multiplied without Buffett having to sell anything. Buffett retired as CEO of Berkshire on December 31, 2025, and Greg Abel succeeded him, but the lesson stands: patience is also a strategy.",
    },
    {
      type: "highlight",
      titleEs: "El error que más cuesta",
      titleEn: "The most costly mistake",
      bodyEs: "Vender por miedo o por moda. Desde 1988, Buffett no ha vendido ni una sola acción de Coca-Cola. La mayoría de los inversionistas venden demasiado pronto: compran bien y venden mal. La paciencia de no vender es lo que convierte una buena compra en una fortuna.",
      bodyEn: "Selling out of fear or fashion. Since 1988, Buffett has not sold a single Coca-Cola share. Most investors sell too soon: they buy well and sell badly. The patience of not selling is what turns a good purchase into a fortune.",
    },
    {
      type: "heading",
      titleEs: "Qué puedes aplicar hoy",
      titleEn: "What you can apply today",
    },
    {
      type: "list",
      items: [
        { es: "Compra lo que entiendes: si no puedes explicar el negocio en una frase, no lo compres", en: "Buy what you understand: if you cannot explain the business in one sentence, do not buy it" },
        { es: "Piensa en décadas, no en días: el plazo favorito de Buffett es para siempre", en: "Think in decades, not days: Buffett's favorite holding period is forever" },
        { es: "No vendas por miedo ni por moda: una buena compra no se arruina sola", en: "Do not sell out of fear or fashion: a good purchase does not ruin itself" },
        { es: "Deja que los dividendos y el tiempo trabajen: el interés compuesto necesita años, no semanas", en: "Let dividends and time work: compound interest needs years, not weeks" },
        { es: "La paciencia también es una estrategia: a veces la mejor decisión es no hacer nada", en: "Patience is also a strategy: sometimes the best decision is to do nothing" },
      ],
    },
    {
      type: "highlight",
      titleEs: "Sigue las historias en Marketing con Historia",
      titleEn: "Follow the stories on Marketing con Historia",
      bodyEs: "Cada semana contamos una historia real de negocios en Marketing con Historia: emprendedores, inversionistas y empresas que crecieron con paciencia y estrategia. Suscríbete al canal de YouTube de Marketing con Historia y al canal de Coimagen Media Group para no perderte la siguiente historia.",
      bodyEn: "Every week we tell a real business story on Marketing con Historia: entrepreneurs, investors, and companies that grew with patience and strategy. Subscribe to the Marketing con Historia YouTube channel and the Coimagen Media Group channel so you do not miss the next story.",
    },
  ],
  faq: [
    {
      q: { es: "¿Buffett toma de verdad 5 Coca-Colas al día?", en: "Does Buffett really drink 5 Cokes a day?" },
      a: { es: "Sí. Buffett toma alrededor de cinco latas de Coca-Cola o Cherry Coke al día, y él mismo bromeó diciendo que es «una cuarta parte Coca-Cola».", en: "Yes. Buffett drinks around five cans of Coca-Cola or Cherry Coke a day, and he himself joked that he is “one quarter Coca-Cola.”" },
    },
    {
      q: { es: "¿Cuánto ganó Berkshire con Coca-Cola?", en: "How much did Berkshire make on Coca-Cola?" },
      a: { es: "Berkshire invirtió alrededor de $1,300 millones en 1988 por 400 millones de acciones. En octubre de 2026 la posición valía más de $34,000 millones, y los dividendos rondan los $848 millones al año.", en: "Berkshire invested around $1.3 billion in 1988 for 400 million shares. In October 2026 the position was worth over $34 billion, and dividends run around $848 million a year." },
    },
    {
      q: { es: "¿Buffett sigue al frente de Berkshire?", en: "Is Buffett still leading Berkshire?" },
      a: { es: "No. Buffett se retiró como CEO el 31 de diciembre de 2025 y lo sucedió Greg Abel.", en: "No. Buffett retired as CEO on December 31, 2025, and Greg Abel succeeded him." },
    },
  ],
  relatedSlugs: ["comercio-agentico-negocios", "agentes-ia-empresas"],
};

export default function SrBufferWarrenBuffett() {
  return <BlogPostTemplate content={content} />;
}
