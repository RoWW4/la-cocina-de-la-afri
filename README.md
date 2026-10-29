# La Cocina de la Afri

Web de recetas de Afri: HTML, CSS y JavaScript sin frameworks, lista para GitHub Pages.

## Estructura

```
index.html          Portada (presentación, destacadas, categorías, Sobre Afri)
recetas.html        Catálogo con buscador y filtros (recetas.html?categoria=cuchareo&q=chorizo)
receta.html         Ficha de una receta (receta.html?id=lentejas)
css/styles.css      Estilos (colores y tipografías al principio, en :root)
js/main.js          Cabecera, pie, menú móvil, animaciones y utilidades comunes
js/inicio.js        Portada
js/catalogo.js      Búsqueda y filtros
js/receta.js        Ingredientes marcables, pasos y progreso
data/recetas.js     LAS RECETAS (aquí se añaden y corrigen)
data/categorias.js  Categorías
data/sitio.js       Textos de «Sobre Afri» y su foto
assets/images/      Fotos (recetas/, portada/) y credits.md con sus licencias
assets/logo/        Logo y favicon
```

## Añadir o cambiar una receta

1. Abre `data/recetas.js`. Al principio del archivo se explica cada campo.
2. Copia una receta parecida, pégala y cambia sus datos. El `id` debe ser único, sin espacios ni tildes.
3. Pon su foto en `assets/images/recetas/` como `id-sm.webp` y `id-lg.webp` y apúntala en `assets/images/credits.md`.
4. Para sacarla en la portada, añade `destacada: true`.

## Probar en local

Abre `index.html` con doble clic, o sirve la carpeta con cualquier servidor estático.

## Publicar en GitHub Pages

En el repositorio: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**. La web queda en `https://roww4.github.io/la-cocina-de-la-afri/`. Todas las rutas son relativas, así que funciona dentro de esa subcarpeta.

## Pendiente de revisar con Afri

- **Tortitas de calabacín y avena**: solo está el título; la receta está oculta (`oculta: true`) hasta tener el texto.
- **Pastel de queso japonés**: ¿el segundo tramo de horno es a 60 °C o a 160 °C?
- **Pumcake**: ¿la naranja va en zumo o entera triturada? ¿«½ de levadura» es medio sobre?
- **Rosquilla con manga**: ¿se fríen o se hornean? ¿son 20 cl de ron (200 ml)?
- **Leche condensada para diabéticos**: confirmar el ingrediente «Activia».
- **Pelotas «del marrano»**: «½ leche» se ha entendido como medio litro.
- **Mousse de chocolate**: qué se hace con las yemas y cuándo se añade la nata.
- **Masa quebrada**: «½ de sal» sin unidad.
- **Bastoncillos de calabacín**: ¿al horno o fritos?
- Varias recetas de repostería no indican temperatura ni tiempo de horno (bizcocho glaseado, brazo de gitano, pumcake, coquitos, flores de limón, albóndigas al horno).
- Las cantidades sin unidad de las notas se han interpretado en gramos o mililitros.
- Los pasos de muchas recetas se han desarrollado a partir de notas muy breves; cada receta muestra las notas originales para poder compararlas.

## Instalar como app en Android

Abre la web en Chrome → menú ⋮ → **Instalar aplicación** (o **Añadir a pantalla de inicio**). Gracias a `manifest.webmanifest` y `sw.js` se abre a pantalla completa con su icono y las recetas ya visitadas se pueden consultar sin conexión. Si cambias archivos importantes, sube `VERSION` en `sw.js`.
