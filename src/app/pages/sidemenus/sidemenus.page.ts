
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-sidemenus',
  templateUrl: './sidemenus.page.html',
  styleUrls: ['./sidemenus.page.scss'],
})
export class SidemenusPage implements OnInit {

  constructor(
    private menuCtrl: MenuController
  ) { }

  ngOnInit() {

  }
  example(id) {
    if (id === '1') {
      this.menuCtrl.enable(true, 'menu1');
      this.menuCtrl.open('menu1').then((res: any) => {
        console.log('opende', res);
      });
      return true;
    }

    if (id === '2') {
      this.menuCtrl.enable(true, 'menu2');
      this.menuCtrl.open('menu2').then((res: any) => {
        console.log('opende', res);
      });
      return true;
    }

    if (id === '3') {
      this.menuCtrl.enable(true, 'menu3');
      this.menuCtrl.open('menu3').then((res: any) => {
        console.log('opende', res);
      });
      return true;
    }

    if (id === '4') {
      this.menuCtrl.enable(true, 'menu4');
      this.menuCtrl.open('menu4').then((res: any) => {
        console.log('opende', res);
      });
      return true;
    }

    if (id === '5') {
      this.menuCtrl.enable(true, 'menu5');
      this.menuCtrl.open('menu5').then((res: any) => {
        console.log('opende', res);
      });
      return true;
    }
  }



}
