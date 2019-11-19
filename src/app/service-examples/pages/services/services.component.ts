import { Component, OnInit } from '@angular/core';
import { EmojiService } from '../../services/emoji.service';

@Component({
  selector: 'sv-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  constructor(public emojiService: EmojiService) {}

  ngOnInit() {
    console.log('--this', this.emojiService.getFullList());
  }
}
