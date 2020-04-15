import { Component, OnInit } from '@angular/core';
import { Stripe } from '@ionic-native/stripe/ngx';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { InAppBrowserOptions, InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { UtilService } from 'src/app/providers/util.service';
@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.page.html',
  styleUrls: ['./stripe.page.scss'],
})
export class StripePage implements OnInit {
  cards: any;
  card_token: any = "NA";
  isEnabled;
  price: any;
  constructor(
    private stripe: Stripe,
    private router: Router,
    private http: Http,
    private iab: InAppBrowser,
    private util: UtilService
  ) {
    this.price = 100;
  }

  ngOnInit() {

  }

  getCards() {

    //**************************************************************************************************************************** */
    //For Testing we have used localStorage, but you can use ionic native storage
    //**************************************************************************************************************************** */

    if (localStorage.getItem("scuid") != undefined && localStorage.getItem('scuid') != 'undefined') {
      let header = new Headers();
      header.set('access-control-allow-credentials', 'true');
      header.set('access-control-allow-methods', 'GET, POST, HEAD, OPTIONS, DELETE');
      header.set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
      //Set your secret key here
      header.set('Authorization', 'Bearer sk_test_pChXbEkjJrFMu6nC80sqiIFP');
      let option = new RequestOptions({ headers: header });
      this.http.get('https://api.stripe.com/v1/customers/' + localStorage.getItem("scuid") + '/sources?object=card', option)
        .subscribe((datas: any) => {
          let data = datas.json();
          console.log(data);
          this.cards = data.data;
          this.card_token = this.cards[0].id;
          this.isEnabled = false;
        }, error => {
          console.log(error);
        });
    } else {
      this.isEnabled = true;
    }
  }

  ionViewWillEnter() {
    this.getCards();
  }
  addNewCard() {
    this.router.navigate(['add-new-card']);
  }
  changeMethod(id) {
    console.log('change', id);
    this.card_token = id;
  }
  payment() {
    //Charge API with Private Key and Secret key as Bearer Token
    this.stripe.setPublishableKey('pk_test_H3zJI5SaNFKCfB1VBNpEYHQ1');
    let url = 'https://api.stripe.com/v1/charges';
    let options = {
      amount: this.price * 100,
      currency: "usd",
      customer: localStorage.getItem("scuid"),
      card: this.card_token,
    }
    this.post(url, "sk_test_pChXbEkjJrFMu6nC80sqiIFP", options);
  }

  post(url: string, key: string, options: any) {
    let data = new URLSearchParams(options);
    for (let i in options)
      data.set(i, options[i]);
    let header = new Headers();
    header.set('access-control-allow-credentials', 'true');
    header.set('access-control-allow-methods', 'GET, POST, HEAD, OPTIONS, DELETE');
    header.set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
    header.set('Authorization', 'Bearer ' + key);
    let option = new RequestOptions({ headers: header });
    let temp = data.toString().split("&");
    console.log(temp);
    this.http.post(url, temp.join("&"), option)
      .subscribe((res: any) => {
        console.log(res);
        let data = res.json();
        console.log('datas', data);
        this.util.showToast('Payment Success', 'success', 'bottom');
        // this.openReciepe(data.receipt_url);
      }, error => {
        console.log(error);
      });
  }

  openReciepe(url) {
    try {
      let options: InAppBrowserOptions;
      options = {
        location: 'no',
        clearcache: 'yes',
        zoom: 'yes',
        toolbar: 'yes',
        closebuttoncaption: 'close'
      };
      this.iab.create(url, '_blank', options);

    } catch (e) {
      console.log('error');
    }
  }
}
