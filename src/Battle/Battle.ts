/* eslint-disable max-len */
import CanvasRenderer from '../CanvasRenderer.js';
import KeyListener from '../KeyListener.js';
import Scene from '../Scene.js';
import BattleUI from './BattleUI.js';

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

import MaxMeteorReverse from '../Spells/EnemySpells/MaxMeteorReverse.js';
import RailgunReverse from '../Spells/EnemySpells/RailgunReverse.js';
import EverlastingWinterReverse from '../Spells/EnemySpells/EverlastingWinterReverse.js';
import ZapReverse from '../Spells/EnemySpells/ZapReverse.js';

import Player from '../Characters/Player.js';
import Nerd from '../Characters/Nerd.js';
import Bully from '../Characters/Bully.js';
import IJsKoning from '../Characters/IJsKoning.js';
import Principle from '../Characters/Principle.js';

import FlameReverse from '../Spells/EnemySpells/FlameReverse.js';
import SnowBallReverse from '../Spells/EnemySpells/SnowBallReverse.js';
import IcicleClashReverse from '../Spells/EnemySpells/IcicleClashReverse.js';
import SnowStormReverse from '../Spells/EnemySpells/SnowStormReverse.js';
import BattleWinScrene from './BattleWinScrene.js';
import LoseScrene from './LoseScrene.js';
import GameWinScrene from './GameWinScrene.js';
import CharacterBuilder from '../Characters/CharacterBuilder.js';

export default class Battle extends Scene {
  private alive: boolean;

  private battleWon: boolean;

  private yourTurn: boolean;

  private enemyTurn: boolean;

  private stats: boolean;

  private battleUI: BattleUI;

  private player: CharacterBuilder;

  private enemy: CharacterBuilder;

  private spellList: Spells[] = [];

  private spells: Spells[] = [];

  private enemySpells: Spells[] = [];

  // eslint-disable-next-line max-len
  public constructor(maxX: number, maxY: number, canvas: HTMLCanvasElement, q: number, w: number, a: number, s: number, dutch: boolean, checkpoint: number) {
    super(maxX, maxY, canvas, checkpoint, dutch, q, w, a, s);
    this.canvas = canvas;
    this.checkpoint = checkpoint;

    this.spellList.push(new Flame(), new FireBall(), new HellFire(), new MaxMeteor(), new Zap(), new ThunderStorm(), new ThousandVoltSmash(), new Railgun(), new SnowBall(), new IcicleClash(), new SnowStorm(), new EverlastingWinter());
    this.spellList.push(new FlameReverse(), new MaxMeteorReverse(), new ZapReverse(), new RailgunReverse(), new SnowBallReverse(), new IcicleClashReverse(), new SnowStormReverse(), new EverlastingWinterReverse());

    this.alive = true;
    this.battleWon = false;
    this.yourTurn = true;
    this.enemyTurn = false;
    this.stats = false;
    this.languageDutch = dutch;

    this.battleUI = new BattleUI(q, w, a, s, checkpoint, dutch);

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

    this.spells.push(this.spellList[q], this.spellList[w], this.spellList[a], this.spellList[s]);
    this.enemySpells.push(this.spellList[this.enemy.getSpell(0)], this.spellList[this.enemy.getSpell(1)], this.spellList[this.enemy.getSpell(2)], this.spellList[this.enemy.getSpell(3)]);
  }

  /**
   * this function uses a move and does damage
   * @param i the number of the spell slot
   */
  public useSpell(i: number): void {
    if (this.spells[i].getUsesLeft() > 0) {
      this.spells[i].useSpell();
      this.yourTurn = false;
      this.spells[i].spellTrue();
    }
  }

  /**
   *
   * @param keyListener the keyboard
   */
  public override processInput(keyListener: KeyListener): void {
    if (this.yourTurn) {
      if (keyListener.keyPressed(KeyListener.KEY_Q)) {
        this.useSpell(0);
      }
      if (keyListener.keyPressed(KeyListener.KEY_W)) {
        this.useSpell(1);
      }
      if (keyListener.keyPressed(KeyListener.KEY_A)) {
        this.useSpell(2);
      }
      if (keyListener.keyPressed(KeyListener.KEY_S)) {
        this.useSpell(3);
      }
    } else if (this.enemyTurn) {
      const randomSpell: number = Math.floor(Math.random() * 4);
      if (this.enemySpells[randomSpell].getUsesLeft() > 0) {
        this.enemySpells[randomSpell].useSpell();
        this.enemySpells[randomSpell].spellTrue();
        this.enemyTurn = false;
      }
    }
    if (keyListener.isKeyDown(KeyListener.KEY_Z)) {
      this.stats = true;
    } else {
      this.stats = false;
    }
  }

  /**
   * moves the spells
   * @param elapsed increment of time
   */
  public override update(elapsed: number): void {
    if (this.enemy.getHealth() <= 0) {
      this.battleWon = true;
    }
    if (this.player.getHealth() <= 0) {
      this.alive = false;
    }
    for (let i: number = 0; i < this.spells.length; i++) {
      if (this.spells[i].getSpell() === true) {
        this.spells[i].update(elapsed);
      } else if (this.spells[i].getOver() === 1) {
        this.spells[i].spelNotOver();
        if (this.enemy.getElementalType() === 'ice' && this.spells[i].getElement() === 'fire') {
          this.enemy.setHealth(this.spells[i].getDamage() * 2);
        } else if (this.enemy.getElementalType() === 'ice' && this.spells[i].getElement() === 'ice') {
          this.enemy.setHealth(this.spells[i].getDamage() / 2);
        } else {
          this.enemy.setHealth(this.spells[i].getDamage());
        }
        this.enemyTurn = true;
      }
    }
    for (let i: number = 0; i < this.enemySpells.length; i++) {
      if (this.enemySpells[i].getSpell() === true) {
        this.enemySpells[i].update(elapsed);
      } else if (this.enemySpells[i].getOver() === 1) {
        this.enemySpells[i].spelNotOver();
        this.player.setHealth(this.enemySpells[i].getDamage());
        this.yourTurn = true;
      }
    }
  }

  public override getNextScene(): Scene {
    if (this.alive === false) {
      return new LoseScrene(this.maxX, this.maxY, this.canvas, this.languageDutch, this.checkpoint, this.q, this.w, this.a, this.s);
    }
    if (this.battleWon) {
      if (this.checkpoint === 12) {
        return new GameWinScrene(this.maxX, this.maxY, this.canvas, this.languageDutch);
      }
      // eslint-disable-next-line max-len
      return new BattleWinScrene(this.maxX, this.maxY, this.canvas, this.languageDutch, this.checkpoint, this.q, this.w, this.a, this.s);
    }

    return null;
  }

  /**
   *
   * @param canvas het canvas
   */
  public override render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.clearCanvas(canvas);
    this.battleUI.render(canvas);
    if (this.stats) {
      this.battleUI.renderInfo(canvas);
    } else {
      CanvasRenderer.writeText(canvas, `${this.spells[0].getUsesLeft()}/${this.spells[0].getUses()}`, ((canvas.width - (canvas.width / 4)) - 25), (canvas.height - 145), 'right', 'Arial', 25, 'black');
      CanvasRenderer.writeText(canvas, `${this.spells[1].getUsesLeft()}/${this.spells[1].getUses()}`, (canvas.width - 25), (canvas.height - 145), 'right', 'Arial', 25, 'black');
      CanvasRenderer.writeText(canvas, `${this.spells[2].getUsesLeft()}/${this.spells[2].getUses()}`, ((canvas.width - (canvas.width / 4)) - 25), (canvas.height - 45), 'right', 'Arial', 25, 'black');
      CanvasRenderer.writeText(canvas, `${this.spells[3].getUsesLeft()}/${this.spells[3].getUses()}`, (canvas.width - 25), (canvas.height - 45), 'right', 'Arial', 25, 'black');
    }
    if (this.yourTurn) {
      this.battleUI.playerTurn(canvas);
    } else {
      for (let i: number = 0; i < this.spells.length; i++) {
        if (this.spells[i].getSpell() === true) {
          this.battleUI.playerUses(canvas, this.spells[i]);
          this.spells[i].render(canvas);
        }
      }
      for (let i: number = 0; i < this.enemySpells.length; i++) {
        if (this.enemySpells[i].getSpell() === true) {
          this.battleUI.enemyUses(canvas, this.enemySpells[i]);
          this.enemySpells[i].render(canvas);
        }
      }
    }
    this.player.render(canvas);
    this.enemy.render(canvas);
    CanvasRenderer.writeText(canvas, `${this.player.getHealth()}/${this.player.getMaxHealth()}`, (250), (canvas.height / 2) - 102, 'center', 'Arial', 25, 'red');
    CanvasRenderer.writeText(canvas, `${this.enemy.getHealth()}/${this.enemy.getMaxHealth()}`, (canvas.width - 250), (canvas.height / 2) - 102, 'center', 'Arial', 25, 'red');
  }
}
