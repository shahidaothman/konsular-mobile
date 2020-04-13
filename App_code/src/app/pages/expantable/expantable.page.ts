
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expantable',
  templateUrl: './expantable.page.html',
  styleUrls: ['./expantable.page.scss'],
})
export class ExpantablePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  example(id) {
    if (id == '1') {
      this.router.navigate(['expantable1']);
      return true;
    }
    if (id == '2') {
      this.router.navigate(['expantable2']);
      return true;
    }
    if (id == '3') {
      this.router.navigate(['expantable3']);
      return true;
    }
  }
}
