 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FireimageCreatePage } from './fireimage-create.page';

const routes: Routes = [
  {
    path: '',
    component: FireimageCreatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FireimageCreatePage]
})
export class FireimageCreatePageModule { }
