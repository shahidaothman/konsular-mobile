import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid1',
  templateUrl: './grid1.component.html',
  styleUrls: ['./grid1.component.scss'],
})
export class Grid1Component implements OnInit {
  list = [
    {
      imgs: 'assets/grids/1.jpg',
      name: 'California',
    },
    {
      imgs: 'assets/grids/2.jpg',
      name: 'Taivan',
    },
    {
      imgs: 'assets/grids/3.jpg',
      name: 'Malesiya',
    },
    {
      imgs: 'assets/grids/4.jpg',
      name: 'India',
    },
    {
      imgs: 'assets/grids/5.jpg',
      name: 'Bangkok',
    },
    {
      imgs: 'assets/grids/6.jpg',
      name: 'China',
    },
    {
      imgs: 'assets/grids/7.jpg',
      name: 'Maldives',
    },
    {
      imgs: 'assets/grids/8.jpg',
      name: 'Switzerland',
    },

  ]
  constructor() { }

  ngOnInit() { }

}
