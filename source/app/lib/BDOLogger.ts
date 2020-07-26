/* tslint:disable:no-console*/
import moment from 'moment';
import { sep } from 'path';
import { includesMemberOfList, getPrototypeNamesRecursive } from '~bdo/utils/util';

export type logLevels = 'log' | 'debug' | 'info' | 'warn' | 'error';
export type printEnvironments = 'console' | 'file' | 'browser';

/**
 * Prints nice formatted strings to console and file and adds some useful information.
 */
export abstract class BDOLogger {
    /**
     * The file to write logging in
     *
     * @memberof BDOLogger
     */
    public logFile?: string = 'default.log';

    /**
     * Disables console printing when logger is not a normal log or error
     *
     * @memberof BDOLogger
     */
    public preventConsolePrint?: boolean = false;

    /**
     * Disables file printing when logger is not an error
     *
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
     * @memberof BDOLogger
     */
    public logLevel?: logLevels = 'debug';

    /**
     * Holds a list of prototype names to determine the log point correctly
     *
     * @memberof BDOLogger
     */
    protected readonly prototypeNames: string[] = getPrototypeNamesRecursive(this);

    constructor(_params?: ConstParams<BDOLogger>) {
        // Just for type save programming
    }

    /**
     * Logs the message to console and file with given log level.
     * If log level is log or error "preventConsolePrint" will be ignored.
     * If log level is error "preventFilePrint" will be ignored.
     *
     * @param message The message which should be logged
     * @param loglevel The log level which effects the colorization
     * @param args Additional arguments for the logging
     * @memberof BDOLogger
     */
    public log(message: any, loglevel: logLevels = 'log', ...args: any[]): void {
        if (loglevel !== 'log' && !this.isAllowed(loglevel)) return;
        if (!this.preventConsolePrint || ['log', 'error'].includes(loglevel)) {
            const header = this.getHeader(loglevel);
            let newArgs: string[] = [];
            if (header instanceof Array) {
                newArgs = newArgs.concat(header);
            } else newArgs.push(header);
            newArgs.push(message);
            newArgs = newArgs.concat(args);
            console[loglevel](...newArgs); // eslint-disable-line
        }
        const parsedString = JSON.stringify(args);
        if (!this.preventFilePrint || loglevel === 'error') {
            this.writeToFile(loglevel, message + parsedString.substr(1, parsedString.length - 2));
        }
    }

    /**
     * Prints a nice green debug information
     *
     * @param message The debug message
     * @param args Additional arguments to add to the logging
     * @memberof BDOLogger
     */
    public debug(message: any, ...args: any): void {
        this.log(message, "debug", ...args);
    }

    /**
     * Prints a nice cyan info text
     *
     * @param message The info message
     * @param args Additional arguments to add to the logging
     * @memberof BDOLogger
     */
    public info(message: any, ...args: any): void {
        this.log(message, "info", ...args);
    }

    /**
     * Prints a barely nice yellow warning :/
     *
     * @param message The warning message
     * @param args Additional arguments to add to the logging
     * @memberof BDOLogger
     */
    public warn(message: any, ...args: any): void {
        this.log(message, "warn", ...args);
    }

    /**
     * Prints a very ugly red error :'(
     *
     * @param message The error message
     * @param args Additional arguments to add to the logging
     * @memberof BDOLogger
     */
    public error(message: any, ...args: any): void {
        this.log(message, "error", ...args);
    }

    /**
     * Collects information from pm2 about the current process
     *
     * @private
     * @returns A string containing the process name, host name and process id
     * @memberof BDOLogger
     */
    protected getProcInfo(): string {
        return `${global.process.env.name || ''} ${global.process.env.hostname || ''} ${global.process.pid}`;
    }

    /**
     * Determines wether a logging is allowed or not.
     *
     * @protected
     * @param logLevel The log level which should be checked for permission to be logged
     * @returns true if is allowed and false else
     * @memberof BDOLogger
     */
    protected isAllowed(logLevel: logLevels): boolean {
        const logLevelOrder = ['log', 'debug', 'info', 'warn', 'error'];
        return logLevelOrder.indexOf(logLevel) >= logLevelOrder.indexOf(<string>this.logLevel);
    }

    /**
     * Creates a formatted file string
     *
     * @private
     * @returns The current formatted time
     * @memberof BDOLogger
     */
    protected currentTime(): string {
        return moment().format('DD.MM.YYYY HH:mm:ss');
    }

    /**
     * Determines the log point of this logger and returns the corresponding
     * file name and line number.
     *
     * @returns the name of the file where the loggin is triggered with line and column
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

    /**
     * Creates the information added header for every log
     *
     * @private
     * @param logLevel The log level which effects the colorization
     * @param printEnv The environment where to print a message
     * @memberof BDOLogger
     */
    protected abstract getHeader(logLevel: logLevels, printEnv?: printEnvironments): string | string[];

    /**
     * Writes the message to configured log file
     *
     * @protected
     * @param logLevel The log level which effects the colorization
     * @param message The message which should be written to file
     * @memberof BDOLogger
     */
    protected abstract writeToFile(logLevel: logLevels, message: any): void;
}
