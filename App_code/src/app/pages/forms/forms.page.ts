import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
})
export class FormsPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  example(id) {

    if (id === '1') {
      this.router.navigate(['forms-example1']);
      return true;
    }
    if (id === '2') {
      this.router.navigate(['forms-example2']);
      return true;
    }
    if (id === '3') {
      this.router.navigate(['forms-example3']);
      return true;
    }
    if (id === '4') {
      this.router.navigate(['forms-example4']);
      return true;
    }
  }
}
