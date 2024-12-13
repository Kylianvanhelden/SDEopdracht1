import CanvasRenderer from '../../CanvasRenderer.js';
import Spells from '../Spells.js';

export default class FireBall extends Spells {
  public constructor() {
    super();

    this.name = 'Fire Ball';
    this.nameDutch = 'Vuur Bal';
    this.level = 2;
    this.usesLeft = 15;
    this.element = 'fire';

    this.image = CanvasRenderer.loadNewImage('./assets/UglyFireBall.png');
    this.movementType = 'horizontal';

    this.isSpell = false;
  }
}
