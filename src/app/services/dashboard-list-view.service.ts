import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardListViewService {

  _url = 'http://localhost:8080/todoList';
  constructor(private _http: HttpClient) { }

  fetchTodoList():Observable<any[]> {
    return this._http.get<any[]>(this._url);
  }
  deleteTodolist(id):Observable<any[]> {
    console.log(this._url + `/${id}`);
    return this._http.delete<any[]>(this._url + `/${id}`);
  }
}
