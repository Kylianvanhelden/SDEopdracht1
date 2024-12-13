/* eslint-disable @typescript-eslint/quotes */
import CanvasRenderer from '../CanvasRenderer.js';
import Scene from '../Scene.js';
import KeyListener from '../KeyListener.js';
import HackerMan from '../BobsOdyssey.js';

export default class StartScrene extends Scene {
  private starting: boolean;

  // eslint-disable-next-line max-len
  public constructor(maxX: number, maxY: number, canvas: HTMLCanvasElement, dutch: boolean) {
    super(maxX, maxY, canvas, 0, dutch, 0, 0, 0, 0);
    this.starting = false;

    this.q = Math.round(Math.random() * 2);
    this.w = Math.round(Math.random() * 2) + 4;
    this.a = Math.round(Math.random() * 2) + 8;
    this.s = Math.round(Math.random() * 11);
    if (this.s === this.q || this.s === this.w || this.s === this.a) {
      this.s += 1;
    }

    if (dutch) {
      this.languageDutch = true;
    } else {
      this.languageDutch = false;
    }
  }

  /**
   *
   * @param keyListener keyboard
   */
  public override processInput(keyListener: KeyListener): void {
    if (keyListener.keyPressed(KeyListener.KEY_Q)) {
      this.starting = true;
    }
    if (keyListener.keyPressed(KeyListener.KEY_Z)) {
      if (this.languageDutch) {
        this.languageDutch = false;
      } else {
        this.languageDutch = true;
      }
    }
  }

  /**
   * useless
   * @param elapsed increment of time
   */
  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  public override update(elapsed: number): void {
    //
  }

  public override getNextScene(): Scene {
    if (this.starting) {
      // eslint-disable-next-line max-len
      return new HackerMan(this.maxX, this.maxY, this.canvas, this.languageDutch, 0, this.q, this.w, this.a, this.s);
    }
    return this;
  }

  /**
   *
   * @param canvas the screen
   */
  public override render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.fillCanvas(canvas, 'green');

    CanvasRenderer.drawRectangle(canvas, 0, (canvas.height - 200), (canvas.width), 200, 'white');
    CanvasRenderer.drawRectangle(canvas, (canvas.width / 2), (canvas.height - 200), 0.5, 200, 'white');

    CanvasRenderer.writeText(canvas, "Bob's Odyssey", (canvas.width / 2), (75), 'center', 'Arial', 75, 'black');

    if (this.languageDutch === true) {
      CanvasRenderer.writeText(canvas, 'Druk op Q om te starten!', (canvas.width / 2), ((canvas.height / 2) - 50), 'center', 'Arial', 50, 'white');
      CanvasRenderer.writeText(canvas, 'Druk op Z om de taal te veranderen', (canvas.width / 2), (canvas.height / 2), 'center', 'Arial', 50, 'white');
      CanvasRenderer.fillRectangle(canvas, ((canvas.width / 2) + 2), (canvas.height - 198), ((canvas.width / 2) - 4), 196, 'blue');
      CanvasRenderer.writeText(canvas, 'Nederlands', (3 * (canvas.width / 4)), (canvas.height - 50), 'center', 'Arial', 100, 'white');
      CanvasRenderer.fillRectangle(canvas, 2, (canvas.height - 198), ((canvas.width / 2) - 4), 196, 'grey');
      CanvasRenderer.writeText(canvas, 'English', (canvas.width / 4), (canvas.height - 75), 'center', 'Arial', 50, 'white');
    } else {
      CanvasRenderer.writeText(canvas, 'Press Q to start!', (canvas.width / 2), ((canvas.height / 2) - 50), 'center', 'Arial', 50, 'white');
      CanvasRenderer.writeText(canvas, 'Press Z to change the language', (canvas.width / 2), (canvas.height / 2), 'center', 'Arial', 50, 'white');
      CanvasRenderer.fillRectangle(canvas, 2, (canvas.height - 198), ((canvas.width / 2) - 4), 196, 'red');
      CanvasRenderer.writeText(canvas, 'English', (canvas.width / 4), (canvas.height - 50), 'center', 'Arial', 100, 'white');
      CanvasRenderer.fillRectangle(canvas, ((canvas.width / 2) + 2), (canvas.height - 198), ((canvas.width / 2) - 4), 196, 'grey');
      CanvasRenderer.writeText(canvas, 'Nederlands', (3 * (canvas.width / 4)), (canvas.height - 75), 'center', 'Arial', 50, 'white');
    }
  }
}
