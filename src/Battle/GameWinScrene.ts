import Scene from '../Scene.js';
import CanvasRenderer from '../CanvasRenderer.js';
import KeyListener from '../KeyListener.js';
import StartScrene from './StartScrene.js';
import Player from '../Characters/Player.js';

export default class GameWinScrene extends Scene {
  private continue: boolean;

  private player: Player;

  private playerImage: HTMLImageElement;

  // eslint-disable-next-line max-len
  public constructor(maxX: number, maxY: number, canvas: HTMLCanvasElement, dutch: boolean) {
    super(maxX, maxY, canvas, 0, dutch, 0, 0, 0, 0);

    this.continue = false;
    this.languageDutch = dutch;

    this.player = new Player();
    this.playerImage = this.player.getImage();
  }

  /**
   * goes back to the start screne
   * @param keyListener the input
   */
  public override processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed(KeyListener.KEY_ENTER)) {
      this.continue = true;
    }
  }

  /**
   *
   * @param elapsed increment of time
   */
  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  public override update(elapsed: number): void {

  }

  public override getNextScene(): Scene {
    if (this.continue) {
      return new StartScrene(this.maxX, this.maxY, this.canvas, this.languageDutch);
    }
    return null;
  }

  /**
   *
   * @param canvas the screne
   */
  public override render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.fillCanvas(canvas, 'blue');

    CanvasRenderer.fillCircle(canvas, (canvas.width / 2), (canvas.height / 2), 100, 'white');
    // eslint-disable-next-line max-len
    CanvasRenderer.drawImage(canvas, this.playerImage, ((canvas.width / 2) - (this.playerImage.width / 2)), ((canvas.height / 2) - (this.playerImage.height / 2)));
    if (this.languageDutch) {
      CanvasRenderer.writeText(canvas, 'Jij bent het echte Baasje!', (canvas.width / 2), (canvas.height / 2) + 125, 'center', 'Arial', 25, 'red');
      CanvasRenderer.writeText(canvas, 'Gefeliciteerd', (canvas.width / 2), 70, 'center', 'Arial', 50, 'black');
      CanvasRenderer.writeText(canvas, 'Je hebt het spel uitgespeeld', (canvas.width / 2), 130, 'center', 'Arial', 40, 'black');
      CanvasRenderer.writeText(canvas, 'Druk op enter om door te gaan', (canvas.width / 2), (canvas.height - 50), 'center', 'Arial', 30, 'black');
    } else {
      CanvasRenderer.writeText(canvas, 'You are a superstar!', (canvas.width / 2), (canvas.height / 2) + 125, 'center', 'Arial', 25, 'red');
      CanvasRenderer.writeText(canvas, 'Congratulations', (canvas.width / 2), 70, 'center', 'Arial', 50, 'black');
      CanvasRenderer.writeText(canvas, 'You Completed the Game', (canvas.width / 2), 130, 'center', 'Arial', 40, 'black');
      CanvasRenderer.writeText(canvas, 'Press Enter to continue', (canvas.width / 2), (canvas.height - 50), 'center', 'Arial', 30, 'black');
    }
  }
}
