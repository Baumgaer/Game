"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const less_1 = require("less");
const app_root_path_1 = require("app-root-path");
const path_1 = require("path");
const graceful_fs_1 = require("graceful-fs");
const less_plugin_clean_css_1 = tslib_1.__importDefault(require("less-plugin-clean-css"));
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
        const promises = [];
        for (const _file of this.filesSrc) {
            if (grunt.task.current.data.program === 'less') {
                promises.push(compileLess());
            }
        }
        Promise.all(promises).then(() => {
            done(`Finished!`);
        });
    });
};
function compileLess() {
    return new Promise((resolve) => {
        const sourcePath = path_1.resolve(app_root_path_1.path, 'source', 'app', 'client', 'less', 'index.less');
        less_1.render(graceful_fs_1.readFileSync(sourcePath).toString(), {
            filename: sourcePath,
            plugins: [
                new less_plugin_clean_css_1.default({
                    advanced: true
                })
            ]
        }).then((output) => {
            const outPath = path_1.resolve(app_root_path_1.path, 'out', 'app', 'client', 'css', 'bundle.css');
            graceful_fs_1.writeFileSync(outPath, output.css, {
                encoding: 'utf-8'
            });
            resolve();
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS90YXNrcy9jb21waWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtCQUE4QjtBQUM5QixpREFBaUQ7QUFDakQsK0JBQThDO0FBQzlDLDZDQUEwRDtBQUUxRCwwRkFBdUQ7QUFRdkQsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLEtBQWEsRUFBUSxFQUFFO0lBQ3JDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFO1lBQ0wsSUFBSSxFQUFFO2dCQUNGLEdBQUcsRUFBRSxrQ0FBa0M7Z0JBQ3ZDLE9BQU8sRUFBRSxNQUFNO2FBQ2xCO1NBQ0o7S0FDSixDQUFDLENBQUM7SUFFSCxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsU0FBUyxhQUFhLENBQUMsT0FBZSxFQUFFLFFBQWdCLEVBQUUsTUFBYztRQUNwRyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDeEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sVUFBVSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDLENBQUMsQ0FBQztJQUVILEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsZUFBZSxFQUFFLFNBQVMsSUFBSTtRQUM3RCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFMUIsTUFBTSxRQUFRLEdBQXdCLEVBQUUsQ0FBQztRQUN6QyxLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDL0IsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLE1BQU0sRUFBRTtnQkFDNUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO2FBQ2hDO1NBQ0o7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFPRixTQUFTLFdBQVc7SUFDaEIsT0FBTyxJQUFJLE9BQU8sQ0FBTSxDQUFDLE9BQWlCLEVBQUUsRUFBRTtRQUMxQyxNQUFNLFVBQVUsR0FBRyxjQUFXLENBQUMsb0JBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDMUYsYUFBTSxDQUFDLDBCQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDeEMsUUFBUSxFQUFFLFVBQVU7WUFDcEIsT0FBTyxFQUFFO2dCQUNMLElBQUksK0JBQWtCLENBQUM7b0JBQ25CLFFBQVEsRUFBRSxJQUFJO2lCQUNqQixDQUFDO2FBQ0w7U0FDSixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDZixNQUFNLE9BQU8sR0FBRyxjQUFXLENBQUMsb0JBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFDbkYsMkJBQWEsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRTtnQkFDL0IsUUFBUSxFQUFFLE9BQU87YUFDcEIsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxFQUFFLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyJ9