/* eslint-disable camelcase */
const lodash = require('lodash');
// Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
let defaults = {
    instances: 2,
    autostart: true,
    watch: "out/app",
    ignore_watch: [
        "out/app/views",
        "out/app/client",
        "out/app/config",
        "out/app/server/config"
    ],
    log: false,
    merge_logs: true,
    source_map_support: true,
    max_memory_restart: '1G'
};
module.exports = {
    apps: [lodash.merge({}, defaults, {
        name: 'GameServer',
        "node_args": ["--inspect=7000"],
        script: 'out/app/GameServer.js',
        pid_file: "var/pids/gameServer.pid",
        error: "var/logs/gameServerError.log",
        env: {
            NODE_ENV: 'development',
            PORT: 3000
        },
        env_production: {
            NODE_ENV: 'production',
            PORT: 8080
        }
    }), lodash.merge({}, defaults, {
        name: 'WebServer',
        "node_args": ["--inspect=7001"],
        script: 'out/app/WebServer.js',
        pid_file: "var/pids/webServer.pid",
        error: "var/logs/webServerError.log",
        env: {
            NODE_ENV: 'development',
            PORT: 3001
        },
        env_production: {
            NODE_ENV: 'production',
            PORT: 8081
        }
    })]
};
