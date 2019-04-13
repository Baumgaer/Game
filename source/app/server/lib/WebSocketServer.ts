import { BaseServer } from '~server/lib/BaseServer';
import * as ws from 'ws';
import { IncomingMessage, ClientRequest } from 'http';
import { Request, Response } from 'express';
import { Logger } from '~server/lib/Logger';

const logger = new Logger();
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
    protected readonly webSocketServer: ws.Server;

    constructor() {
        super();

        this.webSocketServer = new ws.Server({
            server: this.server,
            verifyClient: this.verifyClient.bind(this)
        });

        this.webSocketServer.on('connection', (socket: ws, request: IncomingMessage) => {
            logger.info(`New connection:`, request.connection.address());
            this.onWebSocketConnection(socket, request);
            socket.on('open', this.onWebSocketOpen.bind(this));
            socket.on('upgrade', this.onWebSocketUpgrade.bind(this));
            socket.on('ping', this.onWebSocketPing.bind(this));
            socket.on('pong', this.onWebSocketPong.bind(this));
            socket.on('message', (message: string) => this.onIncomingWebSocketMessage(message, socket));
            socket.on('unexpected-response', this.onWebSocketUnexpectedResponse.bind(this));
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
    protected async onWebSocketConnection(_socket: ws, _request: IncomingMessage): Promise<void> {}

    /**
     * Fired when a client send a message to the server
     *
     * @param {string} message
     * @param {ws} socket
     * @memberof WebSocketServer
     */
    protected async onIncomingWebSocketMessage(_message: string, _socket: ws): Promise<void> {}

    /**
     * Fired when an existing client opens a new websocket connection to this server
     *
     * @protected
     * @param {ws} socket
     * @memberof WebSocketServer
     */
    protected async onWebSocketOpen(_socket: ws): Promise<void> {}

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
     * Fired when the used protocol of an established connection is changed
     * for example from ws:// to wss://.
     *
     * @protected
     * @param {IncomingMessage} request
     * @returns {Promise<void>}
     * @memberof WebSocketServer
     */
    protected async onWebSocketUpgrade(_request: IncomingMessage): Promise<void> {}

    /**
     * Fired when the server respond with an status code which is not typically
     * for the sent content.
     *
     * @protected
     * @param {ClientRequest} request
     * @param {IncomingMessage} response
     * @returns {Promise<void>}
     * @memberof WebSocketServer
     */
    protected async onWebSocketUnexpectedResponse(_req: ClientRequest, _res: IncomingMessage): Promise<void> {}

    /**
     * Fired when an existing connection was closed.
     *
     * @protected
     * @param {number} code
     * @param {string} reason
     * @returns {Promise<void>}
     * @memberof WebSocketServer
     */
    protected async onWebSocketClose(_code: number, _reason: string): Promise<void> {}

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
