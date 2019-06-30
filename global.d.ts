// Constructor type
declare type Constructor<T = {}> = new (...args: any[]) => T;
declare type AbstractConstructor<T = {}> = Function & { prototype: T };

// Next two type decide wether a property is writable or not
declare type IfNotEquals<X, Y, A, B> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? B : A;
declare type NoneWritableKeysOf<T> = { [P in keyof T]: IfNotEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, P, never> }[keyof T];

// Filters all properties out which are undefined or a function
declare type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends (...args: any) => any ? never : K }[keyof T];
// Filters all properties out which are a function
declare type DefinitiveNonFunctionPropertyNames<T> = Exclude<NonFunctionPropertyNames<T>, undefined>

// Collects all properties of a class except native functions and readonly properties and wraps them in an object with their types
declare type ConstParams<T> = Pick<T, T extends HTMLElement ?
    Exclude<
        Exclude<
            NonFunctionPropertyNames<T>,
            NonFunctionPropertyNames<HTMLElement & HTMLAnchorElement & HTMLCanvasElement>
        >,
        NoneWritableKeysOf<T>
    >
    :
    Exclude<
        NonFunctionPropertyNames<T>,
        NoneWritableKeysOf<T>
    >
>;

type test = Part

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
