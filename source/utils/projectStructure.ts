import { resolve, isAbsolute, sep } from 'path';
import { path as rootPath } from 'app-root-path';
import { walk as wWalk, WalkStats } from 'walk';

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

/**
 * Iterates over the structure of a given directory recursive and executes the
 * onFileFound function on every found file.
 *
 * @export
 * @param {string} dir absolute or relative by project root path to dir
 * @param {(path: string, stats: Stats) => void} onFileFound
 * @returns
 */
export function walk(dir: string, onFile?: (file: string, status: WalkStats) => void): Promise<Array<string>> {
    if (!isAbsolute(dir)) dir = resolve(rootPath, dir);
    let walker = wWalk(dir);
    let results: Array<string> = [];
    return new Promise((resolver) => {
        walker.on('file', (root, fileStats, next) => {
            let path = resolve(root, fileStats.name);
            results.push(path);
            onFile && onFile(path, fileStats);
            next();
        });
        walker.on('end', () => {
            resolver(results);
        });
    });
}
