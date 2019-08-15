"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ms = require("ms");
require("reflect-metadata");
const express = require("express");
const hpp = require("hpp");
const helmet = require("helmet");
const compression = require("compression");
const expressSession = require("express-session");
const connectRedis = require("connect-redis");
const expressGraphQL = require("express-graphql");
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
        this.app = express();
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
        const [config, passwords, databases, paths] = await Promise.all([
            configManager.get('config'),
            configManager.get('passwords'),
            configManager.get('databases'),
            configManager.get('paths')
        ]);
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(hpp());
        const RedisStore = connectRedis(expressSession);
        const sessionConfig = Object.assign({
            secret: crypto_1.createHash(config.session.hashFunction)
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
                host: process.env.REDIS_HOST,
                port: +(process.env.REDIS_PORT || ""),
                prefix: `${config.session.prefix}:`,
                disableTTL: config.session.disableTTL,
                logErrors: config.session.logErrors,
                db: databases.redis.sessions
            })
        });
        this.sessionParser = expressSession(sessionConfig);
        this.app.use(this.sessionParser);
        this.app.use(express.static(path_1.resolve(app_root_path_1.path, paths.staticFiles)));
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
            const RouteClass = new Route();
            if (!RouteClass.isServerRoute)
                throw new Error(`${file} is not instance of ~server/lib/BaseRoute`);
            this.app.use(RouteClass.routerNameSpace, RouteClass.router);
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
        this.app.use(pathsConfig.apiEntryPoint, expressGraphQL({
            schema: this.apiSchema,
            graphiql: process.env.NODE_ENV === 'development' ? true : false
        }));
    }
}
exports.BaseServer = BaseServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHAvc2VydmVyL2xpYi9CYXNlU2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUJBQTBCO0FBQzFCLDRCQUEwQjtBQUMxQixtQ0FBbUM7QUFDbkMsMkJBQTJCO0FBQzNCLGlDQUFpQztBQUNqQywyQ0FBMkM7QUFDM0Msa0RBQWtEO0FBQ2xELDhDQUE4QztBQUM5QyxrREFBa0Q7QUFDbEQsK0NBQTJDO0FBQzNDLCtCQUErQjtBQUMvQixpREFBaUQ7QUFDakQsK0JBQTRDO0FBRTVDLG1DQUFvQztBQUNwQyw2RUFBZ0Y7QUFFaEYsNkRBQTBEO0FBQzFELHVFQUFvRTtBQUNwRSwrQ0FBNEM7QUFDNUMsbUVBQW9EO0FBQ3BELDBDQUF1RDtBQUV2RCxNQUFNLGFBQWEsR0FBRyw2QkFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ2xELE1BQU0sa0JBQWtCLEdBQUcsdUNBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDNUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxlQUFNLENBQUM7SUFDdEIsUUFBUSxFQUFFLE9BQU87Q0FDcEIsQ0FBQyxDQUFDO0FBbUJILE1BQXNCLFVBQVU7SUErQzVCO1FBdkNtQixRQUFHLEdBQXdCLE9BQU8sRUFBRSxDQUFDO1FBU3JDLFdBQU0sR0FBVyxtQkFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQW1CakQsVUFBSyxHQUFXLFNBQVMsQ0FBQztRQVMxQixjQUFTLEdBQXlCLElBQUksQ0FBQztRQUc3QyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFO1lBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQ3ZCLE1BQU0sV0FBVyxHQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3ZELE1BQU0sQ0FBQyxJQUFJ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