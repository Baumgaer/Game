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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdFN0cnVjdHVyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS91dGlscy9wcm9qZWN0U3RydWN0dXJlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQTJDO0FBQzNDLGlEQUFpRDtBQVFqRCxTQUFnQixvQkFBb0IsQ0FBQyxRQUFnQjtJQUNqRCxJQUFJLENBQUMsaUJBQVUsQ0FBQyxRQUFRLENBQUM7UUFBRSxRQUFRLEdBQUcsY0FBTyxDQUFDLG9CQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEUsSUFBSSxVQUFVLEdBQUcsY0FBTyxDQUFDLG9CQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDN0MsSUFBSSxPQUFPLEdBQUcsY0FBTyxDQUFDLG9CQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdkMsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLENBQUM7SUFDN0IsSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDeEIsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoRixJQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMxQixpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ2pFO1FBQ0QsT0FBTyxpQkFBaUIsQ0FBQztLQUM1QjtJQUNELGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEYsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDMUIsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNqRTtJQUNELE9BQU8saUJBQWlCLENBQUM7QUFDN0IsQ0FBQztBQWpCRCxvREFpQkM7QUFRRCxTQUFnQixZQUFZLENBQUMsUUFBZ0I7SUFDekMsSUFBSSxDQUFDLGlCQUFVLENBQUMsUUFBUSxDQUFDO1FBQUUsUUFBUSxHQUFHLGNBQU8sQ0FBQyxvQkFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2xFLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFPLENBQUMsb0JBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFO1FBQ2hELE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBTkQsb0NBTUM7QUFRRCxTQUFnQixjQUFjLENBQUMsUUFBZ0I7SUFDM0MsSUFBSSxDQUFDLGlCQUFVLENBQUMsUUFBUSxDQUFDO1FBQUUsUUFBUSxHQUFHLGNBQU8sQ0FBQyxvQkFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ2xFLElBQUksZ0JBQWdCLEdBQUcsY0FBTyxDQUFDLG9CQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNwRSxJQUFJLGFBQWEsR0FBRyxjQUFPLENBQUMsb0JBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzlELElBQ0ksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQy9ELENBQUMsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUMvRDtRQUNFLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNqQixDQUFDO0FBWEQsd0NBV0MifQ==