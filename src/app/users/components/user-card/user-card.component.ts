import { Component, OnInit, Input } from '@angular/core';
import { IUser } from '../../models/user.model';

@Component({
  selector: 'sv-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user: IUser;

  constructor() {}

  ngOnInit() {}
}
