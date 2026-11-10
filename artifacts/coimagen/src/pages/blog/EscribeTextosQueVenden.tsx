// BORRADOR PARA REVISIÓN — NO PUBLICAR.
// Artículo solo en español, patrón BlogContent de ComercioAgenticoNegocios.
// Tema del episodio de Spotify EP-04 (estreno 6-nov-2026): "Escribe textos que
// venden: copy y llamados a la acción" (Copy & CTA Kit).
// Fuentes: transcripción del episodio (~/workspace/podcasts/copy-cta-kit/) y
// página verificada del producto (https://coimagen.gumroad.com/l/copy-cta-kit,
// precio $11 USD verificado 9-nov-2026). Nada inventado: las 8 fórmulas, las
// 5 reglas del CTA, los 6 prompts de IA y los 3 errores son del episodio y de
// la página del producto. La fuente NUNCA se menciona en el artículo público.
// NOTA DE IDIOMA: el tipo BlogContent exige los campos En y el template solo
// renderiza una sección si existen ambos idiomas; los campos En se rellenaron
// con el mismo texto en español. NO se escribió versión en inglés, por regla
// de Camila (blog de Coimagen solo en español).
// CTA como bloque "highlight" con texto, NO como "cta_inline": cta_inline
// enlaza por defecto a WhatsApp y este artículo no lleva enlace de WhatsApp.
// El enlace del episodio en Spotify queda PENDIENTE (la URL real no está en
// ninguna fuente verificada; ver seo.md).
import { BlogPostTemplate, BlogContent } from "@/components/templates/BlogPostTemplate";

const content: BlogContent = {
  slug: "escribe-textos-que-venden",
  categoryEs: "IA",
  categoryEn: "AI",
  categoryColor: "#00CFFF",
  icon: "🤖",
  date: "2026-11-24",
  readTimeMin: 8,
  accentHex: "#00CFFF",
  titleEs: "Escribe textos que venden: copy y llamados a la acción",
  titleEn: "Escribe textos que venden: copy y llamados a la acción",
  subtitleEs: "Tu texto puede ser bueno y aun así no vender nada: si no tiene estructura y no cierra con una sola acción clara, el lector se va. Estas son las fórmulas y las reglas del llamado a la acción que convierten la atención en acción.",
  subtitleEn: "Tu texto puede ser bueno y aun así no vender nada: si no tiene estructura y no cierra con una sola acción clara, el lector se va. Estas son las fórmulas y las reglas del llamado a la acción que convierten la atención en acción.",
  sections: [
    {
      type: "intro",
      bodyEs: "Alguien se sienta frente a la computadora, teclea durante una hora un párrafo inmenso, volcando ahí toda su pasión, sus ideas y sus frustraciones. Llega al final, respira hondo y escribe: si a alguien le interesa, que me escriba. Le da a publicar y llega el silencio. Es la sensación de hablarle a la pared, y la causa casi nunca es falta de creatividad: es falta de estructura. Escribir para vender es un sistema, no un don. Este tema lo conversamos en el episodio del pódcast de Coimagen Media «Escribe textos que venden: copy y llamados a la acción», estrenado el viernes 6 de noviembre de 2026 en Spotify, y aquí va ampliado, con las fórmulas, las reglas del cierre y los errores que hay que evitar.",
      bodyEn: "Alguien se sienta frente a la computadora, teclea durante una hora un párrafo inmenso, volcando ahí toda su pasión, sus ideas y sus frustraciones. Llega al final, respira hondo y escribe: si a alguien le interesa, que me escriba. Le da a publicar y llega el silencio. Es la sensación de hablarle a la pared, y la causa casi nunca es falta de creatividad: es falta de estructura. Escribir para vender es un sistema, no un don. Este tema lo conversamos en el episodio del pódcast de Coimagen Media «Escribe textos que venden: copy y llamados a la acción», estrenado el viernes 6 de noviembre de 2026 en Spotify, y aquí va ampliado, con las fórmulas, las reglas del cierre y los errores que hay que evitar.",
    },
    {
      type: "heading",
      titleEs: "Por qué fracasan la mayoría de los textos",
      titleEn: "Por qué fracasan la mayoría de los textos",
    },
    {
      type: "paragraph",
      bodyEs: "Los textos fracasan masivamente por dos razones extremadamente mundanas. La primera es la ausencia total de jerarquía visual y argumental: párrafos kilométricos de ideas sueltas que agotan cognitivamente a cualquier lector antes de llegar a la tercera línea. El cerebro dice «no puedo con esto» y se va. La segunda es la parálisis al final del texto: la falta de una indicación clara de qué hacer a continuación. Si falta esa llamada a la acción, el texto queda muerto.",
      bodyEn: "Los textos fracasan masivamente por dos razones extremadamente mundanas. La primera es la ausencia total de jerarquía visual y argumental: párrafos kilométricos de ideas sueltas que agotan cognitivamente a cualquier lector antes de llegar a la tercera línea. El cerebro dice «no puedo con esto» y se va. La segunda es la parálisis al final del texto: la falta de una indicación clara de qué hacer a continuación. Si falta esa llamada a la acción, el texto queda muerto.",
    },
    {
      type: "paragraph",
      bodyEs: "Para ubicar el copy, piensa en el Método C30 de Coimagen Media: una cadena de siete eslabones —contexto, idea, gancho, creativo, copy, pública y convierte— y el copy es el paso número cinco. Hay muchísimo trabajo antes de escribir una sola palabra persuasiva. El gancho ya cumplió su misión de detener a la persona que hacía scroll infinito. El texto es el terreno donde esa atención prestada debe transformarse en interés real y, finalmente, en acción. Si el gancho es el escaparate brillante que te hace frenar en seco y entrar a la tienda, el texto es el dependiente experto que te guía por los pasillos hasta la caja. Si la redacción falla ahí, la atención se va en milisegundos y todo el trabajo invertido en el diseño o el video se va a la basura.",
      bodyEn: "Para ubicar el copy, piensa en el Método C30 de Coimagen Media: una cadena de siete eslabones —contexto, idea, gancho, creativo, copy, pública y convierte— y el copy es el paso número cinco. Hay muchísimo trabajo antes de escribir una sola palabra persuasiva. El gancho ya cumplió su misión de detener a la persona que hacía scroll infinito. El texto es el terreno donde esa atención prestada debe transformarse en interés real y, finalmente, en acción. Si el gancho es el escaparate brillante que te hace frenar en seco y entrar a la tienda, el texto es el dependiente experto que te guía por los pasillos hasta la caja. Si la redacción falla ahí, la atención se va en milisegundos y todo el trabajo invertido en el diseño o el video se va a la basura.",
    },
    {
      type: "heading",
      titleEs: "Las 8 fórmulas: el esqueleto antes que la inspiración",
      titleEn: "Las 8 fórmulas: el esqueleto antes que la inspiración",
    },
    {
      type: "paragraph",
      bodyEs: "La tesis central es que estructurar un texto persuasivo y lograr que alguien pase a la acción no es un talento innato reservado a genios de la literatura: es un método puramente técnico y replicable. Las ocho fórmulas son esqueletos argumentales prefabricados, plantillas con corchetes donde se inserta la información propia. Lo interesante es la intención psicológica que esconde cada bloque.",
      bodyEn: "La tesis central es que estructurar un texto persuasivo y lograr que alguien pase a la acción no es un talento innato reservado a genios de la literatura: es un método puramente técnico y replicable. Las ocho fórmulas son esqueletos argumentales prefabricados, plantillas con corchetes donde se inserta la información propia. Lo interesante es la intención psicológica que esconde cada bloque.",
    },
    {
      type: "list",
      items: [
        { es: "PAS — Problema, Agitación, Solución: plantea el problema, agita el costo real de no resolverlo y luego ofrece la solución.", en: "PAS — Problema, Agitación, Solución: plantea el problema, agita el costo real de no resolverlo y luego ofrece la solución." },
        { es: "AIDA — Atención, Interés, Deseo, Acción: la secuencia clásica que lleva al lector desde que te nota hasta que actúa.", en: "AIDA — Atención, Interés, Deseo, Acción: la secuencia clásica que lleva al lector desde que te nota hasta que actúa." },
        { es: "Antes / Después / Puente: pinta dos escenarios opuestos, el antes lleno de fricción y el después con el obstáculo eliminado; el producto queda relegado a ser el puente.", en: "Antes / Después / Puente: pinta dos escenarios opuestos, el antes lleno de fricción y el después con el obstáculo eliminado; el producto queda relegado a ser el puente." },
        { es: "Las 4 P: la estructura de cuatro elementos del kit para ordenar el argumento de venta.", en: "Las 4 P: la estructura de cuatro elementos del kit para ordenar el argumento de venta." },
        { es: "FAB — Características, Ventajas, Beneficios: los aficionados venden características, los profesionales comunican beneficios.", en: "FAB — Características, Ventajas, Beneficios: los aficionados venden características, los profesionales comunican beneficios." },
        { es: "Historia + Oferta: las historias bajan las defensas; un argumento lógico invita al debate, una historia personal genera identificación.", en: "Historia + Oferta: las historias bajan las defensas; un argumento lógico invita al debate, una historia personal genera identificación." },
        { es: "Objeción + Refutación: saca a relucir la mayor duda que genera lo que ofreces y rebátela con lógica y honestidad antes de que el lector descarte la idea.", en: "Objeción + Refutación: saca a relucir la mayor duda que genera lo que ofreces y rebátela con lógica y honestidad antes de que el lector descarte la idea." },
        { es: "Lista + CTA: una lista de valor que termina en una llamada a la acción; ideal para educar de forma suave antes de pedir algo.", en: "Lista + CTA: una lista de valor que termina en una llamada a la acción; ideal para educar de forma suave antes de pedir algo." },
      ],
    },
    {
      type: "image",
      image: "/images/blog/copy-cta-1.webp",
      altEs: "Escritorio de trabajo visto desde arriba: laptop con la pantalla en blanco, libreta azul, pluma dorada y una taza de café, en tonos azul marino y dorado",
      altEn: "Escritorio de trabajo visto desde arriba: laptop con la pantalla en blanco, libreta azul, pluma dorada y una taza de café, en tonos azul marino y dorado",
    },
    {
      type: "heading",
      titleEs: "PAS en acción: el ejemplo de la consultoría",
      titleEn: "PAS en acción: el ejemplo de la consultoría",
    },
    {
      type: "paragraph",
      bodyEs: "La fase intermedia de PAS, la agitación, es la que más se subestima. El cerebro humano es experto en ignorar problemas latentes: si alguien tiene una pequeña gotera en el garaje, pone un cubo debajo y se olvida. La agitación destruye esa inercia y obliga a visualizar el costo real y futuro de no solucionar el problema hoy. Un texto sin estructura para una consultoría financiera diría: «ofrezco asesoría contable para emprendedores». Con PAS arranca con el problema —llega el fin del trimestre y tus facturas son un caos—, sigue la agitación —te pasas el fin de semana entero cuadrando números, sacrificando tiempo con tu familia, y aun así vives con el miedo constante de que Hacienda te ponga una multa terrible— y cierra con la solución —mi servicio de consultoría asume toda esa carga para que tú te dediques exclusivamente a hacer crecer tu negocio—. El contraste es abismal, porque el segundo texto demuestra una empatía profunda: quien lo lee siente que le han leído la mente.",
      bodyEn: "La fase intermedia de PAS, la agitación, es la que más se subestima. El cerebro humano es experto en ignorar problemas latentes: si alguien tiene una pequeña gotera en el garaje, pone un cubo debajo y se olvida. La agitación destruye esa inercia y obliga a visualizar el costo real y futuro de no solucionar el problema hoy. Un texto sin estructura para una consultoría financiera diría: «ofrezco asesoría contable para emprendedores». Con PAS arranca con el problema —llega el fin del trimestre y tus facturas son un caos—, sigue la agitación —te pasas el fin de semana entero cuadrando números, sacrificando tiempo con tu familia, y aun así vives con el miedo constante de que Hacienda te ponga una multa terrible— y cierra con la solución —mi servicio de consultoría asume toda esa carga para que tú te dediques exclusivamente a hacer crecer tu negocio—. El contraste es abismal, porque el segundo texto demuestra una empatía profunda: quien lo lee siente que le han leído la mente.",
    },
    {
      type: "paragraph",
      bodyEs: "La fórmula FAB corrige otro error clásico: sonar como un manual de instrucciones técnico. La característica es un dato frío, la ventaja explica qué hace ese dato, pero el beneficio es el impacto emocional en la vida de la persona. Si alguien vende una mochila técnica para fotógrafos, la característica sería «fabricada con nylon balístico 1680D», la ventaja es que es completamente impermeable y resistente a cortes, y el beneficio real es: camina por cualquier ciudad bajo una tormenta con la tranquilidad absoluta de que tus cámaras y objetivos más delicados están a salvo. Ese es el salto: traducir el idioma de la fábrica al idioma de las emociones humanas.",
      bodyEn: "La fórmula FAB corrige otro error clásico: sonar como un manual de instrucciones técnico. La característica es un dato frío, la ventaja explica qué hace ese dato, pero el beneficio es el impacto emocional en la vida de la persona. Si alguien vende una mochila técnica para fotógrafos, la característica sería «fabricada con nylon balístico 1680D», la ventaja es que es completamente impermeable y resistente a cortes, y el beneficio real es: camina por cualquier ciudad bajo una tormenta con la tranquilidad absoluta de que tus cámaras y objetivos más delicados están a salvo. Ese es el salto: traducir el idioma de la fábrica al idioma de las emociones humanas.",
    },
    {
      type: "heading",
      titleEs: "El árbol de decisiones de 30 segundos",
      titleEn: "El árbol de decisiones de 30 segundos",
    },
    {
      type: "paragraph",
      bodyEs: "Con ocho fórmulas disponibles, elegir puede paralizar. Por eso el método incluye un árbol de decisiones de 30 segundos: si el público suele dudar mucho de tu sector, aplicas Objeción + Refutación; si el objetivo es educar de forma suave antes de pedir algo, te decantas por una lista de valor terminada en una llamada a la acción. El árbol quita carga mental: da los cimientos prefabricados para que toda la energía creativa se destine al contenido real y a la empatía con quien lee, en lugar de perder horas decidiendo cómo ordenar los párrafos.",
      bodyEn: "Con ocho fórmulas disponibles, elegir puede paralizar. Por eso el método incluye un árbol de decisiones de 30 segundos: si el público suele dudar mucho de tu sector, aplicas Objeción + Refutación; si el objetivo es educar de forma suave antes de pedir algo, te decantas por una lista de valor terminada en una llamada a la acción. El árbol quita carga mental: da los cimientos prefabricados para que toda la energía creativa se destine al contenido real y a la empatía con quien lee, en lugar de perder horas decidiendo cómo ordenar los párrafos.",
    },
    {
      type: "heading",
      titleEs: "La anatomía del CTA: la última línea es la más importante",
      titleEn: "La anatomía del CTA: la última línea es la más importante",
    },
    {
      type: "paragraph",
      bodyEs: "Todo el texto existe con el único propósito de que la persona llegue a esa línea final y tome una decisión. Si la llamada a la acción falla, el 100% del esfuerzo anterior se va por el desagüe. Por eso las reglas son estrictas.",
      bodyEn: "Todo el texto existe con el único propósito de que la persona llegue a esa línea final y tome una decisión. Si la llamada a la acción falla, el 100% del esfuerzo anterior se va por el desagüe. Por eso las reglas son estrictas.",
    },
    {
      type: "list",
      items: [
        { es: "Un solo verbo de acción: terminar un correo o un post diciendo «escríbeme, sígueme, guarda este mensaje y comparte con un amigo» no es una indicación, es una exigencia múltiple. El cerebro se satura y, por defecto, no hace ninguna.", en: "Un solo verbo de acción: terminar un correo o un post diciendo «escríbeme, sígueme, guarda este mensaje y comparte con un amigo» no es una indicación, es una exigencia múltiple. El cerebro se satura y, por defecto, no hace ninguna." },
        { es: "Decir qué pasa exactamente después del clic: un botón que diga «contáctame» genera ansiedad porque no sabes qué va a pasar. «Escríbeme la palabra agenda y te enviaré un calendario gratuito» elimina la incertidumbre de golpe.", en: "Decir qué pasa exactamente después del clic: un botón que diga «contáctame» genera ansiedad porque no sabes qué va a pasar. «Escríbeme la palabra agenda y te enviaré un calendario gratuito» elimina la incertidumbre de golpe." },
        { es: "Incluir el beneficio explícito: la llamada a la acción debe responder a la pregunta silenciosa de «¿y yo qué gano haciendo esto?», porque ante la duda el cerebro siempre opta por conservar energía y seguir de largo.", en: "Incluir el beneficio explícito: la llamada a la acción debe responder a la pregunta silenciosa de «¿y yo qué gano haciendo esto?», porque ante la duda el cerebro siempre opta por conservar energía y seguir de largo." },
        { es: "Urgencia solo si es real: la urgencia inventada o la escasez artificial destruyen por completo la reputación en el instante en que el usuario descubre el engaño. Si no hay un límite real de plazas o una fecha de cierre inamovible, jamás se debe inventar. Nada de falsos temporizadores.", en: "Urgencia solo si es real: la urgencia inventada o la escasez artificial destruyen por completo la reputación en el instante en que el usuario descubre el engaño. Si no hay un límite real de plazas o una fecha de cierre inamovible, jamás se debe inventar. Nada de falsos temporizadores." },
        { es: "Visible y repetido: el llamado a la acción debe verse y repetirse en el texto, no esconderse al final en letra pequeña.", en: "Visible y repetido: el llamado a la acción debe verse y repetirse en el texto, no esconderse al final en letra pequeña." },
      ],
    },
    {
      type: "paragraph",
      bodyEs: "En ausencia de urgencia genuina, la fuerza del cierre debe recaer íntegramente en el beneficio que pierde la persona por cada día que retrasa la decisión. Es como invitar a unos amigos a cenar: si les dices «venid a cenar un día de estos», no aparecerá nadie. Tienes que decir la hora exacta, la dirección y qué vas a preparar. Dar un paso, ya sea hacer clic o enviar un mensaje, requiere un gasto de energía mínimo, pero lo requiere.",
      bodyEn: "En ausencia de urgencia genuina, la fuerza del cierre debe recaer íntegramente en el beneficio que pierde la persona por cada día que retrasa la decisión. Es como invitar a unos amigos a cenar: si les dices «venid a cenar un día de estos», no aparecerá nadie. Tienes que decir la hora exacta, la dirección y qué vas a preparar. Dar un paso, ya sea hacer clic o enviar un mensaje, requiere un gasto de energía mínimo, pero lo requiere.",
    },
    {
      type: "image",
      image: "/images/blog/copy-cta-2.webp",
      altEs: "Avión de papel dorado volando hacia un blanco circular con una flecha en el centro, sobre fondo azul marino",
      altEn: "Avión de papel dorado volando hacia un blanco circular con una flecha en el centro, sobre fondo azul marino",
    },
    {
      type: "heading",
      titleEs: "3 errores que hunden cualquier texto",
      titleEn: "3 errores que hunden cualquier texto",
    },
    {
      type: "list",
      items: [
        { es: "Hablar de ti, no de ellos: textos plagados de «somos una empresa líder con 15 años de experiencia, mi innovadora metodología, mis premios». Mientras tanto, quien lee solo piensa: «¿y a mí qué?». La regla es obligarse a escribir dos frases sobre el problema, los miedos o los deseos de quien lee por cada frase de credenciales propias.", en: "Hablar de ti, no de ellos: textos plagados de «somos una empresa líder con 15 años de experiencia, mi innovadora metodología, mis premios». Mientras tanto, quien lee solo piensa: «¿y a mí qué?». La regla es obligarse a escribir dos frases sobre el problema, los miedos o los deseos de quien lee por cada frase de credenciales propias." },
        { es: "Sobreprometer: frases como «transforma tu vida en tres días garantizado» pueden generar conversiones a corto plazo, pero cuando la realidad choca con esa expectativa, la confianza se fractura para siempre. La directriz es prometer únicamente lo que está bajo tu control absoluto: el acompañamiento, la metodología, la dedicación. Nunca un resultado mágico.", en: "Sobreprometer: frases como «transforma tu vida en tres días garantizado» pueden generar conversiones a corto plazo, pero cuando la realidad choca con esa expectativa, la confianza se fractura para siempre. La directriz es prometer únicamente lo que está bajo tu control absoluto: el acompañamiento, la metodología, la dedicación. Nunca un resultado mágico." },
        { es: "Mezclar estructuras: empezar con una anécdota íntima, saltar a una lista de especificaciones técnicas frías y terminar con un mensaje agresivo de escasez. La regla de oro es elegir una sola fórmula antes de empezar y ser fiel a ese hilo conductor hasta la última línea.", en: "Mezclar estructuras: empezar con una anécdota íntima, saltar a una lista de especificaciones técnicas frías y terminar con un mensaje agresivo de escasez. La regla de oro es elegir una sola fórmula antes de empezar y ser fiel a ese hilo conductor hasta la última línea." },
      ],
    },
    {
      type: "heading",
      titleEs: "La IA como editor implacable, no como autora",
      titleEn: "La IA como editor implacable, no como autora",
    },
    {
      type: "paragraph",
      bodyEs: "El método no plantea la inteligencia artificial como un botón mágico que escupe textos perfectos, sino como un asistente estratégico y un editor implacable. El Prompt N.º 6 está pensado para auditar: le pasas tu borrador a la IA y le pides que te puntúe del 1 al 5 la claridad, si ha respetado la estructura, la fuerza del cierre y el tono. Te saca los colores en privado antes de que cometas el error en público. Y para la fase de creación, el método insiste en alimentar primero a la herramienta con un Documento de Contexto de marca: identidad, tono de voz, valores y vocabulario habitual, para no sonar como un robot genérico. El kit incluye 6 prompts de IA: generador con fórmula elegida, 10 variaciones de CTA, reescritor de copy débil, copy con tu Documento de Contexto, email de ventas completo y diagnóstico de copy.",
      bodyEn: "El método no plantea la inteligencia artificial como un botón mágico que escupe textos perfectos, sino como un asistente estratégico y un editor implacable. El Prompt N.º 6 está pensado para auditar: le pasas tu borrador a la IA y le pides que te puntúe del 1 al 5 la claridad, si ha respetado la estructura, la fuerza del cierre y el tono. Te saca los colores en privado antes de que cometas el error en público. Y para la fase de creación, el método insiste en alimentar primero a la herramienta con un Documento de Contexto de marca: identidad, tono de voz, valores y vocabulario habitual, para no sonar como un robot genérico. El kit incluye 6 prompts de IA: generador con fórmula elegida, 10 variaciones de CTA, reescritor de copy débil, copy con tu Documento de Contexto, email de ventas completo y diagnóstico de copy.",
    },
    {
      type: "paragraph",
      bodyEs: "Hay una cláusula de seguridad ineludible: cualquier texto generado por una inteligencia artificial debe considerarse única y exclusivamente como el punto de partida, un primer borrador. La máquina se encarga de aplicar rígidamente el andamiaje psicológico de las fórmulas, pero el ser humano tiene la obligación de inyectar la anécdota real, el matiz y la empatía auténtica. La inteligencia artificial proporciona el esqueleto, pero la experiencia humana es lo que le da la sangre y el alma al texto.",
      bodyEn: "Hay una cláusula de seguridad ineludible: cualquier texto generado por una inteligencia artificial debe considerarse única y exclusivamente como el punto de partida, un primer borrador. La máquina se encarga de aplicar rígidamente el andamiaje psicológico de las fórmulas, pero el ser humano tiene la obligación de inyectar la anécdota real, el matiz y la empatía auténtica. La inteligencia artificial proporciona el esqueleto, pero la experiencia humana es lo que le da la sangre y el alma al texto.",
    },
    {
      type: "highlight",
      titleEs: "Los 3 pilares",
      titleEn: "Los 3 pilares",
      bodyEs: "Lograr que alguien preste atención y decida actuar se reduce a tres pilares: apoyarse en un esqueleto argumental probado, eligiendo una de las ocho fórmulas; limpiar el texto de vicios destructivos, como los muros de palabras o el exceso de ego; y culminar siempre el mensaje pidiendo una sola cosa, de forma clara y dejando cristalino el beneficio para la otra persona. Y hay una reflexión final: cuando estructurar mensajes persuasivos se democratice y todos usen las fórmulas perfectas, la técnica dejará de ser una ventaja competitiva. Lo único que servirá de filtro será la calidad brutal, la autenticidad innegable y la honestidad radical del servicio o de la idea que hay detrás.",
      bodyEn: "Lograr que alguien preste atención y decida actuar se reduce a tres pilares: apoyarse en un esqueleto argumental probado, eligiendo una de las ocho fórmulas; limpiar el texto de vicios destructivos, como los muros de palabras o el exceso de ego; y culminar siempre el mensaje pidiendo una sola cosa, de forma clara y dejando cristalino el beneficio para la otra persona. Y hay una reflexión final: cuando estructurar mensajes persuasivos se democratice y todos usen las fórmulas perfectas, la técnica dejará de ser una ventaja competitiva. Lo único que servirá de filtro será la calidad brutal, la autenticidad innegable y la honestidad radical del servicio o de la idea que hay detrás.",
    },
    {
      type: "heading",
      titleEs: "Qué puedes aplicar hoy",
      titleEn: "Qué puedes aplicar hoy",
    },
    {
      type: "list",
      items: [
        { es: "Elige una fórmula antes de escribir y no la sueltes hasta la última línea.", en: "Elige una fórmula antes de escribir y no la sueltes hasta la última línea." },
        { es: "Revisa tu último texto: ¿tiene jerarquía o es un muro? ¿Cierra con una sola acción clara?", en: "Revisa tu último texto: ¿tiene jerarquía o es un muro? ¿Cierra con una sola acción clara?" },
        { es: "Reescribe tu llamado a la acción con un solo verbo, qué pasa después del clic y el beneficio explícito.", en: "Reescribe tu llamado a la acción con un solo verbo, qué pasa después del clic y el beneficio explícito." },
        { es: "Por cada frase que hable de ti, escribe dos que hablen de tu lector.", en: "Por cada frase que hable de ti, escribe dos que hablen de tu lector." },
        { es: "Pásale tu borrador a la IA con el Prompt N.º 6 y corrige en privado antes de publicar.", en: "Pásale tu borrador a la IA con el Prompt N.º 6 y corrige en privado antes de publicar." },
      ],
    },
    {
      type: "highlight",
      titleEs: "¿Quieres que tus textos vendan por ti?",
      titleEn: "¿Quieres que tus textos vendan por ti?",
      bodyEs: "En Coimagen Media convertimos tu contenido en un sistema: copy, embudos y automatización que trabajan todos los días. Agenda tu evaluación gratis en coimagenmedia.com o escríbenos por WhatsApp al 664 476 9223. Y si quieres las 8 fórmulas, el banco de 50 llamados a la acción y los 6 prompts de IA listos para usar, el Copy & CTA Kit (PDF de 12 páginas, $11 USD) está en tienda.coimagenmedia.com.",
      bodyEn: "En Coimagen Media convertimos tu contenido en un sistema: copy, embudos y automatización que trabajan todos los días. Agenda tu evaluación gratis en coimagenmedia.com o escríbenos por WhatsApp al 664 476 9223. Y si quieres las 8 fórmulas, el banco de 50 llamados a la acción y los 6 prompts de IA listos para usar, el Copy & CTA Kit (PDF de 12 páginas, $11 USD) está en tienda.coimagenmedia.com.",
    },
  ],
  faq: [
    {
      q: { es: "¿El copy es talento o sistema?", en: "¿El copy es talento o sistema?" },
      a: { es: "Sistema. Escribir para vender no es un talento innato reservado a genios de la literatura: es un método técnico y replicable. Las ocho fórmulas son esqueletos argumentales prefabricados; lo que cambia es la información que tú insertas en ellos.", en: "Sistema. Escribir para vender no es un talento innato reservado a genios de la literatura: es un método técnico y replicable. Las ocho fórmulas son esqueletos argumentales prefabricados; lo que cambia es la información que tú insertas en ellos." },
    },
    {
      q: { es: "¿Cuántos verbos de acción debe tener un llamado a la acción?", en: "¿Cuántos verbos de acción debe tener un llamado a la acción?" },
      a: { es: "Uno solo. Pedir «escríbeme, sígueme, guarda y comparte» a la vez satura al cerebro y, por defecto, la persona no hace ninguna de las acciones. Antes de publicar hay que decidir cuál es la única acción que mueve la aguja y pedir exclusivamente esa.", en: "Uno solo. Pedir «escríbeme, sígueme, guarda y comparte» a la vez satura al cerebro y, por defecto, la persona no hace ninguna de las acciones. Antes de publicar hay que decidir cuál es la única acción que mueve la aguja y pedir exclusivamente esa." },
    },
    {
      q: { es: "¿La IA puede escribir mis textos por mí?", en: "¿La IA puede escribir mis textos por mí?" },
      a: { es: "Como punto de partida, sí; como autora, no. La IA aplica el andamiaje de las fórmulas y audita tu borrador con el Prompt N.º 6, pero el ser humano debe inyectar la anécdota real, el matiz y la empatía. La IA da el esqueleto; la experiencia humana da la sangre y el alma.", en: "Como punto de partida, sí; como autora, no. La IA aplica el andamiaje de las fórmulas y audita tu borrador con el Prompt N.º 6, pero el ser humano debe inyectar la anécdota real, el matiz y la empatía. La IA da el esqueleto; la experiencia humana da la sangre y el alma." },
    },
  ],
  relatedSlugs: ["comercio-agentico-negocios", "google-ads-vs-seo"],
};

export default function EscribeTextosQueVenden() {
  return <BlogPostTemplate content={content} />;
}
