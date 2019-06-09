import { BaseComponentFactory } from '~client/lib/BaseComponent';
import { attribute, property } from '~client/utils/decorators';
import { watched, baseConstructor } from '~bdo/utils/decorators';
import { Test } from "~bdo/models/Test";

/**
 * Test
 *
 * @export
 * @class ViewLink
 * @extends {BaseComponentFactory(HTMLAnchorElement)}
 */
@baseConstructor()
export default class ViewLink extends BaseComponentFactory(HTMLAnchorElement) {

    /**
     * @inheritdoc
     *
     * @static
     * @memberof ViewLink
     */
    public static readonly extends?: string = 'a';

    /**
     * Test
     *
     * @type {Test}
     * @memberof ViewLink
     */
    @property() public model: Test = new Test({ id: "1", title: String(Date.now()) });

    /**
     * Test
     *
     * @type {string}
     * @memberof ViewLink
     */
    @watched() @attribute() public test: string = this.model.bind("title");

    /**
     * Test
     *
     * @type {string}
     * @memberof ViewLink
     */
    @watched() @property() public tester: string[] = ["haha"];

    constructor(_params?: ConstParams<ViewLink>) {
        super();
    }

    /**
     * @inheritdoc
     *
     * @memberof ViewLink
     */
    public connectedCallback() {
        super.connectedCallback();
        this.addEventListener("click", this.onLinkClick.bind(this));
    }

    /**
     * Triggers the router to navigate to the href of the link
     *
     * @private
     * @param {Event} event
     * @memberof ViewLink
     */
    private onLinkClick(event: Event): void {
        event.preventDefault();
        window.router.navigate(this.href, true);
    }
}
customElements.define("view-link", ViewLink, { extends: ViewLink.extends });
