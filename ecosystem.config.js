/* eslint-disable camelcase */
const lodash = require('lodash');
// Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
let defaults = {
    instances: 2,
    autostart: true,
    restart_delay: 3000,
    max_restarts: 3,
    watch: "source/app",
    watch_options: {
        "followSymlinks": false
    },
    ignore_watch: [
        "source/app/client/**/",
        "source/app/config/**/",
        "source/app/server/config/**/"
    ],
    log: false,
    merge_logs: true,
    source_map_support: true,
    max_memory_restart: '1G'
};
module.exports = JSON.parse(JSON.stringify({
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
}));
