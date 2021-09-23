import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appClosePopup]',
})
export class ClosePopupDirective {
  @Output() appClosePopup = new EventEmitter();

  @HostListener('document: click', ['$event.target'])
  onClick(target: HTMLElement): void {
    if (
      !this.elementRef.nativeElement.contains(target) &&
      !target.classList.contains('btn_activator') &&
      !target.closest('.btn_activator')
    ) {
      this.appClosePopup.emit();
    }
  }

  constructor(private elementRef: ElementRef) {}
}
