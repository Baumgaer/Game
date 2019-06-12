
/**
 * Provides basic support for controller
 *
 * @export
 * @class BaseController
 */
export class BaseController {

    constructor() { }

    /**
     * 1. Called when all provided constructor parameters are assigned to
     * their corresponding properties / attributes.
     *
     * @protected
     * @memberof BaseController
     */
    protected constructedCallback() { }

    /**
     * 2. Called when a component is connected with the dom.
     *
     * @protected
     * @memberof BaseController
     */
    protected connectedCallback() { }

    /**
     * 3. Called when a component will be finally removed from the dom.
     * removes all controllers and event listeners.
     *
     * @protected
     * @memberof BaseController
     */
    protected disconnectedCallback() { }

    /**
     * 4. Called when the component is moved to another document.
     * Rebinds all controllers and event listeners.
     *
     * @protected
     * @memberof BaseController
     */
    protected adoptedCallback() { }
}
