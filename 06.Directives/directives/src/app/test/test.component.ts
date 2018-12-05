import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  courses : string[]  = ["Course1", "Course2", "Course3"]

  numbers : number[]  = [1, 35, 76, 12, 122];
  
  viewMode : string = "";

  people = [
    { id : 13, name : "Atanas"},
    { id : 21, name : "Asen"},
    { id : 36, name : "Mira"},
    { id : 14, name : "Toni"},
  ];
  
  constructor() { }
  
  ngOnInit() {
  }

  mapViewChange(){
    this.viewMode = 'map';
  }


  listViewChange(){
    this.viewMode = 'list';
  }

}
