"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const colors = require("colors");
const graceful_fs_1 = require("graceful-fs");
const path_1 = require("path");
const app_root_path_1 = require("app-root-path");
const decorators_1 = require("~bdo/utils/decorators");
const BDOLogger_1 = require("~bdo/lib/BDOLogger");
let Logger = class Logger extends BDOLogger_1.BDOLogger {
    constructor(params) {
        super(params);
        this.logLevelColors = {
            log: colors.bold.gray,
            debug: colors.bold.green,
            info: colors.bold.cyan,
            warn: colors.bold.yellow,
            error: colors.bold.red
        };
    }
    getHeader(logLevel, printEnv = 'console') {
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
    writeToFile(logLevel, message) {
        const path = path_1.resolve(app_root_path_1.path, 'var', 'logs', this.logFile);
        const data = `${this.getHeader(logLevel, 'file')} ${message}\n`;
        const stream = graceful_fs_1.createWriteStream(path, {
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
};
Logger = tslib_1.__decorate([
    decorators_1.baseConstructor(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Logger);
exports.Logger = Logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvbGliL0xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxpQ0FBaUM7QUFDakMsNkNBQWdEO0FBQ2hELCtCQUErQjtBQUMvQixpREFBaUQ7QUFDakQsc0RBQXdEO0FBQ3hELGtEQUE2RTtBQVM3RSxJQUFhLE1BQU0sR0FBbkIsTUFBYSxNQUFPLFNBQVEscUJBQVM7SUFlakMsWUFBWSxNQUE0QjtRQUNwQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFUVixtQkFBYyxHQUFHO1lBQ3JCLEdBQUcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDckIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSztZQUN4QixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ3RCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDeEIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRztTQUN6QixDQUFDO0lBSUYsQ0FBQztJQVdTLFNBQVMsQ0FBQyxRQUFtQixFQUFFLFdBQThCLFNBQVM7UUFDNUUsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QyxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0MsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUN4QixNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdkUsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QyxNQUFNLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkQsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMvQyxPQUFPLElBQUksaUJBQWlCLE1BQU0sWUFBWSxNQUFNLGFBQWEsT0FBTyxpQkFBaUIsR0FBRyxDQUFDO1NBQ2hHO1FBQ0QsT0FBTyxJQUFJLGFBQWEsTUFBTSxRQUFRLE1BQU0sV0FBVyxPQUFPLFFBQVEsR0FBRyxDQUFDO0lBQzlFLENBQUM7SUFVUyxXQUFXLENBQUMsUUFBbUIsRUFBRSxPQUFZO1FBQ25ELE1BQU0sSUFBSSxHQUFHLGNBQU8sQ0FBQyxvQkFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLElBQUksT0FBTyxJQUFJLENBQUM7UUFDaEUsTUFBTSxNQUFNLEdBQUcsK0JBQWlCLENBQUMsSUFBSSxFQUFFO1lBQ25DLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLEtBQUssRUFBRSxHQUFHO1lBQ1YsU0FBUyxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsS0FBSztnQkFBRSxPQUFPLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKLENBQUE7QUFqRVksTUFBTTtJQURsQiw0QkFBZSxFQUFFOztHQUNMLE1BQU0sQ0FpRWxCO0FBakVZLHdCQUFNIn0=