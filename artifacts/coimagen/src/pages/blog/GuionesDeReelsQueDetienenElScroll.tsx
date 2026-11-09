// BORRADOR PARA REVISIÓN — NO PUBLICAR.
// Artículo solo en español, patrón BlogContent de ComercioAgenticoNegocios.
// Tema del episodio de Spotify EP-05 (estreno 13-nov-2026): "Guiones de reels
// que detienen el scroll" (Reels Script Factory).
// Fuentes: transcripción del episodio (~/workspace/podcasts/reels-script-factory/)
// y página verificada del producto (https://coimagen.gumroad.com/l/reels-script-factory,
// precio $11 USD verificado 9-nov-2026). Nada inventado: los 3 bloques, las 10
// estructuras, el Prompt 0, la regla 80-20 y el flujo de 60 minutos son del
// episodio y de la página del producto. La fuente NUNCA se menciona en el
// artículo público.
// NOTA DE IDIOMA: el tipo BlogContent exige los campos En y el template solo
// renderiza una sección si existen ambos idiomas; los campos En se rellenaron
// con el mismo texto en español. NO se escribió versión en inglés, por regla
// de Camila (blog de Coimagen solo en español).
// CTA como bloque "highlight" con texto, NO como "cta_inline": cta_inline
// enlaza por defecto a WhatsApp y este artículo no lleva enlace de WhatsApp.
// El enlace del episodio en Spotify queda PENDIENTE (el episodio estrena el
// 13-nov-2026 y su URL real no está en ninguna fuente verificada; ver seo.md).
import { BlogPostTemplate, BlogContent } from "@/components/templates/BlogPostTemplate";

const content: BlogContent = {
  slug: "guiones-de-reels-que-detienen-el-scroll",
  categoryEs: "IA",
  categoryEn: "AI",
  categoryColor: "#00CFFF",
  icon: "🤖",
  date: "2026-11-28",
  readTimeMin: 8,
  accentHex: "#00CFFF",
  titleEs: "Guiones de reels que detienen el scroll",
  titleEn: "Guiones de reels que detienen el scroll",
  subtitleEs: "El cerebro decide si te ignora en menos de un segundo y medio. Un reel que retiene no es suerte: es un guion de tres bloques, una sola idea y una sola acción al final.",
  subtitleEn: "El cerebro decide si te ignora en menos de un segundo y medio. Un reel que retiene no es suerte: es un guion de tres bloques, una sola idea y una sola acción al final.",
  sections: [
    {
      type: "intro",
      bodyEs: "Cada minuto de cada día se suben miles y miles de horas de video a las redes sociales, y la biología humana dicta que la gran mayoría de ese contenido será deslizado hacia el olvido en menos de un segundo y medio. El cerebro decide ignorar un estímulo visual mucho antes de que la persona en pantalla termine de decir siquiera «hola». Frente a esa realidad, la creación de contenido corto suele parecerse a una lotería: improvisar frente a la cámara y esperar que el algoritmo construya una audiencia. El resultado directo de esa improvisación continua es el agotamiento extremo. Lo que falta es sistematizar, con base en cómo procesamos realmente la información. Este tema lo conversamos en el episodio del pódcast de Coimagen Media «Guiones de reels que detienen el scroll», que estrena el viernes 13 de noviembre de 2026 en Spotify, y aquí va ampliado, con la arquitectura del guion, las estructuras y el flujo para grabar una semana de contenido en una hora.",
      bodyEn: "Cada minuto de cada día se suben miles y miles de horas de video a las redes sociales, y la biología humana dicta que la gran mayoría de ese contenido será deslizado hacia el olvido en menos de un segundo y medio. El cerebro decide ignorar un estímulo visual mucho antes de que la persona en pantalla termine de decir siquiera «hola». Frente a esa realidad, la creación de contenido corto suele parecerse a una lotería: improvisar frente a la cámara y esperar que el algoritmo construya una audiencia. El resultado directo de esa improvisación continua es el agotamiento extremo. Lo que falta es sistematizar, con base en cómo procesamos realmente la información. Este tema lo conversamos en el episodio del pódcast de Coimagen Media «Guiones de reels que detienen el scroll», que estrena el viernes 13 de noviembre de 2026 en Spotify, y aquí va ampliado, con la arquitectura del guion, las estructuras y el flujo para grabar una semana de contenido en una hora.",
    },
    {
      type: "heading",
      titleEs: "La arquitectura innegociable: 3 bloques",
      titleEn: "La arquitectura innegociable: 3 bloques",
    },
    {
      type: "steps",
      items: [
        { es: "Gancho, de 0 a 3 segundos: un filtro de relevancia. Si no articulas de inmediato una afirmación, una pregunta abierta o un resultado tangible, la corteza prefrontal del espectador cataloga el video como ruido y el dedo sigue deslizando.", en: "Gancho, de 0 a 3 segundos: un filtro de relevancia. Si no articulas de inmediato una afirmación, una pregunta abierta o un resultado tangible, la corteza prefrontal del espectador cataloga el video como ruido y el dedo sigue deslizando." },
        { es: "Desarrollo, hasta el segundo 40: una sola idea. Presentar tres ideas distintas en 40 segundos genera una saturación que diluye por completo el mensaje principal.", en: "Desarrollo, hasta el segundo 40: una sola idea. Presentar tres ideas distintas en 40 segundos genera una saturación que diluye por completo el mensaje principal." },
        { es: "Llamada a la acción, en los últimos 5 segundos: una sola opción. Pedir que comenten, que guarden o que vayan al enlace de la biografía, pero nunca las tres cosas a la vez.", en: "Llamada a la acción, en los últimos 5 segundos: una sola opción. Pedir que comenten, que guarden o que vayan al enlace de la biografía, pero nunca las tres cosas a la vez." },
      ],
    },
    {
      type: "paragraph",
      bodyEs: "La primera frase debe dirigir la atención a una audiencia muy específica: nada de introducciones largas ni de «hola, ¿qué tal?». Es como el escaparate de una tienda: si el maniquí de la vitrina es aburrido, nadie entra por muy buenos que sean los productos del interior. Si el video arranca diciendo «tres razones por las que tu empresa de logística pierde dinero», quien trabaja en logística se queda y quien no, desliza. Esa polarización purifica la retención y le da al algoritmo señales mucho más limpias sobre a quién mostrarle el contenido. En ese milisegundo no compites contra otros creadores: compites contra el acto físico de hacer scroll.",
      bodyEn: "La primera frase debe dirigir la atención a una audiencia muy específica: nada de introducciones largas ni de «hola, ¿qué tal?». Es como el escaparate de una tienda: si el maniquí de la vitrina es aburrido, nadie entra por muy buenos que sean los productos del interior. Si el video arranca diciendo «tres razones por las que tu empresa de logística pierde dinero», quien trabaja en logística se queda y quien no, desliza. Esa polarización purifica la retención y le da al algoritmo señales mucho más limpias sobre a quién mostrarle el contenido. En ese milisegundo no compites contra otros creadores: compites contra el acto físico de hacer scroll.",
    },
    {
      type: "paragraph",
      bodyEs: "La llamada a la acción final es draconiana por una razón: la fatiga de decisión. Si se le pide a alguien que dé me gusta, que comparta, que comente y que además se suscriba, el cerebro se enfrenta a un exceso de opciones y la respuesta por defecto, la que gasta menos energía, es no hacer absolutamente nada y deslizar. Cada instrucción adicional reduce exponencialmente la probabilidad de que alguien haga algo. Si quieres comentarios, pides un comentario. Y luego mides si el guion funcionó para eso.",
      bodyEn: "La llamada a la acción final es draconiana por una razón: la fatiga de decisión. Si se le pide a alguien que dé me gusta, que comparta, que comente y que además se suscriba, el cerebro se enfrenta a un exceso de opciones y la respuesta por defecto, la que gasta menos energía, es no hacer absolutamente nada y deslizar. Cada instrucción adicional reduce exponencialmente la probabilidad de que alguien haga algo. Si quieres comentarios, pides un comentario. Y luego mides si el guion funcionó para eso.",
    },
    {
      type: "heading",
      titleEs: "Una sola idea por video (y un cambio visual cada 3 a 5 segundos)",
      titleEn: "Una sola idea por video (y un cambio visual cada 3 a 5 segundos)",
    },
    {
      type: "paragraph",
      bodyEs: "El instinto natural es empaquetar la mayor cantidad de valor posible para demostrar que eres un experto. Pero cognitivamente, presentar tres ideas distintas en 40 segundos genera una saturación que diluye el mensaje. Y para mantener a la gente durante ese desarrollo, el sistema recomienda un cambio visual cada tres a cinco segundos: un cambio de plano, un acercamiento o un texto que salta en pantalla. No es hiperactividad por capricho: es combatir la habituación neurológica. Cuando una imagen permanece estática mucho tiempo, el cerebro deja de procesarla activamente para ahorrar energía, porque asume que ya absorbió todo el contexto. Esos pequeños saltos actúan como un reseteo suave que obliga al cerebro a revaluar la imagen, mantiene el estado de alerta y asegura que el canal auditivo, por donde viaja la información importante, siga abierto y receptivo.",
      bodyEn: "El instinto natural es empaquetar la mayor cantidad de valor posible para demostrar que eres un experto. Pero cognitivamente, presentar tres ideas distintas en 40 segundos genera una saturación que diluye el mensaje. Y para mantener a la gente durante ese desarrollo, el sistema recomienda un cambio visual cada tres a cinco segundos: un cambio de plano, un acercamiento o un texto que salta en pantalla. No es hiperactividad por capricho: es combatir la habituación neurológica. Cuando una imagen permanece estática mucho tiempo, el cerebro deja de procesarla activamente para ahorrar energía, porque asume que ya absorbió todo el contexto. Esos pequeños saltos actúan como un reseteo suave que obliga al cerebro a revaluar la imagen, mantiene el estado de alerta y asegura que el canal auditivo, por donde viaja la información importante, siga abierto y receptivo.",
    },
    {
      type: "image",
      image: "/images/blog/reels-scripts-1.webp",
      altEs: "Smartphone en trípode grabando video en un estudio con aro de luz y una planta, sin personas",
      altEn: "Smartphone en trípode grabando video en un estudio con aro de luz y una planta, sin personas",
    },
    {
      type: "heading",
      titleEs: "10 estructuras, un embudo invisible",
      titleEn: "10 estructuras, un embudo invisible",
    },
    {
      type: "paragraph",
      bodyEs: "Un error clásico es usar la misma cadencia narrativa para todo. Intentar usar la misma estructura para cualquier objetivo es como intentar atornillar un clavo con un martillo. Por eso el sistema aporta un catálogo de 10 estructuras de guion probadas, cada una asociada a una fricción psicológica distinta. Y no son bloques aislados: actúan como un embudo de conversión invisible. La estrategia es rotarlas asumiendo las distintas temperaturas de la audiencia a lo largo del mes.",
      bodyEn: "Un error clásico es usar la misma cadencia narrativa para todo. Intentar usar la misma estructura para cualquier objetivo es como intentar atornillar un clavo con un martillo. Por eso el sistema aporta un catálogo de 10 estructuras de guion probadas, cada una asociada a una fricción psicológica distinta. Y no son bloques aislados: actúan como un embudo de conversión invisible. La estrategia es rotarlas asumiendo las distintas temperaturas de la audiencia a lo largo del mes.",
    },
    {
      type: "list",
      items: [
        { es: "Educativo: para generar guardados, enseñando algo útil en pocos segundos.", en: "Educativo: para generar guardados, enseñando algo útil en pocos segundos." },
        { es: "Historia (Storytime): una historia personal para construir confianza a través de la vulnerabilidad.", en: "Historia (Storytime): una historia personal para construir confianza a través de la vulnerabilidad." },
        { es: "Mito vs realidad: para detonar comentarios. Su eficacia no reside en la información, sino en la disonancia cognitiva: cuando un video desafía algo que todos creen, la gente siente el impulso de entrar a defender su postura.", en: "Mito vs realidad: para detonar comentarios. Su eficacia no reside en la información, sino en la disonancia cognitiva: cuando un video desafía algo que todos creen, la gente siente el impulso de entrar a defender su postura." },
        { es: "Lista rápida: valor condensado en una lista breve que se consume de un vistazo.", en: "Lista rápida: valor condensado en una lista breve que se consume de un vistazo." },
        { es: "Tutorial paso a paso: enseña haciendo, en orden, hasta un resultado concreto.", en: "Tutorial paso a paso: enseña haciendo, en orden, hasta un resultado concreto." },
        { es: "Antes / después: el contraste que muestra la transformación de un estado a otro.", en: "Antes / después: el contraste que muestra la transformación de un estado a otro." },
        { es: "Pregunta que engancha: abre con la duda que tu audiencia ya tiene en la cabeza.", en: "Pregunta que engancha: abre con la duda que tu audiencia ya tiene en la cabeza." },
        { es: "Testimonio / caso: la prueba real de que algo funcionó para alguien como tu espectador.", en: "Testimonio / caso: la prueba real de que algo funcionó para alguien como tu espectador." },
        { es: "Autoridad: para quien no te conoce de nada. Reduce la fricción inicial aportando valor rápido, sin pedir nada a cambio.", en: "Autoridad: para quien no te conoce de nada. Reduce la fricción inicial aportando valor rápido, sin pedir nada a cambio." },
        { es: "Venta directa: para quien ya vio tus videos educativos antes. Ataca un dolor específico y ofrece la solución.", en: "Venta directa: para quien ya vio tus videos educativos antes. Ataca un dolor específico y ofrece la solución." },
      ],
    },
    {
      type: "paragraph",
      bodyEs: "La estructura de autoridad asume que quien te está viendo es un completo desconocido: el objetivo es validar tu presencia en su pantalla aportando algo útil, sin pedir nada. La de venta directa parte de la premisa contraria: le llegará a un porcentaje de personas que ya vieron tus videos educativos. Lanzar un video de venta pura sin que nadie confíe en ti genera un rechazo inmediato: es como intentar abrir una caja fuerte sin haber puesto antes los números correctos de la combinación. Por eso se exige tanta variedad estructural, y por eso a las semanas siguientes hay que analizar qué estructuras funcionaron y cuáles no: si un video no trajo comentarios, se cambia la estructura. El progreso deja de ser magia y se convierte en datos.",
      bodyEn: "La estructura de autoridad asume que quien te está viendo es un completo desconocido: el objetivo es validar tu presencia en su pantalla aportando algo útil, sin pedir nada. La de venta directa parte de la premisa contraria: le llegará a un porcentaje de personas que ya vieron tus videos educativos. Lanzar un video de venta pura sin que nadie confíe en ti genera un rechazo inmediato: es como intentar abrir una caja fuerte sin haber puesto antes los números correctos de la combinación. Por eso se exige tanta variedad estructural, y por eso a las semanas siguientes hay que analizar qué estructuras funcionaron y cuáles no: si un video no trajo comentarios, se cambia la estructura. El progreso deja de ser magia y se convierte en datos.",
    },
    {
      type: "heading",
      titleEs: "Más de 30 ganchos y el Prompt 0: clona tu voz",
      titleEn: "Más de 30 ganchos y el Prompt 0: clona tu voz",
    },
    {
      type: "paragraph",
      bodyEs: "La principal barrera para escribir guiones es sentarse frente a la hoja en blanco. El sistema la aborda con una biblioteca de más de 30 ganchos prefabricados, clasificados por objetivo: educar (guardados), debatir (comentarios), vender (mensajes) y crecer (seguidores). Pero el verdadero motor es cómo usan la inteligencia artificial. Si le pides a la IA un guion a la primera, el texto resultante suele ser plano, con vocabulario intermedio y sin ritmo humano: usar la IA como si fuera Google te da la respuesta más probable y aburrida. El método propone un paso previo, el Prompt 0: darle a la IA tres textos tuyos, escritos genuinamente por ti en el pasado —correos, publicaciones antiguas—, para que aprenda tu estilo. La IA analiza patrones que ni tú sabías que tenías: tu nivel de franqueza, cómo usas el humor, si prefieres metáforas o datos duros. Te devuelve un diagnóstico de cinco rasgos clave que definen tu voz, y a partir de ahí cualquier guion nuevo debe filtrarse por esos cinco parámetros. Es como un corsé: al forzar a la máquina a operar dentro de esos cinco rasgos, se elimina la tendencia al punto medio aburrido y los guiones salen con tus expresiones idiomáticas.",
      bodyEn: "La principal barrera para escribir guiones es sentarse frente a la hoja en blanco. El sistema la aborda con una biblioteca de más de 30 ganchos prefabricados, clasificados por objetivo: educar (guardados), debatir (comentarios), vender (mensajes) y crecer (seguidores). Pero el verdadero motor es cómo usan la inteligencia artificial. Si le pides a la IA un guion a la primera, el texto resultante suele ser plano, con vocabulario intermedio y sin ritmo humano: usar la IA como si fuera Google te da la respuesta más probable y aburrida. El método propone un paso previo, el Prompt 0: darle a la IA tres textos tuyos, escritos genuinamente por ti en el pasado —correos, publicaciones antiguas—, para que aprenda tu estilo. La IA analiza patrones que ni tú sabías que tenías: tu nivel de franqueza, cómo usas el humor, si prefieres metáforas o datos duros. Te devuelve un diagnóstico de cinco rasgos clave que definen tu voz, y a partir de ahí cualquier guion nuevo debe filtrarse por esos cinco parámetros. Es como un corsé: al forzar a la máquina a operar dentro de esos cinco rasgos, se elimina la tendencia al punto medio aburrido y los guiones salen con tus expresiones idiomáticas.",
    },
    {
      type: "image",
      image: "/images/blog/reels-scripts-2.webp",
      altEs: "Guion gráfico sobre un escritorio: tarjetas en blanco en fila, notas adhesivas de colores y una claqueta, sin personas",
      altEn: "Guion gráfico sobre un escritorio: tarjetas en blanco en fila, notas adhesivas de colores y una claqueta, sin personas",
    },
    {
      type: "heading",
      titleEs: "La regla 80-20: la máquina arma, tú pones el alma",
      titleEn: "La regla 80-20: la máquina arma, tú pones el alma",
    },
    {
      type: "paragraph",
      bodyEs: "Aun con la voz clonada, queda la duda de la autenticidad: si una máquina te dicta la estructura y las palabras exactas, ¿en qué momento se inyecta el alma? El sistema introduce una salvaguarda, la regla del 80-20: la IA es perfecta para construir el andamiaje lógico, el 80% del trabajo —los tiempos, las transiciones y el orden—, pero el 20% final no puede automatizarse jamás. Ese margen es territorio 100% humano: la improvisación controlada, una anécdota caótica que te acaba de pasar, cambiar una frase técnica por una mirada o un gesto. La máquina te da la lógica para que se entienda, pero el humor sutil o la indignación genuina solo salen de haberlo vivido. Un guion demasiado perfecto huele mal y genera desconfianza: cuando aportas tu energía vital, eso valida el contenido.",
      bodyEn: "Aun con la voz clonada, queda la duda de la autenticidad: si una máquina te dicta la estructura y las palabras exactas, ¿en qué momento se inyecta el alma? El sistema introduce una salvaguarda, la regla del 80-20: la IA es perfecta para construir el andamiaje lógico, el 80% del trabajo —los tiempos, las transiciones y el orden—, pero el 20% final no puede automatizarse jamás. Ese margen es territorio 100% humano: la improvisación controlada, una anécdota caótica que te acaba de pasar, cambiar una frase técnica por una mirada o un gesto. La máquina te da la lógica para que se entienda, pero el humor sutil o la indignación genuina solo salen de haberlo vivido. Un guion demasiado perfecto huele mal y genera desconfianza: cuando aportas tu energía vital, eso valida el contenido.",
    },
    {
      type: "heading",
      titleEs: "7 reels en 60 minutos: la línea de ensamblaje",
      titleEn: "7 reels en 60 minutos: la línea de ensamblaje",
    },
    {
      type: "steps",
      items: [
        { es: "Primeros 15 minutos: elegir los siete ganchos, sin perfeccionismos.", en: "Primeros 15 minutos: elegir los siete ganchos, sin perfeccionismos." },
        { es: "Siguientes 15 minutos: rellenar los siete esqueletos con viñetas, sin redactar palabra por palabra. Leer un texto en una pantalla pequeña destruye el contacto visual y aplana la voz; con tres ideas en la cabeza, el cerebro se esfuerza en conectarlas y suenas natural, como si estuvieras charlando.", en: "Siguientes 15 minutos: rellenar los siete esqueletos con viñetas, sin redactar palabra por palabra. Leer un texto en una pantalla pequeña destruye el contacto visual y aplana la voz; con tres ideas en la cabeza, el cerebro se esfuerza en conectarlas y suenas natural, como si estuvieras charlando." },
        { es: "Minutos 30 a 50: grabación cruzada. Se graban todos los ganchos seguidos y luego todos los desarrollos, en lugar de grabar cada video de principio a fin. Grabar un gancho exige un pico de energía altísimo y el desarrollo una energía pausada; alternar a cada rato es lo que deja agotado. Al grabar todos los ganchos seguidos te anclas en ese estado y usas la inercia.", en: "Minutos 30 a 50: grabación cruzada. Se graban todos los ganchos seguidos y luego todos los desarrollos, en lugar de grabar cada video de principio a fin. Grabar un gancho exige un pico de energía altísimo y el desarrollo una energía pausada; alternar a cada rato es lo que deja agotado. Al grabar todos los ganchos seguidos te anclas en ese estado y usas la inercia." },
        { es: "Últimos 10 minutos: checklist de prepublicación. Garantizar el contraste del texto en pantalla, poner siempre subtítulos dinámicos porque mucha gente ve videos en silencio, restringir los hashtags a tres o cinco etiquetas súper específicas y revisar la duración ideal de 21 a 34 segundos.", en: "Últimos 10 minutos: checklist de prepublicación. Garantizar el contraste del texto en pantalla, poner siempre subtítulos dinámicos porque mucha gente ve videos en silencio, restringir los hashtags a tres o cinco etiquetas súper específicas y revisar la duración ideal de 21 a 34 segundos." },
      ],
    },
    {
      type: "paragraph",
      bodyEs: "Los microcortes entre el gancho y el desarrollo también ayudan a resetear la atención visual, además de disimular que llevas la misma ropa en los siete videos. Es la línea de ensamblaje aplicada al video vertical: un ejercicio de compartimentación que devuelve el tiempo a quienes tienen mucho que enseñar pero se bloqueaban con la cámara.",
      bodyEn: "Los microcortes entre el gancho y el desarrollo también ayudan a resetear la atención visual, además de disimular que llevas la misma ropa en los siete videos. Es la línea de ensamblaje aplicada al video vertical: un ejercicio de compartimentación que devuelve el tiempo a quienes tienen mucho que enseñar pero se bloqueaban con la cámara.",
    },
    {
      type: "highlight",
      titleEs: "Mide, no adivines",
      titleEn: "Mide, no adivines",
      bodyEs: "El sistema exige que a las semanas siguientes analices qué estructuras funcionaron y cuáles no. Si un video no trajo comentarios, cambias la estructura. El progreso deja de ser magia y se convierte en datos. Y hay una reflexión final: cuando dominar los ganchos y la retención sea lo habitual y cualquiera pueda clonar su voz con calidad técnica impecable, el verdadero arte será saber exactamente en qué segundo romper todas estas reglas. Meter una pausa incómoda que el algoritmo odiaría, pero que la persona que mira necesita para respirar. En un ecosistema lleno de videos calculados al milímetro, el último gran diferenciador será la vulnerabilidad del error humano.",
      bodyEn: "El sistema exige que a las semanas siguientes analices qué estructuras funcionaron y cuáles no. Si un video no trajo comentarios, cambias la estructura. El progreso deja de ser magia y se convierte en datos. Y hay una reflexión final: cuando dominar los ganchos y la retención sea lo habitual y cualquiera pueda clonar su voz con calidad técnica impecable, el verdadero arte será saber exactamente en qué segundo romper todas estas reglas. Meter una pausa incómoda que el algoritmo odiaría, pero que la persona que mira necesita para respirar. En un ecosistema lleno de videos calculados al milímetro, el último gran diferenciador será la vulnerabilidad del error humano.",
    },
    {
      type: "heading",
      titleEs: "Qué puedes aplicar hoy",
      titleEn: "Qué puedes aplicar hoy",
    },
    {
      type: "list",
      items: [
        { es: "Escribe tu próximo reel en tres bloques: gancho de 0 a 3 segundos, una sola idea hasta el segundo 40 y una sola acción en los últimos 5 segundos.", en: "Escribe tu próximo reel en tres bloques: gancho de 0 a 3 segundos, una sola idea hasta el segundo 40 y una sola acción en los últimos 5 segundos." },
        { es: "Abre con una frase para una audiencia específica, no con una introducción larga.", en: "Abre con una frase para una audiencia específica, no con una introducción larga." },
        { es: "Elige la estructura según el objetivo: educativo para guardados, mito vs realidad para comentarios, autoridad para desconocidos, venta directa solo para quien ya te conoce.", en: "Elige la estructura según el objetivo: educativo para guardados, mito vs realidad para comentarios, autoridad para desconocidos, venta directa solo para quien ya te conoce." },
        { es: "Haz el Prompt 0: dale a la IA tres textos tuyos y pídele los cinco rasgos de tu voz antes de pedirle un guion.", en: "Haz el Prompt 0: dale a la IA tres textos tuyos y pídele los cinco rasgos de tu voz antes de pedirle un guion." },
        { es: "Graba tu semana en 60 minutos: 7 ganchos, 7 esqueletos con viñetas, grabación cruzada y checklist de 10 puntos antes de publicar.", en: "Graba tu semana en 60 minutos: 7 ganchos, 7 esqueletos con viñetas, grabación cruzada y checklist de 10 puntos antes de publicar." },
      ],
    },
    {
      type: "highlight",
      titleEs: "¿Quieres dejar de improvisar frente a la cámara?",
      titleEn: "¿Quieres dejar de improvisar frente a la cámara?",
      bodyEs: "En Coimagen Media convertimos tu contenido en un sistema: guiones, embudos y automatización que trabajan todos los días. Agenda tu evaluación gratis en coimagenmedia.com o escríbenos por WhatsApp al 664 476 9223. Y si quieres las 10 estructuras, los más de 30 ganchos clasificados, las 3 plantillas listas y los 6 prompts de IA para guiones en tu propia voz, el Reels Script Factory (PDF de 10 páginas, $11 USD) está en tienda.coimagenmedia.com.",
      bodyEn: "En Coimagen Media convertimos tu contenido en un sistema: guiones, embudos y automatización que trabajan todos los días. Agenda tu evaluación gratis en coimagenmedia.com o escríbenos por WhatsApp al 664 476 9223. Y si quieres las 10 estructuras, los más de 30 ganchos clasificados, las 3 plantillas listas y los 6 prompts de IA para guiones en tu propia voz, el Reels Script Factory (PDF de 10 páginas, $11 USD) está en tienda.coimagenmedia.com.",
    },
  ],
  faq: [
    {
      q: { es: "¿Cuánto debe durar un reel?", en: "¿Cuánto debe durar un reel?" },
      a: { es: "La duración ideal del sistema es de 21 a 34 segundos: gancho de 0 a 3 segundos, desarrollo de una sola idea hasta el segundo 40 como máximo y llamada a la acción en los últimos 5 segundos.", en: "La duración ideal del sistema es de 21 a 34 segundos: gancho de 0 a 3 segundos, desarrollo de una sola idea hasta el segundo 40 como máximo y llamada a la acción en los últimos 5 segundos." },
    },
    {
      q: { es: "¿Cuántas acciones debe pedir un reel al final?", en: "¿Cuántas acciones debe pedir un reel al final?" },
      a: { es: "Una sola. Pedir que comenten, que guarden y que vayan al enlace a la vez genera fatiga de decisión y la respuesta por defecto es no hacer nada. Si quieres comentarios, pides un comentario, y luego mides si el guion funcionó para eso.", en: "Una sola. Pedir que comenten, que guarden y que vayan al enlace a la vez genera fatiga de decisión y la respuesta por defecto es no hacer nada. Si quieres comentarios, pides un comentario, y luego mides si el guion funcionó para eso." },
    },
    {
      q: { es: "¿La IA hace que todos los guiones suenen iguales?", en: "¿La IA hace que todos los guiones suenen iguales?" },
      a: { es: "Solo si la usas como un buscador. El Prompt 0 le da a la IA tres textos tuyos para que aprenda tu estilo y te devuelva los cinco rasgos de tu voz; todo guion nuevo se filtra por esos rasgos. Y la regla 80-20 reserva el 20% final para lo humano: la anécdota, el gesto y la improvisación controlada.", en: "Solo si la usas como un buscador. El Prompt 0 le da a la IA tres textos tuyos para que aprenda tu estilo y te devuelva los cinco rasgos de tu voz; todo guion nuevo se filtra por esos rasgos. Y la regla 80-20 reserva el 20% final para lo humano: la anécdota, el gesto y la improvisación controlada." },
    },
  ],
  relatedSlugs: ["ia-pequenas-empresas", "agentes-ia-empresas"],
};

export default function GuionesDeReelsQueDetienenElScroll() {
  return <BlogPostTemplate content={content} />;
}
