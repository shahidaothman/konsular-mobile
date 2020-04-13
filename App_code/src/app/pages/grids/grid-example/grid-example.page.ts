import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grid-example',
  templateUrl: './grid-example.page.html',
  styleUrls: ['./grid-example.page.scss'],
})
export class GridExamplePage implements OnInit {
  id: any = '';
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 
      console.log('id ', this.id);
    })
  }

}
