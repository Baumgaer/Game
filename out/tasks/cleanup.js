"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const app_root_path_1 = require("app-root-path");
const graceful_fs_1 = require("graceful-fs");
const colors = require("colors");
const projectStructure_1 = require("./../utils/projectStructure");
const path_2 = require("path");
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
    grunt.registerMultiTask('cleanup', 'Cleans up the project on several events', function task() {
        let realSrc = this.filesSrc;
        if (!realSrc.length)
            realSrc = [grunt.task.current.data.src];
        for (const file of realSrc) {
            const currentFile = path_1.resolve(app_root_path_1.path, file);
            const correspondingFile = projectStructure_1.getCorrespondingFile(currentFile);
            const exists = graceful_fs_1.existsSync(correspondingFile);
            const isSource = projectStructure_1.isSourceFile(currentFile);
            let fileToDelete = null;
            if (isSource && exists)
                fileToDelete = correspondingFile;
            if (!isSource && !exists)
                fileToDelete = currentFile;
            if (projectStructure_1.isOnClientSide(currentFile))
                fileToDelete = null;
            if (fileToDelete) {
                grunt.log.ok(`${colors.cyan.bold('Cleanup')}: ${currentFile} ${colors.cyan('=>')} ${fileToDelete}`);
                graceful_fs_1.unlinkSync(fileToDelete);
            }
        }
        const deletedFolders = [];
        for (let file of realSrc) {
            const currentFile = path_1.resolve(app_root_path_1.path, file);
            const correspondingFile = projectStructure_1.getCorrespondingFile(currentFile);
            if (projectStructure_1.isSourceFile(currentFile)) {
                if (graceful_fs_1.existsSync(correspondingFile)) {
                    file = correspondingFile;
                }
                else
                    continue;
            }
            let myDir = path_1.resolve(path_2.dirname(file));
            if (!deletedFolders.includes(myDir)) {
                while (myDir) {
                    deletedFolders.push(myDir);
                    projectStructure_1.cleanEmptyFoldersRecursively(myDir, (folder) => {
                        grunt.log.ok(`${colors.cyan.bold('Cleanup')}: ${folder} `);
                    });
                    if (path_1.resolve(app_root_path_1.path, 'out') === myDir) {
                        break;
                    }
                    myDir = path_1.resolve(path_2.dirname(myDir));
                }
            }
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xlYW51cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS90YXNrcy9jbGVhbnVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQStCO0FBQy9CLGlEQUFpRDtBQUNqRCw2Q0FBcUQ7QUFDckQsaUNBQWlDO0FBQ2pDLGtFQUtxQztBQUNyQywrQkFBK0I7QUFFL0IsTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLEtBQWEsRUFBUSxFQUFFO0lBQ3JDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2YsT0FBTyxFQUFFO1lBQ0wsRUFBRSxFQUFFO2dCQUNBLEdBQUcsRUFBRSxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUM7YUFDeEM7U0FDSjtLQUNKLENBQUMsQ0FBQztJQUVILEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLE9BQWUsRUFBRSxRQUFnQixFQUFFLE1BQWMsRUFBRSxFQUFFO1FBQ2xGLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM1QyxDQUFDLENBQUMsQ0FBQztJQUVILEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUseUNBQXlDLEVBQUUsU0FBUyxJQUFJO1FBQ3ZGLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNO1lBQUUsT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzdELEtBQUssTUFBTSxJQUFJLElBQUksT0FBTyxFQUFFO1lBQ3hCLE1BQU0sV0FBVyxHQUFHLGNBQU8sQ0FBQyxvQkFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzVDLE1BQU0saUJBQWlCLEdBQUcsdUNBQW9CLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDNUQsTUFBTSxNQUFNLEdBQUcsd0JBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQzdDLE1BQU0sUUFBUSxHQUFHLCtCQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7WUFFM0MsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLElBQUksUUFBUSxJQUFJLE1BQU07Z0JBQUUsWUFBWSxHQUFHLGlCQUFpQixDQUFDO1lBQ3pELElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxNQUFNO2dCQUFFLFlBQVksR0FBRyxXQUFXLENBQUM7WUFDckQsSUFBSSxpQ0FBYyxDQUFDLFdBQVcsQ0FBQztnQkFBRSxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3JELElBQUksWUFBWSxFQUFFO2dCQUNkLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksWUFBWSxFQUFFLENBQUMsQ0FBQztnQkFDcEcsd0JBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUM1QjtTQUNKO1FBR0QsTUFBTSxjQUFjLEdBQWEsRUFBRSxDQUFDO1FBQ3BDLEtBQUssSUFBSSxJQUFJLElBQUksT0FBTyxFQUFFO1lBQ3RCLE1BQU0sV0FBVyxHQUFHLGNBQU8sQ0FBQyxvQkFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzVDLE1BQU0saUJBQWlCLEdBQUcsdUNBQW9CLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDNUQsSUFBSSwrQkFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUMzQixJQUFJLHdCQUFVLENBQUMsaUJBQWlCLENBQUMsRUFBRTtvQkFDL0IsSUFBSSxHQUFHLGlCQUFpQixDQUFDO2lCQUM1Qjs7b0JBQU0sU0FBUzthQUNuQjtZQUNELElBQUksS0FBSyxHQUFHLGNBQU8sQ0FBQyxjQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDakMsT0FBTyxLQUFLLEVBQUU7b0JBQ1YsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDM0IsK0NBQTRCLENBQUMsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLEVBQUU7d0JBQzNDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssTUFBTSxHQUFHLENBQUMsQ0FBQztvQkFDL0QsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsSUFBSSxjQUFPLENBQUMsb0JBQVEsRUFBRSxLQUFLLENBQUMsS0FBSyxLQUFLLEVBQUU7d0JBQ3BDLE1BQU07cUJBQ1Q7b0JBQ0QsS0FBSyxHQUFHLGNBQU8sQ0FBQyxjQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDbkM7YUFDSjtTQUNKO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMifQ==