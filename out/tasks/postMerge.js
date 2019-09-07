"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
module.exports = function callback(grunt) {
    grunt.registerTask('postMerge', 'Checks dependencies', function registerTaskCallback() {
        const changes = child_process_1.execSync('git diff-tree -r --name-only --no-commit-id ORIG_HEAD HEAD').toString();
        if (changes && changes.indexOf('package.json') !== -1) {
            child_process_1.execSync('npm install && npm prune', {
                stdio: 'inherit'
            });
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdE1lcmdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc291cmNlL3Rhc2tzL3Bvc3RNZXJnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUF5QztBQUV6QyxNQUFNLENBQUMsT0FBTyxHQUFHLFNBQVMsUUFBUSxDQUFDLEtBQWE7SUFDNUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUscUJBQXFCLEVBQUUsU0FBUyxvQkFBb0I7UUFDaEYsTUFBTSxPQUFPLEdBQUcsd0JBQVEsQ0FBQyw0REFBNEQsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2xHLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDbkQsd0JBQVEsQ0FBQywwQkFBMEIsRUFBRTtnQkFDakMsS0FBSyxFQUFFLFNBQVM7YUFDbkIsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyJ9