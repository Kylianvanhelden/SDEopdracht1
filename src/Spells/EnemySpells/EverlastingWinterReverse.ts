import CanvasRenderer from '../../CanvasRenderer.js';
import Spells from '../Spells.js';

export default class EverlastingWinterReverse extends Spells {
  public constructor() {
    super();

    this.name = 'Everlasting Winter';
    this.nameDutch = 'Eeuwige Winter';
    this.level = 4;
    this.usesLeft = 5;
    this.element = 'ice';

    this.image = CanvasRenderer.loadNewImage('../../assets/EverlastingWinterReverse.png');
    this.movementType = 'jumpscare reverse';

    this.isSpell = false;
  }
}
