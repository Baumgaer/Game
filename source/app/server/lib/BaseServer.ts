import * as fastify from 'fastify';

/**
 * Provides the base functionality of all servers including safety, middlewares,
 * route iteration, error handling, basic startup and basic graceful shutdown.
 *
 * @export
 * @abstract
 * @class BaseServer
 */
export abstract class BaseServer {
    /**
     * The factorized framework instance
     *
     * @protected
     * @type {(fastify.FastifyInstance | null)}
     * @memberof BaseServer
     */
    protected server: fastify.FastifyInstance = fastify();

    /**
     * Represents the current state of the server depending on the currently
     * running life cycle function.
     *
     * @protected
     * @type {string}
     * @memberof BaseServer
     */
    protected state: string = 'stopped';

    constructor() {
        this.state = 'loadConfig';
        this.loadConfig()
            .then(() => {
                this.state = 'setupServer';
                this.setupServer();
            })
            .then(() => {
                this.state = 'afterServerSetup';
                this.afterServerSetup();
            })
            .then(() => {
                this.state = 'routeCollection';
                this.routeCollection();
            })
            .then(() => {
                this.state = 'afterRouteCollection';
                this.afterRouteCollection();
            })
            .then(() => (this.state = 'ready'));
    }

    /**
     * 1. Load the configuration
     *
     * @protected
     * @returns {Promise<void>}
     * @memberof BaseServer
     */
    protected async loadConfig(): Promise<void> {}

    /**
     * 2. Create the server instance
     *
     * @protected
     * @returns {Promise<void>}
     * @memberof BaseServer
     */
    protected async setupServer(): Promise<void> {}

    /**
     * 3. Usually used for binding middlewares and so on.
     *
     * @protected
     * @returns {Promise<void>}
     * @memberof BaseServer
     */
    protected async afterServerSetup(): Promise<void> {}

    /**
     * 4. collects all available routes and initializes them
     *
     * @protected
     * @returns {Promise<void>}
     * @memberof BaseServer
     */
    protected async routeCollection(): Promise<void> {}

    /**
     * 5. Usually used for creation of error handling middlewares
     *
     * @protected
     * @returns {Promise<void>}
     * @memberof BaseServer
     */
    protected async afterRouteCollection(): Promise<void> {}

    /**
     * Starts the ready configured server
     *
     * @public
     * @returns {Promise<void>}
     * @memberof BaseServer
     */
    public async start(): Promise<string> {
        await new Promise<void>((resolve) => {
            let interval = setInterval(() => {
                if (this.state === 'ready') {
                    clearInterval(interval);
                    resolve();
                }
            });
        });
        return new Promise<string>(async (resolve) => {
            try {
                resolve(await this.server.listen(3000));
                console.log('Server started');
            } catch (error) {
                console.error(error);
                process.exit(1);
            }
        });
    }

    /**
     * Shuts down all depending parts of the server, stores temporary data and
     * closes the server.
     *
     * @public
     * @returns {Promise<void>}
     * @memberof BaseServer
     */
    public async stop(): Promise<void> {
        await this.server.close();
        console.log('Server stopped');
        process.exit(0);
    }
}
