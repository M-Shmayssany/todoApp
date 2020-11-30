import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  template: `
    <p>
      You are logged out Successfully!
    </p>
    <br />
    <button (click)="back()">Back</button>
  `,
  styles: [
  ]
})
export class LogoutComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
    sessionStorage.clear();
  }
  back(){
    this.route.navigate(['/home']);
  }
}
