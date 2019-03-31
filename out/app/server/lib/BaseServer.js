"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const hpp = require("hpp");
const helmet = require("helmet");
const compression = require("compression");
const nunjucks = require("nunjucks");
const expressSession = require("express-session");
const connectRedis = require("connect-redis");
const path_1 = require("path");
const app_root_path_1 = require("app-root-path");
const http_1 = require("http");
const crypto_1 = require("crypto");
const ConfigManager_1 = require("./ConfigManager");
const ms = require("ms");
let configManager = ConfigManager_1.ConfigManager.getInstance();
let configs = null;
class BaseServer {
    constructor(params = {}) {
        this.app = express();
        this.server = http_1.createServer(this.app);
        this.state = 'stopped';
        Object.assign(this, params);
        this.server.on('listening', () => {
            this.state = 'started';
            let addressInfo = this.server.address();
            console.log(`Server started: ${addressInfo.address}:${addressInfo.port}`);
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
                console.error(error);
                process.exit(1);
            }
        });
    }
    async stop() {
        await this.server.close();
        console.log('Server stopped');
        process.exit(0);
    }
}
exports.BaseServer = BaseServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHAvc2VydmVyL2xpYi9CYXNlU2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW1DO0FBQ25DLDJCQUEyQjtBQUMzQixpQ0FBaUM7QUFDakMsMkNBQTJDO0FBQzNDLHFDQUFxQztBQUNyQyxrREFBa0Q7QUFDbEQsOENBQThDO0FBQzlDLCtCQUErQjtBQUMvQixpREFBaUQ7QUFDakQsK0JBQTRDO0FBRTVDLG1DQUFvQztBQUNwQyxtREFBZ0Q7QUFDaEQseUJBQTBCO0FBRTFCLElBQUksYUFBYSxHQUFHLDZCQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7QUFFaEQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBbUJuQixNQUFzQixVQUFVO0lBc0M1QixZQUFZLFNBQWtDLEVBQUU7UUE5QjdCLFFBQUcsR0FBd0IsT0FBTyxFQUFFLENBQUM7UUFTckMsV0FBTSxHQUFXLG1CQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBbUJqRCxVQUFLLEdBQVcsU0FBUyxDQUFDO1FBR2hDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDdkIsSUFBSSxXQUFXLEdBQWdCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsV0FBVyxDQUFDLE9BQU8sSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM5RSxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7WUFD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