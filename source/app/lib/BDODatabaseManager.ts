import { Connection } from "typeorm";
export abstract class BDODatabasemanager {

    protected connections = new Map<string, Promise<Connection>>();

    public abstract createConnection(name: string, options: Omit<Record<string, any>, "type" | "name">): Promise<Connection>;

    public abstract getConnection(name: string): Promise<Connection | undefined>

    public abstract removeConnection(name: string): Promise<void>;
}
