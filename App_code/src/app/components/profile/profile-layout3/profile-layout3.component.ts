import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-layout3',
  templateUrl: './profile-layout3.component.html',
  styleUrls: ['./profile-layout3.component.scss'],
})
export class ProfileLayout3Component implements OnInit {
  photo: any = 'assets/avatars/1.jpg';
  cover: any = 'assets/images/bg.png';
  constructor() { }

  ngOnInit() { }
  updateImage() {
    console.log('update');
  }
  updateCover() {
    console.log('update');
  }
}
