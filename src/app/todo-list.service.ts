import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoList, Users } from './todo-list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  url = 'http://localhost:8080/users'
  _url = 'http://localhost:8080/todoList';
  userURL = 'http://localhost:8080/todoListUsers';
  constructor(private _http: HttpClient) { }

  getTodoList(id): Observable<any[]>{
    
    return this._http.get<any[]>(this._url + `/${id}`);
  }
  updateListItem(id, items): Observable<TodoList[]>{
    console.log(id);
    console.log(items);
    return this._http.put<TodoList[]>(this._url + `/${id}`, items);
  }
  updateGroupItem(id, items): Observable<TodoList[]>{
    console.log(id);
    console.log(items);
    return this._http.put<TodoList[]>(this.userURL + `/${id}`, items);
  }

  fitchUsers():Observable<Users[]>{
    return this._http.get<Users[]>(this.url);
  }
}
