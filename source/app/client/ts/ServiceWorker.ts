// import Window from "window";
// @ts-expect-error Some libs expect a window to be able to determine things...
self.window = self; // eslint-disable-line

import { Logger } from "~client/lib/Logger";
import { BaseEnvironment } from "~bdo/lib/BaseEnvironment";
import { Request as MyRequest } from "~client/lib/Request";
import { Response as MyResponse } from "~client/lib/Response";
import Router from "router";
import finalHandler from "finalhandler";
import { parse as parseUrl } from "url";

import type { IncomingMessage, ServerResponse } from 'http';

// For some reason this is necessary to get typings...
export default null;
declare let self: ServiceWorkerGlobalScope;

// Setup environment
self.process = JSON.parse('{{$$serviceWorkerProcess$$}}');
const logger = new Logger();
const cacheName = `ServiceWorker_${__webpack_hash__}`; // eslint-disable-line

class ServiceWorker extends BaseEnvironment {

    protected readonly app = Router();

    constructor() {
        super();
        self.addEventListener("install", this.onInstall.bind(this));
        self.addEventListener("activate", this.onActivate.bind(this));
        self.addEventListener("message", this.onMessage.bind(this));
        self.addEventListener("fetch", (event) => {
            event.respondWith(new Promise(async (resolve) => {
                if (this.state !== "ready") await this.start();
                resolve(await this.onFetch(event));
            }));
        });
    }

    public async start() {
        await super.start();
        logger.debug("Service Worker started");
    }

    public onInstall(event: ExtendableEvent) {
        event.waitUntil(caches.open(cacheName).then((cache) => {
            logger.debug("Cache opened");
            return cache.addAll([
                "/",
                "/css/global.css",
                "/css/themes/default.css",
                "/css/themes/dark.css",
                "/js/WebClient.js"
            ]);
        }).then(() => self.skipWaiting()));
    }

    public onActivate(event: ExtendableEvent) {
        event.waitUntil(caches.keys().then((cacheKeys) => {
            return Promise.all(cacheKeys.filter((cacheKey) => {
                return cacheKey !== cacheName;
            }).map((cacheKey) => caches.delete(cacheKey)));
        }));
    }

    public async onFetch(event: FetchEvent) {
        return new Promise<Response>(async (resolve) => {
            const parsedUrl = parseUrl(event.request.url);
            if (parsedUrl.path && (parsedUrl.path.startsWith("/css") || parsedUrl.path.startsWith("/js")) || this.state !== "ready") {
                return resolve(await this.requestServerAndCache(event));
            }

            const request = new MyRequest();
            const response = new MyResponse();

            request.processFetchEvent(event);
            response.setSendFunction(async (body, _encoding, header, status) => {
                if (status && status.code) {
                    if (status.code >= 100 && status.code < 200) {
                        logger.debug(`Information (${status.code}): ${status.message}`);
                        // NOTE: ServiceWorkers can only respond with a code > 100
                        // This section should trigger some more useful functionality
                    } else if (status.code >= 200 && status.code < 300) {
                        logger.info(`Successful (${status.code}): ${status.message}`);
                        // TODO: For first days aks the server but should be more intelligent...
                        resolve(await this.requestServerAndCache(event));
                    } else if (status.code >= 300 && status.code < 400) {
                        logger.warn(`Redirection (${status.code}): ${status.message}`);
                        // TODO: May be redirect the client in some way?
                    } else {
                        logger.error(`Error (${status.code}): ${status.message}`);
                        // Ask the server in case of resource not found because
                        // it could be just not sent to client yet
                        if (status.code === 404) return resolve(await this.requestServerAndCache(event));
                        resolve(new Response(body, { headers: header, status: status.code, statusText: status.message }));
                    }
                } else resolve(await this.requestServerAndCache(event)); // Don't know what to do... Ask the server...
            });

            request.app = this.app;
            response.app = this.app;

            request.res = response;
            response.req = request;

            this.app(request, response, finalHandler(request as unknown as IncomingMessage, response as unknown as ServerResponse));
        });
    }

    public onMessage(_event: ExtendableMessageEvent) {
        // nothing to do here
    }

    private requestServerAndCache(event: FetchEvent) {
        return caches.match(event.request).then((response) => {
            // Cache hit - return response
            if (response) return response;
            return fetch(event.request).then((response) => {
                // Check if we received a valid response
                if (!response || response.status !== 200 || response.type !== 'basic') return response;

                // NOTE: Clone the response. A response is a stream
                // and because we want the browser to consume the response
                // as well as the cache consuming the response, we need
                // to clone it so we have two streams.
                const responseToCache = response.clone();
                caches.open(cacheName).then((cache) => { cache.put(event.request, responseToCache); });

                return response;
            });
        });
    }
}

new ServiceWorker();
