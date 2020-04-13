import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../../providers/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';
import { UtilService } from 'src/app/providers/util.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild('list') list: IonList;
  users: Observable<any>;
  constructor(public data: DataService,
    private util: UtilService
  ) { }
  ngOnInit() {
    this.users = this.data.getUser();
  }
  favorite(user) {
    console.log('favorite', user);
    this.util.showToast('saved in favorites!', 'success', 'bottom');
    this.list.closeSlidingItems();
  }
  share(user) {
    console.log('share', user);
    this.util.showToast('Shared', 'secondary', 'bottom');
    this.list.closeSlidingItems();
  }
  unread(user) {
    console.log('unread', user);
    this.util.showToast('Removed', 'danger', 'bottom');
    this.list.closeSlidingItems();

  }

}
