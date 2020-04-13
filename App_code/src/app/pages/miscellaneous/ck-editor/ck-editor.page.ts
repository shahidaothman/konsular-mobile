import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ck-editor',
  templateUrl: './ck-editor.page.html',
  styleUrls: ['./ck-editor.page.scss'],
})
export class CkEditorPage implements OnInit {


  //Read More for CK Editor : https://www.npmjs.com/package/ng2-ckeditor
  ckeditorContent: any = '';
  constructor() { }

  ngOnInit() {
  }
  onChange(event) {
    console.log('events', event);
  }

}
