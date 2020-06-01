import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UrlsService {
  constructor() {}

  private get localHost() {
    return '/' + 'assets/api/';
  }

  private get host() {
    return environment.host;
  }

  public get app() {
    return this.localHost + 'app.json';
  }

  public get login() {
    return this.host + 'login';
  }

  public get forgotPassword() {
    return this.host + 'forgot-password-email';
  }

  public get register() {
    return this.host + 'register';
  }

  public get changePassword() {
    return this.host + 'update-profile';
  }

  public get userDetails() {
    return this.host + 'details';
  }

  public get updatePersonalDetails() {
    return this.host + 'update-personal';
  }

  public get goodConductList() {
    return this.host + 'get-conduct-list';
  }

  public get goodConductPersonalDetails() {
    return this.host + 'good-conduct-personal';
  }

  public get goodConductEmployerDetails() {
    return this.host + 'good-conduct-employer';
  }

  public get goodConductEmployerEducationDetails() {
    return this.host + 'good-conduct-education';
  }

  public get goodConductPurposeDetails() {
    return this.host + 'good-conduct-purpose';
  }

  public get goodConductPhotoDetails() {
    return this.host + 'good-conduct-image';
  }

  public get registeringMalaysianPersonalDetails() {
    return this.host + 'registration-user-personal';
  }

  public get registeringMalaysianIdentityDetails() {
    return this.host + 'registration-user-identity';
  }

  public get registeringMalaysianVisitedCountryDetails() {
    return this.host + 'registration-user-visited-country';
  }

  public get registeringMalaysianPhotoUpload() {
    return this.host + 'registration-user-pic';
  }

  public get registerMalaysianDetails() {
    return this.host + 'get-registration-list';
  }

  public get updateUserBirthDetail() {
    return this.host + 'update-birth';
  }

  public get updateUserIdentityDetail() {
    return this.host + 'update-identity';
  }

  public get updateUserPhotoDetail() {
    return this.host + 'update-photo';
  }

  public get getCountries() {
    return this.host + 'get-country-list';
  }
  
  public get getStates() {
    return this.host + 'get-state-list';
  }

  public get deleteMalaysianRegistration() {
    return this.host + 'registration-delete';
  }

  public get getMalaysianRegistrationById() {
    return this.host + 'get-registration-by-id';
  }

  public get purposes() {
    return this.localHost + 'purposes.json';
  }

  public get places() {
    return this.localHost + 'places.json';
  }  
  
  public get relation() {
    return this.localHost + 'relations.json';
  }
}
