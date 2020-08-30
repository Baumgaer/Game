import { BDORoute } from '~bdo/lib/BDORoute';
import { merge, toURIPathPart } from '~bdo/utils/util';
import { Logger } from '~client/lib/Logger';
import NightHawk from "nighthawk";

import type { Request } from "express";

const logger = new Logger();

/**
 * provides basic functionality for routes on client side and adds a special
 * header which will be sent to the server to avoid server side rendering.
 *
 * @abstract
 * @class BaseRoute
 * @extends BDORoute
 */
export class ClientRoute extends BDORoute {

    /**
     * This is for better identification of client routes and instance check
     *
     * @type {boolean}
     * @memberof ClientRoute
     */
    public readonly isClientRoute: boolean = true;

    /**
     * @inheritdoc
     *
     * @readonly
     * @memberof ClientRoute
     */
    public get router() {
        const router = NightHawk();
        for (let route of this.routes) {
            route = toURIPathPart(route);
            router.get(route, this.handleGet.bind(this));
            // router.post(route, this.handlePost.bind(this));
            // router.put(route, this.handlePut.bind(this));
            // router.delete(route, this.handleDelete.bind(this));
            // router.patch(route, this.handlePatch.bind(this));
        }
        return router;
    }

    /**
     * @inheritdoc
     *
     * @protected
     * @abstract
     * @param params a response from the http server
     * @returns the processed template parameters
     * @memberof ClientRoute
     */
    protected async templateParams(params: Request): Promise<IndexStructure> {
        return super.templateParams(params);
    }

    /**
     * @inheritdoc
     *
     * @protected
     * @returns {Promise<void>}
     * @memberof ClientRoute
     */
    protected async handleGet(params: Request): Promise<void> {
        logger.log(merge(await this.templateParamsFromServer(), await this.templateParams(params)));
    }

    /**
     * Collects template params from server via a request which may will
     * be overwritten by local template params.
     *
     * @private
     * @returns The response parameters of the server
     * @memberof ClientRoute
     */
    private async templateParamsFromServer(): Promise<IndexStructure> {
        let urlToAskFor = location.pathname;
        if (!urlToAskFor) urlToAskFor = `/`;
        const headers = new Headers({ 'X-Game-As-JSON': 'true' });
        return (await fetch(urlToAskFor, { headers })).json();
    }
}
