#!/usr/bin/env ts-node
/* tslint:disable */
import * as program from "commander";
import * as Rx from "rxjs";
import * as childProcess from "child_process";
import * as readline from "readline";
import { tap, catchError } from "rxjs/operators";

program.version("0.0.1");

program
    .option("-v, --verbose", "Log child processes")

const execCmd = (command: string, args: string[]) => new Rx.Observable<string>(
    observer => {
        const spawnee = childProcess.spawn(command, args);

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

async function up() {
    console.log("Creating deployment ...");
    await cmd`docker-compose up -d`
        .pipe(
            catchError(err => Rx.of(err)),
        )
        .toPromise();
}

async function stop() {
    console.log("Stopping deployment ...");
    await cmd`docker-compose stop`
        .pipe(
            catchError(err => Rx.of(err)),
        )
        .toPromise();
}

async function down() {
    console.log("Destroying deployment ...");
    await cmd`docker-compose down`
        .pipe(
            catchError(err => Rx.of(err)),
        )
        .toPromise();
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
