import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceExamplesRoutingModule } from './service-examples-routing.module';
import { ServicesComponent } from './pages/services/services.component';

@NgModule({
  declarations: [ServicesComponent],
  imports: [CommonModule, ServiceExamplesRoutingModule]
})
export class ServiceExamplesModule {}
