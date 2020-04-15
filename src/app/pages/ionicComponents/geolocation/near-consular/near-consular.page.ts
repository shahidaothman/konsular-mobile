import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UtilService } from 'src/app/providers/util.service';
import { Router } from '@angular/router';
declare var google;

@Component({
  selector: 'app-near-consular',
  templateUrl: './near-consular.page.html',
  styleUrls: ['./near-consular.page.scss'],
})
export class NearConsularPage implements OnInit {

  constructor(private util: UtilService, private router: Router) { }

  ngOnInit() {
  }
  nearestconsularmap() {
    console.log('near-consular-map');
    this.router.navigate(['near-consular-map'])
  }


}