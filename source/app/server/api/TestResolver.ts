import { Resolver, Query } from 'type-graphql';
import { Test } from "~bdo/models/Test";

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
    @Query()
    public resolverName(): string {
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
@Resolver(Test)
export default class TestResolver extends BaseResolver { }
