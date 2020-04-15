import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/providers/util.service';

@Component({
  selector: 'app-video-backgroud',
  templateUrl: './video-backgroud.page.html',
  styleUrls: ['./video-backgroud.page.scss'],
})
export class VideoBackgroudPage implements OnInit {
  email: any;
  password: any;
  constructor(
    private util: UtilService,
  ) {
    this.email = '';
    this.password = '';
  }

  ngOnInit() {
  }

  goHome() {
    if (this.email == '' || this.password == '') {
      this.util.showWarningAlert('All Fields are Required');
    } else {
      this.util.showToast('Login Success', 'success', 'bottom');
    }
  }

}
