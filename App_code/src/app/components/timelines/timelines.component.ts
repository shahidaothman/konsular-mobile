import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.scss'],
})
export class TimelinesComponent implements OnInit {
  slideTimelineOpts = {
    effect: 'flip',
    autoHeight: true,
    speed: 1000,
    spaceBetween: 16,
    loop: true,
    slidesPerView: 4,
  };
  //https://github.com/kevincobain2000/ionic-timeline-v3/tree/master/src


  constructor() { }

  ngOnInit() { }

}
