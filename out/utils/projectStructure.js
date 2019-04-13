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
        correspondingFile = filePath.replace(sourcePath, outPath).replace('.ts', '.js');
        if (isOnClientSide(filePath)) {
            correspondingFile = correspondingFile.replace(`${path_1.sep}ts${path_1.sep}`, `${path_1.sep}js${path_1.sep}`);
        }
        return correspondingFile;
    }
    correspondingFile = filePath.replace(outPath, sourcePath).replace('.js', '.ts');
    if (isOnClientSide(filePath)) {
        correspondingFile = correspondingFile.replace(`${path_1.sep}js${path_1.sep}`, `${path_1.sep}ts${path_1.sep}`);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdFN0cnVjdHVyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS91dGlscy9wcm9qZWN0U3RydWN0dXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQWdEO0FBQ2hELGlEQUFpRDtBQUNqRCwrQkFBcUM7QUFDckMsNkNBQStEO0FBUS9ELFNBQWdCLG9CQUFvQixDQUFDLFFBQWdCO0lBQ2pELElBQUksQ0FBQyxpQkFBVSxDQUFDLFFBQVEsQ0FBQztRQUFFLFFBQVEsR0FBRyxjQUFPLENBQUMsb0JBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNsRSxNQUFNLFVBQVUsR0FBRyxjQUFPLENBQUMsb0JBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUMvQyxNQUFNLE9BQU8sR0FBRyxjQUFPLENBQUMsb0JBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN6QyxJQUFJLGlCQUFpQixHQUFHLElBQUksQ0FBQztJQUM3QixJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUN4QixpQkFBaUIsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hGLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzFCLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxHQUFHLFVBQUcsS0FBSyxVQUFHLEVBQUUsRUFBRSxHQUFHLFVBQUcsS0FBSyxVQUFHLEVBQUUsQ0FBQyxDQUFDO1NBQ3JGO1FBQ0QsT0FBTyxpQkFBaUIsQ0FBQztLQUM1QjtJQUNELGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEYsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDMUIsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEdBQUcsVUFBRyxLQUFLLFVBQUcsRUFBRSxFQUFFLEdBQUcsVUFBRyxLQUFLLFVBQUcsRUFBRSxDQUFDLENBQUM7S0FDckY7SUFDRCxPQUFPLGlCQUFpQixDQUFDO0FBQzdCLENBQUM7QUFqQkQsb0RBaUJDO0FBUUQsU0FBZ0IsWUFBWSxDQUFDLFFBQWdCO0lBQ3pDLElBQUksQ0FBQyxpQkFBVSxDQUFDLFFBQVEsQ0FBQztRQUFFLFFBQVEsR0FBRyxjQUFPLENBQUMsb0JBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNsRSxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsY0FBTyxDQUFDLG9CQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRTtRQUNoRCxPQUFPLElBQUksQ0FBQztLQUNmO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQU5ELG9DQU1DO0FBUUQsU0FBZ0IsY0FBYyxDQUFDLFFBQWdCO0lBQzNDLElBQUksQ0FBQyxpQkFBVSxDQUFDLFFBQVEsQ0FBQztRQUFFLFFBQVEsR0FBRyxjQUFPLENBQUMsb0JBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNsRSxNQUFNLGdCQUFnQixHQUFHLGNBQU8sQ0FBQyxvQkFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEUsTUFBTSxhQUFhLEdBQUcsY0FBTyxDQUFDLG9CQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNoRSxJQUNJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUMvRCxDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsRUFDL0Q7UUFDRSxPQUFPLElBQUksQ0FBQztLQUNmO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDakIsQ0FBQztBQVhELHdDQVdDO0FBc0JELFNBQWdCLElBQUksQ0FBQyxHQUFXLEVBQUUsTUFBc0IsRUFBRSxLQUFxQjtJQUMzRSxJQUFJLENBQUMsaUJBQVUsQ0FBQyxHQUFHLENBQUM7UUFBRSxHQUFHLEdBQUcsY0FBTyxDQUFDLG9CQUFRLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDbkQsTUFBTSxNQUFNLEdBQUcsV0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLE1BQU0sT0FBTyxHQUFhLEVBQUUsQ0FBQztJQUM3QixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7UUFDNUIsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDOUMsTUFBTSxJQUFJLEdBQUcsY0FBTyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0MsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQixJQUFJLE1BQU07Z0JBQUUsTUFBTSxNQUFNLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQzFDLElBQUksRUFBRSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUNsRCxNQUFNLElBQUksR0FBRyxjQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0IsSUFBSSxLQUFLO2dCQUFFLE1BQU0sS0FBSyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztZQUN2QyxJQUFJLEVBQUUsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFO1lBQ2xCLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQXBCRCxvQkFvQkM7QUFXRCxTQUFnQiw0QkFBNEIsQ0FBQyxNQUFjLEVBQUUsUUFBbUM7SUFDNUYsTUFBTSxLQUFLLEdBQUcsc0JBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3QyxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ1IsT0FBTztLQUNWO0lBQ0QsSUFBSSxLQUFLLEdBQUcseUJBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDZCxLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRTtZQUN0QixNQUFNLFFBQVEsR0FBRyxjQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLDRCQUE0QixDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztTQUNwRDtRQUNELEtBQUssR0FBRyx5QkFBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQy9CO1NBQU07UUFDSCxJQUFJLFFBQVE7WUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsdUJBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQixPQUFPO0tBQ1Y7QUFDTCxDQUFDO0FBakJELG9FQWlCQyJ9