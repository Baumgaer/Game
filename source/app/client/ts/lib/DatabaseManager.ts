/* tslint:disable */
import { BDODatabasemanager } from "~bdo/lib/BDODatabaseManager";
import { ConnectionOptions, Connection, createConnection } from 'typeorm';
import { SqljsConnectionOptions } from "typeorm/driver/sqljs/SqljsConnectionOptions";
import { ClientModel } from '~client/lib/ClientModel';
import { baseConstructorFactory } from '~bdo/lib/BaseConstructor';

export class DatabaseManager extends BDODatabasemanager {

    private static instance?: DatabaseManager;


    private constructor() {
        super();
    }

    public static getInstance() {
        if (!DatabaseManager.instance) DatabaseManager.instance = new DatabaseManager();
        return DatabaseManager.instance;
    }

    public createConnection(name: string = "default", options: Omit<SqljsConnectionOptions, "type" | "name"> = {}): Promise<Connection> {
        let connection = this.connections.get(name);
        if (connection) return connection;

        const entities: typeof ClientModel[] = [];
        const context = require.context("./../models", true, /.+\.ts/, "sync");
        context.keys().forEach((key) => {
            const modelName = key.split("/").pop()?.split(".").slice(0, -1).join('.');
            if (modelName) {
                const baseClass: ReturnType<typeof baseConstructorFactory> = context(key)[modelName];
                if (baseClass.databaseName === name) entities.push(<typeof ClientModel><unknown>baseClass.graphQLType);
            }
        });

        connection = createConnection(Object.assign(<ConnectionOptions>{
            type: "sqljs",
            name: name,
            autoSave: true,
            synchronize: true,
            location: name,
            useLocalForage: true,
            entities: entities
        }, options));
        this.connections.set(name, connection);
        return connection;
    }

    public getConnection(name: string): Promise<Connection | undefined> {
        const connection = this.connections.get(name);
        if (connection) return connection;
        return Promise.resolve(undefined);
    }

    public async removeConnection(name: string): Promise<void> {
        const connection = this.connections.get(name);
        if (!connection) return;
        (await connection).close();
    }

}
