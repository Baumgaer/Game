import { Logger } from "~client/lib/Logger";


// For some reason this is necessary to get typings...
export default null;
declare let self: ServiceWorkerGlobalScope;

self.process = JSON.parse('{{ process | json }}');
const logger = new Logger();
const cacheName = `ServiceWorker_${__webpack_hash__}`; // eslint-disable-line

self.addEventListener("install", (event) => {
    event.waitUntil(caches.open(cacheName).then((cache) => {
        logger.log("Cache opened");
        return cache.addAll([
            "/",
            "/css/bundle.css",
            "/css/global.css",
            "/css/themes/default.css",
            "/css/themes/dark.css",
            "/js/WebClient.js"
        ]);
    }));
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            // Cache hit - return response
            if (response) return response;
            return fetch(event.request).then((response) => {
                // Check if we received a valid response
                if (!response || response.status !== 200 || response.type !== 'basic') return response;

                // IMPORTANT: Clone the response. A response is a stream
                // and because we want the browser to consume the response
                // as well as the cache consuming the response, we need
                // to clone it so we have two streams.
                const responseToCache = response.clone();
                caches.open(cacheName).then((cache) => { cache.put(event.request, responseToCache); });

                return response;
            });
        })
    );
});

self.addEventListener("message", (event) => {
    logger.log(event);
});
