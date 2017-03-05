self.addEventListener('install', function (event) {
    event.waitUntil(caches.open('isonet').then(function (cache) {
        return cache.addAll(['./', 'assets/icons/icon-192x192.png', 'assets/favicon.png', 'manifest.json', 'https://cdn.ampproject.org/v0.js']);
    }));
});
self.addEventListener('fetch', function (event) {
    event.respondWith(caches.match(event.request).then(function (response) {
        return response || fetch(event.request);
    }));
});