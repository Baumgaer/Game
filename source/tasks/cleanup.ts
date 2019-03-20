import { resolve } from 'path';
import { path as rootPath } from 'app-root-path';
import { existsSync, unlinkSync } from 'graceful-fs';
import * as colors from 'colors';
import { getCorrespondingFile, isSourceFile } from './../utils/projectStructure';

module.exports = (grunt: IGrunt): void => {
    grunt.config.merge({
        cleanup: {
            ts: {
                src: ['out/**/*.js', 'out/**/*.*.js']
            }
        }
    });

    grunt.event.on('watchChokidar', (_action: string, filePath: string, target: string) => {
        grunt.config(`${target}.src`, filePath);
    });

    grunt.registerMultiTask('cleanup', 'Cleans up the project on several events', function() {
        let realSrc = this.filesSrc;
        if (!realSrc.length) realSrc = [grunt.task.current.data.src];
        for (const file of realSrc) {
            let currentFile = resolve(rootPath, file);
            let correspondingFile = getCorrespondingFile(currentFile);

            let fileToDelete = null;
            if (isSourceFile(currentFile) && existsSync(correspondingFile)) fileToDelete = correspondingFile;
            if (!isSourceFile(currentFile) && !existsSync(correspondingFile)) fileToDelete = currentFile;
            if (fileToDelete) {
                grunt.log.ok(`${colors.cyan.bold('Cleanup')}: ${currentFile} ${colors.cyan('=>')} ${fileToDelete}`);
                unlinkSync(fileToDelete);
            }
        }
    });
};
