import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/providers/util.service';
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { ActionSheetController } from '@ionic/angular';
import { mobiscroll, MbscSelectOptions } from '@mobiscroll/angular';
import { AlertController } from '@ionic/angular';

mobiscroll.settings = {
  theme: 'ios',
  themeVariant: 'light'
};

const remoteData = {
  url: 'https://trial.mobiscroll.com/content/countries.json',
  type: 'json'
};

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  cap_img: any;
  cap_img1: any;
  filter: string;
  group: string;
  desktopFilter: string;
  desktopGroup: string;

  filterSettings: MbscSelectOptions = {
    display: 'bubble',
    data: remoteData,
    filter: true,
    group: {
      groupWheel: false,
      header: false
    },
    width: 400
  };
  groupSettings: MbscSelectOptions = {
    display: 'bubble',
    data: remoteData,
    group: true,
    width: [40, 240]
  };
  desktopFilterSettings: MbscSelectOptions = {
    display: 'bubble',
    touchUi: false,
    data: remoteData,
    filter: true,
    group: {
      groupWheel: false,
      header: false
    },
    width: 400
  };

  desktopGroupSettings: MbscSelectOptions = {
    display: 'bubble',
    touchUi: false,
    data: remoteData,
    group: true
  };
  constructor(
    public alertCtrl: AlertController,
    private util: UtilService,
    private cameraCtrl: Camera,
    private actionSheetController: ActionSheetController,
  ) { }

  ngOnInit() {
  }
  // async presentActionSheet() {
  //   const actionSheet = await this.actionSheetController.create({
  //     header: 'Submit your application ',
  //     backdropDismiss: false,
  //     buttons: [{
  //       text: 'Delete',
  //       role: 'destructive',
  //       icon: 'trash',
  //       cssClass: 'rojos',
  //       handler: () => {
  //         console.log('Delete clicked');
  //       }
  //     }, {
  //       text: 'Send',
  //       icon: 'share',
  //       handler: () => {
  //         console.log('Share clicked');
  //       }
  //     }, {
  //       text: 'Cancel',
  //       icon: 'close',
  //       role: 'cancel',
  //       handler: () => {
  //         console.log('Cancel clicked');
  //       }
  //     }]
  //   });

  //   await actionSheet.present();
  // }

  async getImages() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Choose From',
      buttons: [
        {
          text: 'Camera',
          icon: 'camera',
          handler: () => {
            console.log('camera clicked');
            this.takePhoto();
          }
        }, {
          text: 'Gallery',
          icon: 'images',
          handler: () => {
            console.log('gallery clicked');
            this.gallery();
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });
    await actionSheet.present();
  }

  async getImages1() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Choose From',
      buttons: [
        {
          text: 'Camera',
          icon: 'camera',
          handler: () => {
            console.log('camera clicked');
            this.takePhoto();
          }
        }, {
          text: 'Gallery',
          icon: 'images',
          handler: () => {
            console.log('gallery clicked');
            this.gallery();
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
    });
    await actionSheet.present();
  }

  async gallery() {
    try {
      const options: CameraOptions = {
        quality: 100,
        targetHeight: 500,
        targetWidth: 500,
        destinationType: this.cameraCtrl.DestinationType.DATA_URL,
        encodingType: this.cameraCtrl.EncodingType.JPEG,
        mediaType: this.cameraCtrl.MediaType.PICTURE,
        sourceType: this.cameraCtrl.PictureSourceType.PHOTOLIBRARY,
        correctOrientation: true
      }
      const result = await this.cameraCtrl.getPicture(options);
      this.cap_img = `data:image/png;base64,${result}`;
      this.cap_img1 = `data:image/png;base64,${result}`;
    }
    catch (e) {
      console.error(e);
    }
  } // take Gallary

  async takePhoto() {
    try {
      const options: CameraOptions = {
        quality: 100,
        targetHeight: 500,
        targetWidth: 500,
        destinationType: this.cameraCtrl.DestinationType.DATA_URL,
        encodingType: this.cameraCtrl.EncodingType.PNG,
        mediaType: this.cameraCtrl.MediaType.PICTURE,
        sourceType: this.cameraCtrl.PictureSourceType.CAMERA,
        correctOrientation: true
      }
      const result = await this.cameraCtrl.getPicture(options);
      this.cap_img = `data:image/png;base64,${result}`;


    }
    catch (e) {
      console.error(e);
    }
  }

  async presentActionSheet() {
    const alert = await this.alertCtrl.create({
      header: 'Alert!',
      message: 'You cant make any changes after proceed',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Proceed',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}

