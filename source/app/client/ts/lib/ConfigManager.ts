import { BDOConfigManager } from '~bdo/lib/BDOConfigManager';

/**
 * Adds the possibility to load a config from server, set a config as
 * administrator or refresh the config cache.
 *
 * @see BDOConfigManager for more information
 * @extends BDOConfigManager
 */
export class ConfigManager extends BDOConfigManager {

    /**
     * @inheritdoc
     *
     * @protected
     * @param _config The name of the config file
     * @memberof ConfigManager
     */
    protected load(_config: string): Promise<any> {
        throw new Error('Method not implemented.');
    }

    /**
     * @inheritdoc
     *
     * @protected
     * @param _config The name of the config
     * @memberof ConfigManager
     */
    protected getCache(_config: string): Promise<any> {
        throw new Error('Method not implemented.');
    }

    /**
     * @inheritdoc
     *
     * @protected
     * @param _config The name of the config to set
     * @param _value The value of the config to set
     * @memberof ConfigManager
     */
    protected setCache(_config: string, _value: any): Promise<void> {
        throw new Error('Method not implemented.');
    }
}
