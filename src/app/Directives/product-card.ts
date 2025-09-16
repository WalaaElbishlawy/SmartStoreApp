import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appProductCard]'
})
export class ProductCard {

   constructor(private el: ElementRef) {
    this.setDefaultStyle();
  }

  private setDefaultStyle() {
    this.el.nativeElement.style.border = '2px solid #ccc';
    this.el.nativeElement.style.borderRadius = '12px';
    this.el.nativeElement.style.boxShadow = '0 2px 6px rgba(0,0,0,0.15)';
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.el.nativeElement.style.border = '4px solid #5de887ff';
    this.el.nativeElement.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.setDefaultStyle();
  }

}
