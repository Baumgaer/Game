"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WebSocketServer_1 = require("./server/lib/WebSocketServer");
class GameServer extends WebSocketServer_1.WebSocketServer {
    async routeCollection() {
        this.app.get('/', this.serveIndex.bind(this));
    }
    async serveIndex(_request, reply) {
        reply.render('index', {
            hello: 'world'
        });
    }
}
let gameServer = new GameServer();
gameServer.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZVNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHAvR2FtZVNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtFQUErRDtBQVUvRCxNQUFNLFVBQVcsU0FBUSxpQ0FBZTtJQVExQixLQUFLLENBQUMsZUFBZTtRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBVU8sS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFpQixFQUFFLEtBQWU7UUFDdkQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDbEIsS0FBSyxFQUFFLE9BQU87U0FDakIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBRUQsSUFBSSxVQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztBQUNsQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMifQ==