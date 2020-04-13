
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { FirebaseService } from 'src/app/providers/firebase.service';
import { UtilService } from 'src/app/providers/util.service';
@Component({
  selector: 'app-firebase-auth',
  templateUrl: './firebase-auth.page.html',
  styleUrls: ['./firebase-auth.page.scss'],
})
export class FirebaseAuthPage implements OnInit {

  email: string;
  password: string;

  constructor(
    public toastController: ToastController,
    private router: Router,
    public menuCtrl: MenuController,
    private firebaseService: FirebaseService,
    private util: UtilService,
  ) {

  }

  ionViewWillEnter() {
  }

  ngOnInit() {
  }

  onSubmit({ valid }: { valid: boolean }) {
    if (!valid) {
      this.ErrorPresentToast()
    } else {
      this.firebaseService.logiWithFirebase(this.email, this.password).then((data: any) => {
        console.log('data', data);
        localStorage.setItem('uid', data.user.uid);
        this.firebaseService.isAuthorized = true;
        this.router.navigate(['firebaselist']);
        this.util.showToast('Login Success', 'success', 'bottom');
      }).catch((error: any) => {
        console.log('erro', error);
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
      message: 'You have successfully been logged in 😁',
      duration: 4000,
      position: 'top',
    });
    toast.present();
  }

  async FailErrPresentToast(err: any) {
    const toast = await this.toastController.create({
      message: `${err}`,
      duration: 4000,
      position: 'top',
    });
    toast.present();
  }

  toSignUp() {
    this.router.navigate(['firebase-sign-up'])
  }

}
