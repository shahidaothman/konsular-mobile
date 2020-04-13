import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-header-image',
  templateUrl: './header-image.page.html',
  styleUrls: ['./header-image.page.scss'],
})
export class HeaderImagePage implements OnInit {
  basicAlertCard: any;
  constructor(
    public alertCtrl: AlertController
  ) {
    this.basicAlertCard = [
      {
        name: 'Apple',
        descriptions: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
        specimen
        book.It has survived not only five centuries,`,
        image: 'assets/images/fruits/apple.jpeg'
      },
      {
        name: 'Oranges',
        descriptions: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
        specimen
        book.It has survived not only five centuries,`,
        image: 'assets/images/fruits/orange.jpg'
      },
      {
        name: 'Cherrys',
        descriptions: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
        specimen
        book.It has survived not only five centuries,`,
        image: 'assets/images/fruits/chrerry.jpg'
      },
      {
        name: 'Bananas',
        descriptions: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
        specimen
        book.It has survived not only five centuries,`,
        image: 'assets/images/fruits/bananas.jpg'
      }
    ]
  }

  ngOnInit() {
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
