import CanvasRenderer from '../../CanvasRenderer.js';
import Spells from '../Spells.js';

export default class ZapReverse extends Spells {
  public constructor() {
    super();

    this.name = 'Zap';
    this.nameDutch = 'Zap';
    this.level = 1;
    this.usesLeft = 20;
    this.element = 'electric';

    this.image = CanvasRenderer.loadNewImage('../../assets/ZapReverse.png');
    this.movementType = 'horizontal reverse';

    this.isSpell = false;
  }
}
