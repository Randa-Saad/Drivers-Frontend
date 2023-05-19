import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from '../models/Driver';
import { environment } from 'src/environments/environment';
import { Response } from '../models/Response';

const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class DriverService {
  constructor(private http: HttpClient) {}

  Add(data: any): Observable<Response> {
    return this.http.post(`${baseUrl}`, data);
  }

  Update(data: any): Observable<Response> {
    return this.http.put(`${baseUrl}`, data);
  }

  Remove(id: any): Observable<Response> {
    return this.http.delete(`${baseUrl}?id=${id}`);
  }

  GetAll(): Observable<any> {
    return this.http.get(`${baseUrl}/GetAll`);
  }

  GetById(id: any): Observable<Driver> {
    return this.http.get(`${baseUrl}/GetById?id=${id}`);
  }
}
