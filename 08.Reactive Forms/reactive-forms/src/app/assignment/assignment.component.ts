import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {

  form : FormGroup
  
  constructor(fb : FormBuilder) { 
    this.form = fb.group({
      oldPassword : ['', Validators.required ],
      newPassword : ['', Validators.required ],
      confirmPassword : ['', Validators.required ]
    })
    
  }

  passwordsDontMatch() : boolean {

    return this.form.controls.newPassword.value !== this.form.controls.confirmPassword.value;
  }
  
  get oldPassword() {
    return this.form.controls.oldPassword;
  }

  get newPassword() {
    return this.form.controls.newPassword;
  }

  get confirmPassword() {
    return this.form.controls.confirmPassword;
  }
}
