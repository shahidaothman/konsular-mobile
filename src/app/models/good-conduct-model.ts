import { ObjectAnyType } from '../interfaces/app.interface';

class GoodConductPersonalModel {
  title: string | null;
  name: string | null;
  nationality: number | null;
  gender: number | null;
  streetOne: string | null;
  streetTwo: string | null;
  streetThree: string | null;
  postCode: number | null;
  country: number | null;
  state: string | number | null;
  phoneOne: string | null;
  phoneTwo: string | null;
  iCardNew: string | null;
  iCardOld: string | null;
  passportNo: string | null;
  passportIssuedDate: string | null;
  passportHolder: string | null;
  passportExpireDate: string | null;
  dob: string | null;
  constructor($: ObjectAnyType) {
    this.title = $.title;
    this.name = $.name;
    this.nationality = $.nationality;
    this.gender = $.gender;
    this.streetOne = $.ci_street1;
    this.streetTwo = $.ci_street2;
    this.streetThree = $.ci_street3;
    this.postCode = $.ci_postcode;
    this.country = $.ci_country;
    this.state = $.ci_state;
    this.phoneOne = $.ci_phone_nom;
    this.phoneTwo = $.ci_phone_noh;
    this.iCardNew = $.ic_new;
    this.iCardOld = $.ic_old;
    this.passportNo = $.passport_no;
    this.passportIssuedDate = $.passport_issued_date;
    this.passportHolder = $.passport_holder;
    this.passportExpireDate = $.passport_expired_date;
    this.dob = $.birth_date;
  }
}

class GoodConductEmploymentModel {
  occupation: string | null;
  name: string | null;
  streetOne: string | null;
  streenTwo: string | null;
  streenThree: string | null;
  postCode: number | null;
  country: number | null;
  state: string | null;
  constructor($: ObjectAnyType) {
    this.occupation = $.ei_occupation;
    this.name = $.ei_employer;
    this.streetOne = $.ei_street1;
    this.streenTwo = $.ei_street2;
    this.streenThree = $.ei_street3;
    this.postCode = $.ei_postcode;
    this.country = $.ei_country;
    this.state = $.ei_state;
  }
}

class GoodConductHEducationModel {
  name: string | null;
  yearStart: string | null;
  yearEnd: string | null;
  streetOne: string | null;
  streetTwo: string | null;
  streetThree: string | null;
  postCode: number | null;
  country: number | null;
  state: string | null;
  constructor($: ObjectAnyType) {
    this.name = $.hei_institution;
    this.yearStart = $.hei_start_edu;
    this.yearEnd = $.hei_end_edu;
    this.streetOne = $.hei_street1;
    this.streetTwo = $.hei_street2;
    this.streetThree = $.hei_street3;
    this.postCode = $.hei_postcode;
    this.country = $.hei_country;
    this.state = $.hei_state;
  }
}

class GoodConductPurposeModel {
  purpose: number | null;
  other: string | null;
  docPath: string | null;
  country: number | null;
  constructor($: any) {
    if ($.app_purpose1) {
      this.purpose = 1;
    } else if ($.app_purpose2) {
      this.purpose = 2;
    } else if ($.app_purpose3) {
      this.purpose = 3;
    } else if ($.app_purpose4) {
      this.purpose = 4;
    } else if ($.app_purpose5) {
      this.purpose = 5;
    } else if ($.app_purpose6) {
      this.purpose = 6;
    }
    this.other = $.app_purpose6_other;
    if (typeof $.app_require_cert === 'string') {
      this.country = Number($.app_require_cert);
    } else {
      this.country = $.app_require_cert;
    }
    this.docPath = $.support_document1;
  }
}

class GoodConductPhotoModel {
  passportFrontPage: string | null;
  passportSizePhoto: string | null;
  constructor($: ObjectAnyType) {
    this.passportFrontPage = $.picture_url_passport;
    if ($.attachments != null && $.attachments.length > 0) {
      this.passportSizePhoto = $.attachments[0].url;
    } else {
      this.passportSizePhoto = null;
    }
  }
}

export class GoodConductModel {
  public personalDetails: GoodConductPersonalModel | null;
  public employmentDetails: GoodConductEmploymentModel | null;
  public hEducationDetails: GoodConductHEducationModel | null;
  public purposeDetails: GoodConductPurposeModel | null;
  public photoDetails: GoodConductPhotoModel | null;
  public employerType: string | null;
  constructor($: ObjectAnyType) {
    this.personalDetails = new GoodConductPersonalModel($);
    this.employmentDetails = new GoodConductEmploymentModel($);
    this.hEducationDetails = new GoodConductHEducationModel($);
    this.purposeDetails = new GoodConductPurposeModel($);
    this.photoDetails = new GoodConductPhotoModel($);
    this.employerType = $.emp_type;
  }
}
