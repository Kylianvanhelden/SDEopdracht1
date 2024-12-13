import CanvasRenderer from '../CanvasRenderer.js';
import OverworldCharacterBuilder from './OverworldCharacterBuilder.js';

export default class Directeur extends OverworldCharacterBuilder {
  public constructor() {
    super();
    this.image = CanvasRenderer.loadNewImage('./assets/Principle.png');
    this.posX = 600;
    this.posY = 10;
    this.characterShouldSpawn = true;
  }
}
