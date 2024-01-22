import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  default_user = {email: 'user@demo.com', password: '123456', token: 'token-123'}
  userIsLogged = false;

  constructor() {
    this.userIsLogged = !!localStorage.getItem('userIsLogged');
  }

  login(email: string, password: string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === this.default_user.email && password === this.default_user.password) {
          resolve(true);
          this.userIsLogged = true;
          localStorage.setItem('userIsLogged', 'true');
        } else {
          resolve(false); 
          this.userIsLogged = false;
        }
      }, 500);
    });
  }
  
  
  logout(): void {
    this.userIsLogged = false;
    localStorage.removeItem('userIsLogged');
  }

  isLogged(): boolean {
    return this.userIsLogged;
  }

  getAuthToken(): string {
    
    return this.default_user.token;
  }
}
