"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./../utils/requireOverride");
const WebSocketServer_1 = require("~server/lib/WebSocketServer");
const node_localstorage_1 = require("node-localstorage");
global.localStorage = new node_localstorage_1.LocalStorage("./var/data/localStorage");
class GameServer extends WebSocketServer_1.WebSocketServer {
    async verifyWebSocketClient(_request) {
        return true;
    }
}
const gameServer = new GameServer();
gameServer.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZVNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHAvR2FtZVNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvQztBQUNwQyxpRUFBOEQ7QUFFOUQseURBQWlEO0FBR2pELE1BQU0sQ0FBQyxZQUFZLEdBQUcsSUFBSSxnQ0FBWSxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFTbEUsTUFBTSxVQUFXLFNBQVEsaUNBQWU7SUFTMUIsS0FBSyxDQUFDLHFCQUFxQixDQUFDLFFBQWlCO1FBQ25ELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7Q0FDSjtBQUVELE1BQU0sVUFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7QUFDcEMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDIn0=