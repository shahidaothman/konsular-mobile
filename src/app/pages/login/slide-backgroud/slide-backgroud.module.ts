import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SlideBackgroudPage } from './slide-backgroud.page';

const routes: Routes = [
  {
    path: '',
    component: SlideBackgroudPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SlideBackgroudPage]
})
export class SlideBackgroudPageModule {}
