import { BaseComponentFactory } from '~client/components/BaseComponent';

/**
 * Test
 *
 * @export
 * @class TestComponent
 * @extends {BaseComponentFactory(HTMLElement)}
 */
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
