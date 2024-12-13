import CanvasRenderer from '../../CanvasRenderer.js';
import Spells from '../Spells.js';

export default class FlameReverse extends Spells {
  public constructor() {
    super();

    this.name = 'Flame';
    this.nameDutch = 'vlammetje';
    this.level = 1;
    this.usesLeft = 20;
    this.element = 'fire';

    this.image = CanvasRenderer.loadNewImage('../../assets/FlameReverse.png');
    this.movementType = 'jumpscare reverse';

    this.isSpell = false;
  }
}
