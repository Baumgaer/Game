import { ObjectType, Field, ID } from 'type-graphql';

/**
 * Test
 *
 * @export
 * @class Test
 */
@ObjectType()
export class Test {
    /**
     * Test
     *
     * @type {string}
     * @memberof Test
     */
    @Field((_type) => ID)
    id: string = '0';

    /**
     * Test
     *
     * @type {string}
     * @memberof Test
     */
    @Field() title: string = 'test';

    /**
     * Test
     *
     * @type {string}
     * @memberof Test
     */
    @Field({ nullable: true })
    description?: string;
}
