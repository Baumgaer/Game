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
    grunt.event.on('watchChokidar', function (_action, filePath, target) {
        grunt.config(`${target}.src`, filePath);
        grunt.config(`${target}.program`, target.split('.').pop());
    });
    grunt.registerMultiTask('compile', 'Compiles Less', function () {
        let done = this.async();
        let promises = [];
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
        let src = path_1.resolve(app_root_path_1.path, 'source', 'app', 'client', 'less', 'index.less');
        less_1.render(graceful_fs_1.readFileSync(src).toString(), {
            filename: src,
            plugins: [
                new lessPluginCleanCSS({
                    advanced: true
                })
            ]
        }).then((output) => {
            let src = path_1.resolve(app_root_path_1.path, 'out', 'app', 'client', 'css', 'bundle.css');
            graceful_fs_1.writeFileSync(src, output.css, {
                encoding: 'utf-8'
            });
            resolve();
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS90YXNrcy9jb21waWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLGlEQUFpRDtBQUNqRCwrQkFBOEM7QUFDOUMsNkNBQTBEO0FBRTFELDREQUE0RDtBQVE1RCxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsS0FBYSxFQUFRLEVBQUU7SUFDckMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixPQUFPLEVBQUU7WUFDTCxJQUFJLEVBQUU7Z0JBQ0YsR0FBRyxFQUFFLGtDQUFrQztnQkFDdkMsT0FBTyxFQUFFLE1BQU07YUFDbEI7U0FDSjtLQUNKLENBQUMsQ0FBQztJQUVILEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxVQUFTLE9BQWUsRUFBRSxRQUFnQixFQUFFLE1BQWM7UUFDdEYsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLFVBQVUsRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDL0QsQ0FBQyxDQUFDLENBQUM7SUFFSCxLQUFLLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLGVBQWUsRUFBRTtRQUNoRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFeEIsSUFBSSxRQUFRLEdBQXdCLEVBQUUsQ0FBQztRQUN2QyxLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDL0IsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLE1BQU0sRUFBRTtnQkFDNUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO2FBQ2hDO1NBQ0o7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUM7QUFPRixTQUFTLFdBQVc7SUFDaEIsT0FBTyxJQUFJLE9BQU8sQ0FBTSxDQUFDLE9BQWlCLEVBQUUsRUFBRTtRQUMxQyxJQUFJLEdBQUcsR0FBRyxjQUFXLENBQUMsb0JBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDakYsYUFBTSxDQUFDLDBCQUFZLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDakMsUUFBUSxFQUFFLEdBQUc7WUFDYixPQUFPLEVBQUU7Z0JBQ0wsSUFBSSxrQkFBa0IsQ0FBQztvQkFDbkIsUUFBUSxFQUFFLElBQUk7aUJBQ2pCLENBQUM7YUFDTDtTQUNKLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNmLElBQUksR0FBRyxHQUFHLGNBQVcsQ0FBQyxvQkFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztZQUM3RSwyQkFBYSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFO2dCQUMzQixRQUFRLEVBQUUsT0FBTzthQUNwQixDQUFDLENBQUM7WUFDSCxPQUFPLEVBQUUsQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDIn0=