import CanvasRenderer from '../../CanvasRenderer.js';
import Spells from '../Spells.js';

export default class RailgunReverse extends Spells {
  public constructor() {
    super();

    this.name = 'Railgun';
    this.nameDutch = 'Railgun';
    this.level = 4;
    this.usesLeft = 5;
    this.element = 'electric';

    this.image = CanvasRenderer.loadNewImage('../../assets/RailgunReverse.png');
    this.movementType = 'horizontal reverse';

    this.isSpell = false;
  }
}
