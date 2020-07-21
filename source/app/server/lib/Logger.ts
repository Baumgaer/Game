/* tslint:disable:no-console*/
import colors from 'colors';
import { createWriteStream } from 'graceful-fs';
import { sync as mkDirSync } from "mkdirp";
import { resolve, dirname } from 'path';
import { path as rootPath } from 'app-root-path';
import { baseConstructor } from '~bdo/utils/decorators';
import { BDOLogger, logLevels, printEnvironments } from '~bdo/lib/BDOLogger';

/**
 * Logs colored console output and writes to files
 *
 * @extends BDOLogger
 */
@baseConstructor()
export class Logger extends BDOLogger {
    /**
     * Colors to indicate current log level
     *
     * @private
     * @memberof Logger
     */
    private logLevelColors = {
        log: colors.bold.gray,
        debug: colors.bold.green,
        info: colors.bold.cyan,
        warn: colors.bold.yellow,
        error: colors.bold.red
    };

    constructor(params?: ConstParams<Logger>) {
        super(params);
    }

    /**
     * @inheritdoc
     *
     * @protected
     * @param logLevel level of the logging which effects the colorization
     * @param printEnv effects the environment where the header will be printed. Default: console
     * @returns The ready to use and formatted header
     * @memberof Logger
     */
    protected getHeader(logLevel: logLevels, printEnv: printEnvironments = 'console'): string {
        const procInfo = this.getProcInfo();
        const currentTime = this.currentTime();
        const upperLogLevel = logLevel.toUpperCase();
        const logPoint = this.getLogPoint();
        if (printEnv === 'console') {
            const formattedLogLevel = this.logLevelColors[logLevel](upperLogLevel);
            const formattedPid = colors.magenta(procInfo);
            const formattedLogPoint = colors.magenta(logPoint);
            const formattedTime = colors.cyan(currentTime);
            return `[${formattedLogLevel} - ${formattedPid} - ${formattedTime} at ${formattedLogPoint}]`;
        }
        return `[${upperLogLevel} - ${procInfo} - ${currentTime} at ${logPoint}]`;
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
