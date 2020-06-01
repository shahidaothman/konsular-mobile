import { ObjectAnyType } from '../../interfaces/app.interface';

/**
 * personal model
 * @class PersonalModel
 * @description use to format user input of person
 */
export class PersonalModel {
  public readonly title: string;
  public readonly name: string;
  public readonly gender: string;
  public readonly nationality: string;
  public readonly motherName: string;
  public readonly fatherName: string;
  constructor($: ObjectAnyType) {
    this.title = $.title;
    this.name = $.name.trim().toLowerCase();
    this.gender = $.gender;
    this.nationality = $.nationality;
    this.fatherName = $.fatherName.trim().toLowerCase();
    this.motherName = $.motherName.trim().toLowerCase();
  }
}

/**
 * certificate model
 * @class CertificateModel
 * @description use to format certificate data
 */
export class CertificateModel {
  public readonly birthCertificateNo: number;
  public readonly placeOfIssue: string;
  public readonly dateOfIssue: string;
  constructor($: ObjectAnyType) {
    this.birthCertificateNo = $.birthCertificateNo;
    this.placeOfIssue = $.placeOfIssue;
    this.dateOfIssue = $.dateOfIssue;
  }
}

/**
 * identity model
 * @class IdentityModel
 * @description use to format identity form data
 */
export class IdentityModel {
  public readonly identityCardNoNew: number;
  public readonly identityCardNoOld: number;
  public readonly placeMyKadIssue: string;
  public readonly passportNo: number;
  public readonly passportIssueDate: string;
  public readonly passportHolder: string;
  public readonly passportExpiredDate: string;
  public readonly dob: string;
  constructor($: ObjectAnyType) {
    this.identityCardNoNew = $.identityCardNoNew;
    this.identityCardNoOld = $.identityCardNoOld;
    this.placeMyKadIssue = $.placeMyKadIssue;
    this.passportNo = $.passportNo;
    this.passportIssueDate = $.passportIssueDate;
    this.passportHolder = $.passportHolder;
    this.passportExpiredDate = $.passportExpiredDate;
    this.dob = $.dob;
  }
}
