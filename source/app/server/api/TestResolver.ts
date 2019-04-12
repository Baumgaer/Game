import { Resolver, Query } from 'type-graphql';

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
@Resolver()
export default class TestResolver extends BaseResolver { }
