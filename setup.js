/* eslint-disable */
const childProcess = require("child_process");

/**
 * Starts the same process with same arguments and exits the current process
 *
 * @returns {void}
 */
function restartProcess() {
    childProcess.execSync(`node ${__filename} ${process.argv.slice(2).join(" ")}`, {
        stdio: 'inherit'
    });
    process.exit();
}

try {
    // Check if minimum dependency is installed and if not make a npm install
    require.resolve("check-dependencies");
} catch (error) {
    if (error.code === "MODULE_NOT_FOUND") {
        console.warn("First execution? installing dependencies!");
        childProcess.execSync('npm install', { stdio: 'inherit' });
        restartProcess();
    }
}
// Check if all dependencies are installed and if not make a npm install && npm prune
const checkDependencies = require("check-dependencies");
const checkResult = checkDependencies.sync();
if (!(checkResult instanceof Promise) && checkResult.error.length) {
    console.log(checkResult.error);
    console.warn("Not all dependencies are installed! Installing missing dependencies");
    childProcess.execSync('npm install && npm prune', { stdio: 'inherit' });
    restartProcess();
}

const fs = require('graceful-fs');
const arp = require('app-root-path');
const path = require('path');
const colors = require('ansicolor');
const commandLineArgs = require('command-line-args');
const commandLineUsage = require('command-line-usage');

let VERBOSE = false;

let settings = {
    junctions: {
        ignoredPaths: [path.resolve(arp.path, 'out/app/client/css'), path.resolve(arp.path, 'out/app/client/js')]
    }
};

/**
 * Iterates recursively through a folder tree
 *
 * @param {string} dir The folder which should be walked recursively
 * @param {string[]} [dirList] Already existing folder list
 * @returns {string[]} Listing of all folders
 */
function walkDir(dir, dirList) {
    let dirs = fs.readdirSync(dir);
    dirList = dirList || [];
    for (const subDir of dirs) {
        let newDir = dir + `${path.sep}${subDir}`;
        let isDir = false;
        // Check if is directory. This fails on windows, when the subsystem has created a symlink
        try {
            isDir = fs.statSync(newDir).isDirectory() && fs.realpathSync(newDir) === newDir;
        } catch (error) {
            if (VERBOSE) console.log(`${colors.yellow('WARNING')}: ${colors.cyan(newDir)} marked as ${colors.red('UNKNOWN')}!`);
        }
        if (isDir) {
            dirList.push(newDir);
            walkDir(newDir, dirList);
        }
    }
    return dirList;
}

/**
 * Creates junctions from all folders in out to source, which are not contained
 * in source at the same place except it is contained in "ignoredPaths".
 *
 * @returns {void}
 */
function createJunctions() {
    console.log(colors.bright.green("create junctions"));

    let outPath = path.join(arp.path, 'out');
    let sourcePath = path.join(arp.path, 'source');
    let outPaths = walkDir(outPath);
    let sourcePaths = walkDir(sourcePath);

    let lastJunction = null;

    for (const item of outPaths) {
        let target = item.replace(outPath, sourcePath);
        if (!sourcePaths.includes(item.replace(outPath, sourcePath))) {
            if (!item.includes(lastJunction) && !settings.junctions.ignoredPaths.includes(item)) {
                lastJunction = item;
                if (VERBOSE) console.log(colors.cyan.bright('create junction:'), item, colors.cyan('<=>'), target);
                fs.symlink(item, target, 'junction', (error) => {
                    if (error && error.code === 'EEXIST') {
                        fs.unlinkSync(target);
                        fs.symlinkSync(item, target, 'junction');
                    }
                });
            }
        }
    }
}

/**
 * Installs all dependencies, creates junctions and runs a basic build
 *
 * @returns {void}
 */
function install() {
    console.log(colors.bright.green("installing project"));

    childProcess.execSync('npm install && npm prune', {
        stdio: VERBOSE ? 'inherit' : "ignore"
    });

    createJunctions();

    console.log(colors.bright.green("building project"));
    childProcess.execSync('npm run build', {
        stdio: VERBOSE ? 'inherit' : "ignore"
    });
}

if (require && require.main === module) {
    let optionList = [{
        name: 'help',
        alias: 'h',
        type: Boolean,
        defaultValue: false,
        description: 'This message'
    },
    {
        name: 'verbose',
        alias: 'v',
        type: Boolean,
        defaultValue: false,
        description: 'Offers more output'
    },
    {
        name: 'install',
        alias: 'i',
        type: Boolean,
        defaultValue: false,
        description: 'installs als dependencies, proceeds a base build for development and creates junctions of folders from the out folder which are not contained in source'
    },
    {
        name: 'junctions',
        alias: 'j',
        type: Boolean,
        defaultValue: false,
        description: 'creates junctions of folders from the out folder which are not contained in source'
    }
    ];

    let sections = [{
        header: 'The post install script',
        content: 'Creates a developer environment and sets up basic attributes.'
    },
    {
        header: 'Options',
        optionList: optionList
    }
    ];
    let options = commandLineArgs(optionList);
    VERBOSE = options.verbose;

    const providedArguments = [];
    for (const option in options) {
        if (option in options) {
            const element = options[option];
            if (element) providedArguments.push(option);
        }
    }

    if (providedArguments.length) {
        if (providedArguments.length === 1 && providedArguments.includes("verbose")) options.help = true;
        if (providedArguments.length > 1 && providedArguments.includes("help")) options.help = false;
    } else options.help = true;

    if (options.help) console.log(commandLineUsage(sections));
    if (options.install) install();
    if (options.junctions) createJunctions();
    if (!options.help) {
        if (options.junctions || options.install) {
            console.log(
                `\n${colors.magenta.bright(
                    'NOTE'
                )}: Execute junction creation on original OS to see junctions in the editors tree.`
            );
            console.log('      Type node setup.js --help for more information!');
        }
        console.log(colors.green('\nFINISHED!'));
    }
}
