import * as nunjucks from 'nunjucks';

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

/**
 * provides several filters for the template engine
 *
 * @param env The template environment which will be extended
 */
export const templateFilters = (env: nunjucks.Environment): void => {
    env.addFilter('json', (value, spaces) => {
        if (value instanceof nunjucks.runtime.SafeString) {
            value = value.toString();
        }
        // eslint-disable-next-line
        // @ts-ignore
        return new env.filters.safe(JSON.stringify(value, null, spaces));
    });

    env.addFilter('bind', function (this: any, value, bindingName) {
        if (value instanceof nunjucks.runtime.SafeString) {
            value = value.toString();
        }
        // eslint-disable-next-line
        // @ts-ignore
        return env.filters.safe(`<bind name="${bindingName}">${value}</bind>`);
    });
};

/**
 * Provides the basic template environment of nunjucks and defines several extensions
 */
export const templateEnvironment = (() => {
    const noCache = global.process.env.NODE_ENV === 'development' ? true : false;
    const env = new nunjucks.Environment({
        getSource: (path: string) => {
            return { src: require(path), path, noCache };
        }
    }, { noCache });
    templateFilters(env);
    return env;
})();
