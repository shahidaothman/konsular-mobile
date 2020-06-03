import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  confirmPasswordValidator,
  patternValidator,
} from '../../validators/app.validator';
import { UisService } from 'src/app/services/uis/uis.service';
import { ApisService } from 'src/app/services/apis/apis.service';
import { Logger } from 'src/app/utils/app.util';
import { ObjectAnyType } from 'src/app/interfaces/app.interface';
import { MenuController } from '@ionic/angular';
import { GlobalService } from 'src/app/services/global/global.service';
import {
  ALPHA_NUM_REGX,
  NUM_REGX,
  STR_REGX,
} from '../../services/constants/constants.service';

class RegisterModel {
  public readonly firstName: string;
  public readonly lastName: string;
  public readonly passport: number;
  public readonly password: string;
  public readonly email: string;
  public readonly identificationType: number;
  constructor($: ObjectAnyType) {
    this.firstName = $.firstName.trim().toLowerCase();
    this.lastName = $.lastName.trim().toLowerCase();
    this.passport = $.passport;
    this.password = $.password.trim();
    this.email = $.email.trim().toLowerCase();
    this.identificationType = $.identificationType;
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public form: FormGroup;
  public isLoading = true;
  public isClicked = false;
  passwordType = 'password';
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private uisService: UisService,
    private apisService: ApisService,
    private menuCtr: MenuController,
    private globalService: GlobalService
  ) {}

  ngOnInit() {
    this.form = this.fb.group(
      {
        firstName: [
          '',
          Validators.compose([
            patternValidator(STR_REGX),
            Validators.minLength(2),
            Validators.maxLength(25),
            Validators.required,
          ]),
        ],
        lastName: [
          '',
          Validators.compose([
            patternValidator(STR_REGX),
            Validators.minLength(2),
            Validators.maxLength(25),
            Validators.required,
          ]),
        ],
        identificationType: ['', Validators.compose([Validators.required])],
        passport: [{ value: '', disabled: true }, Validators.compose([])],
        password: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(12),
            Validators.maxLength(125),
          ]),
        ],
        confirmPassword: ['', Validators.compose([Validators.required])],
        email: [
          '',
          Validators.compose([Validators.required, Validators.email]),
        ],
      },
      { validators: [confirmPasswordValidator] }
    );

    // dynamically update passport/myKAd field
    this.form.controls.identificationType.valueChanges.subscribe(($) => {
      if ($ === 'mkad' || $ === 'passport') {
        this.form.controls.passport.enable();
      }
      
      if ($ === 'mkad') {
        console.log($);
        this.form.controls.passport.clearValidators();
        this.form.controls.passport.setValidators(
          Validators.compose([
            patternValidator(NUM_REGX),
            Validators.min(100),
            Validators.max(999999999999),
            Validators.required,
          ])
        );
      }

      if ($ === 'passport') {
        this.form.controls.passport.clearValidators();
        this.form.controls.passport.setValidators(
          Validators.compose([
            patternValidator(ALPHA_NUM_REGX),
            Validators.minLength(3),
            Validators.maxLength(12),
            Validators.required,
          ])
        );
      }
      this.form.controls.passport.updateValueAndValidity();
    });
  }

  public ionViewWillEnter() {
    this.menuCtr.swipeGesture(false).finally();
  }

  /**
   * getters START
   */
  public get firstName() {
    return this.form.get('firstName');
  }

  public get lastName() {
    return this.form.get('lastName');
  }

  public get identificationType() {
    return this.form.get('identificationType');
  }

  public get passport() {
    return this.form.get('passport');
  }

  public get password() {
    return this.form.get('password');
  }

  public get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  public get email() {
    return this.form.get('email');
  }
  // Getters END

  /**
   * on register
   * @description user to process user submit action during registration
   * @method onRegister
   */
  public async onRegister() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const loader = await this.uisService.setLoader();
    loader.present().finally();
    this.isClicked = true;

    const form = new RegisterModel(Object.assign({}, this.form.value));

    this.apisService
      .register({
        first_name: form.firstName,
        last_name: form.lastName,
        email: form.email,
        password: form.password,
        no_passport: form.passport,
        country_passport: 'IND',
        identity_fiction_type: form.identificationType,
      })
      .subscribe(
        (res) => {
          this.isClicked = false;
          this.uisService.presentToast(
            'Your account has been registered Successfully.',
            'success'
          );

          // * set state
          this.globalService.setAuthorization = true;
          this.globalService.setToken = res.success.token;

          this.getUserDetails().finally(() => loader.dismiss());
        },
        (err: any) => {
          this.isClicked = false;
          Logger.error(err);
          this.uisService.presentAlert(err.error, 'Failed').finally(() => {
            loader.dismiss();
          });
        }
      );
  }

  /**
   * get user details
   * @method getUserDetails
   */
  private async getUserDetails() {
    const loader = await this.uisService.setLoader(
      'Please wait. We are processing your request.'
    );
    await loader.present().finally();

    this.apisService.userDetails.subscribe(
      (res) => {
        this.isLoading = false;
        // set user data
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
