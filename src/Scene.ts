import KeyListener from './KeyListener.js';

export default abstract class Scene {
  protected maxX: number;

  protected maxY: number;

  protected canvas: HTMLCanvasElement;

  protected checkpoint: number;

  protected languageDutch: boolean;

  protected q: number;

  protected w: number;

  protected a: number;

  protected s: number;

  // eslint-disable-next-line max-len
  public constructor(maxX: number, maxY: number, canvas: HTMLCanvasElement, checkpoint: number, dutch: boolean, q: number, w: number, a: number, s: number) {
    this.maxX = maxX;
    this.maxY = maxY;
    this.canvas = canvas;
    this.checkpoint = checkpoint;
    this.languageDutch = dutch;
    this.q = q;
    this.w = w;
    this.a = a;
    this.s = s;
  }

  public abstract processInput(keyListener: KeyListener): void;
  public abstract update(elapsed: number): void;
  public abstract getNextScene(): Scene | null;
  public abstract render(canvas: HTMLCanvasElement): void;
}
