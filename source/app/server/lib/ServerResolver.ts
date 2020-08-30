import { BDOResolver } from "~bdo/lib/BDOResolver";
import { query, arg } from "~bdo/utils/decorators";

/**
 * Test
 */
export class ServerResolver extends BDOResolver {

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
