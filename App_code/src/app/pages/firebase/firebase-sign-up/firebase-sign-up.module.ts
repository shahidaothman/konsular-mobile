
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FirebaseSignUpPage } from './firebase-sign-up.page';

const routes: Routes = [
  {
    path: '',
    component: FirebaseSignUpPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FirebaseSignUpPage]
})
export class FirebaseSignUpPageModule { }
