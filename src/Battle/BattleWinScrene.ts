import Scene from '../Scene.js';
import CanvasRenderer from '../CanvasRenderer.js';
import KeyListener from '../KeyListener.js';
import HackerMan from '../BobsOdyssey.js';
import Player from '../Characters/Player.js';
import Bully from '../Characters/Bully.js';
import IJsKoning from '../Characters/IJsKoning.js';
import Nerd from '../Characters/Nerd.js';
import Principle from '../Characters/Principle.js';

export default class BattleWinScrene extends Scene {
  private continue: boolean;

  private player: Player;

  private playerImage: HTMLImageElement;

  private enemy: Bully;

  private enemyName: string;

  private playerQuote: string;

  // eslint-disable-next-line max-len
  public constructor(maxX: number, maxY: number, canvas: HTMLCanvasElement, dutch: boolean, checkpoint: number, q: number, w: number, a: number, s: number) {
    super(maxX, maxY, canvas, checkpoint, dutch, q, w, a, s);

    this.continue = false;
    this.languageDutch = dutch;

    if (checkpoint === 6 || checkpoint === 7) {
      this.enemy = new Nerd();
    } else if (checkpoint === 1) {
      this.enemy = new Bully();
    } else if (checkpoint === 3) {
      this.enemy = new IJsKoning();
    } else {
      this.enemy = new Principle();
    }
    if (checkpoint === 6) {
      this.checkpoint = checkpoint + 1;
    }
    this.player = new Player();
    this.playerImage = this.player.getImage();
    if (this.languageDutch) {
      this.playerQuote = 'Ik ben onoverwinelijk!!!';
      this.enemyName = this.enemy.getDutchName();
    } else {
      this.playerQuote = 'I am unstoppable!!!';
      this.enemyName = this.enemy.getName();
    }
  }

  /**
   * go back to the game
   * @param keyListener the inputs
   */
  public override processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed(KeyListener.KEY_SPACE)) {
      this.continue = true;
    }
  }

  // eslint-disable-next-line max-len
  // eslint-disable-next-line jsdoc/require-jsdoc, class-methods-use-this, @typescript-eslint/no-unused-vars
  public override update(elapsed: number): void {

  }

  public override getNextScene(): Scene {
    if (this.continue) {
      // eslint-disable-next-line max-len
      return new HackerMan(this.maxX, this.maxY, this.canvas, this.languageDutch, this.checkpoint + 1, this.q, this.w, this.a, this.s);
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
      CanvasRenderer.writeText(canvas, this.playerQuote, (canvas.width / 2), (canvas.height / 2) + 125, 'center', 'Arial', 25, 'red');
      CanvasRenderer.writeText(canvas, 'Gefeliciteerd', (canvas.width / 2), 70, 'center', 'Arial', 50, 'black');
      CanvasRenderer.writeText(canvas, `Je hebt de ${this.enemyName} verslagen`, (canvas.width / 2), 130, 'center', 'Arial', 40, 'black');
      CanvasRenderer.writeText(canvas, 'Druk op spatie om door te gaan', (canvas.width / 2), (canvas.height - 50), 'center', 'Arial', 30, 'black');
    } else {
      CanvasRenderer.writeText(canvas, this.playerQuote, (canvas.width / 2), (canvas.height / 2) + 125, 'center', 'Arial', 25, 'red');
      CanvasRenderer.writeText(canvas, 'Congratulations', (canvas.width / 2), 70, 'center', 'Arial', 50, 'black');
      CanvasRenderer.writeText(canvas, `You defeated the ${this.enemyName}`, (canvas.width / 2), 130, 'center', 'Arial', 40, 'black');
      CanvasRenderer.writeText(canvas, 'Press Space to continue', (canvas.width / 2), (canvas.height - 50), 'center', 'Arial', 30, 'black');
    }
  }
}
