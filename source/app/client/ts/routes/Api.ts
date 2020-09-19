import { ClientRoute } from '~client/lib/ClientRoute';
import { BDOApiFactory } from '~bdo/routes/BDOApi';
import { Logger } from "~client/lib/Logger";

import type { Request } from "express";

const logger = new Logger();

/**
 * @inheritdoc
 *
 * @extends ReturnType<BDOApiFactory<ClientRoute>>
 */
export default class Api extends BDOApiFactory(ClientRoute) {

    protected async templateParams(request: Request) {
        logger.log(request);
        return {};
    }
}
