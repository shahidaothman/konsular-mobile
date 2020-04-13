import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SignaturePickerPage } from 'src/app/modals/signature-picker/signature-picker.page';

@Component({
  selector: 'app-signature-pad',
  templateUrl: './signature-pad.page.html',
  styleUrls: ['./signature-pad.page.scss'],
})
export class SignaturePadPage implements OnInit {
  /**
   * For More https://www.npmjs.com/package/angular2-signaturepad
   * and https://www.9lessons.info/2017/04/ionic-3-and-angular-4-working-with.html
   */
  signature: any;
  constructor(
    private modalCtrl: ModalController
  ) {
    this.signature = '';
  }

  ngOnInit() {
  }
  async open() {
    const modal = await this.modalCtrl.create({
      component: SignaturePickerPage,
      showBackdrop: true,
    });
    modal.onDidDismiss().then(signature => {
      let signatures = localStorage.getItem('signature')
      if (signatures && signatures != null && signatures != 'null') {
        this.signature = signatures;
      }
    });
    await modal.present();
  }
}
