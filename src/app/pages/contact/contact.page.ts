import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobalService } from 'src/app/services/global/global.service';
import { User } from 'src/app/interfaces/app.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit, OnDestroy {
  public user: User;
  public data: any;
  public subs = new Subscription();
  constructor(private globalService: GlobalService) {}

  ngOnInit() {
    // this.subs.add(this.globalService.getUser.subscribe(($) => (this.user = $)));
  }

  ngOnDestroy() {
    // this.subs.unsubscribe();
  }
}
