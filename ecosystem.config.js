// Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
const defaults = {
    instances: 1,
    autostart: true,
    restart_delay: 5000,
    max_restarts: 3,
    watch: "out/app",
    ignore_watch: [
        "out/app/client",
        "out/app/config",
        "out/app/server/config"
    ],
    log: false,
    merge_logs: true,
    source_map_support: true,
    max_memory_restart: '1G'
};
const gameServer = Object.assign({}, defaults, {
    name: 'GameServer',
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
});
const webServer = Object.assign({}, defaults, {
    name: 'WebServer',
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
});

module.exports = {
    apps: [gameServer, webServer]
};
