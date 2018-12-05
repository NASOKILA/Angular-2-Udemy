import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-like-component',
  templateUrl: './like-component.component.html',
  styleUrls: ['./like-component.component.css']
})
export class LikeComponentComponent {

  @Input("isClicked") isClicked : boolean = true;
  @Input("likesCount") likesCount : number = 0;

  likeTwet()
  {
    this.isClicked = !this.isClicked;
    
    this.isClicked === true 
    ? this.likesCount++ 
    : this.likesCount--;
  }
}





