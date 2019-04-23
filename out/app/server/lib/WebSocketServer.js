"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseServer_1 = require("~server/lib/BaseServer");
const ws = require("ws");
const Logger_1 = require("~server/lib/Logger");
const RedisClientManager_1 = require("~server/lib/RedisClientManager");
const graphql_1 = require("graphql");
const ConfigManager_1 = require("~server/lib/ConfigManager");
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
            if (serverID === process.env.pm_id)
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
                pub.publish('WebsocketServer:broadcast', [data.data, process.env.pm_id]);
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
                const bigLetter = data.type.charAt(0).toUpperCase();
                const restLetter = data.type.slice(1);
                const funcName = `on${bigLetter}${restLetter}`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViU29ja2V0U2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvbGliL1dlYlNvY2tldFNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVEQUFvRDtBQUNwRCx5QkFBeUI7QUFHekIsK0NBQTRDO0FBQzVDLHVFQUFvRTtBQUVwRSxxQ0FBaUQ7QUFDakQsNkRBQTBEO0FBRTFELE1BQU0sTUFBTSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7QUFDNUIsTUFBTSxrQkFBa0IsR0FBRyx1Q0FBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUM1RCxNQUFNLGFBQWEsR0FBRyw2QkFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBR2xELElBQUksR0FBVSxDQUFDO0FBQ2YsSUFBSSxHQUFVLENBQUM7QUFpQ2YsTUFBc0IsZUFBZ0IsU0FBUSx1QkFBVTtJQUF4RDs7UUFRdUIsb0JBQWUsR0FBYyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDMUQsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDMUMsY0FBYyxFQUFFLElBQUk7U0FDdkIsQ0FBQyxDQUFDO0lBNk5QLENBQUM7SUFwTmEsS0FBSyxDQUFDLFdBQVc7UUFDdkIsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXBCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUMzQixrQkFBa0IsQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUM7WUFDckQsa0JBQWtCLENBQUMsWUFBWSxDQUFDLHFCQUFxQixFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUM7U0FDMUUsQ0FBQyxDQUFDO1FBRUgsR0FBRyxDQUFDLFNBQVMsQ0FBQywyQkFBMkIsRUFBRSxDQUFDLE9BQWUsRUFBRSxR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