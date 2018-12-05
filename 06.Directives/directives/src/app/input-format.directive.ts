import { Directive, HostListener, ElementRef, Input } from '@angular/core';

//HostListener allows us to subscribe to an event raised from a DOM element that is hosting this directive.
@Directive({
  selector: '[appInputFormat]'  //This is the selector or the name for usage of our directive.
})
export class InputFormatDirective {

  @Input('format') format;

  //ElementRef class gives us access to a DOM object
  constructor(private el : ElementRef) { }

  @HostListener('focus') onFocus(){
    console.log('On Focus.')
  }

  //We will format the input field once the user clicks away
  @HostListener('blur') onBlur(){

    //We take the value of that input.
    let value : string = this.el.nativeElement.value;
    

    //Now we change the value of that input field depending on the Input value that we passed on the declaration

    //If its lowercase we turn the value to lowercase, if it's uppercase we turn it to uppercase.
    if(this.format == 'lowercase'){
      this.el.nativeElement.value = value.toLowerCase();
    }
    
    if(this.format == 'uppercase'){
      this.el.nativeElement.value = value.toUpperCase();
    }

  }

}
