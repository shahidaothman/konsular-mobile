import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormsExample4Page } from './forms-example4.page';

//Rating Module
import { IonicRatingModule } from "ionic4-rating";
const routes: Routes = [
  {
    path: '',
    component: FormsExample4Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    IonicRatingModule
  ],
  declarations: [FormsExample4Page]
})
export class FormsExample4PageModule { }
