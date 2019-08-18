#!/usr/bin/env ts-node
/* tslint:disable */
import * as program from "commander";
import * as Rx from "rxjs";
import * as childProcess from "child_process";
import * as readline from "readline";
import { tap, catchError } from "rxjs/operators";
import * as fs from "fs";
import * as path from "path";

program.version("0.0.1");

program
    .option("-v, --verbose", "Log child processes")

program
    .option("-s, --use-swarm", "Uses Docker Swarm")

const execCmd = (command: string, args: string[], stdin?: string) => new Rx.Observable<string>(
    observer => {
        const spawnee = childProcess.spawn(command, args);

        if (stdin) {
            spawnee.stdin.write(stdin);
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
const cmd = ([value]: TemplateStringsArray, ..._: string[]) => {
    const [command, ...args] = value.split(" ");
    const cmd = execCmd(command, args);

    if (program.verbose) {
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
}

const ComposeImpl: OrchestratorImpl = {
    async up() {
        await cmd`docker-compose up -d`
            .pipe(
                catchError(err => Rx.of(err)),
            )
            .toPromise();
    },
    async stop() {
        await cmd`docker-compose stop`
            .pipe(
                catchError(err => Rx.of(err)),
            )
            .toPromise();
    },
    async down() {
        await cmd`docker-compose down`
            .pipe(
                catchError(err => Rx.of(err)),
            )
            .toPromise();
    }
}

function getDockerStackComposeFile(): string {
    const p = path.resolve(__dirname, "../docker-compose.yml");
    console.log(p);
    const file = fs.readFileSync(p);
    return file.toString();
}

function dockerStack(command: string) {
    const stackComposeFile = getDockerStackComposeFile();
    return execCmd(
        "docker",
        ["stack", "-c", "-", ...command.split(" ")],
        stackComposeFile
    );
}

const SwarmImpl: OrchestratorImpl = {
    async up() {
        await dockerStack("deploy game")
            .pipe(
                catchError(err => Rx.of(err))
            )
            .toPromise();
    },
    async stop() {
        console.error("Docker swarm does not support stopping.")
    },
    async down() {
        await dockerStack("rm game")
            .pipe(
                catchError(err => Rx.of(err))
            )
            .toPromise();
    }
}

const orchestrator: OrchestratorImpl =
    program.useSwarm
        ? SwarmImpl
        : ComposeImpl;

async function up() {
    console.log("Creating deployment ...");
    await orchestrator.up();
}

async function stop() {
    console.log("Stopping deployment ...");
    await orchestrator.stop();
}

async function down() {
    console.log("Destroying deployment ...");
    await orchestrator.down();
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

program.parse(process.argv);
