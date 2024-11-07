import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router, private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const isAuthenticated = this.authService.isAuthenticated();

    if (isAuthenticated) {
      const authReq = req.clone({
        headers: req.headers.set(
          'Authorization',
          'Bearer ' + this.authService.getToken()
        ),
      });
      return next.handle(authReq);
    }

    return next.handle(req);
  }
}
