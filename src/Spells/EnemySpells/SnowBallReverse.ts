import CanvasRenderer from '../../CanvasRenderer.js';
import Spells from '../Spells.js';

export default class SnowBallReverse extends Spells {
  public constructor() {
    super();

    this.image = CanvasRenderer.loadNewImage('../../assets/SnowBallReverse.png');
    this.movementType = 'horizontal reverse';

    this.name = 'Snow Ball';
    this.nameDutch = 'Sneeuw Ball';
    this.level = 1;
    this.usesLeft = 20;
    this.element = 'ice';

    this.isSpell = false;
  }
}
