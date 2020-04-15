import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NearConsularMapPage } from './near-consular-map.page';

const routes: Routes = [
  {
    path: '',
    component: NearConsularMapPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NearConsularMapPage]
})
export class NearConsularMapPageModule {}
