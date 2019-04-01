import { Redis, messageType } from './Redis';
import { RedisOptions } from 'ioredis';
import { merge } from 'lodash';
import { Logger } from './Logger';

let logger = new Logger();
/**
 * Fired when a redis client does not exist
 *
 * @export
 * @class ClientNotExistError
 * @extends {Error}
 */
export class ClientNotExistError extends Error {}

/**
 * Fired when a redis client already exists but tried to create an instance
 *
 * @export
 * @class ClientAlreadyExistsError
 * @extends {Error}
 */
export class ClientAlreadyExistsError extends Error {}

/**
 * Manages the connections of all redis clients especially the subscription
 *
 * @export
 * @class RedisClientManager
 */
export class RedisClientManager {
    /**
     * Holds the instance of the manager
     *
     * @private
     * @static
     * @type {RedisClientManager}
     * @memberof RedisClientManager
     */
    private static instance: RedisClientManager;

    /**
     * Holds a list of redis clients
     *
     * @private
     * @type {Map<string, Redis>}
     * @memberof RedisClientManager
     */
    private clients: Map<string, Redis> = new Map();

    /**
     * Creates a new instance for the singleton manager
     *
     * @static
     * @returns {RedisClientManager}
     * @memberof RedisClientManager
     */
    public static getInstance(): RedisClientManager {
        if (!RedisClientManager.instance) {
            RedisClientManager.instance = new RedisClientManager();
        }
        return RedisClientManager.instance;
    }

    private constructor() {}

    /**
     * Creates a new Redis client if id does not already exist
     *
     * @param {string} id Name of the client
     * @param {RedisOptions} options
     * @param {boolean} [subscribe] If the client serves as Pub/Sub
     * @returns {Promise<Redis>}
     * @memberof RedisClientManager
     */
    public createClient(id: string, options: RedisOptions, subscribe?: boolean): Promise<Redis> {
        let defaults = {
            retryStrategy: this.retryStrategy.bind(this),
            reconnectOnError: this.reconnectOnError.bind(this)
        };
        options = merge(defaults, options);
        return new Promise<Redis>((resolve, reject) => {
            if (this.clients.has(id)) {
                return reject(new ClientAlreadyExistsError(`Redis client ${id} already exists`));
            }
            let client = new Redis(options);
            client.id = id;
            if (subscribe) {
                client.on('message', (topic: string, params: string) => {
                    this.onClientMessage(client, topic, JSON.parse(params));
                });
            }
            client.on('error', (error) => {
                reject(this.onClientError(client, error));
            });
            client.on('reconnecting', (times) => {
                this.onClientReconnect(client, times);
            });
            client.on('connect', () => {
                this.onClientConnect(client);
            });
            client.on('ready', () => {
                this.onClientReady(client);
                resolve(client);
            });
        });
    }

    /**
     * Manages the retry delay in case of connection lost
     *
     * @param {number} times current number of retry
     * @returns {number} The new delay
     * @memberof RedisClientManager
     */
    retryStrategy(times: number): number {
        return Math.min(times * 100, 3000);
    }

    /**
     * Decides in which case the reconnect should be done
     *
     * @param {Error} error occurred error
     * @returns {boolean} should retry or not
     * @memberof RedisClientManager
     */
    reconnectOnError(error: Error): boolean {
        let targetError = 'READONLY';
        if (error.message.slice(0, targetError.length) === targetError) {
            return true;
        }
        return false;
    }

    /**
     * Fired when the client is connected to the server
     *
     * @param {Redis} client
     * @memberof RedisClientManager
     */
    onClientConnect(client: Redis): void {
        logger.info(`Redis client ${client.id} is connected`);
    }

    /**
     * Fired when the client is reconnecting
     *
     * @param {Redis} client
     * @param {number} times Time duration to reconnect
     * @memberof RedisClientManager
     */
    onClientReconnect(client: Redis, times: number): void {
        logger.info(`${client.id} is reconnecting in ${times}ms`);
    }

    /**
     * Fired when the client is ready to use
     *
     * @param {Redis} client
     * @memberof RedisClientManager
     */
    onClientReady(client: Redis): void {
        logger.info(`Redis client ${client.id} is ready`);
        this.clients.set(client.id, client);
    }

    /**
     * Fired when the client is a subscriber and receives a message
     *
     * @param {Redis} client
     * @param {string} topic
     * @param {messageType} params
     * @memberof RedisClientManager
     */
    onClientMessage(client: Redis, topic: string, params: messageType): void {
        if (client.topics.has(topic)) {
            for (const callback of <Array<Function>>client.topics.get(topic)) {
                // Call defined Function
                // In this case, "this" is the callers this...
                // Which confusion...
                callback.apply(this, params);
            }
        }
        logger.info(`Redis client ${client.id} received topic ${topic} with params ${params}`);
    }

    /**
     * Fired when an error occurred on the client
     *
     * @param {Redis} client
     * @param {Error} error
     * @returns {Error}
     * @memberof RedisClientManager
     */
    onClientError(client: Redis, error: Error): Error {
        logger.error(`RedisClientError of ${client.id}: ${error}`);
        (<any>client).reloadFunction && (<any>client).reloadFunction();
        return error;
    }

    /**
     * Returns an existing redis client
     *
     * @param {string} id Name of the client
     * @returns {(Redis | undefined)}
     * @memberof RedisClientManager
     */
    public getClient(id: string): Redis | undefined {
        return this.clients.get(id);
    }

    /**
     * Disconnects the client from the server and deletes it from the client map
     *
     * @param {string} id The name of the client
     * @returns {Promise<boolean>}
     * @memberof RedisClientManager
     */
    public killClient(id: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            let client = this.getClient(id);
            if (!client) {
                return reject(new ClientNotExistError());
            }
            client.quit();
            client.on('close', () => {
                logger.info(`Redis Client "${id}" is dead`);
                client && client.removeAllListeners();
                resolve(this.clients.delete(id));
            });
        });
    }

    /**
     * Kills all clients and removes them from the client map
     *
     * @returns {Promise<boolean>}
     * @memberof RedisClientManager
     */
    public killAllClients(): Promise<boolean> {
        return new Promise<boolean>(async (resolve) => {
            let clients = this.clients.keys();
            let promises: Array<Promise<boolean>> = [];
            for (const client of clients) {
                promises.push(this.killClient(client));
            }
            await Promise.all(promises);
            resolve(true);
        });
    }
}
