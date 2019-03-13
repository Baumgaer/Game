"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fastify = require("fastify");
class BaseServer {
    constructor() {
        this.server = fastify();
        this.state = 'stopped';
        this.state = 'loadConfig';
        this.loadConfig()
            .then(() => {
            this.state = 'setupServer';
            this.setupServer();
        })
            .then(() => {
            this.state = 'afterServerSetup';
            this.afterServerSetup();
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
    async setupServer() { }
    async afterServerSetup() { }
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
                resolve(await this.server.listen(3000));
                console.log('Server started');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHAvc2VydmVyL2xpYi9CYXNlU2VydmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQW1DO0FBVW5DLE1BQXNCLFVBQVU7SUFvQjVCO1FBWlUsV0FBTSxHQUE0QixPQUFPLEVBQUUsQ0FBQztRQVU1QyxVQUFLLEdBQVcsU0FBUyxDQUFDO1FBR2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLEVBQUU7YUFDWixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLEtBQUssR0FBRyxhQUFhLENBQUM7WUFDM0IsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUCxJQUFJLENBQUMsS0FBSyxHQUFHLGtCQUFrQixDQUFDO1lBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQzVCLENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDUCxJQUFJLENBQUMsS0FBSyxHQUFHLGlCQUFpQixDQUFDO1lBQy9CLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1AsSUFBSSxDQUFDLEtBQUssR0FBRyxzQkFBc0IsQ0FBQztZQUNwQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUNoQyxDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQVNTLEtBQUssQ0FBQyxVQUFVLEtBQW1CLENBQUM7SUFTcEMsS0FBSyxDQUFDLFdBQVcsS0FBbUIsQ0FBQztJQVNyQyxLQUFLLENBQUMsZ0JBQWdCLEtBQW1CLENBQUM7SUFTMUMsS0FBSyxDQUFDLGVBQWUsS0FBbUIsQ0FBQztJQVN6QyxLQUFLLENBQUMsb0JBQW9CLEtBQW1CLENBQUM7SUFTakQsS0FBSyxDQUFDLEtBQUs7UUFDZCxNQUFNLElBQUksT0FBTyxDQUFPLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDaEMsSUFBSSxRQUFRLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtnQkFDNUIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLE9BQU8sRUFBRTtvQkFDeEIsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN4QixPQUFPLEVBQUUsQ0FBQztpQkFDYjtZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksT0FBTyxDQUFTLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRTtZQUN6QyxJQUFJO2dCQUNBLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzthQUNqQztZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3JCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbkI7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFVTSxLQUFLLENBQUMsSUFBSTtRQUNiLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDOUIsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQixDQUFDO0NBQ0o7QUEvSEQsZ0NBK0hDIn0=