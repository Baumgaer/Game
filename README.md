# Game

Welcome to the "Game". At the moment there is no good name for this project because it seems to be very difficult to find one. If you have a good and unique name feel free to tell it to us.

## Table of contents

1. [The Idea of the Game](#the-idea-of-the-game)
2. [Architecture of the Game](#architecture-of-the-game)
3. [Getting started](#getting-started)
4. [Development CLI](#development-cli)
5. [Toolchain](#toolchain)
6. [Best practices](#best-practices)

## The Idea of the Game

Planed is a MMORPG which takes place on an infinite **procedural generated** map. On this map are some predefined cities which have a certain amount of players can start in. If the amount is reached a new city will be created.

There are also generated caves, rivers biomes and resources which the players can use to discover and experience the map or to build things like **bridges**, **armors**, **potions** or other interesting things.

To have a little bit more action in the game there will be special places called **instances** which offers special challenges and teamwork with other players. There are also bosses which can drop some **items of interests**.

In this case the player itself is a godlike creature like in [Dungeon Keeper](https://en.wikipedia.org/wiki/Dungeon_Keeper) or [War for the overworld](https://en.wikipedia.org/wiki/War_for_the_Overworld) and commands his own creatures like skeletons, orcs or other crazy creatures and especially a unique **mastermonster** which can learn everything if it is possible in this game. This will use an **artificial neural network** so that the player can tell the monster what is right and what is wrong.

Every monster has it's unique skill in fighting, profession and behavior which includes interaction with other monsters. The player can tell a monster what to do in a way like [SIMS](https://en.wikipedia.org/wiki/The_Sims) does. This offers especially in a fighting situation much more possibilities to act strategical than in other **real time strategy** games.

To manage all these creatures, the player **builds a dungeon with a core** where the monsters can life and work for the player. But it should also be possible to **play as a caravan**, which **carries the core** through the world instead of building a dungeon. To create necessary things the player can build in this case a temporary base.

The focus in this game should be on:

-   Interaction with the environment and monsters
-   Beauty and pragmatism of the dungeon or caravan
-   Success in instances
-   Alliances with other players, especially for caravans
-   Crafting including the dismantling of resources
-   Trading with other players and even individual monsters
-   Trading among the monsters itself

and way more which can be read in the WIKI

## Architecture of the Game

The Game will be a browser game based on [TypeScript](https://www.typescriptlang.org/)/[AssemblyScript](https://github.com/AssemblyScript/assemblyscript)/JavaScript/[WebAssembly](https://webassembly.org/), [WebGL](https://developer.mozilla.org/en/docs/Web/API/WebGL_API), [WebAudio](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API), [ServiceWorker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API), [WebRTC](https://webrtc.org/), [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) and the libraries [Three.js](https://threejs.org/) or [Babylon.js](https://www.babylonjs.com/). Which library will be taken depends on number of tutorials, simplicity and possibilities.

Most of the communication for this game should be among the clients via WebRTC to reduce the server load and outsourcing complex calculation which appears very often. To improve the performance on client side, we will use ServiceWorkers and WebWorkers. ServiceWorkers for caching and faster startup of the mobile app via manifest file and WebWorkers for multi threading. Very complex calculations should also be compiled to WebAssembly on client and server side. for this we use AssemblyScript.

Another speedup will be [Redis](https://redis.io/) which will be used as a cache, session storage and many other temporary things.

To persist the data we will use [ArangoDB](https://www.arangodb.com/).

## Getting started

1. Install [Docker](https://www.docker.com/) (on your subsystem and native OS):

    - Window: <https://download.docker.com/win/stable/Docker%20for%20Windows%20Installer.exe>
    - MacOS: <https://download.docker.com/mac/stable/Docker.dmg>
    - Linux/Unix: <https://docs.docker.com/install/linux/docker-ce/ubuntu/>

2. install NodeJS:

    **Windows** and **MacOS** user download the installer: <https://nodejs.org/en/>

    **Linux** users do the following:

    ```bash
    sudo apt-get install curl
    curl -sL https://deb.nodesource.com/setup_11.x | sudo -E bash -
    sudo apt-get install -y nodejs
    ```

    or do this [installation instructions](https://github.com/nodesource/distributions).

3. Configure git:

    ```bash
    git config --global pull.rebase true
    git config --global core.autocrlf false
    git config --global user.name "<first name> <last name>"
    git config --global user.email "<email>"
    ```

4. Create SSH key if you use SSH:

    ```bash
    ssh-keygen -t rsa -C "<your email>"
    ```

5. Clone the repository:

    ```bash
    git clone https://github.com/Eluminati/Game.git .
    ```

    - Notice the "." at the End. It is best to clone it in a folder named Game

6. Change into the Game directory:

    ```bash
    cd Game
    ```

7. Install the Project:

    ```bash
    node setup.js -i
    ```

8. start the development server:

    ```bash
    npm run dev
    ```

9. start the application:

    ```bash
    npm start
    ```

"That's it!"... I know this is much to do but after this it works everywhere in the exact same way and we will use a linux as production os!

## Start and stop the application

To start the app type: `npm start` and to stop the app just interrupt it. Have a
look to the [package.json](./package.json) to see the start and stop scripts.

## Development CLI

`npm run dev:cli` can be used to manage your dev deployment of `game`.

-   `npm run dev:cli up` creates / updates it.
-   `npm run dev:cli down` destroys it.
-   `npm run dev:cli stop` stops it (not supported in Swarm mode).
-   `npm run dev:cli ps` prints the currently running services.
-   `npm run dev:cli logs` prints the logs. Use `-f` to follow.

By default, `npm run dev:cli` uses `docker-compose`.
Since it does not support clustering, you can add the `--swarm` flag, which will switch to Docker Swarm mode.
This some downsides: Volumes are not supported and the Docker image needs to be rebuilt on each change.

## Toolchain

To get the best development experience you should install available plugins for your editor, which we are using here.

1. Should be available in your IDE

    - [EditorConfig](https://editorconfig.org/): Everyone should use the same Configuration for the editor
    - Prettier ([Atom](https://atom.io/packages/prettier-atom) | [VSCode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)): Beautyfies your code on save if configured
    - ESLint ([Atom](https://atom.io/packages/linter-eslint) | [VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)): Write well formatted code in JavaScript and TypeScript. Please configure your ESLint to support TypeScript in your IDE
    - typescript ([Atom](https://atom.io/packages/atom-typescript)): Better intellisense while writing Typescript and AssemblyScript
    - Mocha ([Atom](https://atom.io/packages/mocha-ui) | [VSCode](https://marketplace.visualstudio.com/items?itemName=maty.vscode-mocha-sidebar)): There are some perfect sidebars available for VSCode
    - Grunt ([Atom](https://atom.io/packages/grunt-runner)): Start a Grunt task in an easy and fast way

2. Can be available in your IDE

    - Import Cost ([Atom](https://atom.io/packages/import-cost-atom) | [VSCode](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)): See how big your import is
    - DocBlockr ([Atom](https://atom.io/packages/docblockr) | [VSCode](https://marketplace.visualstudio.com/items?itemName=joelday.docthis)): Create in an easy way a documentation string
    - Spell checker ([VSCode](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)): Not just correct code but also correct spelling ;-)

3. Some of your best friends

    - [Redis Commander](http://joeferner.github.io/redis-commander/): View the current content of the redis cache
    - Integrated terminal ([Atom](https://github.com/jeremyramin/terminal-plus)): This is very useful because of the used subsystem and less opened windows

## Best practices

1. Because there is a commit hook which checks every function and property for a doc string, it happens sometimes that a developer writes nonesense in the documentation. This doc strings will later be used for a documentation WIKI so it is very important to write useful and correct documentation especially for newcomers to have a easy introduction to this project.

2. When you create a new directory remember to create a `README.md` which contains documentation for:

    - What is contained in there
    - What is the intention of this directory/package
    - Is it hard linked to somewhere

    So everyone can understand the project structure.

3. Remember that there are several root directories

    - Project root
    - output root
    - source root

    Depending on what you are planing to do, choose the nearest path.

4. Write tests for your new component or change tests if you changed a component.

5. Create junctions for every directory in the output directory to the source directory if it is noticed in the corresponding `README.md`. So you have all resources available in your source folder and you are not forced to change the environment (This will happen automatically later).

6. When you install a new package, write it in to the `package.json` by using the `--save` or `--save-dev`. After you pushed your changes and another one pulls your changes, the new dependencies will be added, removed or updated.

7. Since we are using TypeScript/AssemblyScript remember to install the corresponding type definition via `npm i @types/<package> --save-dev`
