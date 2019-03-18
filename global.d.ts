// Collects all properties of a class except native functions and wraps them in an object with their types
declare type NonFunctionPropertyNames<T> = { [K in keyof T]: T[K] extends () => any ? never : K }[keyof T];
declare type ConstParams<T> = Pick<T, NonFunctionPropertyNames<T>>;

type wsVerifyClientInfo = { origin: string; secure: boolean; req: IncomingMessage };
type wsVerifyClientDone = (
    res: boolean,
    code?: number | undefined,
    message?: string | undefined,
    headers?: OutgoingHttpHeaders | undefined
) => void;

namespace Express {

    interface Request {
        // Overwrite Express session because it's always available
        session: Express.Session;
        sessionID: string;
    }
}
