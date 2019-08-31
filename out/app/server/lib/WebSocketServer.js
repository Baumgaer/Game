"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseServer_1 = require("~server/lib/BaseServer");
const ws = require("ws");
const os = require("os");
const Logger_1 = require("~server/lib/Logger");
const RedisClientManager_1 = require("~server/lib/RedisClientManager");
const graphql_1 = require("graphql");
const ConfigManager_1 = require("~server/lib/ConfigManager");
const util_1 = require("~bdo/utils/util");
const logger = new Logger_1.Logger();
const redisClientManager = RedisClientManager_1.RedisClientManager.getInstance();
const configManager = ConfigManager_1.ConfigManager.getInstance();
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
        sub.subscribe('WebsocketServer:broadcast', (message, serverID) => {
            if (serverID === os.hostname())
                return;
            this.broadcast(message);
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
    broadcast(message, socket) {
        for (const client of this.webSocketServer.clients) {
            if (client !== socket && client.readyState === ws.OPEN) {
                client.send(JSON.stringify({
                    data: message
                }));
            }
        }
    }
    async fetchAPI(query, socket) {
        const result = await graphql_1.graphql(this.apiSchema, query);
        socket.send(JSON.stringify(result));
    }
    sendError(error, socket) {
        logger.error(error);
        socket.send(JSON.stringify({
            data: {
                errors: [{
                        message: error.message,
                        name: error.name,
                        stack: error.stack
                    }]
            }
        }));
    }
    async onWebSocketConnection(_socket, request) {
        logger.info(`New connection:`, request.connection.address());
    }
    async onWebSocketError(_socket, _error) { }
    async onWebSocketClose(_code, _reason) {
        logger.debug('Websocket closed');
    }
    async onWebSocketPing(_data) { }
    async onWebSocketPong(_data) { }
    async onIncomingWebSocketMessage(message, socket) {
        let data;
        try {
            data = JSON.parse(message);
        }
        catch (error) {
            return this.sendError(error, socket);
        }
        if (!('type' in data) || !('data' in data)) {
            const wrongFormatError = new Error(`Message was not an instance of IwsCall`);
            return this.sendError(wrongFormatError, socket);
        }
        switch (data.type.toLowerCase()) {
            case 'broadcast':
                pub.publish('WebsocketServer:broadcast', [data.data, os.hostname()]);
                this.broadcast(data.data, socket);
                break;
            case 'api':
                if (!data.hasOwnProperty('data') || !data.data) {
                    return this.sendError(new Error(`No field "query" provided but called api`), socket);
                }
                this.fetchAPI(data.data, socket);
                break;
            case 'config':
                const config = await configManager.getForClient(data.data);
                socket.send(JSON.stringify({
                    data: config
                }));
                break;
            default:
                const capitalized = util_1.ucFirst(data.type);
                const funcName = `on${capitalized}`;
                if (typeof this[funcName] === 'function') {
                    try {
                        this[funcName](JSON.parse(data.data), socket);
                    }
                    catch (error) {
                        this.sendError(error, socket);
                    }
                }
                else
                    this.sendError(new Error(`Type "${data.type}" does not exist`), socket);
        }
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
}
exports.WebSocketServer = WebSocketServer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViU29ja2V0U2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvbGliL1dlYlNvY2tldFNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVEQUFvRDtBQUNwRCx5QkFBeUI7QUFDekIseUJBQXlCO0FBR3pCLCtDQUE0QztBQUM1Qyx1RUFBb0U7QUFFcEUscUNBQWlEO0FBQ2pELDZEQUEwRDtBQUMxRCwwQ0FBMEM7QUFFMUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxlQUFNLEVBQUUsQ0FBQztBQUM1QixNQUFNLGtCQUFrQixHQUFHLHVDQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQzVELE1BQU0sYUFBYSxHQUFHLDZCQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7QUFHbEQsSUFBSSxHQUFVLENBQUM7QUFDZixJQUFJLEdBQVUsQ0FBQztBQWtDZixNQUFzQixlQUFnQixTQUFRLHVCQUFVO0lBQXhEOztRQVF1QixvQkFBZSxHQUFjLElBQUksRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUMxRCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztZQUMxQyxjQUFjLEVBQUUsSUFBSTtTQUN2QixDQUFDLENBQUM7SUE0TlAsQ0FBQztJQW5OYSxLQUFLLENBQUMsV0FBVztRQUN2QixLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFcEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDO1lBQzNCLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQztZQUNyRCxrQkFBa0IsQ0FBQyxZQUFZLENBQUMscUJBQXFCLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQztTQUMxRSxDQUFDLENBQUM7UUFFSCxHQUFHLENBQUMsU0FBUyxDQUFDLDJC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