import { Component, OnInit, ViewChild, } from '@angular/core';
import { IonSlides } from "@ionic/angular";
@Component({
  selector: 'gallery-layout3',
  templateUrl: './gallery-layout3.component.html',
  styleUrls: ['./gallery-layout3.component.scss'],
})
export class GalleryLayout3Component implements OnInit {
  @ViewChild('mysliders') myslide: IonSlides;
  slideOpts = {
    loop: false,
    slidesPerView: 1.2,
    centeredSlides: true,
    spaceBetween: 20,
  }
  slideOpts2 = {
    loop: false,
    slidesPerView: 4,
    spaceBetween: 10,
    speed: 2000,
    autoplay: true,
  }
  info = [
    {
      thumbnail: 'assets/images/photo_1.jpeg'
    },
    {
      thumbnail: 'assets/images/photo_8.jpeg'
    },
    {
      thumbnail: 'assets/images/photo_9.jpeg'
    },
    {
      thumbnail: 'assets/sliders/3.jpg'
    },

  ]

  constructor() { }

  ngOnInit() { }
  viewImage() {

  }
}
