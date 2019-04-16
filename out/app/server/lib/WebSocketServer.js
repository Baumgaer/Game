"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseServer_1 = require("~server/lib/BaseServer");
const ws = require("ws");
const Logger_1 = require("~server/lib/Logger");
const RedisClientManager_1 = require("~server/lib/RedisClientManager");
const logger = new Logger_1.Logger();
const redisClientManager = RedisClientManager_1.RedisClientManager.getInstance();
let pub;
class WebSocketServer extends BaseServer_1.BaseServer {
    constructor() {
        super();
        redisClientManager.createClient('websocketPublisher').then((client) => {
            pub = client;
        });
        redisClientManager.createClient('websocketSubscriber', undefined, true).then((client) => {
            client.subscribe('WebsocketServer:message', (message, serverID) => {
                if (serverID === process.env.pm_id)
                    return;
                this.onIncomingWebSocketMessage(message);
            });
        });
        this.webSocketServer = new ws.Server({
            server: this.server,
            verifyClient: this.verifyClient.bind(this),
            clientTracking: true
        });
        this.webSocketServer.on('connection', (socket, request) => {
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
    async onWebSocketConnection(_socket, request) {
        logger.info(`New connection:`, request.connection.address());
    }
    async onIncomingWebSocketMessage(message, socket) {
        if (socket)
            pub.publish('WebsocketServer:message', [message, process.env.pm_id]);
        for (const client of this.webSocketServer.clients) {
            if (client !== socket && client.readyState === ws.OPEN) {
                client.send(message);
            }
        }
    }
    async onWebSocketOpen(_socket) { }
    async onWebSocketError(_socket, _error) { }
    async onWebSocketUpgrade(_request) { }
    async onWebSocketUnexpectedResponse(_req, _res) { }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViU29ja2V0U2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvbGliL1dlYlNvY2tldFNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVEQUFvRDtBQUNwRCx5QkFBeUI7QUFHekIsK0NBQTRDO0FBQzVDLHVFQUFvRTtBQUdwRSxNQUFNLE1BQU0sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO0FBQzVCLE1BQU0sa0JBQWtCLEdBQUcsdUNBQWtCLENBQUMsV0FBVyxFQUFFLENBQUM7QUFHNUQsSUFBSSxHQUFVLENBQUM7QUFVZixNQUFzQixlQUFnQixTQUFRLHVCQUFVO0lBVXBEO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFFUixrQkFBa0IsQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNsRSxHQUFHLEdBQUcsTUFBTSxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUFDO1FBRUgsa0JBQWtCLENBQUMsWUFBWSxDQUFDLHFCQUFxQixFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNwRixNQUFNLENBQUMsU0FBUyxDQUFDLHlCQUF5QixFQUFFLENBQUMsT0FBZSxFQUFFLFFBQWdCLEVBQUUsRUFBRTtnQkFDOUUsSUFBSSxRQUFRLEtBQWEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLO29CQUFFLE9BQU87Z0JBQ25ELElBQUksQ0FBQywwQkFBMEIsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM3QyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDakMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFlBQVksRUFBRSxJQUFJLENBQUMs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