import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';

const declarations = [HeaderComponent, NavComponent];

@NgModule({
  declarations,
  imports: [CommonModule, RouterModule],
  exports: declarations
})
export class SharedModule {}
