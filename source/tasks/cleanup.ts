import { resolve, isAbsolute } from 'path';
import { path as rootPath } from 'app-root-path';
import { existsSync, unlinkSync } from 'graceful-fs';
import * as colors from 'colors';

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
            if (isSourceFile(currentFile) && existsSync(correspondingFile)) fileToDelete = currentFile;
            if (!isSourceFile(currentFile) && !existsSync(correspondingFile)) fileToDelete = currentFile;
            if (fileToDelete) {
                grunt.log.ok(`${colors.cyan.bold('Cleanup')}: ${currentFile} ${colors.cyan('=>')} ${fileToDelete}`);
                unlinkSync(fileToDelete);
            }
        }
    });

    /**
     * Returns the corresponding path of the other target
     *
     * @param {string} filePath Path of the file for which the corresponding path is searched
     * @returns {string} The corresponding path
     */
    function getCorrespondingFile(filePath: string): string {
        if (!isAbsolute(filePath)) filePath = resolve(rootPath, filePath);
        let sourcePath = resolve(rootPath, 'source');
        let outPath = resolve(rootPath, 'out');
        if (isSourceFile(filePath)) {
            return filePath.replace(sourcePath, outPath).replace('.ts', '.js');
        }
        return filePath.replace(outPath, sourcePath).replace('.js', '.ts');
    }

    /**
     * Checks if a file path is source or not
     *
     * @param {string} filePath Path of the file which should be checked
     * @returns {boolean}
     */
    function isSourceFile(filePath: string): boolean {
        if (!isAbsolute(filePath)) filePath = resolve(rootPath, filePath);
        if (filePath.includes(resolve(rootPath, 'source'))) {
            return true;
        }
        return false;
    }
};
