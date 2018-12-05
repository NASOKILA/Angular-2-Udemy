import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  private title = "List of courses."
  courses : string[];

  constructor(private courseService : CourseService) { 
    this.courses = courseService.getCourses()
  }

  ngOnInit(){
  }


  public getTitle(){
    return this.title;
  }

}
