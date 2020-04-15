import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UtilService } from "../../../providers/util.service";
import { login } from "../../../interfaces/login";
import { Router } from '@angular/router';
@Component({
  selector: 'app-simple',
  templateUrl: './simple.page.html',
  styleUrls: ['./simple.page.scss'],
})
export class SimplePage implements OnInit {
  login: login = { email: '', password: '' };
  submitted = false;
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  constructor(private util: UtilService, private router: Router) { }

  ngOnInit() {
  }

  home() {
    console.log('simple login');
    this.router.navigate(['new-home'])
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
