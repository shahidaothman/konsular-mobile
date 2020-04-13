 
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
})
export class AlertsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  basic() {
    this.router.navigate(['basic-alert'])
  }
  form() {
    this.router.navigate(['form-alert']);
  }

}
