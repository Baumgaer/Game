import { ServerRoute } from '~server/lib/ServerRoute';
import { BDOConfigFactory } from '~bdo/routes/BDOConfig';
import { ConfigManager } from '~server/lib/ConfigManager';
import { Request } from 'express';

const configManager = ConfigManager.getInstance();
/**
 * Collects the requested configuration for the client
 *
 * @class Config
 * @extends ReturnType<BDOConfigFactory<ServerRoute>>
 */
export default class Config extends BDOConfigFactory(ServerRoute) {

    /**
     * @inheritdoc
     *
     * @protected
     * @param request The request given by the http server
     * @returns The configuration of the requested config for the client
     * @memberof Config
     */
    protected async templateParams(request: Request): Promise<IndexStructure> {
        return configManager.getForClient(request.params.name);
    }
}
