import CanvasRenderer from '../../CanvasRenderer.js';
import Spells from '../Spells.js';

export default class MaxMeteorReverse extends Spells {
  public constructor() {
    super();

    this.image = CanvasRenderer.loadNewImage('../../assets/Max-MeteorReverse.png');
    this.movementType = 'horizontal reverse';

    this.name = 'Max Meteor';
    this.nameDutch = 'Max Meteoriet';
    this.level = 4;
    this.usesLeft = 5;
    this.element = 'fire';

    this.isSpell = false;
  }
}
