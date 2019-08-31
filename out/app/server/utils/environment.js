"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const os = require("os");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zb3VyY2UvYXBwL3NlcnZlci91dGlscy9lbnZpcm9ubWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlCQUF5QjtBQUtaLFFBQUEsSUFBSSxHQUFHO0lBQ2hCLEdBQUcsRUFBRTtRQUNELElBQUksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUk7UUFDdEIsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUU7UUFDdkIsUUFBUSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUTtLQUNqQztJQUNELEdBQUcsRUFBRSxPQUFPLENBQUMsR0FBRztDQUNuQixDQUFDO0FBTVcsUUFBQSxrQkFBa0IsR0FBRztJQUM5QixPQUFPLEVBQUUsWUFBSTtDQUNoQixDQUFDIn0=