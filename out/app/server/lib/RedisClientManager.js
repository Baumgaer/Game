"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Redis_1 = require("./Redis");
const lodash_1 = require("lodash");
const Logger_1 = require("./Logger");
let logger = new Logger_1.Logger({
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
    createClient(id, options, subscribe) {
        let defaults = {
            retryStrategy: this.retryStrategy.bind(this),
            reconnectOnError: this.reconnectOnError.bind(this)
        };
        options = lodash_1.merge(defaults, options);
        return new Promise((resolve, reject) => {
            if (this.clients.has(id)) {
                return reject(new ClientAlreadyExistsError(`Redis client ${id} already exists`));
            }
            let client = new Redis_1.Redis(options);
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
        let targetError = 'READONLY';
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
        client.reloadFunction && client.reloadFunction();
        return error;
    }
    getClient(id) {
        return this.clients.get(id);
    }
    killClient(id) {
        return new Promise((resolve, reject) => {
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
    killAllClients() {
        return new Promise(async (resolve) => {
            let clients = this.clients.keys();
            let promises = [];
            for (const client of clients) {
                promises.push(this.killClient(client));
            }
            await Promise.all(promises);
            resolve(true);
        });
    }
}
exports.RedisClientManager = RedisClientManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVkaXNDbGllbnRNYW5hZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvbGliL1JlZGlzQ2xpZW50TWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUE2QztBQUU3QyxtQ0FBK0I7QUFDL0IscUNBQWtDO0FBRWxDLElBQUksTUFBTSxHQUFHLElBQUksZUFBTSxDQUFDO0lBQ3BCLG1CQUFtQixFQUFFLElBQUk7Q0FDNUIsQ0FBQyxDQUFDO0FBU0gsTUFBYSxtQkFBb0IsU0FBUSxLQUFLO0NBQUc7QUFBakQsa0RBQWlEO0FBU2pELE1BQWEsd0JBQXlCLFNBQVEsS0FBSztDQUFHO0FBQXRELDREQUFzRDtBQVF0RCxNQUFhLGtCQUFrQjtJQWtDM0I7UUFoQlEsWUFBTyxHQUF1QixJQUFJLEdBQUcsRUFBRSxDQUFDO0lBZ0J6QixDQUFDO0lBUGpCLE1BQU0sQ0FBQyxXQUFXO1FBQ3JCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUU7WUFDOUIsa0JBQWtCLENBQUMsUUFBUSxHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztTQUMxRDtRQUNELE9BQU8sa0JBQWtCLENBQUMsUUFBUSxDQUFDO0lBQ3ZDLENBQUM7SUFhTSxZQUFZLENBQUMsRUFBVSxFQUFFLE9BQXFCLEVBQUUsU0FBbUI7UUFDdEUsSUFBSSxRQUFRLEdBQUc7WUFDWCxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQzVDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3JELENBQUM7UUFDRixPQUFPLEdBQUcsY0FBSyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUNuQyxPQUFPLElBQUksT0FBTyxDQUFRLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ3RCLE9BQU8sTUFBTSxDQUFDLElBQUksd0JBQXdCLENBQUMsZ0JBQWdCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO2FBQ3BGO1lBQ0QsSUFBSSxNQUFNLEdBQUcsSUFBSSxhQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDaEMsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDZixJQUFJLFNBQVMsRUFBRTtnQkFDWCxNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLEtBQWEsRUFBRSxNQUFjLEVBQUUsRUFBRTtvQkFDbkQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDNUQsQ0FBQyxDQUFDLENBQUM7YUFDTjtZQUNELE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQzlDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqQyxDQUFDLENBQUMsQ0FBQztZQUNILE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDM0IsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBU0QsYUFBYSxDQUFDLEtBQWE7UUFDdkIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQVNELGdCQUFnQixDQUFDLEtBQVk7UUFDekIsSUFBSSxXQUFXLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxXQUFXLEVBQUU7WUFDNUQsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFRRCxlQUFlLENBQUMsTUFBYTtRQUN6QixNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixNQUFNLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBU0QsaUJBQWlCLENBQUMsTUFBYSxFQUFFLEtBQWE7UUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxFQUFFLHVCQUF1QixLQUFLLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFRRCxhQUFhLENBQUMsTUFBYTtRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixNQUFNLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFVRCxlQUFlLENBQUMsTUFBYSxFQUFFLEtBQWEsRUFBRSxNQUFtQjtRQUM3RCxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLEtBQUssTUFBTSxRQUFRLElBQXFCLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUk5RCxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQzthQUNoQztTQUNKO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsTUFBTSxDQUFDLEVBQUUsbUJBQW1CLEtBQUssZ0JBQWdCLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQVVELGFBQWEsQ0FBQyxNQUFhLEVBQUUsS0FBWTtRQUNyQyxNQUFNLENBQUMsS0FBSyxDQUFDLHVCQUF1QixNQUFNLENBQUMsRUFBRSxLQUFLLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDckQsTUFBTyxDQUFDLGNBQWMsSUFBVSxNQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDL0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQVNNLFNBQVMsQ0FBQyxFQUFVO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQVNNLFVBQVUsQ0FBQyxFQUFVO1FBQ3hCLE9BQU8sSUFBSSxPQUFPLENBQVUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDNUMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNoQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNULE9BQU8sTUFBTSxDQUFDLElBQUksbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO2FBQzVDO1lBQ0QsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2QsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO2dCQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLFdBQVcsQ0FBQyxDQUFDO2dCQUM1QyxNQUFNLElBQUksTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUM7Z0JBQ3RDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBUU0sY0FBYztRQUNqQixPQUFPLElBQUksT0FBTyxDQUFVLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRTtZQUMxQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2xDLElBQUksUUFBUSxHQUE0QixFQUFFLENBQUM7WUFDM0MsS0FBSyxNQUFNLE1BQU0sSUFBSSxPQUFPLEVBQUU7Z0JBQzFCLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQzFDO1lBQ0QsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQTVORCxnREE0TkMifQ==