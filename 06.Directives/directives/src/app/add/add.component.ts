import { Component, OnInit } from '@angular/core';

interface Course {
  id : number,
  name : string
}

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  courses : Course[] = [
    { id : 1, name : "Course1"},
    { id : 2, name : "Course2"},
    { id : 3, name : "Course3"},
    { id : 4, name : "Course4"},
  ]  

  courses2 : Course[];
  courses3 : Course[];

  isActive : boolean = false;
  isActive2 : boolean = false;
  
  isStyled : boolean = false;
  isStyled2 : boolean = false;

  task = {
    title : "Task one",
    assignee : {
      name : 'John Smith'
    }
  }

  constructor() { }

  ngOnInit() {
  }

  addCourse(){
      let id = this.courses[this.courses.length-1].id + 1;
      let name = "Course" + id.toString();
      let newCourse : Course = { id, name }
      this.courses.push(newCourse);
  }

  removeCourse(course : Course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  changeCourse(course : Course){
    let index = this.courses.indexOf(course);
    this.courses[index].name = this.courses[index].name + " ( UPDATED )";
  }

  
  loadCourses2(){
    this.courses2 = [
      { id : 1, name : "Course1"},
      { id : 2, name : "Course2"},
      { id : 3, name : "Course3"},
      { id : 4, name : "Course4"},
    ];
  }
  
  loadCourses3(){
    this.courses3 = [
      { id : 1, name : "Course1"},
      { id : 2, name : "Course2"},
      { id : 3, name : "Course3"},
      { id : 4, name : "Course4"},
    ];
  }


  //WITH THIS FUNCTON WE TRACK THE COURSES BY ID.
  //By tracking them like this they wont reload every time we click the button which is great for the memory and performance
  //accepts two parameters
  trackCourse(index, course){
    
    //check if course exists
    return course ? course.id : undefined;
  }

  clicked(){
    this.isActive = !this.isActive;
  }


  clicked2(){
    this.isActive2 = !this.isActive2;
  }

  styleMe(){
    this.isStyled = !this.isStyled; 
    console.log(this.isStyled)
  }

  styleMe2(){
    this.isStyled2 = !this.isStyled2; 
    console.log(this.isStyled2)
  }

}


