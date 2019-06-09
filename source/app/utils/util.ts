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
