"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors = require("colors");
const graceful_fs_1 = require("graceful-fs");
const path_1 = require("path");
const app_root_path_1 = require("app-root-path");
const BDOLogger_1 = require("./../../lib/BDOLogger");
class Logger extends BDOLogger_1.BDOLogger {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvbGliL0xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGlDQUFpQztBQUNqQyw2Q0FBZ0Q7QUFDaEQsK0JBQStCO0FBQy9CLGlEQUFpRDtBQUNqRCxxREFBZ0Y7QUFRaEYsTUFBYSxNQUFPLFNBQVEscUJBQVM7SUFlakMsWUFBWSxNQUE0QjtRQUNwQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFUVixtQkFBYyxHQUFHO1lBQ3JCLEdBQUcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUk7WUFDckIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSztZQUN4QixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ3RCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU07WUFDeEIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRztTQUN6QixDQUFDO0lBSUYsQ0FBQztJQVNTLFdBQVc7UUFDakIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFFLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2pGLENBQUM7SUFXUyxTQUFTLENBQUMsUUFBbUIsRUFBRSxXQUE4QixTQUFTO1FBQzVFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckMsSUFBSSxhQUFhLEdBQUcsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzNDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsQyxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDeEIsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3JFLElBQUksWUFBWSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDNUMsSUFBSSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pELElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDN0MsT0FBTyxJQUFJLGlCQUFpQixNQUFNLFlBQVksTUFBTSxhQUFhLE9BQU8saUJBQWlCLEdBQUcsQ0FBQztTQUNoRztRQUNELE9BQU8sSUFBSSxhQUFhLE1BQU0sUUFBUSxNQUFNLFdBQVcsT0FBTyxRQUFRLEdBQUcsQ0FBQztJQUM5RSxDQUFDO0lBVVMsV0FBVyxDQUFDLFFBQW1CLEVBQUUsT0FBWTtRQUNuRCxJQUFJLElBQUksR0FBRyxjQUFPLENBQUMsb0JBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFVLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRSxJQUFJLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxJQUFJLE9BQU8sSUFBSSxDQUFDO1FBQzlELElBQUksTUFBTSxHQUFHLCtCQUFpQixDQUFDLElBQUksRUFBRTtZQUNqQyxRQUFRLEVBQUUsT0FBTztZQUNqQixLQUFLLEVBQUUsR0FBRztZQUNWLFNBQVMsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsT0FBTyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQTVFRCx3QkE0RUMifQ==