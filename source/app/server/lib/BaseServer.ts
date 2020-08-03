import 'reflect-metadata';
import express, { json, urlencoded, static as expressStatic } from 'express';
import hpp from 'hpp';
import helmet from 'helmet';
import compression from 'compression';
import expressSession from 'express-session';
import connectRedis from 'connect-redis';
import ms from "ms";
import { v4 as uuidV4 } from "uuid";
import { graphqlHTTP } from 'express-graphql';
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
import { includesMemberOfList, toURIPathPart, isNonEmptyArray } from '~bdo/utils/util';
import { RedisClient } from 'redis';
import { ServerRoute } from "~server/lib/ServerRoute";

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
    | 'stopping'
    | 'stopped';

/**
 * Provides the base functionality of all servers including safety, middlewares,
 * route iteration, error handling, basic startup and basic graceful shutdown.
 *
 * @abstract
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
    protected apiSchema!: GraphQLSchema;

    constructor() {
        const gracefulShutdownHandler = () => {
            logger.info(`Shutting down ${process.env.name}`);
            this.gracefulShutdown();
        };
        process.once("SIGTERM", gracefulShutdownHandler.bind(this));
        process.once("SIGINT", gracefulShutdownHandler.bind(this));

        this.server.on('listening', () => {
            this.state = 'started';
            const addressInfo = <AddressInfo>this.server.address();
            logger.info(`${process.env.name} started: ${addressInfo.address}:${addressInfo.port}`);
        });
        this.server.on('close', () => {
            this.state = 'stopped';
            logger.info(`${process.env.name} stopped`);
        });
        this.state = 'setupServer';
        this.setupServer()
            .then(async () => {
                this.state = 'routeCollection';
                logger.info(`Collecting routes of ${process.env.name}`);
                await this.routeCollection();
            })
            .then(async () => {
                this.state = 'resolverCollection';
                logger.info(`Collecting resolvers of ${process.env.name}`);
                await this.resolverCollection();
            })
            .then(() => {
                this.state = "ready";
                logger.info(`${process.env.name} is ready for start`);
            });
    }

    /**
     * Starts the ready configured server
     *
     * @public
     * @returns {Promise<void>}
     * @memberof BaseServer
     */
    public async start(): Promise<Server> {
        logger.info(`Start of ${process.env.name} requested`);
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
                if (process.env.PORT) port = parseInt(process.env.PORT, 10);
                resolver(this.server.listen(port, "0.0.0.0"));
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
        this.server.close();
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
        logger.info(`Setting up ${process.env.name}`);
        const [config, passwords, databases, paths, redisStoreClient] = await Promise.all([
            configManager.get('config'),
            configManager.get('passwords'),
            configManager.get('databases'),
            configManager.get('paths'),
            redisClientManager.createThirdPartyClient("redisStore", {
                showFriendlyErrorStack: true
            })
        ]);
        // parse the body to get post data and so on
        // NOTE: This is important for some middlewares to have directly.
        //       So this has to be the first middleware
        this.app.use(json());
        this.app.use(urlencoded({ extended: true }));

        // Setup compression and security
        this.app.use(compression());

        this.app.use((request, response, next) => {
            const contentSecurityNonce = uuidV4();
            response.locals.cspScriptNonce = contentSecurityNonce;
            const helmetMiddleWare = helmet({
                contentSecurityPolicy: {
                    directives: {
                        defaultSrc: ["'self'"],
                        scriptSrc: ["'self'", `'nonce-${contentSecurityNonce}'`].concat(process.env.NODE_ENV === 'development' ? ["'unsafe-eval'"] : []),
                        styleSrc: ["'self'", `'nonce-${contentSecurityNonce}'`, "'sha256-rJJyMDPmHMZS0mPmL877gjjApxGMVa4522UDb4ctw7I='"]
                    }
                }
            });
            helmetMiddleWare(request, response, next);
        });
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
            }, {
            store: new RedisStore({
                prefix: `${config.session.prefix}:`,
                disableTTL: config.session.disableTTL,
                db: databases.redis.sessions,
                client: redisStoreClient as unknown as RedisClient
            })
        }
        );
        this.sessionParser = expressSession(sessionConfig);
        this.app.use(this.sessionParser);

        // Setup static files directory
        this.app.use(expressStatic(resolve(rootPath, paths.staticFiles)));
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
     * @param file The path to the file which should be imported as a route
     * @returns A definitely resolving promise
     * @memberof BaseServer
     */
    protected async singleRouteCollection(file: string): Promise<void> {
        const Route = (await import(file)).default;
        if (!includesMemberOfList(<string[]>Route.attachToServers, [<string>process.env.name, '*'])) return;
        const clRoute: ServerRoute = new Route(this);
        if (!clRoute.isServerRoute) throw new Error(`${file} is not instance of ~server/lib/ServerRoute`);
        clRoute.routerNameSpace = toURIPathPart(clRoute.routerNameSpace);
        this.app.use(clRoute.routerNameSpace, clRoute.router);
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
        // Next line has to be ignored by eslint because type-graphql expects a function array
        const resolvers: Function[] = []; // eslint-disable-line
        const [subscriber, publisher] = await Promise.all([
            redisClientManager.createThirdPartyClient('graphQLSubscriber'),
            redisClientManager.createThirdPartyClient('graphQLPublisher'),
            walk(pathsConfig.resolvers, async (file) => {
                resolvers.push((await import(file)).default);
            })
        ]);

        if (isNonEmptyArray(resolvers)) {
            const pubSub = new GraphQLRedisPubSub({ publisher, subscriber });
            this.apiSchema = await buildSchema({ resolvers, pubSub, skipCheck: true });
            this.app.use(pathsConfig.apiEntryPoint, graphqlHTTP({
                schema: this.apiSchema,
                graphiql: process.env.NODE_ENV === 'development' ? true : false
            }));
        } else logger.info("No resolvers provided! Skipping build of API");
    }

    /**
     * Closes all active connections to other services with respect to active transactions
     *
     * @protected
     * @memberof BaseServer
     * @returns {Promise<void>} A resoling promise
     */
    protected async gracefulShutdown(): Promise<void> {
        this.state = "stopping";
        await redisClientManager.killAllClients();
        await this.stop();
        process.exit(0);
    }
}
