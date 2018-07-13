import { Directive } from '@angular/core';
import {ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(private ele:ElementRef) {
    console.log(ele);
   }

  @HostListener('mouseenter') onmouseenter()
  {
    this.setcolor('red');
  }

  @HostListener('mouseleave') onmouseleave()
  {
    this.setcolor('black');
  }

  setcolor(color:string)
  {
    this.ele.nativeElement.style.color=color;
    console.log(this.ele);
  }

}
