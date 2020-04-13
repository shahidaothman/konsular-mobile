 
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-miscellaneous',
  templateUrl: './miscellaneous.page.html',
  styleUrls: ['./miscellaneous.page.scss'],
})
export class MiscellaneousPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  gridExample() {
    console.log('grids Example')
    this.router.navigate(['coming']);
  }
  empty() {
    this.router.navigate(['coming']);
  }
  chatScreen() {
    console.log('chatscreen');
    this.router.navigate(['chats']);
  }
  ckEditor() {
    console.log('ckEditor');
    this.router.navigate(['ck-editor'])
  }
  theming() {
    console.log('theming');
    this.router.navigate(['themes'])
  }
  translate() {
    console.log('translate');
    this.router.navigate(['translate'])
  }
  calendar() {
    console.log('calendars');
    this.router.navigate(['calendars'])
  }
  signaturePad() {
    console.log('singature pad');
    this.router.navigate(['signature-pad'])
  }
}
