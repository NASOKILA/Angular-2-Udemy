import { Component, NgModule } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from 'src/app/signup-form/username.validatiors';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  
  //we create the fom here and the validations
  form = new FormGroup({

      username : new FormControl('', [
        Validators.required, 
        Validators.minLength(3), 
        UsernameValidators.cannotContainSpace
      ]),
      
      password : new FormControl('', [
        Validators.required, 
        Validators.minLength(3),
      ])

  });


  get Username() {
    return  this.form.get('username');
  }  

  get Password() {
    return  this.form.get('password');
  }
  
  
  Login(){
    
    //here we usually use a service tht interacts with a server.
    //we can us the form we already created in the beginning.
    console.log(this.form.value)

    this.form.setErrors({
      invalidLogin:true
    });

  }
}
 