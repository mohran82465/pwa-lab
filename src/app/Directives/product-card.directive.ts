import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appProductCard]',
  standalone: true
})
export class ProductCardDirective implements OnChanges{
  
  @Input() defaultSadowColor:string='black';
  constructor(private elementRef:ElementRef) { 
  }
  
  ngOnChanges(): void {
    this.elementRef.nativeElement.style = `box-shadow:2px 2px 10px 2px ${this.defaultSadowColor}; border-radius:20px;`;
  }
  
  @HostListener('mouseover') fun1(){
    this.elementRef.nativeElement.style = `box-shadow:2px 2px 10px 2px green; border-radius:50px;`;
  }
  @HostListener('mouseleave') fun2(){
    this.elementRef.nativeElement.style = `box-shadow:2px 2px 10px 2px yellow; border-radius:20px;`;
  }

}
