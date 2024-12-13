import Game from './Game.js';
import CanvasRenderer from './CanvasRenderer.js';
import Scene from './Scene.js';
import StartScrene from './Battle/StartScrene.js';
import KeyListener from './KeyListener.js';

export default class VideoGame extends Game {
  private canvas: HTMLCanvasElement;

  private keylistener: KeyListener;

  private currentScene: Scene;

  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
    this.keylistener = new KeyListener();

    this.currentScene = new StartScrene(this.canvas.width, this.canvas.height, this.canvas, false);
  }

  /**
   * makes sure the inputs are registered
   */
  public processInput(): void {
    this.currentScene.processInput(this.keylistener);
  }

  /**
   *
   * @param elapsed the time that has passed
   * @returns the scene that should be shown
   */
  public update(elapsed: number): boolean {
    this.currentScene.update(elapsed);
    const nextScene: Scene = this.currentScene.getNextScene();
    if (nextScene !== null) {
      this.currentScene = nextScene;
    }
    return true;
  }

  /**
   * draws everything on the screne
   */
  public render(): void {
    CanvasRenderer.clearCanvas(this.canvas);
    this.currentScene.render(this.canvas);
  }
}
