

import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [

    {
      title: 'Home',
      url: '/new-home',
      icon: 'home'
    },
    {
      title: 'Profile',
      url: '/profile-details',
      icon: 'address-card'
    },
    {
      title: 'Malaysia Embassies Information',
      url: '/new-home',
      icon: 'archway'
    },
    {
      title: 'Setting',
      url: '/setting',
      icon: 'cog'
    },
    {
      title: 'Log Out',
      url: '/new-home',
      icon: 'sign-out-alt'
    },
    // {
    //   title: 'Test',
    //   url: '/test',
    //   icon: 'home'
    // },
    // {
    //   title: 'Login Pages',
    //   url: '/login',
    //   icon: 'sign-in-alt'
    // },
    // {
    //   title: 'Profiles Pages',
    //   url: '/profiles',
    //   icon: 'user-circle'
    // },
    // {
    //   title: 'Accordion-List',
    //   url: '/accordion-list',
    //   icon: 'poll-h'
    // },
    // {
    //   title: 'Ionic Components',
    //   url: '/home-ionic',
    //   icon: 'check-circle'
    // },
    // {
    //   title: 'Dialog Alert',
    //   url: '/dialog',
    //   icon: 'exclamation-circle'
    // },
    // {
    //   title: 'Firebase CRUD',
    //   url: '/firebase',
    //   icon: 'fire'
    // },
    // {
    //   title: 'Expandable',
    //   url: '/expantable',
    //   icon: 'file-invoice'
    // },
    // {
    //   title: 'Image Gallery',
    //   url: '/image-gallery',
    //   icon: 'images'
    // },
    // {
    //   title: 'Steppers',
    //   url: '/stepper',
    //   icon: 'outdent'
    // },
    // {
    //   title: 'App Tour',
    //   url: '/app-intro',
    //   icon: 'flag-usa'
    // },
    // {
    //   title: 'Charts',
    //   url: '/charts',
    //   icon: 'chart-pie'
    // },
    // {
    //   title: 'Parallax',
    //   url: '/parallax',
    //   icon: 'stream'
    // },
    // {
    //   title: 'Timeline',
    //   url: '/timeline',
    //   icon: 'list-ul'
    // },
    // {
    //   title: 'Item-Ribbon',
    //   url: '/item-ribbon',
    //   icon: 'award'
    // },
    // {
    //   title: 'Payments',
    //   url: '/payments',
    //   icon: 'money-bill-alt'
    // },
    // {
    //   title: 'Forms',
    //   url: '/forms',
    //   icon: 'archive'
    // },
    // {
    //   title: 'Miscellaneous',
    //   url: '/miscellaneous',
    //   icon: 'folder'
    // },
    // {
    //   title: 'Native APIs',
    //   url: '/native',
    //   icon: 'mobile'
    // },
    // {
    //   title: 'Sidemenu',
    //   url: '/sidemenus',
    //   icon: 'ellipsis-v'
    // },
    // {
    //   title: 'Grids',
    //   url: '/grids',
    //   icon: 'th'
    // },
    // {
    //   title: 'Bottom-sheet',
    //   url: '/bottom-sheet',
    //   icon: 'chevron-down'
    // }



  ];
  bg_img: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _translate: TranslateService,
    private menuCtrl: MenuController,
  ) {
    this.menuCtrl.enable(false, 'menu1');
    this.menuCtrl.enable(false, 'menu2');
    this.menuCtrl.enable(false, 'menu3');
    this.menuCtrl.enable(false, 'menu4');
    this.menuCtrl.enable(false, 'menu5');

    this.bg_img = 'assets/images/home_icon.png';
    this.initializeApp();
    let userLang = navigator.language.split('-')[0];
    userLang = /(en|de|it|fr|es|be)/gi.test(userLang) ? userLang : 'en';
    this._translate.use(userLang);
  }

  initializeApp() {

    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      this.statusBar.backgroundColorByHexString('#0cd1e8');
      this.splashScreen.hide();
    });
  }
}
