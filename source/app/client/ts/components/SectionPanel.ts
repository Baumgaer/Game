import { BaseComponentFactory } from '~client/lib/BaseComponent';
import { baseConstructor } from '~bdo/utils/decorators';
import style from "~static/less/components/SectionPanel.less";

/**
 * Manages routing on client side, switches views and collects routes for client.
 *
 * @class GameView
 * @extends ReturnType<BaseComponentFactory<HTMLElement>>
 */
@baseConstructor()
export default class SectionPanel extends BaseComponentFactory(HTMLElement) {

    styleString = style;

}
