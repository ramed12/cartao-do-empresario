import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Profile } from '@public-models/profile.model';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IkZMQVZJTyBIQVlTSElEQSIsIkNvZGlnbyI6IjcwIiwicm9sZSI6IkFzc29jaWFkbyIsIm5iZiI6MTY3NTI4MTM1NywiZXhwIjoxNjc3ODczMzU3LCJpYXQiOjE2NzUyODEzNTd9.1GDWv3pk_xXL1ppP12g8QHJKwR0JC7UXDbHqkzDCtmM',
    'x-api-key': '7Zxiof4SlM1b2wxprPj2R2hhnhoWRE2y37FWXo9E',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private http: HttpClient) {}

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>(
      `${environment.API_BASE_URL}/api/associado/profile/`,
      {
        headers: httpOptions.headers,
      }
    );
  }
}
