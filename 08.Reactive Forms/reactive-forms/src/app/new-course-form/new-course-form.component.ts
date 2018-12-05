import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {

  form = new FormGroup({
    topics : new FormArray([])
  });

  get topics(){
    return this.form.get('topics');
  }

  addTopic(topic : HTMLInputElement){

    //an abstract control type does not has  push method so we need to cast it as FormArray
    (this.topics as FormArray).push(new FormControl(topic.value));

    topic.value = "";
  }

  deleteTopic(topic : FormControl){

    let allTopics = (this.topics as any); 

    let index = allTopics.controls.indexOf(topic);

    allTopics.removeAt(index);
  }

}
