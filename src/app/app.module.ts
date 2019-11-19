import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { API_CONFIG_TOKEN, MOCK_CONFIG, API_CONFIG } from './core/config/api.config';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [{ provide: API_CONFIG_TOKEN, useValue: environment.production ? API_CONFIG : MOCK_CONFIG }],
  bootstrap: [AppComponent]
})
export class AppModule {}
