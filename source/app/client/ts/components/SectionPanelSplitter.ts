import { BaseComponentFactory } from '~client/lib/BaseComponent';
import { baseConstructor, attribute } from '~bdo/utils/decorators';
import style from "~static/less/components/SectionPanelSplitter.less";
import template from "~static/views/SectionPanelSplitter.njk";

import type SectionPanel from "~client/components/SectionPanel";


interface ICoordinates {
    x: number;
    y: number;
}

interface ISizes {
    prev: { height: number, width: number }
    next: { height: number, width: number }
}

/**
 * Manages routing on client side, switches views and collects routes for client.
 *
 * @class GameView
 * @extends ReturnType<BaseComponentFactory<HTMLElement>>
 */
@baseConstructor()
export default class SectionPanelSplitter extends BaseComponentFactory(HTMLElement) {

    /**
     * The direction how the splitter should split the section-panels.
     * Vertical means horizontal sliding and vise versa.
     *
     * @memberof SectionPanelSplitter
     */
    @attribute() public direction: string = "vertical";

    /**
     * The section-panel which should be collapsed or expanded on click
     *
     * @memberof SectionPanelSplitter
     */
    @attribute() public collapsibleSection: string = "next";

    /**
     * @inheritdoc
     *
     * @protected
     * @memberof SectionPanelSplitter
     */
    protected styleString = style;

    /**
     * @inheritdoc
     *
     * @protected
     * @memberof SectionPanelSplitter
     */
    protected templateString = template;

    /**
     * The coordinates of the initial mouse down of the current resize action
     *
     * @private
     * @memberof SectionPanelSplitter
     */
    private initialCoordinates: ICoordinates | null = null;

    /**
     * The sizes of the previous and next sibling, which should be a section-panel,
     * determined on the initial mouse down of the current resize action.
     *
     * @private
     * @memberof SectionPanelSplitter
     */
    private initialSizes: ISizes | null = null;

    /**
     * The section-panel before this splitter as a direct sibling
     *
     * @private
     * @memberof SectionPanelSplitter
     */
    private prevSection: SectionPanel | null = null;

    /**
     * The section-panel after this splitter as a direct sibling
     *
     * @private
     * @memberof SectionPanelSplitter
     */
    private nextSection: SectionPanel | null = null;

    private wasResize: boolean = false;

    /**
     * @inheritdoc
     *
     * @protected
     * @memberof SectionPanelSplitter
     */
    protected constructedCallback() {
        // Bind the target one times to avoid changing identity of functions
        // when assigning them zu the corresponding event listener
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onmousedown = this.onMouseDown.bind(this);
        this.onclick = this.onClick.bind(this);
    }

    /**
     * Collapses or expands the given collapsible component
     *
     * @private
     * @memberof SectionPanelSplitter
     */
    private onClick() {
        if (this.wasResize) {
            this.wasResize = false;
            return;
        }

        let componentToCollapseOrExpand;
        if (this.collapsibleSection === "next") {
            componentToCollapseOrExpand = this.nextComponentSibling;
        } else if (this.collapsibleSection === "previous") componentToCollapseOrExpand = this.previousComponentSibling;

        if (!componentToCollapseOrExpand) return;
        const style = getComputedStyle(componentToCollapseOrExpand);

        let sizeToChange: "maxWidth" | "maxHeight";
        if (this.direction === "horizontal") {
            sizeToChange = "maxWidth";
        } else sizeToChange = "maxHeight";

        if (style[sizeToChange] === "0px") {
            componentToCollapseOrExpand.removeStyle(sizeToChange);
        } else componentToCollapseOrExpand.setStyle(sizeToChange, "0px");
    }

    /**
     * Determines the starting parameters of the drag action to be able to calculate deltas
     *
     * @private
     * @param event The event which is passed in by the event listener
     * @memberof SectionPanelSplitter
     */
    private onMouseDown(event: MouseEvent) {
        event.preventDefault();
        this.prevSection = <SectionPanel | null>this.previousComponentSibling;
        this.nextSection = <SectionPanel | null>this.nextComponentSibling;
        if (!this.prevSection || !this.nextSection) return;
        this.initialCoordinates = { x: event.clientX, y: event.clientY };
        this.initialSizes = {
            prev: { height: this.prevSection.clientHeight, width: this.prevSection.clientWidth },
            next: { height: this.nextSection.clientHeight, width: this.nextSection.clientWidth }
        };
        window.addEventListener("mousemove", this.onMouseMove);
        window.addEventListener("mouseup", this.onMouseUp);
    }

    /**
     * Calculates deltas from the values of mouse down and current event and
     * assigns the result to the section panels as width or height
     *
     * @private
     * @param event The event which is passed in by the event listener
     * @memberof SectionPanelSplitter
     */
    private onMouseMove(event: MouseEvent) {
        event.preventDefault();
        // Omit if something is missing
        if (!this.initialCoordinates || !this.prevSection || !this.nextSection || !this.initialSizes) return;

        // Do nothing is mouse hasn't moved yet
        if (event.clientX === this.initialCoordinates.x || event.clientY === this.initialCoordinates.y) return;

        this.wasResize = true;
        let prevSize, nextSize, offset;
        let direction: "height" | "width";

        if (this.direction === "horizontal") {
            // calculate height
            prevSize = this.initialSizes.prev.height + (event.clientY - this.initialCoordinates.y);
            nextSize = this.initialSizes.next.height - (event.clientY - this.initialCoordinates.y);
            direction = "height";
            offset = this.clientHeight / 2;
        } else {
            // Calculate width
            prevSize = this.initialSizes.prev.width + (event.clientX - this.initialCoordinates.x);
            nextSize = this.initialSizes.next.width - (event.clientX - this.initialCoordinates.x);
            direction = "width";
            offset = this.clientWidth / 2;
        }

        // Do not resize for values <= 0 to avoid overlapping
        if (prevSize <= 0 || nextSize <= 0) return;
        this.prevSection.setStyle(direction, `${Math.ceil(prevSize + offset)}px`);
        this.nextSection.setStyle(direction, `${Math.ceil(nextSize + offset)}px`);
    }

    /**
     * Resets all values to free memory and avoiding actions by dead event listeners
     *
     * @private
     * @memberof SectionPanelSplitter
     */
    private onMouseUp() {
        this.initialCoordinates = null;
        this.initialSizes = null;
        this.prevSection = null;
        this.nextSection = null;
        window.removeEventListener("mousemove", this.onMouseMove);
        window.removeEventListener("mouseup", this.onMouseUp);
    }

}
