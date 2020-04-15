import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile-layout1',
  templateUrl: './profile-layout1.component.html',
  styleUrls: ['./profile-layout1.component.scss'],
})
export class ProfileLayout1Component implements OnInit {
  segments: any = 'post';
  userPost: any;
  constructor(public alertCtrl: AlertController) {
    this.userPost = [
      {
        name: 'Sweet Kristy',
        descriptions: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
        specimen
        book.It has survived not only five centuries,`,
        profile: 'assets/avatars/1.jpg',
        img: 'assets/images/photo_1.jpeg'
      },
      {
        name: 'Turbo Slayer',
        descriptions: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
        specimen
        book.It has survived not only five centuries,`,
        profile: 'assets/avatars/2.jpg',
        img: 'assets/images/photo_2.jpeg'
      },
      {
        name: 'Kristy Honey',
        descriptions: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
        specimen
        book.It has survived not only five centuries,`,
        profile: 'assets/avatars/3.jpg',
        img: 'assets/images/photo_3.jpeg'
      },
      {
        name: 'Cryptic Hatter',
        descriptions: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
        specimen
        book.It has survived not only five centuries,`,
        profile: 'assets/avatars/4.jpg',
        img: 'assets/images/photo_4.jpeg'
      }
    ]
  }

  ngOnInit() { }
  segmentChanged(event: any) {
    this.segments = event.detail.value;
  }
  showBasicAlert(fruits) {
    this.presentAlert(fruits.name, fruits.descriptions);
  }

  /*
    Show basic Alert Message
    param :header = header or title of alert message, msg = message to display
    Call this method to show basic Alert,
    */
  async presentAlert(header, msg) {
    const alert = await this.alertCtrl.create({
      header: header,
      message: msg,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: (Cancle) => {
            console.log('Cancle Button');
          }
        }, {
          text: 'OK',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  update() {

  }
}
