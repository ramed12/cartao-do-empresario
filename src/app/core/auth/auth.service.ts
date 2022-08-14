import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { LoginRequest } from '@shared-models/login-request.model';
import { UserService } from '@core-services/user.service';

import { environment } from 'src/environments/environment';
import { RequestPasswordReset } from '@shared-models/requestPasswordReset.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'x-api-key': '7Zxiof4SlM1b2wxprPj2R2hhnhoWRE2y37FWXo9E',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private userService: UserService) {}

  login(cpf: string, senha: string) {
    return this.http
      .post<LoginRequest>(
        `${environment.API_BASE_URL}/api/usuario/login/`,
        { cpf, senha },
        { headers: httpOptions.headers, observe: 'response' }
      )
      .pipe(
        tap(res => {
          let responseBody = { ...res.body };

          for (const [key, value] of Object.entries(responseBody)) {
            const token = value;
            this.userService.setToken(token);
          }
        })
      );
  }

  requestPasswordReset(email: string, cpf: string) {
    return this.http.post<RequestPasswordReset>(
      `${environment.API_BASE_URL}/api/usuario/password/request`,
      { email, cpf },
      { headers: httpOptions.headers, observe: 'response' }
    );
  }
}
