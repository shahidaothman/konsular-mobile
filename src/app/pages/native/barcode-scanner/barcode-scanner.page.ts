import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { UtilService } from 'src/app/providers/util.service';

@Component({
  selector: 'app-barcode-scanner',
  templateUrl: './barcode-scanner.page.html',
  styleUrls: ['./barcode-scanner.page.scss'],
})
export class BarcodeScannerPage implements OnInit {

  constructor(
    private barcodeScanner: BarcodeScanner,
    private util: UtilService
  ) { }

  ngOnInit() {
  }
  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.util.showToast(barcodeData.text, 'success', 'bottom');
    }).catch(err => {
      console.log('Error', err);
    });
  }
  generate() {
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, 'https://play.google.com/store/apps/details?id=io.ionic4.app').then((data: any) => {
      console.log('generated', data);
    }).catch((error: any) => {
      console.log('error', error);
    })
  }
}
