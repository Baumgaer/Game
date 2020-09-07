import { BaseClient } from "~client/lib/BaseClient";

export class WebClient extends BaseClient {

    public async start() {
        await super.start();
        // Startup the UI which is already in DOM
        require("~client/components/WebClient");
    }
}
const webClient = new WebClient();
webClient.start();
