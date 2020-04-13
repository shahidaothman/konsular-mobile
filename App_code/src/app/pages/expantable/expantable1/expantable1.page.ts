
import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/providers/util.service';

@Component({
  selector: 'app-expantable1',
  templateUrl: './expantable1.page.html',
  styleUrls: ['./expantable1.page.scss'],
})
export class Expantable1Page implements OnInit {
  list = [
    {
      open: false,
      name: 'rcap designs',
      sub_title: 'Ionic Expert',
      img: 'assets/avatars/1.jpg',
      sub_list: [
        {
          name: 'sparkly',
          sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          img: 'assets/avatars/3.jpg',
        },
        {
          name: 'glimmer',
          sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          img: 'assets/avatars/4.jpg',
        },
        {
          name: 'dolly',
          sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          img: 'assets/avatars/5.jpg',
        },
      ]
    },
    {
      open: false,
      name: 'fairy honey',
      sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      img: 'assets/avatars/3.jpg',
      sub_list: [
        {
          name: 'sparkly',
          sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          img: 'assets/avatars/1.jpg',
        },
        {
          name: 'glimmer',
          sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          img: 'assets/avatars/4.jpg',
        },
        {
          name: 'dolly',
          sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          img: 'assets/avatars/5.jpg',
        },
      ]
    },
    {
      open: false,
      name: 'lovely blossom',
      sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      img: 'assets/avatars/4.jpg',
      sub_list: [
        {
          name: 'sparkly',
          sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          img: 'assets/avatars/1.jpg',
        },
        {
          name: 'glimmer',
          sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          img: 'assets/avatars/3.jpg',
        },
        {
          name: 'dolly',
          sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          img: 'assets/avatars/5.jpg',
        },
      ]
    },
    {
      open: false,
      name: 'sweetie snowflake',
      sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      img: 'assets/avatars/5.jpg',
      sub_list: [
        {
          name: 'sparkly',
          sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          img: 'assets/avatars/3.jpg',
        },
        {
          name: 'glimmer',
          sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          img: 'assets/avatars/5.jpg',
        },
        {
          name: 'dolly',
          sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          img: 'assets/avatars/8.jpg',
        },
      ]
    },
    {
      open: false,
      name: 'rcap designs',
      sub_title: 'Ionic Expert',
      img: 'assets/avatars/1.jpg',
      sub_list: [
        {
          name: 'sparkly',
          sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          img: 'assets/avatars/3.jpg',
        },
        {
          name: 'glimmer',
          sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          img: 'assets/avatars/4.jpg',
        },
        {
          name: 'dolly',
          sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          img: 'assets/avatars/5.jpg',
        },
      ]
    },
    {
      open: false,
      name: 'fairy honey',
      sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      img: 'assets/avatars/3.jpg',
      sub_list: [
        {
          name: 'sparkly',
          sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          img: 'assets/avatars/1.jpg',
        },
        {
          name: 'glimmer',
          sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          img: 'assets/avatars/4.jpg',
        },
        {
          name: 'dolly',
          sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          img: 'assets/avatars/5.jpg',
        },
      ]
    },
    {
      open: false,
      name: 'lovely blossom',
      sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      img: 'assets/avatars/4.jpg',
      sub_list: [
        {
          name: 'sparkly',
          sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          img: 'assets/avatars/1.jpg',
        },
        {
          name: 'glimmer',
          sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          img: 'assets/avatars/3.jpg',
        },
        {
          name: 'dolly',
          sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          img: 'assets/avatars/5.jpg',
        },
      ]
    },
    {
      open: false,
      name: 'sweetie snowflake',
      sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      img: 'assets/avatars/5.jpg',
      sub_list: [
        {
          name: 'sparkly',
          sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          img: 'assets/avatars/3.jpg',
        },
        {
          name: 'glimmer',
          sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          img: 'assets/avatars/5.jpg',
        },
        {
          name: 'dolly',
          sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
          img: 'assets/avatars/8.jpg',
        },
      ]
    }
  ];
  constructor(
    private util: UtilService
  ) {
    console.log('list', this.list);
  }

  ngOnInit() {
  }

  canOpen(item, index) {
    if (this.list[index].open) {
      this.util.showToast('Clicked On ' + item.name, 'dark', 'bottom');
    }
    this.list[index].open = !this.list[index].open;
  }
  subItemClick(item) {
    this.util.showToast('Clicked On ' + item.name, 'dark', 'bottom');
  }
}
