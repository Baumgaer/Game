import type { BaseControllerFactory } from "~client/lib/BaseController";

type BaseController = InstanceType<ReturnType<typeof BaseControllerFactory>>;

/**
 * Manages controllers and their ids to be equal in whole DOM and to ensure
 * that every local storage key is unique.
 *
 * @class ControllerRegistry
 * @export
 */
export class ControllerRegistry {

    /**
     * The singleton instance of this registry
     *
     * @private
     * @static
     * @type {(ControllerRegistry | null)}
     * @memberof ControllerRegistry
     */
    private static instance: ControllerRegistry | null = null;

    /**
     * Contains all controllers with a specific className in an array
     *
     * @private
     * @memberof ControllerRegistry
     */
    private controllerAsNames = new Map<string, BaseController[]>();

    /**
     * Contains all controllers with their unique id as key
     *
     * @private
     * @memberof ControllerRegistry
     */
    private controllerAsId = new Map<string, BaseController>();

    /**
     * Creates the singleton instance of this registry
     *
     * @static
     * @returns
     * @memberof ControllerRegistry
     */
    public static getInstance() {
        if (!this.instance) this.instance = new ControllerRegistry();
        return this.instance;
    }

    private constructor() { }

    /**
     * Adds a controller with its className to the asNames field and if an
     * id is available to the asId field.
     *
     * @param {BaseController} controller
     * @returns {void}
     * @memberof ControllerRegistry
     */
    public add(controller: BaseController) {
        const controllers = this.getByClassName(controller.className);
        controllers.push(controller);
        this.controllerAsNames.set(controller.className, controllers);
        if (controller.id) this.setId(controller.id, controller);
    }

    /**
     * Removes a controller from the registry
     *
     * @param {BaseController} controller
     * @returns {void}
     * @memberof ControllerRegistry
     */
    public remove(controller: BaseController) {
        const controllers = this.getByClassName(controller.className);
        controllers.splice(controllers.indexOf(controller), 1);
    }

    /**
     * Returns an array of all controllers with a specific name
     *
     * @param {string} name
     * @returns {baseController[]}
     * @memberof ControllerRegistry
     */
    public getByClassName(name: string) {
        return this.controllerAsNames.get(name) || [];
    }

    /**
     * returns the corresponding controller if exists and undefined else
     *
     * @param {string} id
     * @returns {BaseController | undefined}
     * @memberof ControllerRegistry
     */
    public getById(id: string) {
        return this.controllerAsId.get(id);
    }

    /**
     * Exactly the same functionality as Array.indexOf()
     *
     * @param {BaseController} controller
     * @returns {number}
     * @memberof ControllerRegistry
     */
    public indexOf(controller: BaseController) {
        return this.getByClassName(controller.className).indexOf(controller);
    }

    /**
     * Adds a controller to the asId field if not already contained in there
     *
     * @param {string} id
     * @param {BaseController} controller
     * @returns {void}
     * @memberof ControllerRegistry
     */
    public setId(id: string, controller: BaseController) {
        if (this.controllerAsId.has(id)) throw new Error(`Controller with ID ${id} already exists`);
        this.controllerAsId.set(id, controller);
    }

    /**
     * Updates the controller with the old id when the new id is not already
     * in asId field.
     *
     * @param {string} oldId
     * @param {string} newId
     * @memberof ControllerRegistry
     */
    public updateId(oldId: string, newId: string) {
        const controller = this.controllerAsId.get(oldId);
        if (!controller) throw new Error(`No controller with id ${oldId} found`);
        this.controllerAsId.delete(oldId);
        this.setId(newId, controller);
    }
}
