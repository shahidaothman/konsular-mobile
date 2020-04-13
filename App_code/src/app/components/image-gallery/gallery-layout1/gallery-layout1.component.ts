import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gallery-layout1',
  templateUrl: './gallery-layout1.component.html',
  styleUrls: ['./gallery-layout1.component.scss'],
})
export class GalleryLayout1Component implements OnInit {
  users = [
    {
      imgs: 'assets/avatars/1.jpg',
      name: 'Dom',
      fav: false
    },
    {
      imgs: 'assets/avatars/2.png',
      name: 'Brain',
      fav: false
    },
    {
      imgs: 'assets/avatars/3.jpg',
      name: 'Bob',
      fav: false
    },
    {
      imgs: 'assets/avatars/4.jpg',
      name: 'Charlie',
      fav: false
    },
    {
      imgs: 'assets/avatars/5.jpg',
      name: 'Hobbs',
      fav: false
    },
    {
      imgs: 'assets/avatars/6.jpg',
      name: 'Charlie',
      fav: false
    },
    {
      imgs: 'assets/avatars/7.jpg',
      name: 'Dragon',
      fav: false
    },
    {
      imgs: 'assets/avatars/8.jpg',
      name: 'Imagine',
      fav: false
    },
  ];
  constructor() { }

  ngOnInit() { }
  openSubGallery() {
    console.log('open new')
  }
  favorite(cat, i) {
    this.users[i].fav = !this.users[i].fav;
  }
}
