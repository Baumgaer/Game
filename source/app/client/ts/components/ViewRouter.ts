import { BaseComponentFactory } from '~client/lib/BaseComponent';
import { baseConstructor } from '~bdo/utils/decorators';
import { WebClient } from "~client/WebClient";

/**
 * Manages routing on client side, switches views and collects routes for client.
 *
 * @class GameView
 * @extends ReturnType<BaseComponentFactory<HTMLElement>>
 */
@baseConstructor()
export default class ViewRouter extends BaseComponentFactory(HTMLElement) {

    /**
     * @inheritdoc
     *
     * @protected
     * @memberof GameView
     */
    protected connectedCallback() {
        super.connectedCallback();
        new WebClient();
    }

}
