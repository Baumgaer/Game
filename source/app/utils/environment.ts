/**
 * Checks if a script is running on server side or not
 *
 * @export
 * @returns {boolean}
 */
export function isNodeJS(): boolean {
    if (typeof window === 'undefined' && typeof process === 'object') {
        return true;
    }
    return false;
}

/**
 * Checks if a script is running on client side or not
 *
 * @export
 * @returns {boolean}
 */
export function isBrowser(): boolean {
    return !isNodeJS();
}

/**
 * Iterates an object's prototypes recursive and collects the names
 *
 * @export
 * @param {*} object
 * @returns {Array<string>}
 */
export function getPrototypeNamesRecursive(object: any): string[] {
    const prototypes: string[] = [];
    const prototype = Object.getPrototypeOf(object);
    if (prototype) {
        prototypes.push(prototype.constructor.name);
        prototypes.concat(getPrototypeNamesRecursive(prototype));
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
export function includesMemberOfList(search: string, list: string[], extension: string = ''): boolean {
    for (const member of list) {
        if (search.includes(`${member}${extension}`)) {
            return true;
        }
    }
    return false;
}
