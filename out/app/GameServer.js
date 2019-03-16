"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseServer_1 = require("./server/lib/BaseServer");
const ws = require("ws");
class GameServer extends BaseServer_1.BaseServer {
    constructor() {
        super(...arguments);
        this.webSocketServer = new ws.Server({
            server: this.server
        });
    }
    async setupServer() {
        super.setupServer();
        this.webSocketServer.on('connection', (socket, request) => {
            console.log('New connection:', request.connection.address());
            socket.on('message', (message) => this.onIncomingWebSocketMessage(message, socket));
            socket.on('error', this.onWebSocketError.bind(this));
            socket.on('open', this.onWebSocketOpen.bind(this));
        });
    }
    async routeCollection() {
        this.app.get('/', this.serveIndex.bind(this));
    }
    async serveIndex(_request, reply) {
        reply.render('index', {
            hello: 'world'
        });
    }
    onIncomingWebSocketMessage(data, socket) {
        console.log(data);
        socket.send(data);
    }
    onWebSocketOpen(webSocket) {
        console.log(webSocket);
    }
    onWebSocketError(_webSocket, error) {
        console.log(error);
    }
}
let gameServer = new GameServer();
gameServer.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2FtZVNlcnZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHAvR2FtZVNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdEQUFxRDtBQUVyRCx5QkFBeUI7QUFVekIsTUFBTSxVQUFXLFNBQVEsdUJBQVU7SUFBbkM7O1FBT0ksb0JBQWUsR0FBYyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDdkMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3RCLENBQUMsQ0FBQztJQXNFUCxDQUFDO0lBOURHLEtBQUssQ0FBQyxXQUFXO1FBQ2IsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBRSxPQUF3QixFQUFFLEVBQUU7WUFDdkUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDN0QsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFlLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM1RixNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDckQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFTUyxLQUFLLENBQUMsZUFBZTtRQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBVU8sS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFpQixFQUFFLEtBQWU7UUFDdkQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDbEIsS0FBSyxFQUFFLE9BQU87U0FDakIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQU9ELDBCQUEwQixDQUFDLElBQVksRUFBRSxNQUFVO1FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBT0QsZUFBZSxDQUFDLFNBQW9CO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQU9ELGdCQUFnQixDQUFDLFVBQXFCLEVBQUUsS0FBWTtRQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7Q0FDSjtBQUVELElBQUksVUFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7QUFDbEMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDIn0=