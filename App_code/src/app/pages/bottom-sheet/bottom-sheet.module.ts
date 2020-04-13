import { FivIfModule } from './../../../../projects/core/src/lib/if-platform/if-platform.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BottomSheetPage } from './bottom-sheet.page';
import { FivBottomSheetModule, FivIconModule } from '@fivethree/core';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: BottomSheetPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FivBottomSheetModule,
    FivIconModule,
    FivIfModule,
    ComponentsModule
  ],
  declarations: [BottomSheetPage]
})
export class BottomSheetPageModule { }
