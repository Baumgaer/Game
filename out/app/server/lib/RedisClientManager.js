"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Redis_1 = require("~server/lib/Redis");
const ioredis_1 = tslib_1.__importDefault(require("ioredis"));
const lodash_1 = require("lodash");
const Logger_1 = require("~server/lib/Logger");
const ConfigManager_1 = require("~server/lib/ConfigManager");
const configManager = ConfigManager_1.ConfigManager.getInstance();
const logger = new Logger_1.Logger({
    preventConsolePrint: true
});
class ClientNotExistError extends Error {
}
exports.ClientNotExistError = ClientNotExistError;
class ClientAlreadyExistsError extends Error {
}
exports.ClientAlreadyExistsError = ClientAlreadyExistsError;
class RedisClientManager {
    constructor() {
        this.clients = new Map();
    }
    static getInstance() {
        if (!RedisClientManager.instance) {
            RedisClientManager.instance = new RedisClientManager();
        }
        return RedisClientManager.instance;
    }
    createClient(id, options = {}, subscribe = false) {
        return this.clientCreation(id, options, subscribe, false);
    }
    createThirdPartyClient(id, options = {}) {
        return this.clientCreation(id, options, false, true);
    }
    getClient(id) {
        return this.clients.get(id);
    }
    killClient(id) {
        return new Promise((resolve, reject) => {
            const client = this.getClient(id);
            if (!client) {
                return reject(new ClientNotExistError());
            }
            client.quit();
            client.on('close', () => {
                logger.info(`Redis Client "${id}" is dead`);
                if (client)
                    client.removeAllListeners();
                resolve(this.clients.delete(id));
            });
        });
    }
    killAllClients() {
        return new Promise(async (resolve) => {
            const clients = this.clients.keys();
            const promises = [];
            for (const client of clients) {
                promises.push(this.killClient(client));
            }
            await Promise.all(promises);
            resolve(true);
        });
    }
    async clientCreation(id, options, subscribe, thirdParty) {
        const config = await Promise.all([configManager.get('ports'), configManager.get('databases')]);
        const defaultClientSettings = {
            retryStrategy: this.retryStrategy.bind(this),
            reconnectOnError: this.reconnectOnError.bind(this),
            host: process.env.REDIS_HOST,
            port: process.env.REDIS_PORT,
            db: config[1].redis.default
        };
        options = lodash_1.merge(defaultClientSettings, options);
        return new Promise((resolve, reject) => {
            let client;
            if (thirdParty) {
                client = new ioredis_1.default(options);
            }
            else {
                client = new Redis_1.Redis(options);
            }
            client.id = id;
            if (subscribe) {
                client.on('message', (topic, params) => {
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
    retryStrategy(times) {
        return Math.min(times * 100, 3000);
    }
    reconnectOnError(error) {
        const targetError = 'READONLY';
        if (error.message.slice(0, targetError.length) === targetError) {
            return true;
        }
        return false;
    }
    onClientConnect(client) {
        logger.info(`Redis client ${client.id} is connected`);
    }
    onClientReconnect(client, times) {
        logger.info(`${client.id} is reconnecting in ${times}ms`);
    }
    onClientReady(client) {
        logger.info(`Redis client ${client.id} is ready`);
        this.clients.set(client.id, client);
    }
    onClientMessage(client, topic, params) {
        if (client.topics.has(topic)) {
            for (const callback of client.topics.get(topic)) {
                callback.apply(this, params);
            }
        }
        logger.info(`Redis client ${client.id} received topic ${topic} with params ${params}`);
    }
    onClientError(client, error) {
        logger.error(`RedisClientError of ${client.id}: ${error}`);
        if (client.reloadFunction)
            client.reloadFunction();
        return error;
    }
}
exports.RedisClientManager = RedisClientManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVkaXNDbGllbnRNYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvbGliL1JlZGlzQ2xpZW50TWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2Q0FBdUQ7QUFDdkQsOERBQThCO0FBQzlCLG1DQUErQjtBQUMvQiwrQ0FBNEM7QUFDNUMsNkRBQTBEO0FBRTFELE1BQU0sYUFBYSxHQUFHLDZCQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDbEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxlQUFNLENBQUM7SUFDdEIsbUJBQW1CLEVBQUUsSUFBSTtDQUM1QixDQUFDLENBQUM7QUFTSCxNQUFhLG1CQUFvQixTQUFRLEtBQUs7Q0FBSTtBQUFsRCxrREFBa0Q7QUFTbEQsTUFBYSx3QkFBeUIsU0FBUSxLQUFLO0NBQUk7QUFBdkQsNERBQXVEO0FBUXZELE1BQWEsa0JBQWtCO0lBa0MzQjtRQWhCUSxZQUFPLEdBQXVCLElBQUksR0FBRyxFQUFFLENBQUM7SUFnQnhCLENBQUM7SUFQbEIsTUFBTSxDQUFDLFdBQVc7UUFDckIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRTtZQUM5QixrQkFBa0IsQ0FBQyxRQUFRLEdBQUcsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1NBQzFEO1FBQ0QsT0FBTyxrQkFBa0IsQ0FBQyxRQUFRLENBQUM7SUFDdkMsQ0FBQztJQWFNLFlBQVksQ0FBQyxFQUFVLEVBQUUsVUFBZ0MsRUFBRSxFQUFFLFlBQXFCLEtBQUs7UUFDMUYsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBbUIsQ0FBQztJQUNoRixDQUFDO0lBVU0sc0JBQXNCLENBQUMsRUFBVSxFQUFFLFVBQWdDLEVBQUU7UUFDeEUsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsS0FBSyxF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