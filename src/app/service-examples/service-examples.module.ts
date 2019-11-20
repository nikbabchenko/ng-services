import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceExamplesRoutingModule } from './service-examples-routing.module';
import { ServicesComponent } from './pages/services/services.component';
import { EmojiService } from './services/emoji.service';
import { NewEmojiSevice } from './services/new-emoji.service';

@NgModule({
  declarations: [ServicesComponent],
  providers: [NewEmojiSevice, { provide: EmojiService, useExisting: NewEmojiSevice }],
  imports: [CommonModule, ServiceExamplesRoutingModule]
})
export class ServiceExamplesModule {}
