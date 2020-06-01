import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { UisService } from './services/uis/uis.service';
import { Logger } from './utils/app.util';
import { GlobalService } from './services/global/global.service';
import { User } from './interfaces/app.interface';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    {
      title: 'Home',
      url: '/tabs/menu',
      src: './assets/image/malaysian.png',
    },
    {
      title: 'Profile ',
      url: '/tabs/menu/user-detail',
      src: './assets/image/profile.png',
    },
  ];
  public myDate: any;
  public user: User;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private uisService: UisService,
    private globalService: GlobalService
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    this.globalService.setToken = localStorage.getItem('token');
    this.globalService.setAuthorization =
      localStorage.getItem('authorization') === 'true';
    this.globalService.setUser = JSON.parse(localStorage.getItem('user'));
    this.globalService.getUser.subscribe(($) => (this.user = $));
    if (this.user && this.user.last_login_date) {
      this.myDate = new Date(this.user.last_login_date);
    } else {
      this.myDate = new Date();
    }
  }

  public initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);
      this.splashScreen.hide();
    });
  }

  /**
   * * log out user from current session
   */
  public async doLogout() {
    await this.uisService.presentConfirm(
      {
        accept: () => {
          Logger.log(`Accepted`);
          this.globalService.setAuthorization = false;
          this.globalService.setToken = '';
          this.globalService.setUser = null;
          localStorage.clear();
          sessionStorage.clear();
          this.router.navigateByUrl('/home');
        },
        reject: () => {
          Logger.log(`Rejected`);
        },
      },
      'Are you sure you want to logout?'
    );
  }
}
