import CanvasRenderer from '../../CanvasRenderer.js';
import Spells from '../Spells.js';

export default class IcicleClash extends Spells {
  public constructor() {
    super();

    this.name = 'Icicle Clash';
    this.nameDutch = 'IJspegel';
    this.level = 2;
    this.usesLeft = 15;
    this.element = 'ice';

    this.image = CanvasRenderer.loadNewImage('./assets/IcicleClashImage.png');
    this.movementType = 'jumpscare';

    this.isSpell = false;
  }
}
