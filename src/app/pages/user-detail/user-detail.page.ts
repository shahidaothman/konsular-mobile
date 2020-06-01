import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobalService } from 'src/app/services/global/global.service';
import { User } from 'src/app/interfaces/app.interface';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage implements OnInit, OnDestroy {
  public user: User;
  public subs = new Subscription();
  constructor(private globalService: GlobalService) {}

  public ngOnInit() {
    this.subs.add(this.globalService.getUser.subscribe(($) => (this.user = $)));
  }

  // private formatDate(date: string): string {
  //   return moment.utc(date).format('DD MMM YYYY');
  // }
  //
  // public gimmeValue(type: string, dateField: boolean = false): string {
  //   if (dateField) {
  //     return this.user.user_profile_data[type] == null
  //       ? 'N/A'
  //       : this.formatDate(this.user.user_profile_data[type]);
  //   } else {
  //     return this.user.user_profile_data[type] == null
  //       ? 'N/A'
  //       : this.user.user_profile_data[type];
  //   }
  // }

  public ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
