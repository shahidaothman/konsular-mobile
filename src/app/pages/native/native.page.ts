 
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-native',
  templateUrl: './native.page.html',
  styleUrls: ['./native.page.scss'],
})
export class NativePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }



  scan() {
    this.router.navigate(['barcode-scanner']);
  }
  maps() {
    this.router.navigate(['maps']);
  }
  googelLogin() {
    this.router.navigate(['google-login']);
  }
  fbLogin() {
    this.router.navigate(['facebook-login']);
  }
}
