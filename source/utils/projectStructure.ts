import { resolve, isAbsolute, sep } from 'path';
import { path as rootPath } from 'app-root-path';
import { walk as wWalk } from 'walk';
import { readdirSync, statSync, rmdirSync, existsSync } from 'graceful-fs';

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
        correspondingFile = filePath
            .replace(sourcePath, outPath)
            .replace('.ts', '.js')
            .replace('.less', '.css');

        if (isOnClientSide(filePath)) {
            correspondingFile = correspondingFile
                .replace(`${sep}ts${sep}`, `${sep}js${sep}`)
                .replace(`${sep}less${sep}`, `${sep}css${sep}`);
        }
        return correspondingFile;
    }
    correspondingFile = filePath
        .replace(outPath, sourcePath)
        .replace('.js', '.ts')
        .replace('.css', '.less');

    if (isOnClientSide(filePath)) {
        correspondingFile = correspondingFile
            .replace(`${sep}js${sep}`, `${sep}ts${sep}`)
            .replace(`${sep}css${sep}`, `${sep}less${sep}`);
    }
    return correspondingFile;
}

/**
 * Checks if a file path is source or not
 *
 * @param {string} filePath Path of the file which should be checked
 * @returns true if the file is a source file and false else
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
 * @param filePath The file which has to be checked for client side
 * @returns true if file is a client side file and false else
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
 * onFile function on every found file and onDir on every found directory.
 * resolves to a List of found files.
 *
 * @param dir absolute or relative by project root path to dir
 * @param onFile The callback which will be called, when a file was found
 * @param onDir The callback which will be called, when a folder was found
 * @returns A ready state indicating promise which returns a list of all found paths
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
 * @param folder the folder to cleanup
 * @param onRemove the callback which will be called when a folder is removed
 */
export function cleanEmptyFoldersRecursively(folder: string, onRemove?: (folder: string) => void): void {
    if (!existsSync(folder)) return;
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
