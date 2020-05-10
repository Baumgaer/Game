import { BaseComponentFactory } from '~client/lib/BaseComponent';
import { property, attribute, baseConstructor, watched } from '~bdo/utils/decorators';
import { Test1 } from "~client/models/Test1";
import { Logger } from "~client/lib/Logger";

const logger = new Logger();

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
     * @memberof ViewLink
     */
    @attribute() public model: Test1 = new Test1({ title: String(Date.now()) });

    /**
     * Test
     *
     * @type {string}
     * @memberof ViewLink
     */
    @attribute() public test: string = this.model.bind("title");

    /**
     * Test
     *
     * @type {string[]}
     * @memberof ViewLink
     */
    @watched() @attribute() public tester: string[] = this.model.bind("tester");

    /**
     * This is a test object
     *
     * @type {Object}
     * @memberof ViewLink
     */
    @property() public testen: Object = {};

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
     * @param {this["test"]} value
     * @memberof ViewLink
     */
    protected onTestTypeCheck(value: this["test"]) {
        logger.info("checking type of test with value", value);  // tslint:disable-line
    }

    /**
     * Test
     *
     * @protected
     * @memberof ViewLink
     */
    protected onTestTypeCheckSuccess() {
        console.log("Typecheck of test successful");  // tslint:disable-line
    }

    /**
     * Test
     *
     * @protected
     * @memberof ViewLink
     */
    protected onTestTypeCheckFail(error: Error) {
        console.log("Typecheck of test failed", error);  // tslint:disable-line
    }

    /**
     * Test
     *
     * @protected
     * @param {this["test"]} changed
     * @memberof ViewLink
     */
    protected onTestChange(changed: this["tester"]) {
        console.log("test changed", changed, this);  // tslint:disable-line
    }

    /**
     * Test
     *
     * @protected
     * @param {this["test"]} init
     * @memberof ViewLink
     */
    protected onTesterInit(init: this["tester"]) {
        console.log("tester init", init, this);  // tslint:disable-line
    }

    /**
     * Test
     *
     * @protected
     * @param {this["test"]} changed
     * @memberof ViewLink
     */
    protected onTesterChange(changed: this["tester"]) {
        console.log("tester changed", changed, this);  // tslint:disable-line
    }

    /**
     * Test
     *
     * @protected
     * @param {this["test"]} added
     * @memberof ViewLink
     */
    protected onTesterAdd(added: this["tester"]) {
        console.log("tester added", added, this);  // tslint:disable-line
    }

    /**
     * Test
     *
     * @protected
     * @param {this["test"]} removed
     * @memberof ViewLink
     */
    protected onTesterRemove(removed: this["tester"]) {
        console.log("tester removed", removed, this);  // tslint:disable-line
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
