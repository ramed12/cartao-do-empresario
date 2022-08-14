import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { Partners } from '@shared-models';

@Injectable({
  providedIn: 'root',
})
export class PartnersService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders().set('x-api-key', environment.API_KEY),
  };

  getPartners(): Observable<Partners[]> {
    return this.http.get<Partners[]>(environment.API_BASE_URL + 'parceiro/', {
      headers: this.httpOptions.headers,
    });
  }
}
