import Spells from '../Spells.js';
import CanvasRenderer from '../../CanvasRenderer.js';

export default class IcicleClashReverse extends Spells {
  public constructor() {
    super();

    this.name = 'Icicle Clash';
    this.nameDutch = 'IJspegel';
    this.level = 2;
    this.usesLeft = 15;
    this.element = 'ice';

    this.image = CanvasRenderer.loadNewImage('../../assets/IcicleClashImage.png');
    this.movementType = 'jumpscare reverse';

    this.isSpell = false;
  }
}
