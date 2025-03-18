import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/.environment-dev';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  baseUrl: any;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }
  
  public wsHttpRequest(params: any): Observable<any> {
    return this.http.post(this.baseUrl+params.url, params.body);
  }

}
