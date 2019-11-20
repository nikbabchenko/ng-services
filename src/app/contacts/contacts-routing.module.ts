import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './pages/contact-list.component';
import { ContactInfoComponent } from './pages/contact-info.component';

const routes: Routes = [
  {
    path: '',
    component: ContactListComponent,
    pathMatch: 'full'
  },
  {
    path: 'info',
    component: ContactInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule {}
