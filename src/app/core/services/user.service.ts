import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import jwt_decode from 'jwt-decode';

import { User } from '@core-models/user.model';
import { TokenService } from '@core-services/token.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new Subject<User>();
  private userName: string;

  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  getUser(): Observable<User> {
    return this.userSubject.asObservable();
  }

  getUserName() {
    return this.userName;
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as User;
    this.userName = user.unique_name;
    this.userSubject.next(user);
  }

  logout() {
    this.tokenService.removeToken();
    // this.userSubject.next('');
  }
}
