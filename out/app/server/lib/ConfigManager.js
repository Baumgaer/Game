"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BDOConfigManager_1 = require("./../../lib/BDOConfigManager");
const graceful_fs_1 = require("graceful-fs");
const app_root_path_1 = require("app-root-path");
const path_1 = require("path");
const ini_1 = require("ini");
const lodash_1 = require("lodash");
const RedisClientManager_1 = require("./RedisClientManager");
let clientName = 'ConfigManager';
let configKey = `${clientName}:config`;
class ConfigManager extends BDOConfigManager_1.BDOConfigManager {
    static getInstance() {
        if (!ConfigManager.instance) {
            ConfigManager.instance = new ConfigManager();
        }
        return ConfigManager.instance;
    }
    async getRedis() {
        let clientManager = RedisClientManager_1.RedisClientManager.getInstance();
        let configDB = (await this.load('databases')).redis.configuration;
        let client = clientManager.getClient(clientName);
        if (!client) {
            client = await clientManager.createClient(clientName, {
                db: configDB
            });
        }
        return Promise.resolve(client);
    }
    async load(config) {
        let temp = {};
        let appRoot = path_1.resolve(app_root_path_1.path, 'out', 'app');
        let bdoDefault = path_1.resolve(appRoot, 'config', `${config}.ini`);
        let bdoEnv = path_1.resolve(appRoot, 'config', process.env.NODE_ENV || '', `${config}.ini`);
        let serverDefault = path_1.resolve(appRoot, 'server', 'config', `${config}.ini`);
        let serverEnv = path_1.resolve(appRoot, 'server', 'config', process.env.NODE_ENV || '', `${config}.ini`);
        let configs = await Promise.all([
            this.getFile(bdoDefault),
            this.getFile(bdoEnv),
            this.getFile(serverDefault),
            this.getFile(serverEnv)
        ]);
        for (const config of configs) {
            let parsedConf = ini_1.parse(config);
            this.correctDataTypes(parsedConf);
            lodash_1.merge(temp, parsedConf);
        }
        return Promise.resolve(temp);
    }
    correctDataTypes(obj) {
        for (const k in obj) {
            if (typeof obj[k] === 'object' && obj[k] !== null) {
                this.correctDataTypes(obj[k]);
            }
            else if (typeof obj[k] === 'string') {
                if (!isNaN(obj[k])) {
                    if (obj[k].toString().indexOf('.') !== -1) {
                        obj[k] = parseFloat(obj[k]);
                    }
                    else {
                        obj[k] = parseInt(obj[k], 10);
                    }
                }
                else if (obj[k].toString().startsWith('[') && obj[k].toString().endsWith(']')) {
                    obj[k] = JSON.parse(obj[k]);
                }
            }
        }
    }
    getFile(path) {
        return new Promise((resolve, reject) => {
            graceful_fs_1.access(path, graceful_fs_1.constants.F_OK, (error) => {
                if (error) {
                    return resolve('');
                }
                graceful_fs_1.readFile(path, 'utf-8', (error, data) => {
                    if (error)
                        return reject(error);
                    resolve(data);
                });
            });
        });
    }
    set(_config) {
        throw new Error('Method not implemented.');
    }
    async getCache(config) {
        let fromLocalCache = this.cache.get(config);
        if (fromLocalCache) {
            return Promise.resolve(fromLocalCache);
        }
        let client = await this.getRedis();
        let conf = await client.get(configKey);
        if (conf !== null)
            conf = conf[config] || null;
        if (conf !== null)
            this.cache.set(config, conf);
        return Promise.resolve(conf);
    }
    async setCache(config, value) {
        this.cache.set(config, value, 60 * 10);
        let client = await this.getRedis();
        value = {
            [config]: value
        };
        client.update(configKey, value);
        return Promise.resolve(true);
    }
}
exports.ConfigManager = ConfigManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29uZmlnTWFuYWdlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NvdXJjZS9hcHAvc2VydmVyL2xpYi9Db25maWdNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUVBQWdFO0FBQ2hFLDZDQUEwRDtBQUMxRCxpREFBaUQ7QUFDakQsK0JBQStCO0FBQy9CLDZCQUE0QjtBQUM1QixtQ0FBK0I7QUFDL0IsNkRBQTBEO0FBRzFELElBQUksVUFBVSxHQUFHLGVBQWUsQ0FBQztBQUNqQyxJQUFJLFNBQVMsR0FBRyxHQUFHLFVBQVUsU0FBUyxDQUFDO0FBU3ZDLE1BQWEsYUFBYyxTQUFRLG1DQUFnQjtJQWtCeEMsTUFBTSxDQUFDLFdBQVc7UUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUU7WUFDekIsYUFBYSxDQUFDLFFBQVEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1NBQ2hEO1FBQ0QsT0FBTyxhQUFhLENBQUMsUUFBUSxDQUFDO0lBQ2xDLENBQUM7SUFTTyxLQUFLLENBQUMsUUFBUTtRQUNsQixJQUFJLGFBQWEsR0FBRyx1Q0FBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyRCxJQUFJLFFBQVEsR0FBRyxDQUFDLE1BQVksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7UUFDekUsSUFBSSxNQUFNLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1QsTUFBTSxHQUFHLE1BQU0sYUFBYSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2xELEVBQUUsRUFBRSxRQUFRO2FBQ2YsQ0FBQyxDQUFDO1NBQ047UUFDRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQVVTLEtBQUssQ0FBQyxJQUFJLENBQUMs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