/* Generated local PWA cache for the Russian Cyberpunk Red Companion. */
const CACHE_NAME = 'cpr-ru-fa2761814e3e';
const CACHE_PREFIX = 'cpr-ru-';

self.addEventListener('install', (event) => {
  // Activate immediately. Assets are cached lazily as they are requested;
  // pre-caching the whole Flutter build can keep an update stuck installing.
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter((name) => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME).map((name) => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== self.location.origin) return;

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    try {
      const response = await fetch(request);
      if (response.ok && request.method === 'GET') cache.put(request, response.clone()).catch(() => {});
      return response;
    } catch (error) {
      return (await cache.match(request, { ignoreSearch: true })) || Response.error();
    }
  })());
});
