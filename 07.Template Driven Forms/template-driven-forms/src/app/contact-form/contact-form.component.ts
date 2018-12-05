import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactMethods = [
    {id : 1, name : "Email"},
    {id : 2, name : "Phone"},
    {id : 3, name : "Skype"},
  ];

  genders = [
    {id : 1, name : "Male"},
    {id : 2, name : "Female"},
    {id : 3, name : "Others"},
  ];

  constructor() { }

  ngOnInit() {
  }

  log(field){
    console.log(field)
    console.log(field.value)
  }

  submit(f){
     console.log(f)
  }

  

}
