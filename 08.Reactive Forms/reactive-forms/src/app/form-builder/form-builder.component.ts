import { Component } from '@angular/core';
import { FormGroup,   FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent {

  form : FormGroup;

  /*
  form = new FormGroup({
    name : new FormControl('', Validators.required),
    contact : new FormGroup({
      email : new FormControl(),
      phone: new FormControl()
    }),
    topics : new FormArray([])
  });
*/

  //we can write the same code and byuild a form by using the FormBuilder object 
  constructor(fb : FormBuilder) {

    this.form = fb.group({
      name : ['', Validators.required],
      contact : fb.group({
        email : [],
        phone : []
      }),
      topics : fb.array([])
    })

  }


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
