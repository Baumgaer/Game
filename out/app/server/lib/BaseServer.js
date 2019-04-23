"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ms = require("ms");
require("reflect-metadata");
const express = require("express");
const hpp = require("hpp");
const helmet = require("helmet");
const compression = require("compression");
const nunjucks = require("nunjucks");
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
const BaseRoute_1 = require("~server/lib/BaseRoute");
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
                resolver(this.server.listen(port, 'localhost'));
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
        const [config, passwords, databases, ports, paths] = await Promise.all([
            configManager.get('config'),
            configManager.get('passwords'),
            configManager.get('databases'),
            configManager.get('ports'),
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
                host: 'localhost',
                port: ports.redis,
                prefix: `${config.session.prefix}:`,
                disableTTL: config.session.disableTTL,
                logErrors: config.session.logErrors,
                db: databases.redis.sessions
            })
        });
        this.sessionParser = expressSession(sessionConfig);
        this.app.use(this.sessionParser);
        nunjucks.configure(path_1.resolve(app_root_path_1.path, paths.views), {
            express: this.app,
            autoescape: config.viewEngine.autoescape,
            noCache: process.env.NODE_ENV === 'development' ? true : false
        });
        this.app.set('view engine', config.viewEngine.extension);
        this.app.use(express.static(path_1.resolve(app_root_path_1.path, paths.staticFiles)));
    }
    async routeCollection() {
        const config = await configManager.get('paths');
        projectStructure_1.walk(path_1.resolve(app_root_path_1.path, config.routes), this.singleRouteCollection.bind(this));
    }
    async singleRouteCollection(file) {
        try {
            const Route = require(file).default;
            const RouteClass = new Route();
            if (!(RouteClass instanceof BaseRoute_1.BaseRoute)) {
                throw new Error(file + ' is not instance of class BaseRoute');
            }
            if (RouteClass.routerNameSpace && RouteClass.routes) {
                this.app.use(RouteClass.routerNameSpace, RouteClass.routes);
            }
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
        this.apiSchema = await type_graphql_1.buildSchema({ resolvers, pubSub });
        this.app.use(pathsConfig.apiEntryPoint, expressGraphQL({
            schema: this.apiSchema,
            graphiql: process.env.NODE_ENV === 'development' ? true : false
        }));
    }
}
exports.BaseServer = BaseServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHAvc2VydmVyL2xpYi9CYXNlU2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUJBQTBCO0FBQzFCLDRCQUEwQjtBQUMxQixtQ0FBbUM7QUFDbkMsMkJBQTJCO0FBQzNCLGlDQUFpQztBQUNqQywyQ0FBMkM7QUFDM0MscUNBQXFDO0FBQ3JDLGtEQUFrRDtBQUNsRCw4Q0FBOEM7QUFDOUMsa0RBQWtEO0FBQ2xELCtDQUEyQztBQUMzQywrQkFBK0I7QUFDL0IsaURBQWlEO0FBQ2pELCtCQUE0QztBQUU1QyxtQ0FBb0M7QUFDcEMsNkVBQWdGO0FBRWhGLDZEQUEwRDtBQUMxRCx1RUFBb0U7QUFDcEUsK0NBQTRDO0FBQzVDLG1FQUFvRDtBQUNwRCxxREFBa0Q7QUFFbEQsTUFBTSxhQUFhLEdBQUcsNkJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNsRCxNQUFNLGtCQUFrQixHQUFHLHVDQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQzVELE1BQU0sTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDO0lBQ3RCLFFBQVEsRUFBRSxPQUFPO0NBQ3BCLENBQUMsQ0FBQztBQW1CSCxNQUFzQixVQUFVO0lBK0M1QjtRQXZDbUIsUUFBRyxHQUF3QixPQUFPLEVBQUUsQ0FBQztRQVNyQyxXQUFNLEdBQVcsbUJBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFtQmpELFVBQUssR0FBVyxTQUFTLENBQUM7UUFTMUIsY0FBUyxHQUF5QixJQUFJLENBQUM7UUFHN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRTtZQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN2QixNQUFNLFdBQVcsR0FBZ0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN2RCxN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