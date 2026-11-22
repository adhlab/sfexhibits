const CACHE = "wombs-of-wisdom-installation-v1";
const ESSENTIAL = [
  "/", "/?mode=installation", "/history/", "/project/", "/voices/", "/archive/", "/database/", "/contribute/",
  "/images/midwife-bag.png", "/video/midwife-bag-opening.webm", "/video/midwife-bag-opening.mp4",
  "/images/site/scott-ford-houses.jpg", "/images/site/oyster-shell-garden-documentary.webp"
];
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ESSENTIAL)).then(() => self.skipWaiting())));
self.addEventListener("activate", event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET" || new URL(request.url).pathname.startsWith("/api/")) return;
  event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => {
    if (response.ok && new URL(request.url).origin === self.location.origin) caches.open(CACHE).then(cache => cache.put(request, response.clone()));
    return response;
  }).catch(() => caches.match("/"))));
});
