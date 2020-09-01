import { BaseComponentFactory } from '~client/lib/BaseComponent';
import { baseConstructor } from '~bdo/utils/decorators';
import { Logger } from "~client/lib/Logger";

import type SectionPanel from "~client/components/SectionPanel";

import style from "~static/less/components/SectionPanelSplitter.less";

interface ICoordinates {
    x: number;
    y: number;
}

interface ISizes {
    prev: { height: number, width: number }
    next: { height: number, width: number }
}

const logger = new Logger();
/**
 * Manages routing on client side, switches views and collects routes for client.
 *
 * @class GameView
 * @extends ReturnType<BaseComponentFactory<HTMLElement>>
 */
@baseConstructor()
export default class SectionPanelSplitter extends BaseComponentFactory(HTMLElement) {

    protected styleString = style;

    private prevCoordinates: ICoordinates | null = null;

    private prevSizes: ISizes | null = null;

    private prevSection: SectionPanel | null = null;

    private nextSection: SectionPanel | null = null;

    /**
     * @inheritdoc
     *
     * @protected
     * @memberof GameView
     */
    protected connectedCallback() {
        super.connectedCallback();
        logger.log("SectionPanelSplitter connected");

        this.addEventListener("mousedown", this.onMouseDown.bind(this));
    }

    private onMouseDown(event: MouseEvent) {
        this.prevSection = <SectionPanel>this.previousComponentSibling;
        this.nextSection = <SectionPanel>this.nextComponentSibling;
        this.prevCoordinates = { x: event.clientX, y: event.clientY };
        this.prevSizes = {
            prev: { height: this.prevSection.clientHeight, width: this.prevSection.clientWidth },
            next: { height: this.nextSection.clientHeight, width: this.nextSection.clientWidth }
        };
        window.addEventListener("mousemove", this.onMouseMove.bind(this));
        window.addEventListener("mouseup", this.reset.bind(this));
    }

    private onMouseMove(event: MouseEvent) {
        if (!this.prevCoordinates) return;
        if (!this.prevSection || !this.nextSection || !this.prevSizes) return;

        const prevWidth = this.prevSizes.prev.width + (event.clientX - this.prevCoordinates.x);
        const nextWidth = this.prevSizes.next.width - (event.clientX - this.prevCoordinates.x);

        if (prevWidth <= 0 || nextWidth <= 0) return;

        this.prevSection.setStyle("width", `${Math.ceil(prevWidth + 4)}px`);
        this.nextSection.setStyle("width", `${Math.ceil(nextWidth + 4)}px`);
    }

    private reset() {
        setTimeout(() => {
            this.prevCoordinates = null;
            window.removeEventListener("mousemove", this.onMouseMove.bind(this));
            window.removeEventListener("mouseup", this.reset.bind(this));
        }, 100);
    }

}
