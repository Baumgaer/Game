"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const hpp = require("hpp");
const helmet = require("helmet");
const compression = require("compression");
const nunjucks = require("nunjucks");
const path_1 = require("path");
const app_root_path_1 = require("app-root-path");
const http_1 = require("http");
class BaseServer {
    constructor() {
        this.app = express();
        this.server = http_1.createServer(this.app);
        this.state = 'stopped';
        this.server.on('listening', () => {
            this.state = 'started';
            let addressInfo = this.server.address();
            console.log(`Server started: ${addressInfo.address}:${addressInfo.port}`);
        });
        this.server.on('close', () => {
            this.state = 'stopped';
        });
        this.state = 'loadConfig';
        this.loadConfig()
            .then(() => {
            this.state = 'setupServer';
            this.setupServer();
        })
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
    async loadConfig() { }
    async setupServer() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(hpp());
        nunjucks.configure(path_1.resolve(app_root_path_1.path, 'out', 'app', 'views'), {
            express: this.app,
            autoescape: true
        });
        this.app.set('view engine', 'njk');
        this.app.use(express.static(path_1.resolve(app_root_path_1.path, 'out', 'app', 'client')));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHAvc2VydmVyL2xpYi9CYXNlU2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW1DO0FBQ25DLDJCQUEyQjtBQUMzQixpQ0FBaUM7QUFDakMsMkNBQTJDO0FBQzNDLHFDQUFxQztBQUNyQywrQkFBK0I7QUFDL0IsaURBQWlEO0FBQ2pELCtCQUE0QztBQW9CNUMsTUFBc0IsVUFBVTtJQTZCNUI7UUFyQm1CLFFBQUcsR0FBd0IsT0FBTyxFQUFFLENBQUM7UUFTckMsV0FBTSxHQUFXLG1CQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBVWpELFVBQUssR0FBVyxTQUFTLENBQUM7UUFHaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLEdBQUcsRUFBRTtZQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN2QixJQUFJLFdBQVcsR0FBZ0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixXQUFXLENBQUMsT0FBTyxJQUFJLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzlFLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLEVBQUU7YUFDWixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZC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