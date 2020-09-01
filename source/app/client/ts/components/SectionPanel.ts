import { BaseComponentFactory } from '~client/lib/BaseComponent';
import { baseConstructor, attribute } from '~bdo/utils/decorators';
import { Logger } from "~client/lib/Logger";
import style from "~static/less/components/SectionPanel.less";

const logger = new Logger();
/**
 * Manages routing on client side, switches views and collects routes for client.
 *
 * @class GameView
 * @extends ReturnType<BaseComponentFactory<HTMLElement>>
 */
@baseConstructor()
export default class SectionPanel extends BaseComponentFactory(HTMLElement) {


    @attribute() public aligned: string = "";

    styleString = style;

    /**
     * @inheritdoc
     *
     * @protected
     * @memberof GameView
     */
    protected connectedCallback() {
        super.connectedCallback();
        logger.log("SectionPanel connected");
    }

}
