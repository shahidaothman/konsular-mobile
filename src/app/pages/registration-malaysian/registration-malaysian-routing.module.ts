import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationMalaysianPage } from './registration-malaysian.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrationMalaysianPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrationMalaysianPageRoutingModule {}
