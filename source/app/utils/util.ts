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
