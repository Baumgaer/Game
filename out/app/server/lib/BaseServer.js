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
const ConfigManager_1 = require("./ConfigManager");
const Logger_1 = require("./Logger");
const projectStructure_1 = require("./../../../utils/projectStructure");
let configManager = ConfigManager_1.ConfigManager.getInstance();
let logger = new Logger_1.Logger({
    logLevel: 'debug'
});
let configs = null;
class BaseServer {
    constructor() {
        this.app = express();
        this.server = http_1.createServer(this.app);
        this.state = 'stopped';
        this.server.on('listening', () => {
            this.state = 'started';
            let addressInfo = this.server.address();
            logger.info(`Server started: ${addressInfo.address}:${addressInfo.port}`);
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
    async setupServer() {
        configs = await Promise.all([
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
        let RedisStore = connectRedis(expressSession);
        let sessionConfig = Object.assign({
            secret: crypto_1.createHash(configs[0].session.hashFunction)
                .update(configs[1].sessionSecretSeed)
                .digest(configs[0].session.digest),
            resave: configs[0].session.resave,
            saveUninitialized: configs[0].session.saveUninitialized,
            cookie: {
                secure: configs[0].session.secureCookie,
                httpOnly: configs[0].session.httpOnly,
                maxAge: parseInt(ms(configs[0].session.maxAge), 10)
            }
        }, {
            store: new RedisStore({
                host: 'localhost',
                port: configs[3].redis,
                prefix: `${configs[0].session.prefix}:`,
                disableTTL: configs[0].session.disableTTL,
                logErrors: configs[0].session.logErrors,
                db: configs[2].redis.sessions
            })
        });
        this.sessionParser = expressSession(sessionConfig);
        this.app.use(this.sessionParser);
        let resolvers = [];
        await projectStructure_1.walk('out/app/server/resolver', (file) => {
            let requiredModule = require(file).default;
            resolvers.push(requiredModule);
        });
        this.app.use('/api', expressGraphQL({
            schema: await type_graphql_1.buildSchema({
                resolvers: resolvers
            }),
            graphiql: process.env.NODE_ENV === 'development' ? true : false
        }));
        nunjucks.configure(path_1.resolve(app_root_path_1.path, configs[4].views), {
            express: this.app,
            autoescape: configs[0].viewEngine.autoescape
        });
        this.app.set('view engine', configs[0].viewEngine.extension);
        this.app.use(express.static(path_1.resolve(app_root_path_1.path, configs[4].staticFiles)));
    }
    async routeCollection() { }
    async afterRouteCollection() { }
    async start() {
        await new Promise((resolve) => {
            let interval = setInterval(() => {
                if (this.state === 'ready') {
                    clearInterval(interval);
                    resolve();
                }
            });
        });
        return new Promise((resolve) => {
            try {
                let port = 8080;
                if (process.env.PORT) {
                    port = parseInt(process.env.PORT, 10);
                }
                resolve(this.server.listen(port, 'localhost'));
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
        process.exit(0);
    }
}
exports.BaseServer = BaseServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHAvc2VydmVyL2xpYi9CYXNlU2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUJBQTBCO0FBQzFCLDRCQUEwQjtBQUMxQixtQ0FBbUM7QUFDbkMsMkJBQTJCO0FBQzNCLGlDQUFpQztBQUNqQywyQ0FBMkM7QUFDM0MscUNBQXFDO0FBQ3JDLGtEQUFrRDtBQUNsRCw4Q0FBOEM7QUFDOUMsa0RBQWtEO0FBQ2xELCtDQUEyQztBQUMzQywrQkFBK0I7QUFDL0IsaURBQWlEO0FBQ2pELCtCQUE0QztBQUU1QyxtQ0FBb0M7QUFDcEMsbURBQWdEO0FBQ2hELHFDQUFrQztBQUNsQyx3RUFBeUQ7QUFFekQsSUFBSSxhQUFhLEdBQUcsNkJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNoRCxJQUFJLE1BQU0sR0FBRyxJQUFJLGVBQU0sQ0FBQztJQUNwQixRQUFRLEVBQUUsT0FBTztDQUNwQixDQUFDLENBQUM7QUFFSCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFtQm5CLE1BQXNCLFVBQVU7SUFzQzVCO1FBOUJtQixRQUFHLEdBQXdCLE9BQU8sRUFBRSxDQUFDO1FBU3JDLFdBQU0sR0FBVyxtQkFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQW1CakQsVUFBSyxHQUFXLFNBQVMsQ0FBQztRQUdoQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFO1lBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQ3ZCLElBQUksV0FBVyxHQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3JELE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLFdBQVcsQ0FBQyxPQUFPLElBQUksV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7UUFDOUUsQ0FB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