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

declare module 'router' {
    export default import('express').Router;
}

declare module 'window' {
    export default Window;
}

declare module 'nighthawk' {

    interface listenOptions {
        popstate: boolean;
        interceptClicks: boolean;
        dispatch: boolean;
    }

    interface Router {
        use: import("express").IRouterMatcher
        listen(options?: listenOptions): void
        changeRoute(path: string): void
    }

    interface nighthawkOptions {
        queryParser: AnyFunction;
        base: string;
    }

    function nighthawk(options?: nighthawkOptions): Router;
    const NightHawk: typeof nighthawk;
    export default NightHawk;
}
