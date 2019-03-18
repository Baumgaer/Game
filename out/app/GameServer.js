"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WebSocketServer_1 = require("./server/lib/WebSocketServer");
class GameServer extends WebSocketServer_1.WebSocketServer {
    async verifyWebSocketClient(_request) {
        return true;
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZVNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHAvR2FtZVNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtFQUErRDtBQVUvRCxNQUFNLFVBQVcsU0FBUSxpQ0FBZTtJQVMxQixLQUFLLENBQUMscUJBQXFCLENBQUMsUUFBaUI7UUFDbkQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQVNTLEtBQUssQ0FBQyxlQUFlO1FBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFVTyxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQWlCLEVBQUUsS0FBZTtRQUN2RCxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUNsQixLQUFLLEVBQUUsT0FBTztTQUNqQixDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7QUFFRCxJQUFJLFVBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO0FBQ2xDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyJ9