import CanvasRenderer from '../CanvasRenderer.js';

export default abstract class OverworldCharacterBuilder {
  protected image: HTMLImageElement;

  protected posX: number;

  protected posY: number;

  protected characterShouldSpawn: boolean;

  public getBounds() : { x: number; y: number; width: number; height: number } {
    const { width } = this.image;
    const { height } = this.image;

    return {
      x: this.posX,
      y: this.posY,
      width,
      height,
    };
  }

  public getPosY(): number {
    return this.posY;
  }

  public getPosX(): number {
    return this.posX;
  }

  /**
   * spawns the character
   */
  public spawnCharacter(): void {
    this.characterShouldSpawn = true;
  }

  /**
   * despawns the character
   */
  public removeCharacter(): void {
    this.characterShouldSpawn = false;
  }

  /**
   * draws this character on the screne
   * @param canvas the screne
   */
  public render(canvas: HTMLCanvasElement): void {
    if (this.characterShouldSpawn) {
      CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
    }
  }
}
