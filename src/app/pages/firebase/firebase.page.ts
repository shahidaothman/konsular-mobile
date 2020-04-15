 
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.page.html',
  styleUrls: ['./firebase.page.scss'],
})
export class FirebasePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  firebaseLogin() {
    this.router.navigate(['firebase-auth']);
  }
  firebaseSignup() {
    this.router.navigate(['firebase-sign-up']);
  }
  firebaseList() {
    this.router.navigate(['firebaselist']);
  }
  firebaseimageUpload() {
    this.router.navigate(['fireimage']);
  }
}
