/**
 * Checks if a script is running on server side or not
 *
 * @returns true if is Node and false else
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
 * @returns true if is a browser and false else
 */
export function isBrowser(): boolean {
    return !isNodeJS();
}
