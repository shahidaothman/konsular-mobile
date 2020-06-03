import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/services/apis/apis.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  AppError,
  Country,
  ObjectAnyType,
  Purpose,
  States,
} from 'src/app/interfaces/app.interface';
import { UisService } from 'src/app/services/uis/uis.service';
import { Logger } from 'src/app/utils/app.util';
import {
  IdentityModel,
  PersonalModel,
  VisitedCountryModel,
} from './registration-malaysian';
import { GlobalService } from '../../services/global/global.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { utc } from 'moment';
import {
  ADDR_REGX, ALPHA_NUM_REGX,
  GOOD_CONDUCT_TYPE,
  MOB_REGX,
  NUM_REGX,
  STR_REGX
} from "../../services/constants/constants.service";
import { patternValidator } from '../../validators/app.validator';
import { forkJoin } from 'rxjs';

interface List {
  id: number;
  name: string;
}

@Component({
  selector: 'app-registration-malaysian',
  templateUrl: './registration-malaysian.page.html',
  styleUrls: ['./registration-malaysian.page.scss'],
})
export class RegistrationMalaysianPage implements OnInit {
  public readonly PERSONAL = 'Personal';
  public readonly IDENTITY = 'Identity';
  public readonly VISITED = 'Visited';
  public readonly PHOTO = 'Photo';
  public segmentValue = this.PERSONAL;
  public visited = false;
  public purposes: Purpose[] = new Array();
  public isFileRequiredError = false;
  public personalForm: FormGroup;
  public identityForm: FormGroup;
  public visitedForm: FormGroup;
  public file: File;
  public countries: Country[] = new Array();
  public relations: List[] = new Array();
  public states: States[] = new Array();
  public isImgNotAvailable: boolean;
  public formId = 0;
  public maxDate = utc().add(10, 'years').toISOString();
  public currentDate = utc().toISOString();
  constructor(
    private apis: ApisService,
    private fb: FormBuilder,
    private uisService: UisService,
    private globalService: GlobalService,
    private activatedRoute: ActivatedRoute,
    private navController: NavController
  ) {}

  public ngOnInit() {
    this.initPersonalForm();
    this.initIdentityForm();
    this.initVisitedForm();
    this.getInitData().finally();
    this.formId = this.activatedRoute.snapshot.params.formId || this.formId;
    if (this.formId) {
      this.getRegistrationData().finally();
    }
  }

  public async segmentChanged(event: any) {
    if (this.formId === 0 && event.target.value !== this.PERSONAL) {
      await this.uisService.presentAlert(
        'Please fill personal form activate this tab.',
        'Warning'
      );
      return;
    }
    this.segmentValue = event.target.value;
  }

  public show() {
    this.visited = !this.visited;
  }

  public activate(tab: string) {
    this.segmentValue = tab;
  }

  /**
   * use to get the registration data and patch into form
   * @method getRegistrationData
   */
  public async getRegistrationData() {
    const loader = await this.uisService.setLoader();
    await loader.present();

    this.apis.getMalaysianRegistrationById({ id: this.formId }).subscribe(
      async ($: ObjectAnyType) => {
        $ = $.data;
        this.isImgNotAvailable = $.photo ? false : true;

        // patch personal form
        this.personalForm.patchValue({
          title: $.title,
          fullName: $.name,
          nationality: $.vc_nationality,
          street1: $.vc_street1,
          street2: $.vc_street2,
          street3: $.vc_street3,
          country: $.vc_country,
          postcode: $.vc_postcode,
          city: $.vc_city,
          phoneNo: $.vc_phone_nom,
        });

        // patch identity form
        this.identityForm.patchValue({
          identityCardNew: $.ic_new,
          identityCardOld: $.ic_old,
          passportNo: $.passport_no,
          datePassportExpired: $.passport_expired_date,
        });

        // patch visited Form
        const vc = $.kin[0];
        const ctr = $.country[0];
        this.visitedForm.patchValue({
          street1: vc.street1,
          street2: vc.street2,
          street3: vc.street3,
          postcode: vc.postcode,
          state: vc.state,
          other: ctr.state_others,
          arrivalDate: ctr.date_arrival,
          departureDate: ctr.date_expected_return1,
          beneficiaryName: vc.name,
          relationshipBeneficiary: vc.relation,
          beneficiaryPhoneNo: vc.phone_nom,
          purposeApplication: ctr.reason.split(','),
          visitedCountry: +vc.country,
        });
      },
      async ($: AppError) => {
        Logger.error($);
        await this.uisService.presentAlert('Please try Again.');
        await loader.dismiss();
        this.navController.back();
      }
    );
  }

  /**
   * on submit personal
   * @method onSubmitPersonal
   * @description use to submit personal form
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
      .registerMalaysianPersonalDetails({
        title: form.title,
        name: form.fullName,
        vc_nationality: form.nationality,
        vc_street1: form.street1,
        vc_street2: form.street2,
        vc_street3: form.street3,
        vc_country: form.country,
        vc_postcode: form.postcode,
        vc_city: form.city,
        id: this.formId,
        vc_phone_nom: form.phoneNo,
      })
      .subscribe(
        async ($: ObjectAnyType) => {
          this.activate(this.IDENTITY);
          this.formId = $.success.id;
          await this.uisService.presentToast($.success.message, 'success');
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
   * @description use to submit identity form
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
      .registerMalaysianIdentityDetails({
        ic_new: form.identityCardNew,
        ic_old: form.identityCardOld,
        passport_no: form.passportNo,
        passport_expired_date: form.datePassportExpired,
        id: this.formId,
      })
      .subscribe(
        async ($: ObjectAnyType) => {
          this.activate(this.VISITED);
          await this.uisService.presentToast($.success.message, 'success');
          await loader.dismiss();
        },
        async ($: AppError) => {
          Logger.error($);
          await this.uisService.presentToast($.error, 'warning');
          await loader.dismiss();
        }
      );
  }

  /**
   * on submit visited country
   * @method onSubmitVisitedCountry
   * @description use to submit visited country form
   */
  public async onSubmitVisitedCountry() {
    if (this.visitedForm.invalid) {
      this.visitedForm.markAllAsTouched();
      return;
    }
    const loader = await this.uisService.setLoader();
    await loader.present();
    const form = new VisitedCountryModel(this.visitedForm.value);
    this.apis
      .registerMalaysianVisitedCountryDetails({
        street1: form.street1,
        street2: form.street2,
        street3: form.street3,
        postcode: form.postcode,
        state: form.state,
        state_others: form.other,
        date_arrival: form.arrivalDate,
        date_expected_return1: form.departureDate,
        name: form.beneficiaryName,
        relation: form.relationshipBeneficiary,
        phone_nom: form.beneficiaryPhoneNo,
        reason: form.purposeApplication,
        country_id: form.visitedCountry,
        id: this.formId,
      })
      .subscribe(
        async ($: ObjectAnyType) => {
          this.activate(this.PHOTO);
          await this.uisService.presentAlert($.success.message, 'success');
          await loader.dismiss();
        },
        async ($: AppError) => {
          Logger.error($);
          await this.uisService.presentToast($.error, 'warning');
          await loader.dismiss();
        }
      );
  }

  /**
   * on submit photo
   * @method onSubmitPhoto
   * @param type submit type
   * @description use to submit photo on server
   */
  public async onSubmitPhoto(type: GOOD_CONDUCT_TYPE) {
    if (this.isImgNotAvailable && !this.file) {
      this.isFileRequiredError = true;
      return;
    }
    const loader = await this.uisService.setLoader();
    await loader.present();
    this.apis
      .registerMalaysianPhotoUpload({
        id: this.formId,
        picture_url: this.file,
        filing_status_id: type,
      })
      .subscribe(
        async ($: ObjectAnyType) => {
          await this.uisService.presentToast($.success.message, 'success');
          if (type === GOOD_CONDUCT_TYPE.SUBMIT)
            await this.navController.back();
          await loader.dismiss();
        },
        async ($: AppError) => {
          Logger.error($);
          await this.uisService.presentToast($.error, 'warning');
          await loader.dismiss();
        }
      );
  }

  /**
   * get country list
   * @method getCountriesList
   */
  public async getInitData() {
    const loader = await this.uisService.setLoader();
    await loader.present();
    forkJoin([
      this.apis.getCountries,
      this.apis.getRelation,
      this.apis.getPurposes,
      this.apis.getStates,
    ]).subscribe(
      async ($: ObjectAnyType) => {
        this.countries = $[0].success.country;
        this.relations = $[1].data;
        this.purposes = $[2].data;
        this.states = $[3].success.state;
        await loader.dismiss();
      },
      async ($: AppError) => {
        Logger.error($);
        await this.uisService.presentAlert($.error, 'Error');
        await loader.dismiss();
      }
    );
  }

  public onChange(evt: any) {
    if (!this.globalService.verifyFileSize(evt)) {
      evt.target.file = [];
      return;
    }
    this.file = evt.target.files[0];
    this.isFileRequiredError = false;
  }

  /**
   * personal form easy access
   */
  public psl(field: string) {
    return this.personalForm.controls[field];
  }

  /**
   * identity form easy access
   */
  public ity(field: string) {
    return this.identityForm.controls[field];
  }

  /**
   * visited form easy access
   */
  public vst(field: string) {
    return this.visitedForm.controls[field];
  }

  /**
   * use to select a option
   * @param c1 first item
   * @param c2 second item
   * @method compareFn
   */
  public compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1 == c2 : c1 == c2;
  }

  /**
   * initiate personal form
   * @method initPersonalForm
   */
  private initPersonalForm() {
    this.personalForm = this.fb.group({
      title: ['', [Validators.required]],
      fullName: [
        '',
        Validators.compose([
          Validators.required,
          patternValidator(STR_REGX),
          Validators.minLength(2),
          Validators.maxLength(25),
        ]),
      ],
      nationality: ['', [Validators.required]],
      phoneNo: [
        '',
        Validators.compose([patternValidator(MOB_REGX), Validators.required]),
      ],
      street1: [
        '',
        Validators.compose([
          Validators.required,
          patternValidator(ADDR_REGX),
          Validators.minLength(2),
          Validators.maxLength(25),
        ]),
      ],
      street2: [
        '',
        Validators.compose([
          patternValidator(ADDR_REGX),
          Validators.minLength(2),
          Validators.maxLength(25),
        ]),
      ],
      street3: [
        '',
        Validators.compose([
          patternValidator(ADDR_REGX),
          Validators.minLength(2),
          Validators.maxLength(25),
        ]),
      ],
      postcode: [
        '',
        Validators.compose([
          Validators.required,
          Validators.min(10000),
          Validators.max(999999),
        ]),
      ],
      country: ['', [Validators.required]],
      city: [
        '',
        Validators.compose([
          Validators.required,
          patternValidator(STR_REGX),
          Validators.minLength(2),
          Validators.maxLength(25),
        ]),
      ],
    });
  }

  /**
   * initiate identity form
   * @method initIdentityForm
   */
  private initIdentityForm() {
    this.identityForm = this.fb.group({
      identityCardNew: [
        '',
        Validators.compose([
          Validators.required,
          patternValidator(NUM_REGX),
          Validators.min(100),
          Validators.max(999999999999),
        ]),
      ],
      identityCardOld: [
        '',
        Validators.compose([
          patternValidator(NUM_REGX),
          Validators.min(100),
          Validators.max(999999999999),
        ]),
      ],
      passportNo: [
        '',
        Validators.compose([
          Validators.required,
          patternValidator(ALPHA_NUM_REGX),
          Validators.minLength(3),
          Validators.maxLength(12),
        ]),
      ],
      datePassportExpired: ['', [Validators.required]],
    });
  }

  /**
   * initiate visited form
   * @method initVisitedForm
   */
  private initVisitedForm() {
    this.visitedForm = this.fb.group({
      visitedCountry: ['', [Validators.required]],
      street1: [
        '',
        Validators.compose([
          patternValidator(ADDR_REGX),
          Validators.minLength(2),
          Validators.maxLength(25),
        ]),
      ],
      street2: [
        '',
        Validators.compose([
          patternValidator(ADDR_REGX),
          Validators.minLength(2),
          Validators.maxLength(25),
        ]),
      ],
      street3: [
        '',
        Validators.compose([
          patternValidator(ADDR_REGX),
          Validators.minLength(2),
          Validators.maxLength(25),
        ]),
      ],
      postcode: [
        '',
        Validators.compose([
          Validators.required,
          Validators.min(10000),
          Validators.max(999999),
        ]),
      ],
      state: [
        '',
        Validators.compose([
          Validators.required,
          patternValidator(STR_REGX),
          Validators.minLength(2),
          Validators.maxLength(25),
        ]),
      ],
      beneficiaryName: [
        '',
        Validators.compose([
          Validators.required,
          patternValidator(STR_REGX),
          Validators.minLength(2),
          Validators.maxLength(25),
        ]),
      ],
      beneficiaryPhoneNo: [
        '',
        Validators.compose([patternValidator(MOB_REGX), Validators.required]),
      ],
      relationshipBeneficiary: ['', Validators.compose([Validators.required])],
      purposeApplication: ['', [Validators.required]],
      other: [
        '',
        Validators.compose([
          patternValidator(STR_REGX),
          Validators.minLength(2),
          Validators.maxLength(25),
        ]),
      ],
      arrivalDate: ['', [Validators.required]],
      departureDate: ['', [Validators.required]],
    });

    // dynamically add/remove validators
    this.visitedForm.controls.purposeApplication.valueChanges.subscribe(($) => {
      if ($ == 6) {
        this.visitedForm.controls.other.setValidators(Validators.required);
      } else {
        this.visitedForm.controls.other.clearValidators();
      }
      this.visitedForm.controls.other.updateValueAndValidity();
    });
  }
}
