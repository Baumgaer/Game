"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseServer_1 = require("./BaseServer");
const ws = require("ws");
const Logger_1 = require("./Logger");
const logger = new Logger_1.Logger();
class WebSocketServer extends BaseServer_1.BaseServer {
    constructor() {
        super();
        this.webSocketServer = new ws.Server({
            server: this.server,
            verifyClient: this.verifyClient.bind(this)
        });
        this.webSocketServer.on('connection', (socket, request) => {
            logger.info(`New connection:`, request.connection.address());
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
    async verifyWebSocketClient(_request) {
        return false;
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
    async verifyClient(info, done) {
        if (this.sessionParser) {
            this.sessionParser(info.req, {}, async () => {
                done(await this.verifyWebSocketClient(info.req));
            });
            return;
        }
        done(false);
    }
}
exports.WebSocketServer = WebSocketServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViU29ja2V0U2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvbGliL1dlYlNvY2tldFNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUEwQztBQUMxQyx5QkFBeUI7QUFHekIscUNBQWtDO0FBRWxDLE1BQU0sTUFBTSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7QUFTNUIsTUFBc0IsZUFBZ0IsU0FBUSx1QkFBVTtJQVVwRDtRQUNJLEtBQUssRUFBRSxDQUFDO1FBRVIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDakMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDN0MsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBVSxFQUFFLE9BQXdCLEVBQUUsRUFBRTtZQUMzRSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUM3RCxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzVDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3pELE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNuRCxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQWUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzVGLE1BQU0sQ0FBQyxFQUFFLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2hGLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNyRCxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBVVMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLFFBQWlCO1FBQ25ELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFXUyxLQUFLLENBQUMscUJBQXFCLENBQUMsT0FBVyxFQUFFLFFBQXlCLElBQWtCLENBQUM7SUFTckYsS0FBSyxDQUFDLDBCQUEwQixDQUFDLFFBQWdCLEVBQUUsT0FBVyxJQUFrQixDQUFDO0lBU2pGLEtBQUssQ0FBQyxlQUFlLENBQUMsT0FBVyxJQUFrQixDQUFDO0lBVXBELEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFXLEVBQUUsTUFBYSxJQUFrQixDQUFDO0lBV3BFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxRQUF5QixJQUFrQixDQUFDO0lBWXJFLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxRQUF1QixFQUFFLFNBQTBCLElBQWtCLENBQUM7SUFXMUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQWEsRUFBRSxPQUFlLElBQWtCLENBQUM7SUFVeEUsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFhLElBQWtCLENBQUM7SUFVdEQsS0FBSyxDQUFDLGVBQWUsQ0FBQyxLQUFhLElBQWtCLENBQUM7SUFZeEQsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUF3QixFQUFFLElBQXdCO1FBQ3pFLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQixJQUFJLENBQUMsYUFBYSxDQUFVLElBQUksQ0FBQyxHQUFHLEVBQVksRUFBRSxFQUFFLEtBQUssSUFBSSxFQUFFO2dCQUMzRCxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDOUQsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEIsQ0FBQztDQUNKO0FBNUpELDBDQTRKQyJ9