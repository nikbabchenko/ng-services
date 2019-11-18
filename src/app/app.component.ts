import { Component } from '@angular/core';
import { NavigationService } from './core/services/navigation.service';

export const getRoutes = () => {
  return [{ title: 'AppComponent Routes', link: ['not home'] }];
};

@Component({
  selector: 'sv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: NavigationService, useValue: { getRoutes } }]
})
export class AppComponent {
  title = 'services';
  nav = this.navigationService.getRoutes();
  constructor(private navigationService: NavigationService) {}
}
