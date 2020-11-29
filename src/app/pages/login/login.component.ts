import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
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
  loginModel = {email: this.email, password: this.password};
  constructor(private LoginService: LoginService,private route:Router) { }
  ngOnInit(): void {
  }
  onSubmit(){
    
    this.LoginService.tryLogin(this.loginModel)
    .subscribe(
      data =>{
        this.message = data.message;
        console.log(data);
        if(data.isloggin == true){
          sessionStorage.setItem('userFirstname', data.data.firstname);
          sessionStorage.setItem('userLastname', data.data.lastname);
          sessionStorage.setItem('userEmail', data.data.email);
          sessionStorage.setItem('userID', data.data._id);
          this.submitted = true;
          console.log(sessionStorage.getItem('userEmail'));
          this.route.navigate(['/home']);
        }else{
          this.submitted = false;
        }
      } ,
        error => console.log('Error!', error)
      )
  } 

}
