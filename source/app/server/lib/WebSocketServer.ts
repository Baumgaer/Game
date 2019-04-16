import { BaseServer } from '~server/lib/BaseServer';
import * as ws from 'ws';
import { IncomingMessage } from 'http';
import { Request, Response } from 'express';
import { Logger } from '~server/lib/Logger';
import { RedisClientManager } from '~server/lib/RedisClientManager';
import { Redis } from '~server/lib/Redis';
const logger = new Logger();
const redisClientManager = RedisClientManager.getInstance();

// Created in constructor
let pub: Redis;
let sub: Redis;

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

        sub.subscribe('WebsocketServer:message', (message: string, serverID: string) => {
            if (serverID === <string>process.env.pm_id) return;
            this.onIncomingWebSocketMessage(message);
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
     * Fired when a client send a message to the server
     *
     * @param {string} message
     * @param {ws} socket
     * @memberof WebSocketServer
     */
    protected async onIncomingWebSocketMessage(message: string, socket?: ws): Promise<void> {
        if (socket) pub.publish('WebsocketServer:message', [message, <string>process.env.pm_id]);
        for (const client of this.webSocketServer.clients) {
            if (client !== socket && client.readyState === ws.OPEN) {
                client.send(message);
            }
        }
    }

    /**
     * Fired when an error occurs on server side in conjunction with an existing client
     *
     * @protected
     * @param {ws} socket
     * @param {Error} error
     * @memberof WebSocketServer
     */
    protected async onWebSocketError(_socket: ws, _error: Error): Promise<void> {}

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
    protected async onWebSocketPing(_data: Buffer): Promise<void> {}

    /**
     * Fired when the received ping was successful and answered
     *
     * @protected
     * @param {Buffer} data
     * @returns {Promise<void>}
     * @memberof WebSocketServer
     */
    protected async onWebSocketPong(_data: Buffer): Promise<void> {}

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
