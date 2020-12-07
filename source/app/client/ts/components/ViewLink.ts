import { BaseComponentFactory } from '~client/lib/BaseComponent';
import { property, attribute, baseConstructor, watched } from '~bdo/utils/decorators';
import { Folder } from "~client/models/Folder";
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
    @attribute() public model: Folder = new Folder({ name: String(Date.now()) });

    /**
     * Test
     *
     * @type {string}
     * @memberof ViewLink
     */
    @attribute() public test: string = this.model.bind("name");

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
    @watched() @property() public testen: string[] = [];

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

}
