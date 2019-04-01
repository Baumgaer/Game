"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors = require("colors");
const graceful_fs_1 = require("graceful-fs");
const path_1 = require("path");
const app_root_path_1 = require("app-root-path");
const environment_1 = require("../../utils/environment");
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
        if (environment_1.isNodeJS() && printEnv === 'console') {
            let formattedLogLevel = this.logLevelColors[logLevel](upperLogLevel);
            let formattedPid = colors.magenta(procInfo);
            let formattedTime = colors.blue(currentTime);
            return `[${formattedLogLevel} - ${formattedPid} - ${formattedTime}]`;
        }
        return `[${upperLogLevel} - ${procInfo} - ${currentTime}]`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvbGliL0xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLGlDQUFpQztBQUNqQyw2Q0FBZ0Q7QUFDaEQsK0JBQStCO0FBQy9CLGlEQUFpRDtBQUNqRCx5REFBbUQ7QUFDbkQscURBQWdGO0FBUWhGLE1BQWEsTUFBTyxTQUFRLHFCQUFTO0lBZWpDLFlBQVksTUFBNEI7UUFDcEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBVFYsbUJBQWMsR0FBRztZQUNyQixHQUFHLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ3JCLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDeEIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUN0QixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ3hCLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUc7U0FDekIsQ0FBQztJQUlGLENBQUM7SUFTUyxXQUFXO1FBQ2pCLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksRUFBRSxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNqRixDQUFDO0lBV1MsU0FBUyxDQUFDLFFBQW1CLEVBQUUsV0FBOEIsU0FBUztRQUM1RSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JDLElBQUksYUFBYSxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMzQyxJQUFJLHNCQUFRLEVBQUUsSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO1lBQ3RDLElBQUksaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUNyRSxJQUFJLFlBQVksR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVDLElBQUksYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDN0MsT0FBTyxJQUFJLGlCQUFpQixNQUFNLFlBQVksTUFBTSxhQUFhLEdBQUcsQ0FBQztTQUN4RTtRQUNELE9BQU8sSUFBSSxhQUFhLE1BQU0sUUFBUSxNQUFNLFdBQVcsR0FBRyxDQUFDO0lBQy9ELENBQUM7SUFVUyxXQUFXLENBQUMsUUFBbUIsRUFBRSxPQUFZO1FBQ25ELElBQUksSUFBSSxHQUFHLGNBQU8sQ0FBQyxvQkFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2xFLElBQUksSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLElBQUksT0FBTyxJQUFJLENBQUM7UUFDOUQsSUFBSSxNQUFNLEdBQUcsK0JBQWlCLENBQUMsSUFBSSxFQUFFO1lBQ2pDLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLEtBQUssRUFBRSxHQUFHO1lBQ1YsU0FBUyxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsS0FBSztnQkFBRSxPQUFPLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNoQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUNKO0FBMUVELHdCQTBFQyJ9