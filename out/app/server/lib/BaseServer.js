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
        this.server.on('listening', () => {
            this.state = 'started';
            const addressInfo = this.server.address();
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
    async start() {
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
                if (process.env.PORT) {
                    port = parseInt(process.env.PORT, 10);
                }
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
}
exports.BaseServer = BaseServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHAvc2VydmVyL2xpYi9CYXNlU2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDRCQUEwQjtBQUMxQiw4REFBOEI7QUFDOUIsc0RBQXNCO0FBQ3RCLDREQUE0QjtBQUM1QixzRUFBc0M7QUFDdEMsOEVBQTZDO0FBQzdDLDBFQUF5QztBQUN6Qyw4RUFBNkM7QUFDN0Msb0RBQW9CO0FBQ3BCLCtDQUEyQztBQUMzQywrQkFBK0I7QUFDL0IsaURBQWlEO0FBQ2pELCtCQUE0QztBQUU1QyxtQ0FBb0M7QUFDcEMsNkVBQWdGO0FBRWhGLDZEQUEwRDtBQUMxRCx1RUFBb0U7QUFDcEUsK0NBQTRDO0FBQzVDLG1FQUFvRDtBQUNwRCwwQ0FBc0U7QUFJdEUsTUFBTSxhQUFhLEdBQUcsNkJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNsRCxNQUFNLGtCQUFrQixHQUFHLHVDQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQzVELE1BQU0sTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDO0lBQ3RCLFFBQVEsRUFBRSxPQUFPO0NBQ3BCLENBQUMsQ0FBQztBQW1CSCxNQUFzQixVQUFVO0lBK0M1QjtRQXZDbUIsUUFBRyxHQUF3QixpQkFBTyxFQUFFLENBQUM7UUFTckMsV0FBTSxHQUFXLG1CQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBbUJqRCxVQUFLLEdBQVcsU0FBUyxDQUFDO1FBUzFCLGNBQVMsR0FBeUIsSUFBSSxDQUFDO1FBRzdDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDdkIsTUFBTSxXQUFXLEdBQWdCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkQsTUFBTSxDQUFDLElB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