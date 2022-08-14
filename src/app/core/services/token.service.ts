import { Injectable } from '@angular/core';

const KEY_TOKEN = 'auth_token';
@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  hasToken() {
    return !!this.getToken();
  }

  getToken() {
    return window.localStorage.getItem(KEY_TOKEN) as string;
  }

  setToken(token: any) {
    window.localStorage.setItem(KEY_TOKEN, token);
  }

  removeToken() {
    window.localStorage.removeItem(KEY_TOKEN);
  }
}
