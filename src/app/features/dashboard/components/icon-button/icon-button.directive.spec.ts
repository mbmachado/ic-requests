import { ElementRef, inject } from '@angular/core';
import { IconButtonDirective } from './icon-button.directive';

describe('IconButtonDirective', () => {
  it('should create an instance', () => {
    const directive = new IconButtonDirective(inject(ElementRef));
    expect(directive).toBeTruthy();
  });
});
