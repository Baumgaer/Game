"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const less_1 = require("less");
const app_root_path_1 = require("app-root-path");
const path_1 = require("path");
const graceful_fs_1 = require("graceful-fs");
const lessPluginCleanCSS = require("less-plugin-clean-css");
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
                new lessPluginCleanCSS({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NvdXJjZS90YXNrcy9jb21waWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLGlEQUFpRDtBQUNqRCwrQkFBOEM7QUFDOUMsNkNBQTBEO0FBRTFELDREQUE0RDtBQVE1RCxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsS0FBYSxFQUFRLEVBQUU7SUFDckMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixPQUFPLEVBQUU7WUFDTCxJQUFJLEVBQUU7Z0JBQ0YsR0FBRyxFQUFFLGtDQUFrQztnQkFDdkMsT0FBTyxFQUFFLE1BQU07YUFDbEI7U0FDSjtLQUNKLENBQUMsQ0FBQztJQUVILEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxTQUFTLGFBQWEsQ0FBQyxPQUFlLEVBQUUsUUFBZ0IsRUFBRSxNQUFjO1FBQ3BHLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN4QyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxVQUFVLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBSyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxlQUFlLEVBQUUsU0FBUyxJQUFJO1FBQzdELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUUxQixNQUFNLFFBQVEsR0FBd0IsRUFBRSxDQUFDO1FBQ3pDLEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUMvQixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssTUFBTSxFQUFFO2dCQUM1QyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7YUFDaEM7U0FDSjtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQztBQU9GLFNBQVMsV0FBVztJQUNoQixPQUFPLElBQUksT0FBTyxDQUFNLENBQUMsT0FBaUIsRUFBRSxFQUFFO1FBQzFDLE1BQU0sVUFBVSxHQUFHLGNBQVcsQ0FBQyxvQkFBUSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQztRQUMxRixhQUFNLENBQUMsMEJBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtZQUN4QyxRQUFRLEVBQUUsVUFBVTtZQUNwQixPQUFPLEVBQUU7Z0JBQ0wsSUFBSSxrQkFBa0IsQ0FBQztvQkFDbkIsUUFBUSxFQUFFLElBQUk7aUJBQ2pCLENBQUM7YUFDTDtTQUNKLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNmLE1BQU0sT0FBTyxHQUFHLGNBQVcsQ0FBQyxvQkFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztZQUNuRiwyQkFBYSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFO2dCQUMvQixRQUFRLEVBQUUsT0FBTzthQUNwQixDQUFDLENBQUM7WUFDSCxPQUFPLEVBQUUsQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDIn0=