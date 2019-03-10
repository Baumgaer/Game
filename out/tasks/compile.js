"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const less_1 = require("less");
const app_root_path_1 = require("app-root-path");
const path_1 = require("path");
const graceful_fs_1 = require("graceful-fs");
const lessPluginCleanCSS = require("less-plugin-clean-css");
let lessCleanCSS = new lessPluginCleanCSS({
    advanced: true
});
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
    grunt.registerMultiTask('compile', 'Compiles TypeScript and Less', function () {
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
        let src = path_1.join(app_root_path_1.path, 'source', 'app', 'client', 'less', 'index.less');
        less_1.render(graceful_fs_1.readFileSync(src).toString(), {
            filename: src,
            plugins: [lessCleanCSS]
        }).then((output) => {
            let src = path_1.join(app_root_path_1.path, 'out', 'app', 'client', 'css', 'bundle.css');
            graceful_fs_1.writeFileSync(src, output.css, {
                encoding: 'utf-8'
            });
            resolve();
        });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS90YXNrcy9jb21waWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLGlEQUFpRDtBQUNqRCwrQkFBNEI7QUFDNUIsNkNBQTBEO0FBRzFELDREQUE0RDtBQUU1RCxJQUFJLFlBQVksR0FBRyxJQUFJLGtCQUFrQixDQUFDO0lBQ3RDLFFBQVEsRUFBRSxJQUFJO0NBQ2pCLENBQUMsQ0FBQztBQU1ILE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxLQUFhLEVBQVEsRUFBRTtJQUNyQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRTtZQUNMLElBQUksRUFBRTtnQkFDRixHQUFHLEVBQUUsa0NBQWtDO2dCQUN2QyxPQUFPLEVBQUUsTUFBTTthQUNsQjtTQUNKO0tBQ0osQ0FBQyxDQUFDO0lBRUgsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLFVBQVMsT0FBZSxFQUFFLFFBQWdCLEVBQUUsTUFBYztRQUN0RixLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDeEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sVUFBVSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDLENBQUMsQ0FBQztJQUVILEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsOEJBQThCLEVBQUU7UUFDL0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXhCLElBQUksUUFBUSxHQUF3QixFQUFFLENBQUM7UUFDdkMsS0FBSyxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQy9CLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxNQUFNLEVBQUU7Z0JBQzVDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQzthQUNoQztTQUNKO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQzVCLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDO0FBT0YsU0FBUyxXQUFXO0lBQ2hCLE9BQU8sSUFBSSxPQUFPLENBQU0sQ0FBQyxPQUFpQixFQUFFLEVBQUU7UUFDMUMsSUFBSSxHQUFHLEdBQUcsV0FBSSxDQUFDLG9CQUFRLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQzFFLGFBQU0sQ0FBQywwQkFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ2pDLFFBQVEsRUFBRSxHQUFHO1lBQ2IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO1NBQzFCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNmLElBQUksR0FBRyxHQUFHLFdBQUksQ0FBQyxvQkFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQztZQUN0RSwyQkFBYSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFFO2dCQUMzQixRQUFRLEVBQUUsT0FBTzthQUNwQixDQUFDLENBQUM7WUFDSCxPQUFPLEVBQUUsQ0FBQztRQUNkLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDIn0=