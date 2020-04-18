const fs = require('graceful-fs');
const arp = require('app-root-path');
const path = require('path');
const colors = require('colors');
const commandLineArgs = require('command-line-args');
const commandLineUsage = require('command-line-usage');
const childProcess = require("child_process");

let VERBOSE = false;

let settings = {
    junctions: {
        ignoredPaths: [path.resolve(arp.path, 'out/app/client/css'), path.resolve(arp.path, 'out/app/client/js')]
    }
};

/**
 * Iterates recursively through a folder tree
 *
 * @param {String} dir The folder which should be walked recursively
 * @param {String[]} [dirList] Already existing folder list
 * @returns {String[]} Listing of all folders
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
            if (VERBOSE) {
                console.log(`${colors.yellow('WARNING')}: ${colors.cyan(newDir)} marked as ${colors.red('UNKNOWN')}!`);
            }
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
                console.log(colors.cyan.bold('create junction:'), item, colors.cyan('<=>'), target);
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
    childProcess.execSync('npm install && npm prune', {
        stdio: 'inherit'
    });
    createJunctions();
    childProcess.execSync('npm run build', {
        stdio: 'inherit'
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
    if (options.help) console.log(commandLineUsage(sections));
    if (options.install) install();
    if (options.junctions) createJunctions();
    if (!options.help) {
        console.log(
            `\n${colors.magenta.bold(
                'NOTE'
            )}: Execute junction creation on original OS to see junctions in the editors tree.`
        );
        console.log('      Type node setup.js --help for more information!');
        console.log(colors.green('\nFINISHED!'));
    }
}
