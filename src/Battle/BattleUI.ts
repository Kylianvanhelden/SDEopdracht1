/* eslint-disable max-len */
import CanvasRenderer from '../CanvasRenderer.js';

import Spells from '../Spells/Spells.js';
import Flame from '../Spells/PlayerSpells/Flame.js';
import FireBall from '../Spells/PlayerSpells/FireBall.js';
import HellFire from '../Spells/PlayerSpells/HellFire.js';
import MaxMeteor from '../Spells/PlayerSpells/MaxMeteor.js';
import Zap from '../Spells/PlayerSpells/Zap.js';
import ThunderStorm from '../Spells/PlayerSpells/ThunderStorm.js';
import ThousandVoltSmash from '../Spells/PlayerSpells/ThousandVoltSmash.js';
import Railgun from '../Spells/PlayerSpells/Railgun.js';
import SnowBall from '../Spells/PlayerSpells/SnowBall.js';
import IcicleClash from '../Spells/PlayerSpells/IcicleClash.js';
import SnowStorm from '../Spells/PlayerSpells/SnowStorm.js';
import EverlastingWinter from '../Spells/PlayerSpells/EverlastingWinter.js';

import Player from '../Characters/Player.js';
import IJsKoning from '../Characters/IJsKoning.js';
import Principle from '../Characters/Principle.js';
import Nerd from '../Characters/Nerd.js';
import Bully from '../Characters/Bully.js';
import CharacterBuilder from '../Characters/CharacterBuilder.js';

export default class BattleUI {
  private player: CharacterBuilder;

  private enemy: CharacterBuilder;

  private language: boolean;

  private spellList: Spells[] = [];

  private spells: Spells[] = [];

  public constructor(q: number, w: number, a: number, s: number, checkpoint: number, dutch: boolean) {
    this.player = new Player();
    if (checkpoint === 7 || checkpoint === 8) {
      this.enemy = new Nerd();
    } else if (checkpoint === 1) {
      this.enemy = new Bully();
    } else if (checkpoint === 3) {
      this.enemy = new IJsKoning();
    } else {
      this.enemy = new Principle();
    }

    if (dutch) {
      this.language = true;
    } else {
      this.language = false;
    }

    this.spellList.push(new Flame());
    this.spellList.push(new FireBall());
    this.spellList.push(new HellFire());
    this.spellList.push(new MaxMeteor());
    this.spellList.push(new Zap());
    this.spellList.push(new ThunderStorm());
    this.spellList.push(new ThousandVoltSmash());
    this.spellList.push(new Railgun());
    this.spellList.push(new SnowBall());
    this.spellList.push(new IcicleClash());
    this.spellList.push(new SnowStorm());
    this.spellList.push(new EverlastingWinter());

    this.spells.push(this.spellList[q]);
    this.spells.push(this.spellList[w]);
    this.spells.push(this.spellList[a]);
    this.spells.push(this.spellList[s]);
  }

  /**
   *
   * @param canvas het scherm
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.clearCanvas(canvas);

    CanvasRenderer.fillCanvas(canvas, 'black');

    CanvasRenderer.fillCircle(canvas, (250), (canvas.height / 2), 100, 'white');
    CanvasRenderer.fillCircle(canvas, (canvas.width - 250), (canvas.height / 2), 100, 'white');

    if (this.language) {
      CanvasRenderer.writeText(canvas, `${this.player.getDutchName()}`, (250), (canvas.height / 2) - 127, 'center', 'Arial', 25, 'red');
      CanvasRenderer.writeText(canvas, `${this.enemy.getDutchName()}`, (canvas.width - 250), (canvas.height / 2) - 127, 'center', 'Arial', 25, 'red');
    } else {
      CanvasRenderer.writeText(canvas, `${this.player.getName()}`, (250), (canvas.height / 2) - 127, 'center', 'Arial', 25, 'red');
      CanvasRenderer.writeText(canvas, `${this.enemy.getName()}`, (canvas.width - 250), (canvas.height / 2) - 127, 'center', 'Arial', 25, 'red');
    }

    CanvasRenderer.drawRectangle(canvas, 0, (canvas.height - 200), (canvas.width), 200, 'white');
    CanvasRenderer.drawRectangle(canvas, 0, (canvas.height - 100), (canvas.width), 0.5, 'white');
    CanvasRenderer.drawRectangle(canvas, (canvas.width / 2), (canvas.height - 200), 0.5, 200, 'white');
    CanvasRenderer.drawRectangle(canvas, (3 * (canvas.width / 4)), (canvas.height - 200), 0.5, 200, 'white');

    CanvasRenderer.fillRectangle(canvas, (2), (canvas.height - 198), ((canvas.width / 2) - 4), (96), 'grey');
    CanvasRenderer.fillRectangle(canvas, (2), (canvas.height - 98), ((canvas.width / 2) - 4), (96), 'grey');
    CanvasRenderer.fillRectangle(canvas, ((canvas.width / 2) + 2), (canvas.height - 198), ((canvas.width / 4) - 4), (96), `${this.spells[0].getColour()}`);
    CanvasRenderer.fillRectangle(canvas, (3 * (canvas.width / 4) + 2), (canvas.height - 198), ((canvas.width / 4) - 4), (96), `${this.spells[1].getColour()}`);
    CanvasRenderer.fillRectangle(canvas, ((canvas.width / 2) + 2), (canvas.height - 98), ((canvas.width / 4) - 4), (96), `${this.spells[2].getColour()}`);
    CanvasRenderer.fillRectangle(canvas, (3 * (canvas.width / 4) + 2), (canvas.height - 98), ((canvas.width / 4) - 4), (96), `${this.spells[3].getColour()}`);

    if (this.language) {
      CanvasRenderer.writeText(canvas, `Jij bent ${this.player.getDutchName()}    Info: houdt Z ingedrukt`, 25, (canvas.height - 45), 'left', 'Arial', 25, 'white');
      CanvasRenderer.writeText(canvas, `${this.spells[0].getDutchName()}`, ((canvas.width / 2) + 25), (canvas.height - 145), 'left', 'Arial', 25, 'black');
      CanvasRenderer.writeText(canvas, `${this.spells[1].getDutchName()}`, ((canvas.width - (canvas.width / 4)) + 25), (canvas.height - 145), 'left', 'Arial', 25, 'black');
      CanvasRenderer.writeText(canvas, `${this.spells[2].getDutchName()}`, ((canvas.width / 2) + 25), (canvas.height - 45), 'left', 'Arial', 25, 'black');
      CanvasRenderer.writeText(canvas, `${this.spells[3].getDutchName()}`, ((canvas.width - (canvas.width / 4)) + 25), (canvas.height - 45), 'left', 'Arial', 25, 'black');
    } else {
      CanvasRenderer.writeText(canvas, `You are ${this.player.getName()}    Info: hold Z`, 25, (canvas.height - 45), 'left', 'Arial', 25, 'white');
      CanvasRenderer.writeText(canvas, `${this.spells[0].getName()}`, ((canvas.width / 2) + 25), (canvas.height - 145), 'left', 'Arial', 25, 'black');
      CanvasRenderer.writeText(canvas, `${this.spells[1].getName()}`, ((canvas.width - (canvas.width / 4)) + 25), (canvas.height - 145), 'left', 'Arial', 25, 'black');
      CanvasRenderer.writeText(canvas, `${this.spells[2].getName()}`, ((canvas.width / 2) + 25), (canvas.height - 45), 'left', 'Arial', 25, 'black');
      CanvasRenderer.writeText(canvas, `${this.spells[3].getName()}`, ((canvas.width - (canvas.width / 4)) + 25), (canvas.height - 45), 'left', 'Arial', 25, 'black');
    }
  }

  /**
   * laat zien hoe je de spells gebruikt
   * @param canvas het scherm
   */
  public renderInfo(canvas: HTMLCanvasElement): void {
    if (this.language) {
      CanvasRenderer.writeText(canvas, 'Druk op Q', ((canvas.width - (canvas.width / 4)) - 25), (canvas.height - 145), 'right', 'Arial', 25, 'black');
      CanvasRenderer.writeText(canvas, 'Druk op W', (canvas.width - 25), (canvas.height - 145), 'right', 'Arial', 25, 'black');
      CanvasRenderer.writeText(canvas, 'Druk op A', ((canvas.width - (canvas.width / 4)) - 25), (canvas.height - 45), 'right', 'Arial', 25, 'black');
      CanvasRenderer.writeText(canvas, 'Druk op S', (canvas.width - 25), (canvas.height - 45), 'right', 'Arial', 25, 'black');
    } else {
      CanvasRenderer.writeText(canvas, 'Press Q', ((canvas.width - (canvas.width / 4)) - 25), (canvas.height - 145), 'right', 'Arial', 25, 'black');
      CanvasRenderer.writeText(canvas, 'Press W', (canvas.width - 25), (canvas.height - 145), 'right', 'Arial', 25, 'black');
      CanvasRenderer.writeText(canvas, 'Press A', ((canvas.width - (canvas.width / 4)) - 25), (canvas.height - 45), 'right', 'Arial', 25, 'black');
      CanvasRenderer.writeText(canvas, 'Press S', (canvas.width - 25), (canvas.height - 45), 'right', 'Arial', 25, 'black');
    }
  }

  /**
   * laat zien hoeveel uses je nog voor de spells hebt
   * @param canvas het scherm
   */
  public renderStats(canvas: HTMLCanvasElement): void {
    CanvasRenderer.writeText(canvas, `${this.spells[0].getUsesLeft()}/${this.spells[0].getUses()}`, ((canvas.width - (canvas.width / 4)) - 25), (canvas.height - 145), 'right', 'Arial', 25, 'black');
    CanvasRenderer.writeText(canvas, `${this.spells[1].getUsesLeft()}/${this.spells[1].getUses()}`, (canvas.width - 25), (canvas.height - 145), 'right', 'Arial', 25, 'black');
    CanvasRenderer.writeText(canvas, `${this.spells[2].getUsesLeft()}/${this.spells[2].getUses()}`, ((canvas.width - (canvas.width / 4)) - 25), (canvas.height - 45), 'right', 'Arial', 25, 'black');
    CanvasRenderer.writeText(canvas, `${this.spells[3].getUsesLeft()}/${this.spells[3].getUses()}`, (canvas.width - 25), (canvas.height - 45), 'right', 'Arial', 25, 'black');
  }

  /**
   * laat zien dat het jouw beurt is
   * @param canvas het scherm
   */
  public playerTurn(canvas: HTMLCanvasElement): void {
    if (this.language) {
      CanvasRenderer.writeText(canvas, `het is ${this.player.getDutchName()}'s beurt`, 20, (canvas.height - 135), 'left', 'Arial', 41.5, 'white');
    } else {
      CanvasRenderer.writeText(canvas, `It is ${this.player.getName()}'s turn`, 20, (canvas.height - 135), 'left', 'Arial', 42.5, 'white');
    }
  }

  /**
   * shows which spell is used by the player
   * @param canvas the screen
   * @param spell the spell which is used
   */
  public playerUses(canvas: HTMLCanvasElement, spell: Spells): void {
    if (this.language) {
      CanvasRenderer.writeText(canvas, `${this.player.getDutchName()} Gebruikt ${spell.getDutchName()}`, 20, (canvas.height - 135), 'left', 'Arial', 41.5, 'white');
    } else {
      CanvasRenderer.writeText(canvas, `${this.player.getName()} Used ${spell.getName()}`, 20, (canvas.height - 135), 'left', 'Arial', 42.5, 'white');
    }
  }

  /**
   * shows which spell the enemy uses
   * @param canvas the screen
   * @param spell the spell which is used
   */
  public enemyUses(canvas: HTMLCanvasElement, spell: Spells): void {
    if (this.language) {
      CanvasRenderer.writeText(canvas, `${this.enemy.getDutchName()} Gebruikt ${spell.getDutchName()}`, 20, (canvas.height - 135), 'left', 'Arial', 41.5, 'white');
    } else {
      CanvasRenderer.writeText(canvas, `${this.enemy.getName()} Used ${spell.getName()}`, 20, (canvas.height - 135), 'left', 'Arial', 42.5, 'white');
    }
  }
}
