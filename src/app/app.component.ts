import { Component } from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoApp';
  public userFirstname;
    constructor(private activeRoute:Router) { }
  ngOnInit(): void {
    this.activeRoute.events.subscribe(this.onUrlChange.bind(this))
  }
  onUrlChange(ev) {
    if(ev instanceof NavigationEnd) {
      if(sessionStorage.getItem('userFirstname'))  {
          this.userFirstname = sessionStorage.getItem('userFirstname');
      } else {
        this.userFirstname = "";
      }

    }
  }
  
}