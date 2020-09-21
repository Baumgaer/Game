export abstract class BDORepository {

    protected abstract databaseConnections: Record<string, any>;

    protected abstract stores: Record<string, any>;

    protected abstract getStore(model: any): any;
}
