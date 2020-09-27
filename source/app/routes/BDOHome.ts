import { BDORoute, minimumAccessRights } from '~bdo/lib/BDORoute';
import { Request, Response, NextFunction } from "express";

/**
 * constructs the base for the home route on server and client
 *
 * @template TBase
 * @param ctor The type to extend with
 * @returns The mixed in class BDOTest
 */
export function BDOHomeFactory<TBase extends Constructor<BDORoute>>(ctor: TBase) {

    /**
     * Provides basic functionality for the "home page" of the website
     *
     * @extends TBase
     */
    abstract class BDOHome extends ctor {

        /**
         * @inheritdoc
         *
         * @static
         * @memberof BDOHome
         */
        public static attachToServers: string[] = ["WebServer"];

        /**
         * @inheritdoc
         *
         * @memberof BDOHome
         */
        public routerNameSpace = '/';

        /**
         * @inheritdoc
         *
         * @protected
         * @memberof BDOHome
         */
        protected access: minimumAccessRights = "public";

        /**
         * @inheritdoc
         *
         * @protected
         * @returns Additional template params for server and client
         * @memberof BDOHome
         */
        protected async templateParams(request: Request, response: Response, next: NextFunction): Promise<IndexStructure> {
            const superParams = await super.templateParams(request, response, next);
            return Object.assign({
                title: 'endlich zu Hause =)'
            }, superParams);
        }
    }

    return BDOHome;
}
