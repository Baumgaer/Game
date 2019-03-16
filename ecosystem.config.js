/* eslint-disable camelcase */
let ignoreWatch = [
    "out/app/views",
    "out/app/client",
    "out/app/config",
    "out/app/server/config"
];

let watch = "out/app";

module.exports = {
    apps: [{
        name: 'GameServer',
        script: './out/app/GameServer.js',

        // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
        source_map_support: true,
        log: false,
        pid_file: "var/pids/gameServer.pid",
        error: "var/logs/gameServerError.log",
        merge_logs: true,
        instances: 2,
        autorestart: true,
        watch: watch,
        ignore_watch: ignoreWatch,
        max_memory_restart: '1G',
        env: {
            NODE_ENV: 'development',
            PORT: 3000,
            SUBDOMAIN: "game"
        },
        env_production: {
            NODE_ENV: 'production',
            PORT: 8080,
            SUBDOMAIN: "game"
        }
    }]
};
