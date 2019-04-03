import { BDOConfigManager } from './../../../lib/BDOConfigManager';
/**
 * Test
 *
 * @export
 * @class ConfigManager
 */
export class ConfigManager extends BDOConfigManager {
    /**
     * @inheritdoc
     *
     * @protected
     * @param {string} config
     * @returns {Promise<any>}
     * @memberof ConfigManager
     */
    protected load(config: string): Promise<any> {
        throw new Error('Method not implemented.');
    }

    /**
     * @inheritdoc
     *
     * @param {string} config
     * @returns {object}
     * @memberof ConfigManager
     */
    public set(config: string): object {
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
    protected getCache(config: string): Promise<any> {
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
    protected setCache(config: string, value: any): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
}
