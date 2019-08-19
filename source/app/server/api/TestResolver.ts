import { Test1 } from "~server/models/Test1";
import { resolver, arg, query } from "~bdo/utils/decorators";

/**
 * Test
 *
 * @class BaseResolver
 */
class BaseResolver {
    /**
     * Test
     *
     * @returns {string}
     * @memberof BaseResolver
     */
    @query()
    public resolverName(@arg("id") _id: string): string {
        return this.constructor.name;
    }
}
/**
 * Test
 *
 * @export
 * @class TestResolver
 * @extends {BaseResolver}
 */
@resolver(Test1)
export default class TestResolver extends BaseResolver {

    /**
     * Test
     *
     * @param {string} id
     * @returns {Test1}
     * @memberof TestResolver
     */
    @query((_returns) => Test1.graphQLType)
    public lalala(@arg("id") id: string): Test1 {
        return new Test1({
            id,
            title: "hahahahahahahahahahahahaha",
            description: "hicks............",
            oha: "joah"
        });
    }
}
