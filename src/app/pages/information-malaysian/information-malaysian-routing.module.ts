import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformationMalaysianPage } from './information-malaysian.page';

const routes: Routes = [
  {
    path: '',
    component: InformationMalaysianPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformationMalaysianPageRoutingModule {}
