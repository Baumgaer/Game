import { ClientRoute } from '~client/lib/ClientRoute';
import { BDOApiFactory } from '~bdo/routes/BDOApi';
import { Logger } from "~client/lib/Logger";
import schema from "~client/interfaces/api.json";

import AJV from 'ajv';

import type { Request, Response } from "express";

const logger = new Logger();

/**
 * @inheritdoc
 *
 * @extends ReturnType<BDOApiFactory<ClientRoute>>
 */
export default class Api extends BDOApiFactory(ClientRoute) {

    private ajv = new AJV();

    constructor(environment: any) {
        super(environment);
        for (const modelSchemaName in schema.definitions) {
            if (Object.prototype.hasOwnProperty.call(schema.definitions, modelSchemaName)) {
                const modelSchema = (<Record<string, any>>schema.definitions)[modelSchemaName];
                this.ajv.addSchema(modelSchema, `#/definitions/${modelSchemaName}`);
            }
        }
    }

    protected async templateParams(request: Request, _response: Response) {
        logger.log("ja ne is klar", "log", request.query.attributes);
        // const attributesToLoad: attributes<any> = request.query.attributes;
        // if (!attributesToLoad || !isArray(attributesToLoad)) {
        //     return response.send(new httpErrors.BadRequest("No attributes requested or Attributes are not in an array"));
        // }
        logger.log("!APIIIII");
        return {};
    }
}
