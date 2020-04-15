import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormsExample3Page } from './forms-example3.page';

//Rating Module
import { IonicRatingModule } from "ionic4-rating";
const routes: Routes = [
  {
    path: '',
    component: FormsExample3Page
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
  declarations: [FormsExample3Page]
})
export class FormsExample3PageModule { }
