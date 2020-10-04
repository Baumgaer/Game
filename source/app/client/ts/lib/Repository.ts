/* tslint:disable */
import { BDORepository, attributes } from "~bdo/lib/BDORepository";
import { getFilePartsFromPath } from "~bdo/utils/util";
import { User } from "~client/models/User";
import localforage from "localforage";

import type { ClientModel } from "~client/lib/ClientModel";

class Store<T extends typeof ClientModel> {
    private database: LocalForage;

    private model: T;

    constructor(database: LocalForage, model: T) {
        this.database = database;
        this.model = model;
    }

    public async get(_id: string, _attributes: attributes<InstanceType<T>> = []) {
        return;
    }

    public insert(_data: ConstParams<InstanceType<T>>) {
        return;
    }

    public update(_filter: ConstParams<InstanceType<T>>, _data: ConstParams<InstanceType<T>>) {
        return;
    }

    public delete(_filter: ConstParams<InstanceType<T>>) {
        return;
    }
}

export class Repository extends BDORepository {

    private static instance?: Repository;

    protected databaseConnections: Record<string, LocalForage> = {};

    protected stores: Record<string, Store<typeof ClientModel>> = {};

    protected models: Record<string, ClientModel> = {};

    private constructor() {
        super();

        // Collect all client models
        const context = require.context("./../models", true, /.+\.ts/, "sync");
        context.keys().forEach((key) => {
            const name = getFilePartsFromPath(key);
            this.models[name] = context(key)[name];
        });
        const repo = Repository.getInstance();
        repo.getStore(User).get("id", ["eMail", "id", "lastName", "artifacts"]);
    }

    public static getInstance() {
        if (!Repository.instance) Repository.instance = new Repository();
        return Repository.instance;
    }

    public getStore<T extends typeof ClientModel>(model: T) {
        if (model.className in this.stores) return this.stores[model.className] as Store<T>;

        // Create a new database connection if not already exist
        const databaseConnectionName = `${model.databaseName}_${model.collectionName}`;
        let databaseConnection;
        if (!this.databaseConnections[databaseConnectionName]) {
            databaseConnection = localforage.createInstance({
                name: model.databaseName,
                storeName: model.collectionName,
                driver: [localforage.INDEXEDDB]
            });
            this.databaseConnections[databaseConnectionName] = databaseConnection;
        } else databaseConnection = this.databaseConnections[databaseConnectionName];

        // Create the requested repository
        const store = new Store<typeof model>(databaseConnection, model);
        this.stores[model.className] = store as Store<typeof ClientModel>;
        return store;
    }

}
