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
