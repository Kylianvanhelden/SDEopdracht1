/* eslint-disable @typescript-eslint/quotes */
import CharacterBUilder from './CharacterBuilder.js';
import CanvasRenderer from '../CanvasRenderer.js';

export default class IJsKoning extends CharacterBUilder {
  public constructor() {
    super();

    this.image = CanvasRenderer.loadNewImage('./assets/IceKing.webp');
    this.name = 'Ice King';
    this.nameDutch = 'IJs Koning';
    this.maxHealth = 225;
    this.health = 225;
    this.elementalType = 'ice';

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

    this.quotesEnglish.push("I am the king! The Ice King! And I'm never wrong! Who Says I'm wrong? Show Yourself!");
    this.quotesEnglish.push('Ssssh... my spoons are too big.');
    this.quotesEnglish.push("I'm a sexy cat.");
    this.quotesEnglish.push("I'm a sociopath? I don't even know what that means!");
    this.quotesEnglish.push("Gunter, who told you you could fly? You're fired!");

    this.quotesDutch.push('ik ben de koning! De IJs Koning! En ik ben altijd correct! Wie zegt dat ik het fout heb? Laat jezelf zien!');
    this.quotesDutch.push('Sssht... mijn lepels zijn te groot.');
    this.quotesDutch.push('Ik ben een sexy kat.');
    this.quotesDutch.push('Ik ben een sociopaat? Ik heb geen flauw idee wat dat betekent!');
    this.quotesDutch.push('Gunter, wie zei dat jij kon vliegen? Je bent ontslagen!');

    this.loseMessage = 'I am the Ice King, I am made of ice!';
    this.dutchLosemessage = 'Ik ben de IJs Koning, ik ben gemaakt van ijs!';
  }
}
