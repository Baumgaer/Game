import { getDesignType } from "~bdo/utils/metadata";
import { isBrowser } from '~bdo/utils/environment';
import { isBaseConstructor, BaseConstructor } from "~bdo/utils/framework";
import onChange from "on-change";
import { isNull, isUndefined, isArray } from "lodash";

export {
    merge,
    omit,
    isFunction,
    isObject,
    pick,
    pickBy,
    isUndefined,
    isNull,
    intersection,
    union,
    isPlainObject,
    isEqual,
    isString,
    isNumber,
    isArray,
    difference,
    debounce,
    cloneDeep
} from "lodash";

export type PrimitiveConstructor = StringConstructor | NumberConstructor | BooleanConstructor | SymbolConstructor;

/**
 * Capitalizes only the first letter of a string
 *
 * @param {string} str string to capitalize the first letter
 * @returns The capitalized string
 */
export function ucFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts a camelCase string to kebab-case
 *
 * @param {string} str String to convert
 * @returns The kebab case string
 */
export function camelCase2kebabCase(str: string): string {
    str = str.charAt(0).toLowerCase() + str.slice(1);
    return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Converts a PascalCase string to kebab-case
 *
 * @param {string} str String to convert
 * @returns The kebab case string
 */
export function pascalCase2kebabCase(str: string): string {
    str = ucFirst(str);
    return camelCase2kebabCase(str);
}

/**
 * Removes element from array
 *
 * @param array Array to remove element from
 * @param element any element includes in array
 */
export function removeElementFromArray(array: any[], element: unknown): void {
    const index = array.indexOf(element);
    if (index >= 0) array.splice(index, 1);
}

/**
 * Iterates an object's prototypes recursive and collects the names
 *
 * @param object The object where the prototype names should get from recursively
 * @returns The prototype names
 */
export function getPrototypeNamesRecursive(object: Record<string, any>): string[] {

    const prototypes: string[] = [];

    /**
     * Does the recursion
     *
     * @param theObject The recursive needed object
     */
    function getThem(theObject: typeof object): void {
        const prototype = Object.getPrototypeOf(theObject);
        if (prototype) {
            prototypes.push(prototype.constructor.name);
            getThem(prototype);
        }
    }

    getThem(object);
    return prototypes;
}

/**
 * Checks if a member of list is included in search string/array respecting the
 * extension of the list member.
 *
 * @example
 *
 * ```javascript
 * includesMemberOfList(["foo", "bar", "baz"], ["foo", "baz"])
 * // This checks if foo or baz is included in `["foo", "bar", "baz"]`
 * ```
 *
 * @param search The string in which should be searched for
 * @param list The strings which are maybe in the search
 * @param extension extends every member of the list
 * @returns true is a member is included and false else
 */
export function includesMemberOfList(search: string | string[], list: string[], extension = ''): boolean {
    for (const member of list) {
        if (search.includes(`${member}${extension}`)) {
            return true;
        }
    }
    return false;
}

/**
 * Constructs the type of an attribute of a HTMLElement depending on an EXISTING
 * attribute and a given Type in the component.
 *
 * @param element The element to get the attribute key from
 * @param key The key which should be reconstructed to its real type
 * @returns The value in its real type
 */
export function constructTypeOfHTMLAttribute(element: HTMLElement, key: string): any {
    if (!isBrowser()) return;
    const type = getDesignType(element, key);
    const attrValue = element.getAttribute(key);

    let valueToSet: any = attrValue;
    if (attrValue && type && type.name !== undefined) {
        if (["Number", "Boolean", "Object", "Array"].includes(type.name)) {
            valueToSet = JSON.parse(attrValue.replace(/'/g, '"'));
        }
        if (isBaseConstructor(type)) {
            const correctedAttrValue = attrValue.replace(/'/g, '"');
            const obj: BaseConstructor = JSON.parse(correctedAttrValue);
            if (!obj.className) throw new Error("ClassName is missing in component attribute value");
            valueToSet = new type(obj);
        }
    }
    if (valueToSet && type && valueToSet.constructor.name !== type.name) throw new Error("attribute type equals not defined type");
    return valueToSet;
}

/**
 * Checks if the value is a wrapper version of a primitive
 *
 * @param value The value to check for primitive wrapper
 * @returns true if it is a primitive wrapper and false else
 */
export function isPrimitiveWrapper(value: any): value is PrimitiveConstructor {
    if (!isValue(value)) return false;
    return [String, Number, Boolean, Symbol].includes(value);
}

/**
 * Checks if the given value is an array of primitive wrappers
 *
 * @param value The value to check
 * @returns true if every item in array is a primitive wrapper and false else
 */
export function isPrimitiveWrapperArray(value: unknown): value is PrimitiveConstructor[] {
    if (!isArray(value)) return false;
    return value.every(isPrimitiveWrapper);
}

/**
 * Checks if a value is a primitive type or not
 *
 * @param value The value to check for primitive type appearance
 * @returns true if is a primitive and false else
 */
export function isPrimitive(value: unknown): value is string | number | boolean | symbol | null | undefined {
    return (value !== Object(value));
}

/**
 * Determines whether a value is a Proxy or not
 *
 * @param value The thing to check if it is a proxy or not
 * @returns true if it is a Proxy and false else
 */
export function isProxy(value?: Record<string, any>): value is ProxyConstructor {
    if (!isValue(value)) return false;
    if (onChange.target(value) === value) return false;
    return true;
}

/**
 * Checks if it is possible to get a target of a proxy and returns it.
 * If it is not possible it returns just the value.
 *
 * @param value A maybe proxyfied value
 * @returns The unproxyfie value of the may be proxyfied value
 */
export function getProxyTarget(value?: Record<string, any>): any {
    if (isProxy(value)) return onChange.target(value);
    return value;
}

/**
 * Removes multiple slashes from a path part and converts the result to a
 * correct part starting with a "/" and ending with not a "/".
 *
 * @param value The "path" of an URL
 * @returns The corrected path of an "URL"
 */
export function toURIPathPart(value: string): string {
    value = value.replace(/\/+/g, "/");
    if (!value.startsWith("/")) value = `/${value}`;
    if (value.endsWith("/") && value.length > 1) {
        value = value.slice(0, -1);
    }
    return value;
}

/**
 * Checks if an array has at least one entry
 *
 * @template T
 * @param arr The array to check if it is not empty
 * @returns true if it is not empty and false else
 */
export function isNonEmptyArray<T>(arr: T[]): arr is NonEmptyArray<T> {
    return arr.length > 0;
}

/**
 * Checks if a given value is not null and not undefined
 *
 * @template T
 * @param value the value to check if it is a real value
 * @returns true if value has another value than undefined or null and false else
 */
export function isValue<T>(value: T | null | undefined): value is T {
    return !isUndefined(value) && !isNull(value);
}
