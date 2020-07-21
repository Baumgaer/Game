import { Redis, messageType } from '~server/lib/Redis';
import IORedis from 'ioredis';
import { merge } from '~bdo/utils/util';
import { Logger } from '~server/lib/Logger';
import { ConfigManager } from '~server/lib/ConfigManager';

const configManager = ConfigManager.getInstance();
const logger = new Logger({
    preventConsolePrint: true
});

/**
 * Fired when a redis client does not exist
 *
 * @extends Error
 */
export class ClientNotExistError extends Error { }

/**
 * Fired when a redis client already exists but tried to create an instance
 *
 * @extends Error
 */
export class ClientAlreadyExistsError extends Error { }

/**
 * Manages the connections of all redis clients especially the subscription
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

    private constructor() {
        // This is just to implement the singleton pattern
    }

    /**
     * Creates a new instance for the singleton manager
     *
     * @static
     * @returns An instance of RedisClientManager
     * @memberof RedisClientManager
     */
    public static getInstance(): RedisClientManager {
        if (!RedisClientManager.instance) {
            RedisClientManager.instance = new RedisClientManager();
        }
        return RedisClientManager.instance;
    }

    /**
     * Creates a new Redis client if id does not already exist
     *
     * @param id Name of the client
     * @param options The options of the client e.g. the port number or credentials. default: {}
     * @param subscribe If the client serves as Pub/Sub. Default: false
     * @returns A Redis client
     * @memberof RedisClientManager
     */
    public createClient(id: string, options: IORedis.RedisOptions = {}, subscribe = false): Promise<Redis> {
        return this.clientCreation(id, options, subscribe, false);
    }

    /**
     * Creates a very slightly manipulated client for third party libraries
     *
     * @param id Name of the client
     * @param options The options of the client e.g. the port number or credentials. default: {}
     * @returns A none effected redis client for compatibility
     * @memberof RedisClientManager
     */
    public createThirdPartyClient(id: string, options: IORedis.RedisOptions = {}): Promise<IORedis.Redis> {
        return this.clientCreation(id, options, false, true);
    }

    /**
     * Returns an existing redis client
     *
     * @param id Name of the client
     * @returns A Redis client if someone was found
     * @memberof RedisClientManager
     */
    public getClient(id: string): Redis | IORedis.Redis | undefined {
        return this.clients.get(id);
    }

    /**
     * Disconnects the client from the server and deletes it from the client map
     *
     * @param id The name of the client
     * @returns true if the client is killed
     * @memberof RedisClientManager
     */
    public killClient(id: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            const client = this.getClient(id);
            if (!client) return reject(new ClientNotExistError());
            client.quit();
            client.on('close', () => {
                logger.info(`Redis Client "${id}" is dead`);
                if (client) client.removeAllListeners();
                resolve(this.clients.delete(id));
            });
        });
    }

    /**
     * Kills all clients and removes them from the client map
     *
     * @returns true if all clients are killed
     * @memberof RedisClientManager
     */
    public killAllClients(): Promise<boolean> {
        return new Promise<boolean>(async (resolve) => {
            const clients = this.clients.keys();
            const promises: Array<Promise<boolean>> = [];
            for (const client of clients) {
                promises.push(this.killClient(client));
            }
            await Promise.all(promises);
            resolve(true);
        });
    }

    /**
     * Creates the real client depending on third party is true or not
     *
     * @private
     * @param id The name of the client
     * @param options The options of the client e.g. the port number or credentials.
     * @param subscribe If the client serves as Pub/Sub
     * @param thirdParty If the client is used for a third party library
     * @returns A Redis client
     * @memberof RedisClientManager
     */
    private async clientCreation<T extends boolean>(
        id: string,
        options: IORedis.RedisOptions,
        subscribe: boolean,
        thirdParty: T
    ): Promise<T extends true ? IORedis.Redis : Redis> {
        const config = await Promise.all([configManager.get('ports'), configManager.get('databases')]);
        const defaultClientSettings = {
            retryStrategy: this.retryStrategy.bind(this),
            reconnectOnError: this.reconnectOnError.bind(this),
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT,
            db: <number>config[1].redis.default
        };
        options = merge(defaultClientSettings, options);
        return new Promise<T extends true ? IORedis.Redis : Redis>((resolve, reject) => {
            let client: IORedis.Redis | Redis;
            if (thirdParty) {
                client = new IORedis(options);
            } else client = new Redis(options);

            (client as unknown as Redis).id = id;
            if (subscribe) {
                client.on('message', (topic: string, params: string) => {
                    this.onClientMessage((client as unknown) as Redis, topic, JSON.parse(params));
                });
            }
            client.on('error', (error) => {
                reject(this.onClientError((client as unknown) as Redis, error));
            });
            client.on('reconnecting', (times) => {
                this.onClientReconnect((client as unknown) as Redis, times);
            });
            client.on('connect', () => {
                this.onClientConnect((client as unknown) as Redis);
            });
            client.on('ready', () => {
                this.onClientReady((client as unknown) as Redis);
                resolve(client as T extends true ? IORedis.Redis : Redis);
            });
        });
    }

    /**
     * Manages the retry delay in case of connection lost
     *
     * @param times current number of retry
     * @returns The new delay
     * @memberof RedisClientManager
     */
    private retryStrategy(times: number): number {
        return Math.min(times * 100, 3000);
    }

    /**
     * Decides in which case the reconnect should be done
     *
     * @param error occurred error
     * @returns should retry or not
     * @memberof RedisClientManager
     */
    private reconnectOnError(error: Error): boolean {
        const targetError = 'READONLY';
        if (error.message.slice(0, targetError.length) === targetError) {
            return true;
        }
        return false;
    }

    /**
     * Fired when the client is connected to the server
     *
     * @param client The Redis client which connects
     * @memberof RedisClientManager
     */
    private onClientConnect(client: Redis): void {
        logger.info(`Redis client ${client.id} is connected`);
    }

    /**
     * Fired when the client is reconnecting
     *
     * @param client The client which reconnects
     * @param times Time duration to reconnect
     * @memberof RedisClientManager
     */
    private onClientReconnect(client: Redis, times: number): void {
        logger.info(`${client.id} is reconnecting in ${times}ms`);
    }

    /**
     * Fired when the client is ready to use
     *
     * @param client The client which becomes ready
     * @memberof RedisClientManager
     */
    private onClientReady(client: Redis): void {
        logger.info(`Redis client ${client.id} is ready`);
        this.clients.set(client.id, client);
    }

    /**
     * Fired when the client is a subscriber and receives a message
     *
     * @param client The client which received a message
     * @param topic The topic which was received
     * @param params The parameters which were sent with the topic
     * @memberof RedisClientManager
     */
    private onClientMessage(client: Redis, topic: string, params: messageType): void {
        if (client.topics.has(topic)) {
            for (const callback of <AnyFunction[]>client.topics.get(topic)) {
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
     * @param client The client which had an error
     * @param error The error which happened
     * @returns The error which happened. Used for further processing
     * @memberof RedisClientManager
     */
    private onClientError(client: Redis, error: Error): Error {
        logger.error(`RedisClientError of ${client.id}: ${error}`);
        if ((<any>client).reloadFunction) (<any>client).reloadFunction();
        return error;
    }
}
