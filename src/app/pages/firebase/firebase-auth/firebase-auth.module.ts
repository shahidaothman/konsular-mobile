
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FirebaseAuthPage } from './firebase-auth.page';

const routes: Routes = [
  {
    path: '',
    component: FirebaseAuthPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FirebaseAuthPage]
})
export class FirebaseAuthPageModule { }
