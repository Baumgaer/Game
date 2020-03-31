"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const BDOLogger_1 = require("~bdo/lib/BDOLogger");
const decorators_1 = require("~bdo/utils/decorators");
let Logger = class Logger extends BDOLogger_1.BDOLogger {
    constructor(params) {
        super(params);
        this.logLevelColors = {
            log: 'color: gray; font-weight: bold;',
            debug: 'color: green; font-weight: bold;',
            info: 'color: #00806B; font-weight: bold;',
            warn: 'color: #808000; font-weight: bold;',
            error: 'color: red; font-weight: bold;'
        };
    }
    getHeader(logLevel, printEnv = 'console') {
        const procInfo = this.getProcInfo();
        const currentTime = this.currentTime();
        const upperLogLevel = logLevel.toUpperCase();
        const logPoint = this.getLogPoint();
        const resetStyle = 'color: black; font-weight: normal';
        const magenta = 'color: #800080; font-weight: normal';
        const cyan = 'color: #00806B; font-weight: normal';
        if (printEnv === 'console') {
            const formattedLogLevel = this.logLevelColors[logLevel];
            const formattedLogPoint = magenta;
            const formattedTime = cyan;
            const formattedProcInfo = magenta;
            return [
                `%c[%c${upperLogLevel} %c- %c${procInfo} %c- %c${currentTime} %cat %c${logPoint}%c]`,
                resetStyle,
                formattedLogLevel,
                resetStyle,
                formattedProcInfo,
                resetStyle,
                formattedTime,
                resetStyle,
                formattedLogPoint,
                resetStyle
            ];
        }
        return `[${upperLogLevel} - ${procInfo} - ${currentTime} - ${logPoint}]`;
    }
    writeToFile(_logLevel, _message) {
    }
};
Logger = tslib_1.__decorate([
    decorators_1.baseConstructor(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Logger);
exports.Logger = Logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc291cmNlL2FwcC9jbGllbnQvdHMvbGliL0xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxrREFBNkU7QUFDN0Usc0RBQXdEO0FBVXhELElBQWEsTUFBTSxHQUFuQixNQUFhLE1BQU8sU0FBUSxxQkFBUztJQWVqQyxZQUFZLE1BQTRCO1FBQ3BDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQVRWLG1CQUFjLEdBQUc7WUFDckIsR0FBRyxFQUFFLGlDQUFpQztZQUN0QyxLQUFLLEVBQUUsa0NBQWtDO1lBQ3pDLElBQUksRUFBRSxvQ0FBb0M7WUFDMUMsSUFBSSxFQUFFLG9DQUFvQztZQUMxQyxLQUFLLEVBQUUsZ0NBQWdDO1NBQzFDLENBQUM7SUFJRixDQUFDO0lBV1MsU0FBUyxDQUFDLFFBQW1CLEVBQUUsV0FBOEIsU0FBUztRQUM1RSxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEMsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZDLE1BQU0sYUFBYSxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3QyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEMsTUFBTSxVQUFVLEdBQUcsbUNBQW1DLENBQUM7UUFDdkQsTUFBTSxPQUFPLEdBQUcscUNBQXFDLENBQUM7UUFDdEQsTUFBTSxJQUFJLEdBQUcscUNBQXFDLENBQUM7UUFDbkQsSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO1lBQ3hCLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4RCxNQUFNLGlCQUFpQixHQUFHLE9BQU8sQ0FBQztZQUNsQyxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDM0IsTUFBTSxpQkFBaUIsR0FBRyxPQUFPLENBQUM7WUFDbEMsT0FBTztnQkFDSCxRQUFRLGFBQWEsVUFBVSxRQUFRLFVBQVUsV0FBVyxXQUFXLFFBQVEsS0FBSztnQkFDcEYsVUFBVTtnQkFDVixpQkFBaUI7Z0JBQ2pCLFVBQVU7Z0JBQ1YsaUJBQWlCO2dCQUNqQixVQUFVO2dCQUNWLGFBQWE7Z0JBQ2IsVUFBVTtnQkFDVixpQkFBaUI7Z0JBQ2pCLFVBQVU7YUFDYixDQUFDO1NBQ0w7UUFDRCxPQUFPLElBQUksYUFBYSxNQUFNLFFBQVEsTUFBTSxXQUFXLE1BQU0sUUFBUSxHQUFHLENBQUM7SUFDN0UsQ0FBQztJQVVTLFdBQVcsQ0FBQyxTQUFvQixFQUFFLFFBQWE7SUFFekQsQ0FBQztDQUNKLENBQUE7QUFwRVksTUFBTTtJQURsQiw0QkFBZSxFQUFFOztHQUNMLE1BQU0sQ0FvRWxCO0FBcEVZLHdCQUFNIn0=