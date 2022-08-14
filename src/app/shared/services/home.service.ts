import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { Home } from '@shared-models/home.model';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders().set('x-api-key', environment.API_KEY),
  };

  getHome(): Observable<Home[]> {
    return this.http.get<Home[]>(environment.API_BASE_URL + '/api/banner/', {
      headers: this.httpOptions.headers,
    });
  }
}
