import { BaseComponentFactory } from '~client/lib/BaseComponent';
import { attribute, property, watched, baseConstructor } from '~bdo/utils/decorators';
import { Test1 } from "~client/models/Test1";

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
    public static readonly extends: string = 'a';

    /**
     * Test
     *
     * @type {Test}
     * @memberof ViewLink
     */
    @property() public model: Test1 = new Test1({ id: "1", title: String(Date.now()), oha: "oha..." });

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
    @watched({
        onRemove: "onTesterChange",
        onInit: "onTesterChange"
    }) @property() public tester: string[] = ["haha"];

    constructor(_params?: ConstParams<ViewLink>) {
        super();
    }

    /**
     * @inheritdoc
     *
     * @memberof ViewLink
     */
    public constructedCallback() {
        super.constructedCallback();
        this.addEventListener("click", this.onLinkClick.bind(this));
    }

    /**
     * Test
     *
     * @protected
     * @param {string} added
     * @memberof ViewLink
     */
    protected onTesterAdd(_added: this["tester"]): void {
        // console.log("tester added", added);
    }

    /**
     * Test
     *
     * @protected
     * @param {string} changed
     * @memberof ViewLink
     */
    protected onTesterChange(_changed: this["tester"]): void {
        // console.log("tester changed", this, changed);
    }

    /**
     * Test
     *
     * @protected
     * @param {this["test"]} changed
     * @memberof ViewLink
     */
    protected onTestChange(_changed: this["test"]) {
        // console.log("title changed", changed);
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
