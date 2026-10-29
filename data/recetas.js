/*
 * Recetas de La Cocina de la Afri.
 *
 * Fuentes: documentos «Recetas Afri» y «Recetas» de la Afri.
 * Las cantidades e ingredientes son los de sus notas. Donde las notas eran muy breves,
 * los pasos se han desarrollado (campo `ampliada: true`) sin añadir cantidades ni
 * ingredientes nuevos; el texto original se conserva en `original`.
 *
 * Cómo añadir una receta: copia un bloque { ... } completo, pégalo al final de la lista
 * y cambia sus datos. Campos:
 *
 *   id            nombre corto sin espacios ni tildes (se usa en el enlace: receta.html?id=...)
 *   nombre        nombre de la receta
 *   categoria     id de una categoría de data/categorias.js
 *   etiquetas     palabras clave opcionales (también sirven para buscar)
 *   descripcion   una o dos frases que aparecen en las tarjetas
 *   foto          nombre de la foto en assets/images/recetas (sin -sm / -lg ni extensión)
 *   fotoExt       extensión de la foto si no es "webp" (por ejemplo "jpg")
 *   fotoAlt       descripción de lo que se ve en la foto (para personas ciegas)
 *   fotoCredito   autoría de la foto, si su licencia obliga a citarla
 *   destacada     true para que salga en la portada
 *   raciones      número de personas, solo si la receta lo dice
 *   datos         tiempos, temperatura del horno, reposo... solo si la receta lo dice
 *   ingredientes  lista de grupos; cada grupo tiene un título opcional y sus ingredientes
 *   pasos         lista de pasos en orden. Un paso puede ser un texto o { seccion, texto }
 *   notas         observaciones de la propia receta
 *   conservacion  cómo se guarda, si la receta lo dice
 *   avisos        datos que faltan o que conviene revisar
 *   unidadesInterpretadas  true si en las notas las cantidades aparecían sin unidad
 *   ampliada      true si los pasos se han desarrollado a partir de notas breves
 *   fuentes       documento(s) de los que sale la receta
 *   original      texto de la receta tal como está en las notas (con erratas corregidas)
 *   oculta        true para no mostrarla todavía en la web
 */
window.AFRI = window.AFRI || {};

window.AFRI.recetas = [
  /* ───────────── TARTAS Y PASTELES ───────────── */
  {
    id: "pastel-de-queso-japones",
    nombre: "Pastel de queso japonés",
    categoria: "tartas",
    etiquetas: ["queso", "chocolate blanco", "horno", "baño maría"],
    descripcion: "Pastel esponjoso de solo tres ingredientes: huevos, chocolate blanco y queso de untar, horneado al baño maría.",
    foto: "pastel-de-queso-japones",
    fotoAlt: "Porción de pastel de queso esponjoso espolvoreado con azúcar glas.",
    destacada: true,
    datos: [
      { etiqueta: "Horno", valor: "170 °C" },
      { etiqueta: "Horneado", valor: "45 min en total" }
    ],
    ingredientes: [
      {
        items: [
          { cantidad: "3", nombre: "huevos" },
          { cantidad: "120 g", nombre: "chocolate blanco" },
          { cantidad: "120 g", nombre: "queso de untar" },
          { nombre: "azúcar glas", nota: "para decorar" }
        ]
      }
    ],
    pasos: [
      "Funde el chocolate blanco al baño maría.",
      "Retíralo del fuego, añade el queso de untar y mezcla hasta conseguir una crema lisa.",
      "Separa las claras de las yemas. Incorpora las yemas a la crema de chocolate y queso.",
      "Monta las claras a punto de nieve y añádelas a la mezcla poco a poco, con movimientos envolventes para que no pierda aire.",
      "Vierte la mezcla en un molde forrado con papel de horno y colócalo dentro de una bandeja con agua caliente para hornearlo al baño maría.",
      "Hornea 15 minutos a 170 °C.",
      "Baja la temperatura y hornea 15 minutos más (en las notas pone 60 °C).",
      "Apaga el horno y deja el pastel dentro otros 15 minutos.",
      "Deja que se enfríe por completo y espolvoréalo con azúcar glas."
    ],
    avisos: [
      "En las notas, el segundo tramo de horno aparece como «15 minutos a 60º». Conviene confirmar si son 60 °C o 160 °C."
    ],
    unidadesInterpretadas: true,
    ampliada: true,
    fuentes: ["Recetas"],
    original: "PASTEL DE QUESO JAPONÉS\n3 huevos\n120 chocolate blanco\n120 queso de untar\nBaño maría\n15 minutos a 170º\n15 minutos a 60º\n15 minutos con el horno apagado\nEnfriar y azúcar glas"
  },
  {
    id: "pastel-de-cuajada-con-galleta",
    nombre: "Pastel de cuajada con galleta",
    categoria: "tartas",
    etiquetas: ["cuajada", "quesitos", "caramelo", "galletas", "sin horno"],
    descripcion: "Pastel frío de leche, quesitos y cuajada sobre una capa de caramelo, con base de galletas.",
    foto: "pastel-de-cuajada-con-galleta",
    fotoAlt: "Postre cuajado en forma de corona bañado en caramelo, sobre un plato blanco.",
    ingredientes: [
      {
        titulo: "Caramelo para el molde",
        items: [
          { cantidad: "100 g", nombre: "azúcar" },
          { cantidad: "20 ml", nombre: "agua" }
        ]
      },
      {
        titulo: "Pastel",
        items: [
          { cantidad: "450 ml", nombre: "leche" },
          { cantidad: "7", nombre: "quesitos" },
          { cantidad: "3", nombre: "huevos" },
          { cantidad: "175 g", nombre: "azúcar" },
          { cantidad: "2 sobres", nombre: "de cuajada" },
          { nombre: "galletas" }
        ]
      }
    ],
    pasos: [
      { seccion: "Caramelo", texto: "Calienta los 100 g de azúcar con los 20 ml de agua hasta que tome un color dorado. Cubre con él el fondo del molde." },
      { seccion: "Pastel", texto: "Tritura la leche con los quesitos, los huevos, los 175 g de azúcar y los 2 sobres de cuajada." },
      { seccion: "Pastel", texto: "Calienta la mezcla a fuego medio sin dejar de remover hasta que hierva y empiece a espesar." },
      { seccion: "Pastel", texto: "Vierte la crema en el molde, sobre el caramelo." },
      { seccion: "Pastel", texto: "Cubre la superficie con una capa de galletas." },
      { seccion: "Pastel", texto: "Deja que se enfríe y guárdalo en la nevera hasta que cuaje. Desmóldalo dándole la vuelta, de forma que las galletas queden como base." }
    ],
    unidadesInterpretadas: true,
    ampliada: true,
    fuentes: ["Recetas"],
    original: "PASTEL CUAJADA CON GALLETA\n175 azúcar\nMOLDE: Caramelo, 20 de agua y 100 de azúcar\n450 leche\n7 quesitos\n3 huevos\n2 sobres de cuajada\nGalletas"
  },
  {
    id: "flores-de-dulce-de-limon",
    nombre: "Flores de dulce de limón",
    categoria: "tartas",
    etiquetas: ["limón", "leche condensada", "pasta flora", "tartaletas"],
    descripcion: "Florecillas de pasta flora horneadas y rellenas de una crema de leche condensada y limón.",
    foto: "flores-de-dulce-de-limon",
    fotoAlt: "Tartaleta de crema de limón decorada con frutos rojos y frutos secos.",
    ingredientes: [
      {
        items: [
          { cantidad: "1 paquete", nombre: "de pasta flora" },
          { cantidad: "1 lata pequeña", nombre: "de leche condensada" },
          { cantidad: "2", nombre: "limones" },
          { nombre: "azúcar glas" }
        ]
      }
    ],
    pasos: [
      "Estira la pasta flora y corta formas de flor. Colócalas en moldes pequeños para que tomen forma de cestillo.",
      "Hornea las flores antes de rellenarlas, hasta que estén doradas, y deja que se enfríen.",
      "Prepara la crema mezclando la leche condensada con el zumo de los limones hasta que espese.",
      "Rellena las flores con la crema.",
      "Espolvoréalas con azúcar glas."
    ],
    avisos: [
      "Las notas no explican cómo se hace la crema ni la temperatura del horno. Se describe la crema habitual de leche condensada y zumo de limón."
    ],
    ampliada: true,
    fuentes: ["Recetas"],
    original: "FLORES DE DULCE DE LIMÓN\n1 paquete de pasta flora\n1 lata pequeña de leche condensada\n2 limones\nAzúcar glas\nPASOS: Hacer las flores y hornearlas antes de rellenar con la crema."
  },

  /* ───────────── BIZCOCHOS ───────────── */
  {
    id: "bizcocho-glaseado",
    nombre: "Bizcocho glaseado",
    categoria: "bizcochos",
    etiquetas: ["cabello de ángel", "nata", "yogur", "avellana", "horno"],
    descripcion: "Bizcocho con nata y cabello de ángel, cubierto con una crema de nata, yogur y avellana triturada.",
    foto: "bizcocho-glaseado",
    fotoAlt: "Bizcocho en forma de corona con cobertura blanca que cae por los lados.",
    destacada: true,
    ingredientes: [
      {
        titulo: "Bizcocho",
        items: [
          { cantidad: "6", nombre: "huevos" },
          { cantidad: "100 g", nombre: "azúcar blanquilla" },
          { cantidad: "100 g", nombre: "azúcar moreno" },
          { cantidad: "60 ml", nombre: "aceite de girasol" },
          { cantidad: "200 g", nombre: "harina tamizada" },
          { cantidad: "1 sobre", nombre: "de levadura" },
          { cantidad: "100 ml", nombre: "nata de montar" },
          { cantidad: "250 g", nombre: "cabello de ángel" }
        ]
      },
      {
        titulo: "Cobertura",
        items: [
          { cantidad: "100 ml", nombre: "nata de montar" },
          { cantidad: "4-5 cucharadas", nombre: "de yogur natural" },
          { cantidad: "30 g", nombre: "azúcar glas" },
          { cantidad: "40 g", nombre: "avellana triturada" }
        ]
      }
    ],
    pasos: [
      { seccion: "Bizcocho", texto: "Bate los huevos con el azúcar blanquilla y el azúcar moreno, añadiendo los huevos de dos en dos, hasta que la mezcla quede espumosa." },
      { seccion: "Bizcocho", texto: "Incorpora el aceite de girasol poco a poco, sin dejar de batir." },
      { seccion: "Bizcocho", texto: "Añade la harina tamizada junto con el sobre de levadura y mezcla con suavidad." },
      { seccion: "Bizcocho", texto: "Agrega la nata de montar y mezcla hasta que se integre." },
      { seccion: "Bizcocho", texto: "Por último, incorpora el cabello de ángel y repártelo bien por toda la masa." },
      { seccion: "Bizcocho", texto: "Vierte la masa en un molde engrasado y hornéala hasta que, al pinchar el centro con un palillo, salga limpio. Deja que se enfríe." },
      { seccion: "Cobertura", texto: "Monta la nata y mézclala con el yogur natural y el azúcar glas." },
      { seccion: "Cobertura", texto: "Cubre el bizcocho frío con la crema y espolvorea la avellana triturada por encima." }
    ],
    avisos: ["Las notas no indican la temperatura ni el tiempo de horno."],
    unidadesInterpretadas: true,
    ampliada: true,
    fuentes: ["Recetas"],
    original: "BIZCOCHO GLASEADO\n(1) 6 huevos de 2 en 2\n(1) 100 azúcar blanquilla\n(1) 100 azúcar moreno\n(2) 60 aceite girasol\n(3) 200 harina tamizada + 1 sobre de levadura\n(4) 100 nata de montar\n(5) 250 cabello de ángel\nCOBERTURA:\n100 nata montar\n4-5 cucharadas yogur natural\n30 azúcar glas\n40 avellana triturada"
  },
  {
    id: "bizcocho-brazo-de-gitano",
    nombre: "Bizcocho brazo de gitano",
    categoria: "bizcochos",
    etiquetas: ["brazo de gitano", "almíbar", "canela", "horno"],
    descripcion: "Plancha de bizcocho fina, emborrachada con almíbar de canela y enrollada con el relleno que más te guste.",
    foto: "bizcocho-brazo-de-gitano",
    fotoAlt: "Brazo de gitano cortado en rodajas junto a huevos y harina.",
    ingredientes: [
      {
        titulo: "Bizcocho",
        items: [
          { cantidad: "4", nombre: "huevos" },
          { cantidad: "75 g", nombre: "azúcar" },
          { cantidad: "100 g", nombre: "harina de repostería" },
          { cantidad: "1 pizca", nombre: "de sal" }
        ]
      },
      {
        titulo: "Almíbar para emborracharlo",
        items: [
          { cantidad: "150 ml", nombre: "agua" },
          { cantidad: "150 g", nombre: "azúcar" },
          { cantidad: "1", nombre: "palo de canela" }
        ]
      },
      {
        titulo: "Relleno",
        items: [{ nombre: "relleno al gusto" }]
      }
    ],
    pasos: [
      { seccion: "Bizcocho", texto: "Bate los huevos con el azúcar y la pizca de sal hasta que la mezcla blanquee y aumente mucho de volumen." },
      { seccion: "Bizcocho", texto: "Añade la harina tamizada poco a poco, con movimientos envolventes." },
      { seccion: "Bizcocho", texto: "Extiende la masa en una capa fina y uniforme sobre una bandeja con papel de horno y hornéala hasta que esté cuajada y ligeramente dorada." },
      { seccion: "Bizcocho", texto: "Nada más sacarla, enróllala en caliente con el papel o con un paño y deja que se temple." },
      { seccion: "Almíbar", texto: "Cuece el agua con el azúcar y el palo de canela durante 5 minutos." },
      { seccion: "Montaje", texto: "Desenrolla el bizcocho, empápalo con el almíbar, rellénalo al gusto y vuelve a enrollarlo." }
    ],
    avisos: ["Las notas no indican la temperatura ni el tiempo de horno."],
    unidadesInterpretadas: true,
    ampliada: true,
    fuentes: ["Recetas"],
    original: "BIZCOCHO BRAZO DE GITANO\n4 huevos\n75 de azúcar\n100 de harina de repostería\n1 pizca de sal\nPASOS PARA EMBORRACHARLO:\n150 de agua\n150 de azúcar\n1 palo de canela\nCocer durante 5 minutos\nRellenar al gusto"
  },
  {
    id: "pumcake",
    nombre: "Pumcake",
    categoria: "bizcochos",
    etiquetas: ["naranja", "glaseado", "bizcocho", "horno"],
    descripcion: "Bizcocho de mantequilla con naranja y su ralladura, terminado con un glaseado de azúcar.",
    foto: "pumcake-de-naranja",
    fotoAlt: "Bizcocho alargado cortado en rebanadas junto a naranjas.",
    ingredientes: [
      {
        titulo: "Bizcocho",
        items: [
          { cantidad: "4", nombre: "huevos" },
          { cantidad: "200 g", nombre: "azúcar" },
          { cantidad: "1", nombre: "naranja" },
          { cantidad: "200 g", nombre: "mantequilla" },
          { cantidad: "200 g", nombre: "harina" },
          { nombre: "ralladura de naranja" },
          { cantidad: "½", nombre: "de levadura", nota: "medio sobre" }
        ]
      },
      {
        titulo: "Glaseado",
        items: [
          { cantidad: "200 g", nombre: "azúcar" },
          { cantidad: "40 g", nombre: "mantequilla" },
          { cantidad: "2 cucharadas", nombre: "de agua" }
        ]
      }
    ],
    pasos: [
      { seccion: "Bizcocho", texto: "Bate los huevos con el azúcar hasta que la mezcla blanquee." },
      { seccion: "Bizcocho", texto: "Añade la naranja." },
      { seccion: "Bizcocho", texto: "Incorpora la mantequilla, la harina, la ralladura de naranja y la levadura, y mezcla hasta obtener una masa homogénea." },
      { seccion: "Bizcocho", texto: "Vierte la masa en un molde alargado engrasado y hornéala hasta que, al pinchar el centro con un palillo, salga limpio. Deja que se temple." },
      { seccion: "Glaseado", texto: "Calienta el azúcar con la mantequilla y las 2 cucharadas de agua, removiendo, hasta que el azúcar se disuelva." },
      { seccion: "Glaseado", texto: "Cubre el bizcocho con el glaseado." }
    ],
    avisos: [
      "Las notas no aclaran si la naranja se usa en zumo o entera triturada, ni si «½ de levadura» es medio sobre.",
      "Las notas no indican la temperatura ni el tiempo de horno."
    ],
    unidadesInterpretadas: true,
    ampliada: true,
    fuentes: ["Recetas"],
    original: "PANCAKE (PUMCAKE)\n(1) 4 huevos\n(1) 200 de azúcar\n(2) 1 naranja\n(3) 200 de mantequilla\n(3) 200 de harina\n(3) Ralladura de naranja\n(3) ½ de levadura\nGLASEADO:\n200 de azúcar\n40 de mantequilla\n2 cucharadas de agua"
  },
  {
    id: "babas-al-ron",
    nombre: "Babas al ron",
    categoria: "bizcochos",
    etiquetas: ["ron", "almíbar", "masa levada", "horno"],
    descripcion: "Bollitos de masa levada horneados y empapados en un almíbar de ron, canela y cáscaras de cítricos.",
    foto: "babas-al-ron",
    fotoExt: "jpg",
    fotoAlt: "Baba al ron en forma de corona sobre una fuente azul y blanca, con una porción cortada.",
    datos: [
      { etiqueta: "Horno", valor: "190 °C" },
      { etiqueta: "Horneado", valor: "20 min" }
    ],
    ingredientes: [
      {
        titulo: "Masa",
        items: [
          { cantidad: "200 g", nombre: "harina de fuerza" },
          { cantidad: "3", nombre: "huevos", nota: "de uno en uno" },
          { cantidad: "10 g", nombre: "miel" },
          { cantidad: "50 g", nombre: "mantequilla" },
          { cantidad: "10 g", nombre: "levadura" },
          { nombre: "sal" }
        ]
      },
      {
        titulo: "Almíbar",
        items: [
          { cantidad: "1 litro", nombre: "de agua" },
          { cantidad: "400 g", nombre: "azúcar" },
          { cantidad: "100 ml", nombre: "ron añejo" },
          { nombre: "cáscara de limón y de naranja" },
          { nombre: "canela en rama" }
        ]
      }
    ],
    pasos: [
      { seccion: "Masa", texto: "Mezcla la harina de fuerza con la levadura, la miel, la mantequilla y la sal." },
      { seccion: "Masa", texto: "Añade los huevos de uno en uno, mezclando con varillas hasta que cada uno se integre antes de echar el siguiente." },
      { seccion: "Masa", texto: "Reparte la masa en moldes engrasados y deja que leve hasta que aumente de volumen." },
      { seccion: "Masa", texto: "Hornea a 190 °C durante 20 minutos." },
      { seccion: "Almíbar", texto: "Hierve el agua con el azúcar y las cáscaras de limón y naranja. Añade la canela en rama y el ron y deja hervir 5 minutos más." },
      { seccion: "Montaje", texto: "Empapa las babas en el almíbar." }
    ],
    unidadesInterpretadas: true,
    ampliada: true,
    fuentes: ["Recetas"],
    original: "BABAS AL RON\nALMÍBAR: 1 litro de agua, 400 de azúcar, 100 ml de ron añejo, cáscara de limón y naranja.\n200 de harina de fuerza\n3 huevos (de 1 en 1)\n10 g de miel\n50 de mantequilla\n10 de levadura\nSal\nMeter en el horno a 190º 20 minutos.\nPASOS: Mezclar todo con varilla y dejar levar. El almíbar: agua y azúcar hervir y añadir corteza de canela en rama y ron 5 minutos."
  },
  {
    id: "tortas-de-3-ingredientes",
    nombre: "Tortas de 3 ingredientes",
    categoria: "bizcochos",
    etiquetas: ["claras montadas", "maicena", "vainilla", "horno"],
    descripcion: "Tortitas ligeras de huevo con las claras montadas, azúcar glas y maicena.",
    foto: "tortas-de-3-ingredientes",
    fotoAlt: "Bizcochos alargados dorados cubiertos de azúcar.",
    datos: [
      { etiqueta: "Horno", valor: "180 °C" },
      { etiqueta: "Horneado", valor: "20 min" }
    ],
    ingredientes: [
      {
        items: [
          { cantidad: "3", nombre: "huevos", nota: "con las claras montadas" },
          { cantidad: "50 g", nombre: "azúcar glas" },
          { cantidad: "50 g", nombre: "maicena" },
          { cantidad: "1 cucharadita", nombre: "de vainilla" }
        ]
      }
    ],
    pasos: [
      "Precalienta el horno a 180 °C.",
      "Separa las claras de las yemas y monta las claras a punto de nieve.",
      "Añade el azúcar glas poco a poco, sin dejar de batir.",
      "Incorpora las yemas y la vainilla y, después, la maicena, con movimientos envolventes para que la mezcla no se baje.",
      "Forma las tortas sobre una bandeja con papel de horno.",
      "Hornea 20 minutos a 180 °C."
    ],
    unidadesInterpretadas: true,
    ampliada: true,
    fuentes: ["Recetas"],
    original: "TORTAS DE 3 INGREDIENTES\n3 huevos (las claras montadas)\n50 de azúcar glas\n50 de maicena\n1 cucharadita de vainilla\nHorno 180 por 20 minutos"
  },

  /* ───────────── DULCES DE SARTÉN ───────────── */
  {
    id: "pelotas-del-marrano",
    nombre: "Las pelotas «del marrano»",
    categoria: "dulces-de-sarten",
    etiquetas: ["crema pastelera", "anís", "fritos", "masa levada"],
    descripcion: "Bollitos de masa dulce con anís, fritos, pasados por azúcar y rellenos de crema pastelera.",
    foto: "pelotas-del-marrano",
    fotoAlt: "Bollo frito cubierto de azúcar sobre un plato.",
    datos: [{ etiqueta: "Reposo", valor: "2 h + 1 h" }],
    ingredientes: [
      {
        titulo: "Masa",
        items: [
          { cantidad: "½ kg", nombre: "harina de fuerza" },
          { cantidad: "75 g", nombre: "azúcar" },
          { cantidad: "1 pizca", nombre: "de sal" },
          { cantidad: "un poco", nombre: "de anís" },
          { cantidad: "100 g", nombre: "mantequilla derretida" },
          { cantidad: "2", nombre: "huevos" },
          { cantidad: "150 ml", nombre: "leche tibia" },
          { cantidad: "30 g", nombre: "levadura fresca" }
        ]
      },
      {
        titulo: "Crema pastelera",
        items: [
          { cantidad: "100 g", nombre: "azúcar" },
          { cantidad: "3", nombre: "huevos" },
          { cantidad: "½ litro", nombre: "de leche" },
          { cantidad: "35 g", nombre: "maicena" },
          { cantidad: "1 cucharada", nombre: "de vainilla" }
        ]
      },
      {
        titulo: "Para freír y rebozar",
        items: [
          { nombre: "aceite abundante" },
          { nombre: "azúcar" }
        ]
      }
    ],
    pasos: [
      { seccion: "Masa", texto: "Disuelve la levadura fresca en la leche tibia." },
      { seccion: "Masa", texto: "En un bol grande, mezcla la harina de fuerza, el azúcar, la sal, el anís, la mantequilla derretida y los huevos. Añade la leche con la levadura y amasa hasta obtener una masa lisa." },
      { seccion: "Masa", texto: "Tapa el bol con film y deja reposar la masa 2 horas, hasta que doble su volumen." },
      { seccion: "Masa", texto: "Quítale el aire, forma bolas de 30 g y colócalas separadas entre sí. Aplástalas un poco y déjalas reposar 1 hora." },
      { seccion: "Crema pastelera", texto: "Mientras reposan, prepara la crema: calienta la leche con la vainilla. Aparte, bate los huevos con el azúcar y la maicena, vierte encima la leche caliente sin dejar de remover y vuelve a ponerlo todo al fuego, removiendo, hasta que espese. Deja que se enfríe." },
      { seccion: "Fritura", texto: "Fríe las bolas en abundante aceite a fuego medio hasta que estén doradas y pásalas por azúcar." },
      { seccion: "Relleno", texto: "Córtalas, sepáralas y rellénalas de crema pastelera al gusto." }
    ],
    avisos: ["En la crema pastelera, las notas dicen «½ leche»; se ha entendido como medio litro."],
    unidadesInterpretadas: true,
    ampliada: true,
    fuentes: ["Recetas"],
    original: "LAS PELOTAS «DEL MARRANO»\n(1) ½ kilo de harina de fuerza\n(1) 75 g azúcar\n(1) 1 pizca de sal\n(1) 1 poco de anís\n(1) 100 mantequilla derretida\n(1) 2 huevos\n(2) 150 leche tibia\n(2) 30 levadura fresca\nCREMA PASTELERA:\n100 azúcar\n3 huevos\n½ leche\n35 maicena\n1 cucharada vainilla\nPASOS:\nReposar tapado con film durante 2 horas hasta que doble.\nQuitarle el aire, coger bolas de 30 g, poner a reposar, separadas entre sí y aplastar un poco.\n1 hora.\nFreír en abundante aceite a fuego medio, pasar por azúcar, cortar, separar y rellenar de crema pastelera al gusto."
  },
  {
    id: "donuts-caseros",
    nombre: "Donuts caseros",
    categoria: "dulces-de-sarten",
    etiquetas: ["donuts", "fritos", "vainilla", "masa levada"],
    descripcion: "Donuts de masa levada con vainilla, fritos en aceite de girasol y listos para glasear.",
    foto: "donuts-caseros",
    fotoAlt: "Donuts glaseados sobre papel blanco.",
    ingredientes: [
      {
        items: [
          { cantidad: "300 g", nombre: "harina de fuerza" },
          { cantidad: "200 g", nombre: "harina de trigo" },
          { cantidad: "100 g", nombre: "azúcar" },
          { cantidad: "5 g", nombre: "sal" },
          { cantidad: "40 g", nombre: "levadura fresca" },
          { cantidad: "230 ml", nombre: "leche tibia" },
          { cantidad: "1", nombre: "huevo" },
          { cantidad: "2 cucharaditas", nombre: "de vainilla" },
          { cantidad: "40 g", nombre: "mantequilla", nota: "a temperatura ambiente" },
          { nombre: "aceite de girasol", nota: "para untar y para freír" }
        ]
      }
    ],
    pasos: [
      "Disuelve la levadura fresca en la leche tibia.",
      "Mezcla las dos harinas con el azúcar y la sal. Añade la leche con la levadura, el huevo y la vainilla.",
      "Amasa durante 7 minutos. Al final, incorpora la mantequilla a temperatura ambiente y sigue amasando hasta que se integre.",
      "Deja reposar la masa hasta que aumente de tamaño (en las notas, 10 minutos).",
      "Estira la masa con 1 cm de grosor y corta los roscos. Úntalos con un poco de aceite y espera a que doblen su tamaño.",
      "Fríe los donuts en aceite de girasol hasta que estén dorados por los dos lados y déjalos listos para el glaseado."
    ],
    avisos: ["Las notas mencionan el glaseado, pero no indican cómo se prepara."],
    unidadesInterpretadas: true,
    ampliada: true,
    fuentes: ["Recetas"],
    original: "DONUTS CASEROS\n300 de harina de fuerza\n200 de harina de trigo\n100 de azúcar\n5 de sal\n40 de levadura fresca\n230 de leche tibia\n1 huevo\n2 cucharaditas de vainilla\n40 de mantequilla a temperatura ambiente\nPASOS:\nLa mantequilla al final.\nAmasar 7 minutos.\n10 minutos que multiplique el tamaño.\nHacer roscos de 1 centímetro, untar con aceite y esperar que doble el tamaño.\nFreír en aceite de girasol para el glaseado."
  },
  {
    id: "rosquillas",
    nombre: "Rosquillas",
    categoria: "dulces-de-sarten",
    etiquetas: ["rosquillas", "limón", "fritas", "masa levada"],
    descripcion: "Rosquillas de masa levada con vainilla y ralladura de limón, fritas y rebozadas en azúcar.",
    foto: "rosquillas",
    fotoExt: "jpg",
    fotoAlt: "Rosquillas caseras doradas apiladas.",
    fotoCredito: "«Rosquillas panaderas», Tamorlan, CC BY 3.0, vía Wikimedia Commons",
    destacada: true,
    ingredientes: [
      {
        items: [
          { cantidad: "200 ml", nombre: "leche" },
          { cantidad: "500 g", nombre: "harina de fuerza" },
          { cantidad: "70 g", nombre: "mantequilla" },
          { cantidad: "25 g", nombre: "levadura fresca" },
          { cantidad: "60 g", nombre: "azúcar" },
          { cantidad: "1 huevo y 1 yema" },
          { cantidad: "2 cucharaditas", nombre: "de vainilla" },
          { cantidad: "1 cucharadita", nombre: "de sal" },
          { nombre: "ralladura de 1 limón" },
          { nombre: "aceite para freír" },
          { nombre: "azúcar para rebozar" }
        ]
      }
    ],
    pasos: [
      "Amasa todos los ingredientes hasta obtener una masa lisa y elástica.",
      "Deja reposar la masa 15 minutos.",
      "Divídela en porciones, trabaja cada una un poco y déjalas reposar 5 minutos más.",
      "Da a cada porción forma de rosquilla y deja que duplique su tamaño.",
      "Fríe las rosquillas en aceite caliente hasta que estén doradas.",
      "Rebózalas en azúcar antes de que se enfríen."
    ],
    unidadesInterpretadas: true,
    ampliada: true,
    fuentes: ["Recetas"],
    original: "ROSQUILLAS\n200 de leche\n500 de harina de fuerza\n70 de mantequilla\n25 levadura fresca\n60 de azúcar\n1 huevo y 1 yema\n2 cucharaditas de vainilla\n1 cucharadita de sal\nRalladura de un limón\nAmasar todo y 15 minutos de reposo.\nCoger porciones, trabajarlas y reposar 5 minutos más.\nCoger cada porción y darle forma de rosquilla, que duplique el tamaño, y freír.\nRebozar en azúcar antes de que enfríe."
  },
  {
    id: "rosquilla-con-manga",
    nombre: "Rosquilla con manga",
    categoria: "dulces-de-sarten",
    etiquetas: ["rosquillas", "ron", "manga pastelera", "masa escaldada"],
    descripcion: "Rosquillas de masa escaldada con un toque de ron, formadas con manga pastelera sobre papel de horno.",
    foto: "rosquilla-con-manga",
    fotoAlt: "Plato de churros junto a una taza de café.",
    ingredientes: [
      {
        items: [
          { cantidad: "250 ml", nombre: "leche" },
          { cantidad: "75 g", nombre: "mantequilla" },
          { cantidad: "20 cl", nombre: "de ron" },
          { cantidad: "1 pizca", nombre: "de sal" },
          { cantidad: "1 cucharada sopera", nombre: "de azúcar" },
          { cantidad: "150 g", nombre: "harina" },
          { cantidad: "3", nombre: "huevos", nota: "de uno en uno" },
          { nombre: "papel de horno", nota: "cortado en cuadrados, uno por rosquilla" }
        ]
      }
    ],
    pasos: [
      "Pon en un cazo la leche, la mantequilla, el ron, la sal y el azúcar y llévalo a ebullición.",
      "Echa la harina de golpe y remueve con energía con una cuchara de madera hasta que la masa se despegue de las paredes.",
      "Retira el cazo del fuego y deja que la masa se temple un poco.",
      "Incorpora los huevos de uno en uno, sin añadir el siguiente hasta que el anterior esté bien integrado.",
      "Mete la masa en una manga pastelera y forma una rosquilla sobre cada cuadrado de papel de horno.",
      "Fríe las rosquillas en aceite caliente con el papel hacia arriba; retira el papel cuando se despegue y dóralas por los dos lados."
    ],
    avisos: [
      "Las notas no indican si las rosquillas se fríen o se hornean; se describe la forma habitual, fritas.",
      "Conviene confirmar la cantidad de ron: en las notas pone «20 cl» (200 ml)."
    ],
    unidadesInterpretadas: true,
    ampliada: true,
    fuentes: ["Recetas"],
    original: "ROSQUILLA CON MANGA\n(1) 250 leche\n(1) 75 de mantequilla\n(1) 20 cl de ron\n(1) 1 pizca de sal\n(1) 1 cucharada sopera de azúcar\n(2) 150 harina de golpe\n(3) 3 huevos de 1 en 1\nPapel de horno cortado para rosquilla"
  },
  {
    id: "masa-de-pan-dulce-para-freir",
    nombre: "Masa de pan dulce para freír",
    categoria: "dulces-de-sarten",
    etiquetas: ["fritos", "azúcar", "masa levada"],
    descripcion: "Cuadraditos de masa de pan fritos en aceite de girasol y rebozados en azúcar.",
    foto: "masa-de-pan-dulce-para-freir",
    fotoAlt: "Trozos de masa frita dorada en un cuenco metálico.",
    ingredientes: [
      {
        items: [
          { cantidad: "200 ml", nombre: "agua templada" },
          { cantidad: "350 g", nombre: "harina de fuerza" },
          { cantidad: "1 cucharadita", nombre: "de sal" },
          { cantidad: "20 g", nombre: "levadura fresca" },
          { cantidad: "15 ml", nombre: "aceite de oliva" },
          { nombre: "azúcar para espolvorear" },
          { nombre: "aceite de girasol para freír" }
        ]
      }
    ],
    pasos: [
      "Disuelve la levadura en el agua templada y amásala con la harina, la sal y el aceite de oliva.",
      "Deja reposar la masa hasta que doble su tamaño.",
      "Estírala y córtala en cuadraditos.",
      "Fríe los cuadraditos en aceite de girasol hasta que estén dorados.",
      "Sácalos a un plato con papel absorbente y, una vez fritos, rebózalos en azúcar."
    ],
    unidadesInterpretadas: true,
    ampliada: true,
    fuentes: ["Recetas"],
    original: "MASA DE PAN DULCE PARA FREÍR\n200 de agua templada\n350 harina de fuerza\n1 cucharadita de sal\n20 g de levadura fresca\n15 de aceite de oliva\nAzúcar para espolvorear\nPASOS:\nAmasar todo. Dejar que doble el tamaño.\nEstirar y cortar en cuadraditos.\nFreír en aceite de girasol.\nUna vez frito, rebozar en azúcar. Poner plato con papel absorbente."
  },

  /* ───────────── POSTRES Y DULCES ───────────── */
  {
    id: "mousse-de-chocolate",
    nombre: "Mousse de chocolate",
    categoria: "postres",
    etiquetas: ["chocolate", "nata", "gelatina", "sin horno"],
    descripcion: "Mousse de chocolate con nata y claras montadas, cuajada con gelatina neutra.",
    foto: "mousse-de-chocolate",
    fotoAlt: "Dos cuencos de crema de chocolate con frambuesas al lado.",
    ingredientes: [
      {
        items: [
          { cantidad: "500 ml", nombre: "nata para montar" },
          { cantidad: "250 g", nombre: "chocolate" },
          { cantidad: "3", nombre: "huevos medianos" },
          { cantidad: "100 ml", nombre: "leche entera" },
          { cantidad: "50 g", nombre: "azúcar" },
          { cantidad: "1 sobre", nombre: "de gelatina neutra" }
        ]
      }
    ],
    pasos: [
      "Calienta la leche con el chocolate y la gelatina hasta que hierva y todo quede disuelto. Deja que se enfríe hasta que esté tibio.",
      "Separa las claras y móntalas a punto de nieve fuerte con el azúcar.",
      "Monta la nata.",
      "Envuelve el chocolate tibio con las claras y la nata montadas, con movimientos suaves para que no se bajen.",
      "Reparte la mousse en recipientes y déjala enfriar en la nevera hasta que cuaje."
    ],
    avisos: ["Las notas no dicen qué hacer con las yemas ni en qué momento se añade la nata; aquí se monta y se incorpora junto con las claras."],
    unidadesInterpretadas: true,
    ampliada: true,
    fuentes: ["Recetas"],
    original: "MOUSSE DE CHOCOLATE\n500 de nata para montar\n250 de chocolate\n3 huevos medianos\n100 de leche entera\n50 de azúcar\n1 sobre de gelatina neutra\nPASOS:\nHervir el chocolate con la leche y la gelatina. Dejar enfriar.\nMontar las claras fuertes con el azúcar y envolverlo con el chocolate tibio.\nDejar enfriar."
  },
  {
    id: "helado-con-galletas-oreo-y-dulce-de-leche",
    nombre: "Helado con galletas Oreo y dulce de leche",
    categoria: "postres",
    etiquetas: ["helado", "nata", "leche condensada", "sin heladera", "congelador"],
    descripcion: "Helado casero de nata y leche condensada hecho en el congelador, servido con galletas y dulce de leche.",
    foto: "helado-oreo-dulce-de-leche",
    fotoAlt: "Copa de helado de vainilla con galletas de chocolate trituradas.",
    datos: [{ etiqueta: "Congelador", valor: "4 tandas de 30 min" }],
    ingredientes: [
      {
        titulo: "Helado",
        items: [
          { cantidad: "500 ml", nombre: "nata para montar" },
          { cantidad: "150 g", nombre: "leche condensada" },
          { cantidad: "100 g", nombre: "azúcar" },
          { cantidad: "1 cucharadita", nombre: "de vainilla" }
        ]
      },
      {
        titulo: "Para servir",
        items: [
          { nombre: "galletas Oreo" },
          { nombre: "dulce de leche" }
        ]
      }
    ],
    pasos: [
      "Monta la nata junto con la leche condensada, el azúcar y la vainilla.",
      "Pásala a un recipiente y métela 30 minutos en el congelador.",
      "Sácala y remuévela con una cuchara para romper los cristales de hielo. Vuelve a congelarla.",
      "Repite el paso anterior 3 veces, dejándola 30 minutos en el congelador cada vez.",
      "Sirve el helado con galletas Oreo y dulce de leche."
    ],
    unidadesInterpretadas: true,
    ampliada: true,
    fuentes: ["Recetas"],
    original: "HELADO CON GALLETAS DE OREO Y DULCE DE LECHE\n500 de nata para montar\n150 leche condensada\n100 azúcar\n1 cucharadita de vainilla\nPASOS:\nMontarlo, meter 30 minutos en el congelador.\nSacarlo, moverlo con una cuchara y volverlo a congelar por 3 veces (30 minutos cada una).\nSe sirve con galletas Oreo y dulce de leche."
  },
  {
    id: "coquitos",
    nombre: "Coquitos",
    categoria: "postres",
    etiquetas: ["coco", "galletas", "horno"],
    descripcion: "Pastitas de coco rallado, azúcar, harina y huevo, horneadas con la masa bien fría.",
    foto: "coquitos",
    fotoAlt: "Plato de pastas caseras doradas de textura rugosa.",
    ingredientes: [
      {
        items: [
          { cantidad: "250 g", nombre: "azúcar" },
          { cantidad: "250 g", nombre: "coco rallado" },
          { cantidad: "180 g", nombre: "harina" },
          { cantidad: "3", nombre: "huevos" }
        ]
      }
    ],
    pasos: [
      "Mezcla el azúcar, el coco rallado, la harina y los huevos, y amasa hasta que quede todo integrado.",
      "Mete la masa en la nevera.",
      "Con la masa fría, forma porciones pequeñas y colócalas en una bandeja con papel de horno.",
      "Hornéalas hasta que estén doradas."
    ],
    avisos: ["Las notas no indican la temperatura ni el tiempo de horno."],
    unidadesInterpretadas: true,
    ampliada: true,
    fuentes: ["Recetas"],
    original: "COQUITOS\n250 de azúcar\n250 de coco rallado\n180 de harina\n3 huevos\nPASOS:\nAmasar y meter en la nevera.\nEn frío, hacer las porciones y meterlas al horno."
  },
  {
    id: "donuts-fit",
    nombre: "Donuts fit",
    categoria: "postres",
    etiquetas: ["saludable", "plátano", "avena", "chocolate", "horno"],
    descripcion: "Donuts al horno de plátano, huevo y avena, con chocolate 85 % picado por encima.",
    foto: "donuts-fit",
    fotoAlt: "Donuts de chocolate sobre una bandeja de madera.",
    datos: [
      { etiqueta: "Horno", valor: "180 °C" },
      { etiqueta: "Horneado", valor: "10 min" }
    ],
    ingredientes: [
      {
        items: [
          { cantidad: "1", nombre: "huevo" },
          { cantidad: "1", nombre: "plátano" },
          { cantidad: "1 taza", nombre: "de avena" },
          { nombre: "edulcorante" },
          { nombre: "chocolate 85 %", nota: "picado" }
        ]
      }
    ],
    pasos: [
      "Tritura el plátano con el huevo, la avena y el edulcorante hasta obtener una masa.",
      "Reparte la masa en un molde para donuts.",
      "Hornea 10 minutos a 180 °C.",
      "Pica el chocolate 85 % y échalo por encima."
    ],
    ampliada: true,
    fuentes: ["Recetas Afri"],
    original: "Donuts fit\n1 huevo, 1 plátano, 1 taza de avena, edulcorante y 10 min a 180º. Picar chocolate 85 % y echar por encima."
  },
  {
    id: "tortitas-saludables",
    nombre: "Tortitas saludables",
    categoria: "postres",
    etiquetas: ["saludable", "plátano", "avena", "desayuno", "sartén"],
    descripcion: "Tortitas de plátano maduro, copos de avena y huevo, hechas a fuego lento.",
    foto: "tortitas-saludables",
    fotoAlt: "Montón de tortitas sobre un plato blanco.",
    ingredientes: [
      {
        items: [
          { cantidad: "1", nombre: "plátano maduro" },
          { cantidad: "30 g", nombre: "copos de avena" },
          { cantidad: "2", nombre: "huevos" },
          { cantidad: "50 ml", nombre: "leche semidesnatada" },
          { nombre: "canela, sal, esencia de vainilla y edulcorante", nota: "al gusto" }
        ]
      }
    ],
    pasos: [
      "Bate todos los ingredientes hasta obtener una masa homogénea.",
      "Calienta una sartén a fuego lento.",
      "Echa la masa con un cazo, formando las tortitas.",
      "Cuando cuajen por abajo, dales la vuelta y deja que se hagan por el otro lado."
    ],
    ampliada: true,
    fuentes: ["Recetas"],
    original: "Tortitas saludables\n1 plátano maduro\n30 g copos de avena\n2 huevos\n50 ml leche semidesnatada\nCanela, sal, esencia de vainilla y edulcorante al gusto\nBatir todo y echar con un cazo a fuego lento."
  },

  /* ───────────── CUCHAREO ───────────── */
  {
    id: "lentejas",
    nombre: "Lentejas",
    categoria: "cuchareo",
    etiquetas: ["legumbres", "chorizo", "patatas", "olla"],
    descripcion: "Lentejas cocidas con las verduras enteras, laurel y pimentón, con patatas y chorizo.",
    foto: "lentejas",
    fotoAlt: "Guiso de legumbres en una cazuela de barro sobre una mesa de madera.",
    destacada: true,
    ingredientes: [
      {
        items: [
          { nombre: "lentejas" },
          { nombre: "agua" },
          { cantidad: "1", nombre: "zanahoria", nota: "en 2 trozos" },
          { cantidad: "1", nombre: "pimiento verde", nota: "entero" },
          { cantidad: "1", nombre: "cebolla", nota: "entera" },
          { cantidad: "1", nombre: "hoja de laurel" },
          { cantidad: "2 o 3", nombre: "dientes de ajo", nota: "enteros, con un golpe" },
          { cantidad: "1 cucharada", nombre: "de pimentón" },
          { nombre: "patatas" },
          { nombre: "chorizo" }
        ]
      }
    ],
    pasos: [
      "Enjuaga las lentejas.",
      "Ponlas en la olla con agua, junto con la zanahoria partida en dos trozos, el pimiento verde entero, la cebolla entera, la hoja de laurel y los dientes de ajo enteros (dales antes un golpe).",
      "Añade la cucharada de pimentón, tapa la olla y ponla a hervir durante 15 minutos.",
      "Echa las patatas troceadas y el chorizo, y deja que siga cociendo hasta que las lentejas y las patatas estén tiernas."
    ],
    avisos: ["Las notas no indican la cantidad de lentejas, de patatas ni de chorizo."],
    ampliada: true,
    fuentes: ["Recetas Afri"],
    original: "Lentejas\nLas enjuago, echo en la olla tapada con agua con una zanahoria en 2 trozos, un pimiento verde entero, 1 cebolla entera, 1 hoja de laurel y 2 o 3 dientes de ajo enteros (darle un golpe), 1 cucharada de pimentón, la pongo a hervir (15 min), le echo las patatas y un chorizo."
  },
  {
    id: "garbanzos-con-arroz",
    nombre: "Garbanzos con arroz",
    categoria: "cuchareo",
    etiquetas: ["legumbres", "chorizo", "morcilla", "hierbabuena", "potaje"],
    descripcion: "Potaje de garbanzos con refrito de pimiento, cebolla y tomate, chorizo, morcilla, arroz y hierbabuena.",
    foto: "garbanzos-con-arroz",
    fotoAlt: "Plato de guiso de garbanzos con salsa de tomate.",
    datos: [
      { etiqueta: "Remojo", valor: "toda la noche" },
      { etiqueta: "Cocción", valor: "45 min a fuego medio + el arroz" }
    ],
    ingredientes: [
      {
        items: [
          { cantidad: "½ kg", nombre: "garbanzos" },
          { nombre: "arroz", nota: "1 taza por persona" },
          { cantidad: "2 cucharadas", nombre: "de aceite" },
          { cantidad: "1", nombre: "pimiento verde pequeño" },
          { cantidad: "1", nombre: "cebolla mediana", nota: "o media grande" },
          { cantidad: "2 cucharadas grandes", nombre: "de tomate de lata", nota: "o tomate rallado sin piel" },
          { nombre: "pimentón" },
          { nombre: "hojas de laurel" },
          { nombre: "sal" },
          { nombre: "chorizo" },
          { nombre: "morcilla" },
          { nombre: "hierbabuena" },
          { nombre: "agua" }
        ]
      }
    ],
    pasos: [
      "La noche anterior, pon los garbanzos en remojo.",
      "Por la mañana, tira el agua del remojo y enjuaga los garbanzos.",
      "Ponlos en la olla con agua limpia, a fuego medio.",
      "Aparte, calienta las 2 cucharadas de aceite y pocha el pimiento verde y la cebolla picados. Cuando estén pochados, añade el tomate y el pimentón.",
      "Echa el refrito a los garbanzos junto con el laurel, la sal y el chorizo.",
      "Deja cocer unos 45 minutos a fuego medio, hasta que los garbanzos estén tiernos.",
      "Añade el arroz.",
      "Cuando el arroz esté casi listo, añade la hierbabuena y la morcilla."
    ],
    notas: [
      "En sus notas, la Afri tiene dos versiones de esta receta. En una hace el mismo refrito que para el arroz con pollo, cambiando el azafrán por pimentón."
    ],
    ampliada: true,
    fuentes: ["Recetas Afri", "Recetas"],
    original: "Garbanzos con arroz (Recetas Afri)\nLos garbanzos los dejo en remojo la noche anterior. Tiro el agua y pongo limpia. Lo pongo a fuego medio. Aparte, 2 cucharadas de aceite, pico un pimiento verde chico y una cebolla mediana o media grande; cuando esté pochado le echo tomate, 2 cucharadas grandes de lata (o tomate rallado sin piel), eso se lo echo a los garbanzos con laurel y chorizo. Cuando estén tiernos los garbanzos echas el arroz. Cuando esté casi listo el arroz echo hierbabuena.\n\nGarbanzos con arroz (Recetas)\nGarbanzos toda la noche en remojo. Medio kilo. 1 taza por persona. Por la mañana se retira el agua y hacemos el mismo refrito del pollo cambiando el azafrán por pimentón. Enjuagamos los garbanzos y al refrito, y se le echa agua. Hojas de laurel, sal, chorizo y morcilla. La morcilla al final, siempre con la hierbabuena, cuando esté hecho el arroz. 45' a fuego medio y se le echa el arroz."
  },
  {
    id: "crema-de-verduras",
    nombre: "Crema de verduras",
    categoria: "cuchareo",
    etiquetas: ["calabaza", "zanahoria", "puerro", "verduras", "olla exprés"],
    descripcion: "Crema suave de calabaza, zanahoria, patata y puerro, cocida y batida.",
    foto: "crema-de-verduras",
    fotoAlt: "Taza de crema de calabaza con perejil y pan.",
    destacada: true,
    datos: [{ etiqueta: "Cocción", valor: "10 min en olla exprés · 30 min en olla normal" }],
    ingredientes: [
      {
        items: [
          { cantidad: "450 g", nombre: "calabaza", nota: "una bolsa de Mercadona" },
          { cantidad: "3 gordas o 4 normales", nombre: "zanahorias", nota: "unos 450 g" },
          { cantidad: "2", nombre: "patatas" },
          { cantidad: "1", nombre: "puerro", nota: "la parte blanca y parte de la verde" },
          { nombre: "sal" },
          { cantidad: "unas 2 cucharadas", nombre: "de aceite" },
          { nombre: "agua", nota: "para hervir" }
        ]
      }
    ],
    pasos: [
      "Pela y trocea la calabaza, las zanahorias y las patatas. Limpia el puerro y córtalo, aprovechando la parte blanca y parte de la verde.",
      "Pon las verduras en una olla, cúbrelas de agua y añade la sal y el aceite.",
      "Hierve hasta que estén blandas: unos 10 minutos en olla exprés o 30 minutos en olla normal.",
      "Bate hasta conseguir una crema fina."
    ],
    conservacion: "No la metas en la nevera hasta que esté fría.",
    ampliada: true,
    fuentes: ["Recetas"],
    original: "CREMA DE VERDURAS\n450 g calabaza (bolsa Mercadona)\n3 zanahorias gordas o 4 normales (450 g)\n2 patatas\n1 puerro (parte blanca y parte de verde)\nSal y aceite (como 2 cucharadas)\nHervir hasta que esté blando (olla exprés 10' y olla normal 30') y batir.\nHasta que no esté frío no meter en la nevera."
  },

  /* ───────────── PLATOS PRINCIPALES ───────────── */
  {
    id: "arroz-con-pollo",
    nombre: "Arroz con pollo",
    categoria: "principales",
    etiquetas: ["arroz", "pollo", "azafrán", "refrito"],
    descripcion: "Arroz con pechuga de pollo sobre un refrito fino de ajo, cebolla, pimiento y tomate, con azafrán.",
    foto: "arroz-con-pollo",
    fotoAlt: "Cuenco de arroz amarillo con trozos de pollo.",
    destacada: true,
    raciones: 2,
    datos: [{ etiqueta: "Arroz", valor: "16-20 min" }],
    ingredientes: [
      {
        items: [
          { cantidad: "1 taza por persona", nombre: "de arroz" },
          { nombre: "pechuga de pollo" },
          { nombre: "aceite de oliva" },
          { cantidad: "1", nombre: "diente de ajo" },
          { nombre: "cebolla" },
          { cantidad: "1", nombre: "pimiento verde" },
          { cantidad: "2", nombre: "tomates rojos" },
          { nombre: "sal y pimienta" },
          { cantidad: "1 punta de cuchillo", nombre: "de azafrán", nota: "o colorante" },
          { cantidad: "1 litro", nombre: "de caldo de pollo", nota: "o agua hasta cubrir el arroz" }
        ]
      }
    ],
    pasos: [
      "Trocea muy fino el ajo, la cebolla, el pimiento verde y los tomates.",
      "Haz un refrito con el aceite de oliva y las verduras. Cuando esté hecho, pásalo por la batidora para que no queden trozos.",
      "Añade la pechuga de pollo troceada y salpimienta.",
      "Cuando el pollo esté hecho, agrega el arroz y el azafrán.",
      "Echa el caldo de pollo (o agua) hasta cubrir el arroz. El líquido tiene que estar caliente.",
      "Deja cocer entre 16 y 20 minutos."
    ],
    ampliada: true,
    fuentes: ["Recetas"],
    original: "ARROZ CON POLLO (2 personas)\nArroz: 1 taza por persona\nPollo (pechuga)\nAceite de oliva\n1 diente de ajo\nCebolla\n1 pimiento verde\n2 tomates rojos\nHacemos el refrito con el aceite, el diente de ajo, cebolla y los tomates y pimiento, todo muy troceado. Lo pasamos para que no queden trozos.\nSe le trocea pechuga de pollo. Sal y pimienta. Cuando el pollo esté hecho se agrega el arroz y colorante (1 punta de cuchillo de azafrán). Se le echa o caldo de pollo 1 litro o agua, o hasta cubrir el arroz. El líquido se echa en caliente.\nTarda entre 16' y 20'."
  },
  {
    id: "arroz-con-acelgas",
    nombre: "Arroz con acelgas",
    categoria: "principales",
    etiquetas: ["arroz", "acelgas", "espinacas", "verduras"],
    descripcion: "Arroz sencillo con cebolla pochada, ajo, acelgas o espinacas, pimentón y tomate.",
    foto: "arroz-con-acelgas",
    fotoAlt: "Cuenco de arroz blanco con verduras de hoja verde.",
    datos: [{ etiqueta: "Cocción", valor: "20 min" }],
    ingredientes: [
      {
        items: [
          { cantidad: "1", nombre: "cebolla" },
          { cantidad: "1", nombre: "diente de ajo" },
          { cantidad: "1 puñado", nombre: "de acelgas", nota: "o espinacas" },
          { cantidad: "1 cucharadita", nombre: "de pimentón" },
          { cantidad: "50 ml", nombre: "tomate triturado" },
          { cantidad: "1 taza", nombre: "de arroz" },
          { cantidad: "2 tazas", nombre: "de agua" },
          { nombre: "aceite", nota: "para pochar" }
        ]
      }
    ],
    pasos: [
      "Pocha la cebolla junto con el diente de ajo.",
      "Añade el puñado de acelgas (o espinacas), la cucharadita de pimentón y el tomate triturado.",
      "Echa la taza de arroz y las dos tazas de agua.",
      "Deja cocer 20 minutos."
    ],
    ampliada: true,
    fuentes: ["Recetas Afri"],
    original: "Arroz con acelgas\nSe pocha una cebolla junto con un diente de ajo. A la cebolla le añado un puñado de acelga o espinaca, una cucharadita de pimentón, 50 ml de tomate triturado. Echamos una taza de arroz y dos de agua. 20 minutos."
  },
  {
    id: "albondigas",
    nombre: "Albóndigas",
    categoria: "principales",
    etiquetas: ["carne picada", "horno", "fritas"],
    descripcion: "Albóndigas de carne picada con miga de pan mojada en leche, huevo y especias, al horno o fritas.",
    foto: "albondigas",
    fotoAlt: "Albóndigas sobre un plato ovalado blanco.",
    ingredientes: [
      {
        items: [
          { cantidad: "½ kg", nombre: "carne picada" },
          { cantidad: "1", nombre: "huevo" },
          { nombre: "migas de pan", nota: "lo de dentro del pan, mojado en leche; o 1 cucharada grande de pan rallado" },
          { nombre: "leche", nota: "para mojar el pan" },
          { cantidad: "una puntita de cucharada", nombre: "de ajo molido" },
          { nombre: "perejil, sal, pimienta y orégano" },
          { nombre: "harina o pan rallado", nota: "para rebozar" }
        ]
      }
    ],
    pasos: [
      "Moja las migas de pan en leche.",
      "Mezcla la carne picada con el huevo, las migas, el ajo molido, el perejil, el orégano, la sal y la pimienta.",
      "Forma pelotitas con las manos.",
      "Pásalas por harina (o por pan rallado si las vas a freír).",
      "Cocínalas al horno o fríelas en aceite hasta que estén doradas."
    ],
    notas: [
      "En sus notas, la Afri tiene dos versiones: en una las pasa por harina y las hace al horno; en la otra las pasa por pan rallado y las fríe."
    ],
    avisos: ["Las notas no indican la temperatura ni el tiempo de horno."],
    ampliada: true,
    fuentes: ["Recetas Afri", "Recetas"],
    original: "Albóndigas (Recetas Afri)\nMedio kg de carne picada, sal, pimienta, migas de pan (lo de dentro del pan) mojado en leche, un huevo, una puntita de una cucharada de ajo molido. Mezclar, hacer pelotitas, pasarlas por la harina y al horno.\n\nAlbóndigas (Recetas)\nCarne picada medio kilo\n1 huevo\nMigas de pan mojado en leche o pan rallado (1 cuchara grande)\nPerejil, sal, pimienta, orégano\nSe hace la pelota, se pasa por el pan rallado y se fríe."
  },
  {
    id: "hamburguesas",
    nombre: "Hamburguesas",
    categoria: "principales",
    etiquetas: ["carne picada", "zanahoria", "plancha"],
    descripcion: "Hamburguesas caseras de cerdo y vacuno con zanahoria rallada, perejil y huevo.",
    foto: "hamburguesas",
    fotoAlt: "Hamburguesa con lechuga y tomate en pan de semillas.",
    ingredientes: [
      {
        items: [
          { cantidad: "500 g", nombre: "carne picada de cerdo y vacuno" },
          { nombre: "zanahoria rallada" },
          { nombre: "sal, pimienta y perejil" },
          { cantidad: "1", nombre: "huevo" }
        ]
      }
    ],
    pasos: [
      "Ralla la zanahoria.",
      "Mezcla la carne picada con la zanahoria, el huevo, la sal, la pimienta y el perejil.",
      "Forma las hamburguesas con las manos, aplastándolas un poco.",
      "Hazlas a la plancha o en la sartén por los dos lados."
    ],
    ampliada: true,
    fuentes: ["Recetas Afri"],
    original: "Hamburguesas\nCarne picada de cerdo y vacuno 500 g, zanahoria normal rallada, sal y pimienta, perejil y un huevo."
  },

  /* ───────────── APERITIVOS Y ENTRANTES ───────────── */
  {
    id: "quiche",
    nombre: "Quiché",
    categoria: "entrantes",
    etiquetas: ["hojaldre", "nata", "huevo", "queso", "horno"],
    descripcion: "Quiché de hojaldre relleno de cebolla pochada con carne y verdura, nata, huevo y queso.",
    foto: "quiche",
    fotoAlt: "Quiche dorada con hierbas en su molde.",
    datos: [
      { etiqueta: "Horno", valor: "180 °C" },
      { etiqueta: "Horneado", valor: "30-35 min" }
    ],
    ingredientes: [
      {
        items: [
          { cantidad: "1", nombre: "masa de hojaldre" },
          { cantidad: "200 ml", nombre: "nata" },
          { cantidad: "1", nombre: "cebolla" },
          { nombre: "carne y verdura" },
          { nombre: "nuez moscada rallada" },
          { cantidad: "3", nombre: "huevos" },
          { nombre: "sal y pimienta" },
          { nombre: "queso", nota: "un poco dentro y por encima" }
        ]
      }
    ],
    pasos: [
      "Pocha la cebolla con la carne y la verdura. Ponlo a escurrir para quitarle la grasa.",
      "Bate los huevos con la nata, la nuez moscada rallada, la sal y la pimienta.",
      "Extiende la masa de hojaldre en un molde.",
      "Reparte el pochado sobre la masa con un poco de queso y vierte por encima la mezcla de huevos y nata.",
      "Cubre con queso.",
      "Hornea de 30 a 35 minutos a 180 °C."
    ],
    ampliada: true,
    fuentes: ["Recetas Afri"],
    original: "Quiché\nUna masa de hojaldre, 200 ml de nata, una cebolla; la pochamos con carne y verdura y la ponemos a escurrir para quitar la grasa. Ralladura de nuez moscada, 3 huevos, sal, pimienta y queso por encima (y dentro un poco). Horno 30/35 minutos a 180º."
  },
  {
    id: "bastoncillos-de-calabacin-y-queso",
    nombre: "Bastoncillos de calabacín y queso",
    categoria: "entrantes",
    etiquetas: ["calabacín", "queso", "pan rallado", "verduras"],
    descripcion: "Bastoncitos de calabacín rebozados en pan rallado con queso en polvo y ajo.",
    foto: "bastoncillos-de-calabacin-y-queso",
    fotoAlt: "Bastones rebozados y dorados en un plato con salsa para mojar.",
    ingredientes: [
      {
        items: [
          { nombre: "calabacín" },
          { nombre: "pan rallado" },
          { nombre: "queso en polvo" },
          { nombre: "sal" },
          { nombre: "ajo" }
        ]
      }
    ],
    pasos: [
      "Corta el calabacín en bastoncitos.",
      "Mezcla el pan rallado con el queso en polvo, la sal y el ajo.",
      "Pasa los bastoncitos por la mezcla, cubriéndolos bien.",
      "Cocínalos hasta que estén dorados."
    ],
    avisos: ["Las notas no indican si se hacen al horno o fritos, ni las cantidades."],
    ampliada: true,
    fuentes: ["Recetas Afri"],
    original: "Bastoncillos de calabacín y queso\nCortar calabacín a bastoncitos y pasar por pan rallado, queso en polvo, sal y ajo."
  },

  /* ───────────── MASAS Y BÁSICOS ───────────── */
  {
    id: "masa-quebrada",
    nombre: "Masa quebrada",
    categoria: "basicos",
    etiquetas: ["masa", "tartas", "limón", "mantequilla"],
    descripcion: "Masa de mantequilla, azúcar y ralladura de limón para bases de tartas y pastas.",
    foto: "masa-quebrada",
    fotoAlt: "Masa estirada sobre una mesa de madera enharinada.",
    datos: [{ etiqueta: "Nevera", valor: "1 h" }],
    ingredientes: [
      {
        items: [
          { cantidad: "250 g", nombre: "harina" },
          { cantidad: "1 cucharada", nombre: "de agua" },
          { nombre: "ralladura de 1 limón" },
          { cantidad: "½", nombre: "de sal" },
          { cantidad: "150 g", nombre: "mantequilla" },
          { cantidad: "125 g", nombre: "azúcar" }
        ]
      }
    ],
    pasos: [
      "Mezcla la harina con el azúcar, la sal y la ralladura de limón.",
      "Añade la mantequilla en trozos y trabájala con la punta de los dedos hasta que la mezcla quede arenosa.",
      "Incorpora la cucharada de agua y amasa bien hasta formar una bola.",
      "Envuelve la masa en film y déjala 1 hora en la nevera antes de usarla."
    ],
    avisos: ["En las notas pone «½ de sal» sin unidad (probablemente media cucharadita)."],
    unidadesInterpretadas: true,
    ampliada: true,
    fuentes: ["Recetas"],
    original: "MASA QUEBRADA\n250 de harina\n1 cucharada de agua\nRalladura de un limón\n½ de sal\n150 de mantequilla\n125 de azúcar\n(…)\nAmasar bien y 1 hora en nevera."
  },
  {
    id: "masa-de-empanada",
    nombre: "Masa de empanada",
    categoria: "basicos",
    etiquetas: ["masa", "empanada", "pan", "congelar"],
    descripcion: "Masa de pan con aceite para empanadas, que se puede congelar.",
    foto: "masa-de-empanada",
    fotoAlt: "Bola de masa sobre una mesa de madera.",
    ingredientes: [
      {
        items: [
          { cantidad: "1 kg", nombre: "harina de fuerza" },
          { cantidad: "50 g", nombre: "levadura fresca", nota: "o de panadería" },
          { cantidad: "20 g", nombre: "sal" },
          { cantidad: "600 ml", nombre: "agua templada" },
          { cantidad: "80 ml", nombre: "aceite" }
        ]
      }
    ],
    pasos: [
      "Disuelve la levadura en el agua templada.",
      "Mezcla la harina de fuerza con la sal y añade el agua con la levadura y el aceite.",
      "Amasa todo hasta conseguir una masa lisa y elástica.",
      "Úsala para la empanada o congélala para otro día."
    ],
    conservacion: "Se puede congelar.",
    avisos: ["En las notas pone «1 kilo de levadura de fuerza»; se ha corregido por harina de fuerza."],
    unidadesInterpretadas: true,
    ampliada: true,
    fuentes: ["Recetas"],
    original: "MASA DE EMPANADA\n1 kilo de harina de fuerza\n50 g de levadura fresca o de panadería\n20 g de sal\n600 ml de agua templada\n80 de aceite\nAmasar todo y se puede congelar."
  },
  {
    id: "masa-de-empanada-alternativa",
    nombre: "Masa de empanada (alternativa)",
    categoria: "basicos",
    etiquetas: ["masa", "empanada", "pan"],
    descripcion: "Otra versión de la masa de empanada, más pequeña, sin aceite y con levadura prensada.",
    foto: "masa-de-empanada-alternativa",
    fotoAlt: "Manos trabajando masa sobre una encimera enharinada.",
    ingredientes: [
      {
        items: [
          { cantidad: "500 g", nombre: "harina" },
          { cantidad: "300 ml", nombre: "agua templada" },
          { cantidad: "25 g", nombre: "levadura prensada" },
          { cantidad: "1 cucharadita", nombre: "de sal" }
        ]
      }
    ],
    pasos: [
      "Disuelve la levadura prensada en un poquito del agua templada.",
      "Haz un volcán con la harina y añade en el centro la sal y el resto del agua.",
      "Mezcla y, al final, incorpora el agua con la levadura.",
      "Trabaja la masa durante 10 minutos.",
      "Déjala reposar hasta que doble su tamaño."
    ],
    unidadesInterpretadas: true,
    ampliada: true,
    fuentes: ["Recetas"],
    original: "Alternativa de MASA EMPANADA:\n500 de harina\n300 de agua templada\n25 levadura prensada\n1 cucharadita de sal\nHacer un volcán con la harina, agregar todo menos un poquito de agua con levadura que se echa al final.\nTrabajarlo durante 10 minutos y dejar que doble su tamaño."
  },
  {
    id: "leche-condensada-para-diabeticos",
    nombre: "Leche condensada para diabéticos",
    categoria: "basicos",
    etiquetas: ["leche condensada", "desnatada", "sin azúcar", "nevera"],
    descripcion: "Versión casera de leche condensada con leche desnatada y leche en polvo, sin azúcar añadido en la receta.",
    foto: "leche-condensada-para-diabeticos",
    fotoAlt: "Tarro de cristal con leche.",
    ingredientes: [
      {
        items: [
          { cantidad: "250 ml", nombre: "leche fresca desnatada" },
          { cantidad: "250 g", nombre: "leche en polvo desnatada" },
          { cantidad: "3 cucharaditas", nombre: "de «Activia»", nota: "así aparece en las notas" }
        ]
      }
    ],
    pasos: [
      "Bate la leche fresca desnatada con la leche en polvo y las 3 cucharaditas de «Activia» hasta que espese.",
      "Pásala a un bote y guárdala en la nevera."
    ],
    conservacion: "En un bote, en la nevera.",
    avisos: ["Conviene confirmar el tercer ingrediente: en las notas pone «Activia» (quizá un edulcorante)."],
    unidadesInterpretadas: true,
    ampliada: true,
    fuentes: ["Recetas"],
    original: "LECHE CONDENSADA PARA DIABÉTICOS\n250 de leche fresca desnatada\n250 de leche en polvo desnatada\n3 cucharaditas de «Activia»\nPASOS: Montarlo todo y meter en bote a la nevera."
  },

  /* ───────────── PENDIENTES (no se muestran) ───────────── */
  {
    id: "tortitas-de-calabacin-y-avena",
    nombre: "Tortitas de calabacín y avena",
    categoria: "entrantes",
    oculta: true,
    descripcion: "",
    avisos: ["En «Recetas Afri» solo aparece el título. Falta el texto de la receta."],
    ingredientes: [],
    pasos: [],
    fuentes: ["Recetas Afri"],
    original: "TORTITAS DE CALABACÍN Y AVENA"
  }
];
