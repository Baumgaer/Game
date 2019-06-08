import { BaseComponentFactory } from '~client/lib/BaseComponent';
import { attribute, property } from '~client/utils/decorators';
import { watched, baseConstructor } from '~bdo/utils/decorators';

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
     * @type {string}
     * @memberof ViewLink
     */
    @watched() @attribute() public test: string = "lalala";

    /**
     * Test
     *
     * @type {string}
     * @memberof ViewLink
     */
    @property() public tester: string = "haha";

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
