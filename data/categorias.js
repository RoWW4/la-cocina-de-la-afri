/*
 * Categorías de La Cocina de la Afri.
 *
 * Para añadir una categoría nueva, copia uno de los bloques y cambia:
 *   id          → nombre corto sin espacios ni tildes (se usa en los enlaces)
 *   nombre      → cómo se ve en la web
 *   descripcion → frase corta que aparece en la portada
 *   foto        → nombre de una foto de assets/images/recetas (sin -sm/-lg ni extensión)
 *
 * El orden de esta lista es el orden en que aparecen en la web.
 * Las categorías sin recetas no se muestran.
 */
window.AFRI = window.AFRI || {};

window.AFRI.categorias = [
  {
    id: "tartas",
    nombre: "Tartas y pasteles",
    descripcion: "Pasteles de queso, de cuajada y pequeñas tartaletas.",
    foto: "pastel-de-queso-japones"
  },
  {
    id: "bizcochos",
    nombre: "Bizcochos",
    descripcion: "Bizcochos, brazo de gitano y masas horneadas.",
    foto: "bizcocho-brazo-de-gitano"
  },
  {
    id: "dulces-de-sarten",
    nombre: "Dulces de sartén",
    descripcion: "Rosquillas, donuts y masas dulces fritas.",
    foto: "rosquilla-con-manga"
  },
  {
    id: "postres",
    nombre: "Postres y dulces",
    descripcion: "Mousse, helado, coquitos y dulces más ligeros.",
    foto: "mousse-de-chocolate"
  },
  {
    id: "cuchareo",
    nombre: "Cuchareo",
    descripcion: "Legumbres, potajes y cremas para comer con cuchara.",
    foto: "lentejas"
  },
  {
    id: "principales",
    nombre: "Platos principales",
    descripcion: "Arroces, albóndigas y hamburguesas caseras.",
    foto: "albondigas"
  },
  {
    id: "entrantes",
    nombre: "Aperitivos y entrantes",
    descripcion: "Para empezar la comida o picar algo.",
    foto: "quiche"
  },
  {
    id: "basicos",
    nombre: "Masas y básicos",
    descripcion: "Masas y preparaciones que sirven de base para otras recetas.",
    foto: "masa-de-empanada"
  }
];
