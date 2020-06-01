import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApisService } from 'src/app/services/apis/apis.service';
import { Logger } from 'src/app/utils/app.util';
import { ObjectAnyType } from 'src/app/interfaces/app.interface';
import { GlobalService } from 'src/app/services/global/global.service';
import { MenuController } from '@ionic/angular';
import { UisService } from 'src/app/services/uis/uis.service';
import { NUM_REGX } from '../../services/constants/constants.service';

class LoginModel {
  public readonly username: number;
  public readonly password: string;
  constructor($: ObjectAnyType) {
    this.username = $.username;
    this.password = $.password.trim();
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public isClicked = false;
  public isLoading = true;
  public form: FormGroup;
  passwordType = 'password';
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private uisService: UisService,
    private apisService: ApisService,
    private globalService: GlobalService,
    private menuCtr: MenuController
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(NUM_REGX),
          Validators.min(100),
          Validators.max(999999999999999),
        ]),
      ],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  public ionViewWillEnter() {
    this.menuCtr.swipeGesture(false).finally();
  }

  public get username() {
    return this.form.get('username');
  }

  public get password() {
    return this.form.get('password');
  }

  public async onLogin() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const loader = await this.uisService.setLoader();
    await loader.present();
    this.isClicked = true;

    // format the data
    const form = new LoginModel(this.form.value);

    this.apisService.login(form).subscribe(
      (res) => {
        this.isClicked = false;
        loader.dismiss();
        // * set state
        this.globalService.setAuthorization = true;
        this.globalService.setToken = res.success.token;

        this.getUserDetails();
      },
      (err) => {
        this.isClicked = false;
        loader.dismiss();
        this.uisService.presentAlert(
          err.error || 'Something went wrong. try Again.',
          'Failed'
        );
        Logger.error(err);
      }
    );
  }

  private async getUserDetails() {
    const loader = await this.uisService.setLoader(
      'Please wait. We are processing your request.'
    );
    await loader.present();

    this.apisService.userDetails.subscribe(
      (res) => {
        this.isLoading = false;
        this.globalService.setUser = res[`success`];
        this.router.navigateByUrl('/tabs/menu').finally(() => loader.dismiss());
      },
      (err) => {
        this.isLoading = false;
        this.uisService
          .presentAlert(
            'Unable to process your request please try again.',
            'Error'
          )
          .finally(() => loader.dismiss());
        Logger.error(err);
      }
    );
  }

  public ionViewWillLeave() {
    this.menuCtr.swipeGesture(true).finally();
  }
}
