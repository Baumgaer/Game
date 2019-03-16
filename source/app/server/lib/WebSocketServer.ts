import { BaseServer } from './BaseServer';
import * as ws from 'ws';
import { IncomingMessage, ClientRequest } from 'http';

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
     * Test
     *
     * @protected
     * @type {ws.Server}
     * @memberof WebSocketServer
     */
    protected readonly webSocketServer: ws.Server;

    constructor() {
        super();

        this.webSocketServer = new ws.Server({
            server: this.server
        });

        this.webSocketServer.on('connection', (socket: ws, request: IncomingMessage) => {
            console.log('New connection:', request.connection.address());
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
     * Test
     *
     * @protected
     * @param {ws} socket
     * @param {IncomingMessage} request
     * @returns {Promise<void>}
     * @memberof WebSocketServer
     */
    protected async onWebSocketConnection(_socket: ws, _request: IncomingMessage): Promise<void> {}

    /**
     * Test
     *
     * @param {string} message
     * @param {ws} socket
     * @memberof WebSocketServer
     */
    protected async onIncomingWebSocketMessage(_message: string, _socket: ws): Promise<void> {}

    /**
     * Test
     *
     * @protected
     * @param {ws} socket
     * @memberof WebSocketServer
     */
    protected async onWebSocketOpen(_socket: ws): Promise<void> {}

    /**
     * Test
     *
     * @protected
     * @param {ws} socket
     * @param {Error} error
     * @memberof WebSocketServer
     */
    protected async onWebSocketError(_socket: ws, _error: Error): Promise<void> {}

    /**
     * Test
     *
     * @protected
     * @param {IncomingMessage} request
     * @returns {Promise<void>}
     * @memberof WebSocketServer
     */
    protected async onWebSocketUpgrade(_request: IncomingMessage): Promise<void> {}

    /**
     * Test
     *
     * @protected
     * @param {ClientRequest} request
     * @param {IncomingMessage} response
     * @returns {Promise<void>}
     * @memberof WebSocketServer
     */
    protected async onWebSocketUnexpectedResponse(_request: ClientRequest, _response: IncomingMessage): Promise<void> {}

    /**
     * Test
     *
     * @protected
     * @param {number} code
     * @param {string} reason
     * @returns {Promise<void>}
     * @memberof WebSocketServer
     */
    protected async onWebSocketClose(_code: number, _reason: string): Promise<void> {}

    /**
     * Test
     *
     * @protected
     * @param {Buffer} data
     * @returns {Promise<void>}
     * @memberof WebSocketServer
     */
    protected async onWebSocketPing(_data: Buffer): Promise<void> {}

    /**
     * Test
     *
     * @protected
     * @param {Buffer} data
     * @returns {Promise<void>}
     * @memberof WebSocketServer
     */
    protected async onWebSocketPong(_data: Buffer): Promise<void> {}
}
