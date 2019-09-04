"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BaseServer_1 = require("~server/lib/BaseServer");
const ws = tslib_1.__importStar(require("ws"));
const os = tslib_1.__importStar(require("os"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2ViU29ja2V0U2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvbGliL1dlYlNvY2tldFNlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1REFBb0Q7QUFDcEQsK0NBQXlCO0FBQ3pCLCtDQUF5QjtBQUd6QiwrQ0FBNEM7QUFDNUMsdUVBQW9FO0FBRXBFLHFDQUFpRDtBQUNqRCw2REFBMEQ7QUFDMUQsMENBQTBDO0FBRTFDLE1BQU0sTUFBTSxHQUFHLElBQUksZUFBTSxFQUFFLENBQUM7QUFDNUIsTUFBTSxrQkFBa0IsR0FBRyx1Q0FBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUM1RCxNQUFNLGFBQWEsR0FBRyw2QkFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBR2xELElBQUksR0FBVSxDQUFDO0FBQ2YsSUFBSSxHQUFVLENBQUM7QUFrQ2YsTUFBc0IsZUFBZ0IsU0FBUSx1QkFBVTtJQUF4RDs7UUFRdUIsb0JBQWUsR0FBYyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDMUQsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDMUMsY0FBYyxFQUFFLElBQUk7U0FDdkIsQ0FBQyxDQUFDO0lBNE5QLENBQUM7SUFuTmEsS0FBSyxDQUFDLFdBQVc7UUFDdkIsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXBCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUMzQixrQkFBa0IsQ0FBQyxZQUFZLENBQUMsb0JBQW9CLENBQUM7WUFDckQsa0JBQWtCLENBQUMsWUFBWSxDQUFDLHFCQUFxQixFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUM7U0FDMUUsQ0FBQyxDQUFDO1FBRUgsR0FBRyxDQUFDLFNBQVMsQ0FBQywy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