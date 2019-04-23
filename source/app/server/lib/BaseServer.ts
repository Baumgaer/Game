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
import { GraphQLSchema } from 'graphql';
import { ConfigManager } from '~server/lib/ConfigManager';
import { RedisClientManager } from '~server/lib/RedisClientManager';
import { Logger } from '~server/lib/Logger';
import { walk } from '~root/utils/projectStructure';
import { BaseRoute } from '~server/lib/BaseRoute';

const configManager = ConfigManager.getInstance();
const redisClientManager = RedisClientManager.getInstance();
const logger = new Logger({
    logLevel: 'debug'
});

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

    /**
     * Holds the parsed schema from type graphql with corresponding resolvers
     *
     * @protected
     * @type {(GraphQLSchema | null)}
     * @memberof BaseServer
     */
    protected apiSchema: GraphQLSchema | null = null;

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
        const [config, passwords, databases, ports, paths] = await Promise.all([
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
                secret: createHash(config.session.hashFunction)
                    .update(passwords.sessionSecretSeed)
                    .digest(config.session.digest),
                resave: config.session.resave,
                saveUninitialized: config.session.saveUninitialized,
                cookie: {
                    secure: config.session.secureCookie,
                    httpOnly: config.session.httpOnly,
                    maxAge: parseInt(ms(config.session.maxAge), 10)
                }
            },
            {
                store: new RedisStore({
                    host: 'localhost',
                    port: ports.redis,
                    prefix: `${config.session.prefix}:`,
                    disableTTL: config.session.disableTTL,
                    logErrors: config.session.logErrors,
                    db: databases.redis.sessions
                })
            }
        );
        this.sessionParser = expressSession(sessionConfig);
        this.app.use(this.sessionParser);

        // Setup the template engine
        nunjucks.configure(resolve(rootPath, paths.views), {
            express: this.app,
            autoescape: config.viewEngine.autoescape,
            noCache: process.env.NODE_ENV === 'development' ? true : false
        });
        this.app.set('view engine', config.viewEngine.extension);

        // Setup static files directory
        this.app.use(express.static(resolve(rootPath, paths.staticFiles)));
    }

    /**
     * 2. collects all available routes and initializes them
     *
     * @protected
     * @returns {Promise<void>}
     * @memberof BaseServer
     */
    protected async routeCollection(): Promise<void> {
        const config = await configManager.get('paths');
        walk(resolve(rootPath, config.routes), this.singleRouteCollection.bind(this));
    }

    /**
     * Initializes a single route based on its file
     *
     * @protected
     * @param {string} file
     * @returns {Promise<void>}
     * @memberof BaseServer
     */
    protected async singleRouteCollection(file: string): Promise<void> {
        try {
            const Route = require(file).default;
            const RouteClass = new Route();
            if (!(RouteClass instanceof BaseRoute)) {
                throw new Error(file + ' is not instance of class BaseRoute');
            }
            if (RouteClass.routerNameSpace && RouteClass.routes) {
                this.app.use(RouteClass.routerNameSpace, <express.Router>RouteClass.routes);
            }
        } catch (error) {
            throw error;
        }
    }

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
        const [subscriber, publisher] = await Promise.all([
            redisClientManager.createThirdPartyClient('graphQLSubscriber'),
            redisClientManager.createThirdPartyClient('graphQLPublisher'),
            walk(pathsConfig.resolvers, (file) => {
                resolvers.push(require(file).default);
            })
        ]);
        const pubSub = new GraphQLRedisPubSub({ publisher, subscriber });

        this.apiSchema = await buildSchema({ resolvers, pubSub });
        this.app.use(
            pathsConfig.apiEntryPoint,
            expressGraphQL({
                schema: this.apiSchema,
                graphiql: process.env.NODE_ENV === 'development' ? true : false
            })
        );
    }
}
