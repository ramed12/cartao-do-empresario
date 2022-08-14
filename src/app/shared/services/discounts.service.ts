import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { Discounts } from '@shared-models/discounts.model';

@Injectable({
  providedIn: 'root',
})
export class DiscountsService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders().set('x-api-key', environment.API_KEY),
  };

  getDiscounts(): Observable<Discounts[]> {
    return this.http.get<Discounts[]>(
      environment.API_BASE_URL + '/api/oferta/',
      {
        headers: this.httpOptions.headers,
      }
    );
  }
}
