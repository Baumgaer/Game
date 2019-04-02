import { BDOConfigManager } from './../../lib/BDOConfigManager';
import { readFile, access, constants } from 'graceful-fs';
import { path as rootPath } from 'app-root-path';
import { resolve } from 'path';
import { parse } from 'ini';
import { merge } from 'lodash';
import { RedisClientManager } from './RedisClientManager';
import { Redis } from './Redis';

let clientName = 'ConfigManager';
/**
 * Manages the configuration on server side. See BDOConfigManager for mode
 * information
 *
 * @export
 * @class ConfigManager
 * @extends {BDOConfigManager}
 */
export class ConfigManager extends BDOConfigManager {
    /**
     * Holds the instance of the manager to ensure it is a singleton
     *
     * @private
     * @static
     * @type {ConfigManager}
     * @memberof ConfigManager
     */
    private static instance?: ConfigManager;

    /**
     * Creates a new instance for the singleton manager
     *
     * @static
     * @returns {ConfigManager} The instance of the manager
     * @memberof ConfigManager
     */
    public static getInstance(): ConfigManager {
        if (!ConfigManager.instance) {
            ConfigManager.instance = new ConfigManager();
        }
        return ConfigManager.instance;
    }

    /**
     * Creates a new redis client if not exists
     *
     * @private
     * @returns {Promise<Redis>}
     * @memberof ConfigManager
     */
    private async getRedis(): Promise<Redis> {
        let clientManager = RedisClientManager.getInstance();
        let configDB = (await (<any>this.load('databases'))).redis.configuration;
        let client = clientManager.getClient(clientName);
        if (!client) {
            client = await clientManager.createClient(clientName, {
                db: configDB
            });
        }
        return Promise.resolve(client);
    }

    /**
     * @inheritdoc
     *
     * @protected
     * @param {string} config
     * @returns {object}
     * @memberof ConfigManager
     */
    protected async load(config: string): Promise<IndexStructure> {
        let temp = {};

        let appRoot = resolve(rootPath, 'out', 'app');
        let bdoDefault = resolve(appRoot, 'config', `${config}.ini`);
        let bdoEnv = resolve(appRoot, 'config', process.env.NODE_ENV || '', `${config}.ini`);
        let serverDefault = resolve(appRoot, 'server', 'config', `${config}.ini`);
        let serverEnv = resolve(appRoot, 'server', 'config', process.env.NODE_ENV || '', `${config}.ini`);

        let configs = await Promise.all([
            this.getFile(bdoDefault),
            this.getFile(bdoEnv),
            this.getFile(serverDefault),
            this.getFile(serverEnv)
        ]);

        for (const config of configs) {
            let parsedConf = parse(config);
            this.correctDataTypes(parsedConf);
            merge(temp, parsedConf);
        }
        return Promise.resolve(temp);
    }

    /**
     * Converts parsed values to its real datatype because the module ini is
     * too stupid for arrays and numbers.
     *
     * @param {IndexStructure} obj
     * @memberof ConfigManager
     */
    correctDataTypes(obj: IndexStructure): void {
        for (const k in obj) {
            if (typeof obj[k] === 'object' && obj[k] !== null) {
                this.correctDataTypes(obj[k]);
            } else if (typeof obj[k] === 'string') {
                if (!isNaN(obj[k])) {
                    if (obj[k].toString().indexOf('.') !== -1) {
                        // This is a float
                        obj[k] = parseFloat(obj[k]);
                    } else {
                        // This is an int
                        obj[k] = parseInt(obj[k], 10);
                    }
                } else if (obj[k].toString().startsWith('[') && obj[k].toString().endsWith(']')) {
                    // This is an array
                    obj[k] = JSON.parse(obj[k]);
                }
            }
        }
    }

    /**
     * Promisfies the readFile api of fs
     *
     * @private
     * @param {string} path the path to the file to read
     * @returns {Promise<string>} read data
     * @memberof ConfigManager
     */
    private getFile(path: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            access(path, constants.F_OK, (error) => {
                if (error) {
                    return resolve('');
                }
                readFile(path, 'utf-8', (error, data) => {
                    if (error) return reject(error);
                    resolve(data);
                });
            });
        });
    }

    /**
     * @inheritdoc The old value will be overwritten
     *
     * @param {string} _config
     * @returns {object}
     * @memberof ConfigManager
     */
    public set(_config: string): object {
        throw new Error('Method not implemented.');
    }

    /**
     * @inheritdoc
     *
     * @protected
     * @param {string} config
     * @returns {(Promise<IndexStructure | null>)}
     * @memberof ConfigManager
     */
    protected async getCache(config: string): Promise<IndexStructure | null> {
        let fromLocalCache = this.cache.get(config);
        if (fromLocalCache) {
            return Promise.resolve(fromLocalCache);
        }
        let client = await this.getRedis();
        let conf = await client.get(`${clientName}:${config}`);
        if (conf !== null) this.cache.set(config, conf);
        return Promise.resolve(conf);
    }

    /**
     * @inheritdoc
     *
     * @protected
     * @param {string} config
     * @returns {boolean}
     * @memberof ConfigManager
     */
    protected async setCache(config: string, value: IndexStructure): Promise<boolean> {
        this.cache.set(config, value, 60 * 10);
        let client = await this.getRedis();
        client.update(`${clientName}:${config}`, value);
        return Promise.resolve(true);
    }
}
