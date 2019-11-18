import { Component } from '@angular/core';
import { NavigationService } from './core/services/navigation.service';

@Component({
  selector: 'sv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services';
  nav = this.navigationService.getRoutes();
  constructor(private navigationService: NavigationService) {}
}
