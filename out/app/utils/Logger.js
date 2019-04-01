"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors = require("colors");
const moment = require("moment");
const graceful_fs_1 = require("graceful-fs");
const path_1 = require("path");
const app_root_path_1 = require("app-root-path");
const environment_1 = require("./environment");
class Logger {
    constructor(params) {
        this.dateFormat = 'DD.MM.YYYY HH:mm:ss';
        this.logFile = 'default.log';
        this.preventConsolePrint = false;
        this.preventFilePrint = false;
        this.logLevel = 'info';
        this.logLevelColors = {
            log: colors.bold.gray,
            debug: colors.bold.green,
            info: colors.bold.cyan,
            warn: colors.bold.yellow,
            error: colors.bold.red
        };
        if (params)
            Object.assign(this, params);
    }
    isAllowed(logLevel) {
        let logLevelOrder = ['log', 'debug', 'info', 'warn', 'error'];
        return logLevelOrder.indexOf(logLevel) >= logLevelOrder.indexOf(this.logLevel);
    }
    getProcInfo() {
        return `${process.env.name || ''} ${process.env.pm_id || ''} ${process.pid}`;
    }
    getHeader(logLevel, printEnv = 'console') {
        let procInfo = this.getProcInfo();
        let currentTime = this.currentTime();
        let upperLogLevel = logLevel.toUpperCase();
        if (environment_1.isNodeJS() && printEnv === 'console') {
            let formattedLogLevel = this.logLevelColors[logLevel](upperLogLevel);
            let formattedPid = colors.magenta(procInfo);
            let formattedTime = colors.blue(currentTime);
            return `[${formattedLogLevel} - ${formattedPid} - ${formattedTime}]`;
        }
        return `[${upperLogLevel} - ${procInfo} - ${currentTime}]`;
    }
    currentTime() {
        return moment().format(this.dateFormat);
    }
    writeToFile(logLevel, message) {
        let path = path_1.resolve(app_root_path_1.path, 'var', 'logs', this.logFile);
        let data = `${this.getHeader(logLevel, 'file')} ${message}\n`;
        let stream = graceful_fs_1.createWriteStream(path, {
            encoding: 'utf-8',
            flags: 'a',
            autoClose: true
        });
        stream.write(data, (error) => {
            if (!error)
                return stream.end();
            console.error(error);
        });
    }
    async log(message, loglevel = 'log') {
        if (!this.preventConsolePrint && loglevel !== 'log') {
            let header = this.getHeader(loglevel);
            console[loglevel](header, message);
        }
        if (!this.preventFilePrint && loglevel !== 'error')
            this.writeToFile(loglevel, message);
    }
    debug(message) {
        if (this.isAllowed('debug'))
            this.log(message, 'debug');
    }
    info(message) {
        if (this.isAllowed('info'))
            this.log(message, 'info');
    }
    warn(message) {
        if (this.isAllowed('warn'))
            this.log(message, 'warn');
    }
    error(message) {
        if (this.isAllowed('error'))
            this.log(message, 'error');
    }
}
exports.Logger = Logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc291cmNlL2FwcC91dGlscy9Mb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxpQ0FBaUM7QUFDakMsaUNBQWlDO0FBQ2pDLDZDQUFnRDtBQUNoRCwrQkFBK0I7QUFDL0IsaURBQWlEO0FBQ2pELCtDQUF5QztBQVN6QyxNQUFhLE1BQU07SUE4RGYsWUFBWSxNQUE0QjtRQXZEakMsZUFBVSxHQUFZLHFCQUFxQixDQUFDO1FBUTVDLFlBQU8sR0FBWSxhQUFhLENBQUM7UUFRakMsd0JBQW1CLEdBQWEsS0FBSyxDQUFDO1FBUXRDLHFCQUFnQixHQUFhLEtBQUssQ0FBQztRQWVuQyxhQUFRLEdBQWUsTUFBTSxDQUFDO1FBUTdCLG1CQUFjLEdBQUc7WUFDckIsR0FBRyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNyQixLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3hCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDdEIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUN4QixLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHO1NBQ3pCLENBQUM7UUFHRSxJQUFJLE1BQU07WUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBVU8sU0FBUyxDQUFDLFFBQW1CO1FBQ2pDLElBQUksYUFBYSxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzlELE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFTLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBU08sV0FBVztRQUNmLE9B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