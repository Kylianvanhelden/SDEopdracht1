import CanvasRenderer from '../CanvasRenderer.js';

export default abstract class Spells {
  protected name: string;

  protected nameDutch: string;

  protected image: HTMLImageElement;

  protected level: number;

  protected uses: number;

  protected usesLeft: number;

  protected element: string;

  protected colour: string;

  protected isSpell: boolean;

  protected spelOver: number = 0;

  protected movementType: string;

  protected time: number;

  protected posX: number;

  protected posY: number;

  public getName(): string {
    return this.name;
  }

  public getDutchName(): string {
    return this.nameDutch;
  }

  public getImage(): HTMLImageElement {
    return this.image;
  }

  public getDamage(): number {
    if (this.element === 'fire') {
      return this.level * 5;
    }
    return this.level * 5;
  }

  public getUses(): number {
    return (25 - (5 * this.level));
  }

  public getUsesLeft(): number {
    return this.usesLeft;
  }

  /**
   * uses up a spell
   */
  public useSpell(): void {
    this.usesLeft -= 1;
  }

  public getElement(): string {
    return this.element;
  }

  public getColour(): string {
    if (this.element === 'fire') {
      return 'red';
    } else if (this.element === 'electric') {
      return 'yellow';
    } else if (this.element === 'ice') {
      return '#00A2E8';
    }
    return 'white';
  }

  public getSpell(): boolean {
    return this.isSpell;
  }

  /**
   * create spell
   */
  public spellTrue(): void {
    this.isSpell = true;
    this.setPlace();
  }

  public setPlace(): void {
    if (this.movementType === 'horizontal') {
      this.posX = 350;
      this.posY = ((window.innerHeight / 2) - (this.image.height / 2));
    } else if (this.movementType === 'jumpscare') {
      this.posX = (window.innerWidth - 250) - (this.image.width / 2);
      this.posY = ((window.innerHeight / 2) - (this.image.height / 2));
      this.time = 0;
    } else if (this.movementType === 'cloud') {
      this.posX = (window.innerWidth - 250) - (this.image.width / 2);
      this.posY = (window.innerHeight / 2) - 100 - this.image.height;
    } else if (this.movementType === 'horizontal reverse') {
      this.posX = (window.innerWidth - 350 - this.image.width);
      this.posY = ((window.innerHeight / 2) - (this.image.height / 2));
    } else if (this.movementType === 'jumpscare reverse') {
      this.posX = (250 - (this.image.width / 2));
      this.posY = ((window.innerHeight / 2) - (this.image.height / 2));
      this.time = 0;
    } else if (this.movementType === 'cloud reverse') {
      this.posX = (250 - (this.image.width / 2));
      this.posY = ((window.innerHeight / 2) - 100 - this.image.height);
    }
  }

  /**
   *delete spell
   */
  public spellFalse(): void {
    this.isSpell = false;
    this.spelOver = 1;
  }

  public getOver(): number {
    return this.spelOver;
  }

  /**
   * sets it so that it is enemy turn
   */
  public spelNotOver(): void {
    this.spelOver = 0;
  }

  /**
   *
   * @param elapsed increment of time
   */
  public update(elapsed: number): void {
    if (this.movementType === 'horizontal') {
      this.posX += 0.5 * elapsed;
      if (this.posX + this.image.width >= window.innerWidth - 350) {
        this.spellFalse();
      }
    } else if (this.movementType === 'cloud') {
      this.posY += 0.1 * elapsed;
      if (this.posY + this.image.height >= (window.innerHeight / 2)) {
        this.spellFalse();
      }
    } else if (this.movementType === 'jumpscare') {
      this.time += elapsed;
      if (this.time >= 1000) {
        this.spellFalse();
      }
    } else if (this.movementType === 'horizontal reverse') {
      this.posX -= 0.5 * elapsed;
      if (this.posX <= 350) {
        this.spellFalse();
      }
    } else if (this.movementType === 'jumpscare reverse') {
      this.time += elapsed;
      if (this.time >= 1000) {
        this.spellFalse();
      }
    } else if (this.movementType === 'cloud reverse') {
      this.posY += 0.1 * elapsed;
      if (this.posY + this.image.height >= (window.innerHeight / 2)) {
        this.spellFalse();
      }
    }
  }

  /**
   *
   * @param canvas het canvas
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
