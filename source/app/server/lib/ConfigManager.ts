import { BDOConfigManager } from '~bdo/lib/BDOConfigManager';
import { readFile, access, constants } from 'graceful-fs';
import { path as rootPath } from 'app-root-path';
import { resolve } from 'path';
import { parse } from 'yaml';
import { merge } from '~bdo/utils/util';

import type { IConfig } from "~bdo/interfaces/Config";

/**
 * Manages the configuration on server side. See BDOConfigManager for mode
 * information
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
     * @param config the name of the config file which should be loaded
     * @returns The configuration as a plain JSObject (key value)
     * @memberof ConfigManager
     */
    public getForClient<T extends keyof IConfig["client"]>(config: T): Promise<IConfig["client"][T]> {
        return super.get(`client/${config.replace(/\/{0,1}\.\.\/{0,1}/g, "")}`); // with path-traversal-security
    }

    public get<T extends keyof IConfig["server"]>(config: T): Promise<IConfig["server"][T]> {
        return super.get(config);
    }

    /**
     * @inheritdoc
     *
     * @protected
     * @param config the name of the config file which should be loaded
     * @returns A plain object with key => value of the given config. This can be an empty object!
     * @memberof ConfigManager
     */
    protected async load(config: string): Promise<IndexStructure> {
        const temp = {};

        let environment = 'server';
        if (config.includes("/")) [environment, config] = config.split("/");

        const appRoot = resolve(rootPath, 'out', 'app');
        const bdoDefault = resolve(appRoot, 'config', `${config}.yaml`);
        const bdoEnv = resolve(appRoot, 'config', process.env.NODE_ENV || '', `${config}.yaml`);
        const serverDefault = resolve(appRoot, environment, 'config', `${config}.yaml`);
        const serverEnv = resolve(appRoot, environment, 'config', process.env.NODE_ENV || '', `${config}.yaml`);

        const configs = await Promise.all([
            this.getFile(bdoDefault),
            this.getFile(bdoEnv),
            this.getFile(serverDefault),
            this.getFile(serverEnv)
        ]);

        for (const configString of configs) {
            const parsedConf = parse(configString);
            merge(temp, parsedConf);
        }
        return Promise.resolve(temp);
    }

    /**
     * Promisfies the readFile api of fs
     *
     * @private
     * @param path the path to the file to read
     * @returns read data
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
