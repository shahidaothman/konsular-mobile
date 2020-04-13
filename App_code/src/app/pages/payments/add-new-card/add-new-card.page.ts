import { Component, OnInit } from '@angular/core';
import { Stripe } from '@ionic-native/stripe/ngx';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Router } from '@angular/router';
import { UtilService } from 'src/app/providers/util.service';
@Component({
  selector: 'app-add-new-card',
  templateUrl: './add-new-card.page.html',
  styleUrls: ['./add-new-card.page.scss'],
})
export class AddNewCardPage implements OnInit {
  cnumber: any;
  cname: any;
  cvc: any;
  date: any;
  month: any;
  year: any;
  email: any;
  constructor(
    public http: Http,
    private stripe: Stripe,
    private router: Router,
    private util: UtilService
  ) {
    this.email = '';
    this.cnumber = '';
    this.cname = '';
    this.cvc = '';
    this.date = '';
  }

  ngOnInit() {
  }
  addcard() {

    //**************************************************************************************************************************** */
    //For Testing we have used localStorage, but you can use ionic native storage
    //**************************************************************************************************************************** */

    if (this.email == '') {
      this.util.showErrorAlert('Please Add Email Address');
      return false;
    } else if (this.cnumber == '') {
      this.util.showErrorAlert('Please Add Card Number');
      return false;
    } else if (this.cname == '') {
      this.util.showErrorAlert('Please Add Card Holder Name')
      return false;
    } else if (this.cvc == '') {
      this.util.showErrorAlert('Please Enter CVC code');
      return false;
    } else if (this.date == '') {
      this.util.showErrorAlert('Please Add Expire Date')
      return false;
    } else {
      this.year = this.date.split("-")[0];
      this.month = this.date.split("-")[1];
      this.stripe.setPublishableKey('pk_test_H3zJI5SaNFKCfB1VBNpEYHQ1');
      let card = {
        number: this.cnumber,
        expMonth: this.month,
        expYear: this.year,
        cvc: this.cvc
      };
      this.stripe.createCardToken(card)
        .then(token => {
          if (localStorage.getItem("CC") != "NO") {
            let postParams = {
              description: 'Ionic 4 Starter Users',
              email: this.email,
              source: token.id
            }
            this.post('https://api.stripe.com/v1/customers', 'sk_test_pChXbEkjJrFMu6nC80sqiIFP', postParams);
          } else {
            this.stripe.createCardToken(card)
              .then(token => {
                let temptoken = 'sk_test_pChXbEkjJrFMu6nC80sqiIFP';
                let param = {
                  source: token.id
                }
                this.postNewCard('https://api.stripe.com/v1/customers/' + localStorage.getItem('scuid') + '/sources', temptoken, param);
              })
              .catch(error => {
                console.log('ads', error);
                this.util.showErrorAlert('Something is Wrong with Card Information Please Check Again');
              });
          }
        })
        .catch(error => {
          console.log('dasd', error);
          this.util.showErrorAlert("Something is Wrong with Card Information Please Check Again");
        });
    }
  }

  postNewCard(url: string, key: string, options: any) {
    console.log('post new card' + key);
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

    // temp.shift();

    this.http.post(url, temp.join("&"), option)
      .subscribe(res => {
        var data = res.json();
        console.log('ress', data);
        // localStorage.setItem("scuid", data.id);
        // localStorage.setItem("CC", "NO");
        this.router.navigate(['stripe'])
      }, error => {
        console.log('error ->', error);
      });
  }

  post(url: string, key: string, options: any) {
    console.log('post card');
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

    // temp.shift();

    this.http.post(url, temp.join("&"), option)
      .subscribe((ress: any) => {
        var c = ress.json();
        console.log('c', c);

        localStorage.setItem("scuid", c.id);
        localStorage.setItem("CC", "NO");
        this.router.navigate(['stripe'])
      }, error => {
        console.log('error', error);
      });
  }

}
