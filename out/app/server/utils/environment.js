"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const os = tslib_1.__importStar(require("os"));
exports.proc = {
    env: {
        name: process.env.name,
        hostname: os.hostname(),
        NODE_ENV: process.env.NODE_ENV
    },
    pid: process.pid
};
exports.globalTemplateVars = {
    process: exports.proc
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zb3VyY2UvYXBwL3NlcnZlci91dGlscy9lbnZpcm9ubWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBeUI7QUFLWixRQUFBLElBQUksR0FBRztJQUNoQixHQUFHLEVBQUU7UUFDRCxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJO1FBQ3RCLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxFQUFFO1FBQ3ZCLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVE7S0FDakM7SUFDRCxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUc7Q0FDbkIsQ0FBQztBQU1XLFFBQUEsa0JBQWtCLEdBQUc7SUFDOUIsT0FBTyxFQUFFLFlBQUk7Q0FDaEIsQ0FBQyJ9