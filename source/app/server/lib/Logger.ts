/* tslint:disable:no-console*/
import { createWriteStream } from 'graceful-fs';
import { sync as mkDirSync } from "mkdirp";
import { resolve, dirname } from 'path';
import { path as rootPath } from 'app-root-path';
import { baseConstructor } from '~bdo/utils/decorators';
import { BDOLogger, logLevels } from '~bdo/lib/BDOLogger';

/**
 * Logs colored console output and writes to files
 *
 * @extends BDOLogger
 */
@baseConstructor()
export class Logger extends BDOLogger {

    constructor(params?: ConstParams<Logger>) {
        super(params);
    }

    /**
     * @inheritdoc
     *
     * @protected
     * @param logLevel the loglevel which effects the colorization
     * @param message the message which should be written to a file. Can be any data structure
     * @memberof Logger
     */
    protected writeToFile(logLevel: logLevels, message: unknown): void {
        const path = resolve(rootPath, 'var', 'logs', <string>this.logFile);
        const data = `${this.getHeader(logLevel, 'file')} ${message}\n`;
        mkDirSync(dirname(path));
        const stream = createWriteStream(path, {
            encoding: 'utf-8',
            flags: 'a',
            autoClose: true
        });

        stream.write(data, (error) => {
            if (!error) return stream.end();
            console.error(error); // eslint-disable-line
        });
    }
}
