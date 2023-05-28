import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[icrButton]',
})
export class ButtonDirective {
  constructor(private el: ElementRef<HTMLElement>) {
    this.el.nativeElement.classList.add('bg-blue', 'text-white');
  }
}
