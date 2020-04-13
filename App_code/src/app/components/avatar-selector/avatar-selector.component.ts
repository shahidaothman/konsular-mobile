import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-avatar-selector',
  templateUrl: './avatar-selector.component.html',
  styleUrls: ['./avatar-selector.component.scss'],
})
export class AvatarSelectorComponent implements OnInit {

  @Output() avatarSel = new EventEmitter<string>();
  avatars = [
    {
      img: '1.jpg',
      seleccionado: true
    },
    {
      img: '2.png',
      seleccionado: false
    },
    {
      img: '3.jpg',
      seleccionado: false
    },
    {
      img: '4.jpg',
      seleccionado: false
    },
    {
      img: '5.jpg',
      seleccionado: false
    },
    {
      img: '6.jpg',
      seleccionado: false
    },
    {
      img: '7.jpg',
      seleccionado: false
    },
    {
      img: '8.jpg',
      seleccionado: false
    }
  ];

  avatarSlide = {
    slidesPerView: 3.5,
    zoom: false
  };
  constructor() { }

  ngOnInit() { }

  seleccionarAvatar(avatar) {
    this.avatars.forEach((av) => (av.seleccionado = false));
    avatar.seleccionado = true;

    console.log(avatar.img);
    this.avatarSel.emit(avatar.img);

  }

}
