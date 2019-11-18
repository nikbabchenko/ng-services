import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/user.service';
import { IUser } from '../../models/user.model';

@Component({
  selector: 'sv-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: IUser[];
  constructor(private userService: UsersService) {
    this.users = this.userService.getUsers();
  }

  ngOnInit() {}
}
