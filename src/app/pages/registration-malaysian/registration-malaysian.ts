import { ObjectAnyType } from '../../interfaces/app.interface';

/**
 * model to format the personal data
 * @class PersonalModel
 */
export class PersonalModel {
  public readonly title: string;
  public readonly fullName: string;
  public readonly nationality: number;
  public readonly postcode: number;
  public readonly phoneNo: number;
  public readonly street1: string;
  public readonly street2: string | null;
  public readonly street3: string | null;
  public readonly city: string;
  public readonly country: number;
  constructor($: ObjectAnyType) {
    this.phoneNo = $.phoneNo;
    this.postcode = $.postcode;
    this.title = $.title;
    this.country = $.country;
    this.nationality = $.nationality;
    this.fullName = $.fullName.trim().toLowerCase();
    this.street1 = $.street1.trim().toLowerCase();
    this.street2 = $.street2 ? $.street2.trim().toLowerCase() : '';
    this.street3 = $.street3 ? $.street3.trim().toLowerCase() : '';
    this.city = $.city.trim().toLowerCase();
  }
}

/**
 * model to format the identity data
 * @class IdentityModel
 */
export class IdentityModel {
  public readonly identityCardNew: number;
  public readonly identityCardOld: number;
  public readonly passportNo: number;
  public readonly datePassportExpired: string;
  constructor($: ObjectAnyType) {
    this.identityCardNew = $.identityCardNew;
    this.identityCardOld = $.identityCardOld;
    this.passportNo = $.passportNo;
    this.datePassportExpired = $.datePassportExpired.trim().toLowerCase();
  }
}

/**
 * model to format the visited County Data data
 * @class VisitedCountryModel
 */
export class VisitedCountryModel {
  public readonly visitedCountry: number;
  public readonly street1: string;
  public readonly street2: string | null;
  public readonly street3: string | null;
  public readonly postcode: number;
  public readonly state: string;
  public readonly beneficiaryName: string;
  public readonly relationshipBeneficiary: number;
  public readonly beneficiaryPhoneNo: number;
  public readonly purposeApplication: string[];
  public readonly other: string;
  public readonly arrivalDate: string;
  public readonly departureDate: string;
  constructor($: ObjectAnyType) {
    console.log($);
    this.visitedCountry = $.visitedCountry;
    this.street1 = $.street1.trim().toLowerCase();
    this.street2 = $.street2 ? $.street2.trim().toLowerCase() : '';
    this.street3 = $.street2 ? $.street3.trim().toLowerCase() : '';
    this.postcode = $.postcode;
    this.state = $.state.trim();
    this.beneficiaryName = $.beneficiaryName.trim().toLowerCase();
    this.relationshipBeneficiary = $.relationshipBeneficiary;
    this.beneficiaryPhoneNo = $.beneficiaryPhoneNo;
    this.purposeApplication = $.purposeApplication.join(',');
    this.other = $.other ? $.other.trim().toLowerCase() : '';
    this.arrivalDate = $.arrivalDate.trim().toLowerCase();
    this.departureDate = $.departureDate.trim().toLowerCase();
  }
}
