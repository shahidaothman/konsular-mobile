import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/providers/util.service';

@Component({
  selector: 'app-profile-layout5',
  templateUrl: './profile-layout5.component.html',
  styleUrls: ['./profile-layout5.component.scss'],
})
export class ProfileLayout5Component implements OnInit {
  language: any;
  currency: any;
  paymentMethod: any;

  languages = ['English', 'Portuguese', 'French'];
  paymentMethods = ['Paypal', 'Credit Card'];
  currencies = ['USD', 'BRL', 'EUR'];

  constructor(
    private util: UtilService
  ) { }

  ngOnInit() { }
  logOut() {
    this.util.showToast('Logout Clicked', 'danger', 'bottom');
  }
}
