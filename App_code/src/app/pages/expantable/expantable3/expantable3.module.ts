
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FivCenterModule } from './../../../../../projects/core/src/lib/center/center.module';
import { FivRippleModule } from './../../../../../projects/core/src/lib/ripple/ripple.module';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';


import { FivExpandableModule } from '@fivethree/core';
import { Expantable3Page } from './expantable3.page';

const routes: Routes = [
  {
    path: '',
    component: Expantable3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FivExpandableModule,
    FivRippleModule,
    FivCenterModule
  ],
  declarations: [Expantable3Page]
})
export class Expantable3PageModule { }
