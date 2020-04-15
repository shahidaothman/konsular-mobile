import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HeaderImagePage } from './header-image.page';
import { ParallaxHeaderDirective } from 'src/app/directives/parallax-header.directive';

const routes: Routes = [
  {
    path: '',
    component: HeaderImagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HeaderImagePage, ParallaxHeaderDirective]
})
export class HeaderImagePageModule { }
