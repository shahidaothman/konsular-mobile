import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApisService } from 'src/app/services/apis/apis.service';
import { Subscription } from 'rxjs';
import {
  User,
  ObjectAnyType,
  AppError,
} from 'src/app/interfaces/app.interface';
import { UisService } from 'src/app/services/uis/uis.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { Logger } from 'src/app/utils/app.util';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { CertificateModel, IdentityModel, PersonalModel } from './profile';
import {
  ALPHA_NUM_REGX,
  NUM_REGX,
  STR_REGX,
} from '../../services/constants/constants.service';
import { patternValidator } from '../../validators/app.validator';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit, OnDestroy {
  public readonly PERSONAL = 'Personal';
  public readonly IDENTITY = 'Identity';
  public readonly BIRTH = 'Birth';
  public readonly PHOTO = 'Photo';
  public segmentValue = this.PERSONAL;
  public file: File;
  public places: string[] = new Array();
  public countries: Array<any> = new Array();
  public personalForm: FormGroup;
  public identityForm: FormGroup;
  public certificateForm: FormGroup;
  public user: User;
  public subs = new Subscription();
  public todayDate: string;
  public readonly maxExpireDate = moment().add('10', 'year').toISOString();
  public isFileRequiredError = false;
  public readonly currentDate = moment().utc().toISOString();
  constructor(
    private fb: FormBuilder,
    private apis: ApisService,
    private uisService: UisService,
    private globalService: GlobalService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getCountry().finally();
    this.getPlaces().finally();
    this.subs.add(this.globalService.getUser.subscribe(($) => (this.user = $)));
    this.initPersonalForm();
    this.initIdentityForm();
    this.initCertificateForm();

    // min date for date  of birth
    const now = new Date();
    now.setFullYear(now.getFullYear());
    this.todayDate = now.toISOString();
  }

  public segmentChanged(event: any) {
    this.segmentValue = event.target.value;
  }

  public onChange(evt: any) {
    if (!this.globalService.verifyFileSize(evt)) {
      evt.target.file = [];
      return;
    }
    this.file = evt.target.files[0];
    this.isFileRequiredError = false;
  }

  public activate(tab: string) {
    this.segmentValue = tab;
  }

  /**
   * get country list
   * @method getCountry
   */
  public async getCountry() {
    const loader = await this.uisService.setLoader();
    await loader.present();
    this.apis.getCountries.subscribe(
      (res) => {
        this.countries = res.success.country;
        loader.dismiss();
      },
      (err) => {
        Logger.error(err);
        this.uisService
          .presentAlert('Unable to fetch the data. please try again.', 'Error')
          .finally(() => loader.dismiss());
      }
    );
  }

  /**
   * get places list
   * @method getCountry
   */
  public async getPlaces() {
    const loader = await this.uisService.setLoader();
    await loader.present();
    this.apis.getPlaces.subscribe(
      ($) => {
        this.places = $.data;
        loader.dismiss();
      },
      (err) => {
        Logger.error(err);
        this.uisService
          .presentAlert('Unable to fetch the data. please try again.', 'Error')
          .finally(() => loader.dismiss());
      }
    );
  }

  /**
   * on submit personal
   * @method onSubmitPersonal
   * @description use to update personal data
   */
  public async onSubmitPersonal() {
    if (this.personalForm.invalid) {
      this.personalForm.markAllAsTouched();
      return;
    }
    const loader = await this.uisService.setLoader();
    await loader.present();
    const form = new PersonalModel(this.personalForm.value);
    this.apis
      .updatePersonalDetails({
        title: form.title,
        name: form.name,
        gender: form.gender,
        nationality: form.nationality,
        father_name: form.fatherName,
        mother_name: form.motherName,
      })
      .subscribe(
        (res) => {
          // updating the user details that are stored locally.
          this.user.name = form.name;
          this.user.user_profile_data = {
            ...this.user.user_profile_data,
            title: form.title,
            gender: form.gender,
            nationality: form.nationality,
            father_name: form.fatherName,
            mother_name: form.motherName,
          };
          this.globalService.setUser = this.user;
          this.activate(this.BIRTH);
          this.uisService
            .presentToast(res.success, 'success')
            .finally(() => loader.dismiss());
        },
        (err) => {
          Logger.error(err);
          this.uisService
            .presentToast(err.error, 'warning')
            .finally(() => loader.dismiss());
        }
      );
  }

  /**
   * on submit certificate
   * @method onSubmitCertificate
   * @description use to update certificate info
   */
  public async onSubmitCertificate() {
    if (this.certificateForm.invalid) {
      this.certificateForm.markAllAsTouched();
      return;
    }
    const loader = await this.uisService.setLoader();
    await loader.present();
    const form = new CertificateModel(this.certificateForm.value);
    this.apis
      .updateUserBirthDetail({
        b_certificate_no: form.birthCertificateNo,
        b_certificate_place: form.placeOfIssue,
        b_certificate_date: form.dateOfIssue.slice(0, 10),
      })
      .subscribe(
        async (res: ObjectAnyType) => {
          // updating the user details that are stored locally.
          this.user.user_profile_data = {
            ...this.user.user_profile_data,
            b_certificate_no: form.birthCertificateNo,
            b_certificate_date: form.dateOfIssue,
            b_certificate_place: form.placeOfIssue,
          };
          this.globalService.setUser = this.user;
          this.activate(this.IDENTITY);
          await this.uisService.presentToast(res.success, 'success');
          await loader.dismiss();
        },
        async (err: AppError) => {
          Logger.error(err);
          await this.uisService.presentToast(err.error, 'warning');
          await loader.dismiss();
        }
      );
  }

  /**
   * on submit identity
   * @method onSubmitIdentity
   * @description use to update identity info
   */
  public async onSubmitIdentity() {
    if (this.identityForm.invalid) {
      this.identityForm.markAllAsTouched();
      return;
    }
    const loader = await this.uisService.setLoader();
    await loader.present();
    const form = new IdentityModel(this.identityForm.value);
    this.apis
      .updateUserIdentityDetail({
        identity_card_no_new: form.identityCardNoNew,
        identity_card_no_old: form.identityCardNoOld,
        place_mkad_issue: form.placeMyKadIssue,
        passport_issue_date: form.passportIssueDate.slice(0, 10),
        holder_of_passport: form.passportHolder,
        passport_no: form.passportNo,
        passport_expired_date: form.passportExpiredDate.slice(0, 10),
        dob: form.dob.slice(0, 10),
      })
      .subscribe(
        async (res: ObjectAnyType) => {
          this.activate(this.PHOTO);
          // update local data
          this.user.user_profile_data.identity_card_no_new =
            form.identityCardNoNew;
          this.user.user_profile_data.identity_card_no_old =
            form.identityCardNoOld;
          this.user.user_profile_data.place_mkad_issue = form.placeMyKadIssue;
          this.user.user_profile_data.passport_issue_date =
            form.passportIssueDate;
          this.user.user_profile_data.holder_of_passport = form.passportHolder;
          this.user.user_foreigner.no_passport = form.passportNo;
          this.user.user_profile_data.passport_expired_date =
            form.passportExpiredDate;
          this.user.user_profile_data.dob = form.dob;
          // set globally
          this.globalService.setUser = this.user;
          await this.uisService.presentToast(res.success, 'success');
          await loader.dismiss();
        },
        async (err: AppError) => {
          Logger.error(err);
          await this.uisService.presentToast(err.error, 'warning');
          await loader.dismiss();
        }
      );
  }

  /**
   * on submit photo
   * @description use to upload the images
   * @method onSubmitPhoto
   */
  public async onSubmitPhoto() {
    if (!this.file) {
      this.isFileRequiredError = true;
      return;
    }
    const loader = await this.uisService.setLoader();
    await loader.present();
    this.apis
      .updateUserPhotoDetail({
        user_image: this.file,
      })
      .subscribe(
        async ($: ObjectAnyType) => {
          await this.uisService.presentToast($.success.message, 'success');
          this.user.user_profile_data.user_image =
            $.success.user_profile_data.user_image;
          this.globalService.setUser = this.user;
          await this.router.navigateByUrl('tabs/menu/user-detail');
          await loader.dismiss();
        },
        async ($) => {
          Logger.error($);
          await this.uisService.presentToast($.error, 'warning');
          await loader.dismiss();
        }
      );
  }

  /**
   * init personal form
   * @method initPersonalForm
   */
  private initPersonalForm() {
    const $ = this.user.user_profile_data || ({} as ObjectAnyType);
    this.personalForm = this.fb.group({
      title: [$ && $.title ? $.title : '', [Validators.required]],
      name: [
        this.user.name,
        [
          Validators.required,
          patternValidator(STR_REGX),
          Validators.minLength(2),
          Validators.maxLength(25),
        ],
      ],
      gender: [$ && $.gender ? $.gender : '', [Validators.required]],
      nationality: [
        $ && $.nationality ? $.nationality : '',
        [Validators.required],
      ],
      fatherName: [
        $ && $.father_name ? $.father_name : '',
        [
          Validators.required,
          patternValidator(STR_REGX),
          Validators.minLength(2),
          Validators.maxLength(25),
        ],
      ],
      motherName: [
        $ && $.mother_name ? $.mother_name : '',
        [
          Validators.required,
          patternValidator(STR_REGX),
          Validators.minLength(2),
          Validators.maxLength(25),
        ],
      ],
    });

    /**
     * update gender based upon title
     */
    this.personalForm.controls.title.valueChanges.subscribe(($: string) => {
      if ($.indexOf('mr') !== -1) {
        this.personalForm.controls.gender.patchValue('male');
      } else {
        this.personalForm.controls.gender.patchValue('female');
      }
    });
  }

  /**
   * init certificate form
   * @method initCertificateForm
   */
  private initCertificateForm() {
    const $ = this.user.user_profile_data || ({} as ObjectAnyType);

    this.certificateForm = this.fb.group({
      birthCertificateNo: [
        $.b_certificate_no ? $.b_certificate_no : '',
        [
          Validators.required,
          patternValidator(ALPHA_NUM_REGX),
          Validators.min(100),
          Validators.max(999999999999999),
        ],
      ],
      placeOfIssue: [
        $.b_certificate_place ? $.b_certificate_place : '',
        [Validators.required],
      ],
      dateOfIssue: [
        $.b_certificate_date ? $.b_certificate_date : '',
        [Validators.required],
      ],
    });

    // reset passportExpiredDate if passportIssueDate changed
    this.identityForm
      .get('passportIssueDate')
      .valueChanges.subscribe(($) =>
        this.identityForm.get('passportExpiredDate').patchValue(null)
      );
  }

  /**
   * init identity form
   * @method initIdentityForm
   */
  private initIdentityForm() {
    const $ = this.user.user_profile_data || ({} as ObjectAnyType);

    this.identityForm = this.fb.group({
      identityCardNoNew: [
        $.identity_card_no_new ? $.identity_card_no_new : '',
        Validators.compose([
          Validators.required,
          patternValidator(NUM_REGX),
          Validators.min(100),
          Validators.max(999999999999999),
        ]),
      ],
      identityCardNoOld: [
        $.identity_card_no_old ? $.identity_card_no_old : '',
        Validators.compose([
          patternValidator(NUM_REGX),
          Validators.min(100),
          Validators.max(999999999999999),
        ]),
      ],
      placeMyKadIssue: [
        $.place_mkad_issue ? $.place_mkad_issue : '',
        [Validators.required],
      ],
      passportNo: [
        this.user.user_foreigner.no_passport
          ? this.user.user_foreigner.no_passport
          : '',
        Validators.compose([
          Validators.required,
          patternValidator(NUM_REGX),
          Validators.min(100),
          Validators.max(999999999999999),
        ]),
      ],
      passportIssueDate: [
        $.passport_issue_date ? $.passport_issue_date : '',
        [Validators.required],
      ],
      passportHolder: [
        $.holder_of_passport ? $.holder_of_passport : '',
        [Validators.required],
      ],
      passportExpiredDate: [
        $.passport_expired_date ? $.passport_expired_date : '',
        [Validators.required],
      ],
      dob: [$.dob ? $.dob : '', [Validators.required]],
    });
  }

  public compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1 === c2 : c1 === c2;
  }

  /**
   * getter for personal form
   */
  public get motherName() {
    return this.personalForm.controls.motherName;
  }

  public get fatherName() {
    return this.personalForm.controls.fatherName;
  }

  public get nationality() {
    return this.personalForm.controls.nationality;
  }

  public get gender() {
    return this.personalForm.controls.gender;
  }

  public get title() {
    return this.personalForm.controls.title;
  }

  public get name() {
    return this.personalForm.controls.name;
  }

  /**
   * getter for certificate form
   */
  public get birthCertificateNo() {
    return this.certificateForm.controls.birthCertificateNo;
  }

  public get placeOfIssue() {
    return this.certificateForm.controls.placeOfIssue;
  }

  public get dateOfIssue() {
    return this.certificateForm.controls.dateOfIssue;
  }

  /**
   * getter for identity form
   */
  public get identityCardNoNew() {
    return this.identityForm.controls.identityCardNoNew;
  }

  public get identityCardNoOld() {
    return this.identityForm.controls.identityCardNoOld;
  }

  public get placeMyKadIssue() {
    return this.identityForm.controls.placeMyKadIssue;
  }

  public get passportNo() {
    return this.identityForm.controls.passportNo;
  }

  public get passportIssueDate() {
    return this.identityForm.controls.passportIssueDate;
  }

  public get passportHolder() {
    return this.identityForm.controls.passportHolder;
  }

  public get passportExpiredDate() {
    return this.identityForm.controls.passportExpiredDate;
  }

  public get dob() {
    return this.identityForm.controls.dob;
  }

  public ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
