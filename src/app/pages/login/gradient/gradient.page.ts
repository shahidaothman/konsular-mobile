import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UtilService } from "../../../providers/util.service";
import { login } from "../../../interfaces/login";
@Component({
  selector: 'app-gradient',
  templateUrl: './gradient.page.html',
  styleUrls: ['./gradient.page.scss'],
})
export class GradientPage implements OnInit {
  login: login = { email: '', password: '' };
  submitted = false;
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  constructor(private util: UtilService) { }

  ngOnInit() {
  }
  onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.util.showToast('Successfully Login', 'success', 'bottom');
    }
  }
  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

}
