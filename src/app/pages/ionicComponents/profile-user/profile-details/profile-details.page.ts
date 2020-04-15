import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.page.html',
  styleUrls: ['./profile-details.page.scss'],
})
export class ProfileDetailsPage implements OnInit {
  photo: any = 'assets/avatars/1.jpg';
  cover: any = 'assets/images/bg.png';
  constructor(private router: Router) { }

  ngOnInit() { }
  updateImage() {
    console.log('update');
  }
  updateDetails() {
    console.log('Edit');
    this.router.navigate(['profile-user'])
  }
}


