import { ObjectAnyType } from '../../interfaces/app.interface';

/**
 * personal model
 * @export class PersonalModel
 */
export class PersonalModel {
  public readonly title: string;
  public readonly name: string;
  public readonly gender: number;
  public readonly nationality: string;
  public readonly street1: string;
  public readonly street2: string;
  public readonly street3: string;
  public readonly postcode: number;
  public readonly state: string | number;
  public readonly country: number;
  public readonly datePassportIssue: string;
  public readonly datePassportExpired: string;
  public readonly dob: string;
  public readonly phoneOffice: string;
  public readonly phoneNo: number;
  public readonly passportHolder: string;
  public readonly identityCardNew: number;
  public readonly identityCardOld: number;
  public readonly passportNo: number;
  constructor($: ObjectAnyType) {
    this.title = $.title;
    this.name = $.name.trim().toLowerCase();
    this.gender = $.gender;
    this.nationality = $.nationality;
    this.street1 = $.street1.trim().toLowerCase();
    this.street2 = $.street2.trim().toLowerCase();
    this.street3 = $.street3.trim().toLowerCase();
    this.postcode = $.postcode;
    this.passportNo = $.passportNo;
    this.dob = $.dob;
    this.datePassportIssue = $.datePassportIssue;
    this.datePassportExpired = $.datePassportExpired;
    this.state = $.state;
    this.country = $.country;
    this.passportHolder = $.passportHolder;
    this.identityCardNew = $.identityCardNew;
    this.identityCardOld = $.identityCardOld;
    this.phoneOffice = $.phoneOffice;
    this.phoneNo = $.phoneNo;
  }
}

/**
 * Employer Employment Model
 * @export class EmployerEmploymentModel
 */
export class EmployerEmploymentModel {
  public readonly occupation: string;
  public readonly employerName: string;
  public readonly street1: string;
  public readonly street2: string;
  public readonly street3: string;
  public readonly postcode: number;
  public readonly state: string;
  public readonly country: number;
  constructor($: ObjectAnyType) {
    this.occupation = $.occupation.trim().toLowerCase();
    this.employerName = $.employerName.trim().toLowerCase();
    this.street1 = $.street1.trim().toLowerCase();
    this.street2 = $.street2.trim().toLowerCase();
    this.street3 = $.street3.trim().toLowerCase();
    this.postcode = $.postcode;
    this.state = $.state.trim();
    this.country = $.country;
  }
}

/**
 * Employer Education Model
 * @export class EmployerEducationModel
 */
export class EmployerEducationModel {
  public readonly instituteName: string;
  public readonly startStudy: string;
  public readonly endStudy: string;
  public readonly street1: string;
  public readonly street2: string;
  public readonly street3: string;
  public readonly postcode: number;
  public readonly state: string;
  public readonly country: number;
  constructor($: ObjectAnyType) {
    this.instituteName = $.instituteName.trim();
    this.startStudy = $.startStudy.trim();
    this.endStudy = $.startStudy.trim();
    this.street1 = $.street1.trim();
    this.street2 = $.street2.trim();
    this.street3 = $.street3.trim();
    this.postcode = $.postcode;
    this.state = $.state.trim();
    this.country = $.country;
  }
}

/**
 * Purpose Model
 * @export class PurposeModel
 */
export class PurposeModel {
  public readonly purposeApplication: number;
  public readonly countryCertificate: number;
  public readonly others: string;

  constructor($: ObjectAnyType) {
    this.purposeApplication = $.purposeApplication;
    this.countryCertificate = $.countryCertificate;
    this.others = $.others.trim().toLowerCase();
  }
}
