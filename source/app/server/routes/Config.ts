import { BaseRoute } from '~server/lib/BaseRoute';
import { ConfigManager } from '~server/lib/ConfigManager';
import { Request } from 'express';

const configManager = ConfigManager.getInstance();
/**
 * Collects the requested configuration for the client
 *
 * @export
 * @class Config
 * @extends {BaseRoute}
 */
export default class Config extends BaseRoute {

    /**
     * @inheritdoc
     *
     * @memberof Config
     */
    public templateString = null;

    /**
     * @inheritdoc
     *
     * @type {string[]}
     * @memberof Config
     */
    public routes: string[] = ["/:name"];

    /**
     * @inheritdoc
     *
     * @protected
     * @param {Request} request
     * @returns {Promise<IndexStructure>}
     * @memberof Config
     */
    protected async templateParams(request: Request): Promise<IndexStructure> {
        return configManager.getForClient(request.params.name);
    }
}
