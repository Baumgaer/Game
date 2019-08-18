"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
module.exports = function (grunt) {
    grunt.registerTask('postMerge', 'Checks dependencies', function () {
        let changes = child_process_1.execSync('git diff-tree -r --name-only --no-commit-id ORIG_HEAD HEAD').toString();
        if (changes && changes.indexOf('package.json') !== -1) {
            child_process_1.execSync('npm install && npm prune', {
                stdio: 'inherit'
            });
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdE1lcmdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc291cmNlL3Rhc2tzL3Bvc3RNZXJnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUF5QztBQUV6QyxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVMsS0FBYTtJQUNuQyxLQUFLLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxxQkFBcUIsRUFBRTtRQUNuRCxJQUFJLE9BQU8sR0FBRyx3QkFBUSxDQUFDLDREQUE0RCxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEcsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNuRCx3QkFBUSxDQUFDLDBCQUEwQixFQUFFO2dCQUNqQyxLQUFLLEVBQUUsU0FBUzthQUNuQixDQUFDLENBQUM7U0FDTjtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDIn0=