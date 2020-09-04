import { BaseComponentFactory } from '~client/lib/BaseComponent';
import { baseConstructor } from '~bdo/utils/decorators';
import { Logger } from "~client/lib/Logger";
import template from "~static/views/WebClient.njk";
import style from "~static/less/components/WebClient.less";

import "~client/components/SectionPanel";
import "~client/components/SectionPanelSplitter";
import "~client/components/TabBar";
import "~client/components/ContentPanel";

const logger = new Logger();
/**
 * Manages routing on client side, switches views and collects routes for client.
 *
 * @class GameView
 * @extends ReturnType<BaseComponentFactory<HTMLElement>>
 */
@baseConstructor()
export default class WebClient extends BaseComponentFactory(HTMLElement) {

    templateString = template;

    styleString = style;

    /**
     * @inheritdoc
     *
     * @protected
     * @memberof GameView
     */
    protected connectedCallback() {
        super.connectedCallback();
        logger.log("WebClient loaded");
        this.addEventListener("test", (event: Event) => logger.log(event));
    }

}
