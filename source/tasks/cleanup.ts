import { resolve, dirname } from 'path';
import { path as rootPath } from 'app-root-path';
import { existsSync, unlinkSync } from 'graceful-fs';
import { ansicolor as colors } from 'ansicolor';
import {
    getCorrespondingFile,
    isSourceFile,
    isAppFile,
    cleanEmptyFoldersRecursively
} from './../utils/projectStructure';

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

    grunt.registerMultiTask('cleanup', 'Cleans up the project on several events', function task() {
        let realSrc = this.filesSrc;
        if (!realSrc.length) realSrc = [grunt.task.current.data.src];
        for (const file of realSrc) {
            const currentFile = resolve(rootPath, file);
            const correspondingFile = getCorrespondingFile(currentFile);
            const exists = existsSync(correspondingFile);
            const isSource = isSourceFile(currentFile);

            let fileToDelete = null;
            if (isSource && exists) fileToDelete = correspondingFile;
            if (!isSource && !exists) fileToDelete = currentFile;
            if (isAppFile(currentFile)) fileToDelete = null;
            if (fileToDelete) {
                grunt.log.ok(`${colors.cyan.bright('Cleanup')}: ${currentFile} ${colors.cyan('=>')} ${fileToDelete}`);
                unlinkSync(fileToDelete);
            }
        }

        // Delete empty folders upwards and recursively until out dir is reached
        const deletedFolders: string[] = [];
        for (let file of realSrc) {
            const currentFile = resolve(rootPath, file);
            const correspondingFile = getCorrespondingFile(currentFile);
            if (isSourceFile(currentFile)) {
                if (existsSync(correspondingFile)) {
                    file = correspondingFile;
                } else continue;
            }
            let myDir = resolve(dirname(file));
            if (!deletedFolders.includes(myDir)) {
                while (myDir) {
                    deletedFolders.push(myDir);
                    cleanEmptyFoldersRecursively(myDir, (folder) => {
                        grunt.log.ok(`${colors.cyan.bright('Cleanup')}: ${folder} `);
                    });
                    if (resolve(rootPath, 'out') === myDir) {
                        break;
                    }
                    myDir = resolve(dirname(myDir));
                }
            }
        }
    });
};
