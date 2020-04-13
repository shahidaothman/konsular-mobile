import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HeadersPage } from './headers.page';
import { ShrinkingHeaderDirective } from 'src/app/directives/shrinking-header.directive';

const routes: Routes = [
  {
    path: '',
    component: HeadersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HeadersPage, ShrinkingHeaderDirective]
})
export class HeadersPageModule { }
