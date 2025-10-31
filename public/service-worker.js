const CACHE_NAME = "myqstudio-full-cache-v2";
const ASSETS = [
  "/",
  "/favicon.ico",
  "/manifest.json",
  "/bgs/individual_bg.webp",
  "/bgs/landing_bg.webp",
  "/bgs/organizations_bg.webp",
  "/bgs/teams_bg.webp",
  "/footer/apple.webp",
  "/footer/footer.webp",
  "/footer/playStore.webp",
  "/icons/Brand-select.svg",
  "/icons/Brand.svg",
  "/icons/Category-select.svg",
  "/icons/Category.svg",
  "/icons/Coupon-select.svg",
  "/icons/Coupon.svg",
  "/icons/Icon.webp",
  "/icons/Products-select.svg",
  "/icons/Products.svg",
  "/icons/arrow-left.webp",
  "/icons/click.webp",
  "/icons/facebook.webp",
  "/icons/faq_chevron.webp",
  "/icons/instagram.webp",
  "/icons/linkedin.webp",
  "/icons/tick_icon.webp",
  "/logos/full_logo.webp",
  "/logos/q-logo-mobile.webp",
  "/logos/q_logo.webp",
  "/logos/q_white_logo.webp",
];

self.addEventListener("install", (event) => {
  console.log("[SW] Installing and caching core assets...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.allSettled(
        ASSETS.map((asset) =>
          cache.add(asset).catch(() => console.warn("[SW] Failed to cache:", asset))
        )
      )
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("[SW] Activated, cleaning old caches...");
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => key !== CACHE_NAME && caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const request = event.request;

  if (request.method !== "GET") return;

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(request)
        .then((networkResponse) => {
          if (
            networkResponse &&
            networkResponse.status === 200 &&
            (request.url.endsWith(".js") ||
              request.url.endsWith(".css") ||
              request.headers.get("accept")?.includes("text/html"))
          ) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => {
          if (request.headers.get("accept")?.includes("text/html")) {
            return caches.match("/");
          }
        });
    })
  );
});
