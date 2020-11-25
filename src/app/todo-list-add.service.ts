import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoList } from './todo-list';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoListAddService {

  _url = 'http://localhost:8080/todoList';
  constructor(private _http: HttpClient) { }

  addNewList(todoList):Observable<TodoList[]>{
    console.log(todoList);
    return this._http.post<TodoList[]>(this._url, todoList);
  }
  
}
