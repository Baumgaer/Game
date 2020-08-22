import { NullableListOptions, ReturnTypeFunc } from "type-graphql/dist/decorators/types";
import { getDesignType } from "~bdo/utils/metadata";
import { isArray, isPrimitive, isObject, getProxyTarget } from "~bdo/utils/util";
import { isBDOModel } from "~bdo/utils/framework";
import { TypeError } from "~bdo/lib/Errors";
import { Modification } from '~bdo/lib/Modification';
import { typeCheck } from "type-check";
import onChange from "on-change";


export interface IFieldParams {

    /**
     * Disables the type guard on runtime. The TypeGuard of the API stays active!
     *
     * @memberof IFieldParams
     */
    disableTypeGuard?: boolean;

    /**
     * Decides wether to be able to set values null or undefined on a property.
     * It is also used to generate a graphQL schema when used in an attribute.
     *
     * @default false
     * @memberof IFieldParams
     */
    nullable?: boolean | NullableListOptions;
}

/**
 * This is the most general class of Distributor, Watched, Property and Attribute.
 * It should not be possible to initialize this class because it would ne necessary
 * to import the derived classes which fill cause an import loop.
 * So this class only contains the most general type guard and properties.
 *
 * @implements {IFieldParams}
 * @template T
 * @template K
 */
export abstract class Field<T extends Record<string, any> = any, K extends DefNonFuncPropNames<T> = any> implements IFieldParams {

    /**
     * A reference to the object where this property/attribute is defined on.
     * In case of "this" is an original field and not an attribute or property,
     * this.object will be a model.
     *
     * @memberof Field
     */
    public object: T;

    /**
     * the name of the property/attribute of this.object
     *
     * @memberof Field
     */
    public property: K;

    /**
     * @inheritdoc
     *
     * @memberof Field
     */
    public disableTypeGuard?: boolean;

    /**
     * @inheritdoc
     *
     * @memberof Field
     */
    public nullable?: boolean | NullableListOptions;

    /**
     * A function which returns a more specific type than the design:type from
     * typescript.
     * With this you can define tuples or infer types inside an array or objects
     * which are not a model.
     *
     * @memberof Field
     */
    public typeFunc?: ReturnTypeFunc;

    /**
     * The value of the property / attribute.
     * If "this" is a property / attribute, this will probably manipulated by a field.
     * If "this" is an original field, this will be the global value of this.object[this.property].
     * If "this" is a watched field, this will hold the value if there is no sub object.
     *
     * @memberof Field
     */
    protected value?: T[K];

    constructor(object: T, property: K) {
        this.object = object;
        this.property = property;
    }

    /**
     * Follows the convention of the valueOf() method of most native objects.
     * This method will be called by some other objects and will get a managed
     * value depending on the parameters which are passed into the decorator.
     *
     * @returns The current value of the field
     * @memberof Field
     */
    public valueOf() {
        return this.value;
    }

    /**
     * Sets the value depending on the parameters which are passed into the
     * decorator and stops early if the value is not changed.
     *
     * @param value The value to set to the field
     * @memberof Field
     */
    public setValue(value: T[K]) {
        this.value = value;
    }

    /**
     * Checks if the given type is the required type and generates an error if not.
     * returns undefined if everything is OK and an error else.
     *
     * @param value The value which should be checked for types
     * @returns undefined if no error occurred and an error else
     * @memberof Field
     */
    public typeGuard(value?: T[K] | Modification<any>) {
        if (this.disableTypeGuard) return;
        let valueToPass = value;
        if (value instanceof Modification) valueToPass = value.valueOf();

        const typeFuncResult = this.typeFunc && this.typeFunc();
        const designType = getDesignType(this.object, this.property.toString());
        const typeError = new TypeError(`${valueToPass} is not type of ${designType.className || designType.name}`);

        let error;

        if (!this.nullable && (valueToPass === undefined || valueToPass === null)) error = typeError;

        if (!error) {
            if (isPrimitive(valueToPass)) {
                if (typeof valueToPass !== designType.name.toLowerCase()) {
                    if (!this.nullable || !(valueToPass === undefined || valueToPass === null)) error = typeError;
                }
            } else if (!(valueToPass instanceof designType)) {
                error = typeError;
            } else {
                if (isArray(typeFuncResult)) {
                    let checkString = `[${(<IndexStructure>typeFuncResult[0]).name} | Undefined]`;
                    if (typeFuncResult.length === 1 && !typeCheck(checkString, valueToPass)) error = new TypeError(`${valueToPass} is not assignable to type ${checkString}`);
                    checkString = `(${typeFuncResult.map((type) => (<IndexStructure>type).name).join(",")})`;
                    if (typeFuncResult.length > 1 && !typeCheck(checkString, valueToPass)) error = new TypeError(`${valueToPass} is not assignable to type ${checkString}`);
                }
            }
        }
        return error;
    }

    /**
     * Handles the behavior of the proxy if value is an Object
     *
     * @param _path The path where thy proxy action was triggered on
     * @param _changedVal The value which was assigned or unassigned
     * @param _prevVal The old value
     * @param _name The name of the operation which triggered the handler and undefined if it was an assignment
     * @memberof Watched
     */
    public proxyHandler(_path: string, _changedVal: T[K], _prevVal: T[K], _name?: string) {
        throw new Error("proxy handler not implemented");
    }

    /**
     * Constructs a proxy object around arrays and objects to get information
     * about changes inside of the watched objects.
     *
     * @param value The value which should be converted into a proxy
     * @returns The proxy version of the value
     * @memberof Watched
     */
    protected proxyfyValue(value?: any) {
        if (!isArray(value) && !isObject(value) || isBDOModel(value)) return value;
        return onChange(getProxyTarget(value), (path, changedValue, previousValue, name) => {
            this.proxyHandler(path, <T[K]>changedValue, <T[K]>previousValue, name);
        }, { isShallow: true, ignoreSymbols: true });
    }
}
