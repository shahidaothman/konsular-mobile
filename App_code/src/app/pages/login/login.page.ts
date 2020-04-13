 
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  simple() {
    console.log('simple login');
    this.router.navigate(['simple'])
  }
  gradient() {
    console.log('gradient login');
    this.router.navigate(['gradient'])
  }
  video() {
    console.log('video background ');
    this.router.navigate(['video-backgroud'])
  }
  image() {
    console.log('image slider background ');
    this.router.navigate(['slide-backgroud'])
  }
  advanced() {
    console.log('advanced login');
    this.router.navigate(['advanced'])
  }
}
