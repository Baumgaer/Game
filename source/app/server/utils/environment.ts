import os from "os";
/**
 * Provides a minimal interface for the frontend, which is passed by the server
 * to access process information.
 */
export const proc = {
    env: {
        name: process.env.NAME,
        hostname: os.hostname(),
        NODE_ENV: process.env.NODE_ENV
    },
    pid: process.pid
};

/**
 * Defines global template variables which corresponds in best case to server
 * side variables so that all files can access them via the global object.
 */
export const globalTemplateVars = {
    process: proc
};
