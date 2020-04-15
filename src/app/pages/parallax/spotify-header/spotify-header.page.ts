import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-spotify-header',
  templateUrl: './spotify-header.page.html',
  styleUrls: ['./spotify-header.page.scss'],
})
export class SpotifyHeaderPage implements OnInit {
  posts = [];
  imageUrl: string = 'assets/images/photo_1.jpeg';
  main_title: boolean;
  constructor(private ngzone: NgZone) {
    for (let i = 0; i < 10; i++) {
      this.posts[i] = {
        text: 'Lorem ' + i,
        created_at: (i + 1),
      };
    }
  }
  ngAfterViewInit() {
    this.main_title = false;
  }

  ngOnInit() {
  }
  onScroll($event) {
    console.log('changes', $event)
    if ($event.detail.scrollTop >= 290) {
      console.log('if')
      let scroll = $event.detail.scrollTop;
      let opacidad = scroll / 450 - 150 / 450;

      var myElements = document.querySelectorAll(".animation");
      console.log('events', myElements)
      for (var i = 0; i < myElements.length; i++) {
        (myElements[i] as any).style.opacity = opacidad;
      }
      this.main_title = true;

    }
    else if ($event.detail.scrollTop <= 290) {
      console.log('else')
      this.main_title = false;

    }
  }

}
