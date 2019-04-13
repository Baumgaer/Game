import { resolve, isAbsolute, sep } from 'path';
import { path as rootPath } from 'app-root-path';
import { walk as wWalk } from 'walk';
import { readdirSync, statSync, rmdirSync } from 'graceful-fs';

/**
 * Returns the corresponding path of the other target
 *
 * @param {string} filePath Path of the file for which the corresponding path is searched
 * @returns {string} The corresponding path
 */
export function getCorrespondingFile(filePath: string): string {
    if (!isAbsolute(filePath)) filePath = resolve(rootPath, filePath);
    const sourcePath = resolve(rootPath, 'source');
    const outPath = resolve(rootPath, 'out');
    let correspondingFile = null;
    if (isSourceFile(filePath)) {
        correspondingFile = filePath.replace(sourcePath, outPath).replace('.ts', '.js');
        if (isOnClientSide(filePath)) {
            correspondingFile = correspondingFile.replace(`${sep}ts${sep}`, `${sep}js${sep}`);
        }
        return correspondingFile;
    }
    correspondingFile = filePath.replace(outPath, sourcePath).replace('.js', '.ts');
    if (isOnClientSide(filePath)) {
        correspondingFile = correspondingFile.replace(`${sep}js${sep}`, `${sep}ts${sep}`);
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
    const sourceClientPath = resolve(rootPath, 'source', 'app', 'client');
    const outClientPath = resolve(rootPath, 'out', 'app', 'client');
    if (
        (isSourceFile(filePath) && filePath.includes(sourceClientPath)) ||
        (!isSourceFile(filePath) && filePath.includes(outClientPath))
    ) {
        return true;
    }
    return false;
}

/**
 * Iterates over the structure of a given directory recursive and executes the
 * onFileFound function on every found file.
 *
 * @export
 * @param {string} dir absolute or relative by project root path to dir
 * @param {(path: string, stats: Stats) => void} onFileFound
 * @returns
 */
/**
 * Iterates over the structure of a given directory recursive and executes the
 * onFile function on every found file and onDir on every found directory.
 * resolves to a List of found files.
 *
 * @export
 * @param {string} dir absolute or relative by project root path to dir
 * @param {walkEventFunc} [onFile]
 * @param {walkEventFunc} [onDir]
 * @returns {Promise<string[]>}
 */
export function walk(dir: string, onFile?: walkEventFunc, onDir?: walkEventFunc): Promise<string[]> {
    if (!isAbsolute(dir)) dir = resolve(rootPath, dir);
    const walker = wWalk(dir);
    const results: string[] = [];
    return new Promise((resolver) => {
        walker.on('file', async (root, fileStats, next) => {
            const path = resolve(root, fileStats.name);
            results.push(path);
            if (onFile) await onFile(path, fileStats);
            next();
        });
        walker.on('directory', async (base, dirStats, next) => {
            const path = resolve(base);
            if (onDir) await onDir(path, dirStats);
            next();
        });
        walker.on('end', () => {
            resolver(results);
        });
    });
}

/**
 * Removes all empty folders started with given folder recursively and executes
 * onRemove if an empty folder was found.
 *
 * @export
 * @param {string} folder
 * @param {(folder: string) => void} [onRemove]
 * @returns
 */
export function cleanEmptyFoldersRecursively(folder: string, onRemove?: (folder: string) => void): void {
    const isDir = statSync(folder).isDirectory();
    if (!isDir) {
        return;
    }
    let files = readdirSync(folder);
    if (files.length) {
        for (const file of files) {
            const fullPath = resolve(folder, file);
            cleanEmptyFoldersRecursively(fullPath, onRemove);
        }
        files = readdirSync(folder);
    } else {
        if (onRemove) onRemove(folder);
        rmdirSync(folder);
        return;
    }
}
