import { Request, Response, NextFunction, Router } from 'express';
import { Template } from 'nunjucks';
import { isString, isObject } from '~bdo/utils/util';
import { templateEnvironment } from '~bdo/utils/environment';

/**
 * Provides basic functionality for ALL routes on server and client and
 * especially provides a template for client and server route.
 *
 * @export
 * @class BDORoute
 */
export abstract class BDORoute {

    /**
     * Defines which servers have to use this route.
     * "*" means that all servers should use this route.
     * If only a specific number of server should use this route, define their
     * names in the array.
     *
     * @static
     * @type {string[]}
     * @memberof BaseRoute
     */
    public static attachToServers: string[] = ['*'];

    /**
     * Namespace for the express router as entry point
     *
     * @public
     * @type {string}
     * @memberof BaseRoute
     */
    public routerNameSpace: string = `/${this.constructor.name.toLowerCase()}`;

    /**
     * Defines sub routes on which the routerNameSpace is reachable
     *
     * @type {string[]}
     * @memberof BDORoute
     */
    public routes: string[] = ['/'];

    /**
     * The routes combined with the routerNameSpace and the corresponding route function
     *
     * @abstract
     * @memberof BDORoute
     */
    public abstract get router(): IndexStructure<(params: IndexStructure) => void> | Router;

    /**
     * The name of the template file in views or a string which is already template.
     * If this is null, the pure JSON from templateParams will be sent to the client.
     *
     * @protected
     * @type {string}
     * @memberof BaseRoute
     */
    protected templateString: string | Template = '<div></div>';

    /**
     * If true there will no template be rendered and only the template params
     * will be returned.
     *
     * @protected
     * @type {boolean}
     * @memberof BDORoute
     */
    protected jsonOnly: boolean = false;

    /**
     * Renders the template depending on its format (Template or string) and
     * passes the templateParams to it.
     *
     * @protected
     * @param {IndexStructure} templateParams
     * @returns {(Promise<string | null>)}
     * @memberof BDORoute
     */
    protected renderTemplate(templateParams: IndexStructure): string | null {
        let stringToParse = null;
        if (isString(this.templateString)) {
            stringToParse = templateEnvironment.renderString(this.templateString, templateParams);
        }
        if (isObject(this.templateString)) {
            stringToParse = (<Template>this.templateString).render(templateParams);
        }
        return stringToParse;
    }

    /**
     * Returns an object which keys matches the interpolations of the template.
     *
     * @protected
     * @abstract
     * @param {(Request | IndexStructure)} [_requestOrParams]
     * @returns {Promise<IndexStructure>}
     * @memberof BDORoute
     */
    protected async templateParams(_requestOrParams: Request | IndexStructure): Promise<IndexStructure> {
        return {};
    }

    /**
     * Handles the get requests with access checking, template params and response type determination
     *
     * @protected
     * @abstract
     * @param {Request} request
     * @param {Response} response
     * @param {NextFunction} next
     * @returns {Promise<void>}
     * @memberof BDORoute
     */
    protected abstract handleGet(
        requestOrParams: Request | IndexStructure,
        response: Response,
        next: NextFunction
    ): Promise<void>;
}
