import * as express from 'express';
import * as hpp from 'hpp';
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as nunjucks from 'nunjucks';
import * as expressSession from 'express-session';
import * as connectRedis from 'connect-redis';
import { resolve } from 'path';
import { path as rootPath } from 'app-root-path';
import { createServer, Server } from 'http';
import { AddressInfo } from 'ws';
import { createHash } from 'crypto';
import { ConfigManager } from './ConfigManager';

let configManager = ConfigManager.getInstance();

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
export abstract class BaseServer {
    /**
     * The application which handles the routing and serving and so on
     *
     * @protected
     * @type {express.Application}
     * @memberof BaseServer
     */
    protected readonly app: express.Application = express();

    /**
     * The real HTTP server which is listening on the provided port
     *
     * @protected
     * @type {Server}
     * @memberof BaseServer
     */
    protected readonly server: Server = createServer(this.app);

    /**
     * Provides the initialized express session as a handler for other mechanisms
     *
     * @protected
     * @type {express.RequestHandler}
     * @memberof BaseServer
     */
    protected sessionParser?: express.RequestHandler;

    /**
     * Represents the current state of the server depending on the currently
     * running life cycle function.
     *
     * @protected
     * @type {string}
     * @memberof BaseServer
     */
    protected state: states = 'stopped';

    constructor(params: ConstParams<BaseServer> = {}) {
        Object.assign(this, params);
        this.server.on('listening', () => {
            this.state = 'started';
            let addressInfo = <AddressInfo>this.server.address();
            console.log(`Server started: ${addressInfo.address}:${addressInfo.port}`);
        });
        this.server.on('close', () => {
            this.state = 'stopped';
        });
        this.state = 'setupServer';
        this.setupServer()
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
     * 1. Create the server instance
     *
     * @protected
     * @returns {Promise<void>}
     * @memberof BaseServer
     */
    protected async setupServer(): Promise<void> {
        // parse the body to get post data and so on
        // NOTE: This is important for some middlewares to have directly
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        // Setup compression and security
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(hpp());
        await configManager.get('config');
        let RedisStore = connectRedis(expressSession);
        let sessionConfig = Object.assign(
            {
                secret: createHash('sha512').update('keyboardCat').digest('base64'),
                resave: false,
                saveUninitialized: false,
                cookie: {
                    secure: false,
                    httpOnly: true
                }
            },
            {
                store: new RedisStore({
                    host: 'localhost',
                    port: 6379,
                    prefix: 'session:',
                    disableTTL: false,
                    logErrors: true,
                    db: (await configManager.get('databases')).redis.sessions
                })
            }
        );
        this.sessionParser = expressSession(sessionConfig);
        this.app.use(this.sessionParser);

        // Setup the template engine
        nunjucks.configure(resolve(rootPath, 'out', 'app', 'views'), {
            express: this.app,
            autoescape: true
        });
        this.app.set('view engine', 'njk');

        // Setup static files directory
        this.app.use(express.static(resolve(rootPath, 'out', 'app', 'client')));
    }

    /**
     * 2. collects all available routes and initializes them
     *
     * @protected
     * @returns {Promise<void>}
     * @memberof BaseServer
     */
    protected async routeCollection(): Promise<void> {}

    /**
     * 3. Usually used for creation of error handling middlewares
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
    public async start(): Promise<Server> {
        await new Promise((resolve) => {
            let interval = setInterval(() => {
                if (this.state === 'ready') {
                    clearInterval(interval);
                    resolve();
                }
            });
        });
        return new Promise<Server>((resolve) => {
            try {
                let port = 8080;
                if (process.env.PORT) {
                    port = parseInt(process.env.PORT, 10);
                }
                resolve(this.server.listen(port, 'localhost'));
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
