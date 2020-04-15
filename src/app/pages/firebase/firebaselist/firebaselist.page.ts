 
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFirestore } from '@angular/fire/firestore';
import { ActionSheetController } from '@ionic/angular';
import { UtilService } from 'src/app/providers/util.service';
@Component({
  selector: 'app-firebaselist',
  templateUrl: './firebaselist.page.html',
  styleUrls: ['./firebaselist.page.scss'],
})
export class FirebaselistPage implements OnInit {
  lists: any;
  haveData: boolean;
  constructor(
    private router: Router,
    private adb: AngularFirestore,
    private actionSheetController: ActionSheetController,
    private util: UtilService
  ) {
    this.haveData = false;
  }

  ngOnInit() {
    const uid = localStorage.getItem('uid');
    if (uid && uid != null && uid != 'null') {
      this.adb.collection('lists')
        .doc(localStorage.getItem('uid'))
        .collection('list')
        .valueChanges()
        .subscribe((lists: any) => {
          console.log('list', lists);
          this.lists = lists;
          if (this.lists.length > 0) {
            this.haveData = true;
          }
        })
    } else {
      this.router.navigate(['/firebase-auth']);
      this.util.showToast('Unauthorized', 'danger', 'bottom');
    }
  }
  addNew() {
    this.router.navigate(['firecreate']);
  }

  gettimeago(time) {
    var d = new Date(time);
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    var c = monthNames[d.getMonth()];
    c = monthNames[d.getMonth()] + ' ' + d.getDate();
    return c;
  }

  deleteItem(id) {
    return this.adb.collection('lists')
      .doc(localStorage.getItem('uid'))
      .collection('list')
      .doc(id)
      .delete()
      .then(() => {
        console.log('deleted');
      })
  }
  async launchMenu(item) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Action',
      buttons: [
        {
          text: 'Edit',
          icon: 'create',
          handler: () => {
            console.log('Edit clicked');
            this.router.navigate(['firedetails', item.id])
          }
        }, {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
            this.deleteItem(item.id);
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


}
