import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UnauthorizedGuard } from './guards/unauthorized/unauthorized.guard';
import { AuthorizedGuard } from './guards/authorized/authorized.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    canActivate: [UnauthorizedGuard],
    canLoad: [UnauthorizedGuard],
    canActivateChild: [UnauthorizedGuard],
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'login',
    canActivate: [UnauthorizedGuard],
    canLoad: [UnauthorizedGuard],
    canActivateChild: [UnauthorizedGuard],
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    canActivate: [UnauthorizedGuard],
    canLoad: [UnauthorizedGuard],
    canActivateChild: [UnauthorizedGuard],
    loadChildren: () =>
      import('./pages/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'forgot-password',
    canActivate: [UnauthorizedGuard],
    canLoad: [UnauthorizedGuard],
    canActivateChild: [UnauthorizedGuard],
    loadChildren: () =>
      import('./pages/forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordPageModule
      ),
  },
  {
    path: 'tabs',
    canActivate: [AuthorizedGuard],
    canLoad: [AuthorizedGuard],
    canActivateChild: [AuthorizedGuard],
    loadChildren: () =>
      import('./pages/tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'location',
    loadChildren: () =>
      import('./pages/location/location.module').then(
        (m) => m.LocationPageModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact.module').then((m) => m.ContactPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
