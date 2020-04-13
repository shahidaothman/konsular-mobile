import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormsExample2Page } from './forms-example2.page';

//Rating Module
import { IonicRatingModule } from "ionic4-rating";

const routes: Routes = [
  {
    path: '',
    component: FormsExample2Page
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
  declarations: [FormsExample2Page]
})
export class FormsExample2PageModule { }
