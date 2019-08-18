#!/usr/bin/env ts-node
/* tslint:disable */
import * as program from "commander";
import * as Rx from "rxjs";
import * as childProcess from "child_process";
import * as readline from "readline";
import { tap, catchError, concat } from "rxjs/operators";
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
        return cmd.pipe(
            tap(
                console.log,
                console.error
            )
        );
    }

    return cmd;
}

interface OrchestratorImpl {
    up(): Promise<void>;
    stop(): Promise<void>;
    down(): Promise<void>;
    ps(): Promise<void>;
}

const ComposeImpl: OrchestratorImpl = {
    async up() {
        await cmd("docker-compose up -d")
            .pipe(
                catchError(err => Rx.of(err)),
            )
            .toPromise();
    },
    async stop() {
        await cmd(`docker-compose stop`)
            .pipe(
                catchError(err => Rx.of(err)),
            )
            .toPromise();
    },
    async down() {
        await cmd(`docker-compose down`)
            .pipe(
                catchError(err => Rx.of(err)),
            )
            .toPromise();
    },
    async ps() {
        await cmd("docker-compose ps")
            .pipe(
                tap(
                    console.log,
                    console.error
                )
            ).toPromise();
    }
}

function sanitizeComposeFileToDockerStack(v: string): string {
    const compose = yaml.safeLoad(v);

    delete compose.services.gameserver.build;
    delete compose.services.webserver.build;

    return yaml.safeDump(compose);
}

function getDockerStackComposeFile(): string {
    const p = path.resolve(__dirname, "../docker-compose.yml");
    const file = fs.readFileSync(p).toString();
    return sanitizeComposeFileToDockerStack(file);
}

const DEPLOYMENT_NAME = process.env.SWARM_DEPLOYMENT_NAME || "game";

const SwarmImpl: OrchestratorImpl = {
    async up() {
        const build = cmd("docker build -t game:latest .")

        const stackComposeFile = getDockerStackComposeFile();
        const deploy = cmd(`docker stack deploy -c - ${DEPLOYMENT_NAME}`, stackComposeFile);

        return build.pipe(concat(deploy)).toPromise();
    },
    async stop() {
        console.error("Docker swarm does not support stopping.");
    },
    async down() {
        await cmd(`docker stack rm ${DEPLOYMENT_NAME}`)
            .pipe(
                catchError(err => Rx.of(err))
            )
            .toPromise();
    },
    async ps() {
        await cmd(`docker stack ps ${DEPLOYMENT_NAME}`)
            .pipe(
                tap(
                    console.log,
                    console.error
                )
            )
            .toPromise();
    }
}

const getOrchestrator = _.memoize(
    (): OrchestratorImpl => program.useSwarm
        ? SwarmImpl
        : ComposeImpl
)

async function up() {
    console.log("Creating deployment ...");
    await getOrchestrator().up();
}

async function stop() {
    console.log("Stopping deployment ...");
    await getOrchestrator().stop();
}

async function down() {
    console.log("Destroying deployment ...");
    await getOrchestrator().down();
}

async function ps() {
    await getOrchestrator().ps();
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