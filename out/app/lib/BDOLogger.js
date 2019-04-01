"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
class BDOLogger {
    constructor(params) {
        this.dateFormat = 'DD.MM.YYYY HH:mm:ss';
        this.logFile = 'default.log';
        this.preventConsolePrint = false;
        this.preventFilePrint = false;
        this.logLevel = 'info';
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
    log(message, loglevel = 'log') {
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
exports.BDOLogger = BDOLogger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQkRPTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc291cmNlL2FwcC9saWIvQkRPTG9nZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQWlDO0FBV2pDLE1BQXNCLFNBQVM7SUFnRDNCLFlBQVksTUFBK0I7UUF6Q3BDLGVBQVUsR0FBWSxxQkFBcUIsQ0FBQztRQVE1QyxZQUFPLEdBQVksYUFBYSxDQUFDO1FBUWpDLHdCQUFtQixHQUFhLEtBQUssQ0FBQztRQVF0QyxxQkFBZ0IsR0FBYSxLQUFLLENBQUM7UUFlbkMsYUFBUSxHQUFlLE1BQU0sQ0FBQztRQUdqQyxJQUFJLE1BQU07WUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBd0NTLFNBQVMsQ0FBQyxRQUFtQjtRQUNuQyxJQUFJLGFBQWEsR0FBRyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM5RCxPQUFPLGFBQWEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksYUFBYSxDQUFDLE9BQU8sQ0FBUyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQVNTLFdBQVc7UUFDakIsT0FBTyxNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFXTSxHQUFHLENBQUMsT0FBWSxFQUFFLFdBQXNCLEtBQUs7UUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsSUFBSSxRQUFRLEtBQUssS0FBSyxFQUFFO1lBQ2pELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDckIsT0FBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztTQUN4RDtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLElBQUksUUFBUSxLQUFLLE9BQU87WUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM1RixDQUFDO0lBUU0sS0FBSyxDQUFDLE9BQVk7UUFDckIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFRTSxJQUFJLENBQUMsT0FBWTtRQUNwQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1lBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQVFNLElBQUksQ0FBQyxPQUFZO1FBQ3BCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBUU0sS0FBSyxDQUFDLE9BQVk7UUFDckIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzVELENBQUM7Q0FDSjtBQWxLRCw4QkFrS0MifQ==