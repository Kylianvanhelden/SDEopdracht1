import Scene from '../Scene.js';
import CanvasRenderer from '../CanvasRenderer.js';
import HackerMan from '../BobsOdyssey.js';
import StartScrene from './StartScrene.js';
import KeyListener from '../KeyListener.js';
import IJsKoning from '../Characters/IJsKoning.js';
import Nerd from '../Characters/Nerd.js';
import Principle from '../Characters/Principle.js';
import Bully from '../Characters/Bully.js';

export default class LoseScrene extends Scene {
  private tryAgain: boolean;

  private closeGame: boolean;

  private enemy: IJsKoning;

  private enemyImage: HTMLImageElement;

  private enemyName: string;

  private enemyMessage: string;

  // eslint-disable-next-line max-len
  public constructor(maxX: number, maxY: number, canvas: HTMLCanvasElement, dutch: boolean, checkpoint: number, q: number, w: number, a: number, s: number) {
    super(maxX, maxY, canvas, checkpoint, dutch, q, w, a, s);

    this.tryAgain = false;
    this.closeGame = false;
    this.languageDutch = dutch;

    if (checkpoint === 7 || checkpoint === 8) {
      this.enemy = new Nerd();
    } else if (checkpoint === 1) {
      this.enemy = new Bully();
    } else if (checkpoint === 3) {
      this.enemy = new IJsKoning();
    } else {
      this.enemy = new Principle();
    }
    this.enemyImage = this.enemy.getImage();
    if (dutch) {
      this.enemyMessage = this.enemy.getDutchLoseMessage();
      this.enemyName = this.enemy.getDutchName();
    } else {
      this.enemyMessage = this.enemy.getLoseMessage();
      this.enemyName = this.enemy.getName();
    }
  }

  /**
   * either go back to the infirmary and try again or go back to the main menu
   * @param keyListener the inputs
   */
  public override processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed(KeyListener.KEY_SPACE)) {
      this.tryAgain = true;
    }
    if (keyListener.keyPressed(KeyListener.KEY_Q)) {
      this.closeGame = true;
    }
  }

  /**
   * usseles
   * @param elapsed the time that has passed
   */
  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  public override update(elapsed: number): void {

  }

  public override getNextScene(): Scene {
    if (this.tryAgain) {
      // eslint-disable-next-line max-len
      return new HackerMan(this.maxX, this.maxY, this.canvas, this.languageDutch, this.checkpoint, this.q, this.w, this.a, this.s);
    }
    if (this.closeGame) {
      return new StartScrene(this.maxX, this.maxY, this.canvas, this.languageDutch);
    }
    return null;
  }

  /**
   * draws the lose message and enemy you have lost to
   * @param canvas the screne
   */
  public override render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.fillCanvas(canvas, 'red');

    CanvasRenderer.fillCircle(canvas, (canvas.width / 2), (canvas.height / 2), 100, 'white');
    // eslint-disable-next-line max-len
    CanvasRenderer.drawImage(canvas, this.enemyImage, ((canvas.width / 2) - (this.enemyImage.width / 2)), ((canvas.height / 2) - (this.enemyImage.height / 2)));
    if (this.languageDutch) {
      CanvasRenderer.writeText(canvas, 'Je hebt verloren!', (canvas.width / 2), 70, 'center', 'Arial', 50, 'black');
      CanvasRenderer.writeText(canvas, 'Probeer opnieuw vanaf laatste checkpoint', (canvas.width / 2), 130, 'center', 'Arial', 40, 'black');
      CanvasRenderer.writeText(canvas, 'Druk op Spatie om door te gaan', (canvas.width / 2), (canvas.height - 50), 'center', 'Arial', 30, 'black');
    } else {
      CanvasRenderer.writeText(canvas, 'You lost!', (canvas.width / 2), 70, 'center', 'Arial', 50, 'black');
      CanvasRenderer.writeText(canvas, 'Try again from the last checkpoint', (canvas.width / 2), 130, 'center', 'Arial', 40, 'black');
      CanvasRenderer.writeText(canvas, 'Press Space to continue', (canvas.width / 2), (canvas.height - 50), 'center', 'Arial', 30, 'black');
    }
    CanvasRenderer.writeText(canvas, this.enemyMessage, (canvas.width / 2), (canvas.height / 2) + 125, 'center', 'Arial', 25, 'blue');
  }
}
