import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './pages/users/users.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [UsersComponent, UserCardComponent, UserListComponent],
  imports: [CommonModule, UsersRoutingModule]
})
export class UsersModule {}
