import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { LoginService } from '../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public message = '';
  submitted = false;
  email = '';
  password = '';
  loginModel = new Login(this.email, this.password);
  constructor(private LoginService: LoginService,private route:Router) { }
  ngOnInit(): void {
  }
  onSubmit(){
    
    this.LoginService.tryLogin(this.loginModel)
    .subscribe(
      data =>{
        console.log('Success!', data);
        sessionStorage.setItem('userFirstname', data.data.firstname);
        sessionStorage.setItem('userLastname', data.data.lastname);
        sessionStorage.setItem('userEmail', data.data.email);
        
        if(data.isloggin == true){
            this.submitted = true;
            this.route.navigate(['/home']);
          }else{
            this.message = data.message;
            this.submitted = false;
          }
        } ,
        error => console.log('Error!', error)
      )
  } 

}
