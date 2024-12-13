import CanvasRenderer from '../../CanvasRenderer.js';
import Spells from '../Spells.js';

export default class MaxMeteor extends Spells {
  public constructor() {
    super();

    this.name = 'Max Meteor';
    this.nameDutch = 'Max Meteoriet';
    this.level = 4;
    this.usesLeft = 5;
    this.element = 'fire';

    this.image = CanvasRenderer.loadNewImage('./assets/Max-meteor.png');
    this.movementType = 'horizontal';

    this.isSpell = false;
  }
}
