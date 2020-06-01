import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  private token: string;
  private readonly BEARER = 'Bearer';
  constructor() {
    // this.token = window.localStorage.getItem('token');
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.token = window.localStorage.getItem('token');

    const headers = req.headers.set(
      'Authorization',
      this.BEARER + ' ' + this.token
    );
    const authReq = req.clone({ headers });

    return next.handle(authReq);
  }
}

export const HEADER_INTERCEPTOR = {
  provide: HTTP_INTERCEPTORS,
  useClass: HeaderInterceptor,
  multi: true,
};
