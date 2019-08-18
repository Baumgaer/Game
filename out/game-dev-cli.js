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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZS1kZXYtY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vZ2FtZS1kZXYtY2xpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHFDQUFxQztBQUNyQywyQkFBMkI7QUFDM0IsOENBQThDO0FBQzlDLHFDQUFxQztBQUNyQyw4Q0FBaUQ7QUFFakQsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUV6QixPQUFPO0tBQ0osTUFBTSxDQUFDLGVBQWUsRUFBRSxxQkFBcUIsQ0FBQyxDQUFBO0FBRWpELE1BQU0sT0FBTyxHQUFHLENBQUMsT0FBZSxFQUFFLElBQWMsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUNwRSxRQUFRLENBQUMsRUFBRTtJQUNULE1BQU0sT0FBTyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRWxELFFBQVE7U0FDTCxlQUFlLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7U0FDM0QsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsRUFBRTtRQUNqQixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBRUwsUUFBUTtTQUNMLGVBQWUsQ0FBQyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQztTQUMzRCxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxFQUFFO1FBQ2pCLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFFTCxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFO1FBQzNCLElBQUksSUFBSSxLQUFLLENBQUMsRUFBRTtZQUNkLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNyQjthQUFNO1lBQ0wsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxrQ0FBa0MsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3JFO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQ0YsQ0FBQztBQU1GLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBRSxLQUFLLENBQXdCLEVBQUUsR0FBRyxDQUFXLEVBQUUsRUFBRTtJQUM5RCxNQUFNLENBQUUsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFFLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM5QyxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBRW5DLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtRQUNuQixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQ2IsZUFBRyxDQUNELE9BQU8sQ0FBQyxHQUFHLEVBQ1gsT0FBTyxDQUFDLEtBQUssQ0FDZCxDQUNGLENBQUM7S0FDSDtJQUVELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyxDQUFBO0FBRUQsS0FBSyxVQUFVLEVBQUU7SUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDdkMsTUFBTSxHQUFHLENBQUEsc0JBQXNCO1NBQzVCLElBQUksQ0FDSCxzQkFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUM5QjtTQUNBLFNBQVMsRUFBRSxDQUFDO0FBQ2pCLENBQUM7QUFFRCxLQUFLLFVBQVUsSUFBSTtJQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDdkMsTUFBTSxHQUFHLENBQUEscUJBQXFCO1NBQzNCLElBQUksQ0FDSCxzQkFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUM5QjtTQUNBLFNBQVMsRUFBRSxDQUFDO0FBQ2pCLENBQUM7QUFFRCxLQUFLLFVBQVUsSUFBSTtJQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFDekMsTUFBTSxHQUFHLENBQUEscUJBQXFCO1NBQzNCLElBQUksQ0FDSCxzQkFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUM5QjtTQUNBLFNBQVMsRUFBRSxDQUFDO0FBQ2pCLENBQUM7QUFFRCxPQUFPO0tBQ0osT0FBTyxDQUFDLElBQUksQ0FBQztLQUNYLFdBQVcsQ0FBQywyQkFBMkIsQ0FBQztLQUN4QyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7QUFFaEIsT0FBTztLQUNKLE9BQU8sQ0FBQyxNQUFNLENBQUM7S0FDYixXQUFXLENBQUMsMEJBQTBCLENBQUM7S0FDdkMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRWxCLE9BQU87S0FDSixPQUFPLENBQUMsTUFBTSxDQUFDO0tBQ2IsV0FBVyxDQUFDLDZCQUE2QixDQUFDO0tBQzFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVsQixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyJ9