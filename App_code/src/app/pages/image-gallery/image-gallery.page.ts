 
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.page.html',
  styleUrls: ['./image-gallery.page.scss'],
})
export class ImageGalleryPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  layout1() {
    this.router.navigate(['gallery-layout1']);
  }
  layout2() {
    this.router.navigate(['gallery-layout2']);
  }
  layout3() {
    this.router.navigate(['gallery-layout3']);
  }
  layout4() {
    this.router.navigate(['gallery-layout4']);
  }

}
