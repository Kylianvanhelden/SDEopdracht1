import CanvasRenderer from '../CanvasRenderer.js';

export default abstract class CharacterBuilder {
  protected image: HTMLImageElement;

  protected name: string;

  protected nameDutch: string;

  protected posX: number;

  protected posY: number;

  protected maxHealth: number;

  protected health: number;

  protected spells: number[] = [];

  protected quotesEnglish: string[] = [];

  protected quotesDutch: string[] = [];

  protected loseMessage: string;

  protected dutchLosemessage: string;

  protected elementalType: string;

  public getName(): string {
    return this.name;
  }

  public getDutchName(): string {
    return this.nameDutch;
  }

  public getImage(): HTMLImageElement {
    return this.image;
  }

  public getPosX(): number {
    return this.posX;
  }

  public getPosY(): number {
    return this.posY;
  }

  public getMaxHealth(): number {
    return this.maxHealth;
  }

  public getHealth(): number {
    return this.health;
  }

  public getElementalType(): string {
    return this.elementalType;
  }

  public setHealth(damage: number): void {
    this.health -= damage;
  }

  public getSpell(number: number): number {
    return this.spells[number];
  }

  public getLoseMessage(): string {
    return this.loseMessage;
  }

  public getDutchLoseMessage(): string {
    return this.dutchLosemessage;
  }

  /**
   *
   * @param canvas het canvas
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
