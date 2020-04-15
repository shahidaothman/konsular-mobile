import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/providers/util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.page.html',
  styleUrls: ['./geolocation.page.scss'],
})
export class GeolocationPage implements OnInit {

  constructor(private util: UtilService, private router: Router) { }

  ngOnInit() {
  }
  nearestconsular() {
    console.log('near-consular');
    this.router.navigate(['near-consular'])
  }
  mylocation() {
    console.log('my location');
    this.router.navigate(['my-location'])
  }


}

