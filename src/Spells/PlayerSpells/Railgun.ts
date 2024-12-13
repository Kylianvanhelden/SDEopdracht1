import CanvasRenderer from '../../CanvasRenderer.js';
import Spells from '../Spells.js';

export default class Railgun extends Spells {
  public constructor() {
    super();

    this.name = 'Railgun';
    this.nameDutch = 'Railgun';
    this.level = 4;
    this.usesLeft = 5;
    this.element = 'electric';

    this.image = CanvasRenderer.loadNewImage('./assets/Railgun.png');
    this.movementType = 'horizontal';

    this.isSpell = false;
  }
}
