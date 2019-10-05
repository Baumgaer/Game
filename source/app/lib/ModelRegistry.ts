import { BDOModel } from "~bdo/lib/BDOModel";
import { isBaseConstructor } from "~bdo/utils/framework";

/**
 * Holds a Map of all instantiated models with <className><id> as key and the
 * model as value. It also provides the possibility to get a model by its ID or
 * several models by attribute names and the corresponding value.
 * This registry does not look into databases!
 *
 * @export
 * @class ModelRegistry
 */
export class ModelRegistry {

    /**
     * Holds the singleton instance of the registry
     *
     * @private
     * @static
     * @type {ModelRegistry}
     * @memberof ModelRegistry
     */
    private static instance: ModelRegistry;

    /**
     * The map of models by its class name and id
     *
     * @private
     * @type {Map<string, BDOModel>}
     * @memberof ModelRegistry
     */
    private models: Map<string, BDOModel> = new Map();

    /**
     * Provides the singleton instance
     *
     * @static
     * @returns
     * @memberof ModelRegistry
     */
    public static getInstance() {
        if (ModelRegistry.instance) ModelRegistry.instance = new ModelRegistry();
        return ModelRegistry.instance;
    }

    private constructor() { }

    /**
     * Adds a model to the registry
     *
     * @param {BDOModel} model
     * @memberof ModelRegistry
     */
    public register(model: BDOModel) {
        this.models.set(`${model.className}${model.id}`, model);
    }

    /**
     * Removes a model from the registry
     *
     * @param {string} id
     * @param {(Constructor<BDOModel> | BDOModel)} constructor
     * @memberof ModelRegistry
     */
    public unregister(model: BDOModel) {
        this.models.delete(`${model.className}${model.id}`);
    }

    /**
     * Returns a model by its id and class type
     *
     * @param {string} id
     * @param {(Constructor<BDOModel> | BDOModel)} constructor
     * @returns
     * @memberof ModelRegistry
     */
    public getModelById(id: string, constructor: Constructor<BDOModel> | BDOModel) {
        return this.models.get(`${this.getClassName(constructor)}${id}`);
    }

    /**
     * Returns a list of models where all the given attributes corresponds to
     * the models attributes and values.
     *
     * @param {IndexStructure<string, any>} attributes
     * @returns
     * @memberof ModelRegistry
     */
    public getModelsByAttributes(attributes: IndexStructure<string, any>) {
        const models: BDOModel[] = [];
        this.models.forEach((model) => {
            for (const key in attributes) {
                if (attributes.hasOwnProperty(key)) {
                    const element = attributes[key];
                    if (!(key in model) || element !== (<IndexStructure>model)[key]) {
                        return;
                    }
                }
            }
            models.push(model);
        });
        return models;
    }

    /**
     * Returns model(s) depending on the condition of func and mode.
     *
     * modes:
     *  - all: returns all found models in an array
     *  - first: returns the first found model
     *  - last: returns the last found model
     *
     * @param {(model: BDOModel) => boolean} func
     * @param {("first" | "all" | "last")} [mode="all"]
     * @returns
     * @memberof ModelRegistry
     */
    public getModelsByCondition(func: (model: BDOModel) => boolean, mode: "first" | "all" | "last" = "all") {
        const models: BDOModel[] = [];
        let lastModel: BDOModel | undefined;
        for (const model of this.models.values()) {
            if (func(model)) {
                if (mode === "first") return model;
                if (mode === "all") models.push(model);
                if (mode === "last") lastModel = model;
            }
        }
        return mode === "last" ? lastModel : models;
    }

    /**
     * Determines the class name of a model
     *
     * @private
     * @param {(Constructor<BDOModel> | BDOModel)} constructor
     * @returns
     * @memberof ModelRegistry
     */
    private getClassName(constructor: Constructor<BDOModel> | BDOModel) {
        let className: string;
        if (isBaseConstructor(constructor)) {
            className = constructor.className;
        } else if ("className" in constructor) {
            className = constructor.className;
        } else if (typeof constructor === "function") {
            className = constructor.name;
        } else className = (<any>constructor).constructor.name;
        return className;
    }
}
