import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/providers/util.service';

@Component({
  selector: 'app-forms-example2',
  templateUrl: './forms-example2.page.html',
  styleUrls: ['./forms-example2.page.scss'],
})
export class FormsExample2Page implements OnInit {
  rate = '2';
  constructor(
    private util: UtilService
  ) { }

  ngOnInit() {
  }
  onRatingChange(event) {
    console.log('event', event)
  }
  ratnow() {
    this.util.showToast('Thanks For Ratting & your valuable time', 'success', 'topp');
  }
}
