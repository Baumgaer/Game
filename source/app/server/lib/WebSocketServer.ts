import { BaseServer } from '~server/lib/BaseServer';
import * as ws from 'ws';
import { IncomingMessage } from 'http';
import { Request, Response } from 'express';
import { Logger } from '~server/lib/Logger';
import { RedisClientManager } from '~server/lib/RedisClientManager';
import { Redis } from '~server/lib/Redis';
import { graphql, GraphQLSchema } from 'graphql';
import { ConfigManager } from '~server/lib/ConfigManager';

const logger = new Logger();
const redisClientManager = RedisClientManager.getInstance();
const configManager = ConfigManager.getInstance();

// Created in constructor
let pub: Redis;
let sub: Redis;

/**
 * The structure of how a message to the WebSocketServer should look like
 *
 * @export
 * @interface IWSCall
 */
export interface IWSCall {
    /**
     * Used to call the corresponding method
     *
     * @type {string}
     * @memberof IwsCall
     */
    type: 'api' | 'broadcast';

    /**
     * The Arguments passed to the method
     *
     * @type {string}
     * @memberof IwsCall
     */
    data: string;
}
/**
 * Test
 *
 * @export
 * @abstract
 * @class WebSocketServer
 * @extends {BaseServer}
 */
export abstract class WebSocketServer extends BaseServer {
    /**
     * The websocket server instance
     *
     * @protected
     * @type {ws.Server}
     * @memberof WebSocketServer
     */
    protected readonly webSocketServer: ws.Server = new ws.Server({
        server: this.server,
        verifyClient: this.verifyClient.bind(this),
        clientTracking: true
    });

    /**
     * @inheritdoc
     *
     * @protected
     * @returns {Promise<void>}
     * @memberof WebSocketServer
     */
    protected async setupServer(): Promise<void> {
        super.setupServer();

        [pub, sub] = await Promise.all([
            redisClientManager.createClient('websocketPublisher'),
            redisClientManager.createClient('websocketSubscriber', undefined, true)
        ]);

        sub.subscribe('WebsocketServer:broadcast', (message: string, serverID: string) => {
            if (serverID === <string>process.env.pm_id) return;
            this.broadcast(message);
        });

        this.webSocketServer.on('connection', (socket: ws, request: IncomingMessage) => {
            this.onWebSocketConnection(socket, request);
            socket.on('ping', this.onWebSocketPing.bind(this));
            socket.on('pong', this.onWebSocketPong.bind(this));
            socket.on('message', (message: string) => this.onIncomingWebSocketMessage(message, socket));
            socket.on('error', this.onWebSocketError.bind(this));
            socket.on('close', this.onWebSocketClose.bind(this));
        });
    }

    /**
     * Determines wether a client has rights to access the websocket server
     *
     * @protected
     * @param {Request} _request
     * @returns {Promise<boolean>}
     * @memberof WebSocketServer
     */
    protected async verifyWebSocketClient(_request: Request): Promise<boolean> {
        return false;
    }

    /**
     * Sends a message to all other clients than the socket. If there is no socket
     * given it could only be a server instance where the client is not registered.
     *
     * @protected
     * @param {string} message
     * @param {ws} [socket]
     * @memberof WebSocketServer
     */
    protected broadcast(message: string, socket?: ws): void {
        for (const client of this.webSocketServer.clients) {
            if (client !== socket && client.readyState === ws.OPEN) {
                client.send(JSON.stringify({
                    data: message
                }));
            }
        }
    }

    /**
     * Calls the graphQL api and sends the result to the asking client
     *
     * @protected
     * @param {string} query
     * @param {ws} socket
     * @memberof WebSocketServer
     */
    protected async fetchAPI(query: string, socket: ws): Promise<void> {
        const result = await graphql(<GraphQLSchema>this.apiSchema, query);
        socket.send(JSON.stringify(result));
    }

    /**
     * Sends an error to the given socket client
     *
     * @protected
     * @param {Error} error
     * @param {ws} socket
     * @memberof WebSocketServer
     */
    protected sendError(error: Error, socket: ws): void {
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

    /**
     * Fired when a client established a new connection to this server
     *
     * @protected
     * @param {ws} socket
     * @param {IncomingMessage} request
     * @returns {Promise<void>}
     * @memberof WebSocketServer
     */
    protected async onWebSocketConnection(_socket: ws, request: IncomingMessage): Promise<void> {
        logger.info(`New connection:`, request.connection.address());
    }

    /**
     * Fired when an error occurs on server side in conjunction with an existing client
     *
     * @protected
     * @param {ws} socket
     * @param {Error} error
     * @memberof WebSocketServer
     */
    protected async onWebSocketError(_socket: ws, _error: Error): Promise<void> { }

    /**
     * Fired when an existing connection was closed.
     *
     * @protected
     * @param {number} code
     * @param {string} reason
     * @returns {Promise<void>}
     * @memberof WebSocketServer
     */
    protected async onWebSocketClose(_code: number, _reason: string): Promise<void> {
        logger.debug('Websocket closed');
    }

    /**
     * Fired when a ping from client was received
     *
     * @protected
     * @param {Buffer} data
     * @returns {Promise<void>}
     * @memberof WebSocketServer
     */
    protected async onWebSocketPing(_data: Buffer): Promise<void> { }

    /**
     * Fired when the received ping was successful and answered
     *
     * @protected
     * @param {Buffer} data
     * @returns {Promise<void>}
     * @memberof WebSocketServer
     */
    protected async onWebSocketPong(_data: Buffer): Promise<void> { }

    /**
     * Fired when a client send a message to the server
     *
     * @param {string} message
     * @param {ws} socket
     * @memberof WebSocketServer
     */
    private async onIncomingWebSocketMessage(message: string, socket: ws): Promise<void> {
        let data: IWSCall;
        try {
            data = JSON.parse(message);
        } catch (error) {
            return this.sendError(error, socket);
        }
        if (!('type' in data) || !('data' in data)) {
            const wrongFormatError = new Error(`Message was not an instance of IwsCall`);
            return this.sendError(wrongFormatError, socket);
        }
        switch ((<string>data.type).toLowerCase()) {
            case 'broadcast':
                pub.publish('WebsocketServer:broadcast', [data.data, <string>process.env.pm_id]);
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
                if (typeof (<IndexStructure>this)[funcName] === 'function') {
                    try {
                        (<IndexStructure>this)[funcName](JSON.parse(data.data), socket);
                    } catch (error) {
                        this.sendError(error, socket);
                    }
                } else this.sendError(new Error(`Type "${data.type}" does not exist`), socket);
        }
    }

    /**
     * Maps the express session on the web socket server and provides a hook
     * to control the access of a user to the connection.
     *
     * @protected
     * @param {wsVerifyClientInfo} info
     * @param {wsVerifyClientDone} done
     * @returns {Promise<void>}
     * @memberof WebSocketServer
     */
    private async verifyClient(info: wsVerifyClientInfo, done: wsVerifyClientDone): Promise<void> {
        if (this.sessionParser) {
            this.sessionParser(<Request>info.req, <Response>{}, async () => {
                done(await this.verifyWebSocketClient(<Request>info.req));
            });
            return;
        }
        done(false);
    }
}
