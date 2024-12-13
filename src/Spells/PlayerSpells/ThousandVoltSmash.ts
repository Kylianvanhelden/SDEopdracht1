import CanvasRenderer from '../../CanvasRenderer.js';
import Spells from '../Spells.js';

export default class ThousandVoltSmash extends Spells {
  public constructor() {
    super();

    this.name = '1000 Volt Smash';
    this.nameDutch = '1000 Volt Stoot';
    this.level = 3;
    this.usesLeft = 10;
    this.element = 'electric';

    this.image = CanvasRenderer.loadNewImage('./assets/ThousandVoltSmashImage.png');
    this.movementType = 'horizontal';

    this.isSpell = false;
  }
}
