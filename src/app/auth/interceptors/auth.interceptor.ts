import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.authService.isLogged()) {
      const authToken = this.authService.getAuthToken(); 
      console.log('authToken', authToken);
      const authReq = req.clone({
        setHeaders: { Authorization: `Bearer ${authToken}` },
      });
      
      return next.handle(authReq);
    }

    return next.handle(req);
  }
}