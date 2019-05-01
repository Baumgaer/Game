import { BaseComponentFactory } from '~client/components/BaseComponent';
import * as BABYLON from 'babylonjs';

/**
 * Test
 *
 * @export
 * @class GameWindow
 * @extends {BaseComponentFactory(HTMLCanvasElement)}
 */
export default class GameWindow extends BaseComponentFactory(HTMLCanvasElement) {

    /**
     * @inheritdoc
     *
     * @static
     * @memberof GameWindow
     */
    public static readonly extends = "canvas";

    /**
     * Test
     *
     * @protected
     * @memberof GameWindow
     */
    protected engine = new BABYLON.Engine(this, true, {
        audioEngine: true
    });

    /**
     * Test
     *
     * @protected
     * @memberof GameWindow
     */
    protected scene = this.createScene();

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
    protected createScene() {
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
}
customElements.define('game-window', GameWindow, {
    extends: GameWindow.extends
});
