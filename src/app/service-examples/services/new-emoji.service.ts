import { Injectable } from '@angular/core';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Injectable()
export class NewEmojiSevice {
  constructor(private navService: NavigationService) {
    console.log('--NavService routes are', this.navService.getRoutes());
  }

  private emojies = {
    smile: '😺',
    kiss: '💋',
    winking: '😸'
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
