"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseServer_1 = require("~server/lib/BaseServer");
const ws = require("ws");
const Logger_1 = require("~server/lib/Logger");
const RedisClientManager_1 = require("~server/lib/RedisClientManager");
const graphql_1 = require("graphql");
const logger = new Logger_1.Logger();
const redisClientManager = RedisClientManager_1.RedisClientManager.getInstance();
let pub;
let sub;
class WebSocketServer extends BaseServer_1.BaseServer {
    constructor() {
        super(...arguments);
        this.webSocketServer = new ws.Server({
            server: this.server,
            verifyClient: this.verifyClient.bind(this),
            clientTracking: true
        });
    }
    async setupServer() {
        super.setupServer();
        [pub, sub] = await Promise.all([
            redisClientManager.createClient('websocketPublisher'),
            redisClientManager.createClient('websocketSubscriber', undefined, true)
        ]);
        sub.subscribe('WebsocketServer:message', (message, serverID) => {
            if (serverID === process.env.pm_id)
                return;
            this.onIncomingWebSocketMessage(message);
        });
        this.webSocketServer.on('connection', (socket, request) => {
            this.onWebSocketConnection(socket, request);
            socket.on('ping', this.onWebSocketPing.bind(this));
            socket.on('pong', this.onWebSocketPong.bind(this));
            socket.on('message', (message) => this.onIncomingWebSocketMessage(message, socket));
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
        if (socket) {
            const result = await graphql_1.graphql(this.apiSchema, message);
            socket.send(JSON.stringify(result));
        }
    }
    async onWebSocketError(_socket, _error) { }
    async onWebSocketClose(_code, _reason) {
        logger.debug('Websocket closed');
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViU29ja2V0U2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvbGliL1dlYlNvY2tldFNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVEQUFvRDtBQUNwRCx5QkFBeUI7QUFHekIsK0NBQTRDO0FBQzVDLHVFQUFvRTtBQUVwRSxxQ0FBaUQ7QUFFakQsTUFBTSxNQUFNLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQztBQUM1QixNQUFNLGtCQUFrQixHQUFHLHVDQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO0FBRzVELElBQUksR0FBVSxDQUFDO0FBQ2YsSUFBSSxHQUFVLENBQUM7QUFVZixNQUFzQixlQUFnQixTQUFRLHVCQUFVO0lBQXhEOztRQVF1QixvQkFBZSxHQUFjLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUMxRCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUMxQyxjQUFjLEVBQUUsSUFBSTtTQUN2QixDQUFDLENBQUM7SUEySVAsQ0FBQztJQWxJYSxLQUFLLENBQUMsV0FBVztRQUN2QixLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQzNCLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQztZQUNyRCxrQkFBa0IsQ0FBQyxZQUFZLENBQUMscUJBQXFCLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQztTQUMxRSxDQUFDLENBQUM7UUFFSCxHQUFHLENBQUMsU0FBUyxDQUFDLHlCQUF5QixFQUFFLENBQUMsT0FBZSxFQUFFLFFBQWdCLEVBQUUsRUFBRTtZQUMzRSxJQUFJLFFBQVEsS0FBYSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUs7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