import { Component, OnInit } from '@angular/core';
// import { Facebook } from '@ionic-native/facebook/ngx';
@Component({
  selector: 'app-facebook-login',
  templateUrl: './facebook-login.page.html',
  styleUrls: ['./facebook-login.page.scss'],
})
export class FacebookLoginPage implements OnInit {

  //For More : https://www.djamware.com/post/59ad3a0c80aca768e4d2b135/login-with-ionic-3-and-cordova-native-facebook-connect-plugin
  constructor(
    // private fb: Facebook
  ) { }

  ngOnInit() {
  }

  facebookLogin() {
    // this.fb.getLoginStatus().then((res) => {
    //   console.log('status/?', res);
    //   if (res.status == "connected") {
    //   } else {
    //     this.fb.login(['email']).then((response) => {
    //       console.log(response.authResponse.accessToken);
    //       this.fb.api("/" + res.authResponse.userID + "/?fields=id,email,name,picture,first_name,last_name,gender", ["public_profile"])
    //         .then(res => {
    //           console.log(res);
    //         });
    //     }).catch((error) => {
    //       console.log(error)
    //     });
    //   }
    // })

  }
}
