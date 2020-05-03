import { getDesignType } from "~bdo/utils/metadata";
import { isBrowser } from '~bdo/utils/environment';
import onChange from "on-change";

export {
    merge,
    omit,
    isFunction,
    isObject,
    pickBy,
    isUndefined,
    isEqual,
    isString,
    isNumber,
    isArray,
    difference,
    debounce
} from "lodash";

/**
 * Capitalizes only the first letter of a string
 *
 * @export
 * @param {string} str string to capitalize the first letter
 * @returns {string}
 */
export function ucFirst(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts a camelCase string to kebab-case
 *
 * @export
 * @param {string} str String to convert
 * @returns {string}
 */
export function camelCase2kebabCase(str: string): string {
    str = str.charAt(0).toLowerCase() + str.slice(1);
    return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}

/**
 * Converts a PascalCase string to kebab-case
 *
 * @export
 * @param {string} str String to convert
 * @returns {string}
 */
export function pascalCase2kebabCase(str: string): string {
    str = ucFirst(str);
    return camelCase2kebabCase(str);
}

/**
 * Removes element from array
 *
 * @export
 * @param {any[]} array Array to remove element from
 * @param {*} element any element includes in array
 */
export function removeElementFromArray(array: any[], element: any): void {
    const index = array.indexOf(element);
    if (index >= 0) array.splice(index, 1);
}

/**
 * Iterates an object's prototypes recursive and collects the names
 *
 * @export
 * @param {*} object
 * @returns {Array<string>}
 */
export function getPrototypeNamesRecursive(object: any, prototypes: string[] = []): string[] {
    const prototype = Object.getPrototypeOf(object);
    if (prototype) {
        prototypes.push(prototype.constructor.name);
        getPrototypeNamesRecursive(prototype, prototypes);
    }
    return prototypes;
}

/**
 * Checks if a member of list is includes in search string respecting the
 * extension of the list member.
 *
 * @export
 * @param {string} search
 * @param {Array<any>} list
 * @returns {boolean}
 */
export function includesMemberOfList(search: string | string[], list: string[], extension: string = ''): boolean {
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
 * @export
 * @param {HTMLElement} object
 * @param {string} key
 * @returns
 */
export function constructTypeOfHTMLAttribute(object: HTMLElement, key: string) {
    if (!isBrowser()) return;
    const type = getDesignType(object, key);
    const attrValue = object.getAttribute(key);

    // if (attrValue === null) throw new Error("No attribute set");

    let valueToSet: any = attrValue;
    if (attrValue && type && type.name !== undefined) {
        if (["Number", "Boolean", "Object", "Array"].includes(type.name)) {
            valueToSet = JSON.parse(attrValue.replace(/'/g, '"'));
        }
        if (type.name === "BaseConstructor") {
            const obj = JSON.parse(attrValue);
            const className = obj.className;
            if (!className) throw new Error("ClassName is missing in component attribute value");
            delete obj.className;
            valueToSet = new (type.name)(obj);
        }
    }
    if (valueToSet && type && valueToSet.constructor.name !== type.name) throw new Error("attribute type equals not defined type");
    return valueToSet;
}

/**
 * Checks if a value is a primitive type or not
 *
 * @export
 * @param {*} value
 * @returns
 */
export function isPrimitive(value: any): value is string | number | boolean | Symbol | null | undefined {
    return (value !== Object(value));
}

/**
 * Determines whether a value is a Proxy or not
 *
 * @export
 * @param {*} value
 * @returns
 */
export function isProxy(value: any): value is ProxyConstructor {
    if (value === undefined || value === null) return false;
    if (onChange.target(value) === value) return false;
    return true;
}

/**
 * Checks if it is possible to get a target of a proxy and returns it.
 * If it is not possible it returns just the value.
 *
 * @export
 * @param {*} value
 * @returns
 */
export function getProxyTarget(value: any) {
    if (isProxy(value)) return onChange.target(value);
    return value;
}

/**
 * Removes multiple slashes from a path part and converts the result to a
 * correct part starting with a "/" and ending with not a "/".
 *
 * @export
 * @param {string} value
 * @returns
 */
export function toURIPathPart(value: string) {
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
 * @export
 * @template T
 * @param {T[]} arr
 * @returns {arr is NonEmptyArray<T>}
 */
export function isNonEmptyArray<T>(arr: T[]): arr is NonEmptyArray<T> {
    return arr.length > 0;
}
