import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VideoBackgroudPage } from './video-backgroud.page';

const routes: Routes = [
  {
    path: '',
    component: VideoBackgroudPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VideoBackgroudPage]
})
export class VideoBackgroudPageModule {}
