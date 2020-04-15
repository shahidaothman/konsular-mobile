import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gallery-layout2',
  templateUrl: './gallery-layout2.component.html',
  styleUrls: ['./gallery-layout2.component.scss'],
})
export class GalleryLayout2Component implements OnInit {
  categories = [
    {
      imgs: 'assets/images/fruits/apple.jpeg',
      name: 'Apple',
      fav: false
    },
    {
      imgs: 'assets/images/fruits/bananas.jpg',
      name: 'Banana',
      fav: false
    },
    {
      imgs: 'assets/images/fruits/chrerry.jpg',
      name: 'Cherry',
      fav: false
    },
    {
      imgs: 'assets/images/fruits/orange.jpg',
      name: 'Orange',
      fav: false
    },
  ];
  constructor() { }

  ngOnInit() { }
  favorite(cat, i) {
    this.categories[i].fav = !this.categories[i].fav;
  }
}
