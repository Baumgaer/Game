"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Module = require("module");
const path_1 = require("path");
const app_root_path_1 = require("app-root-path");
const graceful_fs_1 = require("graceful-fs");
const originalRequire = Module.prototype.require;
Module.prototype.require = function (path) {
    if (path.startsWith('~')) {
        const compilerOptions = originalRequire(path_1.resolve(app_root_path_1.path, 'tsconfig.json')).compilerOptions;
        const pathKey = path.split('/')[0];
        const pathValue = compilerOptions.paths[`${pathKey}/*`][0];
        path = path.replace(pathKey, `${compilerOptions.outDir}${pathValue.substring(compilerOptions.rootDir.length, pathValue.length - 2)}`);
        path = path_1.resolve(app_root_path_1.path, path);
    }
    if (path.endsWith(".njk")) {
        return graceful_fs_1.readFileSync(path).toString();
    }
    return originalRequire.apply(this, [path]);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWlyZU92ZXJyaWRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc291cmNlL3V0aWxzL3JlcXVpcmVPdmVycmlkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGlDQUFrQztBQUNsQywrQkFBK0I7QUFDL0IsaURBQWlEO0FBQ2pELDZDQUEyQztBQUMzQyxNQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztBQU9qRCxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxVQUFVLElBQVk7SUFDN0MsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3RCLE1BQU0sZUFBZSxHQUFHLGVBQWUsQ0FBQyxjQUFPLENBQUMsb0JBQVEsRUFBRSxlQUFlLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQztRQUM1RixNQUFNLE9BQU8sR0FBVyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sU0FBUyxHQUFXLGVBQWUsQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUNmLE9BQU8sRUFDUCxHQUFHLGVBQWUsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQzFHLENBQUM7UUFDRixJQUFJLEdBQUcsY0FBTyxDQUFDLG9CQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDbEM7SUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDdkIsT0FBTywwQkFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ3hDO0lBRUQsT0FBTyxlQUFlLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDL0MsQ0FBQyxDQUFDIn0=