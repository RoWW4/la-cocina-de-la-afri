/* La Cocina de la Afri — portada */
(function () {
  "use strict";
  var AFRI = window.AFRI;
  var u = AFRI.util;
  var sitio = AFRI.sitio || {};

  // Cifras del recetario
  var cats = u.categoriasConRecetas();
  document.getElementById("cifras").innerHTML =
    "<li><strong>" + u.recetas.length + "</strong><span>recetas</span></li>" +
    "<li><strong>" + cats.length + "</strong><span>categorías</span></li>";

  // Recetas destacadas (marcadas con destacada: true en data/recetas.js)
  var destacadas = u.recetas.filter(function (r) { return r.destacada; }).slice(0, 6);
  var hueco = document.getElementById("destacadas");
  hueco.innerHTML = destacadas.map(u.tarjetaHTML).join("");
  hueco.querySelectorAll(".tarjeta").forEach(function (t, i) {
    t.classList.add("revelar");
    t.style.transitionDelay = (i % 3) * 80 + "ms";
  });

  // Categorías
  document.getElementById("lista-categorias").innerHTML = cats.map(function (c, i) {
    var n = u.recetasDe(c.id).length;
    return '<a class="categoria revelar" style="transition-delay:' + (i % 4) * 70 + 'ms" href="' + u.enlaceCategoria(c.id) + '">' +
      '<img src="' + u.foto(c.foto, "sm", u.extDeFoto(c.foto)) + '" width="640" height="480" alt="" loading="lazy" decoding="async">' +
      '<span class="categoria__texto">' +
        '<span class="categoria__nombre">' + u.escapar(c.nombre) + "</span>" +
        '<span class="categoria__num">' + n + (n === 1 ? " receta" : " recetas") + ' <span class="flecha" aria-hidden="true">→</span></span>' +
      "</span>" +
    "</a>";
  }).join("");

  // Sobre la Afri
  if (sitio.sobreTitulo) document.getElementById("titulo-sobre").textContent = sitio.sobreTitulo;
  document.getElementById("texto-sobre").innerHTML = (sitio.sobreAfri || []).map(function (p) {
    return "<p>" + u.escapar(p) + "</p>";
  }).join("");
  if (sitio.fotoAfri) {
    var retrato = document.getElementById("retrato-afri");
    retrato.classList.add("sobre__retrato--foto");
    retrato.innerHTML = '<img src="' + u.escapar(sitio.fotoAfri) + '" width="400" height="400" alt="' + u.escapar(sitio.fotoAfriAlt || "La Afri") + '" loading="lazy">';
  }

  u.revelar();
})();
