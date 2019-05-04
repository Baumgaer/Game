import { BaseComponentFactory } from '~client/lib/BaseComponent';

/**
 * Test
 *
 * @export
 * @class ViewLink
 * @extends {BaseComponentFactory(HTMLAnchorElement)}
 */
export default class ViewLink extends BaseComponentFactory(HTMLAnchorElement) {

    /**
     * @inheritdoc
     *
     * @static
     * @memberof ViewLink
     */
    public static readonly extends = 'a';

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
