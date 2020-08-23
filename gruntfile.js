module.exports = function (grunt) {

    grunt.initConfig({
        watchChokidar: {
            "compile.less": {
                files: [
                    'source/app/client/less/**/*.less',
                    'source/app/client/less/**/*.*.less'
                ],
                tasks: ['compile:less'],
                options: {
                    event: ['unlink', 'change', 'add'],
                    spawn: false
                }
            },
            "compile.config": {
                files: [
                    'out/app/config/**/*.yaml',
                    'out/app/client/config/**/*.yaml',
                    'out/app/server/config/**/*.yaml'
                ],
                tasks: ['compile:config'],
                options: {
                    event: ['unlink', 'change', 'add'],
                    spawn: false
                }
            },
            "cleanup.ts": {
                files: [
                    'source/**/*.ts',
                    'source/**/*.*.ts'
                ],
                tasks: ['cleanup:ts'],
                options: {
                    event: ['unlink'],
                    spawn: false
                }
            }
        }
    });

    // Load the watcher task
    grunt.loadNpmTasks('grunt-contrib-watch-chokidar');

    // generic loading custom tasks
    grunt.loadTasks("out/tasks");

    // default task
    grunt.registerTask("default", ["watchChokidar"]);
};
