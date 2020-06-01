import { Injectable } from '@angular/core';
import {
  ToastController,
  AlertController,
  LoadingController,
} from '@ionic/angular';
import { ObjectAnyType } from 'src/app/interfaces/app.interface';
import { Logger } from 'src/app/utils/app.util';
@Injectable({
  providedIn: 'root',
})
export class UisService {
  constructor(
    private toastController: ToastController,
    private alertController: AlertController,
    private loadingCtr: LoadingController
  ) {}

  public async presentToast(message: string, type: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top',
      color: type,
    });
    await toast.present();
  }

  public async presentAlert(message: string, header = 'Alert') {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  public async presentConfirm(
    buttons: ObjectAnyType,
    message = 'Are You Sure ?',
    header = 'Confirm!'
  ) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: buttons.reject,
        },
        {
          text: 'Okay',
          handler: buttons.accept,
        },
      ],
    });
    await alert.present();
  }

  public async setLoader(message = 'Please wait...', duration = 2000) {
    return await this.loadingCtr.create({
      message,
      duration,
    });
  }

  /**
   * presentLoading
   * @param message loader msg
   * @param duration time
   * @deprecated do not use
   */
  public async presentLoading(message = 'Please wait...', duration = 2000) {
    const loading = await this.loadingCtr.create({
      message,
      duration,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  /**
   * dismiss Loading
   * @deprecated do not use this.
   */
  public dismissLoading() {
    setTimeout(() => {
      this.loadingCtr.dismiss({ closed: true }, 'loader');
    }, 500);
  }
}
