import Spells from '../Spells.js';
import CanvasRenderer from '../../CanvasRenderer.js';

export default class SnowStormReverse extends Spells {
  public constructor() {
    super();

    this.name = 'Icicle Clash';
    this.nameDutch = 'IJspegel';
    this.level = 3;
    this.usesLeft = 10;
    this.element = 'ice';

    this.image = CanvasRenderer.loadNewImage('../../assets/SnowStormImage.png');
    this.movementType = 'cloud reverse';

    this.isSpell = false;
  }
}
