// <script>if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js')}</script>
self.addEventListener('install', function (event) {
    event.waitUntil(caches.open('isonet').then(function (cache) {
        return cache.addAll(['./', 'assets/favicon.png', 'manifest.json', 'https://cdn.ampproject.org/v0.js']);
    }));
});
self.addEventListener('fetch', function (event) {
    event.respondWith(fetch(event.request).then(function(response) {
        return response;
    }).catch(function() {
        return caches.match(event.request);
    }));
});