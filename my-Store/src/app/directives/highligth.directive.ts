import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighligth]'
})
export class HighligthDirective {

  @HostListener('mouseenter') onMouseEnter(){
    this.element.nativeElement.style.color = 'red';
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.element.nativeElement.style.color = '';
  }

  constructor(
    private element: ElementRef
  ) {
  }


}
