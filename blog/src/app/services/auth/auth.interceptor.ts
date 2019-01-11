import {Injectable, Injector} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {AuthServiceService} from "../auth-service.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const auth = this.injector.get(AuthServiceService);
    request = request.clone({
      setHeaders: {
        'x-auth-token': `${auth.getToken()}`
      }
    });

    return next.handle(request);
  }
}
