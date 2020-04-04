declare module '*.njk' {
    const value: import("nunjucks").Template;
    export default value
}

declare module '*.less' {
    const value: string;
    export default value
}
