/* tslint:disable*/
import Module = require('module');
import { resolve } from 'path';
import { path as rootPath } from 'app-root-path';
import { readFileSync } from 'graceful-fs';
const originalRequire = Module.prototype.require;

/**
 * Overwrites the original require function process wide to use typescripts path
 * mapping.
 *
 * @param path the path to the requested module
 * @returns The requested module
 */
// eslint-disable-next-line
// @ts-ignore
Module.prototype.require = function (path: string): NodeRequire | string {
    if (path.startsWith('~')) {
        const compilerOptions = originalRequire(resolve(rootPath, 'tsconfig.json')).compilerOptions;
        const pathKey: string = path.split('/')[0];
        const pathValue: string = compilerOptions.paths[`${pathKey}/*`][0];
        path = path.replace(
            pathKey,
            `${compilerOptions.outDir}${pathValue.substring(compilerOptions.rootDir.length, pathValue.length - 2)}`
        );
        path = resolve(rootPath, path);
    }
    if (path.endsWith(".njk")) return readFileSync(path).toString();
    // eslint-disable-next-line
    // @ts-ignore
    return originalRequire.apply(this, [path]);
};
