import { Component, OnInit } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { UtilService } from 'src/app/providers/util.service';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.page.html',
  styleUrls: ['./paypal.page.scss'],
})
export class PaypalPage implements OnInit {

  constructor(
    private payPal: PayPal,
    private util: UtilService
  ) {

  }
  paymentAmount: string = '3.33';
  currency: string = 'USD';
  currencyIcon: string = '$';


  ngOnInit() {
  }
  payWithPaypal() {
    this.payPal.init({
      PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
      PayPalEnvironmentSandbox: 'AQ9rF4VKkHkfnS1IzUDTliE201-NxOTzdVuVbBhEY1rPp4gQbbWuo7X5Dve8fdDMHp6tPr5JMnT8J9iI'
    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        // Only needed if you get an "Internal Service Error" after PayPal login!
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {
        let payment = new PayPalPayment(this.paymentAmount, this.currency, 'Description', 'sale');
        this.payPal.renderSinglePaymentUI(payment).then((res) => {
          console.log(res);
          // Successfully paid
        }, (error: any) => {
          console.log('error', error);
          this.util.showToast(error, 'danger', 'bottom');
          // Error or render dialog closed without being successful
        });
      }, (error: any) => {
        console.log('error', error);
        this.util.showToast(error, 'danger', 'bottom');
        // Error in configuration
      });
    }, (error: any) => {
      console.log('error', error);
      this.util.showToast(error, 'danger', 'bottom');
      // Error in initialization, maybe PayPal isn't supported or something else
    });
  }

}
