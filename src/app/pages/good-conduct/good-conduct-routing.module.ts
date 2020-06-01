import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GoodConductPage } from './good-conduct.page';

const routes: Routes = [
  {
    path: '',
    component: GoodConductPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoodConductPageRoutingModule {}
