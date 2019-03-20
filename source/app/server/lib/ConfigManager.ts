import { BDOConfigManager, IConfigManager } from './../../lib/BDOConfigManager';

/**
 * Manages the configuration on server side. See BDOConfigManager for mode
 * information
 *
 * @export
 * @class ConfigManager
 * @extends {BDOConfigManager}
 * @implements {IConfigManager<ConfigManager>}
 */
export class ConfigManager extends BDOConfigManager implements IConfigManager<ConfigManager> {
    /**
     * @inheritdoc
     */
    private static instance?: ConfigManager;

    /**
     * @inheritdoc
     */
    getInstance(): ConfigManager {
        if (!ConfigManager.instance) {
            ConfigManager.instance = new ConfigManager();
        }
        return ConfigManager.instance;
    }

    private constructor() {
        super();
    }

    /**
     * @inheritdoc
     */
    load(_config: string): object {
        throw new Error('Method not implemented.');
    }

    /**
     * @inheritdoc
     */
    get(_config: string): object {
        throw new Error('Method not implemented.');
    }

    /**
     * @inheritdoc
     */
    set(_config: string): object {
        throw new Error('Method not implemented.');
    }

    /**
     * @inheritdoc
     */
    doCache(_config: string): boolean {
        throw new Error('Method not implemented.');
    }
}
