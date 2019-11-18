import { Component, OnInit, SkipSelf, Host } from '@angular/core';
import { NavigationService } from 'src/app/core/services/navigation.service';

export const getRoutes = () => {
  return [{ title: 'Header Component Routes', link: ['not home'] }];
};

@Component({
  selector: 'sv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [[{ provide: NavigationService, useValue: { getRoutes } }]]
})
export class HeaderComponent implements OnInit {
  constructor(@SkipSelf() public nav: NavigationService) {}

  ngOnInit() {}
}
