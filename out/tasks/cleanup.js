"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const app_root_path_1 = require("app-root-path");
const graceful_fs_1 = require("graceful-fs");
const colors = require("colors");
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
            let correspondingFile = getCorrespondingFile(currentFile);
            let fileToDelete = null;
            if (isSourceFile(currentFile) && graceful_fs_1.existsSync(correspondingFile))
                fileToDelete = currentFile;
            if (!isSourceFile(currentFile) && !graceful_fs_1.existsSync(correspondingFile))
                fileToDelete = currentFile;
            if (fileToDelete) {
                grunt.log.ok(`${colors.cyan.bold('Cleanup')}: ${currentFile} ${colors.cyan('=>')} ${fileToDelete}`);
                graceful_fs_1.unlinkSync(fileToDelete);
            }
        }
    });
    function getCorrespondingFile(filePath) {
        if (!path_1.isAbsolute(filePath))
            filePath = path_1.resolve(app_root_path_1.path, filePath);
        let sourcePath = path_1.resolve(app_root_path_1.path, 'source');
        let outPath = path_1.resolve(app_root_path_1.path, 'out');
        if (isSourceFile(filePath)) {
            return filePath.replace(sourcePath, outPath).replace('.ts', '.js');
        }
        return filePath.replace(outPath, sourcePath).replace('.js', '.ts');
    }
    function isSourceFile(filePath) {
        if (!path_1.isAbsolute(filePath))
            filePath = path_1.resolve(app_root_path_1.path, filePath);
        if (filePath.includes(path_1.resolve(app_root_path_1.path, 'source'))) {
            return true;
        }
        return false;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xlYW51cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS90YXNrcy9jbGVhbnVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQTJDO0FBQzNDLGlEQUFpRDtBQUNqRCw2Q0FBcUQ7QUFDckQsaUNBQWlDO0FBRWpDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxLQUFhLEVBQVEsRUFBRTtJQUNyQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRTtZQUNMLEVBQUUsRUFBRTtnQkFDQSxHQUFHLEVBQUUsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDO2FBQ3hDO1NBQ0o7S0FDSixDQUFDLENBQUM7SUFFSCxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxPQUFlLEVBQUUsUUFBZ0IsRUFBRSxNQUFjLEVBQUUsRUFBRTtRQUNsRixLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFFSCxLQUFLLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLHlDQUF5QyxFQUFFO1FBQzFFLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNO1lBQUUsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdELEtBQUssTUFBTSxJQUFJLElBQUksT0FBTyxFQUFFO1lBQ3hCLElBQUksV0FBVyxHQUFHLGNBQU8sQ0FBQyxvQkFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzFDLElBQUksaUJBQWlCLEdBQUcsb0JBQW9CLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFMUQsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLElBQUksWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLHdCQUFVLENBQUMsaUJBQWlCLENBQUM7Z0JBQUUsWUFBWSxHQUFHLFdBQVcsQ0FBQztZQUMzRixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsd0JBQVUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFBRSxZQUFZLEdBQUcsV0FBVyxDQUFDO1lBQzdGLElBQUksWUFBWSxFQUFFO2dCQUNkLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksWUFBWSxFQUFFLENBQUMsQ0FBQztnQkFDcEcsd0JBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUM1QjtTQUNKO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFRSCxTQUFTLG9CQUFvQixDQUFDLFFBQWdCO1FBQzFDLElBQUksQ0FBQyxpQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUFFLFFBQVEsR0FBRyxjQUFPLENBQUMsb0JBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNsRSxJQUFJLFVBQVUsR0FBRyxjQUFPLENBQUMsb0JBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUM3QyxJQUFJLE9BQU8sR0FBRyxjQUFPLENBQUMsb0JBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN2QyxJQUFJLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN4QixPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDdEU7UUFDRCxPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQVFELFNBQVMsWUFBWSxDQUFDLFFBQWdCO1FBQ2xDLElBQUksQ0FBQyxpQkFBVSxDQUFDLFFBQVEsQ0FBQztZQUFFLFFBQVEsR0FBRyxjQUFPLENBQUMsb0JBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNsRSxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsY0FBTyxDQUFDLG9CQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsRUFBRTtZQUNoRCxPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztBQUNMLENBQUMsQ0FBQyJ9