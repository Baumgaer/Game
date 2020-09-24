import 'reflect-metadata';
import express, { json, urlencoded, static as expressStatic } from 'express';
import hpp from 'hpp';
import helmet from 'helmet';
import compression from 'compression';
import expressSession from 'express-session';
import connectRedis from 'connect-redis';
import ms from "ms";
import { v4 as uuidV4 } from "uuid";
import { resolve } from 'path';
import { path as rootPath } from 'app-root-path';
import { createServer, Server } from 'http';
import { AddressInfo } from 'ws';
import { createHash, HexBase64Latin1Encoding } from 'crypto';

import { BaseEnvironment } from "~bdo/lib/BaseEnvironment";
import { ConfigManager } from '~server/lib/ConfigManager';
import { RedisClientManager } from '~server/lib/RedisClientManager';
import { Logger } from '~server/lib/Logger';
import { RedisClient } from 'redis';

const configManager = ConfigManager.getInstance();
const redisClientManager = RedisClientManager.getInstance();
const logger = new Logger({
    logLevel: 'debug'
});

/**
 * Provides the base functionality of all servers including safety, middlewares,
 * route iteration, error handling, basic startup and basic graceful shutdown.
 *
 * @abstract
 */
export abstract class BaseServer extends BaseEnvironment {
    /**
     * The application which handles the routing and serving and so on
     *
     * @protected
     * @memberof BaseServer
     */
    protected readonly app: express.Application = express();

    /**
     * The real HTTP server which is listening on the provided port
     *
     * @protected
     * @memberof BaseServer
     */
    protected readonly server: Server = createServer(this.app);

    /**
     * Provides the initialized express session as a handler for other mechanisms
     *
     * @protected
     * @memberof BaseServer
     */
    protected sessionParser?: express.RequestHandler;

    constructor() {
        super();
        const gracefulShutdownHandler = () => {
            logger.info(`Shutting down ${process.env.NAME}`);
            this.gracefulShutdown();
        };
        process.once("SIGTERM", gracefulShutdownHandler.bind(this));
        process.once("SIGINT", gracefulShutdownHandler.bind(this));

        this.server.on('listening', () => {
            this.state = 'started';
            const addressInfo = <AddressInfo>this.server.address();
            logger.info(`${process.env.NAME} started: ${addressInfo.address}:${addressInfo.port}`);
        });
        this.server.on('close', () => {
            this.state = 'stopped';
            logger.info(`${process.env.NAME} stopped`);
        });
    }

    /**
     * @inheritdoc
     *
     * @returns An indicator promise for startup
     * @memberof BaseServer
     */
    public async start() {
        await super.start();
        return new Promise((resolver) => {
            try {
                let port = 8080;
                if (process.env.PORT) port = parseInt(process.env.PORT, 10);
                this.server.listen(port, "0.0.0.0");
                resolver(this);
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
    protected async setup(): Promise<void> {
        await super.setup();
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
            if (process.env.NODE_ENV === 'development' && request.path === "/api") return next();
            helmetMiddleWare(request, response, next);
        });
        this.app.use(hpp());
        const RedisStore = connectRedis(expressSession);
        const sessionConfig = Object.assign(
            <expressSession.SessionOptions>{
                secret: createHash(config.session.hashFunction)
                    .update(passwords.sessionSecretSeed)
                    .digest(<HexBase64Latin1Encoding>config.session.digest),
                resave: config.session.resave,
                saveUninitialized: config.session.saveUninitialized,
                cookie: {
                    secure: config.session.secureCookie,
                    httpOnly: config.session.httpOnly,
                    maxAge: ms(config.session.maxAge)
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
        this.app.use(expressStatic(resolve(rootPath, "node_modules", "sql.js", "dist")));
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
