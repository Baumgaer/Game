/* tslint:disable*/
import Module = require('module');
import { resolve } from 'path';
import { path as rootPath } from 'app-root-path';
const originalRequire = Module.prototype.require;

/**
 * Overwrites the original require function process wide to use typescripts path
 * mapping.
 */
// @ts-ignore
Module.prototype.require = function(path: string): NodeRequire {
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
    // @ts-ignore
    return originalRequire.apply(this, [path]);
};
