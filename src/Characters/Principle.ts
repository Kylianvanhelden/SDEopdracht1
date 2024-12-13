import CanvasRenderer from '../CanvasRenderer.js';
import CharacterBuilder from './CharacterBuilder.js';

export default class Principle extends CharacterBuilder {
  public constructor() {
    super();

    this.name = 'Principle';
    this.nameDutch = 'Directeur';
    this.health = 200;
    this.maxHealth = 200;

    this.image = CanvasRenderer.loadNewImage('./assets/Principle.png');

    this.posX = (window.innerWidth - 250) - (this.image.width / 2);
    this.posY = (window.innerHeight / 2) - (this.image.height / 2);

    /**
     * enemy spells are 12 t/m 23
     * fire 12/13/14/15
     * electric 16/17/18/19
     * ice 20/21/22/23
     */
    this.spells.push(12);
    this.spells.push(13);
    this.spells.push(14);
    this.spells.push(15);

    this.loseMessage = 'That will teach you to try and oppose me!';
    this.dutchLosemessage = 'Dat zal je leren om het tegen mij op te nemen!';
  }
}
