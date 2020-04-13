import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
  ocultar = '';

  slides: { img: string, title: string, desc: string }[] = [
    {
      img: '/assets/slides/photos.svg',
      title: 'Share Photos',
      desc: 'Watch and share amazing photos from around the world'
    },
    {
      img: '/assets/slides/music-player-2.svg',
      title: 'Listen to music',
      desc: 'All your favorite music is here'
    },
    {
      img: '/assets/slides/calendar.svg',
      title: 'Never forget anything',
      desc: 'The best calendar in the world at your disposal'
    },
    {
      img: '/assets/slides/placeholder-1.svg',
      title: 'Your location',
      desc: 'We will always know where you are!'
    }
  ];

  constructor(private navController: NavController) { }

  ngOnInit() {
  }
  onClick() {

    this.ocultar = 'animated fadeOut fast';

    this.navController.navigateBack('/');

  }
}
