import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent  {

  @Input('title') title : string;

  isExpanded :boolean = false;
  
  constructor() { }

  ngOnInit() {
  }
  
  expand(){
    this.isExpanded = !this.isExpanded;
  }

}
