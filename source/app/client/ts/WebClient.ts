import { BaseClient } from "~client/lib/BaseClient";
// import { User } from "~client/models/User";
// import { Folder } from "~client/models/Folder";

setTimeout(() => {
    const Folder = require("~client/models/Folder").Folder; // eslint-disable-line
    const User = require("~client/models/User").User; // eslint-disable-line
    const theUser = new User({
        id: "user1",
        firstName: "Max",
        lastName: "Mustermann",
        eMail: "mustermann@musterprovidor.de",
        password: "keyboardcat"
    });

    const theRoot = new Folder({
        id: "root",
        name: "root",
        creator: theUser
    });

    const theFirstChild = new Folder({
        parent: theRoot,
        name: "firstChild",
        creator: theUser
    });

    const theSecondChild = new Folder({
        parent: theRoot,
        name: "secondChild",
        creator: theUser
    });

    // eslint-disable-next-line
    // @ts-ignore
    window.testLib = {
        user: theUser,
        root: theRoot,
        firstChild: theFirstChild,
        secondChild: theSecondChild
    };
}, 3000);

export class WebClient extends BaseClient {

    public async start() {
        await super.start();
        // Startup the UI which is already in DOM
        require("~client/components/WebClient");
    }
}
const webClient = new WebClient();
webClient.start();
