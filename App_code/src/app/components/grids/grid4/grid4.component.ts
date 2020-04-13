import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid4',
  templateUrl: './grid4.component.html',
  styleUrls: ['./grid4.component.scss'],
})
export class Grid4Component implements OnInit {
  list = [
    {
      imgs: 'assets/grids/u1.jpg',
      name: 'Leanne Graham',
      username: 'Bret',
    },
    {
      imgs: 'assets/grids/u2.jpg',
      name: 'Ervin Howell',
      username: 'Antonette',
    },
    {
      imgs: 'assets/grids/u3.jpg',
      name: 'Clementine Bauch',
      username: 'Samantha',
    },
    {
      imgs: 'assets/grids/u4.jpeg',
      name: "Romaguera-Jacobson",
      username: "Karianne",
    },
    {
      imgs: 'assets/grids/u5.jpg',
      name: "Chelsey Dietrich",
      username: "Kamren",
    },
    {
      imgs: 'assets/grids/u6.jpg',
      name: "Nicholas Runolfsdottir V",
      username: 'Maxime_Nienow',
    },
    {
      imgs: 'assets/grids/u7.jpeg',
      name: "Glenna Reichert",
      username: "Delphine",
    },
    {
      imgs: 'assets/grids/u8.jpg',
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
    },
    {
      imgs: 'assets/grids/u9.jpg',
      name: "Nicholas Runolfsdottir V",
      username: 'Maxime_Nienow',
    },


  ]
  constructor() { }

  ngOnInit() { }

}
