
import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuController, IonSlides, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.page.html',
  styleUrls: ['./tutorials.page.scss'],
})
export class TutorialsPage implements OnInit {

  showSkip = true;
  slideOpts = {
    zoom: false
  };
  @ViewChild('slides') slides: IonSlides;
  constructor(public menu: MenuController, private navCtrl: NavController,
    public router: Router, ) { }

  ngOnInit() {
  }
  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      this.showSkip = !isEnd;
    });
  }
  startApp() {
    this.router.navigate(['/landing-page'])
    // this.router.navigate(['/simple'])
  }
}
