const CACHE_NAME = 'blueprint-v7';
const ASSETS = [
  '/daily-blueprint/',
  '/daily-blueprint/index.html',
  '/daily-blueprint/manifest.json',
  '/daily-blueprint/icons/icon-192x192.png',
  '/daily-blueprint/icons/icon-512x512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then(names => Promise.all(names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(resp => {
        if (!resp || resp.status !== 200) return resp;
        const clone = resp.clone();
        caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        return resp;
      }).catch(() => {
        if (e.request.destination === 'document') return caches.match('/daily-blueprint/index.html');
      });
    })
  );
});
