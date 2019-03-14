"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify = require("fastify");
const pointOfView = require("point-of-view");
const nunjucks = require("nunjucks");
const path_1 = require("path");
const app_root_path_1 = require("app-root-path");
const fastifyStatic = require("fastify-static");
const events_1 = require("events");
class BaseServer extends events_1.EventEmitter {
    constructor() {
        super();
        this.server = fastify();
        this.state = 'stopped';
        this.server.server.on('listening', () => {
            this.state = 'started';
            this.emit(this.state);
        });
        this.server.server.on('close', () => {
            this.state = 'stopped';
            this.emit(this.state);
        });
        this.state = 'loadConfig';
        this.emit(this.state);
        this.loadConfig()
            .then(() => {
            this.state = 'setupServer';
            this.emit(this.state);
            this.setupServer();
        })
            .then(() => {
            this.state = 'routeCollection';
            this.emit(this.state);
            this.routeCollection();
        })
            .then(() => {
            this.state = 'afterRouteCollection';
            this.emit(this.state);
            this.afterRouteCollection();
        })
            .then(() => {
            this.state = 'ready';
            this.emit(this.state);
        });
    }
    async loadConfig() { }
    async setupServer() {
        this.server.register(pointOfView, {
            engine: {
                nunjucks: nunjucks
            },
            includeViewExtension: true,
            templates: path_1.resolve(app_root_path_1.path, './out/app/views')
        });
        this.server.register(fastifyStatic, {
            root: path_1.resolve(app_root_path_1.path, './out/app/client'),
            prefix: '/static/'
        });
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
        return new Promise(async (resolve) => {
            try {
                let port = 8080;
                if (process.env.PORT) {
                    port = parseInt(process.env.PORT, 10);
                }
                let listening = await this.server.listen(port);
                resolve(listening);
                console.log('Server started:', listening);
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
    on(state, listener) {
        return super.on(state, listener);
    }
    once(state, listener) {
        return super.once(state, listener);
    }
    off(state, listener) {
        return super.off(state, listener);
    }
}
exports.BaseServer = BaseServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHAvc2VydmVyL2xpYi9CYXNlU2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW1DO0FBQ25DLDZDQUE2QztBQUM3QyxxQ0FBcUM7QUFDckMsK0JBQStCO0FBQy9CLGlEQUFpRDtBQUNqRCxnREFBZ0Q7QUFDaEQsbUNBQXNDO0FBbUJ0QyxNQUFzQixVQUFXLFNBQVEscUJBQVk7SUFvQmpEO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFiRixXQUFNLEdBQTRCLE9BQU8sRUFBRSxDQUFDO1FBVTVDLFVBQUssR0FBVyxTQUFTLENBQUM7UUFJaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUU7WUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtZQUNoQyxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEVBQUU7YUFDWixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7WUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FB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