import CanvasRenderer from '../CanvasRenderer.js';
import OverworldCharacterBuilder from './OverworldCharacterBuilder.js';

export default class Nurse extends OverworldCharacterBuilder {
  public constructor() {
    super();
    this.image = CanvasRenderer.loadNewImage('./assets/Dokter.png');
    this.posX = 240;
    this.posY = 50;
    this.characterShouldSpawn = true;
  }
}
