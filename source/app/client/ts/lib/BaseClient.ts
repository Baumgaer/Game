import { Logger } from "~client/lib/Logger";
import { ClientRoute } from "~client/lib/ClientRoute";
import { includesMemberOfList, toURIPathPart } from "~bdo/utils/util";
import NightHawk from "nighthawk";

import type { Request } from "express";

const logger = new Logger({
    logLevel: "debug"
});

declare type states =
    | 'loadConfig'
    | 'setupClient'
    | 'routeCollection'
    | 'ready'
    | 'started'
    | 'stopping'
    | 'stopped';

export abstract class BaseClient {

    /**
     * The application which handles the routing and serving and so on
     *
     * @protected
     * @memberof BaseServer
     */
    protected readonly app = NightHawk();

    /**
     * Represents the current state of the client depending on the currently
     * running life cycle function.
     *
     * @protected
     * @memberof BaseClient
     */
    protected state: states = 'stopped';

    constructor() {
        document.addEventListener("beforeUnload", this.gracefulShutdown.bind(this));

        this.state = 'setupClient';
        this.setupClient().then(async () => {
            this.state = 'routeCollection';
            logger.info(`Collecting routes of ${global.process.env.NAME}`);
            await this.routeCollection();
        }).then(() => {
            this.state = "ready";
            logger.info(`${global.process.env.NAME} is ready for start`);

            this.app.use((request: Request) => {
                throw new Error(`Route ${request.path} is not defined`);
            });
        });
    }

    public async start() {
        logger.info(`Start of ${process.env.NAME} requested`);
        await new Promise((resolver) => {
            const interval = setInterval(() => {
                if (this.state === 'ready') {
                    clearInterval(interval);
                    resolver();
                }
            });
        });

        return new Promise((resolver) => {
            this.app.listen();
            resolver();
        });
    }

    protected async setupClient() {
        // Setup user view and active user data and may be current container data?
    }

    protected async routeCollection() {
        const context = require.context("./../routes", true, /.+\.ts/, "sync");
        context.keys().forEach((key) => this.singleRouteCollection(context(key).default));
    }

    protected async singleRouteCollection(route: typeof ClientRoute) {
        if (!includesMemberOfList(<string[]>route.attachToServers, [<string>global.process.env.NAME, '*'])) return;
        const clRoute = new route();
        if (!clRoute.isClientRoute) {
            throw new Error(`${clRoute.constructor.name} is not instance of ~client/lib/BaseRoute`);
        }
        clRoute.routerNameSpace = toURIPathPart(clRoute.routerNameSpace);
        this.app.use(clRoute.routerNameSpace, clRoute.router);
    }

    protected async gracefulShutdown() {
        // Do things before the browser closes
    }

}
