import { ElementRef,Directive } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private obj:ElementRef) 
  {
    obj.nativeElement.style.background='yellow';
    obj.nativeElement.style.fontWeight='bold';
    console.log(obj);
  }

}
