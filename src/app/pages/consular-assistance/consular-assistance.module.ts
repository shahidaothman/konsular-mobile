import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsularAssistancePageRoutingModule } from './consular-assistance-routing.module';

import { ConsularAssistancePage } from './consular-assistance.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsularAssistancePageRoutingModule,
  ],
  declarations: [ConsularAssistancePage],
})
export class ConsularAssistancePageModule {}
