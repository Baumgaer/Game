#!/usr/bin/env ts-node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const program = require("commander");
const Rx = require("rxjs");
const childProcess = require("child_process");
const readline = require("readline");
const operators_1 = require("rxjs/operators");
program.version("0.0.1");
program
    .option("-v, --verbose", "Log child processes");
const execCmd = (command, args) => new Rx.Observable(observer => {
    const spawnee = childProcess.spawn(command, args);
    readline
        .createInterface({ input: spawnee.stdout, terminal: false })
        .on('line', line => {
        observer.next(line);
    });
    readline
        .createInterface({ input: spawnee.stderr, terminal: false })
        .on('line', line => {
        observer.error(line);
    });
    spawnee.on('close', (code) => {
        if (code === 0) {
            observer.complete();
        }
        else {
            observer.error(new Error(`child process exited with code ${code}`));
        }
    });
});
const cmd = ([value], ..._) => {
    const [command, ...args] = value.split(" ");
    const cmd = execCmd(command, args);
    if (program.verbose) {
        return cmd.pipe(operators_1.tap(console.log, console.error));
    }
    return cmd;
};
async function up() {
    console.log("Creating deployment ...");
    await cmd `docker-compose up -d`
        .pipe(operators_1.catchError(err => Rx.of(err)))
        .toPromise();
}
async function stop() {
    console.log("Stopping deployment ...");
    await cmd `docker-compose stop`
        .pipe(operators_1.catchError(err => Rx.of(err)))
        .toPromise();
}
async function down() {
    console.log("Destroying deployment ...");
    await cmd `docker-compose down`
        .pipe(operators_1.catchError(err => Rx.of(err)))
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS1kZXYtY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc291cmNlL2dhbWUtZGV2LWNsaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxxQ0FBcUM7QUFDckMsMkJBQTJCO0FBQzNCLDhDQUE4QztBQUM5QyxxQ0FBcUM7QUFDckMsOENBQWlEO0FBRWpELE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFFekIsT0FBTztLQUNGLE1BQU0sQ0FBQyxlQUFlLEVBQUUscUJBQXFCLENBQUMsQ0FBQTtBQUVuRCxNQUFNLE9BQU8sR0FBRyxDQUFDLE9BQWUsRUFBRSxJQUFjLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FDbEUsUUFBUSxDQUFDLEVBQUU7SUFDUCxNQUFNLE9BQU8sR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVsRCxRQUFRO1NBQ0gsZUFBZSxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQzNELEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUU7UUFDZixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBRVAsUUFBUTtTQUNILGVBQWUsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQztTQUMzRCxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFO1FBQ2YsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN4QixDQUFDLENBQUMsQ0FBQztJQUVQLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDekIsSUFBSSxJQUFJLEtBQUssQ0FBQyxFQUFFO1lBQ1osUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3ZCO2FBQU07WUFDSCxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLGtDQUFrQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDdkU7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FDSixDQUFDO0FBTUYsTUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBdUIsRUFBRSxHQUFHLENBQVcsRUFBRSxFQUFFO0lBQzFELE1BQU0sQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVDLE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFbkMsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFO1FBQ2pCLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FDWCxlQUFHLENBQ0MsT0FBTyxDQUFDLEdBQUcsRUFDWCxPQUFPLENBQUMsS0FBSyxDQUNoQixDQUNKLENBQUM7S0FDTDtJQUVELE9BQU8sR0FBRyxDQUFDO0FBQ2YsQ0FBQyxDQUFBO0FBRUQsS0FBSyxVQUFVLEVBQUU7SUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDdkMsTUFBTSxHQUFHLENBQUEsc0JBQXNCO1NBQzFCLElBQUksQ0FDRCxzQkFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUNoQztTQUNBLFNBQVMsRUFBRSxDQUFDO0FBQ3JCLENBQUM7QUFFRCxLQUFLLFVBQVUsSUFBSTtJQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUN2QyxNQUFNLEdBQUcsQ0FBQSxxQkFBcUI7U0FDekIsSUFBSSxDQUNELHNCQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQ2hDO1NBQ0EsU0FBUyxFQUFFLENBQUM7QUFDckIsQ0FBQztBQUVELEtBQUssVUFBVSxJQUFJO0lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sR0FBRyxDQUFBLHFCQUFxQjtTQUN6QixJQUFJLENBQ0Qsc0JBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FDaEM7U0FDQSxTQUFTLEVBQUUsQ0FBQztBQUNyQixDQUFDO0FBRUQsT0FBTztLQUNGLE9BQU8sQ0FBQyxJQUFJLENBQUM7S0FDYixXQUFXLENBQUMsMkJBQTJCLENBQUM7S0FDeEMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBRWhCLE9BQU87S0FDRixPQUFPLENBQUMsTUFBTSxDQUFDO0tBQ2YsV0FBVyxDQUFDLDBCQUEwQixDQUFDO0tBQ3ZDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVsQixPQUFPO0tBQ0YsT0FBTyxDQUFDLE1BQU0sQ0FBQztLQUNmLFdBQVcsQ0FBQyw2QkFBNkIsQ0FBQztLQUMxQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFbEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMifQ==