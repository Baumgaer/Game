import { BaseComponentFactory } from '~client/lib/BaseComponent';
import { includesMemberOfList } from '~bdo/utils/environment';
import { watched } from '~bdo/utils/decorators';
import Navigo = require('navigo');
import { Logger } from '~client/lib/Logger';

const logger = new Logger();
logger.debug("");
/**
 * Test
 *
 * @export
 * @class GameView
 * @extends {BaseComponentFactory(HTMLElement)}
 */
export default class ViewRouter extends BaseComponentFactory(HTMLElement) {

    /**
     * @inheritdoc
     *
     * @type {string}
     * @memberof ViewRouter
     */
    @watched() public test: string = "Testen123";

    /**
     * Test
     *
     * @private
     * @memberof ViewRouter
     */
    private readonly router = new Navigo();

    constructor() {
        super();
    }

    /**
     * @inheritdoc
     *
     * @protected
     * @memberof GameView
     */
    protected connectedCallback() {
        super.connectedCallback();
        this.routeCollection();
        window.router = this.router;
    }

    /**
     * collects all available routes and initializes them
     *
     * @private
     * @memberof ViewRouter
     */
    private routeCollection() {
        for (const route of window.virtualRoutes) {
            const myRoute = require(`./../routes/${route}.ts`).default;
            this.singeRouteCollection(myRoute);
        }
    }

    /**
     * Initializes a single route based on its file
     *
     * @private
     * @param {*} Route
     * @returns
     * @memberof ViewRouter
     */
    private singeRouteCollection(Route: any) {
        try {
            if (!includesMemberOfList(<string[]>Route.attachToServers, [<string>global.process.env.name, '*'])) return;
            const RouteClass = new Route();
            if (!RouteClass.isClientRoute) {
                throw new Error(`${RouteClass.constructor.name} is not instance of ~client/lib/BaseRoute`);
            }
            this.router.on(RouteClass.router);
        } catch (error) {
            throw error;
        }
    }
}
customElements.define("view-router", ViewRouter);
