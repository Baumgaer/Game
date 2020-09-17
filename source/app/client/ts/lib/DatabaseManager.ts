/* tslint:disable */
import { BDODatabasemanager } from "~bdo/lib/BDODatabaseManager";

export class DatabaseManager extends BDODatabasemanager {

    private static instance?: DatabaseManager;


    private constructor() {
        super();
    }

    public static getInstance() {
        if (!DatabaseManager.instance) DatabaseManager.instance = new DatabaseManager();
        return DatabaseManager.instance;
    }

    public createConnection(_name: string = "default", _options = {}) {
        throw new Error("not implemented");
    }

    public getConnection(_name: string) {
        throw new Error("not implemented");
    }

    public async removeConnection(_name: string) {
        throw new Error("not implemented");
    }

}
