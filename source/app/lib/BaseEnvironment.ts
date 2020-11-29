import { BDORoute } from "~bdo/lib/BDORoute";
import { BDOLogger } from "~bdo/lib/BDOLogger";
import { includesMemberOfList, toURIPathPart } from "~bdo/utils/util";
import { isClientRoute, isServerRoute } from "~bdo/utils/framework";

import { Application } from "express";
import type NightHawk from "nighthawk";

const logger = new BDOLogger({
    logLevel: "error"
});

declare type states =
    | 'setup'
    | 'routeCollection'
    | 'ready'
    | 'started'
    | 'stopping'
    | 'stopped';

export abstract class BaseEnvironment {

    /**
     * Represents the current state of the environment depending on the currently
     * running life cycle function.
     *
     * @protected
     * @memberof BaseEnvironment
     */
    protected state: states = "stopped";

    /**
     * The application which handles the routing and serving and so on
     *
     * @protected
     * @memberof BaseServer
     */
    protected abstract readonly app: Application | ReturnType<typeof NightHawk>;

    constructor() {
        this.state = 'setup';
        this.setup().then(async () => {
            this.state = 'routeCollection';
            logger.info(`Collecting routes of ${global.process.env.NAME}`);
            await this.routeCollection();
        }).then(() => {
            this.state = "ready";
            logger.info(`${global.process.env.NAME} is ready for start`);
        });
    }

    /**
     * Starts the ready configured environment
     *
     * @abstract
     * @returns The instance of the environment
     * @memberof BaseEnvironment
     */
    public async start() {
        logger.info(`Start of ${global.process.env.NAME} requested`);
        return new Promise<void>((resolver) => {
            const interval = setInterval(() => {
                if (this.state === 'ready') {
                    clearInterval(interval);
                    resolver();
                }
            });
        });
    }

    protected async routeCollection() {
        const context = require.context(ENVIRONMENTAL_ROUTES_PATH, true, /.+\.ts/, "sync");
        context.keys().forEach((key) => this.singleRouteCollection(context(key).default));
    }

    protected async singleRouteCollection<T extends typeof BDORoute>(route: T) {
        if (!includesMemberOfList(<string[]>route.attachToServers, [<string>global.process.env.NAME, '*'])) return;

        let clRoute;
        if (isClientRoute(route)) {
            clRoute = new route(this);
        } else if (isServerRoute(route)) {
            clRoute = new route(this);
        } else throw new Error(`${route.constructor.name} is an unsupported route`);

        clRoute.routerNameSpace = toURIPathPart(clRoute.routerNameSpace);
        this.app.use(clRoute.routerNameSpace, clRoute.router);
    }

    protected async setup() {
        logger.info(`Setting up ${global.process.env.NAME}`);
    }
}
