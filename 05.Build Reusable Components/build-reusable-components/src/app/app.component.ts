import { Component } from '@angular/core';
import { TestChangedEventArgs } from './test-changed-event-args';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  tweet = {
    body : 'Here is my tweet body ...',
    isClicked : true,
    likesCount : 4
  }

  
  post = {
    title : 'My Title',
    isTest : true
  }

  onTestCompChanged(args : TestChangedEventArgs){
    
    console.log(args);
    console.log("Test Component Changed : " + args.newValue)
  }
  
}
