import { EventEmitter } from "events";
import * as mime from "mime";
import statuses from "statuses";
import contentDisposition from "content-disposition";
import { extname } from "path";
import encodeUrl from "encodeurl";
import vary from "vary";
import httpErrors from "http-errors";
import { parse as contentTypeParse, format as contentTypeFormat } from "content-type";
import { buf as crc32Buffer } from "crc-32";

import type { Request } from "~client/lib/Request";
import type { ServerResponse } from 'http';
import type { NextFunction } from 'express';
import type Router from "router";

type callback = () => void;
type status = {
    code?: number;
    message?: string;
}

const charsetRegExp = /;\s*charset\s*=/;

export class Response extends EventEmitter {
    public app!: ReturnType<typeof Router>;
    public locals = Object.create(null);
    public headersSent = false;
    public statusCode: number = 200;
    public statusMessage = 'OK';
    public finished = false;
    public sendDate = false;

    public req!: Request;

    private kOutHeaders: Record<string, any> = {};

    private sendFunction!: (body?: any, encoding?: BufferEncoding, header?: string[][], status?: status) => void;

    private eTagGenerationEnabled: boolean = true;

    public status(code: number) {
        this.statusCode = code;
        return this;
    }

    public get(field: string) {
        return this.getHeader(field);
    }

    public set(field: string, val: string | string[]) {
        return this.header(field, val);
    }

    public setSendFunction(sendFunction: Response["sendFunction"]) {
        if (typeof this.sendFunction === "function") return;
        this.sendFunction = sendFunction;
    }

    public header(field: string | Record<string, string | string[]>, val: string | string[]) {
        if (typeof field === "string" && val) {
            let value = Array.isArray(val) ? val.map(String) : String(val);
            // add charset to content-type
            if (field.toLowerCase() === 'content-type') {
                if (Array.isArray(value)) throw new TypeError('Content-Type cannot be set to an Array');
                if (!charsetRegExp.test(value)) {
                    const charset = mime.getType(value.split(';')[0]);
                    if (charset) value += '; charset=' + charset.toLowerCase();
                }
            }
            this.setHeader(field, value);
        } else if (typeof field === "object") {
            for (const key in field) {
                if (key in field) this.set(key, field[key]);
            }
        }
        return this;
    }

    public getHeader(name: string) {
        const headers = this.kOutHeaders;
        if (headers === null) return;
        const entry = headers[name.toLowerCase()];
        return entry && entry[1];
    }

    public setHeader(name: string, value: string | string[]) {
        if (this.headersSent) throw new Error("HTTP headers sent");
        let headers = this.kOutHeaders;
        if (headers === null) this.kOutHeaders = headers = Object.create(null);
        headers[name.toLowerCase()] = [name, value];
        return this;
    }

    public removeHeader(name: string) {
        if (this.kOutHeaders !== null) delete this.kOutHeaders[name];
        return this;
    }

    public links(links: Record<string, string>) {
        let link = this.get('Link') || '';
        if (link) link += ', ';
        return this.set('Link', link + Object.keys(links).map((rel) => {
            return '<' + links[rel] + '>; rel="' + rel + '"';
        }).join(', '));
    }

    public type(type: string) {
        return this.contentType(type);
    }

    public contentType(type: string) {
        const ct = type.indexOf('/') === -1 ? mime.getType(type) : type;
        if (!ct) return this;
        return this.set('Content-Type', ct);
    }

    public attachment(filename: string) {
        if (filename) this.type(extname(filename));
        return this.set('Content-Disposition', contentDisposition(filename));
    }

    public append(field: string, val: string | string[]) {
        const prev = this.get(field);
        let value = val;
        if (prev) value = Array.isArray(prev) ? prev.concat(val) : Array.isArray(val) ? [prev].concat(val) : [prev, val];
        return this.set(field, value);
    }

    public location(url: string) {
        let loc = url;

        // "back" is an alias for the referrer
        if (url === 'back') {
            let referer = this.req.get('Referrer');
            if (referer instanceof Array) referer = referer[0];
            loc = referer || '/';
        }

        // set location
        return this.set('Location', encodeUrl(loc));
    }

    public vary(field: string) {
        vary(this as unknown as ServerResponse, field);
        return this;
    }

    public send(body?: any) {
        const req = this.req;
        const generateETag = !this.get('ETag') && this.eTagGenerationEnabled;

        let chunk = body;
        let encoding: BufferEncoding | undefined;
        let type;

        switch (typeof chunk) {
            // string defaulting to html
            case 'string':
                if (!this.get('Content-Type')) this.type('html');
                break;
            case 'boolean':
            case 'number':
            case 'object':
                if (chunk === null) {
                    chunk = '';
                } else if (Buffer.isBuffer(chunk)) {
                    if (!this.get('Content-Type')) this.type('bin');
                } else return this.json(chunk);
                break;
        }

        // write strings in utf-8
        if (typeof chunk === 'string') {
            encoding = 'utf8';
            type = this.get('Content-Type');
            // reflect this in content-type
            if (typeof type === 'string') this.set('Content-Type', this.setCharset(type, 'utf-8'));
        }

        // populate Content-Length
        let len;
        if (chunk !== undefined) {
            if (Buffer.isBuffer(chunk)) {
                // get length of Buffer
                len = chunk.length;
            } else if (!generateETag && chunk.length < 1000) {
                // just calculate length when no ETag + small chunk
                len = Buffer.byteLength(chunk, encoding);
            } else {
                // convert chunk to Buffer and calculate
                chunk = Buffer.from(chunk, encoding);
                encoding = undefined;
                len = chunk.length;
            }

            this.set('Content-Length', len);
        }

        // populate ETag
        let eTag;
        if (generateETag && len !== undefined && (eTag = this.generateETag(chunk))) this.set('ETag', eTag);

        // freshness
        if (req.fresh) this.statusCode = 304;

        // strip irrelevant headers
        if (204 === this.statusCode || 304 === this.statusCode) {
            this.removeHeader('Content-Type');
            this.removeHeader('Content-Length');
            this.removeHeader('Transfer-Encoding');
            chunk = '';
        }

        if (req.method === 'HEAD') {
            // skip body for HEAD
            this.end();
        } else this.end(chunk, encoding);

        return this;
    }

    public json(obj?: any): this {
        const body = obj ? JSON.stringify(obj) : undefined;
        // content-type
        if (!this.get('Content-Type')) this.set('Content-Type', 'application/json');
        return this.send(body);
    }

    public jsonp(obj?: any) {
        const body = obj ? JSON.stringify(obj) : undefined;
        // content-type
        if (!this.get('Content-Type')) {
            this.set('X-Content-Type-Options', 'nosniff');
            this.set('Content-Type', 'application/json');
        }
        return this.send(body);
    }

    public sendStatus(statusCode: number) {
        const body = statuses.code[statusCode] || String(statusCode);
        this.statusCode = statusCode;
        this.type('txt');
        return this.send(body);
    }

    public end(bodyOrCallback?: any | callback, encodingOrCallback?: BufferEncoding | callback, callback?: callback) {
        const status = { code: this.statusCode, message: this.statusMessage };
        let theBody: any | undefined;
        let theEncoding: BufferEncoding | undefined;
        let theCallback: callback | undefined;

        if (this.headersSent || this.finished) return;

        if (typeof bodyOrCallback === "function") {
            theCallback = bodyOrCallback;
        } else if (typeof encodingOrCallback === "function" && typeof bodyOrCallback !== "function") {
            theBody = bodyOrCallback;
            theCallback = encodingOrCallback;
        } else if (typeof callback === "function" && typeof bodyOrCallback !== "function" && typeof encodingOrCallback !== "function") {
            theBody = bodyOrCallback;
            theEncoding = encodingOrCallback;
            theCallback = callback;
        } else if (bodyOrCallback && encodingOrCallback && typeof bodyOrCallback !== "function" && typeof encodingOrCallback !== "function") {
            theBody = bodyOrCallback;
            theEncoding = encodingOrCallback;
        } else theBody = bodyOrCallback;

        if (!theEncoding) theEncoding = "utf-8";
        this.headersSent = true;
        this.sendFunction(theBody, theEncoding, Object.values(this.kOutHeaders), status);
        if (theCallback) theCallback();
        this.finished = true;
    }

    public format(obj: Record<string, (request: Request, response: Response, next: NextFunction) => void>) {
        const req = this.req;
        const next = req.next;

        const fn = obj.default;
        if (obj.default) delete obj.default;

        const keys = Object.keys(obj);
        let key = keys.length > 0 ? req.accepts(keys) : false;

        this.vary("Accept");

        if (key) {
            if (key instanceof Array) key = key[0];
            this.set('Content-Type', mime.getType(key) || "text/html");
            obj[key](req, this, next);
        } else if (fn) {
            fn(req, this, next);
        } else {
            const error = new httpErrors.NotAcceptable();
            error.status = error.statusCode = 406;
            error.types = keys.map(mime.getType);
            next(error);
        }
        return this;
    }

    private setCharset(type: string, charset: string) {
        if (!type || !charset) return type;
        // parse type
        const parsed = contentTypeParse(type);
        // set charset
        parsed.parameters.charset = charset;
        // format type
        return contentTypeFormat(parsed);
    }

    private generateETag(body?: Buffer) {
        if (!body) return '"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk"';
        return `${body.length}-${crc32Buffer(body).toString().substr(0, 27)}`;
    }
}
