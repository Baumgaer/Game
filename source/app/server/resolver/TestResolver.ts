import { Resolver, Query, Arg } from 'type-graphql';
import { Test } from './../../models/Test';

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
    public meep(): string {
        return 'test';
    }

    /**
     * Test
     *
     * @param {string} id
     * @returns {Test}
     * @memberof BaseResolver
     */
    public test(@Arg('id') id: string): Test {
        const test = new Test();
        test.id = 'id';
        test.description = 'joa gä?';
        test.title = 'Voll der titel von' + id;
        return test;
    }
}
/**
 * Test
 *
 * @export
 * @class TestResolver
 * @extends {BaseResolver}
 */
@Resolver((_of) => Test)
export default class TestResolver extends BaseResolver {
    /**
     * Test
     *
     * @param {string} id
     * @returns {Test}
     * @memberof TestResolver
     */
    @Query((_returns) => Test)
    public test(@Arg('lol') id: string): Test {
        const test = new Test();
        test.id = id;
        // test.description = 'joa gä?';
        test.title = 'Voll der titel...';
        return test;
    }
}
