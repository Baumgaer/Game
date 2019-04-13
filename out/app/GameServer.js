"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./../utils/requireOverride");
const WebSocketServer_1 = require("~server/lib/WebSocketServer");
class GameServer extends WebSocketServer_1.WebSocketServer {
    async verifyWebSocketClient(_request) {
        return true;
    }
    async routeCollection() {
        this.app.get('/', this.serveIndex.bind(this));
    }
    async serveIndex(_request, reply) {
        reply.render('gameLobby', {
            hello: 'world',
            process
        });
    }
}
const gameServer = new GameServer();
gameServer.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZVNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHAvR2FtZVNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvQztBQUNwQyxpRUFBOEQ7QUFVOUQsTUFBTSxVQUFXLFNBQVEsaUNBQWU7SUFTMUIsS0FBSyxDQUFDLHFCQUFxQixDQUFDLFFBQWlCO1FBQ25ELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFTUyxLQUFLLENBQUMsZUFBZTtRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBVU8sS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFpQixFQUFFLEtBQWU7UUFDdkQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7WUFDdEIsS0FBSyxFQUFFLE9BQU87WUFDZCxPQUFPO1NBQ1YsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBRUQsTUFBTSxVQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztBQUNwQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUMifQ==