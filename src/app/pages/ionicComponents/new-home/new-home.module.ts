import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewHomePage } from './new-home.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home'
  },
  {
    path: '',
    component: NewHomePage,
    children: [
      {
        path: 'home',
        loadChildren: '../../home/home.module#HomePageModule'
      },
      {
        path: 'geo',
        loadChildren: '../geolocation/geolocation.module#GeolocationPageModule'
      },
      {
        path: 'profile',
        loadChildren: '../profile-user/profile-details/profile-details.module#ProfileDetailsPageModule'
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
  declarations: [NewHomePage]
})
export class NewHomePageModule { }
