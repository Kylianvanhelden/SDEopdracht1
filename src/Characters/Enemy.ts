import CanvasRenderer from '../CanvasRenderer.js';
import CharacterBuilder from './CharacterBuilder.js';

export default class Enemy extends CharacterBuilder {
  public constructor() {
    super();

    this.name = 'Enemy';
    this.nameDutch = 'Vijand';
    this.maxHealth = 100;
    this.health = 100;

    this.image = CanvasRenderer.loadNewImage('./assets/New_Piskel.png');

    this.posX = (window.innerWidth - 250) - (this.image.width / 2);
    this.posY = (window.innerHeight / 2) - (this.image.height / 2);
  }
}
