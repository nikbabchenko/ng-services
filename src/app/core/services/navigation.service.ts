import { Injectable } from '@angular/core';
import { INavRoute } from '../models/nav-route.interface';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor() {}

  getRoutes(): INavRoute[] {
    return [
      {
        title: 'Home',
        link: [''],
        options: { exact: true }
      },
      {
        title: 'Users',
        link: ['users']
      },
      {
        title: 'Contacts',
        link: ['contacts'],
        options: { exact: true }
      },
      {
        title: 'Contacts Info',
        link: ['contacts/info']
      }
    ];
  }
}
