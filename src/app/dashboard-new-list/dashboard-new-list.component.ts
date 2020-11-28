import { Component, OnInit } from '@angular/core';
import { TodoListAddService } from '../todo-list-add.service';



@Component({
  selector: 'app-dashboard-new-list',
  templateUrl: './dashboard-new-list.component.html',
  styleUrls: ['./dashboard-new-list.component.css']
})
export class DashboardNewListComponent implements OnInit {
  userEmail = sessionStorage.getItem('userEmail');
  userId = sessionStorage.getItem('userID');
  public title;
  public description;
  // public list = new List();
  // group = new Group(this.userID, this.userEmail);
  // fieldModel = new TodoList('', '', this.list, this.group);
  constructor(private _todoListAdd: TodoListAddService ) { }
  
  ngOnInit(): void {

  }
  addNew(){
    
    const fieldModel = { title: this.title, description: this.description, group: [{ userId: this.userId, userEmail: this.userEmail}]};
    console.log(fieldModel);
    this._todoListAdd.addNewList(fieldModel)
    .subscribe(
      data => console.log('Success!', data),
      error => console.log('Error!', error)
    );
    location.reload()
  }
}
