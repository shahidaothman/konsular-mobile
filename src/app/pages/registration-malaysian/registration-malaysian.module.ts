import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationMalaysianPageRoutingModule } from './registration-malaysian-routing.module';

import { RegistrationMalaysianPage } from './registration-malaysian.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RegistrationMalaysianPageRoutingModule,
  ],
  declarations: [RegistrationMalaysianPage],
})
export class RegistrationMalaysianPageModule {}
