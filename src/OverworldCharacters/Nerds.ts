import CanvasRenderer from '../CanvasRenderer.js';
import OverworldCharacterBuilder from './OverworldCharacterBuilder.js';

export default class Nerds extends OverworldCharacterBuilder {
  public constructor() {
    super();
    this.image = CanvasRenderer.loadNewImage('./assets/Nerd.png');
    this.posX = 404;
    this.posY = 116;
    this.characterShouldSpawn = true;
  }
}
