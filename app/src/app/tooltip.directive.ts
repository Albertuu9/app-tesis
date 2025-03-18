import { Directive, ElementRef, Input, AfterViewInit, OnChanges } from '@angular/core';
import { Tooltip } from 'bootstrap';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements AfterViewInit, OnChanges {
  @Input('appTooltip') tooltipText: string = ''; // Recibe el texto dinámico
  tooltipInstance: Tooltip | null = null;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.initTooltip();
  }

  ngOnChanges() {
    if (this.tooltipInstance) {
      this.tooltipInstance.dispose(); // Destruye el tooltip anterior
      this.initTooltip(); // Crea uno nuevo con el nuevo texto
    }
  }

  private initTooltip() {
    this.el.nativeElement.setAttribute('data-bs-toggle', 'tooltip');
    this.el.nativeElement.setAttribute('title', this.tooltipText); // Asigna el texto dinámico

    this.tooltipInstance = new Tooltip(this.el.nativeElement);
  }
}
