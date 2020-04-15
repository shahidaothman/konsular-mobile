import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CkEditorPage } from './ck-editor.page';


//Add Module Library here
import { CKEditorModule } from 'ng2-ckeditor';

const routes: Routes = [
  {
    path: '',
    component: CkEditorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    CKEditorModule
  ],
  declarations: [CkEditorPage]
})
export class CkEditorPageModule { }
