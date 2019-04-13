import { BDOLogger, logLevels, printEnvironments } from './../../../lib/BDOLogger';

/**
 * Logs colored console output
 *
 * @export
 * @class Logger
 * @extends {BDOLogger}
 */
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

    /**
     * @inheritdoc
     *
     * @protected
     * @returns {string}
     * @memberof Logger
     */
    protected getProcInfo(): string {
        return '';
    }

    /**
     * @inheritdoc
     *
     * @protected
     * @param {logLevels} logLevel
     * @param {printEnvironments} [printEnv='console']
     * @returns {(string | string[])}
     * @memberof Logger
     */
    protected getHeader(logLevel: logLevels, printEnv: printEnvironments = 'console'): string | string[] {
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
            return [
                `%c[%c${upperLogLevel} %c- %c${currentTime} %cat %c${logPoint}%c]`,
                resetStyle,
                formattedLogLevel,
                resetStyle,
                formattedTime,
                resetStyle,
                formattedLogPoint,
                resetStyle
            ];
        }
        return `[${upperLogLevel} - ${currentTime} - ${logPoint}]`;
    }

    /**
     * @inheritdoc
     *
     * @protected
     * @param {import("../../../lib/BDOLogger").logLevels} logLevel
     * @param {*} message
     * @memberof Logger
     */
    protected writeToFile(_logLevel: import('../../../lib/BDOLogger').logLevels, _message: any): void {
        // Just do nothing for the first time. Later this function will send the logging to the server
    }
}
