import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private menuCtr: MenuController) {}

  ionViewWillEnter() {
    this.menuCtr.swipeGesture(false);
  }

  ionViewWillLeave() {
    this.menuCtr.swipeGesture(true);
  }
}
