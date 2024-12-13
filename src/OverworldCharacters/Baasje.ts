import CanvasRenderer from '../CanvasRenderer.js';

export default class Baasje {
  private image: HTMLImageElement;

  private posX: number;

  private posY: number;

  private maxX: number;

  private maxY: number;

  private canvas: HTMLCanvasElement;

  private movingLeft: boolean;

  private movingRight: boolean;

  private movingUp: boolean;

  private movingDown: boolean;

  private speed: number;

  private lokaalZero: boolean;

  private nearDoor: boolean;

  private throughDoor: boolean;

  private gang: boolean;

  private library: boolean;

  private caffetaria: boolean;

  private gang2: boolean;

  private gang3: boolean;

  private wcGang: boolean;

  private lokaalOne: boolean;

  private wc: boolean;

  private gang4: boolean;

  private nursery: boolean;

  private facultyLounge: boolean;

  private outside: boolean;

  private lokaalThree: boolean;

  private office: boolean;

  private doorOpened: boolean;

  private languageDutch: boolean;

  public constructor(maxX: number, maxY: number, canvas: HTMLCanvasElement, dutch: boolean) {
    this.image = CanvasRenderer.loadNewImage('./assets/Baasje.png');
    this.maxX = maxX;
    this.maxY = maxY;
    this.posX = maxX / 2;
    this.posY = maxY / 2;
    this.canvas = canvas;
    this.languageDutch = dutch;

    this.movingLeft = false;
    this.movingRight = false;
    this.movingUp = false;
    this.movingDown = false;
    this.speed = 0.2;

    this.lokaalZero = true;
    this.lokaalOne = false;
    this.lokaalThree = false;
    this.gang = false;
    this.gang2 = false;
    this.gang3 = false;
    this.gang4 = false;
    this.wcGang = false;
    this.library = false;
    this.caffetaria = false;
    this.wc = false;
    this.nursery = false;
    this.facultyLounge = false;
    this.office = false;
    this.outside = false;

    this.nearDoor = false;
    this.throughDoor = false;
    this.doorOpened = false;
  }

  public getBounds(): { x: number; y: number; width: number; height: number } {
    const { width } = this.image; // Assuming image is loaded
    const { height } = this.image; // Assuming image is loaded

    return {
      x: this.posX,
      y: this.posY,
      width,
      height,
    };
  }

  /**
   * moves the player to the left
   */
  public moveLeft(): void {
    this.movingLeft = true;
  }

  /**
   * moves the player to the right
   */
  public moveRight(): void {
    this.movingRight = true;
  }

  /**
   * moves the player up
   */
  public moveUp(): void {
    this.movingUp = true;
  }

  /**
   * moves the player down
   */
  public moveDown(): void {
    this.movingDown = true;
  }

  /**
   * updates the location of the player
   * @param elapsed the increment of time
   */
  public update(elapsed: number): void {
    if (this.movingLeft) {
      this.posX -= this.speed * elapsed;
      if (this.posX < 2) {
        this.posX = 2;
      }
      this.movingLeft = false;
    }
    if (this.movingRight) {
      this.posX += this.speed * elapsed;
      if (this.posX > 1480) {
        this.posX = 1480;
      }
      this.movingRight = false;
    }
    if (this.movingUp) {
      this.posY -= this.speed * elapsed;
      if (this.posY < 0) {
        this.posY = 0;
      }
      this.movingUp = false;
    }
    if (this.movingDown) {
      this.posY += this.speed * elapsed;
      if (this.posY > this.maxY) {
        this.posY = this.maxY;
      }
      this.movingDown = false;
    }
    this.isColliding();
  }

  public getPosY(): number {
    return this.posY;
  }

  public getPosX(): number {
    return this.posX;
  }

  /**
   *  0 = moving left one screen and ending op on the right of the next screne
   *  1 = moving right one screne and ending up on the left of the next screne
   *  2 = dying in battle and ending up in the infermary
   * @param instance the place you want to move the player to
   */
  public setPos(instance: number): void {
    if (instance === 0) {
      this.posX = 1470;
    } else if (instance === 1) {
      this.posX = 5;
    } else {
      this.posX = 400;
      this.posY = 40;
      this.lokaalZero = false;
      this.nursery = true;
    }
  }

  public getNearDoor(): boolean {
    return this.nearDoor;
  }

  /**
   * checks for the collision per room and changes it
   */
  public isColliding(): void {
    if (this.lokaalZero) {
      if (this.posX < 709) {
        this.posX = 709;
      }
      if (this.posX > 1080) {
        this.posX = 1080;
      }
      if (this.posY < 421) {
        this.posY = 421;
      }
      if (this.posY > 699) {
        this.posY = 699;
      }
      if (this.posX > 804 && this.posX < 854 && this.posY === 421) {
        this.nearDoor = true;
        if (this.throughDoor) {
          this.posX = 824;
          this.posY = 350;
          this.lokaalZero = false;
          this.gang = true;
          this.throughDoor = false;
          this.nearDoor = false;
        }
      } else {
        this.nearDoor = false;
      }
    }
    if (this.gang) {
      if (this.posY > 330) {
        this.posY = 330;
      }
      if (this.posY < 295) {
        this.posY = 295;
      }
      if (this.posX > 804 && this.posX < 854 && this.posY === 330) {
        this.nearDoor = true;
        if (this.throughDoor) {
          this.posX = 824;
          this.posY = 423;
          this.gang = false;
          this.lokaalZero = true;
          this.throughDoor = false;
          this.nearDoor = false;
        }
      } else if (this.posX > 347 && this.posX < 410 && this.posY === 295) {
        this.nearDoor = true;
        if (this.throughDoor) {
          this.posX = 379;
          this.posY = 206;
          this.gang = false;
          this.library = true;
          this.nearDoor = false;
          this.throughDoor = false;
        }
      } else if (this.posX > 220 && this.posX < 280 && this.posY === 330) {
        this.nearDoor = true;
        if (this.throughDoor) {
          this.posX = 250;
          this.posY = 416;
          this.caffetaria = true;
          this.gang = false;
          this.throughDoor = false;
          this.nearDoor = false;
        }
      } else {
        this.nearDoor = false;
      }
    }
    if (this.library) {
      if (this.posY < 36) {
        this.posY = 36;
      }
      if (this.posY > 206) {
        this.posY = 206;
      }
      if (this.posX < 327) {
        this.posX = 327;
      }
      if (this.posX > 622) {
        this.posX = 622;
      }
      if (this.posX > 347 && this.posX < 410 && this.posY === 206) {
        this.nearDoor = true;
        if (this.throughDoor) {
          this.posX = 379;
          this.posY = 300;
          this.library = false;
          this.gang = true;
          this.nearDoor = false;
          this.throughDoor = false;
        }
      } else {
        this.nearDoor = false;
      }
    }
    if (this.caffetaria) {
      if (this.posY > 781) {
        this.posY = 781;
      }
      if (this.posY < 416) {
        this.posY = 416;
      }
      if (this.posX > 671) {
        this.posX = 671;
      }
      if (this.posX < 167) {
        this.posX = 167;
      }
      if (this.posX > 220 && this.posX < 280 && this.posY === 416) {
        this.nearDoor = true;
        if (this.throughDoor) {
          this.posX = 250;
          this.posY = 325;
          this.caffetaria = false;
          this.gang = true;
          this.nearDoor = false;
          this.throughDoor = false;
        }
      } else {
        this.nearDoor = false;
      }
    }
    if (this.gang2) {
      if (this.posY > 330) {
        this.posY = 330;
      }
      if (this.posY < 295) {
        this.posY = 295;
      }
      if (this.posX > 675) {
        this.gang2 = false;
        this.gang3 = true;
      }
    }
    if (this.gang3) {
      if (this.posX < 675 && this.posY < 295) {
        this.posX = 675;
      }
      if (this.posX < 675 && this.posY > 295 && this.posY < 330) {
        this.gang3 = false;
        this.gang2 = true;
      }
      if (this.posY < 100) {
        this.posY = 100;
      }
      if (this.posY > 330) {
        this.posY = 330;
      }
      if (this.posX > 1296) {
        this.posX = 1296;
      }
      if (this.posY === 330 && this.posX > 834 && this.posX < 884) {
        this.gang3 = false;
        this.wcGang = true;
      }
      if (this.posX > 1214 && this.posX < 1270 && this.posY === 330) {
        this.nearDoor = true;
        if (this.throughDoor) {
          this.posX = 1242;
          this.posY = 423;
          this.gang3 = false;
          this.lokaalOne = true;
          this.nearDoor = false;
          this.throughDoor = false;
        }
      } else {
        this.nearDoor = false;
      }
    }
    if (this.lokaalOne) {
      if (this.posY < 423) {
        this.posY = 423;
      }
      if (this.posY > 701) {
        this.posY = 701;
      }
      if (this.posX > 1421) {
        this.posX = 1421;
      }
      if (this.posX < 1095) {
        this.posX = 1095;
      }
      if (this.posX > 1214 && this.posX < 1270 && this.posY === 423) {
        this.nearDoor = true;
        if (this.throughDoor) {
          this.posX = 1242;
          this.posY = 335;
          this.lokaalOne = false;
          this.gang3 = true;
          this.nearDoor = false;
          this.throughDoor = false;
        }
      } else {
        this.nearDoor = false;
      }
    }
    if (this.wcGang) {
      if (this.posX < 844) {
        this.posX = 844;
      }
      if (this.posX > 884) {
        this.posX = 884;
      }
      if (this.posY > 520) {
        this.posY = 520;
      }
      if (this.posY < 330) {
        this.wcGang = false;
        this.gang3 = true;
      }
      if (this.posY < 470 && this.posY > 440 && this.posX === 844) {
        this.nearDoor = true;
        if (this.throughDoor) {
          this.posX = 804;
          this.posY = 455;
          this.wcGang = false;
          this.throughDoor = false;
          this.nearDoor = false;
          this.wc = true;
        }
      } else {
        this.nearDoor = false;
      }
    }
    if (this.wc) {
      if (this.posX < 664) {
        this.posX = 664;
      }
      if (this.posY < 417) {
        this.posY = 417;
      }
      if (this.posX > 805) {
        this.posX = 805;
      }
      if (this.posY > 525) {
        this.posY = 525;
      }
      if (this.posY > 440 && this.posY < 470 && this.posX === 805) {
        this.nearDoor = true;
        if (this.throughDoor) {
          this.posX = 824;
          this.posY = 455;
          this.wc = false;
          this.wcGang = true;
          this.throughDoor = false;
          this.nearDoor = false;
        }
      } else {
        this.nearDoor = false;
      }
    }
    if (this.gang4) {
      if (this.posY < 285) {
        this.posY = 285;
      }
      if (this.posY > 331) {
        this.posY = 331;
      }
      if (this.posX > 251 && this.posX < 312 && this.posY === 285) {
        this.nearDoor = true;
        if (this.throughDoor) {
          this.posX = 284;
          this.posY = 202;
          this.gang4 = false;
          this.nursery = true;
          this.nearDoor = false;
          this.throughDoor = false;
        }
      } else if (this.posX > 509 && this.posX < 565 && this.posY === 331) {
        this.nearDoor = true;
        if (this.throughDoor) {
          this.posX = 539;
          this.posY = 415;
          this.gang4 = false;
          this.facultyLounge = true;
          this.nearDoor = false;
          this.throughDoor = false;
        }
      } else if (this.posX > 1147 && this.posX < 1202 && this.posY === 285) {
        this.nearDoor = true;
        if (this.throughDoor) {
          this.posX = 1172;
          this.posY = 203;
          this.gang4 = false;
          this.outside = true;
          this.nearDoor = false;
          this.throughDoor = false;
        }
      } else if (this.posX > 1147 && this.posX < 1202 && this.posY === 331) {
        this.nearDoor = true;
        if (this.throughDoor) {
          this.posX = 1172;
          this.posY = 418;
          this.gang4 = false;
          this.lokaalThree = true;
          this.throughDoor = false;
          this.nearDoor = false;
        }
      } else if (this.posX > 567 && this.posX < 631 && this.posY === 285) {
        this.nearDoor = true;
        if (this.throughDoor && this.doorOpened) {
          this.posX = 606;
          this.posY = 203;
          this.gang4 = false;
          this.office = true;
          this.nearDoor = false;
          this.throughDoor = false;
        }
      } else {
        this.nearDoor = false;
      }
    }
    if (this.outside) {
      if (this.posX < 775) {
        this.posX = 775;
      }
      if (this.posY > 202) {
        this.posY = 202;
      }
      if (this.posX > 1147 && this.posX < 1202 && this.posY === 202) {
        this.nearDoor = true;
        if (this.throughDoor) {
          this.posX = 1172;
          this.posY = 290;
          this.outside = false;
          this.gang4 = true;
          this.throughDoor = false;
          this.nearDoor = false;
        }
      } else {
        this.nearDoor = false;
      }
    }
    if (this.lokaalThree) {
      if (this.posX < 966) {
        this.posX = 966;
      }
      if (this.posX > 1331) {
        this.posX = 1331;
      }
      if (this.posY < 414) {
        this.posY = 414;
      }
      if (this.posY > 665) {
        this.posY = 665;
      }
      if (this.posX > 1147 && this.posX < 1202 && this.posY === 414) {
        this.nearDoor = true;
        if (this.throughDoor) {
          this.posX = 1172;
          this.posY = 330;
          this.lokaalThree = false;
          this.gang4 = true;
          this.throughDoor = false;
          this.nearDoor = false;
        }
      } else {
        this.nearDoor = false;
      }
    }
    if (this.facultyLounge) {
      if (this.posX > 864) {
        this.posX = 864;
      }
      if (this.posX < 417) {
        this.posX = 417;
      }
      if (this.posY > 665) {
        this.posY = 665;
      }
      if (this.posY < 414) {
        this.posY = 414;
      }
      if (this.posX > 481 && this.posX < 567 && this.posY === 414) {
        this.nearDoor = true;
        if (this.throughDoor) {
          this.posX = 539;
          this.posY = 330;
          this.facultyLounge = false;
          this.gang4 = true;
          this.nearDoor = false;
          this.throughDoor = false;
        }
      } else {
        this.nearDoor = false;
      }
    }
    if (this.nursery) {
      if (this.posX < 224) {
        this.posX = 224;
      }
      if (this.posX < 339) {
        if (this.posY > 120 || this.posY < 60) {
          if (this.posX > 326) {
            this.posX = 326;
          }
        }
      }
      if (this.posX > 339) {
        if (this.posY > 120 || this.posY < 60) {
          if (this.posX < 362) {
            this.posX = 362;
          }
        }
      }
      if (this.posX > 431) {
        this.posX = 431;
      }
      if (this.posY > 202) {
        this.posY = 202;
      }
      if (this.posY < 29) {
        this.posY = 29;
      }
      if (this.posX > 223 && this.posX < 284 && this.posY === 202) {
        this.nearDoor = true;
        if (this.throughDoor) {
          this.posX = 256;
          this.posY = 285;
          this.nursery = false;
          this.gang4 = true;
          this.nearDoor = false;
          this.throughDoor = false;
        }
      } else {
        this.nearDoor = false;
      }
    }
    if (this.office) {
      if (this.posX > 796) {
        this.posX = 796;
      }
      if (this.posX < 559) {
        this.posX = 559;
      }
      if (this.posY > 202) {
        this.posY = 202;
      }
      if (this.posY < 29) {
        this.posY = 29;
      }
      if (this.posX > 567 && this.posX < 631 && this.posY === 202) {
        this.nearDoor = true;
        if (this.throughDoor) {
          this.posX = 601;
          this.posY = 290;
          this.office = false;
          this.gang4 = true;
          this.nearDoor = false;
          this.throughDoor = false;
        }
      } else {
        this.nearDoor = false;
      }
    }
  }

  /**
   * makes it so that collisions can change
   */
  public deur(): void {
    this.throughDoor = true;
  }

  /**
   * opens the office door
   */
  public openDoor(): void {
    this.doorOpened = true;
  }

  /**
   * enables the collision of the hall on the left screne
   */
  public goToScreenLeft(): void {
    this.gang = false;
    this.gang4 = true;
  }

  /**
   * enables the collision of the hall on the right screne
   */
  public goToScreenRight(): void {
    this.gang = false;
    this.gang2 = true;
  }

  /**
   * enables the collision of the hall on the middle screne
   */
  public goToMiddelScreen(): void {
    this.gang = true;
    this.gang2 = false;
    this.gang4 = false;
  }

  /**
   * spawns you on the playground after the bully fight
   */
  public winFightBully(): void {
    this.lokaalZero = false;
    this.outside = true;
    this.posX = 1000;
    this.posY = 150;
  }

  /**
   * spawns you in the bathroom after the Ice King fight
   */
  public winFightIceKing(): void {
    this.lokaalZero = false;
    this.wc = true;
    this.posX = 705;
    this.posY = 443;
  }

  /**
   * spawns you in the library after the nerd fight
   */
  public winFightNerd(): void {
    this.lokaalZero = false;
    this.library = true;
    this.posX = 410;
    this.posY = 116;
  }

  /**
   * draws the player character
   * @param canvas the screne
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
    if (this.nearDoor) {
      if (this.languageDutch) {
        CanvasRenderer.writeText(canvas, 'Druk op E om door deur te gaan', this.posX + (this.image.width / 2), this.posY + 65, 'center');
      } else {
        CanvasRenderer.writeText(canvas, 'Press E to enter door', (this.posX + this.image.width / 2), this.posY + 65, 'center');
      }
    }
  }
}
