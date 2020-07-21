import { BaseComponentFactory } from '~client/lib/BaseComponent';
import { baseConstructor , property } from '~bdo/utils/decorators';

import template from "~static/views/testComponent.njk";
import style from "~static/less/components/TestComponent.less";

/**
 * Test
 *
 * @class TestComponent
 * @extends ReturnType<BaseComponentFactory<HTMLElement>>
 */
@baseConstructor()
export default class TestComponent extends BaseComponentFactory(HTMLElement) {

    /**
     * @inheritdoc
     *
     * @protected
     * @memberof TestComponent
     */
    @property() protected templateString = template;

    /**
     * @inheritdoc
     *
     * @protected
     * @memberof TestComponent
     */
    @property() protected styleString = style;

    /**
     * Just a test for the template rendering
     *
     * @protected
     * @type {string}
     * @memberof TestComponent
     */
    @property() protected test: string = this.translation("hello");

}
