 
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.page.html',
  styleUrls: ['./parallax.page.scss'],
})
export class ParallaxPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  hideheaders() {
    this.router.navigate(['hide-headers']);
  }

  shrinking() {
    this.router.navigate(['headers']);
  }
  parallaxHeader() {
    this.router.navigate(['header-image'])
  }
  spotify() {
    this.router.navigate(['spotify-header']);
  }
  streachHeader() {
    this.router.navigate(['stretch-header']);
  }
}
