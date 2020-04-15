import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/providers/util.service';

@Component({
  selector: 'app-forms-example1',
  templateUrl: './forms-example1.page.html',
  styleUrls: ['./forms-example1.page.scss'],
})
export class FormsExample1Page implements OnInit {

  constructor(
    private util: UtilService
  ) { }

  ngOnInit() {
  }
  sendMessage() {
    this.util.showToast('Message sent', 'success', 'bottom');
  }
}
