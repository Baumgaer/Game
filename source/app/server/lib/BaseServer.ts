import * as fastify from 'fastify';
import * as pointOfView from 'point-of-view';
import * as nunjucks from 'nunjucks';
import { resolve } from 'path';
import { path as rootPath } from 'app-root-path';
import * as fastifyStatic from 'fastify-static';
import { EventEmitter } from 'events';

declare type states =
    | 'loadConfig'
    | 'setupServer'
    | 'routeCollection'
    | 'afterRouteCollection'
    | 'ready'
    | 'started'
    | 'stopped';

/**
 * Provides the base functionality of all servers including safety, middlewares,
 * route iteration, error handling, basic startup and basic graceful shutdown.
 *
 * @export
 * @abstract
 * @class BaseServer
 */
export abstract class BaseServer extends EventEmitter {
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
    protected state: states = 'stopped';

    constructor() {
        super();
        this.server.server.on('listening', () => {
            this.state = 'started';
            this.emit(this.state);
        });
        this.server.server.on('close', () => {
            this.state = 'stopped';
            this.emit(this.state);
        });
        this.state = 'loadConfig';
        this.emit(this.state);
        this.loadConfig()
            .then(() => {
                this.state = 'setupServer';
                this.emit(this.state);
                this.setupServer();
            })
            .then(() => {
                this.state = 'routeCollection';
                this.emit(this.state);
                this.routeCollection();
            })
            .then(() => {
                this.state = 'afterRouteCollection';
                this.emit(this.state);
                this.afterRouteCollection();
            })
            .then(() => {
                this.state = 'ready';
                this.emit(this.state);
            });
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
    protected async setupServer(): Promise<void> {
        // Setup the template engine
        this.server.register(pointOfView, <pointOfView.PointOfViewOptions>{
            engine: {
                nunjucks: nunjucks
            },
            includeViewExtension: true,
            templates: resolve(rootPath, './out/app/views')
        });

        // Setup static files directory
        this.server.register(fastifyStatic, {
            root: resolve(rootPath, './out/app/client'),
            prefix: '/static/'
        });
    }

    /**
     * 3. collects all available routes and initializes them
     *
     * @protected
     * @returns {Promise<void>}
     * @memberof BaseServer
     */
    protected async routeCollection(): Promise<void> {}

    /**
     * 4. Usually used for creation of error handling middlewares
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
        await new Promise((resolve) => {
            let interval = setInterval(() => {
                if (this.state === 'ready') {
                    clearInterval(interval);
                    resolve();
                }
            });
        });
        return new Promise<string>(async (resolve) => {
            try {
                let port = 8080;
                if (process.env.PORT) {
                    port = parseInt(process.env.PORT, 10);
                }
                let listening = await this.server.listen(port);
                resolve(listening);
                console.log('Server started:', listening);
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

    /**
     * Adds an event listener based on the available states
     *
     * @param {states} state
     * @param {(...args: any[]) => void} listener
     * @returns {this}
     * @memberof BaseServer
     */
    public on(state: states, listener: (...args: any[]) => void): this {
        return super.on(state, listener);
    }

    /**
     * Adds an event listener based on the available states one times and
     * removes it after the event occurs.
     *
     * @param {states} state
     * @param {(...args: any[]) => void} listener
     * @returns {this}
     * @memberof BaseServer
     */
    public once(state: states, listener: (...args: any[]) => void): this {
        return super.once(state, listener);
    }

    /**
     * Removes an existing event listener
     *
     * @param state
     * @param listener
     */
    public off(state: states, listener: (...args: any[]) => void): this {
        return super.off(state, listener);
    }
}
