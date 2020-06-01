import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UisService } from 'src/app/services/uis/uis.service';
import { MenuController } from '@ionic/angular';
import { ObjectAnyType } from 'src/app/interfaces/app.interface';
import { ApisService } from 'src/app/services/apis/apis.service';
import { Logger } from 'src/app/utils/app.util';
import { Router } from '@angular/router';

class ForgotPasswordModel {
  public readonly username: string;

  constructor($: ObjectAnyType) {
    this.username = $.email.trim();
  }
}
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  public form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private uisService: UisService,
    private menuCtr: MenuController,
    private apis: ApisService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required])],
    });
  }

  public ionViewWillEnter() {
    this.menuCtr.swipeGesture(false).finally();
  }

  /**
   * getter for email
   */
  public get email() {
    return this.form.get('email');
  }

  public async onForgotPassword() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const loader = await this.uisService.setLoader();
    await loader.present();

    const form = new ForgotPasswordModel(this.form.value);

    this.apis
      .forgotPassword({
        email: form.username,
      })
      .subscribe(
        (res) => {
          this.uisService.presentAlert(res.success, 'Success');
          this.router.navigateByUrl('/login').finally(() => loader.dismiss());
        },
        (err) => {
          Logger.error(err);
          this.uisService
            .presentAlert(err.error, 'Error')
            .finally(() => loader.dismiss());
        }
      );
  }

  public ionViewWillLeave() {
    this.menuCtr.swipeGesture(true).finally();
  }
}
