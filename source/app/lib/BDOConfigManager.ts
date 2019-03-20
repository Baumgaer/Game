import { IManager } from './IManager';
export interface IConfigManager<T> extends IManager<T> {
    /**
     * Loads the config from the requested file on server side or on client side
     *
     * @param {string} config The config, which is needed
     * @returns {object} The configuration variables
     * @memberof IConfigManager
     */
    load(config: string): object;

    /**
     * Gets the configuration from cache or calls load to load missing configurations
     *
     * @param {string} config The config, which is needed
     * @returns {object} The configuration variables
     * @memberof IConfigManager
     */
    get(config: string): object;

    /**
     * Changes the config inside the cache not inside the permanent storage
     *
     * @param {string} config Config which should be set
     * @returns {object} The config which was set
     * @memberof IConfigManager
     */
    set(config: string): object;

    /**
     * Writes the config into the cache which can be the variable inside this
     * class or a redis store or a localStore.
     *
     * @param {string} config Config, which should be stored
     * @returns {boolean} true on success, false else
     * @memberof IConfigManager
     */
    doCache(config: string): boolean;
}

/**
 * Manages the configuration on client and server side
 *
 * @export
 * @abstract
 * @class BDOConfigManager
 */
export abstract class BDOConfigManager {
    /**
     * If there is no redis or this is executed on client side, the config
     * will be stored here for a certain amount of time. Otherwise it will be
     * stored in the redis or localStorage if available or all operations are
     * done.
     *
     * @protected
     * @type {object}
     * @memberof BDOConfigManager
     */
    protected cache: object = {};
}
