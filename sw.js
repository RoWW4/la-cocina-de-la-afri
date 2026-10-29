/*
 * Service worker de La Cocina de la Afri: permite instalar la web como app
 * y consultar las recetas ya visitadas sin conexión.
 * Al cambiar archivos importantes, sube el número de VERSION para renovar la caché.
 */
var VERSION = "afri-v1";
var BASICOS = [
  "./",
  "index.html",
  "recetas.html",
  "receta.html",
  "css/styles.css",
  "js/main.js",
  "js/inicio.js",
  "js/catalogo.js",
  "js/receta.js",
  "data/sitio.js",
  "data/categorias.js",
  "data/recetas.js",
  "assets/logo/logo-240.png",
  "assets/logo/logo-480.png",
  "assets/logo/favicon-64.png",
  "assets/images/portada/ingredientes-reposteria-900.webp"
];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(VERSION).then(function (c) { return c.addAll(BASICOS); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (claves) {
    return Promise.all(claves.filter(function (k) { return k !== VERSION; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

// Primero la red (para ver siempre lo último); si no hay conexión, lo guardado.
self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  e.respondWith(
    fetch(req).then(function (res) {
      if (res.ok) {
        var copia = res.clone();
        caches.open(VERSION).then(function (c) { c.put(req, copia); });
      }
      return res;
    }).catch(function () {
      return caches.match(req, { ignoreSearch: req.mode === "navigate" });
    })
  );
});
