"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const path_1 = require("path");
const app_root_path_1 = require("app-root-path");
const graceful_fs_1 = require("graceful-fs");
const colors = tslib_1.__importStar(require("colors"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xlYW51cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS90YXNrcy9jbGVhbnVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtCQUErQjtBQUMvQixpREFBaUQ7QUFDakQsNkNBQXFEO0FBQ3JELHVEQUFpQztBQUNqQyxrRUFLcUM7QUFDckMsK0JBQStCO0FBRS9CLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxLQUFhLEVBQVEsRUFBRTtJQUNyQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNmLE9BQU8sRUFBRTtZQUNMLEVBQUUsRUFBRTtnQkFDQSxHQUFHLEVBQUUsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDO2FBQ3hDO1NBQ0o7S0FDSixDQUFDLENBQUM7SUFFSCxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxPQUFlLEVBQUUsUUFBZ0IsRUFBRSxNQUFjLEVBQUUsRUFBRTtRQUNsRixLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDNUMsQ0FBQyxDQUFDLENBQUM7SUFFSCxLQUFLLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLHlDQUF5QyxFQUFFLFNBQVMsSUFBSTtRQUN2RixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTtZQUFFLE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3RCxLQUFLLE1BQU0sSUFBSSxJQUFJLE9BQU8sRUFBRTtZQUN4QixNQUFNLFdBQVcsR0FBRyxjQUFPLENBQUMsb0JBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM1QyxNQUFNLGlCQUFpQixHQUFHLHVDQUFvQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzVELE1BQU0sTUFBTSxHQUFHLHdCQUFVLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUM3QyxNQUFNLFFBQVEsR0FBRywrQkFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBRTNDLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQztZQUN4QixJQUFJLFFBQVEsSUFBSSxNQUFNO2dCQUFFLFlBQVksR0FBRyxpQkFBaUIsQ0FBQztZQUN6RCxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsTUFBTTtnQkFBRSxZQUFZLEdBQUcsV0FBVyxDQUFDO1lBQ3JELElBQUksaUNBQWMsQ0FBQyxXQUFXLENBQUM7Z0JBQUUsWUFBWSxHQUFHLElBQUksQ0FBQztZQUNyRCxJQUFJLFlBQVksRUFBRTtnQkFDZCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLFlBQVksRUFBRSxDQUFDLENBQUM7Z0JBQ3BHLHdCQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDNUI7U0FDSjtRQUdELE1BQU0sY0FBYyxHQUFhLEVBQUUsQ0FBQztRQUNwQyxLQUFLLElBQUksSUFBSSxJQUFJLE9BQU8sRUFBRTtZQUN0QixNQUFNLFdBQVcsR0FBRyxjQUFPLENBQUMsb0JBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM1QyxNQUFNLGlCQUFpQixHQUFHLHVDQUFvQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzVELElBQUksK0JBQVksQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFDM0IsSUFBSSx3QkFBVSxDQUFDLGlCQUFpQixDQUFDLEVBQUU7b0JBQy9CLElBQUksR0FBRyxpQkFBaUIsQ0FBQztpQkFDNUI7O29CQUFNLFNBQVM7YUFDbkI7WUFDRCxJQUFJLEtBQUssR0FBRyxjQUFPLENBQUMsY0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2pDLE9BQU8sS0FBSyxFQUFFO29CQUNWLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzNCLCtDQUE0QixDQUFDLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFO3dCQUMzQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLE1BQU0sR0FBRyxDQUFDLENBQUM7b0JBQy9ELENBQUMsQ0FBQyxDQUFDO29CQUNILElBQUksY0FBTyxDQUFDLG9CQUFRLEVBQUUsS0FBSyxDQUFDLEtBQUssS0FBSyxFQUFFO3dCQUNwQyxNQUFNO3FCQUNUO29CQUNELEtBQUssR0FBRyxjQUFPLENBQUMsY0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQ25DO2FBQ0o7U0FDSjtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDIn0=