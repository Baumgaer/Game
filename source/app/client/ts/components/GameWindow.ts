import { BaseComponentFactory } from '~client/lib/BaseComponent';
import { baseConstructor } from '~bdo/utils/decorators';
import * as BABYLON from 'babylonjs';

/**
 * Test
 *
 * @export
 * @class GameWindow
 * @extends {BaseComponentFactory(HTMLCanvasElement)}
 */
@baseConstructor()
export default class GameWindow extends BaseComponentFactory(HTMLCanvasElement) {

    /**
     * @inheritdoc
     *
     * @static
     * @type {string}
     * @memberof GameWindow
     */
    public static readonly extends: string = "canvas";

    /**
     * Test
     *
     * @protected
     * @type {BABYLON.Engine}
     * @memberof GameWindow
     */
    protected engine: BABYLON.Engine = new BABYLON.Engine(this, true, {
        audioEngine: true
    });

    /**
     * Test
     *
     * @protected
     * @type {BABYLON.Scene}
     * @memberof GameWindow
     */
    protected scene: BABYLON.Scene = this.createScene();

    /**
     * @inheritdoc
     *
     * @memberof GameWindow
     */
    public connectedCallback() {
        this.style.height = `100%`;
        this.style.width = `100%`;
        this.engine.runRenderLoop(() => {
            this.scene.render();
        });
        this.engine.resize();
        window.addEventListener('resize', () => {
            this.width = window.innerWidth;
            this.height = window.innerHeight;
        });
    }

    /**
     * Creates a BABYLON scene with basic support
     *
     * @protected
     * @returns
     * @memberof GameWindow
     */
    protected createScene(): BABYLON.Scene {
        // Create a basic BJS Scene object.
        const scene = new BABYLON.Scene(this.engine);
        // Create a FreeCamera, and set its position to (x:0, y:5, z:-10).
        const camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(0, 5, -10), scene);
        // Target the camera to scene origin.
        camera.setTarget(BABYLON.Vector3.Zero());
        // Attach the camera to the canvas.
        camera.attachControl(this, false);
        // Create a basic light, aiming 0,1,0 - meaning, to the sky.
        const light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
        light.shadowEnabled = true;
        // Create a built-in "sphere" shape.
        const sphere = BABYLON.MeshBuilder.CreateSphere('sphere', { segments: 16, diameter: 2 }, scene);
        // Move the sphere upward 1/2 of its height.
        sphere.position.y = 1;
        // Create a built-in "ground" shape.
        BABYLON.MeshBuilder.CreateGround('ground1', { height: 6, width: 6, subdivisions: 2 }, scene);
        // Return the created scene.
        return scene;
    }

    /**
     * Test
     *
     * @protected
     * @memberof GameWindow
     */
    protected createTerrain() { }
}
customElements.define('game-window', GameWindow, {
    extends: GameWindow.extends
});
