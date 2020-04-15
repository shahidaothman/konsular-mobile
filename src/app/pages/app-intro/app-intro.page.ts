
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-app-intro',
  templateUrl: './app-intro.page.html',
  styleUrls: ['./app-intro.page.scss'],
})
export class AppIntroPage implements OnInit {

  fp = 20;
  co = 20;
  constructor(private navController: NavController) { }

  ngOnInit() {
  }
  async log(s: string) {

  }
  navigateBack() {
    this.navController.back();
  }
}
