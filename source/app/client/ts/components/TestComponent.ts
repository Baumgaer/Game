import { BaseComponentFactory } from './BaseComponent';

/**
 * Test
 *
 * @export
 * @class TestComponent
 * @extends {BaseComponentFactory(HTMLElement)}
 */
export class TestComponent extends BaseComponentFactory(HTMLElement) {
    /**
     * Defines a class attribute...
     *
     * @type {string}
     * @memberof TestComponent
     */
    public _class: string = 'test';

    /**
     * @inheritdoc
     *
     * @protected
     * @memberof TestComponent
     */
    protected connectedCallback() {
        super.connectedCallback();
    }
}
customElements.define('test-component', TestComponent);
