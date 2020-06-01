import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'menu',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../menu/menu.module').then((m) => m.MenuPageModule),
          },
          {
            path: 'good-conduct',
            loadChildren: () =>
              import('../good-conduct/good-conduct.module').then(
                (m) => m.GoodConductPageModule
              ),
          },
          {
            path: 'registration-malaysian',
            loadChildren: () =>
              import(
                '../registration-malaysian/registration-malaysian.module'
              ).then((m) => m.RegistrationMalaysianPageModule),
          },
          {
            path: 'consular-assistance',
            loadChildren: () =>
              import('../consular-assistance/consular-assistance.module').then(
                (m) => m.ConsularAssistancePageModule
              ),
          },
          {
            path: 'profile',
            loadChildren: () =>
              import('../profile/profile.module').then(
                (m) => m.ProfilePageModule
              ),
          },
          {
            path: 'information-malaysian',
            loadChildren: () =>
              import(
                '../information-malaysian/information-malaysian.module'
              ).then((m) => m.InformationMalaysianPageModule),
          },
          {
            path: 'user-detail',
            loadChildren: () =>
              import('../user-detail/user-detail.module').then(
                (m) => m.UserDetailPageModule
              ),
          },
        ],
      },
      {
        path: 'location',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../location/location.module').then(
                (m) => m.LocationPageModule
              ),
          },
        ],
      },
      {
        path: 'contact',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../contact/contact.module').then(
                (m) => m.ContactPageModule
              ),
          },
        ],
      },
      {
        path: '',
        redirectTo: '/tabs/menu',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/menu',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
