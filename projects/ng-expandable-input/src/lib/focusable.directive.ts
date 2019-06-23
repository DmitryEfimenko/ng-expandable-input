import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[focusable]'
})
export class FocusableDirective implements OnChanges {
  @Input() focusable: boolean;
  @Input() focusableSelector: string;

  constructor(private elRef: ElementRef) { }

  ngOnChanges() {
    const el: HTMLElement = this.elRef.nativeElement;
    const target = this.focusableSelector
      ? el.querySelector<HTMLElement>(this.focusableSelector)
      : el;

    if (target) {
      if (this.focusable) {
        target.tabIndex = 0;
      } else {
        target.tabIndex = -1;
      }
    }
  }
}
