declare module '*.njk' {
    const value: import("nunjucks").Template;
    export default value;
}

declare module '*.less' {
    const value: string;
    export default value;
}

declare module '~static/locales' {
    const value: Record<string, Record<string, string>>;
    export default value;
}

declare module 'nighthawk' {

    interface listenOptions {
        popstate: boolean;
        interceptClicks: boolean;
        dispatch: boolean;
    }

    interface Router extends ReturnType<import('express').Router> {
        listen(options?: listenOptions): void
        changeRoute(path: string): void
    }

    interface nighthawkOptions {
        queryParser: AnyFunction;
        base: string;
    }

    function nighthawk(options?: nighthawkOptions): Router;
    const value: typeof nighthawk;
    export default value;
}
