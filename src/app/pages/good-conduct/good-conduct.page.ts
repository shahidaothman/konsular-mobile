import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApisService } from 'src/app/services/apis/apis.service';
import {
  AppError,
  ObjectAnyType,
  Purpose,
  States,
  User,
} from 'src/app/interfaces/app.interface';
import { UisService } from 'src/app/services/uis/uis.service';
import { Logger } from 'src/app/utils/app.util';
import { GoodConductModel } from 'src/app/models/good-conduct-model';
import { forkJoin, Subscription } from 'rxjs';
import {
  ADDR_REGX,
  GOOD_CONDUCT_TYPE,
  MOB_REGX,
  NUM_REGX,
  STR_REGX
} from "src/app/services/constants/constants.service";
import {
  EmployerEducationModel,
  EmployerEmploymentModel,
  PersonalModel,
  PurposeModel,
} from './good-conduct';
import { GlobalService } from '../../services/global/global.service';
import * as moment from 'moment';
import { patternValidator } from '../../validators/app.validator';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-good-conduct',
  templateUrl: './good-conduct.page.html',
  styleUrls: ['./good-conduct.page.scss'],
})
export class GoodConductPage implements OnInit, OnDestroy {
  public readonly PERSONAL = 'Personal';
  public readonly EMPLOYER = 'Employer';
  public readonly PURPOSE = 'Purpose';
  public readonly PHOTO = 'Photo';
  public segmentValue = this.PERSONAL;
  public employment = false;
  public education = false;
  public listLoaded = false;
  public isFormFiled = false;
  public formId = 0;
  public readonly genders = [
    { id: 1, value: 'Male' },
    { id: 2, value: 'Female' },
  ];
  public purposes: Purpose[] = new Array();
  public oldDoc: string = null;
  public oldPassportFront: string = null;
  public oldPassportPhoto: string = null;
  public countries: any[] = [];
  public personalForm: FormGroup;
  public purposeForm: FormGroup;
  public employerForm: FormGroup;
  public empEmpForm: FormGroup;
  public empEduForm: FormGroup;
  public passportSizePhoto: File;
  public passportFrontPhoto: File;
  public document: File;
  public goodConductData: GoodConductModel;
  public isDocumentRequiredError = false;
  public isPassportSizeRequiredError = false;
  public isPassportFrontRequiredError = false;
  public readonly maxDate = moment().add(20, 'years').toISOString();
  public readonly currentDate = moment().utc().toISOString();
  public states: States[] = new Array();
  private user: User;
  private subs = new Subscription();
  constructor(
    private fb: FormBuilder,
    private apis: ApisService,
    private uisService: UisService,
    private globalService: GlobalService,
    private navController: NavController
  ) {}

  public ngOnInit() {
    this.subs.add(this.globalService.getUser.subscribe(($) => (this.user = $)));
    this.getConductList().finally();
    this.getPurpose().finally();
    this.getInitData().finally();
  }

  public segmentChanged(event: any) {
    this.segmentValue = event.target.value;
  }

  public show() {
    this.employment = !this.employment;
  }

  public toggleEducation() {
    this.education = !this.education;
  }

  public activate(tab: string) {
    this.segmentValue = tab;
  }

  /**
   * get purpose data for good conduct
   * @method getPurpose
   */
  public async getPurpose() {
    const loader = await this.uisService.setLoader();
    await loader.present();
    this.apis.getPurposes.subscribe(
      async ($: ObjectAnyType) => {
        this.purposes = $.data;
        await loader.dismiss();
      },
      async ($: AppError) => {
        Logger.error($);
        await this.uisService.presentAlert($.error, 'Error');
        await loader.dismiss();
      }
    );
  }

  /**
   * get countries
   * @method getInitData
   */
  private async getInitData() {
    const loader = await this.uisService.setLoader();
    await loader.present();
    forkJoin([this.apis.getCountries, this.apis.getStates]).subscribe(
      async ($: ObjectAnyType) => {
        this.countries = $[0].success.country;
        this.states = $[1].success.state;
        await loader.dismiss();
      },
      async ($: AppError) => {
        Logger.error($);
        await this.uisService.presentAlert($.error, 'Error');
        await loader.dismiss();
      }
    );
  }

  public compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1 == c2 : c1 == c2;
  }

  /**
   * get conduct list
   * @method getConductList
   */
  public async getConductList() {
    const loader = await this.uisService.setLoader();
    await loader.present();

    this.apis.getConductList().subscribe(
      async ($: ObjectAnyType) => {
        if ($.data.length > 0) {
          this.isFormFiled = true;
          this.formId = $.data[0].id;
          this.goodConductData = new GoodConductModel($.data[0]);
          this.oldPassportFront = this.goodConductData.photoDetails.passportFrontPage;
          this.oldPassportPhoto = this.goodConductData.photoDetails.passportSizePhoto;
        } else {
          this.goodConductData = new GoodConductModel({});
          this.isFormFiled = false;
        }

        this.initPersonalForm();
        this.initEmployerForm();
        this.initEmpEmp();
        this.initEmpEdu();
        this.initPurposeForm();
        this.listLoaded = true;
        setTimeout(async () => {
          await loader.dismiss();
        }, 1000);
      },
      async ($: AppError) => {
        Logger.error($);
        await this.uisService.presentToast($.error, 'warning');
        await loader.dismiss();
      }
    );
  }

  /**
   * on submit personal
   * @method onSubmitPersonal
   * @description use to submit good conduct form
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
      .goodConductPersonalDetails({
        title: form.title,
        name: form.name,
        gender: form.gender,
        nationality: form.nationality,
        ci_street1: form.street1,
        ci_street2: form.street2,
        ci_street3: form.street3,
        ci_postcode: form.postcode,
        ci_country: form.country,
        ci_state: form.state,
        ci_phone_noh: form.phoneOffice,
        ci_phone_nom: form.phoneNo,
        ic_new: form.identityCardNew,
        ic_old: form.identityCardOld,
        passport_no: form.passportNo,
        passport_holder: form.passportHolder,
        passport_expired_date: form.datePassportExpired,
        passport_issued_date: form.datePassportIssue,
        birth_date: form.dob,
        id: this.formId,
      })
      .subscribe(
        async ($: ObjectAnyType) => {
          this.activate(this.EMPLOYER);
          await this.uisService.presentToast($.success.message, 'success');
          await this.getConductList();
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
   * on submit employment employer
   * @method onSubmitEmpEmp
   * @description use to submit employer form
   */
  public async onSubmitEmpEmp() {
    if (this.empEmpForm.invalid) {
      this.empEmpForm.markAllAsTouched();
      return;
    }
    const loader = await this.uisService.setLoader();
    await loader.present();
    const form = new EmployerEmploymentModel(this.empEmpForm.value);
    this.apis
      .goodConductEmployerDetails({
        id: this.formId,
        emp_type: this.employerForm.value.empType,
        ei_employer: form.employerName,
        ei_street1: form.street1,
        ei_street2: form.street2,
        ei_street3: form.street3,
        ei_postcode: form.postcode,
        ei_country: form.country,
        ei_state: form.state,
        ei_district: '',
        ei_occupation: form.occupation,
      })
      .subscribe(
        async ($: ObjectAnyType) => {
          await this.uisService.presentToast($.success.message, 'success');
          await loader.dismiss();
          await this.getConductList();
          this.activate(this.PURPOSE);
        },
        async ($: AppError) => {
          Logger.error($);
          await this.uisService.presentToast($.error, 'warning');
          await loader.dismiss();
        }
      );
  }

  /**
   * on submit employment eduction
   * @method onSubmitEmpEdu
   * @description use to submit eduction form
   */
  public async onSubmitEmpEdu() {
    if (this.empEduForm.invalid) {
      this.empEduForm.markAllAsTouched();
      return;
    }
    const loader = await this.uisService.setLoader();
    await loader.present();
    const form = new EmployerEducationModel(this.empEduForm.value);
    this.apis
      .goodConductEmployerEducationDetails({
        id: this.formId,
        emp_type: this.employerForm.value.empType,
        hei_institution: form.instituteName,
        hei_street1: form.street1,
        hei_street2: form.street2,
        hei_street3: form.street3,
        hei_postcode: form.postcode,
        hei_country: form.country,
        hei_state: form.state,
        hei_start_edu: form.startStudy,
        hei_end_edu: form.endStudy,
      })
      .subscribe(
        async ($: ObjectAnyType) => {
          await this.uisService.presentToast($.success.message, 'success');
          await loader.dismiss();
          await this.getConductList();
          this.activate(this.PURPOSE);
        },
        async ($: AppError) => {
          Logger.error($);
          await this.uisService.presentToast($.error, 'warning');
          await loader.dismiss();
        }
      );
  }

  /**
   * on submit purpose
   * @method onSubmitPurpose
   * @description use to submit purpose data
   */
  public async onSubmitPurpose() {
    if (this.oldDoc === null && !this.document) {
      this.isDocumentRequiredError = true;
      this.purposeForm.markAllAsTouched();
      return;
    }
    // validate only form
    if (this.purposeForm.invalid) {
      this.purposeForm.markAllAsTouched();
      return;
    }
    const loader = await this.uisService.setLoader();
    await loader.present();
    const form = new PurposeModel(this.purposeForm.value);
    this.apis
      .goodConductPurposeDetails({
        id: this.formId,
        app_purpose6: form.purposeApplication,
        app_require_cert: form.countryCertificate,
        app_purpose6_other: form.others,
        support_document1: this.document,
      })
      .subscribe(
        async (res: ObjectAnyType) => {
          this.activate(this.PHOTO);
          await this.uisService.presentToast(res.success.message, 'success');
          await loader.dismiss();
          await this.getConductList();
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
   * @description use to update passport front photo and passport size photo
   */
  public async onSubmitPhoto(type: GOOD_CONDUCT_TYPE) {
    // if type is submit then validate hole form
    if (type === GOOD_CONDUCT_TYPE.SUBMIT) {
      // check for personal
      if (this.personalForm.invalid) {
        this.personalForm.markAllAsTouched();
        this.activate(this.PERSONAL);
        await this.uisService.presentAlert(
          'Please fill all the required field in Personal Tab. '
        );
        return;
      }

      // check for employer
      if (this.employerForm.controls.empType.value === 'employment') {
        if (this.empEmpForm.invalid) {
          this.activate(this.EMPLOYER);
          await this.uisService.presentAlert(
            'Please fill all the required field in Employer Tab. (Employment)'
          );
          return;
        }
      } else if (this.employerForm.controls.empType.value === 'education') {
        if (this.empEduForm.invalid) {
          this.activate(this.EMPLOYER);
          await this.uisService.presentAlert(
            'Please fill all the required field in Employer Tab. (Education)'
          );
          return;
        }
      } else {
        this.activate(this.EMPLOYER);
        await this.uisService.presentAlert(
          'Please fill all the required field in Employer Tab.'
        );
        return;
      }

      // check for purpose tab
      if (this.purposeForm.invalid) {
        this.purposeForm.markAllAsTouched();
        this.activate(this.PURPOSE);
        await this.uisService.presentAlert(
          'Please fill all the required field in Purpose Tab. '
        );
        return;
      }
    }

    /**
     * file validation
     */
    let isFileError = false;
    // passport front images validation
    if (this.oldPassportFront === null && !this.passportFrontPhoto) {
      this.isPassportFrontRequiredError = true;
      isFileError = true;
    }

    // passport size images validation
    if (this.oldPassportPhoto === null && !this.passportSizePhoto) {
      this.isPassportSizeRequiredError = true;
      isFileError = true;
    }

    // check flag and if error then return
    if (isFileError) return;

    const loader = await this.uisService.setLoader();
    await loader.present();

    this.apis
      .goodConductPhotoDetails({
        id: this.formId,
        picture_url_passport: this.passportFrontPhoto,
        file: this.passportSizePhoto,
        filing_status_id: type,
      })
      .subscribe(
        async ($: ObjectAnyType) => {
          await this.uisService.presentToast($.success.message, 'success');
          await loader.dismiss();
          await this.getConductList();
          this.navController.back();
        },
        async ($: AppError) => {
          Logger.error($);
          await this.uisService.presentToast($.error, 'warning');
          await loader.dismiss();
        }
      );
  }

  /**
   * on change listener for passport size photo
   * @param evt file ref
   * @method onPassportSizePhotoChange
   */
  public onPassportSizePhotoChange(evt: any) {
    if (!this.globalService.verifyFileSize(evt)) {
      this.isPassportFrontRequiredError = true;
      evt.target.file = [];
      return;
    }
    this.isPassportFrontRequiredError = false;
    this.passportSizePhoto = evt.target.files[0];
  }

  /**
   * on change listener for passport front photo
   * @param evt file ref
   * @method onPassportFrontPhotoChange
   */
  public onPassportFrontPhotoChange(evt: any) {
    if (!this.globalService.verifyFileSize(evt)) {
      this.isPassportSizeRequiredError = true;
      evt.target.file = [];
      return;
    }
    this.isPassportSizeRequiredError = false;
    this.passportFrontPhoto = evt.target.files[0];
  }

  /**
   * on change listener for purpose docs
   * @param evt file ref
   * @method onDocumentChange
   */
  public onDocumentChange(evt: any) {
    this.isDocumentRequiredError = false;
    this.document = evt.target.files[0];
  }

  /**
   * getters for personal form
   */
  public get title() {
    return this.personalForm.controls.title;
  }

  public get name() {
    return this.personalForm.controls.name;
  }

  public get nationality() {
    return this.personalForm.controls.nationality;
  }

  public get gender() {
    return this.personalForm.controls.gender;
  }

  public get street1() {
    return this.personalForm.controls.street1;
  }

  public get street2() {
    return this.personalForm.controls.street2;
  }

  public get street3() {
    return this.personalForm.controls.street3;
  }

  public get postcode() {
    return this.personalForm.controls.postcode;
  }

  public get country() {
    return this.personalForm.controls.country;
  }

  public get state() {
    return this.personalForm.controls.state;
  }

  public get phoneOffice() {
    return this.personalForm.controls.phoneOffice;
  }

  public get phoneNo() {
    return this.personalForm.controls.phoneNo;
  }

  public get identityCardNew() {
    return this.personalForm.controls.identityCardNew;
  }

  public get identityCardOld() {
    return this.personalForm.controls.identityCardOld;
  }

  public get passportNo() {
    return this.personalForm.controls.passportNo;
  }

  public get datePassportIssue() {
    return this.personalForm.controls.datePassportIssue;
  }

  public get passportHolder() {
    return this.personalForm.controls.passportHolder;
  }

  public get datePassportExpired() {
    return this.personalForm.controls.datePassportExpired;
  }

  public get dob() {
    return this.personalForm.controls.dob;
  }

  /**
   * for employer employment form
   */
  public empEmp(control: string) {
    return this.empEmpForm.controls[control];
  }

  /**
   * getters for employer education form
   */
  public empEdu(control: string) {
    return this.empEduForm.controls[control];
  }

  /**
   * getters for purpose form
   */

  public get purposeApplication() {
    return this.purposeForm.controls.purposeApplication;
  }

  public get others() {
    return this.purposeForm.controls.others;
  }

  public get countryCertificate() {
    return this.purposeForm.controls.countryCertificate;
  }

  /**
   * init personal form
   * @method initPersonalForm
   * @description use to init personal form
   */
  private initPersonalForm() {
    const $ = this.goodConductData.personalDetails || ({} as ObjectAnyType);
    this.personalForm = this.fb.group({
      title: [$.title ? $.title : '', [Validators.required]],
      name: [
        $.name ? $.name : this.user.name,
        Validators.compose([
          Validators.required,
          patternValidator(STR_REGX),
          Validators.minLength(2),
          Validators.maxLength(25),
        ]),
      ],
      gender: [
        { value: $.gender ? $.gender : '', disabled: true },
        [Validators.required],
      ],
      nationality: [$.nationality ? $.nationality : '', [Validators.required]],
      street1: [
        $.streetOne ? $.streetOne : '',
        Validators.compose([
          Validators.required,
          patternValidator(ADDR_REGX),
          Validators.minLength(2),
          Validators.maxLength(25),
        ]),
      ],
      street2: [
        $.streetTwo ? $.streetTwo : '',
        Validators.compose([
          patternValidator(ADDR_REGX),
          Validators.minLength(2),
          Validators.maxLength(25),
        ]),
      ],
      street3: [
        $.streetThree ? $.streetThree : '',
        Validators.compose([
          patternValidator(ADDR_REGX),
          Validators.minLength(2),
          Validators.maxLength(25),
        ]),
      ],
      postcode: [
        $.postCode ? $.postCode : '',
        Validators.compose([
          Validators.required,
          Validators.min(10000),
          Validators.max(999999),
        ]),
      ],
      state: [
        $.state ? $.state : '',
        Validators.compose([
          Validators.required,
          patternValidator(STR_REGX),
          Validators.minLength(2),
          Validators.maxLength(25),
        ]),
      ],
      country: [$.country ? $.country : '', [Validators.required]],
      identityCardNew: [
        $.iCardNew ? $.iCardNew : '',
        Validators.compose([
          Validators.required,
          patternValidator(NUM_REGX),
          Validators.min(100),
          Validators.max(999999999999999),
        ]),
      ],
      identityCardOld: [
        $.iCardOld ? $.iCardOld : '',
        Validators.compose([
          patternValidator(NUM_REGX),
          Validators.min(100),
          Validators.max(999999999999999),
        ]),
      ],
      datePassportIssue: [
        $.passportIssuedDate ? $.passportIssuedDate : '',
        [Validators.required],
      ],
      datePassportExpired: [
        $.passportExpireDate ? $.passportExpireDate : '',
        [Validators.required],
      ],
      passportNo: [
        $.passportNo ? $.passportNo : '',
        Validators.compose([
          Validators.required,
          patternValidator(NUM_REGX),
          Validators.min(100),
          Validators.max(999999999999999),
        ]),
      ],
      passportHolder: [
        $.passportHolder ? $.passportHolder : '',
        [Validators.required],
      ],
      phoneOffice: [
        $.phoneTwo ? $.phoneTwo : '',
        Validators.compose([patternValidator(MOB_REGX)]),
      ],
      phoneNo: [
        $.phoneOne ? $.phoneOne : '',
        Validators.compose([Validators.required, patternValidator(MOB_REGX)]),
      ],
      dob: [$.dob ? $.dob : '', [Validators.required]],
    });

    /**
     * update gender based upon title
     */
    this.personalForm.controls.title.valueChanges.subscribe(($: string) => {
      if ($.indexOf('mr') !== -1) {
        this.personalForm.controls.gender.patchValue(1);
      } else {
        this.personalForm.controls.gender.patchValue(2);
      }
    });
  }

  /**
   * init Employer form
   * @method initEmployerForm
   * @description use to initiate employer form
   */
  private initEmployerForm() {
    this.employerForm = this.fb.group({
      empType: [
        this.goodConductData.employerType
          ? this.goodConductData.employerType
          : null,
        [Validators.required],
      ],
    });
  }

  /**
   * init Employer employment form
   * @method initEmpEmp
   * @description use to initiate employer employment form
   */
  private initEmpEmp() {
    const $ = this.goodConductData.employmentDetails || ({} as ObjectAnyType);
    this.empEmpForm = this.fb.group({
      occupation: [
        $.occupation ? $.occupation : '',
        Validators.compose([
          Validators.required,
          patternValidator(STR_REGX),
          Validators.minLength(2),
          Validators.maxLength(25),
        ]),
      ],
      employerName: [
        $.name ? $.name : '',
        Validators.compose([
          Validators.required,
          patternValidator(STR_REGX),
          Validators.minLength(2),
          Validators.maxLength(25),
        ]),
      ],
      street1: [
        $.streetOne ? $.streetOne : '',
        Validators.compose([
          Validators.required,
          patternValidator(ADDR_REGX),
          Validators.minLength(2),
          Validators.maxLength(25),
        ]),
      ],
      street2: [
        $.streenTwo ? $.streenTwo : '',
        Validators.compose([
          patternValidator(ADDR_REGX),
          Validators.minLength(2),
          Validators.maxLength(25),
        ]),
      ],
      street3: [
        $.streenThree ? $.streenThree : '',
        Validators.compose([
          patternValidator(ADDR_REGX),
          Validators.minLength(2),
          Validators.maxLength(25),
        ]),
      ],
      postcode: [
        $.postCode ? $.postCode : '',
        Validators.compose([
          Validators.required,
          Validators.min(10000),
          Validators.max(999999),
        ]),
      ],
      country: [$.country ? $.country : '', [Validators.required]],
      state: [
        $.state ? $.state : '',
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
   * init Employer education form
   * @method initEmpEdu
   * @description use to initiate employer education form
   */
  private initEmpEdu() {
    const $ = this.goodConductData.hEducationDetails || ({} as ObjectAnyType);
    this.empEduForm = this.fb.group({
      instituteName: [
        $.name ? $.name : '',
        Validators.compose([
          Validators.required,
          patternValidator(STR_REGX),
          Validators.minLength(2),
          Validators.maxLength(25),
        ]),
      ],
      startStudy: [$.yearStart ? $.yearStart : '', [Validators.required]],
      endStudy: [$.yearEnd ? $.yearEnd : '', [Validators.required]],
      street1: [
        $.streetOne ? $.streetOne : '',
        Validators.compose([
          Validators.required,
          patternValidator(ADDR_REGX ),
          Validators.minLength(2),
          Validators.maxLength(25),
        ]),
      ],
      street2: [
        $.streenTwo ? $.streenTwo : '',
        Validators.compose([
          patternValidator(ADDR_REGX),
          Validators.minLength(2),
          Validators.maxLength(25),
        ]),
      ],
      street3: [
        $.streenThree ? $.streenThree : '',
        Validators.compose([
          patternValidator(ADDR_REGX),
          Validators.minLength(2),
          Validators.maxLength(25),
        ]),
      ],
      postcode: [
        $.postCode ? $.postCode : '',
        Validators.compose([
          Validators.required,
          Validators.min(10000),
          Validators.max(999999),
        ]),
      ],
      country: [$.country ? $.country : '', [Validators.required]],
      state: [
        $.state ? $.state : '',
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
   * init Purpose form
   * @method initPurposeForm
   * @description use to initiate purpose form
   */
  private initPurposeForm() {
    const $ = this.goodConductData.purposeDetails || ({} as ObjectAnyType);

    if ($.docPath) {
      this.oldDoc = $.docPath;
    }

    this.purposeForm = this.fb.group({
      purposeApplication: [$.purpose ? $.purpose : '', [Validators.required]],
      others: [
        $.other ? $.other : '',
        Validators.compose([
          patternValidator(STR_REGX),
          Validators.minLength(2),
          Validators.maxLength(25),
        ]),
      ],
      countryCertificate: [$.country ? $.country : '', [Validators.required]],
    });

    // manages dynamic validation of others field.
    this.purposeForm.get('purposeApplication').valueChanges.subscribe(($) => {
      const others = this.purposeForm.get('others');
      if ($ === 6) {
        others.setValidators([Validators.required]);
      } else {
        others.clearValidators();
      }
      others.updateValueAndValidity();
    });
  }

  public ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
