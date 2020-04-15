import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  superHeros = ['Aquaman', 'Superman', 'Batman', 'Flash', 'Mujer Maravilla'];
  constructor() { }

  ngOnInit() {
  }

  reorder(event) {
    const itemMover = this.superHeros.splice(event.detail.from, 1)[0];
    this.superHeros.splice(event.detail.to, 0, itemMover);
    event.detail.complete();
  }
  onClick() {
    console.log(this.superHeros);
  }

}
