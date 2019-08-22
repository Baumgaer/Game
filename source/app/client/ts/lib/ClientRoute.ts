import { BDORoute } from '~bdo/lib/BDORoute';
import { merge } from 'lodash';
import { Logger } from '~client/lib/Logger';

const logger = new Logger();

/**
 * Test
 *
 * @abstract
 * @class BaseRoute
 * @extends {RouteType}
 */
export class ClientRoute extends BDORoute {

    /**
     * This is for better identification of client routes and instance check
     *
     * @type {boolean}
     * @memberof BaseRoute
     */
    public readonly isClientRoute: boolean = true;

    /**
     * @inheritdoc
     *
     * @readonly
     * @memberof BaseRoute
     */
    public get router(): IndexStructure<string, (params: IndexStructure) => void> {
        const routes: any = {};
        for (const route of this.routes) {
            routes[`${this.routerNameSpace}/${route}`.replace("//", "/")] = this.handleGet.bind(this);
        }
        return routes;
    }

    /**
     * @inheritdoc
     *
     * @protected
     * @abstract
     * @param {IndexStructure} params
     * @returns {Promise<IndexStructure>}
     * @memberof BaseRoute
     */
    protected async templateParams(params: IndexStructure): Promise<IndexStructure> {
        return super.templateParams(params);
    }

    /**
     * @inheritdoc
     *
     * @protected
     * @returns {Promise<void>}
     * @memberof BaseRoute
     */
    protected async handleGet(params: IndexStructure): Promise<void> {
        logger.log(merge(await this.templateParamsFromServer(), await this.templateParams(params)));
    }

    /**
     * Collects template params from server via a request which may will
     * be overwritten by local template params.
     *
     * @private
     * @returns {Promise<IndexStructure>}
     * @memberof BaseRoute
     */
    private async templateParamsFromServer(): Promise<IndexStructure> {
        let urlToAskFor = location.pathname;
        if (!urlToAskFor) urlToAskFor = `/`;
        const headers = new Headers({ 'X-Game-As-JSON': 'true' });
        return (await fetch(urlToAskFor, { headers })).json();
    }
}
