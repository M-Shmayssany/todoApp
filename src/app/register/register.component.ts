import { Component, OnInit} from '@angular/core';
import { Register } from '../register';
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  
  registerModel = new Register('hussein', 'ali', 'hussein.ali@gmail.com', '123456');
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
