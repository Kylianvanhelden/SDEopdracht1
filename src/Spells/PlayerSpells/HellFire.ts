import CanvasRenderer from '../../CanvasRenderer.js';
import Spells from '../Spells.js';

export default class HellFire extends Spells {
  public constructor() {
    super();

    this.name = 'Hell Fire';
    this.nameDutch = 'Helle Vuur';
    this.level = 3;
    this.usesLeft = 10;
    this.element = 'fire';

    this.image = CanvasRenderer.loadNewImage('./assets/HellFireImage.png');
    this.movementType = 'jumpscare';

    this.isSpell = false;
  }
}
