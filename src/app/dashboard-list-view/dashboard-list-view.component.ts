import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DashboardListViewService } from '../dashboard-list-view.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard-list-view',
  templateUrl: './dashboard-list-view.component.html',
  styleUrls: ['./dashboard-list-view.component.css']
})
export class DashboardListViewComponent implements OnInit {
  submitted = false;
  data: Observable<any[]>;
  constructor(private _DashboardListViewService: DashboardListViewService, private router: Router, private route: ActivatedRoute,) { }
  
  ngOnInit(): void {
    this.data = this._DashboardListViewService.fetchTodoList();
    }

  onSelect(item){
    
    this.router.navigate(['/dashboard/todo-list', item._id]);
  }
  newList(){
    this.router.navigate(['/dashboard/new-list'],  { relativeTo: this.route })
  }
}
