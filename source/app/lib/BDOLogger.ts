/* tslint:disable:no-console*/
import * as moment from 'moment';
import { sep } from 'path';
import { includesMemberOfList, getPrototypeNamesRecursive } from './../utils/environment';

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
     * The file to write logging in
     *
     * @type {string}
     * @memberof BDOLogger
     */
    public logFile?: string = 'default.log';

    /**
     * Disables console printing when logger is not a normal log or error
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
    public logLevel?: logLevels = 'debug';

    /**
     * Holds a list of prototype names to determine the log point correctly
     *
     * @protected
     * @readonly
     * @type {string[]}
     * @memberof BDOLogger
     */
    protected readonly prototypeNames: string[] = getPrototypeNamesRecursive(this);

    /**
     * Logs the message to console and file with given log level.
     * If log level is log or error "preventConsolePrint" will be ignored.
     * If log level is error "preventFilePrint" will be ignored.
     *
     * @param {*} message
     * @param {logLevels} [loglevel='log']
     * @memberof BDOLogger
     */
    public log(message: any, loglevel: logLevels = 'log', ...args: any[]): void {
        if (!this.preventConsolePrint || ['log', 'error'].includes(loglevel)) {
            const header = this.getHeader(loglevel);
            let newArgs: string[] = [];
            if (header instanceof Array) {
                newArgs = newArgs.concat(header);
            } else newArgs.push(header);
            newArgs.push(message);
            newArgs = newArgs.concat(args);
            (<IndexStructure>console)[loglevel].apply(this, newArgs);
        }
        const parsedString = JSON.stringify(args);
        if (!this.preventFilePrint || loglevel === 'error') {
            this.writeToFile(loglevel, message + parsedString.substr(1, parsedString.length - 2));
        }
    }

    /**
     * Prints a nice green debug information
     *
     * @param {*} message
     * @memberof BDOLogger
     */
    public debug(message: any, ...args: any): void {
        const apply = [message, 'debug'].concat(args);
        if (this.isAllowed('debug')) this.log.apply(this, <[any, logLevels]>apply);
    }

    /**
     * Prints a nice cyan info text
     *
     * @param {*} message
     * @memberof BDOLogger
     */
    public info(message: any, ...args: any): void {
        const apply = [message, 'info'].concat(args);
        if (this.isAllowed('info')) this.log.apply(this, <[any, logLevels]>apply);
    }

    /**
     * Prints a barely nice yellow warning :/
     *
     * @param {*} message
     * @memberof BDOLogger
     */
    public warn(message: any, ...args: any): void {
        const apply = [message, 'warn'].concat(args);
        if (this.isAllowed('warn')) this.log.apply(this, <[any, logLevels]>apply);
    }

    /**
     * Prints a very ugly red error :'(
     *
     * @param {*} message
     * @memberof BDOLogger
     */
    public error(message: any, ...args: any): void {
        const apply = [message, 'error'].concat(args);
        if (this.isAllowed('error')) this.log.apply(this, <[any, logLevels]>apply);
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
    protected abstract getHeader(logLevel: logLevels, printEnv?: printEnvironments): string | string[];

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
        const logLevelOrder = ['log', 'debug', 'info', 'warn', 'error'];
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
        return moment().format('DD.MM.YYYY HH:mm:ss');
    }

    /**
     * Determines the log point of this logger and returns the corresponding
     * file name and line number.
     *
     * @returns {string}
     * @memberof Logger
     */
    protected getLogPoint(): string {
        const stack = (<string>new Error().stack).split('\n');
        let callpoint;
        for (const [index, stackpart] of stack.entries()) {
            if (!index) continue;
            if (!includesMemberOfList(stackpart, this.prototypeNames, '.ts')) {
                callpoint = stackpart.split(sep).pop();
                break;
            }
        }
        if (callpoint) {
            callpoint = callpoint.replace(')', '');
        } else {
            callpoint = '';
        }
        return callpoint;
    }
}
