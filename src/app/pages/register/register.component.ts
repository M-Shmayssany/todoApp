import { Component, OnInit } from '@angular/core';
import { Register } from '../../models/register';
import { EnrollmentService } from '../../services/enrollment.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  
  registerModel = new Register('', '', '', '');
  submitted = false;
  constructor(private _enrollmentService: EnrollmentService) { }
  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted = true;
    this._enrollmentService.enroll(this.registerModel)
        .subscribe(
            data => console.log('Success!', data),
            error => console.log('Error!', error)
          )
  }
}
