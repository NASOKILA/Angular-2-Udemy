import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TestChangedEventArgs } from '../test-changed-event-args';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',

  styleUrls: ['./test.component.css'], // This gets ignored because Angular uses styles:[] because it's implemented last
  styles : [`
  .simpleDiv {
    color : white;
    background-color: green; 
}
  `],  
})

export class TestComponent implements OnInit {

  image : string = "https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350";
  
  //to use it from another component we need the Input() property
  //we set a nickname fot that property. if we change the name of the field there will be no error.
  @Input("nicknameCreated") isActive : boolean = true;


  //When we use Output() the field name has to be like the event name when we use it !!!
  @Output('change') change2 = new EventEmitter(); //EventEmitter is a class that emmits events !!!
  //WE CAN USE Alias(Nicknames) for Output properties also.


  constructor() { }

  ngOnInit() {
    
  }

  clicked(){
    this.isActive = !this.isActive;
    console.log('clicked')
  

    //we use an interfac its a good practice
    let testObj : TestChangedEventArgs = {
      newValue : this.isActive
    }
    //we raise an event and notify others of it.
    this.change2.emit(testObj);
  }


}
