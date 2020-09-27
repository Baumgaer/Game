import { BaseClient } from "~client/lib/BaseClient";
import { Logger } from "~client/lib/Logger";

const logger = new Logger();

export class WebClient extends BaseClient {

    public async start() {
        await super.start();
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function () {
                navigator.serviceWorker.register('/ServiceWorker.js').then((registration) => {
                    // Registration was successful
                    logger.info('ServiceWorker registration successful with scope: ', registration.scope);
                }, (err) => {
                    // registration failed :(
                    logger.error('ServiceWorker registration failed: ', err);
                });
            });
        }
        // Startup the UI which is already in DOM
        require("~client/components/WebClient");
    }
}
const webClient = new WebClient();
webClient.start();
