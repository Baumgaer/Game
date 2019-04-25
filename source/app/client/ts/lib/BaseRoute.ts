import { BDORoute } from '~bdo/lib/BDORoute';
/**
 * Test
 *
 * @export
 * @template TBase
 * @param {TBase} RouteType
 * @returns
 */
export function BaseRouteFactory<TBase extends AbstractConstructor<BDORoute>>(RouteType: TBase) {

    /**
     * Test
     *
     * @abstract
     * @class BaseRoute
     * @extends {RouteType}
     */
    abstract class BaseRoute extends (RouteType as unknown as Constructor<BDORoute>) {

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
         * @protected
         * @returns {Promise<IndexStructure>}
         * @memberof BaseRoute
         */
        protected async templateParams(): Promise<IndexStructure> {
            return {};
        }

        /**
         * @inheritdoc
         *
         * @protected
         * @returns {Promise<void>}
         * @memberof BaseRoute
         */
        protected async handleGet(): Promise<void> { }
    }

    return BaseRoute;
}
