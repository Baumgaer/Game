"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const app_root_path_1 = require("app-root-path");
const graceful_fs_1 = require("graceful-fs");
const colors = require("colors");
const projectStructure_1 = require("./../utils/projectStructure");
module.exports = (grunt) => {
    grunt.config.merge({
        cleanup: {
            ts: {
                src: ['out/**/*.js', 'out/**/*.*.js']
            }
        }
    });
    grunt.event.on('watchChokidar', (_action, filePath, target) => {
        grunt.config(`${target}.src`, filePath);
    });
    grunt.registerMultiTask('cleanup', 'Cleans up the project on several events', function () {
        let realSrc = this.filesSrc;
        if (!realSrc.length)
            realSrc = [grunt.task.current.data.src];
        for (const file of realSrc) {
            let currentFile = path_1.resolve(app_root_path_1.path, file);
            let correspondingFile = projectStructure_1.getCorrespondingFile(currentFile);
            let fileToDelete = null;
            if (projectStructure_1.isSourceFile(currentFile) && graceful_fs_1.existsSync(correspondingFile))
                fileToDelete = currentFile;
            if (!projectStructure_1.isSourceFile(currentFile) && !graceful_fs_1.existsSync(correspondingFile))
                fileToDelete = currentFile;
            if (fileToDelete) {
                grunt.log.ok(`${colors.cyan.bold('Cleanup')}: ${currentFile} ${colors.cyan('=>')} ${fileToDelete}`);
                graceful_fs_1.unlinkSync(fileToDelete);
            }
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xlYW51cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS90YXNrcy9jbGVhbnVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQStCO0FBQy9CLGlEQUFpRDtBQUNqRCw2Q0FBcUQ7QUFDckQsaUNBQWlDO0FBQ2pDLGtFQUFpRjtBQUVqRixNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsS0FBYSxFQUFRLEVBQUU7SUFDckMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDZixPQUFPLEVBQUU7WUFDTCxFQUFFLEVBQUU7Z0JBQ0EsR0FBRyxFQUFFLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQzthQUN4QztTQUNKO0tBQ0osQ0FBQyxDQUFDO0lBRUgsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsT0FBZSxFQUFFLFFBQWdCLEVBQUUsTUFBYyxFQUFFLEVBQUU7UUFDbEYsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUMsQ0FBQyxDQUFDO0lBRUgsS0FBSyxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSx5Q0FBeUMsRUFBRTtRQUMxRSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTtZQUFFLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3RCxLQUFLLE1BQU0sSUFBSSxJQUFJLE9BQU8sRUFBRTtZQUN4QixJQUFJLFdBQVcsR0FBRyxjQUFPLENBQUMsb0JBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMxQyxJQUFJLGlCQUFpQixHQUFHLHVDQUFvQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRTFELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQztZQUN4QixJQUFJLCtCQUFZLENBQUMsV0FBVyxDQUFDLElBQUksd0JBQVUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFBRSxZQUFZLEdBQUcsV0FBVyxDQUFDO1lBQzNGLElBQUksQ0FBQywrQkFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsd0JBQVUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFBRSxZQUFZLEdBQUcsV0FBVyxDQUFDO1lBQzdGLElBQUksWUFBWSxFQUFFO2dCQUNkLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksWUFBWSxFQUFFLENBQUMsQ0FBQztnQkFDcEcsd0JBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUM1QjtTQUNKO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMifQ==