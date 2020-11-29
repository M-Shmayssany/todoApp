import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoListService } from '../todo-list.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todoListId;
  public description;
  public data;
  public list;
  public newList;
  public group;
  
  constructor(private route: ActivatedRoute, private _todoListService: TodoListService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.todoListId = id;
    this._todoListService.getTodoList(this.todoListId).subscribe((data) => {
      //DO STUFF HERE
      this.data = data;
      this.list = this.data.list;
      this.group = this.data.group;
    });;
  }
  addItem(){
    this.list.push({description: this.description,status: 0, addedBy: sessionStorage.getItem('userEmail'), addTime: new Date() });
    this.newList = {description: this.description,status: 0, addedBy: sessionStorage.getItem('userEmail'), addTime: new Date() };
    this._todoListService.updateListItem(this.todoListId, this.newList).subscribe(data => {
      this.data = data;
    },
    error => console.log(error));
    this.description = '';
  }
}
