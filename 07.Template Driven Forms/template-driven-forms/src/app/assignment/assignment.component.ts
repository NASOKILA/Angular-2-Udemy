import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {

  constructor() { }

  categories = [
    {id : 1, name : "Development"},
    {id : 2, name : "Art"},
    {id : 3, name : "Languages"}
  ]

  submit(f){
    console.log(f.value)
  }

}
