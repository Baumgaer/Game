import * as moment from 'moment';

export type logLevels = 'log' | 'debug' | 'info' | 'warn' | 'error';
export type printEnvironments = 'console' | 'file' | 'browser';

/**
 * Prints nice formated strings to console and file and adds some useful information.
 *
 * @export
 * @class BDOLogger
 */
export abstract class BDOLogger {
    /**
     * A momentJS time format string
     *
     * @type {string}
     * @memberof BDOLogger
     */
    public dateFormat?: string = 'DD.MM.YYYY HH:mm:ss';

    /**
     * The file to write logging in
     *
     * @type {string}
     * @memberof BDOLogger
     */
    public logFile?: string = 'default.log';

    /**
     * Disables console printing when logger is not a normal log
     *
     * @type {boolean}
     * @memberof BDOLogger
     */
    public preventConsolePrint?: boolean = false;

    /**
     * Disables file printing when logger is not an error
     *
     * @type {boolean}
     * @memberof BDOLogger
     */
    public preventFilePrint?: boolean = false;

    /**
     * Disables logger which are lower than the given log level.
     * Log levels from low to high are:
     *
     * 1. log - will always be executed
     * 2. debug
     * 3. info
     * 4. warn
     * 5. error
     *
     * @type {logLevels}
     * @memberof BDOLogger
     */
    public logLevel?: logLevels = 'info';

    constructor(params?: ConstParams<BDOLogger>) {
        if (params) Object.assign(this, params);
    }

    /**
     * Collects information from pm2 about the current process
     *
     * @private
     * @returns {string}
     * @memberof BDOLogger
     */
    protected abstract getProcInfo(): string;

    /**
     * Creates the information added header for every log
     *
     * @private
     * @param {string} logLevel
     * @param {printEnvironments} [printEnv]
     * @returns {string}
     * @memberof BDOLogger
     */
    protected abstract getHeader(logLevel: logLevels, printEnv?: printEnvironments): string;

    /**
     * Writes the message to configured log file
     *
     * @protected
     * @param {logLevels} logLevel
     * @param {*} message
     * @memberof BDOLogger
     */
    protected abstract writeToFile(logLevel: logLevels, message: any): void;

    /**
     * Determines wether a logging is allowed or not.
     *
     * @protected
     * @param {logLevels} logLevel
     * @returns
     * @memberof BDOLogger
     */
    protected isAllowed(logLevel: logLevels): boolean {
        let logLevelOrder = ['log', 'debug', 'info', 'warn', 'error'];
        return logLevelOrder.indexOf(logLevel) >= logLevelOrder.indexOf(<string>this.logLevel);
    }

    /**
     * Creates a formated file string
     *
     * @private
     * @returns {string}
     * @memberof BDOLogger
     */
    protected currentTime(): string {
        return moment().format(this.dateFormat);
    }

    /**
     * Logs the message to console and file with given log level.
     * If log level is log "preventConsolePrint" will be ignored.
     * If log level is error "preventFilePrint" will be ignored.
     *
     * @param {*} message
     * @param {logLevels} [loglevel='log']
     * @memberof BDOLogger
     */
    public log(message: any, loglevel: logLevels = 'log'): void {
        if (!this.preventConsolePrint && loglevel !== 'log') {
            let header = this.getHeader(loglevel);
            (<IndexStructure>console)[loglevel](header, message);
        }
        if (!this.preventFilePrint && loglevel !== 'error') this.writeToFile(loglevel, message);
    }

    /**
     * Prints a nice green debug information
     *
     * @param {*} message
     * @memberof BDOLogger
     */
    public debug(message: any): void {
        if (this.isAllowed('debug')) this.log(message, 'debug');
    }

    /**
     * Prints a nice cyan info text
     *
     * @param {*} message
     * @memberof BDOLogger
     */
    public info(message: any): void {
        if (this.isAllowed('info')) this.log(message, 'info');
    }

    /**
     * Prints a barely nice yellow warning :/
     *
     * @param {*} message
     * @memberof BDOLogger
     */
    public warn(message: any): void {
        if (this.isAllowed('warn')) this.log(message, 'warn');
    }

    /**
     * Prints a very ugly red error :'(
     *
     * @param {*} message
     * @memberof BDOLogger
     */
    public error(message: any): void {
        if (this.isAllowed('error')) this.log(message, 'error');
    }
}
