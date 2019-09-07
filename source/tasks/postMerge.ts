import { execSync } from 'child_process';

module.exports = function callback(grunt: IGrunt) {
    grunt.registerTask('postMerge', 'Checks dependencies', function registerTaskCallback() {
        const changes = execSync('git diff-tree -r --name-only --no-commit-id ORIG_HEAD HEAD').toString();
        if (changes && changes.indexOf('package.json') !== -1) {
            execSync('npm install && npm prune', {
                stdio: 'inherit'
            });
        }
    });
};
