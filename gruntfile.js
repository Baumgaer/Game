module.exports = function(grunt) {

    grunt.initConfig({
        watchChokidar: {
            compileInterfaces: {
                files: ['resources/interfaces/**/*.ts'],
                tasks: ['compileInterface', 'compileDependentInterfaces', 'cleanup:interfaces'],
                options: { event: ['add', 'change'], spawn: false }
            },
            compileLess: {
                files: ['resources/statics/css/**/*.less'],
                tasks: ['compileLess'],
                options: { event: ['unlink', 'change'], spawn: false }
            },
            interfaceCleanup: {
                files: ['resources/interfaces/**/*.ts'],
                tasks: ['cleanup:interfaces'],
                options: { event: ['unlink'], spawn: false }
            },
            tsCleanup: {
                files: [
                    'resources/**/*.ts',
                    'resources/**/*.*.ts',
                    '!resources/interfaces/**/*.*',
                    '!resources/templates/**/*.*',
                    '!resources/libexec/**/*.*'
                ],
                tasks: ['cleanup:typescripts'],
                options: { event: ['unlink'], spawn: false }
            },
            angularCleanup: {
                files: [
                    'resources/statics/js/app/**/*.ts',
                    'resources/statics/js/app/**/*.*.ts',
                    'resources/statics/js/environments/**/*.ts',
                    'resources/statics/js/environments/**/*.*.ts',
                    'resources/statics/js/main.ts',
                    'resources/statics/js/polyfills.ts'
                ],
                tasks: ['cleanup:typescripts'],
                options: { event: ['change'], spawn: false }
            }
        }
    });

    // Load the watcher task
    grunt.loadNpmTasks('grunt-contrib-watch-chokidar');

    // generic loading custom tasks
    grunt.loadTasks("tasks");

    // default task
    grunt.registerTask("default", ["watchChokidar"]);
};
