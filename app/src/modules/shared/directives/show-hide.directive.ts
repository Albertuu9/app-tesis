import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appShowHide]',
  exportAs: 'appShowHide'
})
export class ShowHideDirective {
  constructor(private el: ElementRef) {}

  show(): void {
    this.el.nativeElement.style.display = 'block';
  }

  hide(): void {
    this.el.nativeElement.style.display = 'none';
  }

}
