import { Injectable } from '@angular/core';

@Injectable()
export class BetterEmojiService {
  private emojies = {
    smile: '🐵',
    kiss: '🙉',
    winking: '🙊'
  };

  getFullList() {
    return Object.values(this.emojies);
  }

  getSmile() {
    return this.emojies.smile;
  }

  getKiss() {
    return this.emojies.kiss;
  }

  getWinking() {
    return this.emojies.winking;
  }
}
