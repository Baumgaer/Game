import { BaseServer } from '~server/lib/BaseServer';
import ws, { Server as WSServer } from 'ws';
import os from "os";
import { IncomingMessage } from 'http';
import { Request, Response } from 'express';
import { Logger } from '~server/lib/Logger';
import { RedisClientManager } from '~server/lib/RedisClientManager';
import { Redis } from '~server/lib/Redis';
import { ConfigManager } from '~server/lib/ConfigManager';
import { ucFirst } from "~bdo/utils/util";

import type { IConfig } from "~bdo/interfaces/Config";

const logger = new Logger();
const redisClientManager = RedisClientManager.getInstance();
const configManager = ConfigManager.getInstance();

// Created in constructor
let pub: Redis;
let sub: Redis;

/**
 * The structure of how a message to the WebSocketServer should look like
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
 * Implements the standard websocket behavior, manages broadcasting to other
 * server instances and a framework to use network functionality.
 *
 * @abstract
 * @augments {BaseServer}
 */
export abstract class WebSocketServer extends BaseServer {
    /**
     * The websocket server instance
     *
     * @protected
     * @type {ws.Server}
     * @memberof WebSocketServer
     */
    protected readonly webSocketServer: ws.Server = new WSServer({
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
    protected async setup(): Promise<void> {
        super.setup();

        [pub, sub] = await Promise.all([
            redisClientManager.createClient('websocketPublisher'),
            redisClientManager.createClient('websocketSubscriber', undefined, true)
        ]);

        sub.subscribe('WebsocketServer:broadcast', (message: string, serverID: string) => {
            if (serverID === os.hostname()) return;
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
     * @param _request The request object given by http server
     * @returns true if the user is allowed to use this server and false else
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
     * @param message The message which should be sent
     * @param socket the socket of the current user
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
     * @param _query The graphql query which should be processed
     * @param _socket The socket of the current user
     * @memberof WebSocketServer
     */
    protected async fetchAPI(_query: string, _socket: ws): Promise<void> {
        throw new Error("not implemented");
    }

    /**
     * Sends an error to the given socket client
     *
     * @protected
     * @param error The error which should be sent
     * @param socket The socket of the current user
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
     * @param _socket The socket of the current user
     * @param request the request given by the http server
     * @memberof WebSocketServer
     */
    protected async onWebSocketConnection(_socket: ws, request: IncomingMessage): Promise<void> {
        logger.info(`New connection:`, request.connection.address());
    }

    /**
     * Fired when an error occurs on server side in conjunction with an existing client
     *
     * @protected
     * @param _socket The socket of the current user
     * @param _error The error which was thrown
     * @memberof WebSocketServer
     */
    protected async onWebSocketError(_socket: ws, _error: Error): Promise<void> {
        return;
    }

    /**
     * Fired when an existing connection was closed.
     *
     * @protected
     * @param _code The code of the closing reason
     * @param _reason The reason in words
     * @memberof WebSocketServer
     */
    protected async onWebSocketClose(_code: number, _reason: string): Promise<void> {
        logger.debug('Websocket closed');
    }

    /**
     * Fired when a ping from client was received
     *
     * @protected
     * @param _data The data received with a ping packet
     * @memberof WebSocketServer
     */
    protected async onWebSocketPing(_data: Buffer): Promise<void> {
        return;
    }

    /**
     * Fired when the received ping was successful and answered
     *
     * @protected
     * @param _data Data which should be sent as an answer to a ping
     * @memberof WebSocketServer
     */
    protected async onWebSocketPong(_data: Buffer): Promise<void> {
        return;
    }

    /**
     * Fired when a client send a message to the server
     *
     * @param message The received message of the user
     * @param socket The socket of the current user
     * @memberof WebSocketServer
     */
    private async onIncomingWebSocketMessage(message: string, socket: ws): Promise<void> {
        let data: IWSCall;
        try {
            data = JSON.parse(message);
        } catch (error) {
            this.sendError(error, socket);
            return;
        }
        if (!('type' in data) || !('data' in data)) {
            const wrongFormatError = new Error(`Message was not an instance of IwsCall`);
            this.sendError(wrongFormatError, socket);
            return;
        }

        const capitalized = ucFirst(data.type);
        const funcName = `on${capitalized}`;

        switch (data.type.toLowerCase()) {
            case 'broadcast':
                pub.publish('WebsocketServer:broadcast', [data.data, os.hostname()]);
                this.broadcast(data.data, socket);
                break;
            case 'api':
                if (!("data" in data) || !data.data) {
                    this.sendError(new Error(`No field "query" provided but called api`), socket);
                    return;
                }
                this.fetchAPI(data.data, socket);
                break;
            case 'config':
                socket.send(JSON.stringify({
                    data: await configManager.getForClient(<keyof IConfig["client"]>data.data)
                }));
                break;
            default:
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
     * @param info The information given to a client of the websocket
     * @param done A callback which will be executed when the user is verified
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
