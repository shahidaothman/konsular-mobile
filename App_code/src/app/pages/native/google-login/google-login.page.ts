import { Component, OnInit } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { UtilService } from 'src/app/providers/util.service';
@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.page.html',
  styleUrls: ['./google-login.page.scss'],
})
export class GoogleLoginPage implements OnInit {

  /**
   * Fore more https://ionicthemes.com/tutorials/about/ionic-google-login
   */

  constructor(
    private googlePlus: GooglePlus,
    private util: UtilService
  ) { }

  ngOnInit() {
  }
  login() {
    this.googlePlus.login({})
      .then((res: any) => {
        console.log(res);
        this.util.showToast('Successs ' + res.displayName, 'success', 'bottom')
      })
      .catch((err: any) => {
        console.error(err);
        this.util.showErrorAlert(err);
      });
  }
} 
