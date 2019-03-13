"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseServer_1 = require("./server/lib/BaseServer");
class GameServer extends BaseServer_1.BaseServer {
    async routeCollection() {
        this.server.route({
            method: 'GET',
            url: '/',
            handler: this.serveIndex.bind(this)
        });
    }
    async serveIndex(_request, reply) {
        reply.send('tach auch');
    }
}
let gameServer = new GameServer();
gameServer.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZVNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHAvR2FtZVNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdEQUFxRDtBQVdyRCxNQUFNLFVBQVcsU0FBUSx1QkFBVTtJQVFyQixLQUFLLENBQUMsZUFBZTtRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNkLE1BQU0sRUFBRSxLQUFLO1lBQ2IsR0FBRyxFQUFFLEdBQUc7WUFDUixPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3RDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFVTyxLQUFLLENBQUMsVUFBVSxDQUNwQixRQUF5QyxFQUN6QyxLQUFvQztRQUVwQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVCLENBQUM7Q0FDSjtBQUVELElBQUksVUFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7QUFDbEMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDIn0=