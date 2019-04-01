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
