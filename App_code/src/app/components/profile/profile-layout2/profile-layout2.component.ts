import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile-layout2',
  templateUrl: './profile-layout2.component.html',
  styleUrls: ['./profile-layout2.component.scss'],
})
export class ProfileLayout2Component implements OnInit {
  segments: any = 'grid';
  posts = [
    {
      video: 'false',
      name: 'Jacket',
      img: 'assets/products/1.jpg'
    },
    {
      video: 'true',
      name: 'Blazers',
      img: 'assets/products/2.jpeg'
    },
    {
      video: 'false',
      name: 'Product',
      img: 'assets/avatars/1.jpg'
    },
    {
      video: 'false',
      name: 'Product',
      img: 'assets/avatars/1.jpg'
    },
    {
      video: 'true',
      name: 'Product',
      img: 'assets/avatars/1.jpg'
    },
    {
      video: 'false',
      name: 'Product',
      img: 'assets/avatars/1.jpg'
    },
    {
      video: 'false',
      name: 'Product',
      img: 'assets/avatars/1.jpg'
    },
    {
      video: 'false',
      name: 'Jacket',
      img: 'assets/products/1.jpg'
    },
    {
      video: 'true',
      name: 'Product',
      img: 'assets/avatars/1.jpg'
    },
    {
      video: 'false',
      name: 'Product',
      img: 'assets/avatars/1.jpg'
    },
    {
      video: 'false',
      name: 'Product',
      img: 'assets/avatars/1.jpg'
    },
    {
      video: 'false',
      name: 'Jacket',
      img: 'assets/products/1.jpg'
    },
  ]
  userPost = [
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
  constructor(private alertCtrl: AlertController) { }

  ngOnInit() { }
  segmentChanged(event: any) {
    this.segments = event.detail.value;
  }
  gotoSaved() {
    console.log('saved page');
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
}
