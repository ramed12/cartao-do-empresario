import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { Categories } from '@shared-models';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders().set('x-api-key', environment.API_KEY),
  };

  getCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(
      environment.API_BASE_URL + 'categoria/',
      { headers: this.httpOptions.headers }
    );
  }
}
