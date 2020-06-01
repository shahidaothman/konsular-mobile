import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsularAssistancePage } from './consular-assistance.page';

const routes: Routes = [
  {
    path: '',
    component: ConsularAssistancePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsularAssistancePageRoutingModule {}
