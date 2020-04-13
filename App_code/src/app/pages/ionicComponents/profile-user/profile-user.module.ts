import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfileUserPage } from './profile-user.page';
import { FivStepperModule, FivExpandableModule } from '@fivethree/core';
import { ComponentsModule } from 'src/app/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FivCenterModule } from './../../../../../projects/core/src/lib/center/center.module';
import { FivRippleModule } from './../../../../../projects/core/src/lib/ripple/ripple.module';
const routes: Routes = [
  {
    path: '',
    component: ProfileUserPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FivStepperModule,
    ComponentsModule,
    FivExpandableModule,
    FivRippleModule,
    FivCenterModule,
    MbscModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  declarations: [ProfileUserPage]
})
export class ProfileUserPageModule { }
