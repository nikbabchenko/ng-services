import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceExamplesRoutingModule } from './service-examples-routing.module';
import { ServicesComponent } from './pages/services/services.component';
import { EmojiService } from './services/emoji.service';

@NgModule({
  declarations: [ServicesComponent],
  providers: [EmojiService],
  imports: [CommonModule, ServiceExamplesRoutingModule]
})
export class ServiceExamplesModule {}
