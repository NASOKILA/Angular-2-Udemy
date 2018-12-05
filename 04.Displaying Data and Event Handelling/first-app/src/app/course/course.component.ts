import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  private title = "List of courses."
  
  courses : string[];
  image : string = 'https://www.w3schools.com/w3css/img_lights.jpg';
  colSpan : number = 2; 

  email : string = "";
  name : string = "";

  course = {
    title : "The Complete Angular Course",
    rating : 4.5654,
    students : 130000,
    price : 10,
    releaseDate : new Date(2016, 3, 1)
  }

  text : string = "I have to admit that I start with Angular on Monday (so 4 days ago) and was doing their tutorials so I'm pretty sure I did something wrong but for me importing FormsModule didn't work. Then I added import { FORM_DIRECTIVES } from '@angular/forms'; and added the FORM_DIRECTIVES to directives and yeah my binding is working again (to be clear it was working before rc5 release) I have to admit that I start with Angular on Monday (so 4 days ago) and was doing their tutorials so I'm pretty sure I did something wrong but for me importing FormsModule didn't work. Then I added import { FORM_DIRECTIVES } from '@angular/forms'; and added the FORM_DIRECTIVES to directives and yeah my binding is working again (to be clear it was working before rc5 release) I have to admit that I start with Angular on Monday (so 4 days ago) and was doing their tutorials so I'm pretty sure I did something wrong but for me importing FormsModule didn't work. Then I added import { FORM_DIRECTIVES } from '@angular/forms'; and added the FORM_DIRECTIVES to directives and yeah my binding is working again (to be clear it was working before rc5 release)."
  
  constructor(private courseService : CourseService) { 
    this.courses = courseService.getCourses()
  }

  ngOnInit(){
  }

  getTitle(){
    return this.title;
  }

  divClicked(e){
    console.log("Div was Clicked !")
  }

  onSave(e){
    console.log(e.clientX);
    console.log(e.clientY);
    console.log("Button Clicked !")
  }

  enterPressed(){
    console.log("Enter Pressed !")
  }

  onKeyUp(e){
    if(e.key === 'Enter'){
      console.log("Enter was pressed !");
    }

    if(e.key === 'f'){
      console.log("'f' was pressed !");
    }
    if(e.which === 71){
      console.log("'g' was pressed !");
    }
    if(e.which === 72){
      console.log("'h' was pressed !");
    }

  }

  anyKeyPressed(value){
    console.log(value); //We take everithing from the input 
  }
  
  getEmail(value){
    this.email = value;
    console.log(this.email)
  }

  getName(){
    console.log(this.name);
  }

}
