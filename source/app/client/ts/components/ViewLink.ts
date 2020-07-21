import { BaseComponentFactory } from '~client/lib/BaseComponent';
import { property, attribute, baseConstructor, watched } from '~bdo/utils/decorators';
import { Test1 } from "~client/models/Test1";
import { Logger } from "~client/lib/Logger";

const logger = new Logger();

/**
 * Test
 *
 * @class ViewLink
 * @extends ReturnType<BaseComponentFactory<HTMLAnchorElement>>
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
     * @memberof ViewLink
     */
    @property() public testen = {};

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
     * @param value The value which will be checked
     * @memberof ViewLink
     */
    protected onTestTypeCheck(value: this["test"]) {
        logger.info("checking type of test with value", value);
    }

    /**
     * Test
     *
     * @protected
     * @memberof ViewLink
     */
    protected onTestTypeCheckSuccess() {
        console.log("Typecheck of test successful");  // eslint-disable-line
    }

    /**
     * Test
     *
     * @protected
     * @param error The error which occurs
     * @memberof ViewLink
     */
    protected onTestTypeCheckFail(error: Error) {
        console.log("Typecheck of test failed", error);  // eslint-disable-line
    }

    /**
     * Test
     *
     * @protected
     * @param changed The old value of test
     * @memberof ViewLink
     */
    protected onTestChange(changed: this["tester"]) {
        console.log("test changed", changed, this);  // eslint-disable-line
    }

    /**
     * Test
     *
     * @protected
     * @param init The initialization value of tester
     * @memberof ViewLink
     */
    protected onTesterInit(init: this["tester"]) {
        console.log("tester init", init, this);  // eslint-disable-line
    }

    /**
     * Test
     *
     * @protected
     * @param changed The old value of tester
     * @memberof ViewLink
     */
    protected onTesterChange(changed: this["tester"]) {
        console.log("tester changed", changed, this);  // eslint-disable-line
    }

    /**
     * Test
     *
     * @protected
     * @param added The added value to tester
     * @memberof ViewLink
     */
    protected onTesterAdd(added: this["tester"][0]) {
        console.log("tester added", added, this);  // eslint-disable-line
    }

    /**
     * Test
     *
     * @protected
     * @param removed The removed value from tester
     * @memberof ViewLink
     */
    protected onTesterRemove(removed: this["tester"][0]) {
        console.log("tester removed", removed, this);  // eslint-disable-line
    }

    /**
     * Triggers the router to navigate to the href of the link
     *
     * @private
     * @param event The event which happened on click
     * @memberof ViewLink
     */
    private onLinkClick(event: MouseEvent): void {
        event.preventDefault();
        window.router.navigate(this.href, true);
    }
}
