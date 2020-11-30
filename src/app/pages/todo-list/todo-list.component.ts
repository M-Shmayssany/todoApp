import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoListService } from '../../services/todo-list.service';


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
  public newGroup;
  public allUsers;
  public user;
  public userArray;

  public userEmail = sessionStorage.getItem('userEmail');
  public isChecked = false;

  constructor(private route: ActivatedRoute, private _todoListService: TodoListService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.todoListId = id;
    this._todoListService.getTodoList(this.todoListId).subscribe((data) => {
      //DO STUFF HERE
      this.data = data;
      this.list = this.data.list;
      this.group = this.data.group;
    });
    this._todoListService.fitchUsers().subscribe((data) => {
      this.allUsers = data;
    });
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
  addUser(){
    this.userArray = this.user.split(',');
    console.log(this.userArray[0]);
    this.group.push({
      userId: this.userArray[0],
      userEmail: this.userArray[1]
    });
    this.newGroup = {
      userId: this.userArray[0],
      userEmail: this.userArray[1]
    };
    this._todoListService.updateGroupItem(this.todoListId, this.newGroup).subscribe(data => {
      this.data = data;
    },
    error => console.log(error));
  }

}
