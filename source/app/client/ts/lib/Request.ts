import { EventEmitter } from "events";
import { parse as parseUrl } from "url";
import accepts from "accepts";
import parseRange from "range-parser";
import typeIs from "type-is";
import fresh from "fresh";

import type { IncomingHttpHeaders, IncomingMessage } from "http";
import { Response } from "~client/lib/Response";
import type { NextFunction } from 'express';
import type Router from "router";

export class Request extends EventEmitter {

    public app!: ReturnType<typeof Router>;

    public url: string = "";
    public method: string = "GET";
    public baseUrl = "";
    public originalUrl: string = "";
    public protocol: string = "";
    public hostname: string = "";
    public port = location.port;
    public path: string = "";
    public query: string = "";

    public secure = this.protocol === 'https';
    public subdomains: string[] = [];
    public socket = null;
    public httpVersion = '1.1';

    public rawHeaders = [];
    public headers: IncomingHttpHeaders = {};

    public rawTrailers = [];
    public trailers = {};

    public ip = '';
    public ips = [];

    public xhr = false;

    public body: any;

    public res!: Response;

    public next!: NextFunction;

    private referer!: string;

    constructor() {
        super();
    }

    get httpVersionMajor() {
        return this.httpVersion.split(".")[0];
    }

    get httpVersionMinor() {
        return this.httpVersion.split(".")[1];
    }

    get fresh() {
        const method = this.method;
        const res = this.res;
        const status = res.statusCode;

        // GET or HEAD for weak freshness validation only
        if ('GET' !== method && 'HEAD' !== method) return false;

        // 2xx or 304 as per rfc2616 14.26
        if ((status >= 200 && status < 300) || 304 === status) {
            return fresh(this.headers, {
                'etag': res.get('ETag'),
                'last-modified': res.get('Last-Modified')
            });
        }

        return false;
    }

    get stale() {
        return !this.fresh;
    }

    public processFetchEvent(event: FetchEvent) {
        const parsedURL = parseUrl(event.request.url);

        // Prepare headers
        // @ts-expect-error This is an iterator..
        const headers: IncomingHttpHeaders = Object.fromEntries(event.request.headers.entries());

        this.headers = headers;
        this.url = event.request.url;
        this.method = event.request.method;
        this.originalUrl = (parsedURL.pathname || "") + (parsedURL.search || "") + (parsedURL.hash || "");
        this.protocol = parsedURL.protocol || "";
        this.hostname = parsedURL.hostname || "";
        this.port = parsedURL.port || "";
        this.path = parsedURL.path || "";
        this.query = parsedURL.search || "";

        this.subdomains = this.hostname.split('.').reverse().slice(2);
        this.referer = event.request.referrer;
        this.headers.referer = this.referer;
        this.body = event.request.body;
        this.xhr = true;
    }

    public get(name: string) {
        const lc = name.toLowerCase();
        switch (lc) {
            case 'referer':
            case 'referrer':
                return this.referer;
            default:
                return this.headers[name];
        }
    }

    public header(name: string) {
        return this.get(name);
    }

    public accepts(type: string | string[]) {
        if (!(type instanceof Array)) type = [type];
        return accepts(this as unknown as IncomingMessage).types(...type);
    }

    public acceptsEncodings(encoding: string | string[]) {
        if (!(encoding instanceof Array)) encoding = [encoding];
        return accepts(this as unknown as IncomingMessage).encodings(...encoding);
    }

    public acceptsCharsets(charset: string | string[]) {
        if (!(charset instanceof Array)) charset = [charset];
        return accepts(this as unknown as IncomingMessage).charsets(...charset);
    }

    public acceptsLanguages(language: string | string[]) {
        if (!(language instanceof Array)) language = [language];
        return accepts(this as unknown as IncomingMessage).charsets(...language);
    }

    public range(size: number, options?: { combine?: boolean }) {
        const range = this.get('Range');
        if (!range || range instanceof Array) return;
        return parseRange(size, range, options);
    }

    public is(type: string | string[]) {
        if (!(type instanceof Array)) type = [type];
        return typeIs(this as unknown as IncomingMessage, type);
    }

    public resume() {
        return;
    }

}
