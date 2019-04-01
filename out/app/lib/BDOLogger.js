"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const path_1 = require("path");
const environment_1 = require("./../utils/environment");
class BDOLogger {
    constructor(params) {
        this.dateFormat = 'DD.MM.YYYY HH:mm:ss';
        this.logFile = 'default.log';
        this.preventConsolePrint = false;
        this.preventFilePrint = false;
        this.logLevel = 'info';
        this.prototypeNames = environment_1.getPrototypeNamesRecursive(this);
        if (params)
            Object.assign(this, params);
    }
    isAllowed(logLevel) {
        let logLevelOrder = ['log', 'debug', 'info', 'warn', 'error'];
        return logLevelOrder.indexOf(logLevel) >= logLevelOrder.indexOf(this.logLevel);
    }
    currentTime() {
        return moment().format(this.dateFormat);
    }
    getLogPoint() {
        let stack = new Error().stack.split('\n');
        let callpoint;
        for (const [index, stackpart] of stack.entries()) {
            if (!index)
                continue;
            if (!environment_1.includesMemberOfList(stackpart, this.prototypeNames, '.ts')) {
                callpoint = stackpart.split(path_1.sep).pop();
                break;
            }
        }
        if (callpoint) {
            callpoint = callpoint.replace(')', '');
        }
        else {
            callpoint = '';
        }
        return callpoint;
    }
    log(message, loglevel = 'log', ...args) {
        if (!this.preventConsolePrint && !['log', 'error'].includes(loglevel)) {
            let header = this.getHeader(loglevel);
            let newArgs = [header, message].concat(args);
            console[loglevel].apply(this, newArgs);
        }
        let parsedString = JSON.stringify(args);
        if (!this.preventFilePrint && loglevel !== 'error') {
            this.writeToFile(loglevel, message + parsedString.substr(1, parsedString.length - 2));
        }
    }
    debug(message, ...args) {
        let apply = [message, 'debug'].concat(args);
        if (this.isAllowed('debug'))
            this.log.apply(this, apply);
    }
    info(message, ...args) {
        let apply = [message, 'info'].concat(args);
        if (this.isAllowed('info'))
            this.log.apply(this, apply);
    }
    warn(message, ...args) {
        let apply = [message, 'warn'].concat(args);
        if (this.isAllowed('warn'))
            this.log.apply(this, apply);
    }
    error(message, ...args) {
        let apply = [message, 'error'].concat(args);
        if (this.isAllowed('error'))
            this.log.apply(this, apply);
    }
}
exports.BDOLogger = BDOLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc291cmNlL2FwcC9saWIvQkRPTG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsaUNBQWlDO0FBQ2pDLCtCQUEyQjtBQUMzQix3REFBMEY7QUFXMUYsTUFBc0IsU0FBUztJQTBEM0IsWUFBWSxNQUErQjtRQW5EcEMsZUFBVSxHQUFZLHFCQUFxQixDQUFDO1FBUTVDLFlBQU8sR0FBWSxhQUFhLENBQUM7UUFRakMsd0JBQW1CLEdBQWEsS0FBSyxDQUFDO1FBUXRDLHFCQUFnQixHQUFhLEtBQUssQ0FBQztRQWVuQyxhQUFRLEdBQWUsTUFBTSxDQUFDO1FBVWxCLG1CQUFjLEdBQWtCLHdDQUEwQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBR2hGLElBQUksTUFBTTtZQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUF3Q1MsU0FBUyxDQUFDLFFBQW1CO1FBQ25DLElBQUksYUFBYSxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzlELE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFTLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBU1MsV0FBVztRQUNqQixPQUFPLE1BQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQVNTLFdBQVc7UUFDakIsSUFBSSxLQUFLLEdBQVksSUFBSSxLQUFLLEVBQUUsQ0FBQyxLQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BELElBQUksU0FBUyxDQUFDO1FBQ2QsS0FBSyxNQUFNLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxJQUFJLEtB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