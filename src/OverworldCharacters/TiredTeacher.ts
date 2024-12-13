import CanvasRenderer from '../CanvasRenderer.js';
import OverworldCharacterBuilder from './OverworldCharacterBuilder.js';

export default class TiredTeacher extends OverworldCharacterBuilder {
  public constructor() {
    super();
    this.image = CanvasRenderer.loadNewImage('./assets/TiredTeacher.png');
    this.posX = 680;
    this.posY = 500;
    this.characterShouldSpawn = true;
  }
}
