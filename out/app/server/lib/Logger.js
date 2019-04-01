"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors = require("colors");
const graceful_fs_1 = require("graceful-fs");
const path_1 = require("path");
const app_root_path_1 = require("app-root-path");
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
        if (params)
            Object.assign(this, params);
    }
    getProcInfo() {
        return `${process.env.name || ''} ${process.env.pm_id || ''} ${process.pid}`;
    }
    getHeader(logLevel, printEnv = 'console') {
        let procInfo = this.getProcInfo();
        let currentTime = this.currentTime();
        let upperLogLevel = logLevel.toUpperCase();
        let logPoint = this.getLogPoint();
        if (printEnv === 'console') {
            let formattedLogLevel = this.logLevelColors[logLevel](upperLogLevel);
            let formattedPid = colors.magenta(procInfo);
            let formattedLogPoint = colors.magenta(logPoint);
            let formattedTime = colors.cyan(currentTime);
            return `[${formattedLogLevel} - ${formattedPid} - ${formattedTime} at ${formattedLogPoint}]`;
        }
        return `[${upperLogLevel} - ${procInfo} - ${currentTime} at ${logPoint}]`;
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
}
exports.Logger = Logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvbGliL0xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGlDQUFpQztBQUNqQyw2Q0FBZ0Q7QUFDaEQsK0JBQStCO0FBQy9CLGlEQUFpRDtBQUNqRCxxREFBZ0Y7QUFRaEYsTUFBYSxNQUFPLFNBQVEscUJBQVM7SUFlakMsWUFBWSxNQUE0QjtRQUNwQyxLQUFLLEVBQUUsQ0FBQztRQVRKLG1CQUFjLEdBQUc7WUFDckIsR0FBRyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNyQixLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO1lBQ3hCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDdEIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUN4QixLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHO1NBQ3pCLENBQUM7UUFJRSxJQUFJLE1BQU07WUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBU1MsV0FBVztRQUNqQixPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLEVBQUUsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDakYsQ0FBQztJQVdTLFNBQVMsQ0FBQyxRQUFtQixFQUFFLFdBQThCLFNBQVM7UUFDNUUsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQyxJQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDM0MsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xDLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUN4QixJQUFJLGlCQUFpQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDckUsSUFBSSxZQUFZLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1QyxJQUFJLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakQsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUM3QyxPQUFPLElBQUksaUJBQWlCLE1BQU0sWUFBWSxNQUFNLGFBQWEsT0FBTyxpQkFBaUIsR0FBRyxDQUFDO1NBQ2hHO1FBQ0QsT0FBTyxJQUFJLGFBQWEsTUFBTSxRQUFRLE1BQU0sV0FBVyxPQUFPLFFBQVEsR0FBRyxDQUFDO0lBQzlFLENBQUM7SUFVUyxXQUFXLENBQUMsUUFBbUIsRUFBRSxPQUFZO1FBQ25ELElBQUksSUFBSSxHQUFHLGNBQU8sQ0FBQyxvQkFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xFLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLElBQUksT0FBTyxJQUFJLENBQUM7UUFDOUQsSUFBSSxNQUFNLEdBQUcsK0JBQWlCLENBQUMsSUFBSSxFQUFFO1lBQ2pDLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLEtBQUssRUFBRSxHQUFHO1lBQ1YsU0FBUyxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsS0FBSztnQkFBRSxPQUFPLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBN0VELHdCQTZFQyJ9