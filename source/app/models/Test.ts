import { ObjectType, Field, ID } from 'type-graphql';
import { baseConstructor } from '~bdo/utils/decorators';
import { BDOModel } from '~bdo/lib/BDOModel';

/**
 * Test
 *
 * @export
 * @class Test
 */
@baseConstructor()
@ObjectType()
export class Test extends BDOModel {
    /**
     * Test
     *
     * @type {string}
     * @memberof Test
     */
    @Field((_type) => ID) public id: string = '0';

    /**
     * Test
     *
     * @type {string}
     * @memberof Test
     */
    @Field() public title: string = 'test';

    /**
     * Test
     *
     * @type {string}
     * @memberof Test
     */
    @Field({ nullable: true }) public description?: string;

    constructor(_params: ConstParams<Test>) {
        super();
    }
}
