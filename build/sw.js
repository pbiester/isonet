self.addEventListener('install', () => {
    self.skipWaiting();
    clients.claim().catch(() => null);
});
self.addEventListener('fetch', (event) => {
    event.respondWith(
        // Try the cache
        caches.match(event.request).then((cacheResponse) => {
            // Fall back to network
            const networkTry = fetch(event.request);
            return networkTry.then((networkResponse) => {
                return caches.open('default').then((cache) => {
                    cache.put(event.request, networkResponse.clone());
                    return networkResponse
                });
            }).catch(() => {
                if (cacheResponse) {
                    return cacheResponse;
                } else {
                    return new Response(null, {status: 404});
                }
            })
        })
    );
});