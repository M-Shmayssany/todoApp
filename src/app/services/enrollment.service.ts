import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from '../model/register';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = 'http://localhost:8080/register';
  constructor(private _http: HttpClient) { }

  enroll(register: Register){
    return this._http.post<any>(this._url, register);
  }
}
 