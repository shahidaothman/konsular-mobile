import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { HidenavStretchheaderComponent } from 'src/app/directives/hidenav-stretchheader.component';
@Component({
  selector: 'app-stretch-header',
  templateUrl: './stretch-header.page.html',
  styleUrls: ['./stretch-header.page.scss'],
})
export class StretchHeaderPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  @ViewChild('title', { read: ElementRef }) title: ElementRef;
  @ViewChild(HidenavStretchheaderComponent) hidenav: HidenavStretchheaderComponent;
  constructor() { }



  ngOnInit() {
    this.hidenav.scroll.subscribe(res => {
      this.title.nativeElement.style.transform = 'translate3d(0, ' + (res - 50) + 'px, 0)';
    })
  }

  expand() {
    this.hidenav.toggle(300);
  }
}
