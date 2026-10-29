/* La Cocina de la Afri — página de una receta */
(function () {
  "use strict";
  var u = window.AFRI.util;
  var e = u.escapar;
  var raiz = document.getElementById("receta");

  var id = new URLSearchParams(location.search).get("id");
  var r = u.recetas.find(function (x) { return x.id === id; });

  if (!r) {
    raiz.innerHTML =
      '<section class="contenedor no-encontrada">' +
        "<h1>No encontramos esta receta</h1>" +
        "<p>Puede que el enlace esté incompleto o que la receta haya cambiado de nombre.</p>" +
        '<a class="boton boton--principal" href="recetas.html">Ver todas las recetas</a>' +
      "</section>";
    document.title = "Receta no encontrada · La Cocina de la Afri";
    return;
  }

  var cat = u.categoria(r.categoria);
  document.title = r.nombre + " · La Cocina de la Afri";
  var meta = document.querySelector('meta[name="description"]');
  if (meta && r.descripcion) meta.setAttribute("content", r.descripcion);
  var og = document.querySelector('meta[property="og:title"]');
  if (og) og.setAttribute("content", r.nombre + " · La Cocina de la Afri");

  var CHECK = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3.5 8.5 6.5 11.5 12.5 4.5"/></svg>';

  /* ---------- Progreso guardado en este navegador ---------- */
  var CLAVE = "afri-progreso:" + r.id;
  var guardado = { ing: [], pasos: [] };
  try { guardado = JSON.parse(localStorage.getItem(CLAVE)) || guardado; } catch (err) { /* sin almacenamiento */ }
  function guardar() {
    try { localStorage.setItem(CLAVE, JSON.stringify(guardado)); } catch (err) { /* sin almacenamiento */ }
  }

  /* ---------- Datos de la cabecera ---------- */
  var datos = (r.datos || []).slice();
  if (r.raciones) datos.unshift({ etiqueta: "Comensales", valor: r.raciones + (r.raciones === 1 ? " persona" : " personas") });
  var datosHTML = datos.length ? '<dl class="datos">' + datos.map(function (d) {
    return '<div class="dato"><dt class="dato__et">' + e(d.etiqueta) + '</dt><dd class="dato__val">' + e(d.valor) + "</dd></div>";
  }).join("") + "</dl>" : "";

  /* ---------- Ingredientes ---------- */
  function mayuscula(texto) { return texto.charAt(0).toUpperCase() + texto.slice(1); }
  var nIng = 0;
  var ingHTML = (r.ingredientes || []).map(function (g) {
    var items = (g.items || []).map(function (i) {
      var k = nIng++;
      var marcado = guardado.ing.indexOf(k) > -1;
      // Cada ingrediente empieza en mayúscula (la cantidad, o el nombre si no hay cantidad).
      var cantidad = i.cantidad ? mayuscula(i.cantidad) : "";
      var nombre = i.cantidad ? (i.nombre || "") : mayuscula(i.nombre || "");
      return '<li><label class="ing">' +
        '<input type="checkbox" data-ing="' + k + '"' + (marcado ? " checked" : "") + ">" +
        '<span class="ing__caja" aria-hidden="true">' + CHECK + "</span>" +
        '<span class="ing__texto">' +
          (cantidad ? '<span class="ing__cant">' + e(cantidad) + "</span> " : "") +
          e(nombre) +
          (i.nota ? '<span class="ing__nota">' + e(i.nota) + "</span>" : "") +
        "</span>" +
      "</label></li>";
    }).join("");
    return (g.titulo ? '<h3 class="grupo-titulo">' + e(g.titulo) + "</h3>" : "") + '<ul class="lista-ing">' + items + "</ul>";
  }).join("");

  /* ---------- Pasos ---------- */
  var pasos = (r.pasos || []).map(function (p) { return typeof p === "string" ? { texto: p } : p; });
  var haySecciones = pasos.some(function (p) { return p.seccion; });
  var seccionAnterior = null;
  var pasosHTML = pasos.map(function (p, k) {
    var cabecera = "";
    if (haySecciones && p.seccion && p.seccion !== seccionAnterior) {
      cabecera = '<li class="seccion-pasos" aria-hidden="true">' + e(p.seccion) + "</li>";
      seccionAnterior = p.seccion;
    }
    var hecho = guardado.pasos.indexOf(k) > -1;
    return cabecera +
      '<li class="paso' + (hecho ? " hecho" : "") + '" data-paso="' + k + '">' +
        '<span class="paso__num" aria-hidden="true">' + (k + 1) + "</span>" +
        '<p class="paso__texto"><span class="visualmente-oculto">Paso ' + (k + 1) + (p.seccion ? " (" + e(p.seccion) + ")" : "") + ": </span>" + e(p.texto) + "</p>" +
        '<div class="paso__accion">' +
          '<button type="button" class="boton-paso" aria-pressed="' + hecho + '" aria-label="Marcar el paso ' + (k + 1) + ' como hecho">' +
            '<span class="boton-paso__icono" aria-hidden="true">' + CHECK + "</span>" +
            '<span class="boton-paso__texto">' + (hecho ? "Hecho" : "Marcar como hecho") + "</span>" +
          "</button>" +
        "</div>" +
      "</li>";
  }).join("");

  /* ---------- Información adicional ---------- */
  var extra = "";
  if (r.notas && r.notas.length) {
    extra += '<section class="info-bloque"><h3>Observaciones</h3><ul>' + r.notas.map(function (n) { return "<li>" + e(n) + "</li>"; }).join("") + "</ul></section>";
  }
  if (r.conservacion) {
    extra += '<section class="info-bloque"><h3>Conservación</h3><p>' + e(r.conservacion) + "</p></section>";
  }
  var avisos = (r.avisos || []).slice();
  if (r.unidadesInterpretadas) avisos.push("En las notas originales muchas cantidades aparecen sin unidad; aquí se indican en gramos (g) o mililitros (ml).");
  if (avisos.length) {
    extra += '<section class="info-bloque info-bloque--aviso"><h3>A tener en cuenta</h3><ul>' + avisos.map(function (a) { return "<li>" + e(a) + "</li>"; }).join("") + "</ul></section>";
  }
  if (r.original) {
    extra += '<section class="info-bloque original" id="notas-originales"><details>' +
      "<summary>Ver la receta tal como la apuntó la Afri</summary>" +
      "<pre>" + e(r.original) + "</pre>" +
      '<p class="original__fuente">Fuente: ' + e((r.fuentes || []).join(" y ")) + ". Se han corregido erratas evidentes.</p>" +
    "</details></section>";
  }

  /* ---------- Relacionadas ---------- */
  var misma = u.recetasDe(r.categoria).filter(function (x) { return x.id !== r.id; });
  var otras = u.recetas.filter(function (x) { return x.categoria !== r.categoria && x.destacada; });
  var relacionadas = misma.slice(0, 3);
  var tituloRel = misma.length ? "Más recetas de " + cat.nombre.toLowerCase() : "Otras recetas";
  if (relacionadas.length < 3) relacionadas = relacionadas.concat(otras.slice(0, 3 - relacionadas.length));

  /* ---------- Página ---------- */
  raiz.innerHTML =
    '<nav class="migas contenedor" aria-label="Estás aquí"><ol>' +
      '<li><a href="./">Inicio</a></li>' +
      '<li><a href="recetas.html">Recetas</a></li>' +
      '<li><a href="' + u.enlaceCategoria(cat.id) + '">' + e(cat.nombre) + "</a></li>" +
      '<li aria-current="page">' + e(r.nombre) + "</li>" +
    "</ol></nav>" +

    '<article class="contenedor">' +
      '<header class="receta-cabecera">' +
        "<div>" +
          '<a class="etiqueta-cat" href="' + u.enlaceCategoria(cat.id) + '">' + e(cat.nombre) + "</a>" +
          "<h1>" + e(r.nombre) + "</h1>" +
          (r.descripcion ? '<p class="receta-cabecera__desc">' + e(r.descripcion) + "</p>" : "") +
          datosHTML +
          (r.ampliada && r.original ? '<p class="aviso-ampliada">Pasos desarrollados a partir de las notas de la Afri, sin cambiar sus cantidades. <a href="#notas-originales">Ver sus notas originales</a>.</p>' : "") +
        "</div>" +
        '<figure class="receta-cabecera__foto">' +
          u.imagenHTML(r.foto, r.fotoExt, r.fotoAlt, { prioridad: true, sizes: "(max-width: 860px) 100vw, 560px" }) +
          (r.fotoCredito ? "<figcaption>Foto: " + e(r.fotoCredito) + ".</figcaption>" : "") +
        "</figure>" +
      "</header>" +

      '<div class="receta-cuerpo">' +
        '<aside class="ingredientes panel" aria-labelledby="titulo-ing">' +
          '<div class="panel__cabecera"><h2 id="titulo-ing">Ingredientes</h2><span class="contador" id="contador-ing" aria-live="polite"></span></div>' +
          ingHTML +
          '<div class="panel__acciones"><button type="button" class="boton boton--texto" id="desmarcar-ing">Desmarcar todo</button></div>' +
        "</aside>" +

        '<section aria-labelledby="titulo-pasos">' +
          '<div class="pasos-cabecera"><h2 id="titulo-pasos">Preparación</h2>' +
            '<button type="button" class="boton boton--texto" id="reiniciar-pasos">Empezar de nuevo</button></div>' +
          '<div class="progreso">' +
            '<div class="progreso__texto"><span id="paso-actual"></span><span id="pasos-hechos"></span></div>' +
            '<div class="progreso__barra" role="progressbar" aria-labelledby="pasos-hechos" aria-valuemin="0" aria-valuemax="' + pasos.length + '" id="barra"><div class="progreso__relleno" id="relleno"></div></div>' +
          "</div>" +
          '<ol class="lista-pasos" id="pasos">' + pasosHTML + "</ol>" +
          '<p class="terminado" id="terminado" role="status">¡Receta terminada! Que aproveche.</p>' +
          ("wakeLock" in navigator ? '<label class="pantalla"><input type="checkbox" id="pantalla"> Mantener la pantalla encendida mientras cocino</label>' : "") +
          (extra ? '<div class="info-extra">' + extra + "</div>" : "") +
          '<p style="margin-top:32px"><a class="boton boton--secundario" href="recetas.html"><span aria-hidden="true">←</span> Volver a las recetas</a></p>' +
        "</section>" +
      "</div>" +
    "</article>" +

    (relacionadas.length ? '<section class="seccion relacionadas" aria-labelledby="titulo-rel"><div class="contenedor">' +
      '<div class="seccion__cabecera"><div><h2 id="titulo-rel">' + e(tituloRel) + "</h2></div>" +
      '<a class="boton boton--texto" href="' + u.enlaceCategoria(cat.id) + '">Ver la categoría <span class="flecha" aria-hidden="true">→</span></a></div>' +
      '<div class="rejilla">' + relacionadas.map(u.tarjetaHTML).join("") + "</div>" +
    "</div></section>" : "");

  /* ---------- Interacción: ingredientes ---------- */
  var cajas = raiz.querySelectorAll("[data-ing]");
  var contadorIng = document.getElementById("contador-ing");
  function contarIng() {
    var n = raiz.querySelectorAll("[data-ing]:checked").length;
    contadorIng.textContent = n + " de " + cajas.length + " listos";
  }
  raiz.addEventListener("change", function (ev) {
    var c = ev.target.closest("[data-ing]");
    if (!c) return;
    guardado.ing = Array.prototype.filter.call(cajas, function (x) { return x.checked; }).map(function (x) { return +x.getAttribute("data-ing"); });
    guardar(); contarIng();
  });
  document.getElementById("desmarcar-ing").addEventListener("click", function () {
    cajas.forEach(function (x) { x.checked = false; });
    guardado.ing = []; guardar(); contarIng();
  });

  /* ---------- Interacción: pasos ---------- */
  var lista = document.getElementById("pasos");
  var elPasos = lista.querySelectorAll(".paso");
  function actualizarPasos() {
    var hechos = 0, actual = -1;
    elPasos.forEach(function (li, k) {
      var hecho = li.classList.contains("hecho");
      if (hecho) hechos++; else if (actual === -1) actual = k;
      li.classList.remove("actual");
    });
    if (actual > -1) elPasos[actual].classList.add("actual");
    var total = elPasos.length;
    document.getElementById("paso-actual").textContent = actual > -1 ? "Paso " + (actual + 1) + " de " + total : "Todos los pasos hechos";
    document.getElementById("pasos-hechos").textContent = hechos + (hechos === 1 ? " hecho" : " hechos") + " de " + total;
    document.getElementById("relleno").style.width = (total ? hechos / total * 100 : 0) + "%";
    document.getElementById("barra").setAttribute("aria-valuenow", hechos);
    document.getElementById("terminado").classList.toggle("visible", total > 0 && hechos === total);
    guardado.pasos = [];
    elPasos.forEach(function (li, k) { if (li.classList.contains("hecho")) guardado.pasos.push(k); });
    guardar();
  }
  lista.addEventListener("click", function (ev) {
    var b = ev.target.closest(".boton-paso");
    if (!b) return;
    var li = b.closest(".paso");
    var hecho = !li.classList.contains("hecho");
    li.classList.toggle("hecho", hecho);
    b.setAttribute("aria-pressed", String(hecho));
    b.querySelector(".boton-paso__texto").textContent = hecho ? "Hecho" : "Marcar como hecho";
    actualizarPasos();
  });
  document.getElementById("reiniciar-pasos").addEventListener("click", function () {
    elPasos.forEach(function (li) {
      li.classList.remove("hecho");
      var b = li.querySelector(".boton-paso");
      b.setAttribute("aria-pressed", "false");
      b.querySelector(".boton-paso__texto").textContent = "Marcar como hecho";
    });
    actualizarPasos();
  });

  /* ---------- Pantalla encendida (si el navegador lo permite) ---------- */
  var interruptor = document.getElementById("pantalla");
  var bloqueo = null;
  function pedirBloqueo() {
    navigator.wakeLock.request("screen").then(function (b) { bloqueo = b; }).catch(function () { interruptor.checked = false; });
  }
  if (interruptor) {
    interruptor.addEventListener("change", function () {
      if (interruptor.checked) pedirBloqueo();
      else if (bloqueo) { bloqueo.release(); bloqueo = null; }
    });
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "visible" && interruptor.checked) pedirBloqueo();
    });
  }

  contarIng();
  actualizarPasos();
})();
