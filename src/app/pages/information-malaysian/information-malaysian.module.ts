import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformationMalaysianPageRoutingModule } from './information-malaysian-routing.module';

import { InformationMalaysianPage } from './information-malaysian.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformationMalaysianPageRoutingModule,
  ],
  declarations: [InformationMalaysianPage],
})
export class InformationMalaysianPageModule {}
