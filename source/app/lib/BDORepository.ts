import type { ClientModel } from "~client/lib/ClientModel";
interface IAttributes<T> {
    name: keyof ConstParams<T>,
    attributes: Array<
        keyof ConstParams<Extract<Unpacked<T[IAttributes<T>["name"]]>, ClientModel>> |
        IAttributes<Extract<Unpacked<T[IAttributes<T>["name"]]>, ClientModel>>
    >
}
export type attributes<T> = Array<keyof ConstParams<T> | IAttributes<T>>

export abstract class BDORepository {

    protected abstract databaseConnections: Record<string, any>;

    protected abstract stores: Record<string, any>;

    protected abstract getStore(model: any): any;
}
