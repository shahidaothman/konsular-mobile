import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consular-assistance',
  templateUrl: './consular-assistance.page.html',
  styleUrls: ['./consular-assistance.page.scss'],
})
export class ConsularAssistancePage implements OnInit {
  segmentValue = 'Nearest';

  constructor() {}

  ngOnInit() {}
  segmentChanged(event) {
    this.segmentValue = event.target.value;
    // console.log(this.segmentValue)
  }
}
