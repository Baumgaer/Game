"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const app_root_path_1 = require("app-root-path");
const walk_1 = require("walk");
const graceful_fs_1 = require("graceful-fs");
function getCorrespondingFile(filePath) {
    if (!path_1.isAbsolute(filePath))
        filePath = path_1.resolve(app_root_path_1.path, filePath);
    const sourcePath = path_1.resolve(app_root_path_1.path, 'source');
    const outPath = path_1.resolve(app_root_path_1.path, 'out');
    let correspondingFile = null;
    if (isSourceFile(filePath)) {
        correspondingFile = filePath
            .replace(sourcePath, outPath)
            .replace('.ts', '.js')
            .replace('.less', '.css');
        if (isOnClientSide(filePath)) {
            correspondingFile = correspondingFile
                .replace(`${path_1.sep}ts${path_1.sep}`, `${path_1.sep}js${path_1.sep}`)
                .replace(`${path_1.sep}less${path_1.sep}`, `${path_1.sep}css${path_1.sep}`);
        }
        return correspondingFile;
    }
    correspondingFile = filePath
        .replace(outPath, sourcePath)
        .replace('.js', '.ts')
        .replace('.css', '.less');
    if (isOnClientSide(filePath)) {
        correspondingFile = correspondingFile
            .replace(`${path_1.sep}js${path_1.sep}`, `${path_1.sep}ts${path_1.sep}`)
            .replace(`${path_1.sep}css${path_1.sep}`, `${path_1.sep}less${path_1.sep}`);
    }
    return correspondingFile;
}
exports.getCorrespondingFile = getCorrespondingFile;
function isSourceFile(filePath) {
    if (!path_1.isAbsolute(filePath))
        filePath = path_1.resolve(app_root_path_1.path, filePath);
    if (filePath.includes(path_1.resolve(app_root_path_1.path, 'source'))) {
        return true;
    }
    return false;
}
exports.isSourceFile = isSourceFile;
function isOnClientSide(filePath) {
    if (!path_1.isAbsolute(filePath))
        filePath = path_1.resolve(app_root_path_1.path, filePath);
    const sourceClientPath = path_1.resolve(app_root_path_1.path, 'source', 'app', 'client');
    const outClientPath = path_1.resolve(app_root_path_1.path, 'out', 'app', 'client');
    if ((isSourceFile(filePath) && filePath.includes(sourceClientPath)) ||
        (!isSourceFile(filePath) && filePath.includes(outClientPath))) {
        return true;
    }
    return false;
}
exports.isOnClientSide = isOnClientSide;
function walk(dir, onFile, onDir) {
    if (!path_1.isAbsolute(dir))
        dir = path_1.resolve(app_root_path_1.path, dir);
    const walker = walk_1.walk(dir);
    const results = [];
    return new Promise((resolver) => {
        walker.on('file', async (root, fileStats, next) => {
            const path = path_1.resolve(root, fileStats.name);
            results.push(path);
            if (onFile)
                await onFile(path, fileStats);
            next();
        });
        walker.on('directory', async (base, dirStats, next) => {
            const path = path_1.resolve(base);
            if (onDir)
                await onDir(path, dirStats);
            next();
        });
        walker.on('end', () => {
            resolver(results);
        });
    });
}
exports.walk = walk;
function cleanEmptyFoldersRecursively(folder, onRemove) {
    const isDir = graceful_fs_1.statSync(folder).isDirectory();
    if (!isDir) {
        return;
    }
    let files = graceful_fs_1.readdirSync(folder);
    if (files.length) {
        for (const file of files) {
            const fullPath = path_1.resolve(folder, file);
            cleanEmptyFoldersRecursively(fullPath, onRemove);
        }
        files = graceful_fs_1.readdirSync(folder);
    }
    else {
        if (onRemove)
            onRemove(folder);
        graceful_fs_1.rmdirSync(folder);
        return;
    }
}
exports.cleanEmptyFoldersRecursively = cleanEmptyFoldersRecursively;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdFN0cnVjdHVyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS91dGlscy9wcm9qZWN0U3RydWN0dXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQWdEO0FBQ2hELGlEQUFpRDtBQUNqRCwrQkFBcUM7QUFDckMsNkNBQStEO0FBUS9ELFNBQWdCLG9CQUFvQixDQUFDLFFBQWdCO0lBQ2pELElBQUksQ0FBQyxpQkFBVSxDQUFDLFFBQVEsQ0FBQztRQUFFLFFBQVEsR0FBRyxjQUFPLENBQUMsb0JBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNsRSxNQUFNLFVBQVUsR0FBRyxjQUFPLENBQUMsb0JBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMvQyxNQUFNLE9BQU8sR0FBRyxjQUFPLENBQUMsb0JBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN6QyxJQUFJLGlCQUFpQixHQUFHLElBQUksQ0FBQztJQUM3QixJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUN4QixpQkFBaUIsR0FBRyxRQUFRO2FBQ3ZCLE9BQU8sQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDO2FBQzVCLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDO2FBQ3JCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFOUIsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDMUIsaUJBQWlCLEdBQUcsaUJBQWlCO2lCQUNoQyxPQUFPLENBQUMsR0FBRyxVQUFHLEtBQUssVUFBRyxFQUFFLEVBQUUsR0FBRyxVQUFHLEtBQUssVUFBRyxFQUFFLENBQUM7aUJBQzNDLE9BQU8sQ0FBQyxHQUFHLFVBQUcsT0FBTyxVQUFHLEVBQUUsRUFBRSxHQUFHLFVBQUcsTUFBTSxVQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZEO1FBQ0QsT0FBTyxpQkFBaUIsQ0FBQztLQUM1QjtJQUNELGlCQUFpQixHQUFHLFFBQVE7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