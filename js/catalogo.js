/* La Cocina de la Afri — catálogo con búsqueda y filtros */
(function () {
  "use strict";
  var u = window.AFRI.util;

  var entrada = document.getElementById("busqueda");
  var limpiar = document.getElementById("limpiar-busqueda");
  var chips = document.getElementById("chips");
  var resultados = document.getElementById("resultados");
  var estado = document.getElementById("estado");
  var vacio = document.getElementById("vacio");
  var restablecer = document.getElementById("restablecer");

  var cats = u.categoriasConRecetas();
  var params = new URLSearchParams(location.search);
  var filtro = {
    q: params.get("q") || "",
    cat: cats.some(function (c) { return c.id === params.get("categoria"); }) ? params.get("categoria") : ""
  };

  // Texto en el que se busca: nombre, categoría, etiquetas e ingredientes.
  var indice = u.recetas.map(function (r) {
    var ings = (r.ingredientes || []).map(function (g) {
      return (g.items || []).map(function (i) { return i.nombre || i.cantidad || ""; }).join(" ");
    }).join(" ");
    return {
      receta: r,
      nombre: u.normalizar(r.nombre),
      resto: u.normalizar([u.categoria(r.categoria).nombre, (r.etiquetas || []).join(" "), ings].join(" "))
    };
  });

  function pintarChips() {
    var html = '<button type="button" class="chip" data-cat="" aria-pressed="' + (!filtro.cat) + '">Todas<span class="chip__num">' + u.recetas.length + "</span></button>";
    html += cats.map(function (c) {
      return '<button type="button" class="chip" data-cat="' + c.id + '" aria-pressed="' + (filtro.cat === c.id) + '">' +
        u.escapar(c.nombre) + '<span class="chip__num">' + u.recetasDe(c.id).length + "</span></button>";
    }).join("");
    chips.innerHTML = html;
  }

  function filtrar() {
    var palabras = u.normalizar(filtro.q).split(/\s+/).filter(Boolean);
    return indice.filter(function (x) {
      if (filtro.cat && x.receta.categoria !== filtro.cat) return false;
      return palabras.every(function (p) { return x.nombre.indexOf(p) > -1 || x.resto.indexOf(p) > -1; });
    }).sort(function (a, b) {
      // Primero las que coinciden en el nombre
      if (!palabras.length) return 0;
      var an = palabras.every(function (p) { return a.nombre.indexOf(p) > -1; });
      var bn = palabras.every(function (p) { return b.nombre.indexOf(p) > -1; });
      return an === bn ? 0 : an ? -1 : 1;
    }).map(function (x) { return x.receta; });
  }

  function actualizarURL() {
    var p = new URLSearchParams();
    if (filtro.cat) p.set("categoria", filtro.cat);
    if (filtro.q.trim()) p.set("q", filtro.q.trim());
    var qs = p.toString();
    history.replaceState(null, "", location.pathname + (qs ? "?" + qs : ""));
  }

  function pintar() {
    var lista = filtrar();
    resultados.innerHTML = lista.map(u.tarjetaHTML).join("");
    resultados.querySelectorAll(".tarjeta").forEach(function (t, i) {
      t.style.animationDelay = Math.min(i, 8) * 35 + "ms";
    });
    vacio.hidden = lista.length > 0;
    var hayFiltro = !!(filtro.cat || filtro.q.trim());
    restablecer.hidden = !hayFiltro;
    limpiar.hidden = !filtro.q;

    var n = lista.length;
    var texto = n === 0 ? "Ninguna receta encontrada" : n === 1 ? "1 receta" : n + " recetas";
    if (filtro.cat) texto += " en " + u.categoria(filtro.cat).nombre;
    if (filtro.q.trim()) texto += " para «" + filtro.q.trim() + "»";
    estado.textContent = texto;

    document.title = (filtro.cat ? u.categoria(filtro.cat).nombre : "Todas las recetas") + " · La Cocina de la Afri";
    actualizarURL();
  }

  function reiniciar() {
    filtro.q = ""; filtro.cat = "";
    entrada.value = "";
    pintarChips(); pintar();
    entrada.focus();
  }

  var espera;
  entrada.value = filtro.q;
  entrada.addEventListener("input", function () {
    filtro.q = entrada.value;
    clearTimeout(espera);
    espera = setTimeout(pintar, 120);
  });
  document.getElementById("form-busqueda").addEventListener("submit", function (e) { e.preventDefault(); pintar(); });
  limpiar.addEventListener("click", function () { entrada.value = ""; filtro.q = ""; pintar(); entrada.focus(); });

  chips.addEventListener("click", function (e) {
    var chip = e.target.closest(".chip");
    if (!chip) return;
    filtro.cat = chip.getAttribute("data-cat");
    chips.querySelectorAll(".chip").forEach(function (c) {
      c.setAttribute("aria-pressed", String(c === chip));
    });
    pintar();
  });

  restablecer.addEventListener("click", reiniciar);
  document.getElementById("restablecer-vacio").addEventListener("click", reiniciar);

  pintarChips();
  pintar();

  // Lleva a la vista el filtro activo en móvil
  var activo = chips.querySelector('[aria-pressed="true"]');
  if (activo && filtro.cat) activo.scrollIntoView({ block: "nearest", inline: "center" });
})();
