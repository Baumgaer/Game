#!/usr/bin/env ts-node
/* tslint:disable */
import * as program from "commander";
import * as Rx from "rxjs";
import * as childProcess from "child_process";
import * as readline from "readline";
import { tap, catchError } from "rxjs/operators";
import * as fs from "fs";
import * as path from "path";
import * as _ from "lodash";
import * as yaml from "js-yaml";

program
    .version("0.0.1")
    .option("-v, --verbose", "Log child processes")
    .option("-s, --use-swarm", "Uses Docker Swarm");

const execCmd = (command: string, args: string[], stdin?: string) => new Rx.Observable<string>(
    observer => {
        const spawnee = childProcess.spawn(command, args);

        if (stdin) {
            spawnee.stdin.write(stdin);
            spawnee.stdin.end();
        }

        readline
            .createInterface({ input: spawnee.stdout, terminal: false })
            .on('line', line => {
                observer.next(line)
            });

        readline
            .createInterface({ input: spawnee.stderr, terminal: false })
            .on('line', line => {
                observer.error(line)
            });

        spawnee.on('close', (code) => {
            if (code === 0) {
                observer.complete();
            } else {
                observer.error(new Error(`child process exited with code ${code}`));
            }
        });
    }
);

/**
 * Tagged template literal,
 * variables are not allowed.
 */
const cmd = (v: string, stdin?: string) => {
    const [command, ...args] = v.split(" ");
    const cmd = execCmd(command, args, stdin);

    if (program.opts().verbose) {
        return cmd.pipe<string>(
            tap(
                console.log,
                console.error
            )
        );
    }

    return cmd;
}

interface OrchestratorImpl {
    up(): Promise<void> | Rx.Observable<any>;
    stop(): Promise<void> | Rx.Observable<any>;
    down(): Promise<void> | Rx.Observable<any>;
    ps(): Promise<void> | Rx.Observable<any>;
}

function dockerCompose(command: string) {
    const config = getComposeConfig(sanitizeConfigToCompose);
    return cmd("docker-compose -f - " + command, config)
            .pipe<string>(
                catchError(err => Rx.of(err)),
            );
}

const ComposeImpl: OrchestratorImpl = {
    up() {
        return dockerCompose("up -d")
                .pipe(tap(console.log));
    },
    stop() {
        return dockerCompose("stop");
    },
    down() {
        return dockerCompose("down");
    },
    ps() {
        return dockerCompose("ps")
            .pipe(
                tap(console.log)
            );
    }
}

function sanitizeConfigToSwarm(config: any): any {
    const compose = Object.assign({}, config);
    delete compose.services.gameserver.build;
    delete compose.services.webserver.build;
    return compose;
}

function sanitizeConfigToCompose(config: any): any {
    const compose = Object.assign({}, config);
    delete compose.services.gameserver.deploy;
    delete compose.services.webserver.deploy;
    return compose;
}

function getComposeConfig(sanitize: (config: any) => any): any {
    const p = path.resolve(__dirname, "../docker-compose.yml");
    const file = fs.readFileSync(p).toString();
    const config = yaml.safeLoad(file);
    const sanitizedConfig = sanitize(config);
    return yaml.safeDump(sanitizedConfig);
}

const DEPLOYMENT_NAME = process.env.SWARM_DEPLOYMENT_NAME || "game";

const SwarmImpl: OrchestratorImpl = {
    async up() {
        await cmd("docker build -t game:latest .").toPromise();
        const swarmComposeFile = getComposeConfig(sanitizeConfigToSwarm);
        await cmd(`docker stack deploy -c - ${DEPLOYMENT_NAME}`, swarmComposeFile).toPromise();
    },
    async stop() {
        console.error("Docker swarm does not support stopping.");
    },
    down() {
        console.log("Destroying Swarm deployment ...");
        return cmd(`docker stack rm ${DEPLOYMENT_NAME}`)
            .pipe(
                tap({
                    complete: () => console.log("... Done")
                })
            );
    },
    ps() {
        return cmd(`docker stack ps ${DEPLOYMENT_NAME}`)
                .pipe(
                    tap(
                        console.log,
                        console.error
                    )
                );
    }
}

const getOrchestrator = _.memoize(
    (): OrchestratorImpl => program.useSwarm
        ? SwarmImpl
        : ComposeImpl
)

async function handle(v: Promise<void> | Rx.Observable<void>) {
    if (Rx.isObservable(v)) {
        await v.toPromise();
    } else {
        await v;
    }
}

async function up() {
    console.log("Creating deployment ...");
    await handle(getOrchestrator().up());
}

async function stop() {
    console.log("Stopping deployment ...");
    await handle(getOrchestrator().stop());
}

async function down() {
    console.log("Destroying deployment ...");
    await handle(getOrchestrator().down());
}

async function ps() {
    await handle(getOrchestrator().ps());
}

program
    .command("up")
    .description("Start the dev environment")
    .action(up);

program
    .command("stop")
    .description("Stop the dev environment")
    .action(stop);

program
    .command("down")
    .description("Destroy the dev environment")
    .action(down);

program
    .command("ps")
    .description("List containers")
    .action(ps);

program.parse(process.argv);