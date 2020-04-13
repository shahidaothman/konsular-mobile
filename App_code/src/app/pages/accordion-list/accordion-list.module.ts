
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AccordionListPage } from './accordion-list.page';
import { ComponentsModule } from "../../components/components.module";
const routes: Routes = [
  {
    path: '',
    component: AccordionListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AccordionListPage]
})
export class AccordionListPageModule { }
