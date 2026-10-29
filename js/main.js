/*
 * La Cocina de la Afri — funciones comunes a todas las páginas:
 * cabecera, pie, menú móvil, animaciones de aparición y utilidades para las recetas.
 */
(function () {
  "use strict";

  var AFRI = window.AFRI = window.AFRI || {};
  var categorias = AFRI.categorias || [];
  var todas = AFRI.recetas || [];

  document.documentElement.classList.add("js");

  /* ---------- Utilidades ---------- */

  // Quita tildes y pasa a minúsculas para que la búsqueda sea tolerante.
  function normalizar(texto) {
    return String(texto || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
  }

  function escapar(texto) {
    return String(texto == null ? "" : texto)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }

  var recetas = todas.filter(function (r) { return !r.oculta; });

  function categoria(id) {
    return categorias.find(function (c) { return c.id === id; }) || { id: id, nombre: "Otras recetas" };
  }

  function recetasDe(idCategoria) {
    return recetas.filter(function (r) { return r.categoria === idCategoria; });
  }

  // Solo las categorías que tienen alguna receta visible.
  function categoriasConRecetas() {
    return categorias.filter(function (c) { return recetasDe(c.id).length > 0; });
  }

  function foto(nombre, tam, ext) {
    return "assets/images/recetas/" + nombre + "-" + tam + "." + (ext || "webp");
  }

  // Busca la extensión de una foto (por si una categoría usa una foto .jpg).
  function extDeFoto(nombre) {
    var r = todas.find(function (x) { return x.foto === nombre; });
    return r && r.fotoExt;
  }

  function imagenHTML(nombre, ext, alt, opciones) {
    opciones = opciones || {};
    var sizes = opciones.sizes || "(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 380px";
    return '<img src="' + foto(nombre, "sm", ext) + '"' +
      ' srcset="' + foto(nombre, "sm", ext) + ' 640w, ' + foto(nombre, "lg", ext) + ' 1280w"' +
      ' sizes="' + sizes + '" width="640" height="480"' +
      ' alt="' + escapar(alt) + '"' +
      (opciones.prioridad ? ' fetchpriority="high"' : ' loading="lazy" decoding="async"') + ">";
  }

  function enlaceReceta(r) { return "receta.html?id=" + encodeURIComponent(r.id); }
  function enlaceCategoria(id) { return "recetas.html?categoria=" + encodeURIComponent(id); }

  // Primer dato de tiempo para mostrar en la tarjeta (si la receta lo tiene).
  function tiempoTarjeta(r) {
    var d = (r.datos || []).find(function (x) { return /horne|cocci|arroz/i.test(x.etiqueta); });
    return d ? d.valor : "";
  }

  var ICONO_RELOJ = '<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>';

  function tarjetaHTML(r) {
    var cat = categoria(r.categoria);
    var tiempo = tiempoTarjeta(r);
    return '<article class="tarjeta">' +
      '<div class="tarjeta__imagen">' + imagenHTML(r.foto, r.fotoExt, r.fotoAlt) + "</div>" +
      '<div class="tarjeta__cuerpo">' +
        '<span class="etiqueta-cat">' + escapar(cat.nombre) + "</span>" +
        '<h3><a href="' + enlaceReceta(r) + '">' + escapar(r.nombre) + "</a></h3>" +
        (r.descripcion ? '<p class="tarjeta__desc">' + escapar(r.descripcion) + "</p>" : "") +
        '<div class="tarjeta__pie">' +
          (tiempo ? '<span style="display:inline-flex;align-items:center;gap:6px">' + ICONO_RELOJ + '<span class="visualmente-oculto">Tiempo: </span>' + escapar(tiempo) + "</span>" : "<span></span>") +
          '<span class="tarjeta__ver" aria-hidden="true">Ver receta <span class="flecha">→</span></span>' +
        "</div>" +
      "</div>" +
    "</article>";
  }

  /* ---------- Cabecera y pie (comunes a todas las páginas) ---------- */

  var pagina = document.body.getAttribute("data-pagina");

  function navEnlace(href, texto, activo) {
    return '<li><a href="' + href + '"' + (activo ? ' aria-current="page"' : "") + ">" + texto + "</a></li>";
  }

  function pintarCabecera() {
    var hueco = document.getElementById("cabecera");
    if (!hueco) return;
    hueco.outerHTML =
      '<a class="saltar" href="#contenido">Saltar al contenido</a>' +
      '<header class="cabecera" id="cabecera-sitio">' +
        '<div class="contenedor cabecera__fila">' +
          '<a class="marca" href="./" aria-label="La Cocina de la Afri, ir al inicio">' +
            '<img src="assets/logo/logo-240.png" width="96" height="96" alt="">' +
            '<span class="marca__nombre">La Cocina de la Afri<span>Recetario familiar</span></span>' +
          "</a>" +
          '<button class="menu-boton" type="button" aria-expanded="false" aria-controls="nav-principal">' +
            '<span class="menu-boton__icono" aria-hidden="true"><span></span><span></span><span></span></span>Menú' +
          "</button>" +
          '<nav class="nav" id="nav-principal" aria-label="Principal">' +
            '<ul class="nav__lista">' +
              navEnlace("./", "Inicio", pagina === "inicio") +
              navEnlace("index.html#sobre-afri", "Sobre la Afri", false) +
              '<li><a class="boton boton--principal" href="recetas.html"' + (pagina === "recetas" ? ' aria-current="page"' : "") + ">Recetas</a></li>" +
            "</ul>" +
          "</nav>" +
        "</div>" +
      "</header>";
  }

  function pintarPie() {
    var hueco = document.getElementById("pie");
    if (!hueco) return;
    var cats = categoriasConRecetas().map(function (c) {
      return '<li><a href="' + enlaceCategoria(c.id) + '">' + escapar(c.nombre) + "</a></li>";
    }).join("");
    hueco.outerHTML =
      '<footer class="pie">' +
        '<div class="contenedor">' +
          '<div class="pie__rejilla">' +
            "<div>" +
              '<div class="pie__marca">' +
                '<img src="assets/logo/logo-480.png" width="140" height="140" alt="Logo de La Cocina de la Afri" loading="lazy">' +
                "<div>" +
                  '<p class="pie__nombre">La Cocina de la Afri</p>' +
                  '<p class="pie__frase">Lo que se cocina en casa, se guarda para siempre.</p>' +
                "</div>" +
              "</div>" +
            "</div>" +
            '<nav aria-label="Pie de página"><h2>La web</h2><ul>' +
              '<li><a href="./">Inicio</a></li>' +
              '<li><a href="recetas.html">Todas las recetas</a></li>' +
              '<li><a href="index.html#categorias">Categorías</a></li>' +
              '<li><a href="index.html#sobre-afri">Sobre la Afri</a></li>' +
            "</ul></nav>" +
            '<nav aria-label="Categorías"><h2>Categorías</h2><ul>' + cats + "</ul></nav>" +
          "</div>" +
          '<div class="pie__legal">' +
            "<p>Recetas de la Afri. Las fotografías son ilustrativas y no corresponden a sus platos.</p>" +
            '<p><a href="https://github.com/RoWW4/la-cocina-de-la-afri/blob/main/assets/images/credits.md">Créditos de las imágenes</a></p>' +
          "</div>" +
        "</div>" +
      "</footer>";
  }

  function activarMenu() {
    var boton = document.querySelector(".menu-boton");
    var nav = document.getElementById("nav-principal");
    if (!boton || !nav) return;
    function cerrar() { boton.setAttribute("aria-expanded", "false"); nav.classList.remove("abierto"); }
    boton.addEventListener("click", function () {
      var abierto = boton.getAttribute("aria-expanded") === "true";
      boton.setAttribute("aria-expanded", String(!abierto));
      nav.classList.toggle("abierto", !abierto);
    });
    nav.addEventListener("click", function (e) { if (e.target.closest("a")) cerrar(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("abierto")) { cerrar(); boton.focus(); }
    });
    window.matchMedia("(min-width: 861px)").addEventListener("change", cerrar);
  }

  function activarSombraCabecera() {
    var cab = document.getElementById("cabecera-sitio");
    if (!cab) return;
    function revisar() { cab.classList.toggle("con-sombra", window.scrollY > 8); }
    window.addEventListener("scroll", revisar, { passive: true });
    revisar();
  }

  /* ---------- Aparición suave de elementos ---------- */

  var observador = ("IntersectionObserver" in window) ? new IntersectionObserver(function (entradas) {
    entradas.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("visible"); observador.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }) : null;

  function revelar(raiz) {
    (raiz || document).querySelectorAll(".revelar:not(.visible)").forEach(function (el) {
      if (observador) observador.observe(el); else el.classList.add("visible");
    });
  }

  /* ---------- Arranque ---------- */
  pintarCabecera();
  pintarPie();
  activarMenu();
  activarSombraCabecera();
  document.addEventListener("DOMContentLoaded", function () { revelar(); });

  AFRI.util = {
    normalizar: normalizar,
    escapar: escapar,
    recetas: recetas,
    categoria: categoria,
    recetasDe: recetasDe,
    categoriasConRecetas: categoriasConRecetas,
    foto: foto,
    extDeFoto: extDeFoto,
    imagenHTML: imagenHTML,
    tarjetaHTML: tarjetaHTML,
    enlaceReceta: enlaceReceta,
    enlaceCategoria: enlaceCategoria,
    revelar: revelar
  };
})();

// Permite instalar la web como app en el móvil (y verla sin conexión).
if ("serviceWorker" in navigator && (location.protocol === "https:" || location.hostname === "localhost")) {
  window.addEventListener("load", function () { navigator.serviceWorker.register("sw.js").catch(function () {}); });
}
