import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[icrTabButton]',
})
export class TabButtonDirective {
  private readonly tabButtonClasses = [
    'flex',
    'items-center',
    'justify-center',
    'h-40',
    'w-[86px]',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-blue',
    'focus:border-transparent',
    'rounded-full',
    'hover:bg-blue-light',
    'transition',
  ];

  constructor(elementRef: ElementRef) {
    const classList = (elementRef.nativeElement as HTMLElement).classList;

    this.tabButtonClasses.forEach((className: string) => {
      classList.add(className);
    });
  }
}
