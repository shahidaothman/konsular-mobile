import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { objectToFormData } from 'object-to-formdata';

@Injectable()
export class FormDataInterceptor implements HttpInterceptor {
  public options = {
    /**
     * include array indices in FormData keys
     * defaults to false
     */
    indices: false,

    /**
     * treat null values like undefined values and ignore them
     * defaults to false
     */
    nullsAsUndefineds: false,

    /**
     * convert true or false to 1 or 0 respectively
     * defaults to false
     */
    booleansAsIntegers: false,
  };

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const body = objectToFormData(req.body, this.options);
    const bodyReq = req.clone({ body });

    return next.handle(bodyReq);
  }
}

export const FORM_DATA_INTERCEPTOR = {
  provide: HTTP_INTERCEPTORS,
  useClass: FormDataInterceptor,
  multi: true,
};
