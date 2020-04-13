import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grids',
  templateUrl: './grids.page.html',
  styleUrls: ['./grids.page.scss'],
})
export class GridsPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  example(id) {
    console.log('id', id);
    this.router.navigate(['grid-example', id])
  }
}
