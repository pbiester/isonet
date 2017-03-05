self.addEventListener('install', function (event) {
    event.waitUntil(caches.open('isonet').then(function (cache) {
        return cache.addAll(['./', 'assets/favicon.png', 'manifest.json', 'https://cdn.ampproject.org/v0.js']);
    }));
});
self.addEventListener('fetch', function (event) {
    fetch(event.request).catch(function() {
        return caches.match(event.request);
    })
});