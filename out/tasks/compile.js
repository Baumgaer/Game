"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const less_1 = require("less");
const app_root_path_1 = require("app-root-path");
const path_1 = require("path");
const graceful_fs_1 = require("graceful-fs");
const less_plugin_clean_css_1 = tslib_1.__importDefault(require("less-plugin-clean-css"));
const mkdirp_1 = require("mkdirp");
const projectStructure_1 = require("./../utils/projectStructure");
module.exports = (grunt) => {
    grunt.config.merge({
        compile: {
            less: {
                src: 'source/app/client/less/**/*.less',
                program: 'less'
            }
        }
    });
    grunt.event.on('watchChokidar', function watchChokidar(_action, filePath, target) {
        grunt.config(`${target}.src`, filePath);
        grunt.config(`${target}.program`, target.split('.').pop());
    });
    grunt.registerMultiTask('compile', 'Compiles Less', function task() {
        const done = this.async();
        compileLess().then(() => { done(`Finished!`); });
    });
};
function compileLess() {
    return new Promise((resolve) => {
        const sourcePath = path_1.resolve(app_root_path_1.path, 'source', 'app', 'client', 'less');
        const promises = [];
        projectStructure_1.walk(sourcePath, (filePath) => {
            if (!(filePath === path_1.resolve(sourcePath, "global.less") || filePath.startsWith(path_1.resolve(sourcePath, "themes"))))
                return;
            less_1.render(graceful_fs_1.readFileSync(filePath).toString(), {
                filename: filePath,
                plugins: [
                    new less_plugin_clean_css_1.default({
                        advanced: true
                    })
                ]
            }).then((output) => {
                const outPath = projectStructure_1.getCorrespondingFile(filePath);
                mkdirp_1.sync(path_1.dirname(outPath));
                graceful_fs_1.writeFileSync(outPath, output.css, {
                    encoding: 'utf-8'
                });
                resolve();
            });
        });
        Promise.all(promises).then(() => resolve());
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS90YXNrcy9jb21waWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtCQUE4QjtBQUM5QixpREFBaUQ7QUFDakQsK0JBQXVEO0FBQ3ZELDZDQUEwRDtBQUUxRCwwRkFBdUQ7QUFDdkQsbUNBQTJDO0FBQzNDLGtFQUF5RTtBQVF6RSxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsS0FBYSxFQUFRLEVBQUU7SUFDckMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixPQUFPLEVBQUU7WUFDTCxJQUFJLEVBQUU7Z0JBQ0YsR0FBRyxFQUFFLGtDQUFrQztnQkFDdkMsT0FBTyxFQUFFLE1BQU07YUFDbEI7U0FDSjtLQUNKLENBQUMsQ0FBQztJQUVILEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxTQUFTLGFBQWEsQ0FBQyxPQUFlLEVBQUUsUUFBZ0IsRUFBRSxNQUFjO1FBQ3BHLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN4QyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxVQUFVLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBSyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUUsU0FBUyxJQUFJO1FBQzdELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMxQixXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFPRixTQUFTLFdBQVc7SUFDaEIsT0FBTyxJQUFJLE9BQU8sQ0FBTSxDQUFDLE9BQWlCLEVBQUUsRUFBRTtRQUMxQyxNQUFNLFVBQVUsR0FBRyxjQUFXLENBQUMsb0JBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM1RSxNQUFNLFFBQVEsR0FBd0MsRUFBRSxDQUFDO1FBQ3pELHVCQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDMUIsSUFBSSxDQUFDLENBQUMsUUFBUSxLQUFLLGNBQVcsQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxjQUFXLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7Z0JBQUUsT0FBTztZQUM3SCxhQUFNLENBQUMsMEJBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDdEMsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLE9BQU8sRUFBRTtvQkFDTCxJQUFJLCtCQUFrQixDQUFDO3dCQUNuQixRQUFRLEVBQUUsSUFBSTtxQkFDakIsQ0FBQztpQkFDTDthQUNKLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDZixNQUFNLE9BQU8sR0FBRyx1Q0FBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDL0MsYUFBUyxDQUFDLGNBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUM1QiwyQkFBYSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFO29CQUMvQixRQUFRLEVBQUUsT0FBTztpQkFDcEIsQ0FBQyxDQUFDO2dCQUNILE9BQU8sRUFBRSxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDIn0=