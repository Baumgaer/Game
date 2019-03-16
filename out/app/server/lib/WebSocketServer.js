"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseServer_1 = require("./BaseServer");
const ws = require("ws");
class WebSocketServer extends BaseServer_1.BaseServer {
    constructor() {
        super();
        this.webSocketServer = new ws.Server({
            server: this.server
        });
        this.webSocketServer.on('connection', (socket, request) => {
            console.log('New connection:', request.connection.address());
            this.onWebSocketConnection(socket, request);
            socket.on('open', this.onWebSocketOpen.bind(this));
            socket.on('upgrade', this.onWebSocketUpgrade.bind(this));
            socket.on('ping', this.onWebSocketPing.bind(this));
            socket.on('pong', this.onWebSocketPong.bind(this));
            socket.on('message', (message) => this.onIncomingWebSocketMessage(message, socket));
            socket.on('unexpected-response', this.onWebSocketUnexpectedResponse.bind(this));
            socket.on('error', this.onWebSocketError.bind(this));
            socket.on('close', this.onWebSocketClose.bind(this));
        });
    }
    async onWebSocketConnection(_socket, _request) { }
    async onIncomingWebSocketMessage(_message, _socket) { }
    async onWebSocketOpen(_socket) { }
    async onWebSocketError(_socket, _error) { }
    async onWebSocketUpgrade(_request) { }
    async onWebSocketUnexpectedResponse(_request, _response) { }
    async onWebSocketClose(_code, _reason) { }
    async onWebSocketPing(_data) { }
    async onWebSocketPong(_data) { }
}
exports.WebSocketServer = WebSocketServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViU29ja2V0U2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvbGliL1dlYlNvY2tldFNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUEwQztBQUMxQyx5QkFBeUI7QUFXekIsTUFBc0IsZUFBZ0IsU0FBUSx1QkFBVTtJQVVwRDtRQUNJLEtBQUssRUFBRSxDQUFDO1FBRVIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDakMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3RCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQVUsRUFBRSxPQUF3QixFQUFFLEVBQUU7WUFDM0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7WUFDN0QsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztZQUM1QyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ25ELE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN6RCxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ25ELE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFlLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM1RixNQUFNLENBQUMsRUFBRSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNoRixNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDckQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQVdTLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxPQUFXLEVBQUUsUUFBeUIsSUFBa0IsQ0FBQztJQVNyRixLQUFLLENBQUMsMEJBQTBCLENBQUMsUUFBZ0IsRUFBRSxPQUFXLElBQWtCLENBQUM7SUFTakYsS0FBSyxDQUFDLGVBQWUsQ0FBQyxPQUFXLElBQWtCLENBQUM7SUFVcEQsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQVcsRUFBRSxNQUFhLElBQWtCLENBQUM7SUFVcEUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLFFBQXlCLElBQWtCLENBQUM7SUFXckUsS0FBSyxDQUFDLDZCQUE2QixDQUFDLFFBQXVCLEVBQUUsU0FBMEIsSUFBa0IsQ0FBQztJQVcxRyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBYSxFQUFFLE9BQWUsSUFBa0IsQ0FBQztJQVV4RSxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQWEsSUFBa0IsQ0FBQztJQVV0RCxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQWEsSUFBa0IsQ0FBQztDQUNuRTtBQXpIRCwwQ0F5SEMifQ==