import { BaseEnvironment } from "~bdo/lib/BaseEnvironment";
import { Logger } from "~client/lib/Logger";
import NightHawk from "nighthawk";

const logger = new Logger({
    logLevel: "debug"
});

export abstract class BaseClient extends BaseEnvironment {

    /**
     * The application which handles the routing and serving and so on
     *
     * @protected
     * @memberof BaseServer
     */
    protected readonly app = NightHawk();

    constructor() {
        super();
        document.addEventListener("beforeUnload", this.gracefulShutdown.bind(this));
    }

    public async start() {
        await super.start();
        return new Promise((resolver) => {
            this.app.listen();
            this.state = "started";
            logger.info(`${global.process.env.NAME} started`);
            resolver();
        });
    }

    protected async setup() {
        await super.setup();
        // Setup user view and active user data and may be current container data?
    }

    protected async gracefulShutdown() {
        this.state = "stopping";
        logger.info(`Shutting down ${process.env.NAME}`);
        // Do things before the browser closes
    }

}
