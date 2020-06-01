import { Injectable } from '@angular/core';
import { UrlsService } from '../urls/urls.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {
  AppRes,
  AppSuccess,
  ObjectAnyType,
} from 'src/app/interfaces/app.interface';

@Injectable({
  providedIn: 'root',
})
export class ApisService {
  constructor(
    private urlsService: UrlsService,
    private httpClient: HttpClient
  ) {}

  public login(payload: ObjectAnyType): Observable<any> {
    return this.httpClient
      .post(this.urlsService.login, payload)
      .pipe(catchError(this.handleError));
  }

  public register(payload: ObjectAnyType): Observable<any> {
    return this.httpClient
      .post(this.urlsService.register, payload)
      .pipe(catchError(this.handleError));
  }

  public forgotPassword(payload: ObjectAnyType): Observable<any> {
    return this.httpClient
      .post(this.urlsService.forgotPassword, payload)
      .pipe(catchError(this.handleError));
  }

  public get userDetails() {
    return this.httpClient
      .post(this.urlsService.userDetails, {})
      .pipe(retry(1), catchError(this.handleError));
  }

  public updatePersonalDetails(payload: ObjectAnyType): Observable<any> {
    return this.httpClient
      .post(this.urlsService.updatePersonalDetails, payload)
      .pipe(catchError(this.handleError));
  }

  public getConductList(): Observable<any> {
    return this.httpClient
      .post(this.urlsService.goodConductList, {})
      .pipe(catchError(this.handleError));
  }

  public goodConductPersonalDetails(payload: ObjectAnyType): Observable<any> {
    return this.httpClient
      .post(this.urlsService.goodConductPersonalDetails, payload)
      .pipe(catchError(this.handleError));
  }

  public goodConductEmployerDetails(payload: ObjectAnyType): Observable<any> {
    return this.httpClient
      .post(this.urlsService.goodConductEmployerDetails, payload)
      .pipe(catchError(this.handleError));
  }

  public goodConductEmployerEducationDetails(
    payload: ObjectAnyType
  ): Observable<any> {
    return this.httpClient
      .post(this.urlsService.goodConductEmployerEducationDetails, payload)
      .pipe(catchError(this.handleError));
  }

  public goodConductPurposeDetails(payload: ObjectAnyType): Observable<any> {
    return this.httpClient
      .post(this.urlsService.goodConductPurposeDetails, payload)
      .pipe(catchError(this.handleError));
  }

  public goodConductPhotoDetails(payload: ObjectAnyType): Observable<any> {
    return this.httpClient
      .post(this.urlsService.goodConductPhotoDetails, payload)
      .pipe(catchError(this.handleError));
  }

  public registerMalaysianPersonalDetails(
    payload: ObjectAnyType
  ): Observable<any> {
    return this.httpClient
      .post(this.urlsService.registeringMalaysianPersonalDetails, payload)
      .pipe(catchError(this.handleError));
  }

  public registerMalaysianIdentityDetails(
    payload: ObjectAnyType
  ): Observable<any> {
    return this.httpClient
      .post(this.urlsService.registeringMalaysianIdentityDetails, payload)
      .pipe(catchError(this.handleError));
  }

  public registerMalaysianVisitedCountryDetails(
    payload: ObjectAnyType
  ): Observable<any> {
    return this.httpClient
      .post(this.urlsService.registeringMalaysianVisitedCountryDetails, payload)
      .pipe(catchError(this.handleError));
  }

  public registerMalaysianPhotoUpload(payload: ObjectAnyType): Observable<any> {
    return this.httpClient
      .post(this.urlsService.registeringMalaysianPhotoUpload, payload)
      .pipe(catchError(this.handleError));
  }

  public get registerMalaysianDetails() {
    return this.httpClient
      .post(this.urlsService.registerMalaysianDetails, {})
      .pipe(retry(1), catchError(this.handleError));
  }

  public updateUserBirthDetail(payload: ObjectAnyType): Observable<any> {
    return this.httpClient
      .post(this.urlsService.updateUserBirthDetail, payload)
      .pipe(catchError(this.handleError));
  }

  public updateUserIdentityDetail(payload: ObjectAnyType): Observable<any> {
    return this.httpClient
      .post(this.urlsService.updateUserIdentityDetail, payload)
      .pipe(catchError(this.handleError));
  }

  public updateUserPhotoDetail(payload: ObjectAnyType): Observable<any> {
    return this.httpClient
      .post(this.urlsService.updateUserPhotoDetail, payload)
      .pipe(catchError(this.handleError));
  }

  public get getCountries(): Observable<any> {
    return this.httpClient
      .get(this.urlsService.getCountries)
      .pipe(retry(1), catchError(this.handleError));
  }

  public get getStates(): Observable<any> {
    return this.httpClient
      .get(this.urlsService.getStates)
      .pipe(retry(1), catchError(this.handleError));
  }

  public deleteMalaysianRegistration(payload: ObjectAnyType) {
    return this.httpClient
      .post(this.urlsService.deleteMalaysianRegistration, payload)
      .pipe(catchError(this.handleError));
  }

  public getMalaysianRegistrationById(payload: ObjectAnyType) {
    return this.httpClient
      .post(this.urlsService.getMalaysianRegistrationById, payload)
      .pipe(retry(1), catchError(this.handleError));
  }

  public get getPurposes(): Observable<AppRes> {
    return this.httpClient
      .get<AppSuccess>(this.urlsService.purposes)
      .pipe(retry(1), catchError(this.handleError));
  }

  public get getPlaces(): Observable<AppRes> {
    return this.httpClient
      .get<AppSuccess>(this.urlsService.places)
      .pipe(retry(1), catchError(this.handleError));
  }
  
  public get getRelation(): Observable<AppRes> {
    return this.httpClient
      .get<AppSuccess>(this.urlsService.relation)
      .pipe(retry(1), catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    let error = '';
    let status: number | string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      status = err.status;
      error = 'An error occurred:' + err.error.message;
    } else if (err.status === 404) {
      status = err.status;
      error = err.error.message || 'Not Found Error';
    } else if (err.status === 400) {
      status = err.status;
      error = err.error.message || 'Bad Request Error';
    } else if (err.status === 401) {
      status = err.status;
      error = err.error.message || 'Un Authenticated';
    } else if (err.status === 409) {
      status = err.status;
      error = err.error.message || 'Conflict / Precondition Failed';
    } else if (err.status === 412) {
      status = err.status;
      error = err.error.message || 'Conflict / Precondition Failed';
    } else if (err.error.status === 500) {
      status = err.status;
      error = err.error.message || 'Internal Server Error';
    } else if (err.status === 503) {
      status = err.status;
      error = err.error.message || 'Service Unavailable';
    } else if (!navigator.onLine) {
      status = err.status;
      error = `There is no internet connection, Please check your connection`;
    } else if (!err.status) {
      status = err.status;
      error = `not able to established the connection with server.`;
    } else {
      status = err.status;
      error = err.error.message`some thing went wrong ${JSON.stringify(
        err.error
      )}`;
    }
    return throwError({ status, error });
  }
}
