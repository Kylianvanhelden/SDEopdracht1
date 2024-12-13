import CanvasRenderer from '../CanvasRenderer.js';
import OverworldCharacterBuilder from './OverworldCharacterBuilder.js';

export default class Cheater extends OverworldCharacterBuilder {
  public constructor() {
    super();
    this.image = CanvasRenderer.loadNewImage('./assets/Bully.png');
    this.posX = 950;
    this.posY = 150;
    this.characterShouldSpawn = true;
  }
}
