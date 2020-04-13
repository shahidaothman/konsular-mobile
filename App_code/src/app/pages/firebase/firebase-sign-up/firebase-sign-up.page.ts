
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { FirebaseService } from 'src/app/providers/firebase.service';
import { UtilService } from 'src/app/providers/util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firebase-sign-up',
  templateUrl: './firebase-sign-up.page.html',
  styleUrls: ['./firebase-sign-up.page.scss'],
})
export class FirebaseSignUpPage implements OnInit {
  email: string;
  password: string;
  id: string;
  constructor(
    public toastController: ToastController,
    private firebaseService: FirebaseService,
    private util: UtilService,
    private router: Router
  ) { }

  ionViewWillEnter() {
  }

  ngOnInit() {
  }

  onSubmit({ valid, value }) {
    if (!valid) {
      this.ErrorPresentToast()
    } else {
      this.firebaseService.createUserWithEmailAndPass(this.email, this.password).then((data: any) => {
        console.log('data', data);
        localStorage.setItem('uid', data.user.uid);
        this.firebaseService.isAuthorized = true;
        this.router.navigate[('firebaselist')];
        this.util.showToast('Register Success', 'success', 'bottom');
      }).catch((error: any) => {
        console.log("errr", error);
        this.util.showToast(error.message, 'danger', 'bottom');
      })
    }
  }


  async ErrorPresentToast() {
    const toast = await this.toastController.create({
      message: 'Sorry we could not log you in, check signup details and try again',
      duration: 3000,
      position: 'top',
    });
    toast.present();
  }

  async SuccessPresentToast() {
    const toast = await this.toastController.create({
      message: 'You have succesfully created an account, welcome to Ionic Starter App 😁',
      duration: 3000,
      position: 'top',
    });
    toast.present();
  }

  async FailErrPresentToast(err: any) {
    const toast = await this.toastController.create({
      message: `${err}`,
      duration: 3000,
      position: 'top',
    });
    toast.present();
  }

  registerUser(value) {

    value = {
      email: this.email,
      step: 0,
      type: 'user',
      stage: 1,
    }
    // this.authService.getAuth().subscribe(auth => {
    //   if (auth) {
    //     this.id = auth.uid
    //     this.userService.newClient(value, this.id);
    //     this.router.navigate(['home']);
    //   } else {
    //   }
    // });
  }

}
