import CanvasRenderer from '../../CanvasRenderer.js';
import Spells from '../Spells.js';

export default class ThunderStorm extends Spells {
  public constructor() {
    super();

    this.name = 'Thunder Storm';
    this.nameDutch = 'Bliksem storm';
    this.level = 2;
    this.usesLeft = 15;
    this.element = 'electric';

    this.image = CanvasRenderer.loadNewImage('./assets/ThunderStormImage.png');
    this.movementType = 'cloud';

    this.isSpell = false;
  }
}
