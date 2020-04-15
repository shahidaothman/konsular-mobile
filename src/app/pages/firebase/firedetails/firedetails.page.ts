 
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { UtilService } from 'src/app/providers/util.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-firedetails',
  templateUrl: './firedetails.page.html',
  styleUrls: ['./firedetails.page.scss'],
})
export class FiredetailsPage implements OnInit {
  id: any;
  title: any;
  description: any;
  isCreate: boolean;
  constructor(
    private route: ActivatedRoute,
    private util: UtilService,
    private adb: AngularFirestore,
    private navCtrl: NavController, ) { }

  ngOnInit() {
    this.title = '';
    this.description = '';
    this.isCreate = false;
    this.route.params.subscribe(params => {
      this.id = params.id
      console.log('id', this.id);

      this.adb.collection('lists')
        .doc(localStorage.getItem('uid'))
        .collection('list')
        .doc(this.id)
        .valueChanges()
        .subscribe((item: any) => {
          console.log('item', item);
          this.title = item.title;
          this.description = item.description;
        })
    });


  }


  update() {
    if (this.title == '') {
      this.util.showWarningAlert('Please Add Title');
      return false;
    }
    if (this.description == '') {
      this.util.showWarningAlert('Please add Description');
      return false;
    }
    this.isCreate = true;

    this.adb.collection('lists').doc(localStorage.getItem('uid')).collection('list').doc(this.id).update({
      title: this.title,
      description: this.description,
    }).then(() => {
      console.log('added');
      this.isCreate = false;
      this.navCtrl.back();
      this.util.showToast('List Updated', 'success', 'bottom');
    }).catch((error: any) => {
      console.log('error', error);
      this.isCreate = false;
      this.util.showErrorAlert("Something went Wrong");
    })
  }
}