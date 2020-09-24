declare type AnyFunction = (...args: any[]) => unknown;

// Constructor type
declare type Constructor<T = Record<string, any>> = new (...args: any[]) => T;
declare type AbstractConstructor<T = Record<string, any>> = Constructor<T> & { prototype: T };

// Next two type decide wether a property is writable or not
declare type IfNotEquals<X, Y, A, B> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? B : A;
declare type NoneWritableKeysOf<T> = { [P in keyof T]: IfNotEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, P, never> }[keyof T];

// Filer all properties out which are not a function
declare type FuncPropNames<T> = { [K in keyof T]: T[K] extends AnyFunction ? K : never }[keyof T];

// Filters all properties out which are undefined or a function and returns a list of the corresponding property names
declare type NonFuncPropNames<T> = { [K in keyof T]: T[K] extends (...args: any) => any ? never : K }[keyof T];
// Filters all properties out which are undefined or a function
declare type NonFunctionProps<T> = Pick<T, NonFuncPropNames<T>>;
// Filters all properties out which are a function and not undefined
declare type DefNonFuncPropNames<T> = Exclude<NonFuncPropNames<T>, undefined>

// The definitely instance type of any object type
declare type DefInstanceType<T extends Record<string, any>> = T extends Constructor ? InstanceType<T> : T;

type KeysOfType<T, U> = { [K in keyof T]: T[K] extends U ? K : never }[keyof T];
declare type RequiredKeys<T> = Exclude<KeysOfType<T, Exclude<T[keyof T], undefined>>, undefined>;
declare type OptionalKeys<T> = Exclude<keyof T, RequiredKeys<T>>;

type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> & {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
}[Keys]

type RequireOnlyOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> & {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Record<Exclude<Keys, K>, undefined>>
}[Keys]

// require only one of the keys
type EachOfTmp<T> = { [K in keyof T]: { _: { [X in K]: T[K] }; } };
declare type OneOf<T> = EachOfTmp<T>[keyof T]["_"] & Partial<T>;

declare type NonEmptyArray<T> = [T, ...T[]];

// Collects all properties of a class except native functions and readonly properties and wraps them in an object with their types
declare type ConstParams<T> = Partial<
    Pick<T, T extends HTMLElement ?
        Exclude<
            Exclude<
                NonFuncPropNames<T>,
                NonFuncPropNames<HTMLElement & HTMLAnchorElement & HTMLCanvasElement>
            >,
            NoneWritableKeysOf<T>
        >
        :
        Exclude<
            NonFuncPropNames<T>,
            NoneWritableKeysOf<T>
        >
    >
>;

declare type ConstParamsKeys<T> = Array<keyof ConstParams<T>>

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
declare interface IndexStructure<V = any> {
    [member: string]: V
}

// General types
declare type strNumSym = string | number | symbol;

declare type Unpacked<T> =
    T extends (infer U)[] ? U :
    T extends (...args: any[]) => infer U ? U :
    T extends Promise<infer U> ? U :
    T;

// Overwrites
declare type PropDesc = PropertyDescriptor;

namespace Express {
    interface Request {
        // Overwrite Express session because it's always available
        session: Express.Session;
        sessionID: string;
    }
}

interface Window {
    cspScriptNonce: string
}

declare const ENVIRONMENTAL_ROUTES_PATH: string;

namespace NodeJS { // eslint-disable-line
    // interface Global { }
}

type CSSStyleDeclaration = import('csstype').Properties
