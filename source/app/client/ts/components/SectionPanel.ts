import { BaseComponentFactory } from '~client/lib/BaseComponent';
import { baseConstructor } from '~bdo/utils/decorators';
import style from "~static/less/components/SectionPanel.less";

/**
 * Provides a handlable style for resizing and collapsing
 *
 * @class GameView
 * @extends ReturnType<BaseComponentFactory<HTMLElement>>
 */
@baseConstructor()
export default class SectionPanel extends BaseComponentFactory(HTMLElement) {

    styleString = style;

}
