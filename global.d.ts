// Constructor type
declare type Constructor<T = {}> = new (...args: any[]) => T;
declare type AbstractConstructor<T = {}> = Function & { prototype: T };

// Collects all properties of a class except native functions and wraps them in an object with their types
declare type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends (...args: any) => any ? never : K }[keyof T];
declare type ConstParams<T> = Pick<T, NonFunctionPropertyNames<T>>;

declare type ComponentProperties = {
    length: number;
    values: any[];
    keys: string[];
    definedProperties: IndexStructure;
}

// WebSocket types
type wsVerifyClientInfo = { origin: string; secure: boolean; req: IncomingMessage };
type wsVerifyClientDone = (
    res: boolean,
    code?: number | undefined,
    message?: string | undefined,
    headers?: OutgoingHttpHeaders | undefined
) => void;

type walkEventFunc = (fileOrDir: string, status: import('walk').WalkStats) => void;

// A general type for JSON
declare interface IndexStructure<> {
    [member: string]: any
}
declare interface IndexStructure<K = string, V = any> {
    [member: K]: V
}

// ExpressJS overwrites
namespace Express {

    interface Request {
        // Overwrite Express session because it's always available
        session: Express.Session;
        sessionID: string;
    }
}

interface Window {
    virtualRoutes: string[];
    router: import('navigo');
}
