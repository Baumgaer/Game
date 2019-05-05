import { BaseComponentFactory } from '~client/lib/BaseComponent';
import { baseConstructor } from '~bdo/utils/decorators';

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
     * Defines a class attribute...
     *
     * @type {string}
     * @memberof TestComponent
     */
    public className: string = 'test';

    /**
     * @inheritdoc
     *
     * @protected
     * @memberof TestComponent
     */
    protected templateString = require('~static/views/testComponent.njk');

}
customElements.define('test-component', TestComponent);
