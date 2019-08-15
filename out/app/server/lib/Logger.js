"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const colors = require("colors");
const graceful_fs_1 = require("graceful-fs");
const mkdirp_1 = require("mkdirp");
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
        mkdirp_1.sync(path_1.dirname(path));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvbGliL0xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxpQ0FBaUM7QUFDakMsNkNBQWdEO0FBQ2hELG1DQUEyQztBQUMzQywrQkFBd0M7QUFDeEMsaURBQWlEO0FBQ2pELHNEQUF3RDtBQUN4RCxrREFBNkU7QUFTN0UsSUFBYSxNQUFNLEdBQW5CLE1BQWEsTUFBTyxTQUFRLHFCQUFTO0lBZWpDLFlBQVksTUFBNEI7UUFDcEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBVFYsbUJBQWMsR0FBRztZQUNyQixHQUFHLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ3JCLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUs7WUFDeEIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUN0QixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQ3hCLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUc7U0FDekIsQ0FBQztJQUlGLENBQUM7SUFXUyxTQUFTLENBQUMsUUFBbUIsRUFBRSxXQUE4QixTQUFTO1FBQzVFLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQyxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdkMsTUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdDLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQyxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDeEIsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3ZFLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25ELE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDL0MsT0FBTyxJQUFJLGlCQUFpQixNQUFNLFlBQVksTUFBTSxhQUFhLE9BQU8saUJBQWlCLEdBQUcsQ0FBQztTQUNoRztRQUNELE9BQU8sSUFBSSxhQUFhLE1BQU0sUUFBUSxNQUFNLFdBQVcsT0FBTyxRQUFRLEdBQUcsQ0FBQztJQUM5RSxDQUFDO0lBVVMsV0FBVyxDQUFDLFFBQW1CLEVBQUUsT0FBWTtRQUNuRCxNQUFNLElBQUksR0FBRyxjQUFPLENBQUMsb0JBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFVLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwRSxNQUFNLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxJQUFJLE9BQU8sSUFBSSxDQUFDO1FBQ2hFLGFBQVMsQ0FBQyxjQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN6QixNQUFNLE1BQU0sR0FBRywrQkFBaUIsQ0FBQyxJQUFJLEVBQUU7WUFDbkMsUUFBUSxFQUFFLE9BQU87WUFDakIsS0FBSyxFQUFFLEdBQUc7WUFDVixTQUFTLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxLQUFLO2dCQUFFLE9BQU8sTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0osQ0FBQTtBQWxFWSxNQUFNO0lBRGxCLDRCQUFlLEVBQUU7O0dBQ0wsTUFBTSxDQWtFbEI7QUFsRVksd0JBQU0ifQ==