import CanvasRenderer from '../CanvasRenderer.js';
import OverworldCharacterBuilder from './OverworldCharacterBuilder.js';

export default class Teacher extends OverworldCharacterBuilder {
  public constructor() {
    super();
    this.image = CanvasRenderer.loadNewImage('./assets/Bob.png');
    this.posX = 1010;
    this.posY = 443;
    this.characterShouldSpawn = true;
  }
}
