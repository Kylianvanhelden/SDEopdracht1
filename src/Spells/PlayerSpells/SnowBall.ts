import CanvasRenderer from '../../CanvasRenderer.js';
import Spells from '../Spells.js';

export default class SnowBall extends Spells {
  public constructor() {
    super();

    this.name = 'Snow ball';
    this.nameDutch = 'Sneeuw bal';
    this.level = 1;
    this.usesLeft = 20;
    this.element = 'ice';

    this.image = CanvasRenderer.loadNewImage('./assets/SnowBall.png');
    this.movementType = 'horizontal';

    this.isSpell = false;
  }
}
