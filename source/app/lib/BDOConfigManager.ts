// @ts-ignore
import ms = require('ms');
import { BDOMapCache } from '~bdo/lib/BDOMapCache';
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
     * stored in the redis or localStorage if available.
     *
     * @protected
     * @type {object}
     * @memberof BDOConfigManager
     */
    protected cache: BDOMapCache<string, any> = new BDOMapCache();

    /**
     * Gets the configuration from cache or calls load to load missing configurations
     *
     * @param {string} config The config, which is needed
     * @returns {object} The configuration variables
     * @memberof BDOConfigManager
     */
    public async get(config: string): Promise<IndexStructure> {
        let value = await this.getCache(config);
        if (!value) {
            value = await this.load(config);
            await this.setCache(config, value);
        }
        return Promise.resolve(value);
    }

    /**
     * Changes the config inside the cache not inside the permanent storage
     *
     * @param {string} config Config which should be set
     * @returns {object} The config which was set
     * @memberof BDOConfigManager
     */
    public abstract set(config: string): object;

    /**
     * Loads the config from the requested file on server side or on client side
     *
     * @param {string} config The config, which is needed
     * @returns {object} The configuration variables
     * @memberof BDOConfigManager
     */
    protected abstract load(config: string): Promise<IndexStructure>;

    /**
     * Loads the config directly from the cache inside this class if not
     * expired or from the store
     *
     * @protected
     * @abstract
     * @param {string} config configuration name to load
     * @returns {Promise<IndexStructure | null>}
     * @memberof BDOConfigManager
     */
    protected getCache(config: string): IndexStructure | null {
        const fromLocalCache = this.cache.get(config);
        if (fromLocalCache) {
            return fromLocalCache;
        }
        return null;
    }

    /**
     * Writes the config into the cache which can be the variable inside this
     * class or a redis store or a localStore.
     *
     * @param {string} config The name of the config which should be stored
     * @param {any} value The value of the config which should be stored
     * @returns {boolean} true on success, false else
     * @memberof BDOConfigManager
     */
    protected async setCache(config: string, value: any): Promise<void> {
        let conf = this.cache.get('__ConfigManagerCacheTimeout__');
        if (!this.cache.has('__ConfigManagerCacheTimeout__')) {
            conf = (await this.load('config')).timeouts.configCache;
            if (conf) conf = ms(conf);
            this.cache.set('__ConfigManagerCacheTimeout__', conf);
        }
        this.cache.set(config, value, conf);
    }
}
