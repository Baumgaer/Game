import { BaseComponentFactory } from '~client/lib/BaseComponent';
import { includesMemberOfList } from '~bdo/utils/util';
import { baseConstructor } from '~bdo/utils/decorators';
import { property } from '~bdo/utils/decorators';
import Navigo from "navigo";

/**
 * Manages routing on client side, switches views and collects routes for client.
 *
 * @export
 * @class GameView
 * @extends {BaseComponentFactory(HTMLElement)}
 */
@baseConstructor()
export default class ViewRouter extends BaseComponentFactory(HTMLElement) {

    /**
     * Provides the possibility to react on anchor tag clicks, catch the default
     * behavior and starts routing.
     *
     * @private
     * @memberof ViewRouter
     */
    @property() private readonly router = new Navigo();

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
