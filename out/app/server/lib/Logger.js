"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors = require("colors");
const graceful_fs_1 = require("graceful-fs");
const path_1 = require("path");
const app_root_path_1 = require("app-root-path");
const lodash_1 = require("lodash");
const BDOLogger_1 = require("~bdo/lib/BDOLogger");
class Logger extends BDOLogger_1.BDOLogger {
    constructor(params) {
        super();
        this.logLevelColors = {
            log: colors.bold.gray,
            debug: colors.bold.green,
            info: colors.bold.cyan,
            warn: colors.bold.yellow,
            error: colors.bold.red
        };
        lodash_1.merge(this, params);
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
}
exports.Logger = Logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvbGliL0xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGlDQUFpQztBQUNqQyw2Q0FBZ0Q7QUFDaEQsK0JBQStCO0FBQy9CLGlEQUFpRDtBQUNqRCxtQ0FBK0I7QUFDL0Isa0RBQTZFO0FBUTdFLE1BQWEsTUFBTyxTQUFRLHFCQUFTO0lBZWpDLFlBQVksTUFBNEI7UUFDcEMsS0FBSyxFQUFFLENBQUM7UUFUSixtQkFBYyxHQUFHO1lBQ3JCLEdBQUcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDckIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSztZQUN4QixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ3RCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDeEIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRztTQUN6QixDQUFDO1FBSUUsY0FBSyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBV1MsU0FBUyxDQUFDLFFBQW1CLEVBQUUsV0FBOEIsU0FBUztRQUM1RSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZDLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEMsSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO1lBQ3hCLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN2RSxNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLE1BQU0saUJBQWlCLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuRCxNQUFNLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQy9DLE9BQU8sSUFBSSxpQkFBaUIsTUFBTSxZQUFZLE1BQU0sYUFBYSxPQUFPLGlCQUFpQixHQUFHLENBQUM7U0FDaEc7UUFDRCxPQUFPLElBQUksYUFBYSxNQUFNLFFBQVEsTUFBTSxXQUFXLE9BQU8sUUFBUSxHQUFHLENBQUM7SUFDOUUsQ0FBQztJQVVTLFdBQVcsQ0FBQyxRQUFtQixFQUFFLE9BQVk7UUFDbkQsTUFBTSxJQUFJLEdBQUcsY0FBTyxDQUFDLG9CQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBVSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEUsTUFBTSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsSUFBSSxPQUFPLElBQUksQ0FBQztRQUNoRSxNQUFNLE1BQU0sR0FBRywrQkFBaUIsQ0FBQyxJQUFJLEVBQUU7WUFDbkMsUUFBUSxFQUFFLE9BQU87WUFDakIsS0FBSyxFQUFFLEdBQUc7WUFDVixTQUFTLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxLQUFLO2dCQUFFLE9BQU8sTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7QUFsRUQsd0JBa0VDIn0=