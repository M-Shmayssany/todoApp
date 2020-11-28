import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DashboardListViewService } from '../dashboard-list-view.service';


@Component({
  selector: 'app-dashboard-list-view',
  templateUrl: './dashboard-list-view.component.html',
  styleUrls: ['./dashboard-list-view.component.css']
})
export class DashboardListViewComponent implements OnInit {
  submitted = false;
  data;
  userEmail = sessionStorage.getItem('userEmail');
  group;
  response;
  message;
  constructor(private _DashboardListViewService: DashboardListViewService, private router: Router, private route: ActivatedRoute,) { }
  
  ngOnInit(): void {
    this._DashboardListViewService.fetchTodoList().subscribe(data=>{
      this.data = data;
      this.group = this.data.group;
      
    });
    
    }

  onSelect(item){
    
    this.router.navigate(['/dashboard/todo-list', item._id]);
  }
  newList(){
    this.router.navigate(['/dashboard/new-list'],  { relativeTo: this.route })
  }
  delete(id){
    this._DashboardListViewService.deleteTodolist(id).subscribe(res => {
      this.response = res;
      if(this.response.message == 'ok'){
        this.message = "List Deleted";
        this.data = this._DashboardListViewService.fetchTodoList();
      }
      
    });
  }
}
