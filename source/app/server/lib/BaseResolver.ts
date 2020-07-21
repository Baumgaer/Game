import { query, arg } from "~bdo/utils/decorators";

/**
 * Test
 */
export class BaseResolver {

    /**
     * Test
     *
     * @param id The ID of the model
     * @returns A test string
     * @memberof BaseResolver
     */
    @query()
    public resolverName(@arg("id") id: string): string {
        return "lalala" + id;
    }

}
