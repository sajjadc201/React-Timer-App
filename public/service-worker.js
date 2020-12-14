const CACHE_FILES = "timer";
const urlsToCache = ["/", "index.html", "/favicon.ico", "/manifest.json"];

//Install SW

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_FILES).then((cache) => {
      console.log("opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

//Getting Request

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(e.request);
    })
  );
});

//activated SW

self.addEventListener("activate", (e) => {
  console.log("service worker activated");
});
