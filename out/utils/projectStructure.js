"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const app_root_path_1 = require("app-root-path");
const walk_1 = require("walk");
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
function walk(dir, onFile) {
    if (!path_1.isAbsolute(dir))
        dir = path_1.resolve(app_root_path_1.path, dir);
    const walker = walk_1.walk(dir);
    const results = [];
    return new Promise((resolver) => {
        walker.on('file', (root, fileStats, next) => {
            const path = path_1.resolve(root, fileStats.name);
            results.push(path);
            if (onFile)
                onFile(path, fileStats);
            next();
        });
        walker.on('end', () => {
            resolver(results);
        });
    });
}
exports.walk = walk;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdFN0cnVjdHVyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS91dGlscy9wcm9qZWN0U3RydWN0dXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQWdEO0FBQ2hELGlEQUFpRDtBQUNqRCwrQkFBZ0Q7QUFRaEQsU0FBZ0Isb0JBQW9CLENBQUMsUUFBZ0I7SUFDakQsSUFBSSxDQUFDLGlCQUFVLENBQUMsUUFBUSxDQUFDO1FBQUUsUUFBUSxHQUFHLGNBQU8sQ0FBQyxvQkFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2xFLE1BQU0sVUFBVSxHQUFHLGNBQU8sQ0FBQyxvQkFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQy9DLE1BQU0sT0FBTyxHQUFHLGNBQU8sQ0FBQyxvQkFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLElBQUksaUJBQWlCLEdBQUcsSUFBSSxDQUFDO0lBQzdCLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3hCLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEYsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDMUIsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEdBQUcsVUFBRyxLQUFLLFVBQUcsRUFBRSxFQUFFLEdBQUcsVUFBRyxLQUFLLFVBQUcsRUFBRSxDQUFDLENBQUM7U0FDckY7UUFDRCxPQUFPLGlCQUFpQixDQUFDO0tBQzVCO0lBQ0QsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoRixJQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUMxQixpQkFBaUIsR0FBRyxp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