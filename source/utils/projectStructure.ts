import { resolve, isAbsolute } from 'path';
import { path as rootPath } from 'app-root-path';

/**
 * Returns the corresponding path of the other target
 *
 * @param {string} filePath Path of the file for which the corresponding path is searched
 * @returns {string} The corresponding path
 */
export function getCorrespondingFile(filePath: string): string {
    if (!isAbsolute(filePath)) filePath = resolve(rootPath, filePath);
    let sourcePath = resolve(rootPath, 'source');
    let outPath = resolve(rootPath, 'out');
    let correspondingFile = null;
    if (isSourceFile(filePath)) {
        correspondingFile = filePath.replace(sourcePath, outPath).replace('.ts', '.js');
        if (isOnClientSide(filePath)) {
            correspondingFile = correspondingFile.replace('/ts/', '/js/');
        }
        return correspondingFile;
    }
    correspondingFile = filePath.replace(outPath, sourcePath).replace('.js', '.ts');
    if (isOnClientSide(filePath)) {
        correspondingFile = correspondingFile.replace('/js/', '/ts/');
    }
    return correspondingFile;
}

/**
 * Checks if a file path is source or not
 *
 * @param {string} filePath Path of the file which should be checked
 * @returns {boolean}
 */
export function isSourceFile(filePath: string): boolean {
    if (!isAbsolute(filePath)) filePath = resolve(rootPath, filePath);
    if (filePath.includes(resolve(rootPath, 'source'))) {
        return true;
    }
    return false;
}

/**
 * Determines wether the file is on client side or not
 *
 * @param {string} filePath The file which has to be checked for client side
 * @returns {boolean}
 */
export function isOnClientSide(filePath: string): boolean {
    if (!isAbsolute(filePath)) filePath = resolve(rootPath, filePath);
    let sourceClientPath = resolve(rootPath, 'source', 'app', 'client');
    let outClientPath = resolve(rootPath, 'out', 'app', 'client');
    if (
        (isSourceFile(filePath) && filePath.includes(sourceClientPath)) ||
        (!isSourceFile(filePath) && filePath.includes(outClientPath))
    ) {
        return true;
    }
    return false;
}
