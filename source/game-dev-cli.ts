#!/usr/bin/env ts-node --transpile-only
/* tslint:disable */
import * as program from "commander";
import * as Rx from "rxjs";
import * as childProcess from "child_process";
import * as readline from "readline";
import { tap, catchError, map, reduce, mergeMap } from "rxjs/operators";
import * as fs from "fs";
import * as path from "path";
import * as _ from "lodash";
import * as yaml from "js-yaml";

program
    .version("0.0.1")
    .option("-v, --verbose", "Log child processes")
    .option("-s, --swarm", "Uses Docker Swarm")
    .option("-f, --follow", "Follow logs");

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
    logs(): Promise<void> | Rx.Observable<any>;
}

function dockerCompose(command: string) {
    const config = getComposeConfig(sanitizeConfigToCompose);
    return cmd("docker-compose -f - " + command, config)
        .pipe<string>(
            convertErrorsToSuccess,
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
    },
    logs() {
        return dockerCompose(`logs ${program.follow ? "-f" : ""}`)
            .pipe(
                convertErrorsToSuccess,
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

const logTask =
    (str: TemplateStringsArray) =>
        <T extends Promise<any> | Rx.Observable<any>>(task: () => T): T => {
            console.log(str.join("") + " ...");
            function logDone() {
                if (program.verbose) {
                    console.log("... done.");
                }
            }
            const t = task();
            if (Rx.isObservable(t)) {
                return t.pipe(
                    tap({
                        complete: logDone
                    })
                ) as T;
            } else {
                return (async () => {
                    const v = await t;
                    logDone();
                    return v;
                })() as T;
            }
        }

const handleSwarmErrors =
    tap<string>({
        error: (e: string) => {
            if (e.toLowerCase().startsWith("nothing found in stack:")) {
                console.error("No deployment found.")
            }
            if (e.startsWith("this node is not a swarm manager")) {
                console.error(e);
            }
        }
    })

const convertErrorsToSuccess = catchError(err => Rx.of(err))

reduce((acc, curr) => acc + "\n" + curr, "");

const SwarmImpl: OrchestratorImpl = {
    async up() {
        await logTask`Building game:latest`(
            () => cmd("docker build -t game:latest .").toPromise()
        );

        await logTask`Deploying to Swarm`(
            () => {
                const swarmComposeFile = getComposeConfig(sanitizeConfigToSwarm);
                return cmd(`docker stack deploy -c - ${DEPLOYMENT_NAME}`, swarmComposeFile)
                    .pipe(
                        handleSwarmErrors,
                        convertErrorsToSuccess,
                    )
                    .toPromise();
            }
        );
    },
    async stop() {
        console.error("Docker swarm does not support stopping.");
    },
    down() {
        return logTask`Destroying Swarm deployment`(
            () => cmd(`docker stack rm ${DEPLOYMENT_NAME}`)
                .pipe(
                    handleSwarmErrors,
                    convertErrorsToSuccess
                )
        );
    },
    ps() {
        return cmd(`docker stack ps ${DEPLOYMENT_NAME}`)
            .pipe(
                handleSwarmErrors,
                convertErrorsToSuccess,
                tap(
                    console.log
                )
            );
    },
    logs() {
        const follow = program.follow;
        return execCmd("docker", ["stack", "ps", DEPLOYMENT_NAME, "--format={{json .}}"])
            .pipe(
                handleSwarmErrors,
                map(v => JSON.parse(v)),
                mergeMap(({ ID, Name }) =>
                    execCmd("docker", ["inspect", ID, "--format={{json .}}"])
                        .pipe(
                            map(v => JSON.parse(v)),
                            mergeMap(({ Status: { ContainerStatus: { ContainerID } } }) => {
                                return cmd(`docker logs ${ContainerID}${follow ? " -f" : ""}`)
                                    .pipe(
                                        convertErrorsToSuccess,
                                        map(line => `${Name} | ${line}`),
                                    );
                            })
                        )
                ),
                tap(console.log)
            );
    }
}

const getOrchestrator = _.memoize(
    (): OrchestratorImpl => program.swarm
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

async function logs() {
    await handle(getOrchestrator().logs());
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

program
    .command("logs")
    .description("Print logs")
    .action(logs);

program.parse(process.argv);
