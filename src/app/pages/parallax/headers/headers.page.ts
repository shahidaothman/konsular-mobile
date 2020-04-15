import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.page.html',
  styleUrls: ['./headers.page.scss'],
})
export class HeadersPage implements OnInit {

  public selectedSegment: string = 'about';

  segmentChanged(event: any) {
    console.log('Segment changed', event);
  }

  ngOnInit() {
  }

}
