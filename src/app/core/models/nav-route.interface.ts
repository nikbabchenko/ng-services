import { RouterLink } from '@angular/router';

export interface INavRoute {
  title: string;
  link: any[];
  options?: { exact: boolean };
}
