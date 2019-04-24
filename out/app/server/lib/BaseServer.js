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
const environment_1 = require("~bdo/utils/environment");
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
            if (!environment_1.includesMemberOfList(Route.attachToServers, [process.env.name, '*']))
                return;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHAvc2VydmVyL2xpYi9CYXNlU2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUJBQTBCO0FBQzFCLDRCQUEwQjtBQUMxQixtQ0FBbUM7QUFDbkMsMkJBQTJCO0FBQzNCLGlDQUFpQztBQUNqQywyQ0FBMkM7QUFDM0MscUNBQXFDO0FBQ3JDLGtEQUFrRDtBQUNsRCw4Q0FBOEM7QUFDOUMsa0RBQWtEO0FBQ2xELCtDQUEyQztBQUMzQywrQkFBK0I7QUFDL0IsaURBQWlEO0FBQ2pELCtCQUE0QztBQUU1QyxtQ0FBb0M7QUFDcEMsNkVBQWdGO0FBRWhGLDZEQUEwRDtBQUMxRCx1RUFBb0U7QUFDcEUsK0NBQTRDO0FBQzVDLG1FQUFvRDtBQUNwRCxxREFBa0Q7QUFDbEQsd0RBQThEO0FBRTlELE1BQU0sYUFBYSxHQUFHLDZCQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDbEQsTUFBTSxrQkFBa0IsR0FBRyx1Q0FBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUM1RCxNQUFNLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQztJQUN0QixRQUFRLEVBQUUsT0FBTztDQUNwQixDQUFDLENBQUM7QUFtQkgsTUFBc0IsVUFBVTtJQStDNUI7UUF2Q21CLFFBQUcsR0FBd0IsT0FBTyxFQUFFLENBQUM7UUFTckMsV0FBTSxHQUFXLG1CQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBbUJqRCxVQUFLLEdBQVcsU0FBUyxDQUFDO1FBUzFCLGNBQVMsR0FBeUIsSUFBSSxDQUFDO1FBRzdDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDdkIsTUFBTSxXQUFXLEdBQWdCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkQsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsV0FBVyxDQUFDLE9BQU8sSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM5RSxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsS0FBSyxHQUFHLGFBQWEsQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxFQUFFO2FBQ2IsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxpQkFBaUIsQ0FBQztZQUMvQixNQUFNLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNqQyxDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLG9CQUFvQixDQUFDO1lBQ2xDLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDcEMsQ0FBQyxDQUFDO2FBQ0QsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFTTSxLQUFLLENBQUMsS0FBSztRQUNkLE1BQU0sSUFBSSxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUMzQixNQUFNLFFBQVEsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFO2dCQUM5QixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssT0FBTyxFQUFFO29CQUN4QixhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3hCLFFBQVEsRUFBRSxDQUFDO2lCQUNkO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxPQUFPLENBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUNwQyxJQUFJO2dCQUNBLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDaEIsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRTtvQkFDbEIsSUFBSSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztpQkFDekM7Z0JBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO2FBQ25EO1lBQUMsT0FBTyxLQUFLLEVBQUU7Z0JBQ1osTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDcEIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNuQjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQVVNLEtBQUssQ0FBQyxJQUFJO1FBQ2IsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBU1MsS0FBSyxDQUFDLFdBQVc7UUFDdkIsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUM7WUFDbkUsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUM7WUFDM0IsYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7WUFDOUIsYUFBYSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUM7WUFDOUIsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDMUIsYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7U0FDN0IsQ0FBQyxDQUFDO1FBR0gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFHckQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDcEIsTUFBTSxVQUFVLEdBQUcsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2hELE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQ0E7WUFDM0IsTUFBTSxFQUFFLG1CQUFVLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7aUJBQzFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUM7aUJBQ25DLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUNsQyxNQUFNLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNO1lBQzdCLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsaUJBQWlCO1lBQ25ELE1BQU0sRUFBRTtnQkFDSixNQUFNLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZO2dCQUNuQyxRQUFRLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRO2dCQUNqQyxNQUFNLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQzthQUNsRDtTQUNKLEVBQUU7WUFDQyxLQUFLLEVBQUUsSUFBSSxVQUFVLENBQUM7Z0JBQ2xCLElBQUksRUFBRSxXQUFXO2dCQUNqQixJQUFJLEVBQUUsS0FBSyxDQUFDLEtBQUs7Z0JBQ2pCLE1BQU0sRUFBRSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHO2dCQUNuQyxVQUFVLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVO2dCQUNyQyxTQUFTLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTO2dCQUNuQyxFQUFFLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxRQUFRO2FBQy9CLENBQUM7U0FDTCxDQUNKLENBQUM7UUFDRixJQUFJLENBQUMsYUFBYSxHQUFHLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFHakMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxjQUFPLENBQUMsb0JBQVEsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDL0MsT0FBTyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2pCLFVBQVUsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQVU7WUFDeEMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLO1NBQ2pFLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBR3pELElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBTyxDQUFDLG9CQUFRLEVBQUUsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBU1MsS0FBSyxDQUFDLGVBQWU7UUFDM0IsTUFBTSxNQUFNLEdBQUcsTUFBTSxhQUFhLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELHVCQUFJLENBQUMsY0FBTyxDQUFDLG9CQUFRLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBVVMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLElBQVk7UUFDOUMsSUFBSTtZQUNBLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUM7WUFDcEMsSUFBSSxDQUFDLGtDQUFvQixDQUFXLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBUyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFBRSxPQUFPO1lBQ3BHLE1BQU0sVUFBVSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7WUFDL0IsSUFBSSxDQUFDLENBQUMsVUFBVSxZQUFZLHFCQUFTLENBQUMsRUFBRTtnQkFDcEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxJQUFJLEdBQUcscUNBQXFDLENBQUMsQ0FBQzthQUNqRTtZQUNELElBQUksVUFBVSxDQUFDLGVBQWUsSUFBSSxVQUFVLENBQUMsTUFBTSxFQUFFO2dCQUNqRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsZUFBZSxFQUFrQixVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDL0U7U0FDSjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ1osTUFBTSxLQUFLLENBQUM7U0FDZjtJQUNMLENBQUM7SUFTUyxLQUFLLENBQUMsa0JBQWtCO1FBRTlCLE1BQU0sV0FBVyxHQUFHLE1BQU0sYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyRCxNQUFNLFNBQVMsR0FBNkIsRUFBRSxDQUFDO1FBQy9DLE1BQU0sQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQzlDLGtCQUFrQixDQUFDLHNCQUFzQixDQUFDLG1CQUFtQixDQUFDO1lBQzlELGtCQUFrQixDQUFDLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDO1lBQzdELHVCQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO2dCQUNqQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUM7U0FDTCxDQUFDLENBQUM7UUFDSCxNQUFNLE1BQU0sR0FBRyxJQUFJLHlDQUFrQixDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFFakUsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLDBCQUFXLENBQUMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLGNBQWMsQ0FBQztZQUNuRCxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDdEIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLO1NBQ2xFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQztDQUNKO0FBN09ELGdDQTZPQyJ9