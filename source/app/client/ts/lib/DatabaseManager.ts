/* tslint:disable */
import { BDODatabasemanager } from "~bdo/lib/BDODatabaseManager";
import localForage from "localforage";

export class DatabaseManager<D extends string, C extends string, G extends string, V extends string> extends BDODatabasemanager {

    private static instance?: DatabaseManager<any, any, any, any>;

    private currentDatabase?: D;

    private currentCollection?: C;

    private currentGraph?: G;

    private currentView?: V;

    private databases: Map<D, LocalForage> = new Map<D, LocalForage>();

    private constructor() {
        super();
    }

    public static getInstance() {
        if (!DatabaseManager.instance) DatabaseManager.instance = new DatabaseManager();
        return DatabaseManager.instance;
    }

    public database(name: D) {
        this.currentDatabase = name;
        if (!(name in this.databases)) {
            this.databases.set(name, localForage.createInstance({
                name: name,
                driver: [localForage.INDEXEDDB, localForage.WEBSQL]
            }));
        }
        delete this.currentCollection;
        delete this.currentGraph;
        delete this.currentView;
        return this;
    }

    public collection(name: C) {
        this.currentCollection = <C>`collection_${name}`;
        this.getDatabase().config({ storeName: this.currentCollection });
        delete this.currentGraph;
        delete this.currentView;
        return this;
    }

    public view(name: V) {
        this.currentView = <V>`view_${name}`;
        this.getDatabase().config({ storeName: this.currentView });
        delete this.currentCollection;
        delete this.currentGraph;
        return this;
    }

    public graph(name: G) {
        this.currentGraph = <G>`graph_${name}`;
        this.getDatabase().config({ storeName: this.currentGraph });
        delete this.currentCollection;
        delete this.currentView;
        return this;
    }

    public get(id: string): Promise<IndexStructure | null> {
        return this.getDatabase().getItem(id);
    }

    public insert(id: string, value: IndexStructure) {
        return this.getDatabase().setItem(id, value);
    }

    public update(id: string, values: IndexStructure) {
        return new Promise(async (resolve, reject) => {
            try {
                const result = await this.get(id) || {};
                Object.assign(result, values);
                await this.insert(id, result);
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    }

    public delete(id: string) {
        return this.getDatabase().removeItem(id);
    }

    public clear() {
        return this.getDatabase().clear();
    }

    public length() {
        return this.getDatabase().length();
    }

    public key(index: number) {
        return this.getDatabase().key(index);
    }

    public keys() {
        return this.getDatabase().keys();
    }

    public iterate(iterator: (value: IndexStructure, id: string, iterationNumber: number) => unknown) {
        return this.getDatabase().iterate(iterator);
    }

    private getDatabase() {
        if (!this.currentDatabase) throw new Error("No Database chosen");
        return this.databases.get(this.currentDatabase) as LocalForage;
    }

}
