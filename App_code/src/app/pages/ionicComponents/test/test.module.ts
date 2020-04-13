import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TestPage } from './test.page';

const routes: Routes = [
  {
    path: '',
    component: TestPage,
    children: [
      {
        path: 'abroad',
        loadChildren: '../abroad/abroad.module#AbroadPageModule'
      },
      {
        path: 'contact',
        loadChildren: '../home/home.module#HomePageModule'
      },
      {
        path: 'register',
        loadChildren: '../profile-user/profile-user.module#ProfileUserPageModule'
      }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TestPage]
})
export class TestPageModule { }
