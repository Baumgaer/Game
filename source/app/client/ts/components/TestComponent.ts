import { BaseComponentFactory } from './BaseComponent';

/**
 * Test
 *
 * @export
 * @class TestComponent
 * @extends {BaseComponentFactory(HTMLElement)}
 */
export class TestComponent extends BaseComponentFactory(HTMLElement) { }
customElements.define("test-component", TestComponent);
