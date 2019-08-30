import { BDOConfigManager } from '~bdo/lib/BDOConfigManager';

/**
 * Adds the possibility to load a config from server, set a config as
 * administrator or refresh the config cache.
 *
 * @see BDOConfigManager for more information
 *
 * @export
 * @class ConfigManager
 * @extends {BDOConfigManager}
 */
export class ConfigManager extends BDOConfigManager {

    /**
     * @inheritdoc
     *
     * @param {string} config
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
     * @returns {Promise<any>}
     * @memberof ConfigManager
     */
    protected load(_config: string): Promise<any> {
        throw new Error('Method not implemented.');
    }

    /**
     * @inheritdoc
     *
     * @protected
     * @param {string} config
     * @returns {Promise<any>}
     * @memberof ConfigManager
     */
    protected getCache(_config: string): Promise<any> {
        throw new Error('Method not implemented.');
    }

    /**
     * @inheritdoc
     *
     * @protected
     * @param {string} config
     * @param {*} value
     * @returns {Promise<boolean>}
     * @memberof ConfigManager
     */
    protected setCache(_config: string, _value: any): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
