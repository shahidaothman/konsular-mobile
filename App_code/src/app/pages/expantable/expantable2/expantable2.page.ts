
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expantable2',
  templateUrl: './expantable2.page.html',
  styleUrls: ['./expantable2.page.scss'],
})
export class Expantable2Page implements OnInit {
  lists = [
    {
      name: 'Favourite Sports',
      show: false,
      subList: [
        {
          name: 'Cricket'
        },
        {
          name: 'Football'
        },
        {
          name: 'Baseball'
        },
        {
          name: 'Chess'
        },
        {
          name: 'BasketBall'
        },
        {
          name: 'Long Tennis'
        },
        {
          name: 'Table Tennis'
        },
      ]
    },
    {
      name: 'Favourite Food',
      show: false,
      subList: [
        {
          name: 'Indian Food'
        },
        {
          name: 'Chiness Food'
        },
        {
          name: 'Thai Food'
        },
        {
          name: 'American Foods'
        },
        {
          name: 'Fast Food'
        },
      ]
    },
    {
      name: 'Favourite Place',
      show: false,
      subList: [
        {
          name: 'India'
        },
        {
          name: 'China'
        },
        {
          name: 'America'
        },
        {
          name: 'Switzerland'
        },
        {
          name: 'Maldius'
        },
      ]
    },
    {
      name: 'Favourite Movie',
      show: false,
      subList: [
        {
          name: 'Avengers Endgame'
        },
        {
          name: 'Titanic'
        },
        {
          name: 'Avatar'
        },
        {
          name: 'Dangal'
        },
        {
          name: 'Khiladi'
        },
      ]
    },
    {
      name: 'Favourite Actors',
      show: false,
      subList: [
        {
          name: 'Robert Dowyne Jr'
        },
        {
          name: 'Leonardo'
        },
        {
          name: 'Shahrukh Khan'
        },
        {
          name: 'Akshay Kumar'
        },
        {
          name: 'Vin Deisal'
        },
      ]
    }
  ]
  constructor() { }

  ngOnInit() {
  }
  onChange(item) {
    console.log('item', item)
  }

}
