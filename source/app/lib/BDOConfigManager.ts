/**
 * Manages the configuration on client and server side.
 * The order of getting the configuration is the following:
 *
 * 1. Get the default BDO configuration
 * 2. get the environment BDO configuration
 * 3. get the default client / server configuration
 * 4. get the environment client / server configuration
 *
 * In each step the previous configuration will be overwritten.
 * When the configuration is loaded, it will be stored in the corresponding cache.
 * If the file store is not available, the cache stays in memory which means in
 * the cache property.
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
    protected cache: Map<string, any> = new Map();

    /**
     * Loads the config from the requested file on server side or on client side
     *
     * @param {string} config The config, which is needed
     * @returns {object} The configuration variables
     * @memberof BDOConfigManager
     */
    protected abstract load(config: string): object;

    /**
     * Gets the configuration from cache or calls load to load missing configurations
     *
     * @param {string} config The config, which is needed
     * @returns {object} The configuration variables
     * @memberof BDOConfigManager
     */
    public abstract get(config: string): object;

    /**
     * Changes the config inside the cache not inside the permanent storage
     *
     * @param {string} config Config which should be set
     * @returns {object} The config which was set
     * @memberof BDOConfigManager
     */
    public abstract set(config: string): object;

    /**
     * Writes the config into the cache which can be the variable inside this
     * class or a redis store or a localStore.
     *
     * @param {string} config The name of the config which should be stored
     * @param {any} value The value of the config which should be stored
     * @returns {boolean} true on success, false else
     * @memberof BDOConfigManager
     */
    protected abstract doCache(config: string, value: any): Promise<boolean>;
}
