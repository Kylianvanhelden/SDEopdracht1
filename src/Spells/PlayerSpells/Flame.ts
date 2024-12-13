import CanvasRenderer from '../../CanvasRenderer.js';
import Spells from '../Spells.js';

export default class Flame extends Spells {
  public constructor() {
    super();

    this.name = 'Flame';
    this.nameDutch = 'Vlammetje';
    this.level = 1;
    this.usesLeft = 20;
    this.element = 'fire';

    this.image = CanvasRenderer.loadNewImage('./assets/Flame.png');
    this.movementType = 'jumpscare';

    this.isSpell = false;
  }
}
