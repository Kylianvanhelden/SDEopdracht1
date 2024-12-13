import CanvasRenderer from '../../CanvasRenderer.js';
import Spells from '../Spells.js';

export default class SnowStorm extends Spells {
  public constructor() {
    super();

    this.name = 'Snow Storm';
    this.nameDutch = 'Sneeuw Storm';
    this.level = 3;
    this.usesLeft = 10;
    this.element = 'ice';

    this.image = CanvasRenderer.loadNewImage('./assets/SnowStormImage.png');
    this.movementType = 'cloud';

    this.isSpell = false;
  }
}
