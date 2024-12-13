import CanvasRenderer from '../CanvasRenderer.js';
import CharacterBuilder from './CharacterBuilder.js';

export default class Player extends CharacterBuilder {
  public constructor() {
    super();

    this.name = 'Baasje';
    this.nameDutch = 'Baasje';
    this.maxHealth = 150;
    this.health = 150;

    this.image = CanvasRenderer.loadNewImage('./assets/Baasje.png');

    this.posX = (250) - (this.image.width / 2);
    this.posY = (window.innerHeight / 2) - (this.image.height / 2);
  }
}
