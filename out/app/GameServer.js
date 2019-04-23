"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./../utils/requireOverride");
const WebSocketServer_1 = require("~server/lib/WebSocketServer");
const ConfigManager_1 = require("~server/lib/ConfigManager");
const path_1 = require("path");
const app_root_path_1 = require("app-root-path");
const configManager = ConfigManager_1.ConfigManager.getInstance();
class GameServer extends WebSocketServer_1.WebSocketServer {
    async verifyWebSocketClient(_request) {
        return true;
    }
    async routeCollection() {
        const config = await configManager.get('paths');
        this.singleRouteCollection(path_1.resolve(app_root_path_1.path, config.routes, 'GameLobby.js'));
    }
}
const gameServer = new GameServer();
gameServer.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZVNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHAvR2FtZVNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvQztBQUNwQyxpRUFBOEQ7QUFDOUQsNkRBQTBEO0FBRTFELCtCQUErQjtBQUMvQixpREFBaUQ7QUFFakQsTUFBTSxhQUFhLEdBQUcsNkJBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQVNsRCxNQUFNLFVBQVcsU0FBUSxpQ0FBZTtJQVMxQixLQUFLLENBQUMscUJBQXFCLENBQUMsUUFBaUI7UUFDbkQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQVNTLEtBQUssQ0FBQyxlQUFlO1FBQzNCLE1BQU0sTUFBTSxHQUFHLE1BQU0sYUFBYSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMscUJBQXFCLENBQUMsY0FBTyxDQUFDLG9CQUFRLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ2pGLENBQUM7Q0FDSjtBQUVELE1BQU0sVUFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7QUFDcEMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDIn0=