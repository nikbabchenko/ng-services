import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactListComponent } from './pages/contact-list.component';
import { ContactInfoComponent } from './pages/contact-info.component';

@NgModule({
  declarations: [ContactListComponent, ContactInfoComponent],
  imports: [CommonModule, ContactsRoutingModule]
})
export class ContactsModule {}
