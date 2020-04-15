import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/providers/util.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.page.html',
  styleUrls: ['./landing-page.page.scss'],
})
export class LandingPagePage implements OnInit {

  constructor(private util: UtilService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    console.log('simple login');
    this.router.navigate(['simple'])
  }
  register() {
    console.log('simple login');
    this.router.navigate(['register-user'])
  }


}
