import ms = require('ms');
import 'reflect-metadata';
import * as express from 'express';
import * as hpp from 'hpp';
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as nunjucks from 'nunjucks';
import * as expressSession from 'express-session';
import * as connectRedis from 'connect-redis';
import * as expressGraphQL from 'express-graphql';
import { buildSchema } from 'type-graphql';
import { resolve } from 'path';
import { path as rootPath } from 'app-root-path';
import { createServer, Server } from 'http';
import { AddressInfo } from 'ws';
import { createHash } from 'crypto';
import { RedisPubSub as GraphQLRedisPubSub } from 'graphql-redis-subscriptions';
import { ConfigManager } from '~server/lib/ConfigManager';
import { RedisClientManager } from '~server/lib/RedisClientManager';
import { Logger } from '~server/lib/Logger';
import { walk } from '~root/utils/projectStructure';

const configManager = ConfigManager.getInstance();
const redisClientManager = RedisClientManager.getInstance();
const logger = new Logger({
    logLevel: 'debug'
});
// Later this will hold an array of configurations loaded by configManager
let configs = null;

declare type states =
    | 'loadConfig'
    | 'setupServer'
    | 'routeCollection'
    | 'resolverCollection'
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

    constructor() {
        this.server.on('listening', () => {
            this.state = 'started';
            const addressInfo = <AddressInfo>this.server.address();
            logger.info(`Server started: ${addressInfo.address}:${addressInfo.port}`);
        });
        this.server.on('close', () => {
            this.state = 'stopped';
        });
        this.state = 'setupServer';
        this.setupServer()
            .then(async () => {
                this.state = 'routeCollection';
                await this.routeCollection();
            })
            .then(async () => {
                this.state = 'resolverCollection';
                await this.resolverCollection();
            })
            .then(() => (this.state = 'ready'));
    }

    /**
     * Starts the ready configured server
     *
     * @public
     * @returns {Promise<void>}
     * @memberof BaseServer
     */
    public async start(): Promise<Server> {
        await new Promise((resolver) => {
            const interval = setInterval(() => {
                if (this.state === 'ready') {
                    clearInterval(interval);
                    resolver();
                }
            });
        });
        return new Promise<Server>((resolver) => {
            try {
                let port = 8080;
                if (process.env.PORT) {
                    port = parseInt(process.env.PORT, 10);
                }
                resolver(this.server.listen(port, 'localhost'));
            } catch (error) {
                logger.error(error);
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
        logger.info('Server stopped');
    }

    /**
     * 1. Create the server instance
     *
     * @protected
     * @returns {Promise<void>}
     * @memberof BaseServer
     */
    protected async setupServer(): Promise<void> {
        configs = await Promise.all([
            configManager.get('config'),
            configManager.get('passwords'),
            configManager.get('databases'),
            configManager.get('ports'),
            configManager.get('paths')
        ]);
        // parse the body to get post data and so on
        // NOTE: This is important for some middlewares to have directly
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

        // Setup compression and security
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(hpp());
        const RedisStore = connectRedis(expressSession);
        const sessionConfig = Object.assign(
            <expressSession.SessionOptions>{
                secret: createHash(configs[0].session.hashFunction)
                    .update(configs[1].sessionSecretSeed)
                    .digest(configs[0].session.digest),
                resave: configs[0].session.resave,
                saveUninitialized: configs[0].session.saveUninitialized,
                cookie: {
                    secure: configs[0].session.secureCookie,
                    httpOnly: configs[0].session.httpOnly,
                    maxAge: parseInt(ms(configs[0].session.maxAge), 10)
                }
            },
            {
                store: new RedisStore({
                    host: 'localhost',
                    port: configs[3].redis,
                    prefix: `${configs[0].session.prefix}:`,
                    disableTTL: configs[0].session.disableTTL,
                    logErrors: configs[0].session.logErrors,
                    db: configs[2].redis.sessions
                })
            }
        );
        this.sessionParser = expressSession(sessionConfig);
        this.app.use(this.sessionParser);

        // Setup the template engine
        nunjucks.configure(resolve(rootPath, configs[4].views), {
            express: this.app,
            autoescape: configs[0].viewEngine.autoescape,
            noCache: process.env.NODE_ENV === 'development' ? true : false
        });
        this.app.set('view engine', configs[0].viewEngine.extension);

        // Setup static files directory
        this.app.use(express.static(resolve(rootPath, configs[4].staticFiles)));
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
     * 3. collects all available resolvers and initializes them
     *
     * @protected
     * @returns {Promise<void>}
     * @memberof BaseServer
     */
    protected async resolverCollection(): Promise<void> {
        // Setup the API
        const pathsConfig = await configManager.get('paths');
        const resolvers: Array<Function | string> = [];
        const awaited = await Promise.all([
            walk(pathsConfig.resolvers, (file) => {
                resolvers.push(require(file).default);
            }),
            redisClientManager.createThirdPartyClient('graphQLSubscriber'),
            redisClientManager.createThirdPartyClient('graphQLPublisher')
        ]);
        const subscriber = awaited[1];
        const publisher = awaited[2];
        const pubSub = new GraphQLRedisPubSub({ publisher, subscriber });
        this.app.use(
            pathsConfig.apiEntryPoint,
            expressGraphQL({
                schema: await buildSchema({ resolvers, pubSub }),
                graphiql: process.env.NODE_ENV === 'development' ? true : false
            })
        );
    }
}
