import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/providers/util.service';

@Component({
  selector: 'app-forms-example3',
  templateUrl: './forms-example3.page.html',
  styleUrls: ['./forms-example3.page.scss'],
})
export class FormsExample3Page implements OnInit {
  rate = '2';
  constructor(
    private util: UtilService
  ) { }
  ngOnInit() {
  }
  onRatingChange(event) {
    console.log('event', event)
  }
  sendMessage() {
    this.util.showToast('Message sent', 'success', 'bottom');
  }
}
