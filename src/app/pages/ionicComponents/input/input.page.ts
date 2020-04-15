import { Component, OnInit } from '@angular/core';
import { UtilService } from "../../../providers/util.service";
@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  fname: string;

  user = {
    email: '',
    password: ''
  };

  constructor(
    private util: UtilService
  ) { }

  ngOnInit() {
  }

  onSubmitTemplate() {
    console.log('onSubmitTemplate()');
    console.log(this.user);
    this.util.showToast('submitted', 'success', 'bottom');
  }

}
