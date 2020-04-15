

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AppIntroPage } from './app-intro.page';
import { FivFeatureDiscoveryModule, FivIconModule } from '@fivethree/core';

const routes: Routes = [
  {
    path: '',
    component: AppIntroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FivFeatureDiscoveryModule,
    FivIconModule
  ],
  declarations: [AppIntroPage]
})
export class AppIntroPageModule { }
