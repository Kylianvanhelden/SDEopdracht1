export default class QuestObjective {
  private questsDutch: string[] = [];

  private secondLineDutch: string[] = [];

  private questsEnglish: string[] = [];

  private secondLineEnglish: string[] = [];

  public constructor() {
    this.questsEnglish.push('Talk to Bob (Teacher)');
    this.questsEnglish.push('Find an Antivirus');
    this.questsEnglish.push('Give antivirus to Bob');
    this.questsEnglish.push('Defeat the Ice King');
    this.questsEnglish.push('Talk to Bob again');
    this.questsEnglish.push('Confront the Principle');
    this.questsEnglish.push('Find a way into');
    this.questsEnglish.push('Maybe Bob knows');
    this.questsEnglish.push('Talk to the nerd');
    this.questsEnglish.push('Talk to the teacher');
    this.questsEnglish.push('Get the key to');
    this.questsEnglish.push('Open the office door');
    this.questsEnglish.push('Finaly fight the principle');

    // eslint-disable-next-line @typescript-eslint/quotes
    this.secondLineEnglish.push("the principle's office");
    this.secondLineEnglish.push('and end this mess!');
    this.secondLineEnglish.push('something to do');

    this.questsDutch.push('Praat met Bob (Leraar)');
    this.questsDutch.push('Vind een antivirus');
    this.questsDutch.push('Geef het antivirus aan bob');
    this.questsDutch.push('Versla de IJs Koning');
    this.questsDutch.push('Praat nogmaals met Bob');
    this.questsDutch.push('Versla de Directeur');
    this.questsDutch.push('Zoek een weg naar');
    this.questsDutch.push('Misschien weet bob iets');
    this.questsDutch.push('Praat met de nerd');
    this.questsDutch.push('Praat met de docent');
    this.questsDutch.push('Krijg de sleutel van');
    this.questsDutch.push('Open de kantoor deur');
    this.questsDutch.push('Versla de directeur');

    this.secondLineDutch.push('het kantoor');
    this.secondLineDutch.push('en eindig deze zooi!');
  }

  public getQuestDutch(checkpoint: number): string {
    return this.questsDutch[checkpoint];
  }

  public getQuestEnglish(checkpoint: number): string {
    return this.questsEnglish[checkpoint];
  }

  public getSecondLineDutch(checkpoint: number): string {
    if (checkpoint === 12) {
      return this.secondLineDutch[1];
    } else {
      return this.secondLineDutch[0];
    }
  }

  public getSecondLineEnglish(checkpoint: number): string {
    if (checkpoint === 12) {
      return this.secondLineEnglish[1];
    } else if (checkpoint === 7) {
      return this.secondLineEnglish[2];
    } else {
      return this.secondLineEnglish[0];
    }
  }
}
