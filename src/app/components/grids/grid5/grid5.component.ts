import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid5',
  templateUrl: './grid5.component.html',
  styleUrls: ['./grid5.component.scss'],
})
export class Grid5Component implements OnInit {

  users = [
    {
      imgs: 'assets/products/1.jpg',
      name: 'Product 1',
      added: false
    },
    {
      imgs: 'assets/products/2.png',
      name: 'Product 2',
      added: false
    },
    {
      imgs: 'assets/products/3.png',
      name: 'Product 3',
      added: false
    },
    {
      imgs: 'assets/products/4.png',
      name: 'Product 4',
      added: false
    },
    {
      imgs: 'assets/products/5.png',
      name: 'Product 5',
      added: false
    },
    {
      imgs: 'assets/products/6.png',
      name: 'Product 6',
      added: false
    },
    {
      imgs: 'assets/products/7.png',
      name: 'Product 7',
      added: false
    },
    {
      imgs: 'assets/products/8.png',
      name: 'Product 8',
      added: false
    },
    {
      imgs: 'assets/products/9.png',
      name: 'Product 9',
      added: false
    },
    {
      imgs: 'assets/products/10.png',
      name: 'Product 10',
      added: false
    },
    {
      imgs: 'assets/products/11.png',
      name: 'Product 11',
      added: false
    },
  ];
  constructor() { }

  ngOnInit() { }
  openSubGallery() {
    console.log('open new')
  }
  addToCart(cat, i) {
    this.users[i].added = !this.users[i].added;
  }
}
