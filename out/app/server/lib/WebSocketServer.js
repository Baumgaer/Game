"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseServer_1 = require("./BaseServer");
const ws = require("ws");
const Logger_1 = require("./Logger");
let logger = new Logger_1.Logger();
class WebSocketServer extends BaseServer_1.BaseServer {
    constructor(params = {}) {
        super(params);
        this.webSocketServer = new ws.Server({
            server: this.server,
            verifyClient: this.verifyClient.bind(this)
        });
        this.webSocketServer.on('connection', (socket, request) => {
            logger.info(`New connection: ${request.connection.address()}`);
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
    async verifyClient(info, done) {
        if (this.sessionParser) {
            this.sessionParser(info.req, {}, async () => {
                done(await this.verifyWebSocketClient(info.req));
            });
            return;
        }
        done(false);
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
}
exports.WebSocketServer = WebSocketServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViU29ja2V0U2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvbGliL1dlYlNvY2tldFNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUEwQztBQUMxQyx5QkFBeUI7QUFHekIscUNBQWtDO0FBRWxDLElBQUksTUFBTSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7QUFTMUIsTUFBc0IsZUFBZ0IsU0FBUSx1QkFBVTtJQVVwRCxZQUFZLFNBQXVDLEVBQUU7UUFDakQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDakMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDN0MsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUMsTUFBVSxFQUFFLE9BQXdCLEVBQUUsRUFBRTtZQUMzRSxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzVDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3pELE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkQsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNuRCxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLE9BQWUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzVGLE1BQU0sQ0FBQyxFQUFFLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLDZCQUE2QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2hGLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNyRCxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBWU8sS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUF3QixFQUFFLElBQXdCO1FBQ3pFLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQixJQUFJLENBQUMsYUFBYSxDQUFVLElBQUksQ0FBQyxHQUFHLEVBQVksRUFBRSxFQUFFLEtBQUssSUFBSSxFQUFFO2dCQUMzRCxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQVUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDOUQsQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQVVTLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxRQUFpQjtRQUNuRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBV1MsS0FBSyxDQUFDLHFCQUFxQixDQUFDLE9BQVcsRUFBRSxRQUF5QixJQUFrQixDQUFDO0lBU3JGLEtBQUssQ0FBQywwQkFBMEIsQ0FBQyxRQUFnQixFQUFFLE9BQVcsSUFBa0IsQ0FBQztJQVNqRixLQUFLLENBQUMsZUFBZSxDQUFDLE9BQVcsSUFBa0IsQ0FBQztJQVVwRCxLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBVyxFQUFFLE1BQWEsSUFBa0IsQ0FBQztJQVVwRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsUUFBeUIsSUFBa0IsQ0FBQztJQVdyRSxLQUFLLENBQUMsNkJBQTZCLENBQUMsUUFBdUIsRUFBRSxTQUEwQixJQUFrQixDQUFDO0lBVzFHLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFhLEVBQUUsT0FBZSxJQUFrQixDQUFDO0lBVXhFLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBYSxJQUFrQixDQUFDO0lBVXRELEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBYSxJQUFrQixDQUFDO0NBQ25FO0FBMUpELDBDQTBKQyJ9