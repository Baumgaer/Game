import { BaseServer } from './server/lib/BaseServer';
import { Request, Response } from 'express';
import * as ws from 'ws';
import { IncomingMessage } from 'http';

/**
 * This server serves a static html page to the client which initializes
 * the webGL game environment.
 *
 * @class GameServer
 * @extends {BaseServer}
 */
class GameServer extends BaseServer {
    /**
     * Test
     *
     * @type {Server}
     * @memberof GameServer
     */
    webSocketServer: ws.Server = new ws.Server({
        server: this.server
    });

    /**
     * Test
     *
     * @returns {Promise<void>}
     * @memberof GameServer
     */
    async setupServer(): Promise<void> {
        super.setupServer();
        this.webSocketServer.on('connection', (socket, request: IncomingMessage) => {
            console.log('New connection:', request.connection.address());
            socket.on('message', (message: string) => this.onIncomingWebSocketMessage(message, socket));
            socket.on('error', this.onWebSocketError.bind(this));
            socket.on('open', this.onWebSocketOpen.bind(this));
        });
    }

    /**
     * Test
     *
     * @protected
     * @returns {Promise<void>}
     * @memberof GameServer
     */
    protected async routeCollection(): Promise<void> {
        this.app.get('/', this.serveIndex.bind(this));
    }

    /**
     * Serves the static html page
     *
     * @private
     * @param {Request} request
     * @param {Response} reply
     * @memberof GameServer
     */
    private async serveIndex(_request: Request, reply: Response): Promise<void> {
        reply.render('index', {
            hello: 'world'
        });
    }

    /**
     * Test
     *
     * @memberof GameServer
     */
    onIncomingWebSocketMessage(data: string, socket: ws): void {
        console.log(data);
        socket.send(data);
    }

    /**
     * Test
     *
     * @memberof GameServer
     */
    onWebSocketOpen(webSocket: WebSocket): void {
        console.log(webSocket);
    }

    /**
     * Test
     *
     * @memberof GameServer
     */
    onWebSocketError(_webSocket: WebSocket, error: Error): void {
        console.log(error);
    }
}

let gameServer = new GameServer();
gameServer.start();
