"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const colors_1 = tslib_1.__importDefault(require("colors"));
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
            log: colors_1.default.bold.gray,
            debug: colors_1.default.bold.green,
            info: colors_1.default.bold.cyan,
            warn: colors_1.default.bold.yellow,
            error: colors_1.default.bold.red
        };
    }
    getHeader(logLevel, printEnv = 'console') {
        const procInfo = this.getProcInfo();
        const currentTime = this.currentTime();
        const upperLogLevel = logLevel.toUpperCase();
        const logPoint = this.getLogPoint();
        if (printEnv === 'console') {
            const formattedLogLevel = this.logLevelColors[logLevel](upperLogLevel);
            const formattedPid = colors_1.default.magenta(procInfo);
            const formattedLogPoint = colors_1.default.magenta(logPoint);
            const formattedTime = colors_1.default.cyan(currentTime);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc291cmNlL2FwcC9zZXJ2ZXIvbGliL0xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSw0REFBNEI7QUFDNUIsNkNBQWdEO0FBQ2hELG1DQUEyQztBQUMzQywrQkFBd0M7QUFDeEMsaURBQWlEO0FBQ2pELHNEQUF3RDtBQUN4RCxrREFBNkU7QUFTN0UsSUFBYSxNQUFNLEdBQW5CLE1BQWEsTUFBTyxTQUFRLHFCQUFTO0lBZWpDLFlBQVksTUFBNEI7UUFDcEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBVFYsbUJBQWMsR0FBRztZQUNyQixHQUFHLEVBQUUsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUNyQixLQUFLLEVBQUUsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsS0FBSztZQUN4QixJQUFJLEVBQUUsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTtZQUN0QixJQUFJLEVBQUUsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsTUFBTTtZQUN4QixLQUFLLEVBQUUsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsR0FBRztTQUN6QixDQUFDO0lBSUYsQ0FBQztJQVdTLFNBQVMsQ0FBQyxRQUFtQixFQUFFLFdBQThCLFNBQVM7UUFDNUUsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QyxNQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0MsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUN4QixNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdkUsTUFBTSxZQUFZLEdBQUcsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUMsTUFBTSxpQkFBaUIsR0FBRyxnQkFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuRCxNQUFNLGFBQWEsR0FBRyxnQkFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMvQyxPQUFPLElBQUksaUJBQWlCLE1BQU0sWUFBWSxNQUFNLGFBQWEsT0FBTyxpQkFBaUIsR0FBRyxDQUFDO1NBQ2hHO1FBQ0QsT0FBTyxJQUFJLGFBQWEsTUFBTSxRQUFRLE1BQU0sV0FBVyxPQUFPLFFBQVEsR0FBRyxDQUFDO0lBQzlFLENBQUM7SUFVUyxXQUFXLENBQUMsUUFBbUIsRUFBRSxPQUFZO1FBQ25ELE1BQU0sSUFBSSxHQUFHLGNBQU8sQ0FBQyxvQkFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQVUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLElBQUksT0FBTyxJQUFJLENBQUM7UUFDaEUsYUFBUyxDQUFDLGNBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pCLE1BQU0sTUFBTSxHQUFHLCtCQUFpQixDQUFDLElBQUksRUFBRTtZQUNuQyxRQUFRLEVBQUUsT0FBTztZQUNqQixLQUFLLEVBQUUsR0FBRztZQUNWLFNBQVMsRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLEtBQUs7Z0JBQUUsT0FBTyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSixDQUFBO0FBbEVZLE1BQU07SUFEbEIsNEJBQWUsRUFBRTs7R0FDTCxNQUFNLENBa0VsQjtBQWxFWSx3QkFBTSJ9