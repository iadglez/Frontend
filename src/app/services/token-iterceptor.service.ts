import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenIterceptorService implements HttpInterceptor {

  constructor() { }
  
  getToken(): any {
    return localStorage.getItem('token');
  }

  intercept(req: any, next: any): any {
    const tokenReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this.getToken()
      }
    });
    return next.handle(tokenReq);
  }

}
