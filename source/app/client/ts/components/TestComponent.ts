import { BaseComponentFactory } from '~client/lib/BaseComponent';
import { baseConstructor } from '~bdo/utils/decorators';
import { property } from '~bdo/utils/decorators';

/**
 * Test
 *
 * @export
 * @class TestComponent
 * @extends {BaseComponentFactory(HTMLElement)}
 */
@baseConstructor()
export default class TestComponent extends BaseComponentFactory(HTMLElement) {

    /**
     * @inheritdoc
     *
     * @protected
     * @memberof TestComponent
     */
    @property() protected templateString = require('~static/views/testComponent.njk');

    /**
     * Just a test for the template rendering
     *
     * @protected
     * @type {string}
     * @memberof TestComponent
     */
    @property() protected test: string = "lalala";

}
