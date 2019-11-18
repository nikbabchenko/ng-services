import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';

const declarations = [HeaderComponent, NavComponent];
const exports = [...declarations];

@NgModule({
  declarations,
  imports: [CommonModule, RouterModule],
  exports
})
export class SharedModule {}
