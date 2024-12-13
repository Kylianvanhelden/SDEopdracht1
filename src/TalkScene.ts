/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable max-len */
import CanvasRenderer from './CanvasRenderer.js';

export default class TalkScene {
  private image: HTMLImageElement;

  private staticBaasje: HTMLImageElement;

  private staticBob: HTMLImageElement;

  private posX: number;

  private posY: number;

  public constructor(maxX: number, maxY: number) {
    this.image = CanvasRenderer.loadNewImage('./assets/TalkingMenuV1.png');
    this.staticBaasje = CanvasRenderer.loadNewImage('./assets/TalkSceneBaasje.png');
    this.staticBob = CanvasRenderer.loadNewImage('./assets/TalkSceneBob.png');
    this.posX = maxX / 2;
    this.posY = maxY / 2;
  }

  public getPosY(): number {
    return this.posY;
  }

  public getPosX(): number {
    return this.posX;
  }

  /**
   * writes a message in dutch when interacting with the desk
   * @param canvas the screne
   * @param checkpoint the instance of the game
   */
  public interactDeskDutch(canvas: HTMLCanvasElement, checkpoint: number): void {
    CanvasRenderer.drawRectangle(canvas, (canvas.width / 2 - 320), (canvas.height / 2 - 55), 640, 100, 'black');
    CanvasRenderer.fillRectangle(canvas, (canvas.width / 2 - 318), (canvas.height / 2 - 53), 636, (96), 'white');
    CanvasRenderer.writeText(canvas, 'Druk op Spatie om door te gaan', (canvas.width / 2 + 314), (canvas.height / 2 + 37), 'right', 'Arial', 16, 'black');
    if (checkpoint === 10) {
      CanvasRenderer.writeText(canvas, 'Je hebt een sleutel gevonden!!', (canvas.width / 2), (canvas.height / 2), 'center', 'Arial', 25, 'black');
    } else if (checkpoint === 11 || checkpoint === 12) {
      CanvasRenderer.writeText(canvas, 'Er is hier niks van belang!', (canvas.width / 2), (canvas.height / 2), 'center', 'Arial', 25, 'black');
    } else {
      CanvasRenderer.writeText(canvas, 'Het is niet netjes om aan andermans spullen te zitten!', (canvas.width / 2), (canvas.height / 2), 'center', 'Arial', 25, 'black');
    }
  }

  /**
   * writes a message in english when interacting with the desk
   * @param canvas the screne
   * @param checkpoint the instance of the game
   */
  public interactDeskEnglish(canvas: HTMLCanvasElement, checkpoint: number): void {
    CanvasRenderer.drawRectangle(canvas, (canvas.width / 2 - 320), (canvas.height / 2 - 55), 640, 100, 'black');
    CanvasRenderer.fillRectangle(canvas, (canvas.width / 2 - 318), (canvas.height / 2 - 53), 636, (96), 'white');
    CanvasRenderer.writeText(canvas, 'Press Space to continue', (canvas.width / 2 + 314), (canvas.height / 2 + 37), 'right', 'Arial', 16, 'black');
    if (checkpoint === 10) {
      CanvasRenderer.writeText(canvas, 'You found a key!!', (canvas.width / 2), (canvas.height / 2), 'center', 'Arial', 25, 'black');
    } else if (checkpoint === 11 || checkpoint === 12) {
      CanvasRenderer.writeText(canvas, 'There is nothing of interest here!', (canvas.width / 2), (canvas.height / 2), 'center', 'Arial', 25, 'black');
    } else {
      CanvasRenderer.writeText(canvas, "It's not nice to look through other people's stuff!", (canvas.width / 2), (canvas.height / 2), 'center', 'Arial', 25, 'black');
    }
  }

  /**
   * writes a message in dutch when interacting with the door to the principals office
   * @param canvas the screne
   * @param checkpoint the instance of the game
   */
  public lockedDoorDutch(canvas: HTMLCanvasElement, checkpoint: number): void {
    CanvasRenderer.drawRectangle(canvas, (canvas.width / 2 - 320), (canvas.height / 2 - 55), 640, 100, 'black');
    CanvasRenderer.fillRectangle(canvas, (canvas.width / 2 - 318), (canvas.height / 2 - 53), 636, (96), 'white');
    CanvasRenderer.writeText(canvas, 'Druk op Spatie om door te gaan', (canvas.width / 2 + 314), (canvas.height / 2 + 37), 'right', 'Arial', 16, 'black');
    if (checkpoint === 11) {
      CanvasRenderer.writeText(canvas, 'Je hebt de deur van het slot gehaald!!', (canvas.width / 2), (canvas.height / 2), 'center', 'Arial', 25, 'black');
    } else {
      CanvasRenderer.writeText(canvas, 'Deze deur zit op slot!', (canvas.width / 2), (canvas.height / 2), 'center', 'Arial', 25, 'black');
    }
  }

  /**
   * writes a message in english when interacting with the door to the principals office
   * @param canvas the screne
   * @param checkpoint the instance of the game
   */
  public lockedDoorEnglish(canvas: HTMLCanvasElement, checkpoint: number): void {
    CanvasRenderer.drawRectangle(canvas, (canvas.width / 2 - 320), (canvas.height / 2 - 55), 640, 100, 'black');
    CanvasRenderer.fillRectangle(canvas, (canvas.width / 2 - 318), (canvas.height / 2 - 53), 636, (96), 'white');
    CanvasRenderer.writeText(canvas, 'Press Space to continue', (canvas.width / 2 + 314), (canvas.height / 2 + 37), 'right', 'Arial', 16, 'black');
    if (checkpoint === 11) {
      CanvasRenderer.writeText(canvas, 'You unlocked the door!!', (canvas.width / 2), (canvas.height / 2), 'center', 'Arial', 25, 'black');
    } else {
      CanvasRenderer.writeText(canvas, 'This door is locked!', (canvas.width / 2), (canvas.height / 2), 'center', 'Arial', 25, 'black');
    }
  }

  /**
   * gives hints or the quest for the apropriate checkpoint in dutch
   * @param canvas the screne
   * @param checkpoint the state of the game
   */
  public teacherTalkDutch(canvas: HTMLCanvasElement, checkpoint: number): void {
    this.staticBob = CanvasRenderer.loadNewImage('./assets/TalkSceneBob.png');
    if (checkpoint === 0) {
      CanvasRenderer.writeText(canvas, 'Heee Baasje, hoe is het dan? Hopelijk goed want ik heb een opdracht voor je!', (this.image.width / 2), (canvas.height - this.image.height) + (1 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "Er gebeuren vreemde dingen op de Hogeschool Zoutelande. De code vertoont glitches, programma's verdwijnen", (this.image.width / 2), (canvas.height - this.image.height) + (2 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, 'en we worden constant gedoxed. We hebben een antivirus nodig om het systeem weer online te krijgen!', (this.image.width / 2), (canvas.height - this.image.height) + (3 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, 'Ik denk dat ik weet wie er een heeft, ByteBoi, de pestkop van de school.', (this.image.width / 2), (canvas.height - this.image.height) + (4 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, 'Ik wil dat je dit gaat onderzoeken. Ga naar het speelplein waar ByteBoi meestal rondhangt en help me.', (this.image.width / 2), (canvas.height - this.image.height) + (5 * 35), 'center', 'Arial', 16, 'black');
    } else if (checkpoint === 1) {
      CanvasRenderer.writeText(canvas, 'Probeer voorzichtig te zijn, hij staat nogal beken om je emotionele schade te leveren met zijn creatieve woord keuzes!!', (this.image.width / 2), (canvas.height - this.image.height) + (1 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, 'Het speelplein is naar links en dan naar buiten. Succes!!!!', (this.image.width / 2), (canvas.height - this.image.height) + (2 * 35), 'center', 'Arial', 16, 'black');
    } else if (checkpoint === 2) {
      CanvasRenderer.writeText(canvas, 'Baasje?! Je.. je... hebt hem verslagen, wie had dat nou verwacht.', (this.image.width / 2), (canvas.height - this.image.height) + (1 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, 'EN JE HEBT HET ANTIVIRUS?! Ik wist dat ik op jouw kon rekenen Baasje.', (this.image.width / 2), (canvas.height - this.image.height) + (2 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, 'Terwijl ik dit antivirus download heb ik nog een klusje voor jouw.', (this.image.width / 2), (canvas.height - this.image.height) + (3 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "Er is namelijk een rare ouwe kerel in de school gezien die zichzelf de 'IJs Koning' noemt.", (this.image.width / 2), (canvas.height - this.image.height) + (4 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "Hij lokt alle kleine kindjes naar de wc's met zijn 'magie' truckjes. Het is van groot belang dat we hem stoppen", (this.image.width / 2), (canvas.height - this.image.height) + (5 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, 'voordat hij erge schade aan brengt, kan ik op jouw rekenen', (this.image.width / 2), (canvas.height - this.image.height) + (6 * 35), 'center', 'Arial', 16, 'black');
    } else if (checkpoint === 3) {
      CanvasRenderer.writeText(canvas, "Hij zal vast niet voor niets de 'IJs' koning heten?", (this.image.width / 2), (canvas.height - this.image.height) + (1 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "De wc's zijn naar rechts toe, pas op he!!", (this.image.width / 2), (canvas.height - this.image.height) + (2 * 35), 'center', 'Arial', 16, 'black');
    } else if (checkpoint === 4) {
      CanvasRenderer.writeText(canvas, 'Heb je hem verslagen? JAAA wow ik wist dat je sterk was Baasje maar zo sterk...', (this.image.width / 2), (canvas.height - this.image.height) + (1 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, 'je hebt me aardig verrast baasje, maar diep van binnen wist ik dat ik op jouw kon rekenen.', (this.image.width / 2), (canvas.height - this.image.height) + (2 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, 'Nu de database weer online is ben ik ergens achter gekomen, de directeur zit hier achter!!', (this.image.width / 2), (canvas.height - this.image.height) + (3 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, 'Hij heeft allemaal virussen geupload, zodat wij ons werk niet konden doen en hij ons kon ontslaan!', (this.image.width / 2), (canvas.height - this.image.height) + (4 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, 'Dit is niet acceptabel, we moeten hem stoppen, en met we bedoel ik natuurlijk jij!', (this.image.width / 2), (canvas.height - this.image.height) + (5 * 35), 'center', 'Arial', 16, 'black');
    } else if (checkpoint === 5) {
      CanvasRenderer.writeText(canvas, 'De directeur zit in zijn kantoor links van hier.', (this.image.width / 2), (canvas.height - this.image.height) + (1 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, 'Hij is sterk, maar dit moet voor jouw een eitje zijn.', (this.image.width / 2), (canvas.height - this.image.height) + (2 * 35), 'center', 'Arial', 16, 'black');
    } else if (checkpoint === 6) {
      CanvasRenderer.writeText(canvas, 'Wat, zijn deur zit op slot?!', (this.image.width / 2), (canvas.height - this.image.height) + (1 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, 'Er moet ergens een reserve sleutel zijn, misschien heeft een van de andere docenten er een?', (this.image.width / 2), (canvas.height - this.image.height) + (2 * 35), 'center', 'Arial', 16, 'black');
    } else if (checkpoint === 7) {
      CanvasRenderer.writeText(canvas, 'De docent wil niet met je praten?!', (this.image.width / 2), (canvas.height - this.image.height) + (1 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, 'Ik heb die gast nooit gemogen, maar ik kan niet van mijn computer weg (deze game is echt peak)', (this.image.width / 2), (canvas.height - this.image.height) + (2 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, 'Ah, ik heb een idee, ik heb onlangs van geleerd wat een vpn is.', (this.image.width / 2), (canvas.height - this.image.height) + (4 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, 'Blijkbaar kan het je identiteit verbergen, en ik weet zeker dat er ergens een op school is.', (this.image.width / 2), (canvas.height - this.image.height) + (5 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, 'Misschien weet die nerd die altijd in de bibliotheek rondhangt hier meer van af?', (this.image.width / 2), (canvas.height - this.image.height) + (6 * 35), 'center', 'Arial', 16, 'black');
    } else if (checkpoint === 8) {
      CanvasRenderer.writeText(canvas, 'De bibliotheek is letterlijk tegenover dit lokaal Baasje, wist je dat niet?', (this.image.width / 2), (canvas.height - this.image.height) + (1 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, 'Het is een nerd, die zal jouw zeker meteen die vpn geven', (this.image.width / 2), (canvas.height - this.image.height) + (2 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, 'en anders zal hij vast niet al te sterk zijn, ik bedoel het is een NERD toch!!', (this.image.width / 2), (canvas.height - this.image.height) + (3 * 35), 'center', 'Arial', 16, 'black');
    } else if (checkpoint === 9) {
      CanvasRenderer.writeText(canvas, 'Oké nu je de vpn hebt kan je meteen met de andere docent gaan praten.', (this.image.width / 2), (canvas.height - this.image.height) + (1 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, 'De vpn zou je identiteit moeten verbergen.', (this.image.width / 2), (canvas.height - this.image.height) + (2 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, 'Hopelijk valt hij voor onze list en geeft hij ons die sleutel.', (this.image.width / 2), (canvas.height - this.image.height) + (3 * 35), 'center', 'Arial', 16, 'black');
    } else if (checkpoint === 10) {
      CanvasRenderer.writeText(canvas, 'De sleutel ligt in het bureau van zijn lokaal.', (this.image.width / 2), (canvas.height - this.image.height) + (1 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, 'Dat lokaal is helemaal naar rechts, als je tegen een ontzichtbare muur aanloopt ben je er.', (this.image.width / 2), (canvas.height - this.image.height) + (2 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, 'Waarom we een ontzichtbare muur in de school hebben? Dit is geen tijd voor vragen Baasje!!', (this.image.width / 2), (canvas.height - this.image.height) + (4 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, 'Schiet op voordat de directeur te krachtig wordt!!', (this.image.width / 2), (canvas.height - this.image.height) + (5 * 35), 'center', 'Arial', 16, 'black');
    } else if (checkpoint === 11) {
      CanvasRenderer.writeText(canvas, 'Je hebt de sleutel, geweldig Baasje, we zijn zo dicht bij de overwinning.', (this.image.width / 2), (canvas.height - this.image.height) + (1 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, 'Nu kan niks ons meer tegenhouden, en met ons bedoel ik natuurlijk weer jou!', (this.image.width / 2), (canvas.height - this.image.height) + (2 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, 'De directeur zal de sterkste vijand zijn die je ooit hebt gezien, veel succes Baasje!', (this.image.width / 2), (canvas.height - this.image.height) + (3 * 35), 'center', 'Arial', 16, 'black');
    } else if (checkpoint === 12) {
      CanvasRenderer.writeText(canvas, 'Je hebt de deur al geopend?!', (this.image.width / 2), (canvas.height - this.image.height) + (1 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, 'WAAROM BEN JE DAN WEER HIER TERUG?!!', (this.image.width / 2), (canvas.height - this.image.height) + (2 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, 'Elke seconde dat we hier staan te praten is een nieuw slachtoffer!', (this.image.width / 2), (canvas.height - this.image.height) + (3 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, 'Ga doen wat je hebt beloofd en versla de directeur!!', (this.image.width / 2), (canvas.height - this.image.height) + (4 * 35), 'center', 'Arial', 16, 'black');
    }
    CanvasRenderer.writeText(canvas, 'Druk op Spatie om verder te gaan', 1170, (canvas.height - this.image.height) + 235, 'right', 'Arial', 14, 'red');
  }

  /**
   * gives hints or the quest for the apropriate checkpoint in english
   * @param canvas the screne
   * @param checkpoint the state of the game
   */
  public teacherTalkEnglish(canvas: HTMLCanvasElement, checkpoint: number): void {
    this.staticBob = CanvasRenderer.loadNewImage('./assets/TalkSceneBob.png');
    if (checkpoint === 0) {
      CanvasRenderer.writeText(canvas, "Heee Baasje, how is it going? Hopefully good because I've got a request for you!", (this.image.width / 2), (canvas.height - this.image.height) + (1 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "There are strange things happening at Hogeschool Zoutelande. The code has glitches, programms are disapearing", (this.image.width / 2), (canvas.height - this.image.height) + (2 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "and we are constantly getting doxed. We need an antivirus to get the system online again!", (this.image.width / 2), (canvas.height - this.image.height) + (3 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "I think I know who has one, ByteBoi, the bully of this school.", (this.image.width / 2), (canvas.height - this.image.height) + (4 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "I want you to go and get it. Go to the garden where ByteBoi normally hangs out.", (this.image.width / 2), (canvas.height - this.image.height) + (5 * 35), 'center', 'Arial', 16, 'black');
    } else if (checkpoint === 1) {
      CanvasRenderer.writeText(canvas, "Try to be carefull, he is known for causing severe emotional damage with his creative choice of words!!", (this.image.width / 2), (canvas.height - this.image.height) + (1 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "The garden is to the left and then outside. Best of luck!!!!", (this.image.width / 2), (canvas.height - this.image.height) + (2 * 35), 'center', 'Arial', 16, 'black');
    } else if (checkpoint === 2) {
      CanvasRenderer.writeText(canvas, "Baasje?! You.. you... defeated him, who could have seen that coming.", (this.image.width / 2), (canvas.height - this.image.height) + (1 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "AND YOU'VE GOT THE ANTIVIRUS?! I knew that I could count on you Baasje.", (this.image.width / 2), (canvas.height - this.image.height) + (2 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "While I download this antivirus I have got another request for you.", (this.image.width / 2), (canvas.height - this.image.height) + (3 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "A creepy old man has been spotted around the school calling himself the 'Ice King'.", (this.image.width / 2), (canvas.height - this.image.height) + (4 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "He lures all the young children to the toilets with his 'magic' tricks. It is very important that we stop him", (this.image.width / 2), (canvas.height - this.image.height) + (5 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "before her hurts somebody, can I count on you", (this.image.width / 2), (canvas.height - this.image.height) + (6 * 35), 'center', 'Arial', 16, 'black');
    } else if (checkpoint === 3) {
      CanvasRenderer.writeText(canvas, "He's probably called the 'Ice' king for a reason right?", (this.image.width / 2), (canvas.height - this.image.height) + (1 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "The toilets are to the right, be carefull!!", (this.image.width / 2), (canvas.height - this.image.height) + (2 * 35), 'center', 'Arial', 16, 'black');
    } else if (checkpoint === 4) {
      CanvasRenderer.writeText(canvas, "Did you defeat him? YESSS wow I knew you were strong Baasje but this strong...", (this.image.width / 2), (canvas.height - this.image.height) + (1 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "you have surprises me Baasje, but deep down I knew that I could count on you.", (this.image.width / 2), (canvas.height - this.image.height) + (2 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "Now that the database is online again I have found something out, the principal did all of this!!", (this.image.width / 2), (canvas.height - this.image.height) + (3 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "He is the one that uploaded the viruses, so that we coudn't get any work done and we would be fired!", (this.image.width / 2), (canvas.height - this.image.height) + (4 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "This is unacceptable, we need to stop him, and with we I of course mean you!", (this.image.width / 2), (canvas.height - this.image.height) + (5 * 35), 'center', 'Arial', 16, 'black');
    } else if (checkpoint === 5) {
      CanvasRenderer.writeText(canvas, "The principal is in his office to the left of here.", (this.image.width / 2), (canvas.height - this.image.height) + (1 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "He is strong, but this should be a piece of cake for you.", (this.image.width / 2), (canvas.height - this.image.height) + (2 * 35), 'center', 'Arial', 16, 'black');
    } else if (checkpoint === 6) {
      CanvasRenderer.writeText(canvas, "What, his door is locked?!", (this.image.width / 2), (canvas.height - this.image.height) + (1 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "There has to be a spare key somewhere around here, maybe another teacher has one?", (this.image.width / 2), (canvas.height - this.image.height) + (2 * 35), 'center', 'Arial', 16, 'black');
    } else if (checkpoint === 7) {
      CanvasRenderer.writeText(canvas, "The teacher doesn't want to talk to you?!", (this.image.width / 2), (canvas.height - this.image.height) + (1 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "I never liked that guy, but I can't get away from my computer (this game is peak)", (this.image.width / 2), (canvas.height - this.image.height) + (2 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "Ah, I've got an idea, recently I have learned about vpn's.", (this.image.width / 2), (canvas.height - this.image.height) + (4 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "Aparantly it can hide your identity, and I am certain that there is one at this school.", (this.image.width / 2), (canvas.height - this.image.height) + (5 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "Maybe that nerd that is always in the library knows more about it?", (this.image.width / 2), (canvas.height - this.image.height) + (6 * 35), 'center', 'Arial', 16, 'black');
    } else if (checkpoint === 8) {
      CanvasRenderer.writeText(canvas, "The library is literaly in front of this classroom, how did you not know that?", (this.image.width / 2), (canvas.height - this.image.height) + (1 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "He's a nerd, he'll probably just give you the vpn", (this.image.width / 2), (canvas.height - this.image.height) + (2 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "and if he doesn't, he's a NERD how strong can he really be!!", (this.image.width / 2), (canvas.height - this.image.height) + (3 * 35), 'center', 'Arial', 16, 'black');
    } else if (checkpoint === 9) {
      CanvasRenderer.writeText(canvas, "Okay now that you've got the vpn you can go and talk to the other teacher.", (this.image.width / 2), (canvas.height - this.image.height) + (1 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "The vpn should hide your identity.", (this.image.width / 2), (canvas.height - this.image.height) + (2 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "Hopefully he'll fall for our trick and give us that key.", (this.image.width / 2), (canvas.height - this.image.height) + (3 * 35), 'center', 'Arial', 16, 'black');
    } else if (checkpoint === 10) {
      CanvasRenderer.writeText(canvas, "Het put the key in the desk in his classroom.", (this.image.width / 2), (canvas.height - this.image.height) + (1 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "That is the rightmost classroom, if you walk against an invisible wall you're there.", (this.image.width / 2), (canvas.height - this.image.height) + (2 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "Why we have an invisible wall in this school? This is no time for questions Baasje!!", (this.image.width / 2), (canvas.height - this.image.height) + (4 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "Make haste before the principal gets too powerfull!!", (this.image.width / 2), (canvas.height - this.image.height) + (5 * 35), 'center', 'Arial', 16, 'black');
    } else if (checkpoint === 11) {
      CanvasRenderer.writeText(canvas, "You got the key, amazing Baasje, we are this close to winning.", (this.image.width / 2), (canvas.height - this.image.height) + (1 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "Now nothing is standing in our way, and with our of course i mean your!", (this.image.width / 2), (canvas.height - this.image.height) + (2 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "The principal will be the strongest enemy that you have ever seen, best of luck Baasje!", (this.image.width / 2), (canvas.height - this.image.height) + (3 * 35), 'center', 'Arial', 16, 'black');
    } else if (checkpoint === 12) {
      CanvasRenderer.writeText(canvas, "You have already opened the door?!", (this.image.width / 2), (canvas.height - this.image.height) + (1 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "WHY DID YOU COME BACK HERE THEN?!!", (this.image.width / 2), (canvas.height - this.image.height) + (2 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "Every second we spend here talking is another victim!", (this.image.width / 2), (canvas.height - this.image.height) + (3 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "Go do what you promised and defeat the principal!!", (this.image.width / 2), (canvas.height - this.image.height) + (4 * 35), 'center', 'Arial', 16, 'black');
    }
    CanvasRenderer.writeText(canvas, 'Press Space To Continue!!', 1170, (canvas.height - this.image.height) + 235, 'right', 'Arial', 14, 'red');
  }

  /**
   * this pops up when you talk to the female teacher in the faculty lounge in english
   * @param canvas the screne
   * @param checkpoint the instance of the game
   */
  public femaleTeacherEnglish(canvas: HTMLCanvasElement, checkpoint: number): void {
    this.staticBob = CanvasRenderer.loadNewImage('./assets/TiredTeacher.png');
    if (checkpoint === 9) {
      CanvasRenderer.writeText(canvas, "Oh, hello mister Baasje, I didn't see you there", (this.image.width / 2), (canvas.height - this.image.height) + (1 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "How to get into the principals office", (this.image.width / 2), (canvas.height - this.image.height) + (3 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "I have a spare key in my desk in the furthest classroom to the right", (this.image.width / 2), (canvas.height - this.image.height) + (4 * 35), 'center', 'Arial', 16, 'black');
    } else if (checkpoint === 10) {
      CanvasRenderer.writeText(canvas, "You can go and get the key yourself.", (this.image.width / 2), (canvas.height - this.image.height) + (1 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "I am way too tired to do it myself", (this.image.width / 2), (canvas.height - this.image.height) + (2 * 35), 'center', 'Arial', 16, 'black');
    } else if (checkpoint === 11 || checkpoint === 12) {
      CanvasRenderer.writeText(canvas, "Ah, I see you have found my key!", (this.image.width / 2), (canvas.height - this.image.height) + (1 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "Why don't you hold onto it", (this.image.width / 2), (canvas.height - this.image.height) + (2 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "That way I don't have to worry about it", (this.image.width / 2), (canvas.height - this.image.height) + (3 * 35), 'center', 'Arial', 16, 'black');
    } else {
      CanvasRenderer.writeText(canvas, "Children are not supposed to be in the Faculty Lounge!", (this.image.width / 2), (canvas.height - this.image.height) + (1 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "I'm not paid enough to deal with this", (this.image.width / 2), (canvas.height - this.image.height) + (2 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "Go bother someone else brat!!", (this.image.width / 2), (canvas.height - this.image.height) + (3 * 35), 'center', 'Arial', 16, 'black');
    }
  }

  /**
   * this pops up when you talk to the female teacher in the faculty lounge in dutch
   * @param canvas the screne
   * @param checkpoint the instance of the game
   */
  public femaleTeacherDutch(canvas: HTMLCanvasElement, checkpoint: number): void {
    this.staticBob = CanvasRenderer.loadNewImage('./assets/TiredTeacher.png');
    if (checkpoint === 9) {
      CanvasRenderer.writeText(canvas, "O, hallo meneer Baasje, ik had je niet gezien", (this.image.width / 2), (canvas.height - this.image.height) + (1 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "Hoe je in de directeur zijn kantoor kan komen", (this.image.width / 2), (canvas.height - this.image.height) + (3 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "Ik heb een reserve sleutel in mijn bureau in het meest rechtse lokaal. ", (this.image.width / 2), (canvas.height - this.image.height) + (4 * 35), 'center', 'Arial', 16, 'black');
    } else if (checkpoint === 10) {
      CanvasRenderer.writeText(canvas, "Je kan zelf de sleutel pakken als je wilt.", (this.image.width / 2), (canvas.height - this.image.height) + (1 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "Ik ben veel te moe om het zelf te doen", (this.image.width / 2), (canvas.height - this.image.height) + (2 * 35), 'center', 'Arial', 16, 'black');
    } else if (checkpoint === 11 || checkpoint === 12) {
      CanvasRenderer.writeText(canvas, "Ah, Ik zie dat je mijn sleutel hebt gevonden!", (this.image.width / 2), (canvas.height - this.image.height) + (1 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "Waarom houd jij hem niet bij je,", (this.image.width / 2), (canvas.height - this.image.height) + (2 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "Dan hoef ik me er niet meer mee te bemoeien.", (this.image.width / 2), (canvas.height - this.image.height) + (3 * 35), 'center', 'Arial', 16, 'black');
    } else {
      CanvasRenderer.writeText(canvas, "Kinderen horen helemaal niet in de Leraren Kamer te zijn!", (this.image.width / 2), (canvas.height - this.image.height) + (1 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "Ik word hier niet genoeg voor betaald", (this.image.width / 2), (canvas.height - this.image.height) + (2 * 35), 'center', 'Arial', 16, 'black');
      CanvasRenderer.writeText(canvas, "Val mij niet lastig snotjog!!", (this.image.width / 2), (canvas.height - this.image.height) + (3 * 35), 'center', 'Arial', 16, 'black');
    }
  }

  /**
   * draws the dialogue box and writes the dialogue
   * @param canvas the screen
   */
  public render(canvas: HTMLCanvasElement): void {
    // eslint-disable max-len
    CanvasRenderer.drawImage(canvas, this.image, 0, (canvas.height - this.image.height));
    CanvasRenderer.drawImage(canvas, this.staticBaasje, 1245, (canvas.height - (this.image.height / 2) - (this.staticBaasje.height / 2)));
    CanvasRenderer.drawImage(canvas, this.staticBob, 205, (canvas.height - (this.image.height / 2) - (this.staticBob.height / 2)));
    // eslint-enable max-len
  }
}
