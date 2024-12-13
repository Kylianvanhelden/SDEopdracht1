/* eslint-disable @typescript-eslint/quotes */
import CanvasRenderer from '../CanvasRenderer.js';
import CharacterBuilder from './CharacterBuilder.js';

export default class Nerd extends CharacterBuilder {
  public constructor() {
    super();

    this.name = 'Nerd';
    this.nameDutch = 'Nerd';
    this.health = 150;
    this.maxHealth = 150;

    this.image = CanvasRenderer.loadNewImage('./assets/Nerd.png');

    this.posX = (window.innerWidth - 250) - (this.image.width / 2);
    this.posY = (window.innerHeight / 2) - (this.image.height / 2);

    /**
     * enemy spells are 12 t/m 23
     * fire 12/13/14/15
     * electric 16/17/18/19
     * ice 20/21/22/23
     */
    this.spells.push(16);
    this.spells.push(17);
    this.spells.push(18);
    this.spells.push(19);

    this.quotesEnglish.push('Did you bring a strategy guide to this battle? Because I just read you cover to cover!');
    this.quotesEnglish.push('Well, that was a critical hit to your confidence! My knowledge stat must be over 9000!');
    this.quotesEnglish.push('You underestimated the power of my strategic algorithms! Victory, brought to you by advanced analytics!');
    this.quotesEnglish.push("You've just been defeated by the undisputed champion of the nerdiverse. Bow before my intellect!");
    this.quotesEnglish.push("I didn't choose the nerd life, the nerd life chose me. Victory just comes naturally.");

    this.quotesDutch.push();
    this.quotesDutch.push();
    this.quotesDutch.push();
    this.quotesDutch.push();
    this.quotesDutch.push();

    this.loseMessage = 'Uhm actually! I am not a nerd.';
    this.dutchLosemessage = 'Eh, eigenlijk! Ik ben helemaal geen nerd.';
  }
}
