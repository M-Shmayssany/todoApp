import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  _url = 'http://localhost:8080/login';
  constructor(private _http: HttpClient) { }
  tryLogin(login: Login){
    return this._http.post<any>(this._url, login);
  }

}
