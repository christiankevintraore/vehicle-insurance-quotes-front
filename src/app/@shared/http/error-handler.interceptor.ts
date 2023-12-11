import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest,
  HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger } from '../logger.service';

const log = new Logger('ErrorHandlerInterceptor');

/**
 * Adds a default error handler to all requests.
 */
@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError((error) => this.errorHandler(error)));
  }

  // Customize the default error handler here if needed
  private errorHandler(response: HttpEvent<any>): Observable<HttpEvent<any>> {
    if (!environment.production) {
      // Do something with the error
      log.error('Request error', response);

      const errorCode = response instanceof HttpErrorResponse && response.status;
      if ((errorCode === 504) || ((errorCode === 400))) {
        this.router.navigate(['/refresh']);
      }
    }
    throw response;
  }
}
