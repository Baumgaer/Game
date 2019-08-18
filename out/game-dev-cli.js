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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS1kZXYtY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vZ2FtZS1kZXYtY2xpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLHFDQUFxQztBQUNyQywyQkFBMkI7QUFDM0IsOENBQThDO0FBQzlDLHFDQUFxQztBQUNyQyw4Q0FBaUQ7QUFFakQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUV6QixPQUFPO0tBQ0YsTUFBTSxDQUFDLGVBQWUsRUFBRSxxQkFBcUIsQ0FBQyxDQUFBO0FBRW5ELE1BQU0sT0FBTyxHQUFHLENBQUMsT0FBZSxFQUFFLElBQWMsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUNsRSxRQUFRLENBQUMsRUFBRTtJQUNQLE1BQU0sT0FBTyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRWxELFFBQVE7U0FDSCxlQUFlLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7U0FDM0QsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRTtRQUNmLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFFUCxRQUFRO1NBQ0gsZUFBZSxDQUFDLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQzNELEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUU7UUFDZixRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBRVAsT0FBTyxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtRQUN6QixJQUFJLElBQUksS0FBSyxDQUFDLEVBQUU7WUFDWixRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDdkI7YUFBTTtZQUNILFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsa0NBQWtDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN2RTtJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUNKLENBQUM7QUFNRixNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUF1QixFQUFFLEdBQUcsQ0FBVyxFQUFFLEVBQUU7SUFDMUQsTUFBTSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUMsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUVuQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7UUFDakIsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUNYLGVBQUcsQ0FDQyxPQUFPLENBQUMsR0FBRyxFQUNYLE9BQU8sQ0FBQyxLQUFLLENBQ2hCLENBQ0osQ0FBQztLQUNMO0lBRUQsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDLENBQUE7QUFFRCxLQUFLLFVBQVUsRUFBRTtJQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUN2QyxNQUFNLEdBQUcsQ0FBQSxzQkFBc0I7U0FDMUIsSUFBSSxDQUNELHNCQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQ2hDO1NBQ0EsU0FBUyxFQUFFLENBQUM7QUFDckIsQ0FBQztBQUVELEtBQUssVUFBVSxJQUFJO0lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3ZDLE1BQU0sR0FBRyxDQUFBLHFCQUFxQjtTQUN6QixJQUFJLENBQ0Qsc0JBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FDaEM7U0FDQSxTQUFTLEVBQUUsQ0FBQztBQUNyQixDQUFDO0FBRUQsS0FBSyxVQUFVLElBQUk7SUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFDekMsTUFBTSxHQUFHLENBQUEscUJBQXFCO1NBQ3pCLElBQUksQ0FDRCxzQkFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUNoQztTQUNBLFNBQVMsRUFBRSxDQUFDO0FBQ3JCLENBQUM7QUFFRCxPQUFPO0tBQ0YsT0FBTyxDQUFDLElBQUksQ0FBQztLQUNiLFdBQVcsQ0FBQywyQkFBMkIsQ0FBQztLQUN4QyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFaEIsT0FBTztLQUNGLE9BQU8sQ0FBQyxNQUFNLENBQUM7S0FDZixXQUFXLENBQUMsMEJBQTBCLENBQUM7S0FDdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRWxCLE9BQU87S0FDRixPQUFPLENBQUMsTUFBTSxDQUFDO0tBQ2YsV0FBVyxDQUFDLDZCQUE2QixDQUFDO0tBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVsQixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyJ9