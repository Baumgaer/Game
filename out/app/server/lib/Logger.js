"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors = require("colors");
const graceful_fs_1 = require("graceful-fs");
const path_1 = require("path");
const app_root_path_1 = require("app-root-path");
const lodash_1 = require("lodash");
const BDOLogger_1 = require("./../../lib/BDOLogger");
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
    getProcInfo() {
        return `${process.env.name || ''} ${process.env.pm_id || ''} ${process.pid}`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvbGliL0xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGlDQUFpQztBQUNqQyw2Q0FBZ0Q7QUFDaEQsK0JBQStCO0FBQy9CLGlEQUFpRDtBQUNqRCxtQ0FBK0I7QUFDL0IscURBQWdGO0FBUWhGLE1BQWEsTUFBTyxTQUFRLHFCQUFTO0lBZWpDLFlBQVksTUFBNEI7UUFDcEMsS0FBSyxFQUFFLENBQUM7UUFUSixtQkFBYyxHQUFHO1lBQ3JCLEdBQUcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDckIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSztZQUN4QixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ3RCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDeEIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRztTQUN6QixDQUFDO1FBSUUsY0FBSyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBU1MsV0FBVztRQUNqQixPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLEVBQUUsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDakYsQ0FBQztJQVdTLFNBQVMsQ0FBQyxRQUFtQixFQUFFLFdBQThCLFNBQVM7UUFDNUUsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QyxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0MsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUN4QixNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdkUsTUFBTSxZQUFZLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM5QyxNQUFNLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkQsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMvQyxPQUFPLElBQUksaUJBQWlCLE1BQU0sWUFBWSxNQUFNLGFBQWEsT0FBTyxpQkFBaUIsR0FBRyxDQUFDO1NBQ2hHO1FBQ0QsT0FBTyxJQUFJLGFBQWEsTUFBTSxRQUFRLE1BQU0sV0FBVyxPQUFPLFFBQVEsR0FBRyxDQUFDO0lBQzlFLENBQUM7SUFVUyxXQUFXLENBQUMsUUFBbUIsRUFBRSxPQUFZO1FBQ25ELE1BQU0sSUFBSSxHQUFHLGNBQU8sQ0FBQyxvQkFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLElBQUksT0FBTyxJQUFJLENBQUM7UUFDaEUsTUFBTSxNQUFNLEdBQUcsK0JBQWlCLENBQUMsSUFBSSxFQUFFO1lBQ25DLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLEtBQUssRUFBRSxHQUFHO1lBQ1YsU0FBUyxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsS0FBSztnQkFBRSxPQUFPLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBN0VELHdCQTZFQyJ9