import CanvasRenderer from '../CanvasRenderer.js';
import OverworldCharacterBuilder from './OverworldCharacterBuilder.js';

export default class IceKing extends OverworldCharacterBuilder {
  public constructor() {
    super();
    this.image = CanvasRenderer.loadNewImage('./assets/IceKing.webp');
    this.posX = 700;
    this.posY = 443;
    this.characterShouldSpawn = false;
  }
}
