import { BDOLogger, logLevels, printEnvironments } from '~bdo/lib/BDOLogger';
import { baseConstructor } from '~bdo/utils/decorators';

/**
 * Logs colored console output
 *
 * @class Logger
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
        log: 'color: gray; font-weight: bold;',
        debug: 'color: green; font-weight: bold;',
        info: 'color: #00806B; font-weight: bold;',
        warn: 'color: #808000; font-weight: bold;',
        error: 'color: red; font-weight: bold;'
    };

    constructor(params?: ConstParams<Logger>) {
        super(params);
    }

    /**
     * @inheritdoc
     *
     * @protected
     * @param logLevel The log level which effects the colorization
     * @param printEnv The environment where the logging happens. Default: "console"
     * @returns The ready to use header
     * @memberof Logger
     */
    protected getHeader(logLevel: logLevels, printEnv: printEnvironments = 'console'): string | string[] {
        const procInfo = this.getProcInfo();
        const currentTime = this.currentTime();
        const upperLogLevel = logLevel.toUpperCase();
        const logPoint = this.getLogPoint();
        const resetStyle = 'color: black; font-weight: normal';
        const magenta = 'color: #800080; font-weight: normal';
        const cyan = 'color: #00806B; font-weight: normal';
        if (printEnv === 'console') {
            const formattedLogLevel = this.logLevelColors[logLevel];
            const formattedLogPoint = magenta;
            const formattedTime = cyan;
            const formattedProcInfo = magenta;
            return [
                `%c[%c${upperLogLevel} %c- %c${procInfo} %c- %c${currentTime} %cat %c${logPoint}%c]`,
                resetStyle,
                formattedLogLevel,
                resetStyle,
                formattedProcInfo,
                resetStyle,
                formattedTime,
                resetStyle,
                formattedLogPoint,
                resetStyle
            ];
        }
        return `[${upperLogLevel} - ${procInfo} - ${currentTime} - ${logPoint}]`;
    }

    /**
     * @inheritdoc
     *
     * @protected
     * @param _logLevel The log level which effects the colorization
     * @param _message The message to write to the log
     * @memberof Logger
     */
    protected writeToFile(_logLevel: logLevels, _message: any): void {
        // Just do nothing for the first time. Later this function will send the logging to the server
    }
}
