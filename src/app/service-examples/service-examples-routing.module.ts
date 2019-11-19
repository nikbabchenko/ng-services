import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './pages/services/services.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceExamplesRoutingModule {}
