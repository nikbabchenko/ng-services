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
        link: ['']
      }
    ];
  }
}
