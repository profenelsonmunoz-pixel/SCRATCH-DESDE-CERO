// data.js - Datos del Temario y Guías Didácticas (IENSECAN)

// Función auxiliar para generar guías genéricas de los periodos que aún no son detallados
function generateGuide(title, topic1, topic2, topic3) {
  return `
    <h3>¡Hola talento de IENSECAN! 🚀</h3>
    <p>En esta lección llamada <b>"${title}"</b>, vamos a aprender cosas asombrosas para dejar en alto a Candelaria y al Valle.</p>
    <div class="step-box"><b>Paso 1:</b> ${topic1}</div>
    <div class="step-box"><b>Paso 2:</b> ${topic2}</div>
    <div class="step-box"><b>Paso 3:</b> ${topic3}</div>
    <p>¡Recuerda siempre probar tu código haciendo clic en la bandera verde!</p>
  `;
}

const TEMARIO_BASE = [
  // ==========================================
  // PERIODO 1 (SUPER DETALLADO PARA NIÑOS 7-10)
  // ==========================================
  { week: 1, startDate: '26 de Enero', endDate: '01 de Febrero', title: 'Semana de Ambientación', desc: '¡Tu primera misión en Scratch!', type: 'special', period: 1, img: 'assets/cat_welcome.png', emoji: '🌟',
    guide: `
      <h3>¡Hola, futuro súper programador de IENSECAN! 👋</h3>
      <p>Hoy vamos a dar nuestro primer gran paso en el mundo de la programación digital. ¿Sabías que puedes crear tus propios juegos en lugar de solo jugarlos? ¡Pues vamos a lograrlo desde Candelaria, Valle del Cauca, para el mundo entero! 🌎</p>
      
      <div class="kid-step">
        <h4>Paso 1: ¡Enciende motores! 🚀</h4>
        Sitúate frente a tu computador. Abre tu navegador de Internet (Míralo, debe tener el icono de Google Chrome que parece una pelota brillante o el icono rojo y naranja de Edge). En la barrita de direcciones arriba, dile a tu profe que te ayude a escribir esta palabra mágica: <b style="color:blue;">scratch.mit.edu</b>. ¡Presiona 'Enter' como un meteorito cayendo!
      </div>
      
      <div class="kid-step">
        <h4>Paso 2: ¡Entrando a la Fábrica de Juegos! 🏭</h4>
        Ahora que viste la página azul llena de proyectos de todo el mundo. Quiero que busques un botón en la parte de ARRIBA a la izquierda de la pantalla. Es un botoncito mágico que dice <b>"Crear"</b>. Dale un solo clic fuerte. Vas a ver cómo aparece un gatito naranja con una cajita que dice "Creando Proyecto".
      </div>
      
      <div class="kid-step">
        <h4>Paso 3: Conociendo el Escenario 🎭</h4>
        ¡Bienvenido a tu área creativa! Mira a tu derecha. ¿A quién ves ahí en medio de un cuadro blanco gigante? ¡Es el mismísimo Gato de Scratch! Acaba de saludarte. Del lado izquierdo de la pantalla verás muchas pelotas de colores (que después descubriremos que son los bloques de superpoderes del gatito). ¡Agradécele al profe, has creado tu primer proyecto en Scratch!
      </div>
    `
  },
  
  { week: 2, startDate: '02 de Febrero', endDate: '08 de Febrero', title: 'Conoce al Gato', desc: 'Gatos y Cajas de Colores (Interfaz)', type: 'lesson', period: 1, img: 'assets/cat_welcome.png', emoji: '🐱',
    guide: `
      <h3>¡El Tablero Secreto! 🗺️</h3>
      <p>Ayer vimos al gato, y hoy te enseñaré su cuartel general. Todo héroe debe conocer su base secreta antes de ir a una misión. ¡Prepárate estudiante de IENSECAN!</p>
      
      <div class="kid-step">
        <h4>Paso 1: Las Esferas del Poder (Lado Izquierdo) 🟣🔵🟡</h4>
        Fíjate a la extrema izquierda de tu pantalla. Verás unos círculos de colores. Si haces clic en la bola <b style="color:#4C97FF;">Azul</b> se muestran los superpoderes de <b>Movimiento</b>. Si tocas la amarilla verás <b>Eventos</b> (magia) y si tocas la morada verás <b>Apariencia</b> (cambio de ropa). Tócalas como si fuesen botones de un cohete.
      </div>
      
      <div class="kid-step">
        <h4>Paso 2: ¡Hora de Construir! (Centro Blanco) 🏗️</h4>
        Todo el gigante espacio blanco del medio de la pantalla se llama <b>Espacio de Trabajo o Código</b>. Haz clic en la bola <b style="color:#9966FF;">Morada (Apariencia)</b>. Luego, busca el bloque que dice <span class="scratch-block b-looks">Decir Hola! por 2 segundos</span>. Haz clic sobre él pero NO SUELTES el mouse, arrástralo sin soltar el dedo hacia el espacio blanco del centro. ¡Soltemos!
      </div>
      
      <div class="kid-step">
        <h4>Paso 3: ¡Tu Primer Hechizo! ✨</h4>
        Ahora que el bloque <span class="scratch-block b-looks">Decir Hola! por 2 segundos</span> descansa en el área blanca. ¡Dale clic a esa caja bloque exacto ahí mismo! ¿Qué pasó a tu derecha? ¡El gato habló! ¿Lo viste? Acabas de darle una orden a un personaje digital. ¡Eres increíble! 🎉
      </div>
    `
  },
  
  { week: 3, startDate: '09 de Febrero', endDate: '15 de Febrero', title: 'Primeros Pasos', desc: '¡Hagamos que camine!', type: 'lesson', period: 1, img: null, emoji: '🚶‍♂️',
    guide: `
      <h3>¿Gatos estáticos? ¡Jamás! ¡A correr! 🏃‍♂️💨</h3>
      <p>Es hora de decirle a nuestro gato que estire las piernas. En este paso aprenderás cómo funciona el movimiento en la computadora.</p>
      
      <div class="kid-step">
        <h4>Paso 1: El Sombrero Amarillo Mágico 🎩</h4>
        Los bloques no hacen caso solos todo el tiempo, necesitan un comandante. Ve a las bolas de colores del lado izquierdo y elige la <b>Amarilla</b>. Busca uno que tiene una pancita (como una joroba) y dice <span class="scratch-block b-events">Al hacer clic en 🏁</span>. Arrástralo al medio. Este será la cabeza de tu torre de bloques.
      </div>

      <div class="kid-step">
        <h4>Paso 2: Un bloque debajo de otro (Como fichas de Lego) 🧱</h4>
        Ve ahora a la esfera de color <b style="color:#4C97FF;">Azul (Movimiento)</b>. Busca a tu bloque amigo <span class="scratch-block b-motion">mover 10 pasos</span>. Arrástralo hacia donde dejaste a tu bloque amarillo y ponlo justo DEBAJO del amarillo que dice bandera verde. Notarás un sombreado gris. Eso significa que 'hacen clic' como las piezas de juguete. Al encajar, ¡quedarán pegados!
      </div>
      
      <div class="kid-step">
        <h4>Paso 3: ¡El Botón de Despegue Central! 💥</h4>
        Arriba a la derecha del todo (donde está el gato), ¿ves una bandera verde brillante chiquitita? Ese es tu botón de acción general. Al presionarlo con el mouse, todos los grupos de código con el sombrero amarillo mágico se activarán al mismo tiempo. ¡Hazle clic y mira cómo tu gato camina hacia la derecha, alejándose de tu mano!
      </div>
    `
  },
  
  { week: 4, startDate: '16 de Febrero', endDate: '22 de Febrero', title: '¡A saltar!', desc: 'Las flechas invisibles (Coordenadas)', type: 'lesson', period: 1, img: null, emoji: '🐸',
    guide: `
      <h3>El Suelo es Lava: ¡Haz que tu Personaje Salte! 🔥</h3>
      <p>En el mundo real caminamos derecho, pero en las computadoras, ¡usamos dos hilos invisibles que cruzan la pantalla! Uno se llama <b>X</b> (izquierda-derecha) y otro se llama <b>Y</b> (arriba-abajo). Para saltar, debemos movernos por el hilo Y.</p>
      
      <div class="kid-step">
        <h4>Paso 1: Bajar las pulsaciones 💛</h4>
        Repasemos la lección de ayer. Arrastra tu clásico bloque de sombrero <span class="scratch-block b-events">Al hacer clic en 🏁</span> (que está en Eventos redondel Amarillo). 
      </div>

      <div class="kid-step">
        <h4>Paso 2: Apuntando hacia el Cielo (Y Positivo) ⬆️</h4>
        Toca el punto <b style="color:#4C97FF;">Azul Oscuro</b>. Pero en vez de buscar el bloque 'mover 10 pasos' (que eso camina derecho), baja en las opciones azules y busca el que se llama <span class="scratch-block b-motion">cambiar y en 10</span>. "Y" significa ir arriba. Al añadir este bloque azul conectándolo abajo del sombrero... ¡Prueba darle a la bandera verde! Ojo, si le das otro valor como cambiar 'y' a 50 haciendo clic en el número diez, saltará muchísimo más. 
      </div>

      <div class="kid-step">
        <h4>Paso 3: Bajar de Vuelta a la Tierra (Y Negativo) ⬇️</h4>
        Si el Gato queda flotando como un globo de helio y quieres bajarlo, agrega *otro* bloque igual de <span class="scratch-block b-motion">cambiar y en 10</span> debajo de ese. ¡Pero Espera! Haz clic en el número 10 blanco y escribe el símbolo menos (-) primero, es decir, ponlo como "-10" para volver abajo.
        <br><br>
        <div class="kid-important">Secreto Profe IENSECAN: El hilo Y positivo sube al cielo, y si usas el símbolo menos (-) baja hasta el pasto.</div>
      </div>
    `
  },

  { week: 5, startDate: '23 de Febrero', endDate: '01 de Marzo', title: 'Eventos (Teclado)', desc: 'Magia de Teclado', type: 'lesson', period: 1, img: 'assets/cat_welcome.png', emoji: '🏁',
    guide: `
      <h3>¡Conviértelo en un Videojuego con tu Teclado! ⌨️</h3>
      <p>Hasta ahora debíamos picar la bandera verde con el ratón. ¿No te gustaría controlar al gato con los dedos de tu teclado y sentirte un gamer profesional? ¡Yo te enseño cómo, talento Candelareño!</p>
      
      <div class="kid-step">
        <h4>Paso 1: El Sombrero de Espacio 🎩⚡</h4>
        Entra a la esfera Amarilla de **Eventos**. Y en vez de escoger el sombrero que tenía una bandera verde pintada, busca otro sombrero que dice diferente. Es el bloque mágico: <span class="scratch-block b-events">al presionar tecla [espacio ▼]</span>.
      </div>
      
      <div class="kid-step">
        <h4>Paso 2: ¡Ponle la Batería del Salto! 🔋</h4>
        Ahora vete a los azules (**Movimiento**) y saca la pieza de <span class="scratch-block b-motion">cambiar Y por 10</span> y pégala por debajo del bloque amarillo. ¿Recuerdas qué hacía la letra Y de la lección pasada? Correcto, hacía subir al gatucho hacia el cielo. Pero ¿qué es lo diferente?
      </div>
      
      <div class="kid-step">
        <h4>Paso 3: ¡Tu teclado ha cobrado vida! 👾</h4>
        Quita la mano de tu ratón. Mírate el teclado físico en tu mesa de IENSECAN. Presiona la barra gigante del teclado ("Barra espaciadora"). ¿Ves cómo cada vez que hundes el teclado con el dedo gordo, el gato salta? ¡Impresionante! ¡Acabas de conectar algo físico (tu teclado de verdad) con el mundo digital!
      </div>
    `
  },

  { week: 6, startDate: '02 de Marzo', endDate: '08 de Marzo', title: 'Bucles', desc: '¡A girar sin parar!', type: 'lesson', period: 1, img: null, emoji: '🔁',
    guide: `
      <h3>Bucles: La Máquina del Tiempo Infinita ⏳</h3>
      <p>Imagina que quieres que el gatito gire hasta el cansancio. ¿Deberías poner cincuenta mil bloques azules de movimiento uno debajo del otro y quedarte todo el día pegando cuadritos en la pantalla de la sala escolar de IENSECAN? ¡Claro que NO!</p>
      
      <div class="kid-step">
        <h4>Paso 1: El Bloque que Abraza 🤗 (Naranja Claro)</h4>
        Dirígete a la bolita de color <b style="color:#FFAB19;">Naranja Claro (Control)</b>. Ahí encontrarás piezas que nos ayudan a dar reglas avanzadas. Busca una pieza en forma de boca abierta llamada <span class="scratch-block b-control">por siempre ⟳</span>. Ella es mágica, y parece un abrazo hambriento de Pacman. Llévala al medio blanco, y únele encima de su cabeza el bloque <span class="scratch-block b-events">Al hacer clic en 🏁</span>.
      </div>
      
      <div class="kid-step">
        <h4>Paso 2: Darle De Comer al Monstruo-Bucle 🍰</h4>
        A los bucles Naranjas les gusta abrazar el trabajo sucio. Con un bucle de por siempre, dale a la bola Azul de **Movimiento**. Saca un bloque especial llamado <span class="scratch-block b-motion">girar ↻ 15 grados</span> y ponlo con puntería EXTREMA JUSTO DENTRO del agujero del bucle naranja, en su barriga. Para atraparlo. El naranja lo debe rodear por completo.
      </div>
      
      <div class="kid-step">
        <h4>Paso 3: A dar Mareos 😵‍💫</h4>
        ¡Terminaste! Oprime encima de la **Bandera Verde**. ¡Verás como tu personaje no parará de dar giros como un helicóptero jamás hasta que presiones al lado un botón rojo en forma de círculo (que se llama detener)! Las máquinas que hacen cosas sin frenar se basan en este principio llamado Bucles infinitos (Loops). 
      </div>
    `
  },

  { week: 7, startDate: '09 de Marzo', endDate: '15 de Marzo', title: 'Disfraces', desc: 'Sastrería de Scratch', type: 'lesson', period: 1, img: null, emoji: '🎭',
    guide: `
      <h3>¡Cambio de Vestimenta! Las Ilusiones Ópticas 👖</h3>
      <p>Si miras una película animada en cine, no es una sola imagen, ¡son miles de fotos mostradas súper rápido de manera que parece vivo! En Scratch, esos "dibujos que cambian rápido" toman el nombre oficial de **Disfraces**. Haremos caminar al gato como de película.</p>
      
      <div class="kid-step">
        <h4>Paso 1: Bucle sin freno 🛑</h4>
        Enciende tu código colocando a un Capitán Sombrero: <span class="scratch-block b-events">Al hacer clic en 🏁</span>. De las bolas Naranja Clarito, coloca debajo a la fiera abrazadora: <span class="scratch-block b-control">por siempre ⟳</span>.
      </div>
      
      <div class="kid-step">
        <h4>Paso 2: La Ropa en el Armario de Morado 👗</h4>
        Toca ahora la esferita de color Morado 🟣 que decía **"Apariencia"**. Si te fijas bien, hay una pieza pequeña brillante llamada <span class="scratch-block b-looks">siguiente disfraz</span>. Agarra este pedacito y póntelo dentro del vientre gigante del bloque naranja de Por SIEMPRE.
      </div>

      <div class="kid-step">
        <h4>Paso 3: Frena un Poquito el Ritmo 🐢</h4>
        Si presionas de una vez 🏁, notarás que el Gato corre a la velocidad de la luz asustado. Para que se vea natural en IENSECAN, ve a la bola Naranja Clars de **Control** y consigue ahora <span class="scratch-block b-control">esperar 1 segundos</span> y mételo también DENTRO del bucle y debajo del siguiente disfraz. Cámbiale el 1, hazle clic, bórralo y teclea '0.1'. Prueba otra vez y ¡Mira a tu gatito caminar a un ritmo muy real!
      </div>
    `
  },

  { week: 8, startDate: '16 de Marzo', endDate: '22 de Marzo', title: 'Sonidos', desc: 'DJ Candelaria', type: 'lesson', period: 1, img: null, emoji: '🎵',
    guide: `
      <h3>El DJ Entra a la Cabina 🎧</h3>
      <p>Nos divertimos haciendo que el gato corra en pantomima (silencioso total). ¡Es hora de activar los parlantes de IENSECAN y romper un poco de silencio haciéndole bulla al profe!</p>
      
      <div class="kid-step">
        <h4>Paso 1: Buscando Efectos Mágicos 💗</h4>
        Ve hacia los comandos de color ROSA fuerte (magenta) al tocar tu bolita de **Sonido**. Hay una gran cantidad de ruidos allí. Elige un bloque gordito que diga <span class="scratch-block b-sound">tocar sonido Miau y esperar</span>. Arrástralo como todos y suéltalo al espacio en blanco. 
        <br><i>Recomendación: Échale un ojo y pégalo debajo de tu conocido <span class="scratch-block b-events">al presionar tecla [espacio ▼]</span>.</i>
      </div>
      
      <div class="kid-step">
        <h4>Paso 2: La Biblioteca Discoteca 🎼</h4>
        Arriba casi arriba de todo y en la esquina superior izquierda a la par de la ventana Código hay 3 botones grises llamados (Código, Disfraces, **Sonidos**). Púlsale a la hoja que se llama SONIDOS que parece un megáfono pequeño. Allí descubrirás un universo tremendo. Dale clic al botoncito morado grande de la esquina inferior izquierda que es como un altavoz chiquitito con el signo más (+), donde podrás elegir bocinas, aplausos, risas de Candelaria o platillos musicales. 
      </div>
      
      <div class="kid-step">
        <h4>Paso 3: Prueba el Alboroto 😄</h4>
        Agrega un sonido loquísimo y vuelve dando clic izquierdo superior a la ventajita de tu "Código" que es tu pizarron de lego. Verás que en aquel bloque Miau viejo que jalamos del balde Rosa ahora dice el sonido nuevo. Hazte una música dándole al ESPACIO del teclado con ritmos para animar la sesión.
      </div>
    `
  },

  { week: 9, startDate: '23 de Marzo', endDate: '29 de Marzo', title: 'Fondos', desc: 'Cambiando de País en Segundos', type: 'lesson', period: 1, img: null, emoji: '🖼️',
    guide: `
      <h3>Teletransportación Cuántica de Pantalla 🌍🚀</h3>
      <p>¿No te aburre un poco el muro liso y blanco del fondo mientras nuestro colega felino baila? Ojalá y pudieses pasarlo ¡del valle a un partido de baloncesto y luego enviarlo a una montaña nevada por Canadá! Vamos allá.</p>
      
      <div class="kid-step">
        <h4>Paso 1: La Carpeta Turística 🎒</h4>
        Moviendo el ratón hacia adelante, mira a la derecha completamente inferior tu pantallita. Pasando el gatito pequeño hay un símbolo extraño en verde o azul oscuro (según tu navegador) de un paisaje pintado chiquitillo con una montaña 🏞️ y el símbolo +. Al pinchar fuerte ese botoncillo de ahí vas a abrir tu **Librería de Escenarios y Fondos GIGANTESCOS**.
      </div>
      
      <div class="kid-step">
        <h4>Paso 2: Descargar los Destinos Vacacionales 🛫</h4>
        Haz clic en una cancha de Baloncesto (Basketball 1) genial que encuentres, por favor. Cuando termine de cargar el mapa, repite la operación del paso 1 de nuevo, ve a la biblioteca y luego te descargas una pista de Castillo Gótico (Castle). ¡Boom! Ya tienes dos países cargados para tu protagonista.
      </div>
      
      <div class="kid-step">
        <h4>Paso 3: Máster de Edición de Televisión 📺</h4>
        Agarra de Eventos amarillitos a la gema llamada <span class="scratch-block b-events">al hcer clic en 🏁</span>. Acto seguido te vas a la canica Apariencia Violeta y arrastrarás sin pensarlo dos veces y unirás fuertemente este super bloque: <span class="scratch-block b-looks">siguiente fondo</span>.
        Un pequeño truco Naranja de control: agrégale la enredadera mortal <span class="scratch-block b-control">por siempre ⟳</span>, con la pinza amarilla Naranja de Esperar 1 segundo por siaca para el retardo y métele tu cuadradito morado Violeta dentro del loop. Mira el teatro...
      </div>
    `
  },

  { week: 10, startDate: '06 de Abril', endDate: '12 de Abril', title: 'Hablemos Diciendo Cosas', desc: 'Sálvame Globos', type: 'lesson', period: 1, img: null, emoji: '💬',
    guide: `
      <h3>Globos de Texto... Como tus Revistas Favoritas 📰💬</h3>
      <p>Es una locura saber que si nuestro personajillo va en silencio es una pantomima eterna. Pero claro en IENSECAN enseñamos que las historietas hablan en burbujas blancas flotando arriba de las cabezas y así es Scratch.</p>
      
      <div class="kid-step">
        <h4>Paso 1: Globos Permanentes 🫧</h4>
        Arrastra de la cajuela violetita el ladrillo que te presenté del inicio que se llamaba <span class="scratch-block b-looks">Decir ¡Hola! por 2 segundos</span>. Fíjatelo justo abajo tu pieza del clic Amarillo (<span class="scratch-block b-events">Al presionar la 🏁</span>). Borra el mensaje "hola", presiona con cuidado en ese óvalo y redacta usando tu tablero negro: "Soy del equipo élite de Candelaria!". De este modo le darás identidad y saludo patriótico. 
      </div>
      
      <div class="kid-step">
        <h4>Paso 2: Agrega Amigos a la Sala 🐧</h4>
        Si miraras a la esquina derecha inferior abajo del cuadrado del gatito a una carita redonda con orejitas 🐱 y con el símbolo +, dale click!. ¡Esta vez sí abre una librería espectacular! Sube al murciélago o a un cangrejo bailarín picándole dos veces. Tienes ahora en ese rinconcito de miniaturas a UN GATO y a UN CANGREJO al mismo tiempo. Al tocar en la carilla del que acabas de instalar del cangrejín y programarle para que le devuelva "Mucho gusto!" de la repisa Violetita usando tu sombrero amarillo <span class="scratch-block b-events">Al hacer clic 🏁</span> y que cuente "¡Y o me llamo Don Cangrejo!". 
      </div>
      
      <div class="kid-step">
        <h4>Paso 3: Respetando Turnos para Conversar ⌚</h4>
        De seguro que si arrancas de la flecha del inicio todos explotan platicando a la vez y la computadora dice disparates a la misma frecuencia solapándose entre sus voces escritas. ¡Añádele un Bloquecito <span class="scratch-block b-control">esperar 3 segs</span> del panel Naranjadito a la vida del Cangrejo antes del que "dice el saludo" Violeta y mira qué natural entablan diálogos como dos hermanos bien portados. ¡Bravisimo!
      </div>
    `
  },

  { week: 11, startDate: '13 de Abril', endDate: '19 de Abril', title: 'Mini Proyecto (Cuento Candelaria)', desc: 'Un Cortometraje Genial', type: 'lesson', period: 1, img: 'assets/cat_welcome.png', emoji: '📖',
    guide: `
      <h3>¡Tu Cortometraje Animado Estelar! 🏆🏰</h3>
      <p>Lo juro, con todo lo que te he enseñado sobre Escenarios, Fondos de Magia 🏔️, Bucles para caminar, Efectitos sonoros 🎙️, Globitos de Diálogo de historietas 💬, Eventos ⚡️... ¡Estás capacitado ahora que vas terminando este parcial para rodar un cortometraje al estilo de Hollywood en IENSECAN!</p>
      
      <div class="kid-step">
        <h4>Paso 1: Organiza tu "Reparto de la Película" 🦸</h4>
        Borrar el personaje por defecto a veces ayuda. Presiona aquel Tachíto de papelera 🗑️ encima del gatico pequeño si no le encuentras rol, y entra a inventar tus protas del mundo mágico. Te sugiero importar a un Dragón o Dinosaurio malhumorado de una galaxia y a la Valiente maga o Astronautita para ser los protagonistas desde la biblioteca (carita con "+"). 
      </div>
      
      <div class="kid-step">
        <h4>Paso 2: Vestir el Escenario del Teatro 🎥</h4>
        Te encargo colocar a la Maga o tu elegido humano a la izquierda de toda la pantalla usando la crucita. Al Dino que vas a montar ubícalo hasta la estricta derecha. Así van a quedar encarcelando al malo y héroe de este cuento. Toca ahora ir a darle a la parte del "+paisaje" abajo del lado inferior y elegir por Dios algo tremendo, digamos "Nebulosa" en vez de color blanquito escolar vacío.
      </div>
      
      <div class="kid-step">
        <h4>Paso 3: Guión de Película: El Diálogo y Efectos de Magia Musical 📽️🍿</h4>
        Haremos que el Héroe Humano avance diez pasos. Use un sombrero, un bloque celeste caminador. Y hable luego desde una canilla Violeta: "Decir [Vengo a vencerte dragón del cosmos!!] por tres seg". Seguido a que hable nuestro humano ve de inmediato a las opciones de tu Dragon y métale un Esperar de cuatro segundos (Para que le escuche respetuoso). Después ordénele una acción "RUGIR!" con parlantito de Bloque Rosadito (<span class="scratch-block b-sound">tocar grujido fuerte miau no mágico</span>) y péguele con bloque Naranjilla de giro y de paso "cambiar tamaño al negativo -5" para asustar retrocediendo al malo. Presenta la animación estirando las piernas de orgullo ante toda la clase del colegio.
      </div>
    `
  },

  { week: 12, startDate: '20 de Abril', endDate: '26 de Abril', title: 'Semana de Nivelación', desc: '¡Frenos, Preguntas y Repasos!', type: 'review', period: 1, img: null, emoji: '🔄',
    guide: `
      <h3>Momento de frenar y tomar agua, Súper Héroe Digital 🛡️💧</h3>
      <p>Nos vamos moviendo veloz enseñándote todo y tu mente arde de maravillosas reglas lógicas. Esta la semana va dedicadísima del curso a sentarte frente al profe en el asiento y decirte al profe, "¿Por dónde repito algo o profe qué significa Bucle o Bandera?" y soltemos tus dudas en un papel. Practica tu cortometraje de paso para mostrarles lo brutal del código.</p> 
    ` 
  },
  
  { week: 13, startDate: '27 de Abril', endDate: '03 de Mayo', title: 'Retroalimentación', desc: 'Compartiendo nuestros Cuentos', type: 'feedback', period: 1, img: null, emoji: '🗣️',
    guide: `
      <h3>Festival Internacional De Videojuegos Escolares IENSECAN 🎬📺</h3>
      <p>Acomódate en tu silla... Hoy te dedicaremos un segundo a aplaudirte en público, muchacho con talento y veremos todos mirando a donde tú pongas la pantalla, al Dinosaurio galáctico o ese cuento animado asombroso que has desarrollado para que tú nos presentes el nivel 11 que has creado. ¡Prepárate una bebida, ríe con tus compañeros al mirar todos los otros cuentos locos que el resto de tu aula de salón haya sacado e intenta ver a la programación con cara de fiesta divertida! Aprender compartiendo ideas visuales entre amigos valiosísimos de tu valle del cauca de salón ¡Hará el crecimiento brutal!</p> 
    ` 
  },
  
  { week: 14, startDate: '04 de Mayo', endDate: '10 de Mayo', title: 'Evaluación Misión P1', desc: '¡Aprobar la academia Mágica!', type: 'eval', period: 1, img: 'assets/cat_welcome.png', emoji: '🏆',
    guide: `
      <h3>¡Demuéstrale De Qué Estás Hecho! Tu Prueba de Honor 🥇🔥</h3>
      <p>Hemos de clausurar esta maravillosa y colosal aventura inicial de este espectacular primer periodo escolar de tu IENSECAN, de manera mágica. Realizaremos de inmediato una "misión y ejercicio práctico". Tendrás que elaborar lo siguiente totalmente a ciegas para ver tus poderes de lógica brillar.</p>
      
      <div class="kid-step">
        <h4>El Ejercicio A Completar Total de Habilidades de Primer Periodo🧠</h4>
        **La tarea:** Un personaje asombroso y original de Scratch se encuentra atascado en el fondo llamado "Jungle." A penas yo toco en tu Mouse mi Bandera verde de inicio global, suplicará en tu bloque violeta diciendo ("Me atraparon ayuda!") y acto seguidito soltará el lamento un ruido terrorífico desde sus Bloques Sonoros Magnéticos. Tu profe evaluará que la secuencia de estos mandos mágicos sean coherentes. Al culminar esto estarás al un cien por un ciento total clasificado para pasar con nosotros al Segundo Período donde entraremos duro en "Atrapar Cosas Jugosas y Crear Puntos para ganar el videojuego", nos veremos ahí Campeón!!
      </div>
    ` 
  },
  
  // ==========================================
  // PERIODO 2 (SUPER DETALLADO PARA NIÑOS 7-10)
  // ==========================================
  { week: 15, startDate: '11 de Mayo', endDate: '17 de Mayo', title: 'Variables', desc: 'Guardando puntos', type: 'lesson', period: 2, img: 'assets/concept_variables.png', emoji: '📦', 
    guide: `
      <h3>¡Tu Primera Mochila Digital (Variables)! 🎒</h3>
      <p>¡Bienvenido al Segundo Periodo, programador de IENSECAN! Imagina que estás atrapando manzanas en un videojuego. Necesitas un lugar para contar cuántas tienes. A esa 'caja de números' en la programación le decimos <b>Variable</b>.</p>
      
      <div class="kid-step">
        <h4>Paso 1: Fabricar la Caja 📦</h4>
        Ve a los círculos naranjas de la izquierda que dice <b style="color:#FF8C1A;">Variables</b>. Haz clic en el botón plateado que dice "Crear una variable". Te pedirá un nombre, escríbele con el teclado: "<b>Puntos</b>" y dale Aceptar.
      </div>
      
      <div class="kid-step">
        <h4>Paso 2: Ganando el Primer Punto 🥇</h4>
        Saca el bloque de Eventos <span class="scratch-block b-events">al presionar tecla [espacio]</span>. Debajo, ponle el bloque naranja mágico que acabas de ganar llamado <span class="scratch-block b-vars">sumar a [Puntos] 1</span>. Cada vez que tomes aire y presiones espacio... ¡Tu marcador en la pantalla subirá solo!
      </div>
    `
  },
  
  { week: 16, startDate: '18 de Mayo', endDate: '24 de Mayo', title: 'Clics', desc: 'Eventos de ratón', type: 'lesson', period: 2, img: null, emoji: '🖱️', 
    guide: `
      <h3>¡El Ratón Volador! 🐁⚡</h3>
      <p>Ya dominas el teclado, pero ¿sabías que puedes programar a los personajes para que reaccionen cuando los tocas directamente con la flechita de tu ratón o mousepad?</p>
      
      <div class="kid-step">
        <h4>Paso 1: Un Sombrero Nuevo 🎩</h4>
        Ve a los Amarillos de <b style="color:#FFBF00;">Eventos</b> pero busca uno que dice <span class="scratch-block b-events">al hacer clic en este objeto</span>. ¡Este es el interruptor táctil secreto!
      </div>
      
      <div class="kid-step">
        <h4>Paso 2: Magia de Cambio 🌟</h4>
        Pega abajo un bloque de <b style="color:#9966FF;">Apariencia</b> morado que se llame <span class="scratch-block b-looks">sumar al efecto [color] 25</span>. ¡Haz clic encima del Gato! ¡Parecerá una bola de disco de una fiesta!
      </div>
    `
  },
  
  { week: 17, startDate: '25 de Mayo', endDate: '31 de Mayo', title: 'Condicional SI', desc: 'Tomando decisiones', type: 'lesson', period: 2, img: null, emoji: '🤔', 
    guide: `
      <h3>La Regla de Oro: ¡SI pasa esto, ENTONCES hago aquello! 🛡️</h3>
      <p>Los humanos tomamos decisiones todo el tiempo: "SI llueve, ENTONCES abro mi paraguas". ¡Vamos a darle ese cerebro lógico a tu personaje en Candelaria!</p>
      
      <div class="kid-step">
        <h4>Paso 1: El Bloque Boca-Caimán 🐊</h4>
        Abre el color <b style="color:#FFAB19;">Naranja Claro (Control)</b>. Saca el bloque que tiene forma de letra E mordida, se llama <span class="scratch-block b-control">si... entonces</span>. Ponlo debajo de tu clásico <span class="scratch-block b-events">al hacer clic en 🏁</span>.
      </div>
      
      <div class="kid-step">
        <h4>Paso 2: La Pregunta del Millón ❓</h4>
        Mira que entre el 'si' y el 'entonces' hay un agujero en forma de diamante (hexágono). ¡Ahí meteremos una super pregunta la próxima semana! Por ahora, mételo en un <span class="scratch-block b-control">por siempre</span> para que nunca se duerma.
      </div>
    `
  },

  { week: 18, startDate: '01 de Junio', endDate: '07 de Junio', title: 'Sensores', desc: 'Tocando colores', type: 'lesson', period: 2, img: null, emoji: '👀', 
    guide: `
      <h3>¡Dale Ojos y Tacto a tu Personaje! 👀👉</h3>
      <p>Tu personaje no puede ver la pantalla como tú, ¡pero tiene súper sentidos programables! Hoy le enseñaremos a 'sentir' si está tocando el fuego o un premio.</p>
      
      <div class="kid-step">
        <h4>Paso 1: El Rompecabezas Celeste 🧩</h4>
        Ve al color <b style="color:#5CB1D6;">Celeste de Sensores</b>. Agarra ese bloque puntiagudo de diamante llamado <span class="scratch-block b-sensing">¿tocando el puntero del ratón?</span>.
      </div>
      
      <div class="kid-step">
        <h4>Paso 2: Resolviendo la Decisión 🤔</h4>
        ¿Recuerdas el bloque <span class="scratch-block b-control">si... entonces</span> de la semana pasada? Mete esta pieza azul celeste en su agujero con forma de diamante. Y adentro de la boca, ponle un morado de <span class="scratch-block b-looks">Decir [¡Ay! Me haces cosquillas!]</span>. Dale bandera verde y tócale con el cursor.
      </div>
    `
  },

  { week: 19, startDate: '08 de Junio', endDate: '14 de Junio', title: 'Movimiento 2', desc: 'Deslizamiento', type: 'lesson', period: 2, img: null, emoji: '⛸️', 
    guide: `
      <h3>Pista de Patinaje sobre Hielo ⛸️❄️</h3>
      <p>Teletransportar a nuestro héroe de golpe marea. Haremos que se mueva suavemente de un lado al otro, como un patinador en una enorme pista resbalosa.</p>
      
      <div class="kid-step">
        <h4>Paso 1: El Deslizador Mágico 💨</h4>
        En la bola de <b style="color:#4C97FF;">Movimiento (Azul)</b>, saca el bloque largote: <span class="scratch-block b-motion">deslizar en 1 segs a x: 100 y: 0</span>.
      </div>
      
      <div class="kid-step">
        <h4>Paso 2: El Juego del Atrape 👐</h4>
        Cambia esos números mágicos tocando el triangulito, y dile que se deslice en 1 segundo a <span class="scratch-block b-motion">posición aleatoria</span>. Mételo en un bucle <span class="scratch-block b-control">por siempre</span> y arranca la máquina verde. ¡Intenta atraparlo con tu ratón en la escuela, no podrás!
      </div>
    `
  },

  { week: 20, startDate: '15 de Junio', endDate: '21 de Junio', title: 'Mensajes', desc: 'Enviar señales invisibles', type: 'lesson', period: 2, img: 'assets/cat_welcome.png', emoji: '✉️', 
    guide: `
      <h3>Walkie-Talkies Secretos! 📻🤫</h3>
      <p>Para hacer juegos grandes, a veces un árbol tiene que decirle a una nube: "¡Oye, ya me golpearon!" sin que nadie más los oiga en la sala de sistemas. Para eso usamos las Ondas de Radio Mágicas: ¡Los Mensajes!</p>
      
      <div class="kid-step">
        <h4>Paso 1: Transmitiendo el Chisme 📣</h4>
        En los sombreros amarillos de <b style="color:#FFBF00;">Eventos</b>, encontrarás una pieza suelta que dice <span class="scratch-block b-events">enviar [mensaje1]</span>. Cuando el código pasa por acá, grita sin sonido en toda la computadora. Cámbiale el nombre por "Ataque".
      </div>
      
      <div class="kid-step">
        <h4>Paso 2: Haz clic para gritar ⚡</h4>
        Pon tu comando táctil <span class="scratch-block b-events">al hacer clic en este objeto</span> JUSTO ENSIMA de tu gritador "Ataque". ¡Ahora cada vez que toques al gatucho, él lanzará la señal roja al mundo digital!
      </div>
    `
  },

  { week: 21, startDate: '22 de Junio', endDate: '28 de Junio', title: 'Sincronizar Mensajes', desc: 'Oídos Limpios', type: 'lesson', period: 2, img: null, emoji: '📡', 
    guide: `
      <h3>Escuchando Señales en la Oscuridad 🦉📡</h3>
      <p>Ayer nuestro Gato enviaba su Mensaje Secreto Radial. ¿De qué sirve usar un radio si nadie tiene el Walkie-Talkie encendido para escucharlo? Vamos a encenderlo.</p>
      
      <div class="kid-step">
        <h4>Paso 1: Crea un Oyente Candelareño 🐕</h4>
        Busca otro personaje nuevo en el botón de agregar "+". ¡Un perro por ejemplo! 
      </div>
      
      <div class="kid-step">
        <h4>Paso 2: La Antena Receptora 📻</h4>
        Ya con el perro seleccionado, mira que su tablero está limpio. Conéctalo poniendo el gorrito milagroso amarillo: <span class="scratch-block b-events">al recibir [Ataque]</span>. 
      </div>

      <div class="kid-step">
        <h4>Paso 3: Un Susto Tremendo 🙀</h4>
        Debajo de antena receptora de radio, pon a tu perro a girar de locura o decir ¡Guau! en un bloque morado. ¡Toca al Gato, mira como el perro reacciona desde muy lejor al escuchar su señal secreta! El Multijugador sincronizado arranca así.
      </div>
    `
  },

  { week: 22, startDate: '20 de Julio', endDate: '26 de Julio', title: 'Dibujando y Paint', desc: 'El Arte De Scratch', type: 'lesson', period: 2, img: null, emoji: '🎨', 
    guide: `
      <h3>¡Tu Pantalla es un Lienzo de Picasso! 🖌️🎆</h3>
      <p>Nos vamos de artistas en Scratch. Sabías que puedes convertir a tu mascota en un rotulador gigante y colorido que marque a donde pise?</p>
      
      <div class="kid-step">
        <h4>Paso 1: El Baúl Mágico Escondido 🧰</h4>
        En tu zona de bolitas de colores (izquierda), baja del todo hasta un cuadrito azulito que tiene dos cuadritos y un +. Dale Clic. Escoge la caja "Lápiz". Acaban de nacer unos colores verdes extraños llamados "Lápiz".
      </div>
      
      <div class="kid-step">
        <h4>Paso 2: Bajar la Pluma sobre el Papel 🖊️</h4>
        Pon un comando amarillo de inicio. Luego saca el bloque grandísimo verde oscuro: <span class="scratch-block" style="background-color:#0FBD8C;">bajar lápiz</span>. Pon a tu personajón a dar pasos por montón u arrastra tu dedo hacia varios lados con el 'deslizar aleatorio' azul.
        <br><br>
        <div class="kid-important">Secreto Profe: Usa Bloques Verdes oscuros para "Subir el lápiz" si no quieres rayar, "Bajar el lápiz" para iniciar tu garabato en colores y Borrar si quieres limpiar.</div>
      </div>
    `
  },

  { week: 23, startDate: '27 de Julio', endDate: '02 de Agosto', title: 'Clones', desc: 'El Batallón Duplicador', type: 'lesson', period: 2, img: null, emoji: '🤖', 
    guide: `
      <h3>El Ejército de los Cien Clones 🥷⚔️</h3>
      <p>Imagina un juego de atrapar manzanas... ¿Harías en tu biblioteca de abajo 100 manzanas copiando una por una, ensuciando todo? ¡Cansadísimo! Usaremos un truco llamado Clonación como las células.</p>
      
      <div class="kid-step">
        <h4>Paso 1: El Sello de Nacimiento Naranja 🟢</h4>
        Pon tu bandera inicial. De los naranjas abrazadores <b style="color:#FFAB19;">Control</b> tira del gran comando suelto <span class="scratch-block b-control">crear clon de [mí mismo]</span> en un ciclo por siempre (no olvides poner <span class="scratch-block b-control">esperar 1</span>).
      </div>
      
      <div class="kid-step">
        <h4>Paso 2: ¿Y qué hago cuando Nazco? 🐣</h4>
        ¡Magia extrema! Desentierra un "sombrerito" naranjado cuadrado llamado: <span class="scratch-block b-control">al comenzar como clon</span>. Debajo de esta corona cítrica le dirás qué hacen los hijos. "Hijo Mío deslízate para siempre hacia arriba azulado...". ¡Presiona verde y mira llover gotas al cielo! Magia IENSECAN presente.
      </div>
    `
  },

  { week: 24, startDate: '03 de Agosto', endDate: '09 de Agosto', title: 'Juego Atrapar', desc: 'Tu Gran Juegote', type: 'lesson', period: 2, img: 'assets/concept_variables.png', emoji: '🍎', 
    guide: `
      <h3>¡Tu Primer Videojuego Comercial! 🕹️🕹️</h3>
      <p>Vamos a atar y pegar con un super pegamento mental TODO EL PERIODO 2: <b>Variables de puntaje, flechas, condicionales SI, y lluvia de Clones</b>.</p>
      
      <div class="kid-step">
        <h4>Paso 1: La Canasta y las Flechas 🧺</h4>
        Usa flechas Tecla Derecha para sumar X 'movimientos azules'. Y Tecla Izquierda para Restar X azules. Cesta lista.
      </div>
      
      <div class="kid-step">
        <h4>Paso 2: Lluvia de Manzanas Clones 🍏</h4>
        Crea Clones manzanas que bajen Y (con un menos azul Y). SI tu cesta 'toca' el sensor celestón a la Manzana... entonces Variable <span class="scratch-block b-vars">sumar a Puntos 1</span> y al instante eliminalo <span class="scratch-block b-control">eliminar este clon</span>.
      </div>
      <p>Estás a punto de gritar frente al PC escolar de alegría. ¡Estás armado como Videojugador programado Colombiano campeón mundial.</p>
    `
  },

  { week: 25, startDate: '10 de Agosto', endDate: '16 de Agosto', title: 'Nivelación P2', desc: 'Refuerzo de Bug y Manzana', type: 'review', period: 2, img: null, emoji: '🔄', 
    guide: `
      <h3>La Semana Clínica del Código Escolar 🏥🩺</h3>
      <p>Si la lluvia se atasca o el puntaje suma 50 de un golpe sin querer, ¡Tranquilo, a eso le llamamos BUGS (Gusanos informáticos locos)!</p>
      <div class="kid-step">
        <b>¿Que haremos hoy?</b> Sentarte con el profesor, verificar tu caja de Puntos de Variables en Cero cuando des 'Bandera Verde' y limpiar rastrojos de código Naranjo sueltos. Respira un momento grandullón.
      </div>
    `
  },

  { week: 26, startDate: '17 de Agosto', endDate: '23 de Agosto', title: 'Retroalimentación Candelaria', desc: 'Dejalo todo listo.', type: 'feedback', period: 2, img: null, emoji: '🗣️', 
    guide: `
      <h3>Torneo de Atrapar Manzanas de IENSECAN 🍏🏆</h3>
      <p>Guarda los ratones y cruza los dedos. Vamos a levantarte de tu silla a los pupitres de tus vecinos de pasillo. Y juégale a <b>TODOS LOS JUEGOS CREADOS</b> por el aula completa.</p>
      <p>Vota por el amiguito que le puso cara a sus cestas y ríe como de locos perdiendo Puntos Variables contra paredes complicadísimas!. En Scratch, "Comentar y Robar inspiraciones sanas es ser Genial".</p>
    `
  },

  { week: 27, startDate: '24 de Agosto', endDate: '30 de Agosto', title: 'Evaluación', desc: 'Juego Limpio sin bug.', type: 'eval', period: 2, img: null, emoji: '🏆', 
    guide: `
      <h3>Batalla Final de Segunda Temporada ⚔️🛡️</h3>
      <p>Se te exige frente al jurado profesoral de IENSECAN realizar lo Siguiente sin sudar (porque para tí ya esto es agüita suave):</p>
      
      <div class="kid-step">
        <h4>Práctica General a Demostrar 🕵️</h4>
        1. Crea un Bucle infinito para sumar 1 punto por segundo a un Reloj.<br>
        2. Toca la pantalla y reinícialo a cero.<br>
        3. Pon 3 Clones moviéndose locos.<br>
        <br>
        Felicidades Campeón por terminarte esta mitad suprema. Te asiente el paso a la última gran cruzada, el PERIODO TRES y FINAL donde todo será Gravedades completas y jefes! 🥳
      </div>
    `
  },

  // ==========================================
  // PERIODO 3 (SUPER DETALLADO PARA NIÑOS 7-10)
  // ==========================================
  { week: 28, startDate: '31 de Agosto', endDate: '06 de Septiembre', title: 'Clones 2', desc: 'Lógica avanzada', type: 'lesson', period: 3, img: null, emoji: '👽', 
    guide: `
      <h3>Invasión Alienígena: Más Clones 🛸👾</h3>
      <p>Bienvenido al Tercer Periodo, ¡la liga mayor de programación en Candelaria! Vamos a llevar al ejército de clones a otro nivel haciendo que los enemigos nazcan desde lugares sorpresa.</p>
      
      <div class="kid-step">
        <h4>Paso 1: ¿De dónde saldrán? 📍</h4>
        Cuando uses el bloque naranja <span class="scratch-block b-control">al comenzar como clon</span>, no dejes que nazcan en el centro. Usa debajo un bolque azul <span class="scratch-block b-motion">ir a x: [Aleatorio] y: 180</span>. ¡Lloverán naves desde todo el techo de tu pantalla!
      </div>
      
      <div class="kid-step">
        <h4>Paso 2: Explotando las Naves 💥</h4>
        A los clones también les puedes aplicar daño. Si la nave toca tu "Láser", usa el temido bloque <span class="scratch-block b-control">eliminar este clon</span>, para que desaparezcan de la galaxia.
      </div>
    `
  },
  
  { week: 29, startDate: '07 de Septiembre', endDate: '13 de Septiembre', title: 'Gravedad', desc: 'Caída libre', type: 'lesson', period: 3, img: null, emoji: '🍎', 
    guide: `
      <h3>La Ley de la Gravedad: Todo lo que sube... 🌎🍎</h3>
      <p>En el mundo real, si saltas, la gravedad te jala rápido al piso, ¿verdad? ¡Vamos a programar para que tu personaje de Scratch obedezca las leyes de la física y no flote!</p>
      
      <div class="kid-step">
        <h4>Paso 1: La Fuerza de Gravedad 🏋️</h4>
        Crea una Variable naranja y llámala <b>Velocidad Y</b>. Cuando el juego empiece, búscale un bucle por siempre y dile: <span class="scratch-block b-vars">sumar a [Velocidad Y] -1</span>. (¡El -1 jala para abajo!)
      </div>
      
      <div class="kid-step">
        <h4>Paso 2: La Caída Libre 🪂</h4>
        Ahora vete a los azules y dile: <span class="scratch-block b-motion">cambiar y por (Velocidad Y)</span>. Si lo unes todo... ¡Tu gato caerá cada vez más y más rápido como una piedra! 
      </div>
    `
  },
  
  { week: 30, startDate: '14 de Septiembre', endDate: '20 de Septiembre', title: 'Colisiones', desc: 'Física de bordes', type: 'lesson', period: 3, img: null, emoji: '💥', 
    guide: `
      <h3>Paredes de Concreto: Colisiones 🧱🏃</h3>
      <p>Nuestro Gato cae por la gravedad, ¡pero ahora atraviesa el suelo y se cae de tu Monitor! Enseñémosle a "chocar" y detenerse.</p>
      
      <div class="kid-step">
        <h4>Paso 1: Sintiendo el Suelo 🦶</h4>
        Dentro del bucle de Gravedad, mete un Condicional (SI) Naranja. En su pregunta del diamante usa un Sensor Celeste: <span class="scratch-block b-sensing">¿tocando el color [Verde del pasto]?</span>.
      </div>
      
      <div class="kid-step">
        <h4>Paso 2: Frenando de Golpe 🛑</h4>
        Si SÍ toca el pasto, debes obligarlo a subir un poquitico para que no se hunda. Usa <span class="scratch-block b-motion">cambiar y en 1</span> hasta que ya no lo toque, y además pon la Variable "Velocidad Y" a Cero (¡Porque en el piso ya no estás cayendo!).
      </div>
    `
  },

  { week: 31, startDate: '21 de Septiembre', endDate: '27 de Septiembre', title: 'Pantallas Menú', desc: 'Tu Press Start!', type: 'lesson', period: 3, img: 'assets/cat_welcome.png', emoji: '📺', 
    guide: `
      <h3>¡Botón de "PRESS START" para tu Juego! 🕹️🚥</h3>
      <p>Todo juego gigante de consola tiene una pantalla de inicio donde suena musiquita y hay un botón grande de "Jugar". Haremos la nuestra.</p>
      
      <div class="kid-step">
        <h4>Paso 1: Dibuja tu Botonazo 🟩</h4>
        Pinta tú mismo un objeto nuevo con un gran rectángulo verde y la palabra "JUGAR".
      </div>
      
      <div class="kid-step">
        <h4>Paso 2: El Mensaje de Arranque 🏁</h4>
        Usa el sombrero amarillo <span class="scratch-block b-events">al hacer clic en este objeto</span>. Añádele un bloque <span class="scratch-block b-events">enviar [Empezar_Juego]</span> e inmediatamente debajo usa un bloque morado <span class="scratch-block b-looks">esconder</span> para que el botón desaparezca.
      </div>
      <div class="kid-important">¡Todos tus enemigos, fondos oscuros y trampas no deben aparecer hasta que escuchen el mensaje 'Empezar_Juego'!</div>
    `
  },

  { week: 32, startDate: '28 de Septiembre', endDate: '04 de Octubre', title: 'Listas', desc: 'Inventarios Magicos.', type: 'lesson', period: 3, img: null, emoji: '📜', 
    guide: `
      <h3>Cuaderno de Inventario (Listas) 🎒📝</h3>
      <p>Las Variables normales sólo guardan 1 número. Pero... ¿Y si tu guerrero necesita guardar espadas, llaves, monedas y pociones al mismo tiempo? ¡Llegan las Listas Naranjas!</p>
      
      <div class="kid-step">
        <h4>Paso 1: Fabricar el Cuaderno 📓</h4>
        Ve a las <b style="color:#FF8C1A;">Variables</b> y abajo hay un botón "Crear una Lista". Llámala "Mochila". Verás que sale un cuadrado largo vacío en la pantalla.
      </div>
      
      <div class="kid-step">
        <h4>Paso 2: Recogiendo las Llaves 🗝️</h4>
        Dile a tu Llave Dorada que si el Gato la toca, se esconda, pero que ejecute este bloque maravilloso: <span class="scratch-block b-vars">añadir [Llave de Oro] a Mochila</span>. ¡Mira tu mochila en la pantalla! ¡El artículo quedó guardado igualito que en Minecraft!
      </div>
    `
  },

  { week: 33, startDate: '12 de Octubre', endDate: '18 de Octubre', title: 'Reloj y Cronómetro', desc: 'Bomba y Agonía al límite de segundos', type: 'lesson', period: 3, img: null, emoji: '⏱️', 
    guide: `
      <h3>¡Tic, Tac! La Bomba de Tiempo 💣⏱️</h3>
      <p>Jugar a atrapar pollitos es relajante. Jugar a atrapar pollitos mientras una bomba de 30 segundos va bajando... ¡ES ADRENALINA PURA!</p>
      
      <div class="kid-step">
        <h4>Paso 1: El Sensor de Tiempo ⏳</h4>
        En los <b style="color:#5CB1D6;">Sensores Celestes</b>, existe un óvalo misterioso que guarda la hora con nombre <b>(cronómetro)</b>. Él sabe exactamente cuánto tiempo llevas jugando.
      </div>
      
      <div class="kid-step">
        <h4>Paso 2: GAME OVER por Tiempo ⏰</h4>
        Usa un 'Si... entonces' preguntando con operadores verdes: Si <b>(cronómetro) > 30</b>. Y dentro del tiburón pon la temible carta final: <span class="scratch-block b-control">detener [todos]</span>. ¡Música tensa y a correr!
      </div>
    `
  },

  { week: 34, startDate: '19 de Octubre', endDate: '25 de Octubre', title: 'Cámara Sensora Perseguidores', desc: 'Huyendo Ojos Perseguidos Fantasmal', type: 'lesson', period: 3, img: null, emoji: '🧟‍♂️', 
    guide: `
      <h3>El Monstruo Que Nunca Deja De Mirarte 👀👻</h3>
      <p>¿Qué da más miedo que un fantasma? ¡Un fantasma cibernético que constantemente mueve la cabeza persiguiéndote por toda la pantalla!</p>
      
      <div class="kid-step">
        <h4>Paso 1: Apuntando la Mirada 🎯</h4>
        Abre el código de un personaje Fantasma. En su bucle de Siempre, pon el bloque azul de rastreo total: <span class="scratch-block b-motion">apuntar hacia [Gato]</span>.
      </div>
      
      <div class="kid-step">
        <h4>Paso 2: La Caza Imparable 🐾</h4>
        Debajo, ponle un suave pero tenebroso <span class="scratch-block b-motion">mover 2 pasos</span>. No importa a dónde brinques (incluso con tus bloques de Gravedad de antes), ¡La cara del monstruo girará y te perseguirá por todo el valle!
      </div>
    `
  },

  { week: 35, startDate: '26 de Octubre', endDate: '01 de Noviembre', title: 'Efecto Extra Apariéncia Ghost, Fishey', desc: 'Los Lentes Curados Visual.', type: 'lesson', period: 3, img: null, emoji: '🌟', 
    guide: `
      <h3>Lentes de Magia y Efectos Ópticos 🌀🔮</h3>
      <p>Podemos hacer que tu muñeco se vuelva invisible poco a poco, o que se deforme como en los espejos locos del parque de atracciones de la ciencia.</p>
      
      <div class="kid-step">
        <h4>Paso 1: El Espejismo de Candelaria 🪞</h4>
        Agárrate a la cajuela <b style="color:#9966FF;">Apariencia Morada</b>. Verás la opción mágica <span class="scratch-block b-looks">dar al efecto [fantasma] el valor 50</span>. Tu héroe ahora es mitad humo y mitad carne.
      </div>
      
      <div class="kid-step">
        <h4>Paso 2: Lentes Locas 🤪</h4>
        Prueba jugar cambiando la palabra "fantasma" por "ojo de pez", "remolino", "pixelar" o "brillo". Si lo metes a un ciclo por siempre subiendo la cantidad de número... el personaje mutará en la pantalla como alienígena.
      </div>
    `
  },

  { week: 36, startDate: '02 de Noviembre', endDate: '08 de Noviembre', title: 'Testeos Y Calidades BETA P3', desc: 'Tu Depuración.', type: 'lesson', period: 3, img: null, emoji: '🐞', 
    guide: `
      <h3>Los Ingenieros Contra los Insectos de Código (Bugs) 🔬🦟</h3>
      <p>Nadie, pero literalmente nadie (ni los de Google), hace un juego inmenso "perfecto" a la primera. Los errores los llamamos 'Bugs'. Hay que matarlos.</p>
      
      <div class="kid-step">
        <h4>Prueba de Estrés 🥵</h4>
        Juega tu nivel 1 y presiona todas las teclas a la vez. ¿Tu personaje se metió entre las paredes? (Problema de colisión 💥). Repasemos nuestro choque verde. Revisa variables, mira que el tiempo y las Listas se vacíen en cero. "Depurar" a fondo.
      </div>
    `
  },

  { week: 37, startDate: '09 de Noviembre', endDate: '15 de Noviembre', title: 'Pryct. Final', desc: 'El Videojuego Rey de la promoción!!', type: 'lesson', period: 3, img: 'assets/cat_welcome.png', emoji: '👑', 
    guide: `
      <h3>¡Tu Diploma Consagrado! La Obra Maestra 🎨🎮</h3>
      <p>Ha llegado la hora suprema. Durante esta semana solo vas a hacer una cosa para la historia de tu colegio. Un juego de <b>Múltiples Pantallas</b> combinando todo.</p>
      
      <div class="kid-step">
        <h4>Lista de Supervivencia: Tú vs El Profesorado 🏫</h4>
        - Menú de Start (con la magia escondida de Mensajes).<br>
        - Tu protagonista correrá saltando con Gravedad (Y = -1).<br>
        - Tus enemigos serán un Ejército de Clones que te persiguen apuntándote.<br>
        - Y todo bajo presión: ¡30 segundos del cronómetro final! ¡Ármalo con furia e inteligencia!
      </div>
    `
  },

  { week: 38, startDate: '16 de Noviembre', endDate: '22 de Noviembre', title: 'Nivelación P3 Finalazo', desc: 'Repaso Terminal', type: 'review', period: 3, img: null, emoji: '🔄', 
    guide: `
      <h3>¡Tiempo Extra, Candelaria! Reparaciones Rápidas 🔧🩺</h3>
      <p>Si la "Obra Maestra" que hicimos explotó y no sabes por qué el enemigo no sale o tu Gravedad te llevó volando al espacio, hoy el profe se sentará contigo todo el bloque, tranquilo y relajado, para salvar ese Videojuego final juntos paso a paso.</p>
    `
  },

  { week: 39, startDate: '23 de Noviembre', endDate: '29 de Noviembre', title: 'Expo Candelaria The Games', desc: 'Expondré Al Colegio Completo!!', type: 'feedback', period: 3, img: null, emoji: '🎪', 
    guide: `
      <h3>El Gran Festival del Éxito Colombiano 🎥🎊</h3>
      <p>Imagina toda IENSECAN prestando atención al proyector de VideoBeam. Uno por uno, ustedes irán pasando al frente, y TODO EL CURSO gritará de emoción o tensión mientras ven cómo tu juego cobra vida en las pantallas gigantes. Creadores, hoy es un día grandioso. El código es su súper poder.</p>
    `
  },

  { week: 40, startDate: '30 de Noviembre', endDate: '06 de Diciembre', title: 'Graduación', desc: 'Clausuras Certificados y Cierres.', type: 'eval', period: 3, img: 'assets/cat_welcome.png', emoji: '🎓', 
    guide: `
      <h3>🥇 Misión Finalizada. Licencia Oficial de Programación Aprobada.</h3>
      <p>Increíble. Candelaria aplaude. Cuando abriste el primer día esa página azul y blanca llamada Scratch, todo parecía ciencia loca alienígena. Hoy inventaste variables lógicas, física de gravedad y envíos de mensajes invisibles. Tienes el coeficiente de un ingeniero. ¡Celebra y toma tus justificados descansos!</p>
      
      <div class="kid-step">
        <h4 style="color:#FFAB19;">Palabras de Despedida</h4>
        Nunca olvides que este super poder es tuyo para toda la vida. Podrás diseñar todo lo que cierre tus ojos. ¡Felicitaciones maestro de la computación IENSECAN!
      </div>
    `
  },
];

const CURRICULUM = TEMARIO_BASE;

const RECESOS = [
  { term: 'Receso: Semana Santa', startDate: '30 de Mar', endDate: '05 de Abr', afterWeek: 9, period: 1 },
  { term: 'Receso: Vacaciones de Mitad de Año', startDate: '29 de Jun', endDate: '19 de Jul', afterWeek: 21, period: 2 },
  { term: 'Receso: Semana de Octubre', startDate: '05 de Oct', endDate: '11 de Oct', afterWeek: 32, period: 3 }
];
