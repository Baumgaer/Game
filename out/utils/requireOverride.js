"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Module = require("module");
const path_1 = require("path");
const app_root_path_1 = require("app-root-path");
const originalRequire = Module.prototype.require;
Module.prototype.require = function (path) {
    if (path.startsWith('~')) {
        const compilerOptions = originalRequire(path_1.resolve(app_root_path_1.path, 'tsconfig.json')).compilerOptions;
        const pathKey = path.split('/')[0];
        const pathValue = compilerOptions.paths[`${pathKey}/*`][0];
        path = path.replace(pathKey, `${compilerOptions.outDir}${pathValue.substring(compilerOptions.rootDir.length, pathValue.length - 2)}`);
        path = path_1.resolve(app_root_path_1.path, path);
    }
    return originalRequire.apply(this, [path]);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZU92ZXJyaWRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc291cmNlL3V0aWxzL3JlcXVpcmVPdmVycmlkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGlDQUFrQztBQUNsQywrQkFBK0I7QUFDL0IsaURBQWlEO0FBQ2pELE1BQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO0FBT2pELE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLFVBQVMsSUFBWTtJQUM1QyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDdEIsTUFBTSxlQUFlLEdBQUcsZUFBZSxDQUFDLGNBQU8sQ0FBQyxvQkFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO1FBQzVGLE1BQU0sT0FBTyxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsTUFBTSxTQUFTLEdBQVcsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQ2YsT0FBTyxFQUNQLEdBQUcsZUFBZSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FDMUcsQ0FBQztRQUNGLElBQUksR0FBRyxjQUFPLENBQUMsb0JBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztLQUNsQztJQUVELE9BQU8sZUFBZSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FBQyJ9