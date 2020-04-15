import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GalleryLayout4Page } from './gallery-layout4.page';
import { FivGalleryModule, FivLoadingSpinnerModule, FivCenterModule } from '@fivethree/core';
const routes: Routes = [
  {
    path: '',
    component: GalleryLayout4Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FivGalleryModule,
    FivLoadingSpinnerModule,
    FivCenterModule
  ],
  declarations: [GalleryLayout4Page]
})
export class GalleryLayout4PageModule { }
