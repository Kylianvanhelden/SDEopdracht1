import CharacterBUilder from './CharacterBuilder.js';
import CanvasRenderer from '../CanvasRenderer.js';

export default class IceKing extends CharacterBUilder {
  public constructor() {
    super();

    this.image = CanvasRenderer.loadNewImage('./assets/New_Piskel.png');
    this.name = 'Ice King';
    this.nameDutch = 'IJs Koning';
    this.maxHealth = 250;
    this.health = 250;

    this.posX = (window.innerWidth - 250) - (this.image.width / 2);
    this.posY = (window.innerHeight / 2) - (this.image.height / 2);
  }
}
