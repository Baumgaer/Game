"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const app_root_path_1 = require("app-root-path");
function getCorrespondingFile(filePath) {
    if (!path_1.isAbsolute(filePath))
        filePath = path_1.resolve(app_root_path_1.path, filePath);
    let sourcePath = path_1.resolve(app_root_path_1.path, 'source');
    let outPath = path_1.resolve(app_root_path_1.path, 'out');
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
    let sourceClientPath = path_1.resolve(app_root_path_1.path, 'source', 'app', 'client');
    let outClientPath = path_1.resolve(app_root_path_1.path, 'out', 'app', 'client');
    if ((isSourceFile(filePath) && filePath.includes(sourceClientPath)) ||
        (!isSourceFile(filePath) && filePath.includes(outClientPath))) {
        return true;
    }
    return false;
}
exports.isOnClientSide = isOnClientSide;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdFN0cnVjdHVyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS91dGlscy9wcm9qZWN0U3RydWN0dXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQWdEO0FBQ2hELGlEQUFpRDtBQVFqRCxTQUFnQixvQkFBb0IsQ0FBQyxRQUFnQjtJQUNqRCxJQUFJLENBQUMsaUJBQVUsQ0FBQyxRQUFRLENBQUM7UUFBRSxRQUFRLEdBQUcsY0FBTyxDQUFDLG9CQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEUsSUFBSSxVQUFVLEdBQUcsY0FBTyxDQUFDLG9CQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDN0MsSUFBSSxPQUFPLEdBQUcsY0FBTyxDQUFDLG9CQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdkMsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLENBQUM7SUFDN0IsSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDeEIsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoRixJQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMxQixpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxVQUFHLEtBQUssVUFBRyxFQUFFLEVBQUUsR0FBRyxVQUFHLEtBQUssVUFBRyxFQUFFLENBQUMsQ0FBQztTQUNyRjtRQUNELE9BQU8saUJBQWlCLENBQUM7S0FDNUI7SUFDRCxpQkFBaUIsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2hGLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQzFCLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxHQUFHLFVBQUcsS0FBSyxVQUFHLEVBQUUsRUFBRSxHQUFHLFVBQUcsS0FBSyxVQUFHLEVBQUUsQ0FBQyxDQUFDO0tBQ3JGO0lBQ0QsT0FBTyxpQkFBaUIsQ0FBQztBQUM3QixDQUFDO0FBakJELG9EQWlCQztBQVFELFNBQWdCLFlBQVksQ0FBQyxRQUFnQjtJQUN6QyxJQUFJLENBQUMsaUJBQVUsQ0FBQyxRQUFRLENBQUM7UUFBRSxRQUFRLEdBQUcsY0FBTyxDQUFDLG9CQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEUsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLGNBQU8sQ0FBQyxvQkFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLEVBQUU7UUFDaEQsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFORCxvQ0FNQztBQVFELFNBQWdCLGNBQWMsQ0FBQyxRQUFnQjtJQUMzQyxJQUFJLENBQUMsaUJBQVUsQ0FBQyxRQUFRLENBQUM7UUFBRSxRQUFRLEdBQUcsY0FBTyxDQUFDLG9CQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEUsSUFBSSxnQkFBZ0IsR0FBRyxjQUFPLENBQUMsb0JBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3BFLElBQUksYUFBYSxHQUFHLGNBQU8sQ0FBQyxvQkFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDOUQsSUFDSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDL0QsQ0FBQyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQy9EO1FBQ0UsT0FBTyxJQUFJLENBQUM7S0FDZjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFYRCx3Q0FXQyJ9