import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { INavRoute } from 'src/app/core/models/nav-route.interface';

@Component({
  selector: 'sv-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit {
  @Input()
  routes: INavRoute[] = [];

  constructor() {}

  ngOnInit() {}
}
