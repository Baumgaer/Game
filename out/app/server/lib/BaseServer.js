"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("reflect-metadata");
const express_1 = tslib_1.__importDefault(require("express"));
const hpp_1 = tslib_1.__importDefault(require("hpp"));
const helmet_1 = tslib_1.__importDefault(require("helmet"));
const compression_1 = tslib_1.__importDefault(require("compression"));
const express_session_1 = tslib_1.__importDefault(require("express-session"));
const connect_redis_1 = tslib_1.__importDefault(require("connect-redis"));
const express_graphql_1 = tslib_1.__importDefault(require("express-graphql"));
const ms_1 = tslib_1.__importDefault(require("ms"));
const type_graphql_1 = require("type-graphql");
const path_1 = require("path");
const app_root_path_1 = require("app-root-path");
const http_1 = require("http");
const crypto_1 = require("crypto");
const graphql_redis_subscriptions_1 = require("graphql-redis-subscriptions");
const ConfigManager_1 = require("~server/lib/ConfigManager");
const RedisClientManager_1 = require("~server/lib/RedisClientManager");
const Logger_1 = require("~server/lib/Logger");
const projectStructure_1 = require("~root/utils/projectStructure");
const util_1 = require("~bdo/utils/util");
const configManager = ConfigManager_1.ConfigManager.getInstance();
const redisClientManager = RedisClientManager_1.RedisClientManager.getInstance();
const logger = new Logger_1.Logger({
    logLevel: 'debug'
});
class BaseServer {
    constructor() {
        this.app = express_1.default();
        this.server = http_1.createServer(this.app);
        this.state = 'stopped';
        this.apiSchema = null;
        const gracefulShutdownHandler = () => {
            logger.info(`Shutting down ${process.env.name}`);
            this.gracefulShutdown();
        };
        process.once("SIGTERM", gracefulShutdownHandler.bind(this));
        process.once("SIGINT", gracefulShutdownHandler.bind(this));
        this.server.on('listening', () => {
            this.state = 'started';
            const addressInfo = this.server.address();
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
    async start() {
        logger.info(`Start of ${process.env.name} requested`);
        await new Promise((resolver) => {
            const interval = setInterval(() => {
                if (this.state === 'ready') {
                    clearInterval(interval);
                    resolver();
                }
            });
        });
        return new Promise((resolver) => {
            try {
                let port = 8080;
                if (process.env.PORT)
                    port = parseInt(process.env.PORT, 10);
                resolver(this.server.listen(port, "0.0.0.0"));
            }
            catch (error) {
                logger.error(error);
                process.exit(1);
            }
        });
    }
    async stop() {
        await this.server.close();
        logger.info('Server stopped');
    }
    async setupServer() {
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
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use(compression_1.default());
        this.app.use(helmet_1.default());
        this.app.use(hpp_1.default());
        const RedisStore = connect_redis_1.default(express_session_1.default);
        const sessionConfig = Object.assign({
            secret: crypto_1.createHash(config.session.hashFunction)
                .update(passwords.sessionSecretSeed)
                .digest(config.session.digest),
            resave: config.session.resave,
            saveUninitialized: config.session.saveUninitialized,
            cookie: {
                secure: config.session.secureCookie,
                httpOnly: config.session.httpOnly,
                maxAge: parseInt(ms_1.default(config.session.maxAge), 10)
            }
        }, {
            store: new RedisStore({
                prefix: `${config.session.prefix}:`,
                disableTTL: config.session.disableTTL,
                db: databases.redis.sessions,
                client: redisStoreClient
            })
        });
        this.sessionParser = express_session_1.default(sessionConfig);
        this.app.use(this.sessionParser);
        this.app.use(express_1.default.static(path_1.resolve(app_root_path_1.path, paths.staticFiles)));
    }
    async routeCollection() {
        const config = await configManager.get('paths');
        projectStructure_1.walk(path_1.resolve(app_root_path_1.path, config.routes), this.singleRouteCollection.bind(this));
    }
    async singleRouteCollection(file) {
        try {
            const Route = require(file).default;
            if (!util_1.includesMemberOfList(Route.attachToServers, [process.env.name, '*']))
                return;
            const clRoute = new Route(this);
            if (!clRoute.isServerRoute)
                throw new Error(`${file} is not instance of ~server/lib/ServerRoute`);
            clRoute.routerNameSpace = util_1.toURIPathPart(clRoute.routerNameSpace);
            this.app.use(clRoute.routerNameSpace, clRoute.router);
        }
        catch (error) {
            throw error;
        }
    }
    async resolverCollection() {
        const pathsConfig = await configManager.get('paths');
        const resolvers = [];
        const [subscriber, publisher] = await Promise.all([
            redisClientManager.createThirdPartyClient('graphQLSubscriber'),
            redisClientManager.createThirdPartyClient('graphQLPublisher'),
            projectStructure_1.walk(pathsConfig.resolvers, (file) => {
                resolvers.push(require(file).default);
            })
        ]);
        const pubSub = new graphql_redis_subscriptions_1.RedisPubSub({ publisher, subscriber });
        this.apiSchema = await type_graphql_1.buildSchema({ resolvers, pubSub, skipCheck: true });
        this.app.use(pathsConfig.apiEntryPoint, express_graphql_1.default({
            schema: this.apiSchema,
            graphiql: process.env.NODE_ENV === 'development' ? true : false
        }));
    }
    async gracefulShutdown() {
        this.state = "stopping";
        await redisClientManager.killAllClients();
        await this.stop();
        process.exit(0);
    }
}
exports.BaseServer = BaseServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHAvc2VydmVyL2xpYi9CYXNlU2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDRCQUEwQjtBQUMxQiw4REFBOEI7QUFDOUIsc0RBQXNCO0FBQ3RCLDREQUE0QjtBQUM1QixzRUFBc0M7QUFDdEMsOEVBQTZDO0FBQzdDLDBFQUF5QztBQUN6Qyw4RUFBNkM7QUFDN0Msb0RBQW9CO0FBQ3BCLCtDQUEyQztBQUMzQywrQkFBK0I7QUFDL0IsaURBQWlEO0FBQ2pELCtCQUE0QztBQUU1QyxtQ0FBb0M7QUFDcEMsNkVBQWdGO0FBRWhGLDZEQUEwRDtBQUMxRCx1RUFBb0U7QUFDcEUsK0NBQTRDO0FBQzVDLG1FQUFvRDtBQUNwRCwwQ0FBc0U7QUFJdEUsTUFBTSxhQUFhLEdBQUcsNkJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNsRCxNQUFNLGtCQUFrQixHQUFHLHVDQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQzVELE1BQU0sTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDO0lBQ3RCLFFBQVEsRUFBRSxPQUFPO0NBQ3BCLENBQUMsQ0FBQztBQW9CSCxNQUFzQixVQUFVO0lBK0M1QjtRQXZDbUIsUUFBRyxHQUF3QixpQkFBTyxFQUFFLENBQUM7UUFTckMsV0FBTSxHQUFXLG1CQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBbUJqRCxVQUFLLEdBQVcsU0FBUyxDQUFDO1FBUzFCLGNBQVMsR0FBeUIsSUFBSSxDQUFDO1FBRzdDLE1BQU0sdUJBQXVCLEdBQUcsR0FBRyxFQUFFO1lBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUM1QixDQUFDLENBQUM7UUFDRixPQUFPLENB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