import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[icrIconButton]',
})
export class IconButtonDirective {
  private readonly iconButtonClasses = [
    'flex',
    'items-center',
    'justify-center',
    'h-40',
    'w-40',
    'border',
    'border-gray-light',
    'rounded-full',
    'text-graphite-light',
    'hover:text-blue',
    'hover:border-blue',
    'hover:bg-blue-light',
    'transition',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-blue',
    'focus:border-transparent',
  ];

  constructor(elementRef: ElementRef) {
    const classList = (elementRef.nativeElement as HTMLElement).classList;

    this.iconButtonClasses.forEach((className: string) => {
      classList.add(className);
    });
  }
}
