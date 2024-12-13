/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable max-len */
import CanvasRenderer from './CanvasRenderer.js';
import KeyListener from './KeyListener.js';

import Baasje from './OverworldCharacters/Baasje.js';
import Teacher from './OverworldCharacters/Teacher.js';
import IceKing from './OverworldCharacters/IceKing.js';
import Directeur from './OverworldCharacters/Directeur.js';
import Nurse from './OverworldCharacters/Nurse.js';
import Cheater from './OverworldCharacters/Cheater.js';
import TiredTeacher from './OverworldCharacters/TiredTeacher.js';
import Nerds from './OverworldCharacters/Nerds.js';

import Scene from './Scene.js';
import TalkScene from './TalkScene.js';
import QuestObjective from './QuestObjective.js';
import Battle from './Battle/Battle.js';

export default class BobsOdyssey extends Scene {
  private baasje: Baasje;

  private teacher: Teacher;

  private iceKing: IceKing;

  private principle: Directeur;

  private nurse: Nurse;

  private bully: Cheater;

  private tiredTeacher: TiredTeacher;

  private nerd: Nerds;

  private quest: QuestObjective;

  private movingAlowed: boolean;

  private talkScene: TalkScene;

  private interactTB: boolean;

  private interactTT: boolean;

  private interactDesk: boolean;

  private interactDoor: boolean;

  private mapLocation: number;

  private battle: boolean;

  // eslint-disable-next-line max-len
  public constructor(maxX: number, maxY: number, canvas: HTMLCanvasElement, dutch: boolean, checkpoint: number, q: number, w: number, a: number, s: number) {
    super(maxX, maxY, canvas, checkpoint, dutch, q, w, a, s);

    this.baasje = new Baasje(maxX, maxY, canvas, dutch);
    this.teacher = new Teacher();
    this.talkScene = new TalkScene(maxX, maxY);
    this.iceKing = new IceKing();
    this.principle = new Directeur();
    this.nurse = new Nurse();
    this.bully = new Cheater();
    this.tiredTeacher = new TiredTeacher();
    this.nerd = new Nerds();
    this.quest = new QuestObjective();

    /**
     * checkpoints:
     * 0 = start of the game, you are in the main classroom and have not started your first quest
     * 1 = you have started your first quest find the antivirus by defeating the bully you will
     *     spawn in the infirmary after defeat
     * 2 = after you won your first battle you can now complete the quest, go back to Bob/teacher
     * 3 = go and defeat the ice King
     * 4 = talk to bob again to get the 'final' quest
     * 5 = go to the principals office to find it locked
     * 6 = go back to Bob for more information
     * 7 = talk to the female teacher or directly battle the nerd
     * 8 = go and 'talk' to the nerd to get the vpn
     * 9 = with the vpn in hand talk to the female teacher as a whole new person
     * 10 = knowing the location of the key, go and retrieve it
     * 11 = open the office door
     * 12 = finaly fight the principal
     */
    if (checkpoint === 0) {
      this.mapLocation = 1;
    } else if (checkpoint === 1) {
      this.mapLocation = 0;
      this.baasje.setPos(2);
      this.iceKing.spawnCharacter();
    } else if (checkpoint === 2) {
      this.mapLocation = 0;
      this.baasje.winFightBully();
    } else if (checkpoint === 3) {
      this.mapLocation = 0;
      this.baasje.setPos(2);
    } else if (checkpoint === 4) {
      this.mapLocation = 2;
      this.baasje.winFightIceKing();
    } else if (checkpoint === 5) {
      this.mapLocation = 0;
    } else if (checkpoint === 6) {
      this.mapLocation = 1;
    } else if (checkpoint === 7) {
      this.mapLocation = 0;
    } else if (checkpoint === 8) {
      this.mapLocation = 0;
      this.baasje.setPos(2);
    } else if (checkpoint === 9) {
      this.mapLocation = 1;
      this.baasje.winFightNerd();
    } else if (checkpoint === 10) {
      this.mapLocation = 0;
    } else if (checkpoint === 11) {
      this.mapLocation = 0;
    } else if (checkpoint === 12) {
      this.mapLocation = 0;
      this.baasje.setPos(2);
      this.baasje.openDoor();
    }
    this.movingAlowed = true;
    this.interactTB = false;
    this.interactTT = false;
    this.interactDesk = false;
    this.interactDoor = false;
    this.languageDutch = dutch;
    this.battle = false;
  }

  /**
   * moves the player and go through dialogue
   * @param keyListener the key inputs
   */
  public processInput(keyListener: KeyListener): void {
    if (this.movingAlowed) {
      if (keyListener.isKeyDown(KeyListener.KEY_W)) {
        this.baasje.moveUp();
      }
      if (keyListener.isKeyDown(KeyListener.KEY_S)) {
        this.baasje.moveDown();
      }
      if (keyListener.isKeyDown(KeyListener.KEY_D)) {
        this.baasje.moveRight();
      }
      if (keyListener.isKeyDown(KeyListener.KEY_A)) {
        this.baasje.moveLeft();
      }
      if (keyListener.keyPressed(KeyListener.KEY_E)) {
        if (this.checkpoint >= 1) {
          if (this.baasje.getNearDoor()) {
            this.baasje.deur();
          }
        }
        if (this.mapLocation === 1 && this.checkCollision(this.baasje.getBounds(), this.teacher.getBounds())) {
          this.interactTB = true;
          this.movingAlowed = false;
        }
        if (this.mapLocation === 1 && this.checkCollision(this.baasje.getBounds(), this.nerd.getBounds())) {
          if (this.checkpoint === 7 || this.checkpoint === 8) {
            this.battle = true;
          }
        }
        if (this.mapLocation === 0 && this.checkCollision(this.baasje.getBounds(), this.bully.getBounds())) {
          if (this.checkpoint === 1) {
            this.battle = true;
          }
        }
        if (this.mapLocation === 0 && this.checkCollision(this.baasje.getBounds(), this.tiredTeacher.getBounds())) {
          this.interactTT = true;
          this.movingAlowed = false;
        }
        if (this.mapLocation === 0 && this.checkCollision(this.baasje.getBounds(), this.principle.getBounds())) {
          if (this.checkpoint === 12) {
            this.battle = true;
          }
        }
        if (this.mapLocation === 2 && this.checkCollision(this.baasje.getBounds(), this.iceKing.getBounds())) {
          if (this.checkpoint === 3) {
            this.battle = true;
          }
        }
        if (this.mapLocation === 2 && this.checkCollision(this.baasje.getBounds(), {
          x: 1352, y: 458, width: 88, height: 67,
        })) {
          this.interactDesk = true;
          this.movingAlowed = false;
        }
        if (this.mapLocation === 0 && this.checkCollision(this.baasje.getBounds(), {
          x: 591, y: 279, width: 64, height: 44,
        })) {
          if (this.checkpoint <= 11) {
            this.interactDoor = true;
            this.movingAlowed = false;
          }
        }
      }
    }
    if (keyListener.keyPressed(KeyListener.KEY_SPACE)) {
      if (this.interactTB) {
        if (this.checkpoint === 0 || this.checkpoint === 2 || this.checkpoint === 4 || this.checkpoint === 7) {
          if (this.checkpoint === 2) {
            this.iceKing.spawnCharacter();
          }
          this.checkpoint += 1;
        }
        this.interactTB = false;
        this.movingAlowed = true;
      }
      if (this.interactTT) {
        if (this.checkpoint === 6 || this.checkpoint === 9) {
          this.checkpoint += 1;
        }
        this.interactTT = false;
        this.movingAlowed = true;
      }
      if (this.interactDesk) {
        if (this.checkpoint === 10) {
          this.checkpoint += 1;
        }
        this.interactDesk = false;
        this.movingAlowed = true;
      }
      if (this.interactDoor) {
        if (this.checkpoint === 5 || this.checkpoint === 11) {
          this.checkpoint += 1;
        }
        this.interactDoor = false;
        this.movingAlowed = true;
      }
    }
    if (keyListener.keyPressed(KeyListener.KEY_Z)) {
      if (this.languageDutch) {
        this.languageDutch = false;
      } else {
        this.languageDutch = true;
      }
    }
  }

  /**
   * move one screne left
   */
  public goLeft(): void {
    this.mapLocation -= 1;
    if (this.mapLocation >= 0) {
      this.baasje.setPos(0);
    } else {
      this.mapLocation = 0;
    }
  }

  /**
   * moves one screne right
   */
  public goRight(): void {
    this.mapLocation += 1;
    if (this.mapLocation <= 2) {
      this.baasje.setPos(1);
    } else {
      this.mapLocation = 2;
    }
  }

  public override getNextScene(): Scene {
    if (this.battle) {
      // eslint-disable-next-line max-len
      return new Battle(this.maxX, this.maxY, this.canvas, this.q, this.w, this.a, this.s, this.languageDutch, this.checkpoint);
    }
    return this;
  }

  // eslint-disable-next-line class-methods-use-this
  private checkCollision(
    object1: { x: number; y: number; width: number; height: number },
    object2: { x: number; y: number; width: number; height: number },
  ): boolean {
    return (
      object1.x < object2.x + object2.width
      && object1.x + object1.width > object2.x
      && object1.y < object2.y + object2.height
      && object1.y + object1.height > object2.y
    );
  }

  /**
   * moves the player and the screne
   * @param elapsed the time that has passed
   */
  public update(elapsed: number): void {
    this.baasje.update(elapsed);
    if (this.checkpoint === 11) {
      this.baasje.openDoor();
    }

    if (this.baasje.getPosX() > 1475 && this.mapLocation === 0) {
      this.goRight();
      this.baasje.goToMiddelScreen();
    }
    if (this.baasje.getPosX() > 1475 && this.mapLocation === 1 /* && this.interactTB */) {
      this.goRight();
      this.baasje.goToScreenRight();
    }
    if (this.baasje.getPosX() < 5 && this.mapLocation === 1 /* && this.interactTB */) {
      this.goLeft();
      this.baasje.goToScreenLeft();
    }
    if (this.baasje.getPosX() < 5 && this.mapLocation === 2) {
      this.goLeft();
      this.baasje.goToMiddelScreen();
    }
  }

  /**
   * draws the map and the npc's
   * @param canvas the screne
   */
  public render(canvas: HTMLCanvasElement): void {
    if (this.mapLocation === 2) {
      CanvasRenderer.drawImage(canvas, CanvasRenderer.loadNewImage('./assets/level2.png'), -330, -655);
      this.iceKing.render(canvas);

      CanvasRenderer.drawRectangle(canvas, (canvas.width - 14), 260, (14), 138, 'black');
      CanvasRenderer.fillRectangle(canvas, (canvas.width - 13.9), 260.1, 13.8, 137.8, 'white');
      CanvasRenderer.fillRectangle(canvas, 839, 450, 3, (64), '#CA8854');
      CanvasRenderer.fillRectangle(canvas, 852, 450, 3, (64), '#CA8854');
      CanvasRenderer.fillRectangle(canvas, 917, 450, 3, (64), '#CA8854');
      CanvasRenderer.fillRectangle(canvas, 930, 450, 3, (64), '#CA8854');
    } else if (this.mapLocation === 1) {
      CanvasRenderer.drawImage(canvas, CanvasRenderer.loadNewImage('./assets/Top van school OOP V1.png'), -330, -208);
      this.teacher.render(canvas);
      this.nerd.render(canvas);
    } else if (this.mapLocation === 0) {
      CanvasRenderer.drawImage(canvas, CanvasRenderer.loadNewImage('./assets/MapLeft.png'), -400, -816);
      this.principle.render(canvas);
      this.nurse.render(canvas);
      this.bully.render(canvas);
      this.tiredTeacher.render(canvas);

      CanvasRenderer.drawRectangle(canvas, 0, 260, 14, 138, 'black');
      CanvasRenderer.fillRectangle(canvas, 0.1, 260.1, 13.8, 137.8, 'white');
    }

    this.baasje.render(canvas);
    // this.IceKing.render();

    if (this.interactTB) {
      this.talkScene.render(canvas);
      if (this.languageDutch) {
        this.talkScene.teacherTalkDutch(canvas, this.checkpoint);
      } else {
        this.talkScene.teacherTalkEnglish(canvas, this.checkpoint);
      }
    }
    if (this.interactTT) {
      this.talkScene.render(canvas);
      if (this.languageDutch) {
        this.talkScene.femaleTeacherDutch(canvas, this.checkpoint);
      } else {
        this.talkScene.femaleTeacherEnglish(canvas, this.checkpoint);
      }
    }
    if (this.interactDesk) {
      if (this.languageDutch) {
        this.talkScene.interactDeskDutch(canvas, this.checkpoint);
      } else {
        this.talkScene.interactDeskEnglish(canvas, this.checkpoint);
      }
    }
    if (this.interactDoor) {
      if (this.languageDutch) {
        this.talkScene.lockedDoorDutch(canvas, this.checkpoint);
      } else {
        this.talkScene.lockedDoorEnglish(canvas, this.checkpoint);
      }
    }
    CanvasRenderer.fillRectangle(canvas, (canvas.width - 410), 6, 400, 100, 'white');
    CanvasRenderer.drawRectangle(canvas, (canvas.width - 410), 6, 400, 100, 'black');
    // eslint-disable-next-line max-len
    CanvasRenderer.writeText(canvas, "Bob's Odyssey", canvas.width - 15, 150, 'right', 'Arial', 32, 'black');

    if (this.languageDutch) {
      CanvasRenderer.writeText(canvas, 'Nederlands', 40, 30, 'left', 'Arial', 32, 'black');
      CanvasRenderer.writeText(canvas, `Checkpoint: ${this.checkpoint}`, 40, 64, 'left', 'Arial', 32, 'black');
      if (this.checkpoint === 6 || this.checkpoint === 10 || this.checkpoint === 12) {
        CanvasRenderer.writeText(canvas, this.quest.getQuestDutch(this.checkpoint), (canvas.width - 400), 50, 'left', 'Arial', 32, 'black');
        CanvasRenderer.writeText(canvas, this.quest.getSecondLineDutch(this.checkpoint), (canvas.width - 400), 82, 'left', 'Arial', 32, 'black');
      } else {
        CanvasRenderer.writeText(canvas, this.quest.getQuestDutch(this.checkpoint), (canvas.width - 400), 66, 'left', 'Arial', 32, 'black');
      }
    } else {
      CanvasRenderer.writeText(canvas, 'English', 40, 30, 'left', 'Arial', 32, 'black');
      CanvasRenderer.writeText(canvas, `Checkpoint: ${this.checkpoint}`, 40, 64, 'left', 'Arial', 32, 'black');
      if (this.checkpoint === 6 || this.checkpoint === 7 || this.checkpoint === 10 || this.checkpoint === 12) {
        CanvasRenderer.writeText(canvas, this.quest.getQuestEnglish(this.checkpoint), (canvas.width - 400), 50, 'left', 'Arial', 32, 'black');
        CanvasRenderer.writeText(canvas, this.quest.getSecondLineEnglish(this.checkpoint), (canvas.width - 400), 82, 'left', 'Arial', 32, 'black');
      } else {
        CanvasRenderer.writeText(canvas, this.quest.getQuestEnglish(this.checkpoint), (canvas.width - 400), 66, 'left', 'Arial', 32, 'black');
      }
    }
  }
}
