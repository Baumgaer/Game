import { render } from 'less';
import { path as rootPath } from 'app-root-path';
import { join } from 'path';
import { readFileSync, writeFileSync } from 'graceful-fs';
//@ts-ignore
import * as lessPluginCleanCSS from 'less-plugin-clean-css';

/**
 * Compiles several formats in source folder to corresponding compilation in out folder
 *
 * @param {IGrunt} grunt
 * @returns {void}
 */
module.exports = (grunt: IGrunt): void => {
    grunt.config.merge({
        compile: {
            less: {
                src: 'source/app/client/less/**/*.less',
                program: 'less'
            }
        }
    });

    grunt.event.on('watchChokidar', function(_action: string, filePath: string, target: string) {
        grunt.config(`${target}.src`, filePath);
        grunt.config(`${target}.program`, target.split('.').pop());
    });

    grunt.registerMultiTask('compile', 'Compiles Less', function() {
        let done = this.async();

        let promises: Array<Promise<any>> = [];
        for (const _file of this.filesSrc) {
            if (grunt.task.current.data.program === 'less') {
                promises.push(compileLess());
            }
        }
        Promise.all(promises).then(() => {
            done(`Finished!`);
        });
    });
};

/**
 * Compiles less files to a css bundle
 *
 * @returns {Promise<any>}
 */
function compileLess(): Promise<any> {
    return new Promise<any>((resolve: Function) => {
        let src = join(rootPath, 'source', 'app', 'client', 'less', 'index.less');
        render(readFileSync(src).toString(), {
            filename: src,
            plugins: [
                new lessPluginCleanCSS({
                    advanced: true
                })
            ]
        }).then((output) => {
            let src = join(rootPath, 'out', 'app', 'client', 'css', 'bundle.css');
            writeFileSync(src, output.css, {
                encoding: 'utf-8'
            });
            resolve();
        });
    });
}
