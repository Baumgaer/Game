import { BDOConfigManager } from '~bdo/lib/BDOConfigManager';
import { readFile, access, constants } from 'graceful-fs';
import { path as rootPath } from 'app-root-path';
import { resolve } from 'path';
import { parse } from 'ini';
import { merge } from 'lodash';
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
     * Redirects the config manager to client environment and loads the
     * corresponding config file.
     *
     * @param {string} config
     * @returns
     * @memberof ConfigManager
     */
    public getForClient(config: string) {
        config = config.replace(/\/{0,1}\.\.\/{0,1}/g, "");
        return this.get(`client/${config}`);
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
     * @returns {object}
     * @memberof ConfigManager
     */
    protected async load(config: string): Promise<IndexStructure> {
        const temp = {};

        let environment = 'server';
        if (config.includes("/")) [environment, config] = config.split("/");

        const appRoot = resolve(rootPath, 'out', 'app');
        const bdoDefault = resolve(appRoot, 'config', `${config}.ini`);
        const bdoEnv = resolve(appRoot, 'config', process.env.NODE_ENV || '', `${config}.ini`);
        const serverDefault = resolve(appRoot, environment, 'config', `${config}.ini`);
        const serverEnv = resolve(appRoot, environment, 'config', process.env.NODE_ENV || '', `${config}.ini`);

        const configs = await Promise.all([
            this.getFile(bdoDefault),
            this.getFile(bdoEnv),
            this.getFile(serverDefault),
            this.getFile(serverEnv)
        ]);

        for (const configString of configs) {
            const parsedConf = parse(configString);
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
    private correctDataTypes(obj: IndexStructure): void {
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
        return new Promise<string>((resolver, reject) => {
            access(path, constants.F_OK, (accessError) => {
                if (accessError) return resolver('');
                readFile(path, 'utf-8', (readError, data) => {
                    if (readError) return reject(readError);
                    resolver(data);
                });
            });
        });
    }
}
